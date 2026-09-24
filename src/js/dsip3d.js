// Visor 3D del nodo DSIP con estilo de ilustración técnica isométrica:
// sombreado plano, trazo de tinta y etiquetas con flechas, como el diagrama de referencia.
import {
  Scene, OrthographicCamera, WebGLRenderer, Color, HemisphereLight, DirectionalLight,
  Group, Object3D, Mesh, MeshToonMaterial, MeshBasicMaterial, ShaderMaterial, BoxGeometry, CylinderGeometry,
  SphereGeometry, PlaneGeometry, CircleGeometry, CapsuleGeometry, ConeGeometry, EdgesGeometry, CanvasTexture,
  DataTexture, RedFormat, NearestFilter, Vector3, Vector2, CatmullRomCurve3, BackSide, DoubleSide, SRGBColorSpace,
  MathUtils, Sprite, SpriteMaterial, TextureLoader, Raycaster, RingGeometry,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

const INK = '#262b33';
const PAL = {
  ground: '#f4f5f7', road: '#e3e6eb', lot: '#f8f9fb', mark: '#ffffff', concrete: '#dcdfe4',
  metal: '#d5d9df', metalDark: '#aeb4bd', housing: '#3b4048', cabinet: '#d8dce2', cabinetIn: '#454b54',
  pcb: '#3f9d58', battery: '#c3c8d0', dome: '#f3f4f6', glass: '#2b3038',
  red: '#e5483d', amber: '#f6c21c', green: '#27a55a', cloud: '#c3def5', cloudInk: '#3f6fa3',
  brand: '#2446a6', alert: '#d92d20',
};
const POLE = new Vector3(4.4, 0.5, 4.4);   // base del poste principal (sobre la losa)
const ARM_Y = 7.4;
const HOME_DIR = new Vector3(1, 1.02, 1.5).normalize();
const HOME_TARGET = new Vector3(1.9, 3.0, -0.5);

/* ---------- Materiales con estilo de ilustración ---------- */
function toonRamp() {
  const t = new DataTexture(new Uint8Array([172, 222, 255]), 3, 1, RedFormat);
  t.minFilter = t.magFilter = NearestFilter; t.needsUpdate = true;
  return t;
}
const RAMP = toonRamp();
const matCache = new Map();
function toon(color, extra = {}) {
  const key = color + JSON.stringify(extra);
  if (!matCache.has(key)) matCache.set(key, new MeshToonMaterial({ color, gradientMap: RAMP, ...extra }));
  return matCache.get(key);
}
const hullCache = new Map();
function hullMat(thickness, color = INK) {
  const key = thickness + color;
  if (!hullCache.has(key)) {
    hullCache.set(key, new ShaderMaterial({
      uniforms: { t: { value: thickness }, c: { value: new Color(color) } },
      vertexShader: 'uniform float t; void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(position + normal * t, 1.0); }',
      fragmentShader: 'uniform vec3 c; void main(){ gl_FragColor = vec4(c, 1.0); }',
      side: BackSide,
    }));
  }
  return hullCache.get(key);
}
const lineMats = [];
function lineMat(width = 1.6, color = INK) {
  const m = new LineMaterial({ color: new Color(color).getHex(), linewidth: width });
  m.userData.w = width; lineMats.push(m);
  return m;
}
const INK_LINE = lineMat(1.7);
const THIN_LINE = lineMat(1.1, '#9aa1ab');

/** Malla con relleno plano + contorno de tinta (aristas y, para piezas curvas, silueta). */
function inked(geo, color, { hull = 0, edges = true, lines = INK_LINE, angle = 30, mat } = {}) {
  const g = new Group();
  const m = new Mesh(geo, mat || toon(color));
  g.add(m);
  if (hull) g.add(new Mesh(geo, hullMat(hull)));
  if (edges) {
    const lg = new LineSegmentsGeometry().fromEdgesGeometry(new EdgesGeometry(geo, angle));
    g.add(new LineSegments2(lg, lines));
  }
  g.userData.mesh = m;
  return g;
}
const flatCache = new Map();
function flat(color) {
  if (!flatCache.has(color)) flatCache.set(color, new MeshBasicMaterial({ color }));
  return flatCache.get(color);
}
function seeded(seed) { let v = seed; return () => ((v = (v * 16807) % 2147483647) / 2147483647); }
function at(obj, x, y, z) { obj.position.set(x, y, z); return obj; }
function blob(parent, x, z, r, y = 0.02) {
  const s = new Mesh(new CircleGeometry(r, 24), new MeshBasicMaterial({ color: '#1f2530', transparent: true, opacity: 0.07, depthWrite: false }));
  s.rotation.x = -Math.PI / 2; s.position.set(x, y, z); parent.add(s); return s;
}

/* ---------- Texturas dibujadas (valla publicitaria) ---------- */
function canvasTex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; t.anisotropy = 4; return t;
}
const adTex = () => canvasTex(640, 230, (g, w, h) => {
  const gr = g.createLinearGradient(0, 0, w, 0); gr.addColorStop(0, '#2e5aa8'); gr.addColorStop(0.55, '#3a9aa8'); gr.addColorStop(1, '#f4d9a0');
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
  g.fillStyle = '#ffffff'; g.font = '800 34px "Plus Jakarta Sans", system-ui, sans-serif';
  g.fillText('CIUDAD QUE', 28, 62); g.fillText('SE CUIDA', 28, 102);
  g.globalAlpha = 0.85; g.font = '600 18px "Plus Jakarta Sans", system-ui, sans-serif';
  g.fillText('Su publicidad aquí', 28, 142); g.fillText('Escanee el código QR', 28, 166); g.globalAlpha = 1;
  g.fillStyle = '#f08a3c'; g.beginPath(); g.roundRect ? g.roundRect(28, 184, 150, 28, 14) : g.rect(28, 184, 150, 28); g.fill();
  // teléfono y persona ilustrados
  g.fillStyle = '#20314f'; g.beginPath(); g.roundRect ? g.roundRect(430, 34, 96, 170, 14) : g.rect(430, 34, 96, 170); g.fill();
  g.fillStyle = '#9fd3e6'; g.fillRect(440, 50, 76, 132);
  g.fillStyle = '#ffffff'; for (let i = 0; i < 4; i++) g.fillRect(450, 62 + i * 28, 56, 14);
  g.fillStyle = '#e07a3f'; g.beginPath(); g.arc(580, 70, 16, 0, 7); g.fill();
  g.fillStyle = '#2e5aa8'; g.fillRect(566, 90, 28, 70);
  g.fillStyle = '#2b3a55'; g.fillRect(568, 160, 10, 44); g.fillRect(582, 160, 10, 44);
});
const offTex = () => canvasTex(64, 32, (g, w, h) => { g.fillStyle = '#2f343c'; g.fillRect(0, 0, w, h); });

