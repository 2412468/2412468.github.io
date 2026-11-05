# -*- coding: utf-8 -*-
"""
文章编辑器 后端服务（纯标准库，无第三方依赖）
启动: python editor-server.py  然后浏览器打开 http://127.0.0.1:4100
"""
import json, os, re, subprocess, sys, threading, time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse, parse_qs

BASE = Path(__file__).resolve().parent.parent          # blog/
POSTS = BASE / "source" / "_posts"
DRAFTS = BASE / "source" / "_drafts"
TOOLS = Path(__file__).resolve().parent
PUBLIC = BASE / "public"
DEPLOY = BASE / ".deploy"
PORT = 4100
SITE = "https://2412468.github.io/"

POSTS.mkdir(parents=True, exist_ok=True)
DRAFTS.mkdir(parents=True, exist_ok=True)

FM = re.compile(r"^---\r?\n(.*?)\r?\n---\r?\n?", re.S)


def parse_tags(raw):
    raw = (raw or "").strip()
    if raw.startswith("[") and raw.endswith("]"):
        raw = raw[1:-1]
    return [t.strip().strip("'\"") for t in raw.split(",") if t.strip()]


def parse_md(text):
    meta, body = {}, text
    m = FM.match(text)
    if m:
        body = text[m.end():]
        for line in m.group(1).splitlines():
            if ":" in line:
                k, v = line.split(":", 1)
                meta[k.strip().lower()] = v.strip()
    return {
        "title": meta.get("title", ""),
        "date": meta.get("date", ""),
        "tags": parse_tags(meta.get("tags", "")),
        "categories": parse_tags(meta.get("categories", "")),
        "body": body,
    }


def build_md(title, date, tags, categories, body):
    tag_s = "[" + ", ".join(tags) + "]" if tags else "[]"
    cat_s = "[" + ", ".join(categories) + "]" if categories else "[]"
    return "---\ntitle: %s\ndate: %s\ntags: %s\ncategories: %s\n---\n\n%s" % (
        title, date, tag_s, cat_s, body)


def safe_name(title):
    s = re.sub(r'[\\/:*?"<>|\s]+', "-", title)
    s = re.sub(r'[：？，。！；、“”‘’（）【】《》]+', "-", s)
    s = re.sub(r"-{2,}", "-", s).strip("-")
    return s or "untitled"


def resolve(item_id):
    """把前端给的 id 解析成绝对路径，限制在两个目录内"""
    p = (BASE / item_id).resolve()
    for root in (POSTS, DRAFTS):
        try:
            p.relative_to(root.resolve())
            return p
        except ValueError:
            pass
    return None


def scan(folder, is_draft):
    out = []
    if not folder.exists():
        return out
    for f in sorted(folder.glob("*.md"), key=lambda x: x.stat().st_mtime, reverse=True):
        try:
            data = parse_md(f.read_text(encoding="utf-8"))
        except Exception:
            continue
        out.append({
            "id": str(f.relative_to(BASE)).replace("\\", "/"),
            "name": f.name,
            "title": data["title"] or f.stem,
            "date": data["date"],
            "tags": data["tags"],
            "draft": is_draft,
            "mtime": int(f.stat().st_mtime),
            "words": len(data["body"]),
        })
    return out


PUBLISH = {"running": False, "log": "", "ok": None, "started": 0}


def free_port(port):
    """关掉占用该端口的进程（多半是我们自己的本地预览服务）"""
    pids = set()
    try:
        out = subprocess.run(["netstat", "-ano"], capture_output=True, text=True,
                             encoding="utf-8", errors="replace", timeout=30).stdout
        for line in out.splitlines():
            parts = line.split()
            if len(parts) >= 5 and parts[-1].isdigit() and ("LISTENING" in line.upper()):
                if (":" + str(port)) in parts[1]:
                    pids.add(parts[-1])
    except Exception:
        return 0
    for pid in pids:
        try:
            subprocess.run(["taskkill", "/PID", pid, "/F"], capture_output=True, timeout=20)
        except Exception:
            pass
    return len(pids)


