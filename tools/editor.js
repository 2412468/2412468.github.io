(function(){
  var state = { id:null, draft:true, dirty:false, previewOn:false, posts:[], drafts:[] };
  function $(s){ return document.querySelector(s); }
  function el(tag, cls, txt){ var e=document.createElement(tag); if(cls) e.className=cls; if(txt!==undefined) e.textContent=txt; return e; }
  function setStatus(msg, kind){ var s=$("#status"); s.textContent=msg; s.className="status"+(kind?" "+kind:""); }
  function pad(n){ return n<10 ? "0"+n : ""+n; }
  function nowStr(){ var d=new Date(); return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate())+" "+pad(d.getHours())+":"+pad(d.getMinutes())+":"+pad(d.getSeconds()); }
  function api(path, opts){ return fetch(path, opts).then(function(r){ return r.json(); }); }

  function loadList(){
    return api("/api/list").then(function(d){ state.posts=d.posts||[]; state.drafts=d.drafts||[]; renderList(); });
  }

  function renderList(){
    var q = ($("#q").value||"").toLowerCase();
    var box = $("#list"); box.innerHTML="";
    function addGroup(title, arr){
      var filtered = arr.filter(function(p){ return !q || (p.title||"").toLowerCase().indexOf(q)>=0; });
      if(!filtered.length) return;
      box.appendChild(el("div","group-title",title));
      filtered.forEach(function(p){
        var it = el("div","item");
        if(state.id === p.id) it.className += " active";
        it.appendChild(el("div","t", p.title));
        var m = el("div","m");
        m.appendChild(el("span", null, (p.date||"").slice(0,16)));
        if(p.draft) m.appendChild(el("span","badge","草稿"));
        if(p.tags && p.tags.length) m.appendChild(el("span", null, "#"+p.tags.join(" #")));
        it.appendChild(m);
        it.onclick = function(){ openFile(p); };
        box.appendChild(it);
      });
    }
    addGroup("草稿", state.drafts);
    addGroup("已发布", state.posts);
    if(!box.children.length) box.appendChild(el("div","empty","还没有文章，点右上角「＋ 新建」开始写"));
  }

  function fill(f){
    $("#title").value = f.title||"";
    $("#date").value = f.date||nowStr();
    $("#tags").value = (f.tags||[]).join(", ");
    $("#cats").value = (f.categories||[]).join(", ");
    $("#body").value = f.body||"";
    updateWords();
    if(state.previewOn) renderPreview();
  }

  function openFile(p){
    if(state.dirty && !confirm("当前内容还没保存，确定切换吗？")) return;
    api("/api/file?id="+encodeURIComponent(p.id)).then(function(d){
      state.id=p.id; state.draft=!!p.draft;
      fill(d.parsed);
      state.dirty=false;
      $("#sync").textContent="已保存";
      setStatus("打开："+p.title,"ok");
      renderList();
    });
  }

  function collect(){
    function splitTags(v){ return (v||"").split(/[,，]/).map(function(s){ return s.trim(); }).filter(Boolean); }
    return {
      id: state.id,
      draft: state.draft,
      title: $("#title").value.trim(),
      date: $("#date").value.trim() || nowStr(),
      tags: splitTags($("#tags").value),
      categories: splitTags($("#cats").value),
      body: $("#body").value
    };
  }

  function save(asDraft){
    var d = collect();
    if(!d.title){ setStatus("请先填标题","err"); $("#title").focus(); return Promise.resolve(false); }
    if(asDraft !== undefined) d.draft = asDraft;
    return api("/api/save",{ method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(d) })
      .then(function(res){
        state.id=res.id; state.draft=d.draft; state.dirty=false;
        $("#sync").textContent="已保存 "+res.saved;
        setStatus((d.draft?"草稿已保存":"已保存")+" · "+res.name,"ok");
        return loadList().then(function(){ return true; });
      });
  }

  function newPost(){
    if(state.dirty && !confirm("当前内容还没保存，确定新建吗？")) return;
    state.id=null; state.draft=true;
    fill({ title:"", date:nowStr(), tags:[], categories:[], body:"" });
    state.dirty=false;
    $("#sync").textContent="新草稿";
    setStatus("新建草稿，写完按 Ctrl+S 保存","ok");
    renderList(); $("#title").focus();
  }

  function del(){
    if(!state.id){ setStatus("没有选中的文章","warn"); return; }
    if(!confirm("确定删除？删了找不回来。")) return;
    api("/api/delete",{ method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({id:state.id}) })
      .then(function(){ state.id=null; state.dirty=false; fill({title:"",date:nowStr(),tags:[],categories:[],body:""}); setStatus("已删除","ok"); loadList(); });
  }

  function showModal(title, body){ $("#modal-title").textContent=title; $("#modal-body").textContent=body||""; $("#modal").className="modal show"; }

  function pollPublish(){
    api("/api/publish").then(function(st){
      $("#modal-body").textContent = st.log || "准备中…";
      var mb = $("#modal-body"); mb.scrollTop = mb.scrollHeight;
      if(st.running){ setTimeout(pollPublish, 1200); }
      else {
        setStatus(st.ok ? "发布成功，1~2 分钟后生效" : "发布失败，看弹窗日志", st.ok?"ok":"err");
        if(st.ok) mb.textContent += "\n\n[完成] https://2412468.github.io/";
      }
    });
  }

  function publish(){
    var chain = state.dirty ? save(state.draft) : Promise.resolve(true);
    chain.then(function(){
      if(!state.id){ setStatus("先写好文章再发布","warn"); return; }
      var d = collect(); d.draft = false;
      return api("/api/save",{ method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(d) })
        .then(function(res){ state.id=res.id; state.draft=false; state.dirty=false; return loadList(); })
        .then(function(){
          showModal("发布中","正在编译并推送到 GitHub，大约 30~60 秒…");
          return api("/api/publish",{ method:"POST", headers:{"Content-Type":"application/json"}, body:"{}" });
        })
        .then(function(){ pollPublish(); });
    });
  }

  function updateWords(){ $("#words").textContent = $("#body").value.length + " 字"; }
  function escapeHtml(s){ return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

  function mdToHtml(src){
    var lines = escapeHtml(src).split("\n");
    var out=[], buf=[], inCode=false, inList=false;
    function flush(){ if(buf.length){ out.push("<p>"+buf.join("<br>")+"</p>"); buf=[]; } }
    function closeList(){ if(inList){ out.push("</ul>"); inList=false; } }
    for(var i=0;i<lines.length;i++){
      var L = lines[i];
      if(L.indexOf("~~~")===0 || L.indexOf("```")===0){
        if(inCode){ out.push("</code></pre>"); inCode=false; } else { closeList(); flush(); out.push("<pre><code>"); inCode=true; }
        continue;
      }
      if(inCode){ out.push(L); continue; }
      if(/^\s*$/.test(L)){ closeList(); flush(); continue; }
      var h = L.match(/^(#{1,6})\s+(.*)$/);
      if(h){ closeList(); flush(); out.push("<h"+h[1].length+">"+h[2]+"</h"+h[1].length+">"); continue; }
      if(/^(-{3,}|\*{3,})\s*$/.test(L)){ closeList(); flush(); out.push("<hr>"); continue; }
      if(/^>/.test(L)){ closeList(); flush(); out.push("<blockquote>"+L.replace(/^>\s?/,"")+"</blockquote>"); continue; }
      if(/^\s*[-*+]\s+/.test(L)){
        flush(); if(!inList){ out.push("<ul>"); inList=true; }
        out.push("<li>"+L.replace(/^\s*[-*+]\s+/,"")+"</li>"); continue;
      }
      closeList(); buf.push(L);
    }
    flush(); closeList();
    if(inCode) out.push("</code></pre>");
    var html = out.join("\n");
    html = html.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>");
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,"<img alt=\"$1\" src=\"$2\">");
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g,"<a href=\"$2\" target=\"_blank\">$1</a>");
    return html;
  }

  function renderPreview(){ $("#preview").innerHTML = mdToHtml($("#body").value); }

  $("#btn-new").onclick = newPost;
  $("#btn-draft").onclick = function(){ save(true); };
  $("#btn-del").onclick = del;
  $("#btn-publish").onclick = publish;
  $("#btn-preview").onclick = function(){
    state.previewOn = !state.previewOn;
    $("#preview").className = state.previewOn ? "show" : "";
    $("#btn-preview").textContent = state.previewOn ? "编辑" : "预览";
    if(state.previewOn) renderPreview();
  };
  $("#modal-close").onclick = function(){ $("#modal").className="modal"; };
  $("#q").oninput = renderList;

  ["#title","#date","#tags","#cats","#body"].forEach(function(sel){
    var e = $(sel);
    e.addEventListener("input", function(){
      state.dirty = true;
      $("#sync").textContent = "未保存";
      setStatus("编辑中…");
      if(sel === "#body"){ updateWords(); if(state.previewOn) renderPreview(); }
    });
  });

  document.addEventListener("keydown", function(e){
    if((e.ctrlKey||e.metaKey) && e.key === "s"){ e.preventDefault(); save(true); }
    if((e.ctrlKey||e.metaKey) && e.key === "Enter"){ e.preventDefault(); publish(); }
  });

  window.addEventListener("beforeunload", function(e){ if(state.dirty){ e.preventDefault(); e.returnValue=""; } });

  setInterval(function(){ if(state.dirty && $("#title").value.trim()){ save(); } }, 8000);

  fill({ title:"", date:nowStr(), tags:[], categories:[], body:"" });
  loadList();
})();