export async function createViewer(stage, labelsEl, { parts, onSelect }) {
  if (document.fonts && document.fonts.ready) { try { await document.fonts.ready; } catch (e) { /* sin fuentes */ } }

  const renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.setClearColor(0x000000, 0);
  stage.prepend(renderer.domElement);

  const scene = new Scene();
  const camera = new OrthographicCamera(-10, 10, 10, -10, 0.1, 400);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; controls.dampingFactor = 0.1;
  controls.enablePan = false;
  controls.minZoom = 0.8; controls.maxZoom = 2.6;
  controls.minPolarAngle = 0.72; controls.maxPolarAngle = 1.2;
  const homeAz = Math.atan2(HOME_DIR.x, HOME_DIR.z);
  controls.minAzimuthAngle = homeAz - 0.7; controls.maxAzimuthAngle = homeAz + 0.7;
  controls.target.copy(HOME_TARGET);
  camera.position.copy(HOME_TARGET).addScaledVector(HOME_DIR, 60);

  const hemi = new HemisphereLight('#ffffff', '#cfd4dc', 1.55); scene.add(hemi);
  const sun = new DirectionalLight('#ffffff', 1.25); sun.position.set(-6, 14, 10); scene.add(sun);

  /* ---------- Suelo, calles y aceras ---------- */
  const world = new Group(); scene.add(world);
  const ground = new Mesh(new PlaneGeometry(120, 120), new MeshBasicMaterial({ color: PAL.road }));
  ground.rotation.x = -Math.PI / 2; world.add(ground);
  const LOT = 22, EDGE = 3.6;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const lot = inked(new BoxGeometry(LOT, 0.14, LOT), PAL.lot, { lines: THIN_LINE, mat: flat(PAL.lot) });
    at(lot, sx * (EDGE + LOT / 2), 0.07, sz * (EDGE + LOT / 2)); world.add(lot);
  }
  const markGeo = new BoxGeometry(1.6, 0.02, 0.16);
  for (let i = -20; i <= 20; i += 3.2) {
    if (Math.abs(i) < 5.5) continue;
    world.add(at(inked(markGeo, PAL.mark, { lines: THIN_LINE, mat: flat(PAL.mark) }), i, 0.02, 0));
    const b = inked(markGeo, PAL.mark, { lines: THIN_LINE, mat: flat(PAL.mark) }); b.rotation.y = Math.PI / 2; world.add(at(b, 0, 0.02, i));
  }
  const stripe = new BoxGeometry(0.34, 0.02, 1.9);
  for (let k = -2.7; k <= 2.8; k += 0.62) {
    for (const s of [-1, 1]) {
      world.add(at(inked(stripe, PAL.mark, { lines: THIN_LINE, mat: flat(PAL.mark) }), k, 0.02, s * 4.7));
      const x = inked(stripe, PAL.mark, { lines: THIN_LINE, mat: flat(PAL.mark) }); x.rotation.y = Math.PI / 2; world.add(at(x, s * 4.7, 0.02, k));
    }
  }

  /* ---------- Nodo DSIP ---------- */
  const node = new Group(); scene.add(node);
  const anchors = {};
  const anchor = (id, parent, x, y, z) => { const a = new Object3D(); a.position.set(x, y, z); parent.add(a); anchors[id] = a; return a; };
  // Cada objeto sabe a qué parte pertenece: así se puede tocar en el dibujo y resaltar con un halo.
  const partObjs = {};
  const tag = (id, obj) => { obj.traverse((o) => { o.userData.part = id; }); (partObjs[id] = partObjs[id] || []).push(obj); return obj; };
  const haloTargets = {};
  const haloAt = (id, parent, x, y, z, w, h = w) => { const t = new Object3D(); t.position.set(x, y, z); parent.add(t); (haloTargets[id] = haloTargets[id] || []).push({ t, w, h }); };

  // Losa de concreto bajo poste y gabinete
  const slab = inked(new BoxGeometry(3.4, 0.36, 2.4), PAL.concrete);
  at(slab, POLE.x + 1.0, 0.14 + 0.18, POLE.z + 0.55); node.add(slab);
  blob(node, POLE.x + 1.0, POLE.z + 0.8, 2.2, 0.15);

  // Poste principal en L
  const pole = inked(new CylinderGeometry(0.22, 0.24, 8.1, 28), PAL.metal, { hull: 0.05 });
  at(pole, POLE.x, POLE.y + 4.05, POLE.z); node.add(tag('poste', pole));
  node.add(tag('poste', at(inked(new CylinderGeometry(0.25, 0.25, 0.12, 28), PAL.metalDark, { hull: 0.04 }), POLE.x, POLE.y + 8.12, POLE.z)));
  const arm = inked(new CylinderGeometry(0.15, 0.17, 8.4, 24), PAL.metal, { hull: 0.045 });
  arm.rotation.z = Math.PI / 2; at(arm, POLE.x - 4.0, ARM_Y, POLE.z); node.add(tag('poste', arm));
  node.add(tag('poste', at(inked(new CylinderGeometry(0.19, 0.19, 0.14, 24), PAL.metal, { hull: 0.04 }), POLE.x - 8.2, ARM_Y, POLE.z)));
  const clamp = inked(new BoxGeometry(0.62, 0.62, 0.62), PAL.metalDark); at(clamp, POLE.x, ARM_Y, POLE.z); node.add(tag('poste', clamp));
  [-0.9, -3.3].forEach((dx) => {
    const ring = inked(new CylinderGeometry(0.2, 0.2, 0.22, 20), PAL.metalDark, { hull: 0.03 });
    ring.rotation.z = Math.PI / 2; at(ring, POLE.x + dx, ARM_Y, POLE.z); node.add(tag('poste', ring));
  });
  anchor('poste', node, POLE.x, POLE.y + 7.9, POLE.z);
  haloAt('poste', node, POLE.x, ARM_Y, POLE.z, 1.9);

  // Pantalla publicitaria horizontal
  const billboard = new Group(); node.add(billboard);
  const BB = new Vector3(POLE.x - 3.1, ARM_Y - 1.18, POLE.z + 0.05);
  billboard.add(at(inked(new BoxGeometry(4.4, 1.7, 0.26), '#30353d'), BB.x, BB.y, BB.z));
  const screenOn = adTex(), screenOff = offTex();
  const screenMat = new MeshBasicMaterial({ map: screenOn });
  const screen = new Mesh(new PlaneGeometry(4.16, 1.48), screenMat); at(screen, BB.x, BB.y, BB.z + 0.135); billboard.add(screen);
  [-1.5, 1.5].forEach((dx) => billboard.add(at(inked(new CylinderGeometry(0.035, 0.035, 0.38, 8), PAL.metalDark, { hull: 0.02 }), BB.x + dx, ARM_Y - 0.24, BB.z)));
  anchor('pantalla', billboard, BB.x, BB.y - 0.85, BB.z + 0.15);
  tag('pantalla', billboard);
  haloAt('pantalla', billboard, BB.x, BB.y, BB.z + 0.2, 6.2, 3.2);

  // Semáforos: cabezal grande colgado del brazo y dos en postes secundarios
  const lampSets = [];
  function signalHead(parent, x, y, z, scale = 1) {
    const h = new Group(); at(h, x, y, z); h.scale.setScalar(scale); parent.add(h);
    h.add(inked(new BoxGeometry(0.66, 1.78, 0.5), PAL.housing));
    const lamps = [PAL.red, PAL.amber, PAL.green].map((c, i) => {
      const off = new Color(c).lerp(new Color('#3b4048'), 0.86);
      const m = new MeshBasicMaterial({ color: off.clone() });
      m.userData = { on: new Color(c), off };
      const l = new Mesh(new CircleGeometry(0.22, 28), m); at(l, 0, 0.55 - i * 0.55, 0.255); h.add(l);
      const visor = inked(new CylinderGeometry(0.27, 0.27, 0.22, 24, 1, true, 0, Math.PI), PAL.housing, { hull: 0, edges: true });
      visor.rotation.x = Math.PI / 2; visor.rotation.y = Math.PI; at(visor, 0, 0.6 - i * 0.55, 0.36); h.add(visor);
      return m;
    });
    lampSets.push(lamps);
    return h;
  }
  const mainHead = signalHead(node, POLE.x - 6.6, ARM_Y - 1.12, POLE.z + 0.02);
  node.add(at(inked(new CylinderGeometry(0.04, 0.04, 0.22, 8), PAL.metalDark, { hull: 0.02 }), POLE.x - 6.6, ARM_Y - 0.2, POLE.z));
  anchor('semaforo', mainHead, 0, -0.95, 0.3);
  tag('semaforo', mainHead);
  haloAt('semaforo', mainHead, 0, 0, 0.3, 1.8, 3.0);

  function secondaryPole(x, z, armDir) {
    const g = new Group(); node.add(g);
    g.add(at(inked(new BoxGeometry(0.7, 0.12, 0.7), PAL.concrete), x, 0.2, z));
    g.add(at(inked(new CylinderGeometry(0.14, 0.16, 6.0, 22), PAL.metal, { hull: 0.04 }), x, 3.2, z));
    const a = inked(new CylinderGeometry(0.1, 0.11, 4.2, 18), PAL.metal, { hull: 0.035 });
    a.rotation.z = Math.PI / 2; at(a, x + armDir * 2.1, 5.8, z); g.add(a);
    const head = tag('semaforo', signalHead(g, x + armDir * 3.6, 5.2, z + 0.02, 0.72));
    haloAt('semaforo', head, 0, 0, 0.3, 1.35, 2.2);
    blob(g, x, z, 0.6, 0.15);
    return g;
  }
  secondaryPole(-4.4, -4.4, 1);
  const pole2 = secondaryPole(4.4, -4.4, -1);

  // Cámaras tipo bala en los postes secundarios
  function bulletCam(parent, x, y, z, look) {
    const g = new Group(); at(g, x, y, z); parent.add(g);
    const body = inked(new CylinderGeometry(0.13, 0.13, 0.62, 18), PAL.dome, { hull: 0.025 }); body.rotation.x = Math.PI / 2; at(body, 0, 0, 0.2); g.add(body);
    const hood = inked(new BoxGeometry(0.32, 0.05, 0.7), PAL.metal); at(hood, 0, 0.16, 0.22); g.add(hood);
    const lens = new Mesh(new CircleGeometry(0.09, 18), new MeshBasicMaterial({ color: PAL.glass })); at(lens, 0, 0, 0.515); g.add(lens);
    const mount = inked(new BoxGeometry(0.1, 0.3, 0.1), PAL.metalDark); at(mount, 0, -0.1, -0.12); g.add(mount);
    g.lookAt(look);
    return g;
  }
  const balaA = tag('bala', bulletCam(node, -4.15, 3.9, -4.15, new Vector3(2, 0, 3)));
  const bala = tag('bala', bulletCam(pole2, 4.15, 3.9, -4.15, new Vector3(-2, 0, 3)));
  haloAt('bala', balaA, 0, 0, 0.2, 1.5); haloAt('bala', bala, 0, 0, 0.2, 1.5);
  anchor('bala', bala, 0, 0.05, 0.35);

  // Domo PTZ con brazo y caja de conexiones
  const ptzArm = inked(new BoxGeometry(0.14, 0.14, 1.1), PAL.metalDark);
  ptzArm.rotation.y = -Math.PI / 4; at(ptzArm, POLE.x - 0.39, POLE.y + 4.62, POLE.z + 0.39); node.add(tag('ptz', ptzArm));
  const ptz = new Group(); at(ptz, POLE.x - 0.78, POLE.y + 4.2, POLE.z + 0.78); node.add(ptz);
  ptz.add(at(inked(new CylinderGeometry(0.4, 0.44, 0.46, 26), PAL.dome, { hull: 0.035 }), 0, 0.14, 0));
  const dome = inked(new SphereGeometry(0.41, 26, 14, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), PAL.glass, { hull: 0.035, edges: false });
  ptz.add(dome);
  const ptzHead = new Object3D(); ptz.add(ptzHead);
  anchor('ptz', ptz, 0, -0.15, 0.2);
  tag('ptz', ptz);
  haloAt('ptz', ptz, 0, 0, 0, 2.0);
  const jbox = inked(new BoxGeometry(0.7, 0.85, 0.42), PAL.cabinet); at(jbox, POLE.x + 0.42, POLE.y + 4.45, POLE.z + 0.28); node.add(tag('poste', jbox));
  // Conductos del poste a la caja de control
  [0.12, 0.26].forEach((dx) => node.add(tag('poste', at(inked(new CylinderGeometry(0.035, 0.035, 3.7, 8), '#8b929c', { hull: 0.018 }), POLE.x + 0.3 + dx, POLE.y + 2.2, POLE.z + 0.34))));

  // Gabinete de control abierto (con electrónica de IA y baterías)
  const CAB = new Vector3(POLE.x + 1.55, POLE.y + 1.1, POLE.z + 0.75);
  const cab = new Group(); node.add(cab);
  cab.add(at(inked(new BoxGeometry(1.5, 2.2, 0.85), PAL.cabinet), CAB.x, CAB.y, CAB.z));
  cab.add(at(new Mesh(new PlaneGeometry(1.36, 2.06), toon(PAL.cabinetIn)), CAB.x, CAB.y, CAB.z + 0.43));
  const pcb = inked(new BoxGeometry(1.2, 0.7, 0.04), PAL.pcb); at(pcb, CAB.x, CAB.y + 0.58, CAB.z + 0.45); cab.add(pcb);
  [[-0.35, 0.68], [0.05, 0.52], [0.34, 0.72], [-0.1, 0.8]].forEach(([dx, dy]) => cab.add(at(inked(new BoxGeometry(0.2, 0.16, 0.06), '#1f2a24'), CAB.x + dx, CAB.y + dy, CAB.z + 0.49)));
  const aiLed = new Mesh(new CircleGeometry(0.035, 12), new MeshBasicMaterial({ color: PAL.green })); at(aiLed, CAB.x + 0.5, CAB.y + 0.85, CAB.z + 0.48); cab.add(aiLed);
  cab.add(at(inked(new BoxGeometry(1.26, 0.05, 0.3), PAL.metalDark), CAB.x, CAB.y + 0.12, CAB.z + 0.3));
  const batteryMats = [];
  for (let r = 0; r < 3; r++) for (let c = 0; c < 2; c++) {
    const m = toon(PAL.battery, { emissive: new Color('#000000') }).clone();
    batteryMats.push(m);
    const b = inked(new BoxGeometry(0.56, 0.28, 0.3), PAL.battery, { mat: m });
    at(b, CAB.x - 0.3 + c * 0.6, CAB.y - 0.25 - r * 0.32, CAB.z + 0.3); cab.add(b);
  }
  const doorPivot = new Group(); at(doorPivot, CAB.x + 0.75, CAB.y, CAB.z + 0.43); cab.add(doorPivot);
  const door = inked(new BoxGeometry(1.5, 2.16, 0.05), PAL.cabinet); at(door, -0.75, 0, 0.03); doorPivot.add(door);
  for (let i = 0; i < 6; i++) door.add(at(inked(new BoxGeometry(0.5, 0.03, 0.02), '#b7bdc6', { lines: THIN_LINE }), -0.2, 0.7 - i * 0.12, 0.035));
  doorPivot.rotation.y = 1.95; // puerta abierta como en el diagrama
  for (let i = 0; i < 7; i++) cab.add(at(inked(new BoxGeometry(0.02, 0.03, 0.5), '#b7bdc6', { lines: THIN_LINE }), CAB.x - 0.76, CAB.y + 0.6 - i * 0.12, CAB.z));
  anchor('caja', cab, CAB.x + 0.1, CAB.y + 0.4, CAB.z + 0.5);
  tag('caja', cab);
  haloAt('caja', cab, CAB.x + 0.3, CAB.y, CAB.z + 0.3, 3.8, 4.0);

  // La central de datos: una sola nube con el sello de Panoptes
  const CLOUD = new Vector3(12.4, 5.0, 1.5);
  const cloudG = new Group(); at(cloudG, CLOUD.x, CLOUD.y, CLOUD.z); cloudG.scale.setScalar(1.3); scene.add(cloudG);
  [[0, 0, 0, 0.95], [-0.95, -0.2, 0.1, 0.72], [0.95, -0.25, 0.05, 0.7], [0.3, 0.55, -0.1, 0.72], [-0.45, 0.45, 0, 0.6]].forEach(([dx, dy, dz, r]) => {
    const geo = new SphereGeometry(r, 22, 16);
    cloudG.add(at(new Mesh(geo, toon(PAL.cloud)), dx, dy, dz));
    cloudG.add(at(new Mesh(geo, hullMat(0.06, PAL.cloudInk)), dx, dy, dz));
  });
  const badgeTex = canvasTex(256, 256, (g, w) => {
    g.fillStyle = '#ffffff'; g.strokeStyle = PAL.cloudInk; g.lineWidth = 10;
    g.beginPath(); g.arc(w / 2, w / 2, w / 2 - 8, 0, Math.PI * 2); g.fill(); g.stroke();
  });
  const badge = new Sprite(new SpriteMaterial({ map: badgeTex, depthTest: false, depthWrite: false, transparent: true }));
  badge.scale.set(1.45, 1.45, 1); badge.position.set(0, 0.08, 0); badge.renderOrder = 4; cloudG.add(badge);
  const logoTex = new TextureLoader().load(new URL('images/logo-192.webp', document.baseURI).href);
  logoTex.colorSpace = SRGBColorSpace; logoTex.anisotropy = 4;
  const logo = new Sprite(new SpriteMaterial({ map: logoTex, depthTest: false, depthWrite: false, transparent: true }));
  logo.scale.set(0.96, 1.0, 1); logo.position.set(0, 0.08, 0); logo.renderOrder = 5; cloudG.add(logo);
  tag('nube', cloudG);
  anchor('nube', cloudG, 0, 1.25, 0);
  haloAt('nube', cloudG, 0, 0.1, 0, 6.4, 4.4);

  function arrowHead(end, prev, color) {
    const head = new Mesh(new ConeGeometry(0.16, 0.42, 14), new MeshBasicMaterial({ color }));
    head.position.copy(end); head.lookAt(end.clone().add(end.clone().sub(prev)));
    head.rotateX(Math.PI / 2); scene.add(head);
  }
  function arrowPath(points, color = INK, both = false) {
    const curve = new CatmullRomCurve3(points.map((p) => new Vector3(...p)), false, 'catmullrom', 0.05);
    const pts = curve.getPoints(40);
    const pos = [];
    for (let i = 0; i < pts.length - 1; i++) pos.push(pts[i].x, pts[i].y, pts[i].z, pts[i + 1].x, pts[i + 1].y, pts[i + 1].z);
    const lg = new LineSegmentsGeometry(); lg.setPositions(pos);
    scene.add(new LineSegments2(lg, lineMat(1.8, color)));
    arrowHead(pts[pts.length - 1], pts[pts.length - 3], color);
    if (both) arrowHead(pts[0], pts[2], color);
    return curve;
  }
  const toCloud = arrowPath([[CAB.x + 0.95, 0.62, CAB.z + 0.25], [8.9, 0.6, 5.5], [10.7, 1.8, 3.8], [11.5, 3.55, 2.45]], '#33485f', true);

  /* ---------- Vehículos ---------- */
  // Faros: de noche proyectan un haz suave sobre la calle.
  const beamTex = canvasTex(64, 128, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h);
    gr.addColorStop(0, 'rgba(255,244,214,0.85)'); gr.addColorStop(1, 'rgba(255,244,214,0)');
    g.fillStyle = gr; g.beginPath();
    g.moveTo(w * 0.36, 0); g.lineTo(w * 0.64, 0); g.lineTo(w * 0.97, h); g.lineTo(w * 0.03, h); g.closePath(); g.fill();
  });
  const beams = [];
  const headMat = new MeshBasicMaterial({ color: '#fff3c4' });
  function frontLights(g, z, y, half = 0.55) {
    [-half, half].forEach((x) => g.add(at(new Mesh(new BoxGeometry(0.3, 0.14, 0.04), headMat), x, y, z + 0.02)));
    const bm = new MeshBasicMaterial({ map: beamTex, transparent: true, depthWrite: false, opacity: 0 });
    const beam = new Mesh(new PlaneGeometry(2.6, 4.6), bm); beam.rotation.x = -Math.PI / 2; at(beam, 0, 0.05, z + 2.35); g.add(beam);
    beams.push(bm);
  }
  function wheels(g, xs, zs, r = 0.3, w = 0.22) {
    xs.forEach((x) => zs.forEach((z) => {
      const wh = inked(new CylinderGeometry(r, r, w, 16), '#3b4048', { hull: 0.02 }); wh.rotation.z = Math.PI / 2; g.add(at(wh, x, r, z));
    }));
  }
  function car(color) {
    const g = new Group();
    g.add(at(inked(new BoxGeometry(1.7, 0.55, 3.4), color), 0, 0.55, 0));
    g.add(at(inked(new BoxGeometry(1.45, 0.5, 1.8), '#e9eef5'), 0, 1.05, -0.15));
    wheels(g, [-0.8, 0.8], [1.1, -1.1]);
    frontLights(g, 1.7, 0.62);
    blob(g, 0, 0, 1.6, 0.02);
    scene.add(g); return g;
  }
  function ambulance() {
    const g = new Group(), W = '#f7f8fa';
    g.add(at(inked(new BoxGeometry(1.8, 1.45, 2.7), W), 0, 1.05, -0.5));
    g.add(at(inked(new BoxGeometry(1.72, 0.95, 1.25), W), 0, 0.8, 1.45));
    g.add(at(inked(new BoxGeometry(1.5, 0.42, 0.05), '#2b3038'), 0, 1.08, 2.09));
    g.add(at(inked(new BoxGeometry(1.84, 0.18, 2.74), PAL.alert), 0, 0.78, -0.5));
    g.add(at(inked(new BoxGeometry(0.9, 0.04, 0.26), PAL.alert), 0, 1.79, -0.6));
    g.add(at(inked(new BoxGeometry(0.26, 0.04, 0.9), PAL.alert), 0, 1.79, -0.6));
    const flashA = new MeshBasicMaterial({ color: PAL.alert }), flashB = new MeshBasicMaterial({ color: '#3a6fe0' });
    g.add(at(inked(new BoxGeometry(0.55, 0.18, 0.28), PAL.alert, { mat: flashA }), -0.32, 1.86, 0.62));
    g.add(at(inked(new BoxGeometry(0.55, 0.18, 0.28), '#3a6fe0', { mat: flashB }), 0.32, 1.86, 0.62));
    wheels(g, [-0.82, 0.82], [1.25, -1.2], 0.34, 0.24);
    frontLights(g, 2.07, 0.62, 0.58);
    blob(g, 0, 0.2, 2.2, 0.02);
    g.userData.flash = [flashA, flashB];
    scene.add(g); return g;
  }
  function moto() {
    const g = new Group();
    g.add(at(inked(new BoxGeometry(0.2, 0.3, 1.3), '#3b4a60'), 0, 0.6, 0));
    g.add(at(inked(new BoxGeometry(0.34, 0.24, 0.55), '#5d6b80'), 0, 0.82, 0.22));
    g.add(at(inked(new BoxGeometry(0.3, 0.1, 0.55), '#2b3038'), 0, 0.8, -0.3));
    g.add(at(inked(new BoxGeometry(0.72, 0.05, 0.05), '#2b3038'), 0, 1.02, 0.55));
    [0.62, -0.62].forEach((z) => { const wh = inked(new CylinderGeometry(0.32, 0.32, 0.12, 16), '#2b3038', { hull: 0.02 }); wh.rotation.z = Math.PI / 2; g.add(at(wh, 0, 0.32, z)); });
    g.add(at(new Mesh(new BoxGeometry(0.14, 0.1, 0.04), headMat), 0, 0.86, 0.8));
    scene.add(g); return g;
  }
  const cars = [
    { g: car('#a9c7ea'), axis: 'z', dir: -1, lane: 1.6, p: 16, v: 4, speed: 4.2 },
    { g: car('#dfe4ec'), axis: 'x', dir: 1, lane: -1.6, p: -14, v: 4, speed: 3.8 },
  ];

  /* ---------- Personas: brazos y piernas articulados, con el mismo trazo ---------- */
  const HUMAN = {
    torso: new CapsuleGeometry(0.19, 0.36, 4, 10),
    head: new SphereGeometry(0.15, 14, 10),
    arm: new CapsuleGeometry(0.06, 0.5, 3, 8).translate(0, -0.31, 0),
    leg: new CapsuleGeometry(0.085, 0.63, 3, 8).translate(0, -0.4, 0),
  };
  const SKINS = ['#e6b98f', '#c99a6e', '#a87a55', '#f0c9a5'];
  function person(shirt, { pants = '#3b4a60', skin = SKINS[0], parent = scene } = {}) {
    const pivot = new Group(); parent.add(pivot);
    const body = new Group(); pivot.add(body);
    const limb = (geo, color, grp, x, y) => { const m = inked(geo, color, { hull: 0.025, edges: false }); at(m, x, y, 0); grp.add(m); return m; };
    const joint = (x, y) => { const j = new Group(); at(j, x, y, 0); body.add(j); return j; };
    const hipL = joint(-0.1, 0.8), hipR = joint(0.1, 0.8), shL = joint(-0.27, 1.43), shR = joint(0.27, 1.43);
    limb(HUMAN.leg, pants, hipL, 0, 0); limb(HUMAN.leg, pants, hipR, 0, 0);
    limb(HUMAN.arm, shirt, shL, 0, 0); limb(HUMAN.arm, shirt, shR, 0, 0);
    limb(HUMAN.torso, shirt, body, 0, 1.16).scale.set(1, 1, 0.78);
    limb(HUMAN.head, skin, body, 0, 1.7);
    blob(pivot, 0, 0, 0.42, 0.16);
    return { pivot, body, hipL, hipR, shL, shR, phase: 0, fallen: 0 };
  }
  // Pose: caminar (piernas y brazos alternados) o caer de espaldas con los brazos abiertos.
  function pose(p, walk, fallen = 0) {
    const dir = p.fallDir || -1;
    const sw = Math.sin(p.phase) * 0.6 * walk;
    p.hipL.rotation.x = sw; p.hipR.rotation.x = -sw;
    p.shL.rotation.x = -sw * 0.8; p.shR.rotation.x = sw * 0.8;
    p.shL.rotation.z = -(0.08 + fallen * 1.0); p.shR.rotation.z = 0.08 + fallen * 1.0;
    p.body.rotation.x = dir * fallen * Math.PI / 2 * 0.97;
    p.body.position.y = fallen * 0.2 + walk * Math.abs(Math.cos(p.phase)) * 0.035;
  }
  function sit(p) {
    p.hipL.rotation.x = p.hipR.rotation.x = -1.4;
    p.shL.rotation.x = p.shR.rotation.x = -1.05;
    p.shL.rotation.z = -0.12; p.shR.rotation.z = 0.12;
    p.body.rotation.x = 0.12; p.body.position.y = 0.02;
  }
  const groundY = (x, z) => (Math.abs(x) > EDGE && Math.abs(z) > EDGE ? 0.14 : 0);
  const people = [
    { ...person('#f08a4b'), path: [[-4.4, 5.0], [-4.4, 8.6]], s: 0.1, dirSign: 1, speed: 0.12 },
    { ...person('#5b8def', { skin: SKINS[2] }), path: [[-9.0, 4.5], [-5.4, 4.5]], s: 0.4, dirSign: 1, speed: 0.1 },
  ];
  const victim = people[0];

  /* ---------- Choque: auto, moto con su conductor y ambulancia ---------- */
  const crash = { car: car('#dfe4ec'), moto: moto(), amb: ambulance(), rider: person('#46546a', { pants: '#2c3a4f', skin: '#f7f8fa' }) };
  [crash.car, crash.moto, crash.amb, crash.rider.pivot].forEach((o) => { o.visible = false; });
  crash.rider.fallDir = 1; // sale despedido y cae de frente sobre el paso peatonal
  const sparkMat = new MeshBasicMaterial({ color: '#ffd166', transparent: true });
  const sparks = Array.from({ length: 12 }, (_, i) => {
    const s = new Mesh(new SphereGeometry(0.07, 6, 4), sparkMat); s.visible = false; scene.add(s);
    const a = (i / 12) * Math.PI * 2;
    s.userData.v = new Vector3(Math.cos(a) * (1.4 + (i % 3) * 0.5), 2.2 + (i % 4) * 0.5, Math.sin(a) * (1.4 + (i % 2) * 0.6));
    return s;
  });

  /* ---------- Multitud: personas que llenan la esquina ---------- */
  const crowdG = new Group(); crowdG.visible = false; scene.add(crowdG);
  const CROWD_C = new Vector3(-1.2, 0, 4.2);
  const SHIRTS = ['#5b8def', '#8fb3e8', '#b9c1cd', '#6f7d92', '#dfe4ec', '#f0a36b', '#2446a6', '#9aa9bd'];
  const rnd = seeded(11);
  const denseSpots = [];
  while (denseSpots.length < 26) {
    const a = rnd() * Math.PI * 2, r = Math.sqrt(rnd()) * 2.25;
    const c = new Vector3(CROWD_C.x + Math.cos(a) * r, 0, CROWD_C.z + Math.sin(a) * r);
    if (denseSpots.every((d) => d.distanceTo(c) > 0.58) || rnd() < 0.002) denseSpots.push(c);
  }
  const crowd = denseSpots.map((dense, i) => {
    const p = person(SHIRTS[i % SHIRTS.length], { pants: ['#3b4a60', '#5d6b80', '#2c3a4f'][i % 3], skin: SKINS[i % 4], parent: crowdG });
    const a = Math.PI * (0.35 + rnd() * 1.3), r = 3.4 + rnd() * 3.2;
    p.home = new Vector3(CROWD_C.x + Math.cos(a) * r, 0, CROWD_C.z + Math.sin(a) * r * 0.8);
    const a3 = a + (rnd() - 0.5) * 0.7, r3 = 5.6 + rnd() * 2.8;
    p.out = new Vector3(CROWD_C.x + Math.cos(a3) * r3, 0, CROWD_C.z + Math.sin(a3) * r3 * 0.8);
    p.dense = dense; p.phase = rnd() * 6; p.face = Math.atan2(dense.x - p.home.x, dense.z - p.home.z);
    return p;
  });
  // Mancha en el suelo que indica cuán apretada está la gente (azul: bien, rojo: peligro)
  const densityMat = new MeshBasicMaterial({ color: PAL.brand, transparent: true, opacity: 0.1, depthWrite: false });
  const densityDisc = new Mesh(new CircleGeometry(2.7, 48), densityMat);
  densityDisc.rotation.x = -Math.PI / 2; densityDisc.position.set(CROWD_C.x, 0.06, CROWD_C.z); crowdG.add(densityDisc);
  const ringMat = new MeshBasicMaterial({ color: PAL.brand, transparent: true, opacity: 0.5, depthWrite: false });
  const densityRing = new Mesh(new RingGeometry(2.6, 2.76, 64), ringMat);
  densityRing.rotation.x = -Math.PI / 2; densityRing.position.set(CROWD_C.x, 0.07, CROWD_C.z); crowdG.add(densityRing);
  // Mensaje de la pantalla para desviar a la gente
  const warnTex = canvasTex(640, 230, (g, w, h) => {
    g.fillStyle = PAL.alert; g.fillRect(0, 0, w, h);
    g.fillStyle = '#ffffff'; g.font = '800 46px "Plus Jakarta Sans", system-ui, sans-serif'; g.fillText('ESQUINA LLENA', 34, 96);
    g.font = '700 32px "Plus Jakarta Sans", system-ui, sans-serif'; g.fillText('Use otra ruta', 34, 152);
    g.lineWidth = 16; g.strokeStyle = '#ffffff'; g.lineCap = 'round'; g.lineJoin = 'round';
    g.beginPath(); g.moveTo(468, 118); g.lineTo(592, 118); g.moveTo(546, 72); g.lineTo(592, 118); g.lineTo(546, 164); g.stroke();
  });

  /* ---------- Noche: charco de luz de la pantalla y conos de visión de las cámaras ---------- */
  const poolTex = canvasTex(128, 128, (g, w) => {
    const c = w / 2, gr = g.createRadialGradient(c, c, 0, c, c, c);
    gr.addColorStop(0, 'rgba(214,228,255,0.8)'); gr.addColorStop(1, 'rgba(214,228,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, w, w);
  });
  const poolMat = new MeshBasicMaterial({ map: poolTex, transparent: true, depthWrite: false, opacity: 0 });
  const pool = new Mesh(new PlaneGeometry(7.5, 5), poolMat); pool.rotation.x = -Math.PI / 2; pool.position.set(BB.x, 0.06, BB.z + 3.0); scene.add(pool);
  const nightCones = [];
  function camCone(from, to, r) {
    const d = from.distanceTo(to);
    const geo = new ConeGeometry(r, d, 24, 1, true); geo.translate(0, -d / 2, 0); geo.rotateX(-Math.PI / 2);
    const m = new Mesh(geo, new MeshBasicMaterial({ color: '#9db8ff', transparent: true, opacity: 0, side: DoubleSide, depthWrite: false }));
    m.position.copy(from); m.lookAt(to); m.visible = false; scene.add(m); nightCones.push(m);
  }
  camCone(new Vector3(POLE.x - 0.78, POLE.y + 4.1, POLE.z + 0.78), new Vector3(0.5, 0, 1.5), 1.9);
  camCone(new Vector3(-4.15, 3.9, -4.15), new Vector3(1.0, 0, 1.8), 1.5);
  camCone(new Vector3(4.15, 3.9, -4.15), new Vector3(-1.0, 0, 1.8), 1.5);

  /* ---------- Capa de emergencia (IA) ---------- */
  const emergency = new Group(); emergency.visible = false; scene.add(emergency);
  const coneGeo = new ConeGeometry(1.4, 6, 28, 1, true); coneGeo.translate(0, -3, 0); coneGeo.rotateX(-Math.PI / 2);
  const viewCone = new Mesh(coneGeo, new MeshBasicMaterial({ color: PAL.alert, transparent: true, opacity: 0.13, side: DoubleSide, depthWrite: false }));
  emergency.add(viewCone);
  const alertBox = new LineSegments2(new LineSegmentsGeometry().fromEdgesGeometry(new EdgesGeometry(new BoxGeometry(2.1, 0.8, 1.0))), lineMat(2.2, PAL.alert));
  emergency.add(alertBox);
  const alertAnchor = new Object3D(); scene.add(alertAnchor);

  /* ---------- Flujos (datos y energía) ---------- */
  const dotGeo = new SphereGeometry(0.09, 10, 8);
  function flow(curve, color, count, speed) {
    const m = new MeshBasicMaterial({ color, transparent: true, opacity: 0 });
    const dots = Array.from({ length: count }, (_, i) => { const d = new Mesh(dotGeo, m); d.userData.t = i / count; scene.add(d); return d; });
    return { curve, dots, m, speed, target: 0 };
  }
  const dataLow = flow(toCloud, PAL.brand, 7, 0.22);
  const powerCurve = new CatmullRomCurve3([
    new Vector3(CAB.x - 0.2, CAB.y + 1.1, CAB.z), new Vector3(POLE.x + 0.34, POLE.y + 2.5, POLE.z + 0.34),
    new Vector3(POLE.x + 0.34, ARM_Y - 0.2, POLE.z + 0.3), new Vector3(POLE.x - 3.5, ARM_Y + 0.22, POLE.z + 0.2),
    new Vector3(POLE.x - 6.6, ARM_Y + 0.22, POLE.z + 0.2),
  ]);
  const power = flow(powerCurve, PAL.amber, 12, 0.2);
  const flows = [dataLow, power];

  /* ---------- Resaltado de la pieza elegida: contorno azul y halo ---------- */
  const glowTex = canvasTex(256, 256, (g, w) => {
    const c = w / 2, gr = g.createRadialGradient(c, c, 0, c, c, c);
    gr.addColorStop(0, 'rgba(36,70,166,0)'); gr.addColorStop(0.5, 'rgba(36,70,166,0.05)');
    gr.addColorStop(0.72, 'rgba(36,70,166,0.4)'); gr.addColorStop(1, 'rgba(36,70,166,0)');
    g.fillStyle = gr; g.fillRect(0, 0, w, w);
  });
  const ringTex = canvasTex(256, 256, (g, w) => {
    g.strokeStyle = '#2446a6'; g.lineWidth = 6; g.beginPath(); g.arc(w / 2, w / 2, w / 2 - 5, 0, Math.PI * 2); g.stroke();
  });
  const halos = [];
  Object.entries(haloTargets).forEach(([id, list]) => list.forEach(({ t, w, h }) => {
    const mk = (map, order) => {
      const sp = new Sprite(new SpriteMaterial({ map, transparent: true, depthTest: false, depthWrite: false, opacity: 0 }));
      sp.renderOrder = order; sp.visible = false; scene.add(sp); return sp;
    };
    halos.push({ id, t, w, h, glow: mk(glowTex, 8), ring: mk(ringTex, 9) });
  }));
  const BRAND_LINE = lineMat(2.3, PAL.brand);
  function paintPart(id, on) {
    (partObjs[id] || []).forEach((obj) => obj.traverse((o) => {
      if (o.isLineSegments2 && (o.material === INK_LINE || o.userData.inkMat)) {
        if (on) { o.userData.inkMat = o.userData.inkMat || o.material; o.material = BRAND_LINE; } else if (o.userData.inkMat) o.material = o.userData.inkMat;
      } else if (o.isMesh && o.material.uniforms && o.material.uniforms.c) {
        if (on) { o.userData.inkMat = o.userData.inkMat || o.material; o.material = hullMat(o.userData.inkMat.uniforms.t.value, PAL.brand); } else if (o.userData.inkMat) o.material = o.userData.inkMat;
      }
    }));
  }
  let selectedAt = 0;
  const haloPos = new Vector3();
  function updateHalos(now) {
    const t = (now - selectedAt) / 1000;
    const k = still ? 1 : Math.min(1, t / 0.35), ease = 1 - Math.pow(1 - k, 3);
    halos.forEach((hl) => {
      const on = hl.id === selected;
      hl.glow.visible = on; hl.ring.visible = on && !still && t < 2.2;
      if (!on) return;
      hl.t.getWorldPosition(haloPos);
      hl.glow.position.copy(haloPos); hl.ring.position.copy(haloPos);
      const breathe = still ? 1 : 0.8 + 0.2 * Math.sin(t * 2.4);
      hl.glow.material.opacity = ease * breathe;
      hl.glow.scale.set(hl.w * (0.8 + 0.2 * ease), hl.h * (0.8 + 0.2 * ease), 1);
      if (hl.ring.visible) {
        const ph = (t % 1.1) / 1.1, r = 0.55 + 0.6 * ph;
        hl.ring.scale.set(hl.w * r, hl.h * r, 1);
        hl.ring.material.opacity = 0.85 * (1 - ph);
      }
    });
  }

  /* ---------- Tocar una pieza del dibujo la selecciona ---------- */
  const ray = new Raycaster(), ndc = new Vector2();
  const pickables = [];
  scene.traverse((o) => { if (o.isMesh && !o.isLineSegments2 && o.userData.part) pickables.push(o); });
  function pick(e) {
    const r = renderer.domElement.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(pickables, false)[0];
    return hit ? hit.object.userData.part : null;
  }
  let press = null;
  renderer.domElement.addEventListener('pointerdown', (e) => { press = { x: e.clientX, y: e.clientY, t: performance.now() }; });
  renderer.domElement.addEventListener('pointerup', (e) => {
    if (!press || Math.hypot(e.clientX - press.x, e.clientY - press.y) > 6 || performance.now() - press.t > 500) return;
    const id = pick(e);
    if (id) { onSelect(id); api.highlight(id); }
  });
  renderer.domElement.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse' || e.buttons) return;
    renderer.domElement.style.cursor = pick(e) ? 'pointer' : '';
  });

  /* ---------- Etiquetas con flechas (estilo del diagrama) ---------- */
  labelsEl.innerHTML = '';
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'pointer-events-none absolute inset-0 h-full w-full');
  svg.innerHTML = '<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#262b33"/></marker>'
    + '<marker id="arrow-alert" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#d92d20"/></marker></defs>';
  labelsEl.appendChild(svg);
  const labels = parts.map((p) => {
    const el = document.createElement('button');
    el.type = 'button'; el.className = 'callout'; el.dataset.part = p.id; el.setAttribute('aria-pressed', 'false');
    el.innerHTML = `<span class="callout-n">${p.n}</span><span class="callout-t">${p.label}</span>`;
    el.addEventListener('click', () => { onSelect(p.id); api.highlight(p.id); });
    labelsEl.appendChild(el);
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    line.setAttribute('fill', 'none'); line.setAttribute('stroke', '#262b33'); line.setAttribute('stroke-width', '1.6');
    line.setAttribute('marker-end', 'url(#arrow)');
    svg.appendChild(line);
    return { ...p, el, line };
  });
  const alertEl = document.createElement('div');
  alertEl.className = 'callout callout-alert'; alertEl.innerHTML = '<span class="callout-t">Persona en el suelo. Aviso enviado</span>';
  alertEl.style.display = 'none'; labelsEl.appendChild(alertEl);
  const alertLine = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
  alertLine.setAttribute('fill', 'none'); alertLine.setAttribute('stroke', '#d92d20'); alertLine.setAttribute('stroke-width', '1.8'); alertLine.setAttribute('marker-end', 'url(#arrow-alert)');
  svg.appendChild(alertLine);

  /* ---------- Nivel de batería durante el apagón ---------- */
  const battEl = document.createElement('div');
  battEl.className = 'batt'; battEl.style.display = 'none';
  battEl.innerHTML = '<span class="ms batt-i">battery_full</span><span><span class="batt-t">Batería del poste</span><span class="batt-v">100 %</span><span class="batt-s">Quedan 5 h 00 min</span></span>';
  labelsEl.appendChild(battEl);
  const battI = battEl.querySelector('.batt-i'), battV = battEl.querySelector('.batt-v'), battS = battEl.querySelector('.batt-s');

  /* ---------- Estado, tamaño y bucle ---------- */
  // Con «reducir movimiento» el dibujo queda quieto: solo cambia de estado al elegir una situación.
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const STILL_AT = { choque: 11, multitud: 7 }; // momento que se muestra cuando no hay animación
  let mode = 'normal', selected = null, running = false, tLight = 0, blackoutK = 0, sceneT = 0;
  let night = false, nightK = 0, battLevel = 100, battShown = '', alertShown = '';
  const res = new Vector2();
  function resize() {
    const w = stage.clientWidth, h = stage.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    const aspect = w / h;
    const viewH = Math.max(14.5, 20.5 / aspect);
    camera.left = -viewH * aspect / 2; camera.right = viewH * aspect / 2; camera.top = viewH / 2; camera.bottom = -viewH / 2;
    camera.updateProjectionMatrix();
    renderer.getDrawingBufferSize(res);
    const dpr = renderer.getPixelRatio();
    lineMats.forEach((m) => { m.resolution.copy(res); m.linewidth = m.userData.w * dpr; });
  }
  new ResizeObserver(resize).observe(stage); resize();

  const tmp = new Vector3();
  function toScreen(obj) {
    obj.getWorldPosition(tmp); tmp.project(camera);
    return [(tmp.x * 0.5 + 0.5) * stage.clientWidth, (-tmp.y * 0.5 + 0.5) * stage.clientHeight];
  }
  function lightState(t) {
    const c = t % 14;
    if (c < 6) return { ns: 2, ew: 0 };
    if (c < 7.5) return { ns: 1, ew: 0 };
    if (c < 12.5) return { ns: 0, ew: 2 };
    return { ns: 0, ew: 1 };
  }
  const clamp01 = (u) => Math.max(0, Math.min(1, u));
  const ease = (u) => (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2);

  /* Noche: luz azulada y calles oscuras; los faros, la pantalla y los semáforos brillan */
  const DAY = { road: new Color(PAL.road), lot: new Color(PAL.lot), mark: new Color(PAL.mark), sky: new Color('#ffffff'), soil: new Color('#cfd4dc'), sun: new Color('#ffffff') };
  const NIGHT = { road: new Color('#26314a'), lot: new Color('#313d57'), mark: new Color('#76839b'), sky: new Color('#8497c9'), soil: new Color('#232c42'), sun: new Color('#9db1e3') };
  let nightApplied = -1;
  function applyNight(k) {
    if (Math.abs(k - nightApplied) < 0.002) return;
    nightApplied = k;
    ground.material.color.lerpColors(DAY.road, NIGHT.road, k);
    flat(PAL.lot).color.lerpColors(DAY.lot, NIGHT.lot, k);
    flat(PAL.mark).color.lerpColors(DAY.mark, NIGHT.mark, k);
    hemi.color.lerpColors(DAY.sky, NIGHT.sky, k); hemi.groundColor.lerpColors(DAY.soil, NIGHT.soil, k); hemi.intensity = 1.55 - 0.65 * k;
    sun.color.lerpColors(DAY.sun, NIGHT.sun, k); sun.intensity = 1.25 - 0.95 * k;
  }

  /* Choque: la moto golpea al auto, el conductor cae y la ambulancia llega con ola verde */
  const HIT = 3.0;
  function updateCrash(active, now) {
    const { car: cc, moto: mo, amb, rider: r } = crash;
    const t = sceneT;
    cc.visible = mo.visible = r.pivot.visible = active;
    amb.visible = active && t >= 4.5;
    sparks.forEach((s) => { s.visible = false; });
    if (!active) return;
    // El auto cruza por el carril z = 1,2 y la moto baja por x = -2,6: chocan frente al paso peatonal
    const bump = t < HIT ? 0 : 0.25 * Math.sin(Math.PI * clamp01((t - HIT) / 0.45));
    cc.position.set(t < HIT ? -20 + 5.13 * t : -4.6 - bump, 0, 1.2); cc.rotation.y = Math.PI / 2;
    let mz = -19.8 + 7 * t, roll = 0, yaw = 0;
    if (t >= HIT) { const u = clamp01((t - HIT) / 0.7); mz = 1.2 + 1.7 * (1 - (1 - u) * (1 - u)); roll = 1.45 * clamp01((t - HIT) / 0.35); yaw = 0.7 * u; }
    mo.position.set(-2.6, 0.14 * Math.sin(roll), mz); mo.rotation.set(0, yaw, roll);
    if (t < HIT) {
      r.pivot.position.set(-2.6, 0.02, mz - 0.25); r.pivot.rotation.y = 0; r.fallen = 0; sit(r);
    } else {
      const u = clamp01((t - HIT) / 0.6);
      r.pivot.position.set(-2.6 + 0.3 * u, 0.9 * Math.sin(Math.PI * u) * (1 - 0.3 * u), 0.95 + 2.65 * u);
      r.pivot.rotation.y = 0.2 * u; r.fallen = u; pose(r, 0, u);
    }
    if (t >= HIT && t < HIT + 0.8) {
      const st = t - HIT;
      sparkMat.opacity = 1 - st / 0.8;
      sparks.forEach((s) => { const v = s.userData.v; s.visible = true; s.position.set(-2.75 + v.x * st, 0.7 + v.y * st - 4.9 * st * st, 1.2 + v.z * st); });
    }
    if (amb.visible) {
      const e = 1 - Math.pow(1 - clamp01((t - 4.5) / 4.6), 3);
      amb.position.set(30 - 29.1 * e, 0, 1.6); amb.rotation.y = -Math.PI / 2;
      const on = still || Math.floor(now / 170) % 2 === 0;
      amb.userData.flash[0].color.set(on ? PAL.alert : '#5a2420');
      amb.userData.flash[1].color.set(on ? '#23305a' : '#3a6fe0');
    }
  }

  /* Multitud: llega la gente, la mancha se vuelve roja, se avisa y la gente se dispersa */
  function updateCrowd(active, dt) {
    crowdG.visible = active;
    if (!active) return;
    const t = sceneT;
    crowd.forEach((p, i) => {
      let from, to, u, moving;
      if (t < 5) { from = p.home; to = p.dense; u = ease(t / 5); moving = true; }
      else if (t < 9.5) { from = p.dense; to = p.dense; u = 1; moving = false; }
      else { from = p.dense; to = p.out; u = ease(clamp01((t - 9.5) / 6)); moving = t < 15.5; }
      const x = from.x + (to.x - from.x) * u, z = from.z + (to.z - from.z) * u;
      const j = t >= 5 && t < 9.5 ? 0.05 : 0;
      p.pivot.position.set(x + j * Math.sin(t * 3 + i), groundY(x, z), z + j * Math.cos(t * 2.6 + i * 1.7));
      if (moving) { p.face = Math.atan2(to.x - from.x, to.z - from.z); p.phase += dt * 6; }
      p.pivot.rotation.y = p.face;
      pose(p, moving && !still ? 1 : 0, 0);
    });
    const dens = t < 5 ? t / 5 : t < 9.5 ? 1 : Math.max(0, 1 - (t - 9.5) / 3.5);
    const risk = t >= 4.6 && t < 12;
    densityMat.color.set(risk ? PAL.alert : PAL.brand); ringMat.color.set(risk ? PAL.alert : PAL.brand);
    densityMat.opacity = 0.05 + 0.17 * dens; ringMat.opacity = 0.3 + 0.6 * dens;
  }

  const MODE_OFFSETS = {
    choque: { ptz: [120, 30], semaforo: [-90, -30] },
    multitud: { ptz: [120, 30], pantalla: [150, -20] },
  };
  const ALERT_OFFSET = { emergencia: [40, -100], choque: [30, -70], multitud: [-170, -30] };
  const LABELS_BY_MODE = {
    apagon: ['caja', 'semaforo', 'pantalla'], emergencia: ['ptz', 'nube'],
    choque: ['ptz', 'semaforo', 'nube'], multitud: ['ptz', 'pantalla', 'nube'],
  };
  const wp = new Vector3(), focus = new Vector3();
  let last = performance.now();
  function frame(now) {
    if (!running) return;
    const dt = still ? 0 : Math.max(0, Math.min(0.1, (now - last) / 1000)); last = now;
    tLight += dt; sceneT += dt;
    const m = mode, t = sceneT;

    // Día y noche
    nightK = still ? (night ? 1 : 0) : nightK + ((night ? 1 : 0) - nightK) * Math.min(1, dt * 2.5);
    applyNight(nightK);

    // Apagón: la pantalla se apaga, las baterías trabajan y la energía sube por el poste
    blackoutK = still ? (m === 'apagon' ? 1 : 0) : blackoutK + ((m === 'apagon' ? 1 : 0) - blackoutK) * Math.min(1, dt * 3);
    const warn = m === 'multitud' && t >= 5.5 && t < 13;
    screenMat.map = blackoutK > 0.5 ? screenOff : warn ? warnTex : screenOn;
    const glow = blackoutK * (still ? 0.45 : 0.35 + 0.2 * Math.sin(now / 300));
    batteryMats.forEach((mt) => mt.emissive.setRGB(glow * 0.95, glow * 0.78, glow * 0.1));
    aiLed.material.color.set(still || Math.sin(now / 200) > 0 ? PAL.green : '#1f6b3a');
    if (m === 'apagon') battLevel = Math.max(25, battLevel - dt * (100 / 150));
    beams.forEach((b) => { b.opacity = nightK * 0.6; });
    poolMat.opacity = nightK * (1 - blackoutK) * 0.55;
    nightCones.forEach((c) => { c.visible = nightK > 0.02; c.material.opacity = nightK * 0.1; });

    // Semáforos (siguen en el apagón; en el choque dan ola verde a la ambulancia)
    const ls = m === 'choque' && t >= 4.2 && t < 11.5 ? { ns: 0, ew: 2 } : lightState(tLight);
    lampSets.forEach((lamps) => lamps.forEach((mt, i) => mt.color.copy((2 - i) === ls.ns ? mt.userData.on : mt.userData.off)));

    // Tránsito normal que respeta la luz
    const traffic = m === 'normal' || m === 'apagon' || m === 'emergencia';
    cars.forEach((c) => {
      c.g.visible = traffic;
      if (!traffic) return;
      const green = (c.axis === 'z' ? ls.ns : ls.ew) === 2;
      const ds = -6.2 - c.p * c.dir;
      const stop = !green && ds > 0 && ds < 1.4;
      c.v += ((stop ? 0 : c.speed) - c.v) * Math.min(1, dt * 3);
      c.p += c.v * c.dir * dt;
      if (c.p * c.dir > 32) c.p = -c.dir * 32;
      if (c.axis === 'x') { c.g.position.set(c.p, 0, c.lane); c.g.rotation.y = c.dir > 0 ? Math.PI / 2 : -Math.PI / 2; }
      else { c.g.position.set(c.lane, 0, c.p); c.g.rotation.y = c.dir > 0 ? 0 : Math.PI; }
    });

    // Peatones (la víctima cae en «Persona caída»)
    const emerg = m === 'emergencia';
    people.forEach((p, i) => {
      p.pivot.visible = m !== 'multitud';
      if (i === 0 && emerg && p.s > 0.5) p.fallen = Math.min(1, p.fallen + dt * 1.8);
      if (!emerg) p.fallen = still ? 0 : Math.max(0, p.fallen - dt * 2);
      const walking = p.fallen === 0;
      if (walking) {
        p.s += p.speed * dt * p.dirSign;
        if (p.s > 1) { p.s = 1; p.dirSign = -1; } if (p.s < 0) { p.s = 0; p.dirSign = 1; }
        p.phase += dt * 4.5;
      }
      const [a, b] = p.path;
      p.pivot.position.set(a[0] + (b[0] - a[0]) * p.s, 0.14, a[1] + (b[1] - a[1]) * p.s);
      p.pivot.rotation.y = Math.atan2((b[0] - a[0]) * p.dirSign, (b[1] - a[1]) * p.dirSign);
      pose(p, walking && !still ? 1 : 0, p.fallen);
    });

    // Situaciones con guion
    updateCrash(m === 'choque', now);
    updateCrowd(m === 'multitud', dt);

    // Aviso: qué enfoca la cámara que gira y qué dice la etiqueta roja
    let alertText = '', lying = null, hasFocus = false;
    if (emerg) {
      lying = victim.fallen > 0 ? victim : null;
      focus.copy(victim.pivot.position); hasFocus = true;
      if (victim.fallen >= 1) alertText = 'Persona en el suelo. Aviso enviado';
    }
    if (m === 'choque' && t >= 3.6) {
      lying = crash.rider; focus.copy(lying.pivot.position); hasFocus = true;
      alertText = t < 9.4 ? 'Choque detectado. Ambulancia en camino' : 'Ambulancia en el lugar';
    }
    if (m === 'multitud' && t >= 5.5 && t < 12) {
      focus.copy(CROWD_C); hasFocus = true; alertText = 'Esquina llena. Protección Civil avisada';
    }
    emergency.visible = hasFocus;
    if (hasFocus) { ptz.getWorldPosition(wp); viewCone.position.copy(wp); viewCone.lookAt(focus.x, 0.3, focus.z); }
    alertBox.visible = !!lying && lying.fallen > 0.6;
    if (alertBox.visible) {
      const ry = lying.pivot.rotation.y, lp = lying.pivot.position, fd = lying.fallDir || -1;
      alertBox.position.set(lp.x + fd * 0.9 * Math.sin(ry), 0.55, lp.z + fd * 0.9 * Math.cos(ry));
      alertBox.rotation.y = ry + Math.PI / 2;
    }
    alertAnchor.position.set(focus.x, m === 'multitud' ? 2.2 : 1.2, focus.z);

    // Flujos de datos (rojos mientras hay un aviso) y de energía (en el apagón)
    dataLow.target = 1;
    dataLow.m.color.set(alertText ? PAL.alert : PAL.brand);
    power.target = blackoutK > 0.5 ? 1 : 0;
    flows.forEach((f) => {
      f.m.opacity = still ? f.target * 0.95 : f.m.opacity + (f.target * 0.95 - f.m.opacity) * Math.min(1, dt * 3);
      f.dots.forEach((d) => {
        d.userData.t = (d.userData.t + dt * f.speed) % 1;
        d.position.copy(f.curve.getPointAt(d.userData.t));
        d.visible = f.m.opacity > 0.03;
      });
    });

    updateHalos(now);
    controls.update();
    renderer.render(scene, camera);

    // Etiquetas: texto con flecha hacia la pieza, sin encimarse (en móvil, solo el número)
    const w = stage.clientWidth, h = stage.clientHeight, compact = w < 640, k = Math.max(0.62, Math.min(1.15, w / 1000));
    const boxes = [];
    labels.forEach((l) => {
      const [ax, ay] = toScreen(anchors[l.id]);
      const vis = m === 'normal' || l.id === selected || (LABELS_BY_MODE[m] || []).includes(l.id);
      l.el.style.display = vis ? '' : 'none';
      l.line.style.display = vis && !compact ? '' : 'none';
      if (!vis) return;
      if (compact) {
        l.el.classList.add('is-compact');
        l.el.style.transform = `translate(${ax}px, ${ay}px) translate(-50%, -50%)`;
        return;
      }
      l.el.classList.remove('is-compact');
      const bw = l.el.offsetWidth, bh = l.el.offsetHeight;
      const off = (MODE_OFFSETS[m] && MODE_OFFSETS[m][l.id]) || l.offset;
      const lx = ax + off[0] * k, ly = ay + off[1] * k;
      const left = off[0] < 0 ? lx - bw : off[0] > 0 ? lx : lx - bw / 2;
      boxes.push({ l, ax, ay, left, top: ly - bh / 2, bw, bh });
    });
    for (let it = 0; it < 6; it++) {
      for (let i = 0; i < boxes.length; i++) {
        for (let j = i + 1; j < boxes.length; j++) {
          const a = boxes[i], b = boxes[j];
          const ox = Math.min(a.left + a.bw, b.left + b.bw) - Math.max(a.left, b.left);
          const oy = Math.min(a.top + a.bh, b.top + b.bh) - Math.max(a.top, b.top);
          if (ox > -8 && oy > -8) {
            const push = (oy + 8) / 2;
            if (a.top <= b.top) { a.top -= push; b.top += push; } else { a.top += push; b.top -= push; }
          }
        }
      }
      boxes.forEach((b) => {
        b.left = Math.max(6, Math.min(w - b.bw - 6, b.left));
        b.top = Math.max(6, Math.min(h - b.bh - 6, b.top));
      });
    }
    boxes.forEach(({ l, ax, ay, left, top, bw, bh }) => {
      l.el.style.transform = `translate(${left}px, ${top}px)`;
      let sx, sy;
      if (ax > left + bw) { sx = left + bw + 3; sy = top + bh / 2; }
      else if (ax < left) { sx = left - 3; sy = top + bh / 2; }
      else { sx = ax; sy = ay < top ? top - 3 : top + bh + 3; }
      const d = Math.hypot(ax - sx, ay - sy) || 1;
      const ex = ax - ((ax - sx) / d) * 5, ey = ay - ((ay - sy) / d) * 5;
      l.line.setAttribute('points', `${sx},${sy} ${ex},${ey}`);
    });
    if (alertText) {
      if (alertShown !== alertText) { alertEl.firstChild.textContent = alertText; alertShown = alertText; }
      const [vx, vy] = toScreen(alertAnchor);
      alertEl.style.display = '';
      const aw = alertEl.offsetWidth, ah = alertEl.offsetHeight;
      const ao = ALERT_OFFSET[m] || [40, -100];
      const left = Math.max(6, Math.min(w - aw - 6, vx + (compact ? 0 : ao[0] * k) - aw / 2));
      const top = Math.max(6, Math.min(h - ah - 6, vy + (compact ? -56 : ao[1] * k) - ah));
      alertEl.style.transform = `translate(${left}px, ${top}px)`;
      const sx = Math.max(left + 12, Math.min(left + aw - 12, vx));
      alertLine.style.display = '';
      alertLine.setAttribute('points', `${sx},${top + ah + 3} ${vx},${vy - 6}`);
    } else { alertEl.style.display = 'none'; alertLine.style.display = 'none'; }

    // Batería: porcentaje y horas que quedan mientras dura el apagón
    battEl.style.display = m === 'apagon' ? '' : 'none';
    if (m === 'apagon') {
      const lv = Math.round(battLevel);
      if (battShown !== String(lv)) {
        battShown = String(lv);
        const mins = Math.round((battLevel / 100) * 300);
        battV.textContent = `${lv} %`;
        battS.textContent = `Quedan ${Math.floor(mins / 60)} h ${String(mins % 60).padStart(2, '0')} min`;
        battI.textContent = lv >= 95 ? 'battery_full' : `battery_${Math.max(1, Math.ceil((lv / 100) * 6))}_bar`;
      }
    }

    requestAnimationFrame(frame);
  }
  function start() { if (running) return; running = true; last = performance.now(); requestAnimationFrame(frame); }
  function stop() { running = false; }
  new IntersectionObserver((en) => { if (en[0].isIntersecting && !document.hidden) start(); else stop(); }, { threshold: 0.02 }).observe(stage);
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else if (stage.getBoundingClientRect().bottom > 0) start(); });

  const api = {
    setMode(next) {
      mode = next;
      sceneT = still ? (STILL_AT[next] || 0) : 0;
      if (next === 'emergencia') { victim.s = still ? 0.6 : 0.3; victim.dirSign = 1; victim.fallen = still ? 1 : 0; }
      if (next === 'apagon') { battLevel = 100; battShown = ''; }
      crowd.forEach((p) => { p.face = Math.atan2(p.dense.x - p.home.x, p.dense.z - p.home.z); });
    },
    setNight(on) { night = !!on; },
    highlight(id) {
      if (selected && selected !== id) paintPart(selected, false);
      selected = id;
      if (id) { paintPart(id, true); selectedAt = performance.now(); }
      labels.forEach((l) => l.el.setAttribute('aria-pressed', String(l.id === id)));
    },
    focus(id) { api.highlight(id); },
    reset() {
      controls.target.copy(HOME_TARGET);
      camera.position.copy(HOME_TARGET).addScaledVector(HOME_DIR, 60);
      camera.zoom = 1; camera.updateProjectionMatrix();
    },
    setAutoRotate() {},
  };
  start();
  return api;
}
