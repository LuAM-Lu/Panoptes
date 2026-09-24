// Visor 3D del nodo DSIP con estilo de ilustración técnica isométrica:
// sombreado plano, trazo de tinta y etiquetas con flechas, como el diagrama de referencia.
import {
  Scene, OrthographicCamera, WebGLRenderer, Color, HemisphereLight, DirectionalLight,
  Group, Object3D, Mesh, MeshToonMaterial, MeshBasicMaterial, ShaderMaterial, BoxGeometry, CylinderGeometry,
  SphereGeometry, PlaneGeometry, CircleGeometry, CapsuleGeometry, ConeGeometry, EdgesGeometry, CanvasTexture,
  DataTexture, RedFormat, NearestFilter, Vector3, Vector2, CatmullRomCurve3, BackSide, DoubleSide, SRGBColorSpace,
  MathUtils, Sprite, SpriteMaterial, TextureLoader, Raycaster,
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

  scene.add(new HemisphereLight('#ffffff', '#cfd4dc', 1.55));
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

  /* ---------- Vehículos y peatones ---------- */
  function car(color) {
    const g = new Group();
    g.add(at(inked(new BoxGeometry(1.7, 0.55, 3.4), color), 0, 0.55, 0));
    g.add(at(inked(new BoxGeometry(1.45, 0.5, 1.8), '#e9eef5'), 0, 1.05, -0.15));
    [[-0.8, 1.1], [0.8, 1.1], [-0.8, -1.1], [0.8, -1.1]].forEach(([x, z]) => {
      const w = inked(new CylinderGeometry(0.3, 0.3, 0.22, 16), '#3b4048', { hull: 0.02 }); w.rotation.z = Math.PI / 2; g.add(at(w, x, 0.3, z));
    });
    blob(g, 0, 0, 1.6, 0.02);
    scene.add(g); return g;
  }
  const cars = [
    { g: car('#a9c7ea'), axis: 'z', dir: -1, lane: 1.6, p: 16, v: 4, speed: 4.2 },
    { g: car('#dfe4ec'), axis: 'x', dir: 1, lane: -1.6, p: -14, v: 4, speed: 3.8 },
  ];

  function person(shirt) {
    const pivot = new Group(); scene.add(pivot);
    const body = new Group(); pivot.add(body);
    body.add(at(inked(new CapsuleGeometry(0.2, 0.62, 4, 12), shirt, { hull: 0.03, edges: false }), 0, 0.62, 0));
    body.add(at(inked(new SphereGeometry(0.17, 16, 12), '#e6b98f', { hull: 0.03, edges: false }), 0, 1.25, 0));
    blob(pivot, 0, 0, 0.35, 0.16);
    return { pivot, body };
  }
  const people = [
    { ...person('#f08a4b'), path: [[-4.4, 5.0], [-4.4, 8.6]], s: 0.1, dirSign: 1, speed: 0.12, fallen: 0 },
    { ...person('#5b8def'), path: [[-9.0, 4.5], [-5.4, 4.5]], s: 0.4, dirSign: 1, speed: 0.1, fallen: 0 },
  ];
  const victim = people[0];

  /* ---------- Capa de emergencia (IA) ---------- */
  const emergency = new Group(); emergency.visible = false; scene.add(emergency);
  const coneGeo = new ConeGeometry(1.4, 6, 28, 1, true); coneGeo.translate(0, -3, 0); coneGeo.rotateX(-Math.PI / 2);
  const viewCone = new Mesh(coneGeo, new MeshBasicMaterial({ color: PAL.alert, transparent: true, opacity: 0.13, side: DoubleSide, depthWrite: false }));
  emergency.add(viewCone);
  const alertBox = new LineSegments2(new LineSegmentsGeometry().fromEdgesGeometry(new EdgesGeometry(new BoxGeometry(2.1, 0.8, 1.0))), lineMat(2.2, PAL.alert));
  emergency.add(alertBox);
  const victimAnchor = new Object3D(); victim.pivot.add(victimAnchor); victimAnchor.position.set(0, 1.2, 0);

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

  /* ---------- Estado, tamaño y bucle ---------- */
  // Con «reducir movimiento» el dibujo queda quieto: solo cambia de estado al elegir una situación.
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let mode = 'normal', selected = null, running = false, tLight = 0, blackoutK = 0, fallT = 0;
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

  let last = performance.now();
  function frame(now) {
    if (!running) return;
    const dt = still ? 0 : Math.max(0, Math.min(0.1, (now - last) / 1000)); last = now;
    tLight += dt;

    // Apagón: la pantalla se apaga, las baterías trabajan y la energía sube por el poste
    blackoutK = still ? (mode === 'apagon' ? 1 : 0) : blackoutK + ((mode === 'apagon' ? 1 : 0) - blackoutK) * Math.min(1, dt * 3);
    screenMat.map = blackoutK > 0.5 ? screenOff : screenOn;
    const glow = blackoutK * (still ? 0.45 : 0.35 + 0.2 * Math.sin(now / 300));
    batteryMats.forEach((m) => m.emissive.setRGB(glow * 0.95, glow * 0.78, glow * 0.1));
    aiLed.material.color.set(still || Math.sin(now / 200) > 0 ? PAL.green : '#1f6b3a');

    // Semáforos: siguen funcionando también durante el apagón
    const ls = lightState(tLight);
    lampSets.forEach((lamps) => lamps.forEach((m, i) => m.color.copy((2 - i) === ls.ns ? m.userData.on : m.userData.off)));

    // Vehículos que respetan la luz
    cars.forEach((c) => {
      const green = (c.axis === 'z' ? ls.ns : ls.ew) === 2;
      const ds = -6.2 - c.p * c.dir;
      const stop = !green && ds > 0 && ds < 1.4;
      c.v += ((stop ? 0 : c.speed) - c.v) * Math.min(1, dt * 3);
      c.p += c.v * c.dir * dt;
      if (c.p * c.dir > 32) c.p = -c.dir * 32;
      if (c.axis === 'x') { c.g.position.set(c.p, 0, c.lane); c.g.rotation.y = c.dir > 0 ? Math.PI / 2 : -Math.PI / 2; }
      else { c.g.position.set(c.lane, 0, c.p); c.g.rotation.y = c.dir > 0 ? 0 : Math.PI; }
    });

    // Peatones (la víctima cae en el modo emergencia)
    const emerg = mode === 'emergencia';
    people.forEach((p, i) => {
      if (i === 0 && emerg && p.s > 0.5) p.fallen = Math.min(1, p.fallen + dt * 1.8);
      if (!emerg) p.fallen = still ? 0 : Math.max(0, p.fallen - dt * 2);
      if (p.fallen === 0) {
        p.s += p.speed * dt * p.dirSign;
        if (p.s > 1) { p.s = 1; p.dirSign = -1; } if (p.s < 0) { p.s = 0; p.dirSign = 1; }
      }
      const [a, b] = p.path;
      p.pivot.position.set(a[0] + (b[0] - a[0]) * p.s, 0.14, a[1] + (b[1] - a[1]) * p.s);
      p.pivot.rotation.y = Math.atan2((b[0] - a[0]) * p.dirSign, (b[1] - a[1]) * p.dirSign);
      p.body.rotation.x = -p.fallen * Math.PI / 2 * 0.97;
      p.body.position.y = p.fallen ? 0.2 * p.fallen : Math.abs(Math.sin(now / 170 + i)) * 0.04;
    });
    if (emerg && victim.fallen >= 1) fallT += dt; else if (!emerg) fallT = 0;

    emergency.visible = emerg;
    if (emerg) {
      const vp = victim.pivot.position;
      const pw = new Vector3(); ptz.getWorldPosition(pw);
      viewCone.position.copy(pw); viewCone.lookAt(vp.x, 0.3, vp.z);
      const ry = victim.pivot.rotation.y;
      alertBox.position.set(vp.x - 0.8 * Math.sin(ry), 0.55, vp.z - 0.8 * Math.cos(ry));
      alertBox.rotation.y = ry + Math.PI / 2;
      alertBox.visible = victim.fallen > 0.6;
      alertBox.material.opacity = 1;
    }

    // Flujos
    dataLow.target = 1;
    dataLow.m.color.set(emerg && victim.fallen >= 1 ? PAL.alert : PAL.brand);
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
      const vis = mode === 'normal' || l.id === selected || (mode === 'apagon' && ['caja', 'semaforo', 'pantalla'].includes(l.id)) || (mode === 'emergencia' && ['ptz', 'nube'].includes(l.id));
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
      const lx = ax + l.offset[0] * k, ly = ay + l.offset[1] * k;
      const left = l.offset[0] < 0 ? lx - bw : l.offset[0] > 0 ? lx : lx - bw / 2;
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
    if (emerg && victim.fallen >= 1) {
      const [vx, vy] = toScreen(victimAnchor);
      alertEl.style.display = '';
      const aw = alertEl.offsetWidth, ah = alertEl.offsetHeight;
      const left = Math.max(6, Math.min(w - aw - 6, vx + (compact ? 0 : 40 * k) - aw / 2));
      const top = Math.max(6, Math.min(h - ah - 6, vy - (compact ? 56 : 100 * k) - ah));
      alertEl.style.transform = `translate(${left}px, ${top}px)`;
      const sx = Math.max(left + 12, Math.min(left + aw - 12, vx));
      alertLine.style.display = '';
      alertLine.setAttribute('points', `${sx},${top + ah + 3} ${vx},${vy - 6}`);
    } else { alertEl.style.display = 'none'; alertLine.style.display = 'none'; }

    requestAnimationFrame(frame);
  }
  function start() { if (running) return; running = true; last = performance.now(); requestAnimationFrame(frame); }
  function stop() { running = false; }
  new IntersectionObserver((en) => { if (en[0].isIntersecting && !document.hidden) start(); else stop(); }, { threshold: 0.02 }).observe(stage);
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else if (stage.getBoundingClientRect().bottom > 0) start(); });

  const api = {
    setMode(m) {
      mode = m;
      if (m === 'emergencia') { victim.s = still ? 0.6 : 0.3; victim.dirSign = 1; victim.fallen = still ? 1 : 0; fallT = 0; }
    },
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
