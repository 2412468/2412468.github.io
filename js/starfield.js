/* 3D 星空粒子背景（无依赖，纯 Canvas 实现）
 * 透视投影 + 缓慢旋转 + 鼠标视差 + 闪烁 + 偶发流星
 */
(function () {
  'use strict';

  var canvas = null, ctx = null, stars = [], shots = [];
  var W = 0, H = 0, dpr = 1, cx = 0, cy = 0;
  var raf = null, t0 = 0, mx = 0, my = 0, tmx = 0, tmy = 0;
  var reduced = false;
  var FOV = 820, Z_MIN = 300, Z_MAX = 1500;

  function rand(a, b) { return a + Math.random() * (b - a); }

  function build(n) {
    stars = [];
    for (var i = 0; i < n; i++) {
      var z = rand(Z_MIN, Z_MAX);
      var k = (z / FOV) * 1.35;                 /* 让星点在屏幕上铺得均匀 */
      var pick = Math.random();
      var big = Math.random() < 0.06;
      stars.push({
        x: rand(-1, 1) * (W / 2) * k,
        y: rand(-1, 1) * (H / 2) * k,
        z: z,
        size: big ? rand(1.8, 3.0) : rand(0.6, 1.6),
        big: big,
        phase: Math.random() * Math.PI * 2,
        speed: rand(0.3, 1.1),
        tint: pick < 0.76 ? 0 : (pick < 0.91 ? 1 : 2)
      });
    }
    stars.sort(function (a, b) { return b.z - a.z; });
  }

  function resize(force) {
    if (!canvas) return false;
    var w = canvas.clientWidth || canvas.offsetWidth;
    var h = canvas.clientHeight || canvas.offsetHeight;
    if (!w || !h) return false;
    if (!force && Math.abs(w - W) < 2 && Math.abs(h - H) < 2) return true;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = w; H = h;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cx = W / 2; cy = H / 2;
    build(Math.max(900, Math.min(2200, Math.round((W * H) / 850))));
    return true;
  }

  function colorFor(s, a) {
    if (s.tint === 1) return 'rgba(170, 208, 255,' + a + ')';
    if (s.tint === 2) return 'rgba(255, 186, 212,' + a + ')';
    return 'rgba(255, 255, 255,' + a + ')';
  }

  function spawnShot() {
    var fromLeft = Math.random() < 0.5;
    shots.push({
      x: fromLeft ? rand(0, W * 0.4) : rand(W * 0.6, W),
      y: rand(0, H * 0.5),
      vx: (fromLeft ? 1 : -1) * rand(6, 11),
      vy: rand(2, 4),
      life: 1
    });
  }

  function frame(now) {
    if (!t0) t0 = now;
    var t = (now - t0) / 1000;

    tmx = tmx + (mx - tmx) * 0.04;
    tmy = tmy + (my - tmy) * 0.04;

    var rot = t * 0.028 + tmx * 0.30;
    var tilt = tmy * 0.20;
    var cosR = Math.cos(rot), sinR = Math.sin(rot);
    var cosT = Math.cos(tilt), sinT = Math.sin(tilt);

    ctx.clearRect(0, 0, W, H);

    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];

      s.z -= 4.2 * (0.4 + i / stars.length);
      if (s.z < Z_MIN) {
        s.z = Z_MAX;
        var kk = (s.z / FOV) * 1.35;
        s.x = rand(-1, 1) * (W / 2) * kk;
        s.y = rand(-1, 1) * (H / 2) * kk;
      }

      var x1 = s.x * cosR - s.z * sinR;
      var z1 = s.x * sinR + s.z * cosR;
      var y1 = s.y * cosT - z1 * sinT;
      var z2 = s.y * sinT + z1 * cosT;
      if (z2 < 80) continue;

      var scale = FOV / z2;
      var sx = cx + x1 * scale;
      var sy = cy + y1 * scale;
      if (sx < -40 || sx > W + 40 || sy < -40 || sy > H + 40) continue;

      var depth = 1 - (s.z - Z_MIN) / (Z_MAX - Z_MIN);
      var tw = 0.72 + 0.28 * Math.sin(t * s.speed + s.phase);
      var alpha = Math.min(0.95, (0.32 + depth * 0.72) * tw);
      var size = Math.max(0.55, s.size * scale * 0.95);

      if (s.big) {
        ctx.beginPath();
        ctx.arc(sx, sy, size * 4.5, 0, 6.2832);
        ctx.fillStyle = colorFor(s, (alpha * 0.10).toFixed(3));
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(sx, sy, size, 0, 6.2832);
      ctx.fillStyle = colorFor(s, alpha.toFixed(3));
      ctx.fill();
    }

    if (Math.random() < 0.005 && shots.length < 3) spawnShot();
    for (var k = shots.length - 1; k >= 0; k--) {
      var sh = shots[k];
      sh.x += sh.vx; sh.y += sh.vy; sh.life -= 0.007;
      if (sh.life <= 0) { shots.splice(k, 1); continue; }
      var tailX = sh.x - sh.vx * 14, tailY = sh.y - sh.vy * 14;
      var grad = ctx.createLinearGradient(tailX, tailY, sh.x, sh.y);
      grad.addColorStop(0, 'rgba(255,255,255,0)');
      grad.addColorStop(1, 'rgba(255,255,255,' + (0.65 * sh.life).toFixed(3) + ')');
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(sh.x, sh.y);
      ctx.stroke();
    }

    raf = requestAnimationFrame(frame);
  }

  function start() {
    if (raf || reduced) return;
    if (!W || !H) { if (!resize(true)) return; }
    raf = requestAnimationFrame(frame);
  }
  function stop() {
    if (raf) { cancelAnimationFrame(raf); raf = null; }
  }

  function initStarfield() {
    var el = document.getElementById('starfield');
    if (!el || el.getAttribute('data-inited') === '1') return;
    el.setAttribute('data-inited', '1');

    canvas = el;
    ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var tries = 0;
    (function boot() {
      tries++;
      if (resize(true) || tries > 60) {
        if (reduced) { frame(performance.now()); stop(); }
        else start();
        return;
      }
      requestAnimationFrame(boot);
    })();

    window.addEventListener('resize', function () {
      clearTimeout(el._rz);
      el._rz = setTimeout(function () { resize(); }, 160);
    });
    window.addEventListener('load', function () { resize(); });

    if ('ResizeObserver' in window) new ResizeObserver(function () { resize(); }).observe(canvas);

    window.addEventListener('mousemove', function (e) {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else start();
    });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) start(); else stop(); });
      }, { threshold: 0 }).observe(canvas);
    }
  }

  if (document.readyState !== 'loading') initStarfield();
  else document.addEventListener('DOMContentLoaded', initStarfield);
  document.addEventListener('pjax:complete', initStarfield);
})();
