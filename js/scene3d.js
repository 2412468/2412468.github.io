import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const canvas = document.getElementById('hero3d');
if (canvas && canvas.dataset.inited !== '1') {
  canvas.dataset.inited = '1';
  init(canvas);
}

function init(canvas) {
  const FX = new URLSearchParams(location.search).get('fx') || 'all';
  const has = (k) => FX === 'all' || FX.split(',').indexOf(k) >= 0;
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || window.innerWidth < 720;
  const QUALITY = isMobile ? 0.55 : 1.0;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.6));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a0a1c, 0.016);

  const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 600);
  camera.position.set(0.0, 0.78, 8.6);
  camera.lookAt(-0.4, 4.6, -30);

  const BH = new THREE.Vector3(15.5, 7.6, -34);
  const BH_RADIUS = 3.2;

  /* ---------- 天空 ---------- */
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { uTime: { value: 0 } },
    vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: [
      'varying vec3 vP;',
      'void main(){',
      '  vec3 d = normalize(vP);',
      '  float h = clamp(d.y * 0.5 + 0.5, 0.0, 1.0);',
      '  vec3 low = vec3(0.030, 0.020, 0.055);',
      '  vec3 mid = vec3(0.014, 0.016, 0.040);',
      '  vec3 top = vec3(0.004, 0.005, 0.014);',
      '  vec3 col = mix(low, mid, smoothstep(0.35, 0.62, h));',
      '  col = mix(col, top, smoothstep(0.6, 1.0, h));',
      '  float glow = pow(max(0.0, 1.0 - abs(d.x - 0.28) * 1.6), 6.0) * 0.10;',
      '  col += vec3(0.20, 0.12, 0.30) * glow;',
      '  gl_FragColor = vec4(col, 1.0);',
      '}'
    ].join('\n')
  });
  scene.add(new THREE.Mesh(new THREE.SphereGeometry(300, 32, 24), skyMat));

  /* ---------- 星空 ---------- */
  const starCount = Math.round(2600 * QUALITY);
  const starPos = new Float32Array(starCount * 3);
  const starSize = new Float32Array(starCount);
  const starCol = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const u = Math.random() * Math.PI * 2;
    const v = Math.acos(2 * Math.random() - 1);
    const r = 180 + Math.random() * 80;
    starPos[i*3]   = Math.sin(v) * Math.cos(u) * r;
    starPos[i*3+1] = Math.abs(Math.cos(v)) * r * 0.85;
    starPos[i*3+2] = Math.sin(v) * Math.sin(u) * r;
    starSize[i] = 0.6 + Math.random() * 2.2;
    const t = Math.random();
    if (t < 0.76) { starCol[i*3]=1; starCol[i*3+1]=1; starCol[i*3+2]=1; }
    else if (t < 0.9) { starCol[i*3]=0.72; starCol[i*3+1]=0.84; starCol[i*3+2]=1; }
    else { starCol[i*3]=1; starCol[i*3+1]=0.78; starCol[i*3+2]=0.88; }
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  starGeo.setAttribute('aSize', new THREE.BufferAttribute(starSize, 1));
  starGeo.setAttribute('aColor', new THREE.BufferAttribute(starCol, 3));
  const starMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    uniforms: { uTime: { value: 0 }, uPixelRatio: { value: renderer.getPixelRatio() } },
    vertexShader: [
      'attribute float aSize; attribute vec3 aColor;',
      'uniform float uTime; uniform float uPixelRatio;',
      'varying vec3 vC; varying float vTw;',
      'void main(){',
      '  vC = aColor;',
      '  vTw = 0.65 + 0.35 * sin(uTime * 1.3 + aSize * 9.0);',
      '  vec4 mv = modelViewMatrix * vec4(position, 1.0);',
      '  gl_Position = projectionMatrix * mv;',
      '  gl_PointSize = aSize * uPixelRatio * (150.0 / -mv.z);',
      '}'
    ].join('\n'),
    fragmentShader: [
      'varying vec3 vC; varying float vTw;',
      'void main(){',
      '  vec2 d = gl_PointCoord - 0.5;',
      '  float a = smoothstep(0.5, 0.0, length(d));',
      '  gl_FragColor = vec4(vC * a * vTw, a * vTw);',
      '}'
    ].join('\n')
  });
  scene.add(new THREE.Points(starGeo, starMat));

  /* ---------- 地面 ---------- */
  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(240, 48),
    new THREE.MeshStandardMaterial({ color: 0x120e20, roughness: 0.95, metalness: 0.0 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.02;
  scene.add(ground);

  /* ---------- 紫罗兰花海 ---------- */
  function makeVioletGeometry() {
    const pos = [], cls = [];
    const VB = [0.46, 0.13, 0.58];   // 花瓣根部（深紫）
    const VT = [0.96, 0.70, 1.00];   // 花瓣尖端（浅紫）
    const CC = [0.98, 0.76, 0.24];   // 花心（黄）
    const CS = [0.10, 0.24, 0.14];   // 茎叶（暗绿）
    const HEAD = 0.185;

    function tri(a, b, c, ca2, cb, cc) {
      pos.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
      cls.push(ca2[0], ca2[1], ca2[2], cb[0], cb[1], cb[2], cc[0], cc[1], cc[2]);
    }
    function mix(u, v, t) { return [u[0]+(v[0]-u[0])*t, u[1]+(v[1]-u[1])*t, u[2]+(v[2]-u[2])*t]; }
    function rotY(p, ca, sa) { return [p[0]*ca + p[2]*sa, p[1], -p[0]*sa + p[2]*ca]; }

    /* 5 片花瓣，每片 4 段，杯状弯曲、圆头 */
    const SEG = 4, PLEN = 0.062, BASE_R = 0.008;
    for (let p = 0; p < 5; p++) {
      const ang = p * (Math.PI * 2 / 5) + 0.18;
      const ca = Math.cos(ang), sa = Math.sin(ang);
      const rows = [];
      for (let s = 0; s <= SEG; s++) {
        const t = s / SEG;
        const r = BASE_R + t * PLEN;
        const hw = 0.020 * Math.sin(Math.PI * (0.14 + 0.86 * t)) * (1 - Math.pow(t, 4) * 0.50);
        const cup = 0.020 * Math.sin(t * Math.PI);
        const lift = 0.030 * Math.sin(t * 1.9) - 0.055 * t * t;
        const y = HEAD + lift + cup;
        const L = rotY([-hw, y, r], ca, sa);
        const R = rotY([ hw, y, r], ca, sa);
        rows.push({ L: L, R: R, t: t });
      }
      for (let s = 0; s < SEG; s++) {
        const a0 = rows[s], a1 = rows[s+1];
        const c0 = mix(VB, VT, a0.t), c1 = mix(VB, VT, a1.t);
        tri(a0.L, a0.R, a1.R, c0, c0, c1);
        tri(a0.L, a1.R, a1.L, c0, c1, c1);
      }
    }

    /* 花心：小圆盘 + 一点隆起 */
    const CS_ = 8, cr = 0.017;
    for (let i = 0; i < CS_; i++) {
      const a1 = (i / CS_) * Math.PI * 2, a2 = ((i + 1) / CS_) * Math.PI * 2;
      tri(
        [0, HEAD + 0.012, 0],
        [Math.cos(a2) * cr, HEAD + 0.002, Math.sin(a2) * cr],
        [Math.cos(a1) * cr, HEAD + 0.002, Math.sin(a1) * cr],
        CC, CC, CC
      );
    }

    /* 花茎：三棱柱 */
    const SR = 0.005;
    for (let i = 0; i < 3; i++) {
      const a1 = (i / 3) * Math.PI * 2, a2 = ((i + 1) / 3) * Math.PI * 2;
      const p1 = [Math.cos(a1) * SR, 0, Math.sin(a1) * SR];
      const p2 = [Math.cos(a2) * SR, 0, Math.sin(a2) * SR];
      const p3 = [Math.cos(a1) * SR * 0.8, HEAD - 0.01, Math.sin(a1) * SR * 0.8];
      const p4 = [Math.cos(a2) * SR * 0.8, HEAD - 0.01, Math.sin(a2) * SR * 0.8];
      tri(p1, p2, p4, CS, CS, CS);
      tri(p1, p4, p3, CS, CS, CS);
    }

    /* 两片叶子 */
    function leaf(hy, ang, lg, wd) {
      const ca = Math.cos(ang), sa = Math.sin(ang);
      const a = [0, hy, 0];
      const b = rotY([wd, hy + lg * 0.42, lg * 0.55], ca, sa);
      const c = rotY([0, hy + lg * 0.85, lg], ca, sa);
      const d = rotY([-wd, hy + lg * 0.42, lg * 0.55], ca, sa);
      const g1 = [CS[0] * 1.25, CS[1] * 1.35, CS[2] * 1.2];
      tri(a, b, c, CS, g1, CS);
      tri(a, c, d, CS, g1, CS);
    }
    leaf(0.055, 0.9, 0.085, 0.017);
    leaf(0.105, 3.6, 0.075, 0.015);

    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(cls, 3));
    g.computeVertexNormals();
    return g;
  }

  const flowerMat = new THREE.MeshStandardMaterial({
    color: 0xffffff, roughness: 0.72, metalness: 0.0, side: THREE.DoubleSide,
    vertexColors: true,
    emissive: new THREE.Color(0x4a2470), emissiveIntensity: 0.55
  });
  const FLOWERS = Math.round(28000 * QUALITY);
  const flowers = new THREE.InstancedMesh(makeVioletGeometry(), flowerMat, FLOWERS);
  const dummy = new THREE.Object3D();
  const col = new THREE.Color();
  for (let i = 0; i < FLOWERS; i++) {
    const d = Math.pow(Math.random(), 0.8);
    const zPos = 4.2 - d * 31.0;
    const halfW = 2.8 + (-zPos + 4.2) * 0.85;
    dummy.position.set((Math.random() * 2 - 1) * halfW, 0, zPos);
    dummy.rotation.set((Math.random() - 0.5) * 0.28, Math.random() * Math.PI * 2, (Math.random() - 0.5) * 0.28);
    const near = Math.max(0, 1 - (4.2 - zPos) / 10.0);
    const s = (0.62 + Math.random() * 0.6) * (1.0 + near * 0.6);
    dummy.scale.set(s, s * (0.85 + Math.random() * 0.45), s);
    dummy.updateMatrix();
    flowers.setMatrixAt(i, dummy.matrix);
    const v = 0.82 + Math.random() * 0.36;
    col.setRGB(v, v * (0.94 + Math.random() * 0.12), v * (0.98 + Math.random() * 0.16));
    flowers.setColorAt(i, col);
  }
  flowers.instanceMatrix.needsUpdate = true;
  if (flowers.instanceColor) flowers.instanceColor.needsUpdate = true;
  scene.add(flowers);

  /* ---------- 宇航员 ---------- */
  const astro = new THREE.Group();
  const suitMat = new THREE.MeshStandardMaterial({ color: 0xe0dcec, roughness: 0.35, metalness: 0.02 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x14141c, roughness: 0.42, metalness: 0.55 });
  const visorMat = new THREE.MeshStandardMaterial({ color: 0x090a12, roughness: 0.08, metalness: 0.95 });
  function part(geo, mat, p, s, r) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(p[0], p[1], p[2]);
    if (s) m.scale.set(s[0], s[1], s[2]);
    if (r) m.rotation.set(r[0], r[1], r[2]);
    astro.add(m);
    return m;
  }
  const sph = new THREE.SphereGeometry(1, 24, 16);
  const cyl = new THREE.CylinderGeometry(1, 1, 1, 16);
  const box = new THREE.BoxGeometry(1, 1, 1);
  part(sph, suitMat, [0, 0.60, 0], [0.25, 0.30, 0.21]);
  part(box, darkMat, [0, 0.60, -0.20], [0.34, 0.34, 0.16]);
  part(sph, suitMat, [0, 0.96, 0.02], [0.225, 0.225, 0.225]);
  part(sph, visorMat, [0, 0.95, 0.15], [0.165, 0.13, 0.155]);
  part(cyl, darkMat, [0, 0.78, 0], [0.145, 0.05, 0.145]);
  part(cyl, suitMat, [-0.14, 0.38, 0.22], [0.11, 0.40, 0.11], [Math.PI/2, 0, 0]);
  part(cyl, suitMat, [ 0.14, 0.38, 0.22], [0.11, 0.40, 0.11], [Math.PI/2, 0, 0]);
  part(cyl, suitMat, [-0.14, 0.20, 0.44], [0.095, 0.34, 0.095], [Math.PI/2 - 0.20, 0, 0]);
  part(cyl, suitMat, [ 0.14, 0.20, 0.44], [0.095, 0.34, 0.095], [Math.PI/2 - 0.20, 0, 0]);
  part(sph, darkMat, [-0.14, 0.055, 0.58], [0.10, 0.065, 0.13]);
  part(sph, darkMat, [ 0.14, 0.055, 0.58], [0.10, 0.065, 0.13]);
  part(cyl, suitMat, [-0.30, 0.58, -0.04], [0.08, 0.30, 0.08], [0.55, 0, 0.28]);
  part(cyl, suitMat, [ 0.30, 0.58, -0.04], [0.08, 0.30, 0.08], [0.55, 0, -0.28]);
  part(sph, darkMat, [-0.39, 0.32, -0.21], [0.07, 0.07, 0.07]);
  part(sph, darkMat, [ 0.39, 0.32, -0.21], [0.07, 0.07, 0.07]);
  astro.position.set(-3.2, 0, -5.4);
  astro.rotation.y = -0.42;
  scene.add(astro);

  /* ---------- 黑洞 ---------- */
  const bhGroup = new THREE.Group();
  bhGroup.position.copy(BH);
  scene.add(bhGroup);
  bhGroup.add(new THREE.Mesh(new THREE.SphereGeometry(BH_RADIUS, 48, 32), new THREE.MeshBasicMaterial({ color: 0x000000 })));

  const diskMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uInner: { value: BH_RADIUS * 1.28 }, uOuter: { value: BH_RADIUS * 2.95 } },
    vertexShader: 'varying vec3 vPos; void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: [
      'varying vec3 vPos;',
      'uniform float uTime; uniform float uInner; uniform float uOuter;',
      'float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }',
      'float noise(vec2 p){',
      '  vec2 i = floor(p), f = fract(p);',
      '  vec2 u = f*f*(3.0-2.0*f);',
      '  return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), u.x), mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), u.x), u.y);',
      '}',
      'void main(){',
      '  float r = length(vPos.xy);',
      '  float ang = atan(vPos.y, vPos.x);',
      '  float edge = smoothstep(uOuter, uInner * 1.35, r) * smoothstep(uInner * 0.62, uInner * 1.02, r);',
      '  float swirl = noise(vec2(ang * 6.0 + r * 0.7 - uTime * 0.35, r * 1.6));',
      '  float swirl2 = noise(vec2(ang * 14.0 - uTime * 0.55, r * 3.2));',
      '  float bands = 0.45 + 0.75 * noise(vec2(r * 3.4 - uTime * 0.55, ang * 3.0 + swirl2 * 4.0));',
      '  float heat = pow(clamp(1.0 - (r - uInner) / (uOuter - uInner), 0.0, 1.0), 1.7);',
      '  vec3 hot = vec3(1.0, 0.95, 0.86);',
      '  vec3 warm = vec3(1.0, 0.62, 0.18);',
      '  vec3 cool = vec3(0.62, 0.16, 0.05);',
      '  vec3 c = mix(cool, warm, heat);',
      '  c = mix(c, hot, pow(heat, 2.2));',
      '  c *= (0.55 + 0.9 * swirl) * bands * 4.6;',
      '  float alpha = edge * (0.35 + 0.65 * heat);',
      '  gl_FragColor = vec4(c, alpha);',
      '}'
    ].join('\n')
  });
  const disk = new THREE.Mesh(new THREE.RingGeometry(BH_RADIUS * 1.28, BH_RADIUS * 2.95, 200, 10), diskMat);
  disk.rotation.x = -Math.PI / 2 + 0.78;
  disk.rotation.z = 0.12;
  bhGroup.add(disk);

  function glowTexture() {
    const s = 256, cv = document.createElement('canvas');
    cv.width = cv.height = s;
    const c = cv.getContext('2d');
    const g = c.createRadialGradient(s/2, s/2, 0, s/2, s/2, s/2);
    g.addColorStop(0.0, 'rgba(255,240,210,1)');
    g.addColorStop(0.18, 'rgba(255,190,110,0.85)');
    g.addColorStop(0.45, 'rgba(255,130,60,0.28)');
    g.addColorStop(1.0, 'rgba(255,90,40,0)');
    c.fillStyle = g;
    c.fillRect(0, 0, s, s);
    const t = new THREE.CanvasTexture(cv);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, opacity: 0.10 }));
  halo.scale.set(BH_RADIUS * 2.2, BH_RADIUS * 2.2, 1);
  // 光晕改用 bloom 实现，这里不再叠加 sprite
  // bhGroup.add(halo);

  /* ---------- 灯光 ---------- */
  const bhLight = new THREE.PointLight(0xffb877, 5200, 0, 2);
  bhLight.position.copy(BH);
  scene.add(bhLight);
  const fill = new THREE.DirectionalLight(0x5a6bff, 0.55);
  fill.position.set(-12, 9, -2);
  scene.add(fill);
  scene.add(new THREE.AmbientLight(0x30284f, 0.55));

  /* ---------- 体积雾层 ---------- */
  const fogMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, fog: false,
    uniforms: { uTime: { value: 0 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: [
      'varying vec2 vUv;',
      'uniform float uTime;',
      'float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }',
      'float noise(vec2 p){',
      '  vec2 i = floor(p), f = fract(p);',
      '  vec2 u = f*f*(3.0-2.0*f);',
      '  return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), u.x), mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), u.x), u.y);',
      '}',
      'void main(){',
      '  float n = noise(vUv * 3.0 + vec2(uTime * 0.03, uTime * 0.015)) * 0.6',
      '          + noise(vUv * 7.0 - vec2(uTime * 0.05, 0.0)) * 0.4;',
      '  float edge = smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.55, vUv.y);',
      '  float a = smoothstep(0.35, 0.95, n) * edge * 0.14;',
      '  gl_FragColor = vec4(vec3(0.55, 0.48, 0.75) * a, a);',
      '}'
    ].join('\n')
  });
  for (let i = 0; i < 4; i++) {
    const fp = new THREE.Mesh(new THREE.PlaneGeometry(120, 26), fogMat);
    fp.position.set(0, 4.5 + i * 3.2, -18 - i * 10);
    scene.add(fp);
  }

  /* ---------- 后期 ---------- */
  const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType });
  const composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));

  /* 景深：屏幕空间近似——近景花海虚化，远处黑洞保持清晰 */
  const dofPass = new ShaderPass({
    uniforms: {
      tDiffuse: { value: null },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uAmount: { value: 0.55 }
    },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: [
      'uniform sampler2D tDiffuse; uniform vec2 uResolution; uniform float uAmount;',
      'varying vec2 vUv;',
      'void main(){',
      '  vec3 sharp = texture2D(tDiffuse, vUv).rgb;',
      '  float m = smoothstep(0.40, 1.0, 1.0 - vUv.y);',
      '  m = pow(m, 1.5) * 0.9 * uAmount;',
      '  if (m < 0.008) { gl_FragColor = vec4(sharp, 1.0); return; }',
      '  vec3 sum = vec3(0.0); float ws = 0.0;',
      '  for (int i = 0; i < 16; i++){',
      '    float fi = float(i);',
      '    float a = fi * 0.3926991;',
      '    float rr = (0.25 + 0.75 * fract(fi * 0.618034)) * 7.5 * m;',
      '    vec2 off = vec2(cos(a), sin(a)) * rr / uResolution;',
      '    sum += texture2D(tDiffuse, vUv + off).rgb;',
      '    ws += 1.0;',
      '  }',
      '  gl_FragColor = vec4(mix(sharp, sum / ws, m), 1.0);',
      '}'
    ].join('\n')
  });
  if (has('dof')) composer.addPass(dofPass);

  const lensPass = new ShaderPass({
    uniforms: {
      tDiffuse: { value: null },
      uCenter: { value: new THREE.Vector2(0.5, 0.5) },
      uAspect: { value: 1.0 },
      uShadow: { value: 0.07 },
      uLens: { value: 0.0062 },
      uTime: { value: 0.0 }
    },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: [
      'uniform sampler2D tDiffuse; uniform vec2 uCenter; uniform float uAspect;',
      'uniform float uShadow; uniform float uLens; uniform float uTime;',
      'varying vec2 vUv;',
      'void main(){',
      '  vec2 d = vUv - uCenter; d.x *= uAspect;',
      '  float r = length(d);',
      '  if (r < uShadow) {',
      '    float t = clamp((r - uShadow * 0.985) / (uShadow * 0.018), 0.0, 1.0);',
      '    float ring = pow(t, 3.0);',
      '    vec3 pc = vec3(1.0, 0.84, 0.60) * ring * 0.55;',
      '    gl_FragColor = vec4(pc, 1.0);',
      '    return;',
      '  }',
      '  float bend = uLens / max(r, 0.001);',
      '  vec2 dir = d / max(r, 0.0001);',
      '  dir.x /= uAspect;',
      '  vec2 uv2 = clamp(vUv - dir * bend, 0.001, 0.999);',
      '  vec3 col = texture2D(tDiffuse, uv2).rgb;',
      '  float ringGlow = exp(-pow((r - uShadow * 1.10) / (uShadow * 0.10), 2.0));',
      '  col += vec3(1.0, 0.80, 0.52) * ringGlow * 0.6;',
      '  gl_FragColor = vec4(col, 1.0);',
      '}'
    ].join('\n')
  });
  if (has('lens')) composer.addPass(lensPass);

  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.32, 0.6, 1.0);
  if (has('bloom')) composer.addPass(bloom);
  composer.addPass(new OutputPass());

  /* ---------- 尺寸 ---------- */
  function resize() {
    const w = canvas.clientWidth || canvas.offsetWidth;
    const h = canvas.clientHeight || canvas.offsetHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    dofPass.uniforms.uResolution.value.set(w, h);
  }
  let bootTries = 0;
  (function boot() {
    bootTries++;
    const w = canvas.clientWidth || canvas.offsetWidth;
    const h = canvas.clientHeight || canvas.offsetHeight;
    if (w && h) { resize(); start(); return; }
    if (bootTries < 180) requestAnimationFrame(boot);
    else start();
  })();
  window.addEventListener('resize', resize);
  window.addEventListener('load', resize);
  if ('ResizeObserver' in window) new ResizeObserver(function () { resize(); }).observe(canvas);

  /* ---------- 循环 ---------- */
  const clock = new THREE.Clock();
  let raf = null, running = false;
  let mouseX = 0, mouseY = 0, curX = 0, curY = 0;
  const tmp = new THREE.Vector3();

  function frame() {
    const t = clock.getElapsedTime();
    curX += (mouseX - curX) * 0.04;
    curY += (mouseY - curY) * 0.04;
    camera.position.x = curX * 0.9;
    camera.position.y = 0.78 + curY * 0.26;
    camera.lookAt(-0.4, 4.6, -30);

    skyMat.uniforms.uTime.value = t;
    starMat.uniforms.uTime.value = t;
    diskMat.uniforms.uTime.value = t;
    fogMat.uniforms.uTime.value = t;
    lensPass.uniforms.uTime.value = t;

    tmp.copy(BH).project(camera);
    lensPass.uniforms.uCenter.value.set(tmp.x * 0.5 + 0.5, tmp.y * 0.5 + 0.5);
    lensPass.uniforms.uAspect.value = camera.aspect;
    const dist = camera.position.distanceTo(BH);
    lensPass.uniforms.uShadow.value = (BH_RADIUS / dist) / Math.tan((camera.fov * Math.PI / 180) / 2) * 0.95;

    composer.render();
    raf = requestAnimationFrame(frame);
  }

  function start() { if (!running) { running = true; clock.start(); frame(); } }
  function stop() { running = false; if (raf) cancelAnimationFrame(raf); raf = null; }

  window.addEventListener('mousemove', function (e) {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); else start(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) start(); else stop(); });
    }, { threshold: 0 }).observe(canvas);
  }
  start();
}