def run_publish():
    PUBLISH.update({"running": True, "log": "", "ok": None, "started": time.time()})
    lines = []
    def step(msg):
        lines.append(msg)
        PUBLISH["log"] = "\n".join(lines)
    try:
        freed = free_port(4000)
        if freed:
            step("已关闭本地预览（释放文件锁）")
        step("开始构建并推送 source 分支 …")
        ps1 = TOOLS / "publish.ps1"
        p = subprocess.Popen(
            ["powershell", "-NoProfile", "-ExecutionPolicy", "Bypass", "-File", str(ps1), "-NoOpen"],
            cwd=str(BASE), stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
            text=True, encoding="utf-8", errors="replace", bufsize=1)
        for line in p.stdout:
            line = line.rstrip()
            if line:
                step(line)
        p.wait()
        if p.returncode == 0:
            step("")
            step("[完成] GitHub 正在编译，约 1~2 分钟后生效：" + SITE)
            PUBLISH["ok"] = True
        else:
            step("[X] 发布失败，检查上面的日志")
            PUBLISH["ok"] = False
    except Exception as e:
        step("[X] " + str(e))
        PUBLISH["ok"] = False
    finally:
        PUBLISH["running"] = False


class Handler(BaseHTTPRequestHandler):
    def log_message(self, *a):
        pass

    def _send(self, code, body, ctype="application/json; charset=utf-8"):
        if isinstance(body, (dict, list)):
            body = json.dumps(body, ensure_ascii=False)
        data = body.encode("utf-8") if isinstance(body, str) else body
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self):
        u = urlparse(self.path)
        if u.path in ("/", "/index.html"):
            html = (TOOLS / "editor.html").read_text(encoding="utf-8")
            self._send(200, html, "text/html; charset=utf-8")
            return
        if u.path == "/favicon.ico":
            self._send(204, "", "image/x-icon")
            return
        if u.path == "/editor.css":
            self._send(200, (TOOLS / "editor.css").read_text(encoding="utf-8"), "text/css; charset=utf-8")
            return
        if u.path == "/editor.js":
            self._send(200, (TOOLS / "editor.js").read_text(encoding="utf-8"), "application/javascript; charset=utf-8")
            return
        if u.path == "/api/list":
            self._send(200, {"posts": scan(POSTS, False), "drafts": scan(DRAFTS, True), "site": SITE})
            return
        if u.path == "/api/file":
            q = parse_qs(u.query)
            p = resolve(q.get("id", [""])[0])
            if not p or not p.exists():
                self._send(404, {"error": "not found"}); return
            self._send(200, {"raw": p.read_text(encoding="utf-8"), "parsed": parse_md(p.read_text(encoding="utf-8"))})
            return
        if u.path == "/api/publish":
            self._send(200, PUBLISH)
            return
        self._send(404, {"error": "no route"})

    def do_POST(self):
        u = urlparse(self.path)
        n = int(self.headers.get("Content-Length") or 0)
        try:
            payload = json.loads(self.rfile.read(n).decode("utf-8")) if n else {}
        except Exception:
            payload = {}

        if u.path == "/api/save":
            draft = bool(payload.get("draft"))
            title = (payload.get("title") or "").strip() or "无标题"
            date = (payload.get("date") or "").strip() or time.strftime("%Y-%m-%d %H:%M:%S")
            tags = payload.get("tags") or []
            cats = payload.get("categories") or []
            body = payload.get("body") or ""
            old = payload.get("id")
            folder = DRAFTS if draft else POSTS
            name = safe_name(title) + ".md"
            target = folder / name
            if old:
                oldp = resolve(old)
                if oldp and oldp.exists() and oldp != target:
                    try: oldp.unlink()
                    except Exception: pass
            target.write_text(build_md(title, date, tags, cats, body), encoding="utf-8")
            self._send(200, {"id": str(target.relative_to(BASE)).replace("\\", "/"), "name": name, "saved": time.strftime("%H:%M:%S")})
            return

        if u.path == "/api/delete":
            p = resolve(payload.get("id", ""))
            if p and p.exists():
                p.unlink()
                self._send(200, {"ok": True})
            else:
                self._send(404, {"error": "not found"})
            return

        if u.path == "/api/publish":
            if not PUBLISH["running"]:
                threading.Thread(target=run_publish, daemon=True).start()
            self._send(200, {"started": True})
            return

        self._send(404, {"error": "no route"})


def main():
    srv = ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
    print("editor server on http://127.0.0.1:%d" % PORT)
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
