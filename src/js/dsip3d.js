// Visor 3D del nodo DSIP. Modelo procedural (sin archivos externos) para que cargue rápido.
import {
  Scene, PerspectiveCamera, WebGLRenderer, Color, Fog, HemisphereLight, DirectionalLight, PointLight,
  Group, Object3D, Mesh, MeshStandardMaterial, MeshBasicMaterial, BoxGeometry, CylinderGeometry, SphereGeometry,
  PlaneGeometry, CircleGeometry, CapsuleGeometry, ConeGeometry, TorusGeometry, CanvasTexture, Vector3,
  CatmullRomCurve3, EdgesGeometry, LineSegments, LineBasicMaterial, DoubleSide, SRGBColorSpace,
  ACESFilmicToneMapping, PCFSoftShadowMap, MathUtils, RepeatWrapping,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const POLE = new Vector3(5.4, 0, 5.4);
const ARM_Y = 6.6;
const CURB = 0.15;
const HOME_CAM = new Vector3(13.5, 6.8, 15.5);
const HOME_TARGET = new Vector3(3.6, 3.5, 5.0);

const mat = (color, o = {}) => new MeshStandardMaterial({ color, roughness: 0.6, metalness: 0.1, ...o });

function canvasTex(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function adTexture() {
  return canvasTex(512, 180, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, w, h);
    gr.addColorStop(0, '#4f46e5'); gr.addColorStop(1, '#10b981');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(255,255,255,.95)';
    g.font = '800 36px "Plus Jakarta Sans", system-ui, sans-serif';
    g.fillText('SU MARCA AQUÍ', 24, 66);
    g.font = '600 20px "Plus Jakarta Sans", system-ui, sans-serif';
    g.fillText('Pauta desde $50/mes', 24, 108);
    g.fillText('Escanee el código QR', 24, 138);
    // código QR ilustrativo
    g.fillStyle = '#fff'; g.fillRect(w - 150, 22, 136, 136);
    g.fillStyle = '#0f172a';
    const s = 136 / 17;
    for (let y = 0; y < 17; y++) for (let x = 0; x < 17; x++) {
      const finder = (x < 5 && y < 5) || (x > 11 && y < 5) || (x < 5 && y > 11);
      if (finder ? (x % 4 === 0 || y % 4 === 0 || (x % 4 === 2 && y % 4 === 2) || x === 16 || y === 16) : Math.random() > 0.55) {
        g.fillRect(w - 150 + x * s, 22 + y * s, s, s);
      }
    }
  });
}

function windowsTexture() {
  return canvasTex(128, 256, (g, w, h) => {
    g.fillStyle = '#000'; g.fillRect(0, 0, w, h);
    for (let y = 8; y < h - 8; y += 22) for (let x = 8; x < w - 8; x += 20) {
      if (Math.random() > 0.45) {
        g.fillStyle = Math.random() > 0.3 ? '#fde68a' : '#bfdbfe';
        g.globalAlpha = 0.5 + Math.random() * 0.5;
        g.fillRect(x, y, 12, 14);
      }
    }
    g.globalAlpha = 1;
  });
}

function shadowify(obj, cast = true, receive = true) {
  obj.traverse((o) => { if (o.isMesh) { o.castShadow = cast; o.receiveShadow = receive; } });
  return obj;
}

export async function createViewer(stage, labelsEl, { parts, onSelect, autoRotate = true }) {
  if (document.fonts && document.fonts.ready) { try { await document.fonts.ready; } catch (e) { /* sin fuentes */ } }

  const mobile = Math.min(window.innerWidth, window.innerHeight) < 700;
  const renderer = new WebGLRenderer({ antialias: !mobile, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 1.75));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = !mobile;
  renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.setClearColor(0x000000, 0);
  stage.prepend(renderer.domElement);

  const scene = new Scene();
  scene.fog = new Fog('#10192e', 34, 70);
  const camera = new PerspectiveCamera(40, 1, 0.1, 200);
  camera.position.copy(HOME_CAM);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.copy(HOME_TARGET);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minDistance = 4;
  controls.maxDistance = 38;
  controls.maxPolarAngle = Math.PI * 0.47;
  controls.enablePan = false;
  controls.autoRotate = autoRotate;
  controls.autoRotateSpeed = 0.55;

  /* ---------- Luces ---------- */
  const hemi = new HemisphereLight('#aab8ff', '#1b2334', 0.95);
  scene.add(hemi);
  const sun = new DirectionalLight('#ffe3c2', 1.7);
  sun.position.set(12, 20, 9);
  sun.castShadow = !mobile;
  sun.shadow.mapSize.set(1024, 1024);
  Object.assign(sun.shadow.camera, { left: -18, right: 18, top: 18, bottom: -18, near: 1, far: 60 });
  scene.add(sun);
  const nodeGlow = new PointLight('#fbbf24', 0, 9, 1.6);
  nodeGlow.position.set(6.4, 1.2, 6.6);
  scene.add(nodeGlow);

  /* ---------- Ciudad: calles, aceras, edificios ---------- */
  const city = new Group(); scene.add(city);
  const ground = new Mesh(new PlaneGeometry(90, 90), mat('#1a2233', { roughness: 0.95 }));
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; city.add(ground);
  const sidewalkMat = mat('#39445b', { roughness: 0.9 });
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const sw = new Mesh(new BoxGeometry(26, CURB, 26), sidewalkMat);
    sw.position.set(sx * (4.15 + 13), CURB / 2, sz * (4.15 + 13));
    sw.receiveShadow = true; city.add(sw);
  }
  const markMat = new MeshBasicMaterial({ color: '#cbd5e1' });
  const yellowMat = new MeshBasicMaterial({ color: '#eab308' });
  for (let i = -30; i <= 30; i += 4) {
    if (Math.abs(i) < 6) continue;
    const a = new Mesh(new PlaneGeometry(2, 0.14), yellowMat); a.rotation.x = -Math.PI / 2; a.position.set(i, 0.01, 0); city.add(a);
    const b = new Mesh(new PlaneGeometry(0.14, 2), yellowMat); b.rotation.x = -Math.PI / 2; b.position.set(0, 0.01, i); city.add(b);
  }
  for (let k = -3.3; k <= 3.3; k += 0.66) { // pasos peatonales
    for (const s of [-1, 1]) {
      const z = new Mesh(new PlaneGeometry(0.4, 2.2), markMat); z.rotation.x = -Math.PI / 2; z.position.set(k, 0.012, s * 5.3); city.add(z);
      const x = new Mesh(new PlaneGeometry(2.2, 0.4), markMat); x.rotation.x = -Math.PI / 2; x.position.set(s * 5.3, 0.012, k); city.add(x);
    }
  }
  const winTex = windowsTexture();
  const buildings = [];
  const bDefs = [[-15, 14, 8, 11, 8], [-16, -15, 9, 15, 9], [15, -15, 9, 9, 9], [-26, 3, 6, 7, 10], [2, -26, 10, 12, 6], [17, 19, 7, 6, 6], [26, -4, 6, 10, 9], [-6, 26, 8, 9, 7]];
  bDefs.forEach(([x, z, w, h, d], i) => {
    const t = winTex.clone(); t.wrapS = t.wrapT = RepeatWrapping; t.repeat.set(w / 4, h / 5); t.needsUpdate = true;
    const m = mat(i % 2 ? '#26314b' : '#2c3854', { emissive: '#ffffff', emissiveMap: t, emissiveIntensity: 0.55, roughness: 0.8 });
    const b = new Mesh(new BoxGeometry(w, h, d), m);
    b.position.set(x, h / 2 + CURB, z); b.castShadow = true; b.receiveShadow = true;
    buildings.push(m); city.add(b);
  });
  // Faroles de alumbrado público (se apagan en el corte)
  const lampBulbs = [];
  [[-5.2, -9], [9, -5.2], [-9, 5.2], [5.2, 12]].forEach(([x, z]) => {
    const g = new Group();
    const p = new Mesh(new CylinderGeometry(0.07, 0.09, 5, 8), mat('#64748b', { metalness: 0.6 }));
    p.position.y = 2.5; g.add(p);
    const bulbM = new MeshStandardMaterial({ color: '#fef3c7', emissive: '#fde68a', emissiveIntensity: 1.4 });
    const bulb = new Mesh(new SphereGeometry(0.22, 12, 8), bulbM); bulb.position.y = 5.05; g.add(bulb);
    lampBulbs.push(bulbM);
    g.position.set(x, CURB, z); city.add(shadowify(g));
  });

  /* ---------- Nodo DSIP ---------- */
  const node = new Group(); scene.add(node);
  const groups = {};      // id → Group movible (despiece)
  const partMats = {};    // id → materiales para resaltar
  const anchors = {};     // id → Object3D ancla para etiquetas
  const explode = {};     // id → desplazamiento en despiece
  function part(id, offset, anchorPos) {
    const g = new Group(); g.userData.part = id; groups[id] = g; partMats[id] = [];
    explode[id] = offset || new Vector3();
    const a = new Object3D(); a.position.copy(anchorPos); g.add(a); anchors[id] = a;
    node.add(g);
    return g;
  }
  function pm(id, color, o) { const m = mat(color, o); partMats[id].push(m); return m; }

  // Poste y brazo
  const steel = { metalness: 0.75, roughness: 0.35 };
  const poste = part('poste', null, new Vector3(POLE.x + 0.2, 2.6, POLE.z));
  const pole = new Mesh(new CylinderGeometry(0.16, 0.22, 7.25, 18), pm('poste', '#a7b1c0', steel));
  pole.position.set(POLE.x, CURB + 3.62, POLE.z); poste.add(pole);
  const arm = new Mesh(new CylinderGeometry(0.1, 0.13, 6.8, 14), pm('poste', '#a7b1c0', steel));
  arm.rotation.z = Math.PI / 2; arm.position.set(POLE.x - 3.3, ARM_Y, POLE.z); poste.add(arm);
  const brace = new Mesh(new CylinderGeometry(0.05, 0.05, 2.3, 8), pm('poste', '#a7b1c0', steel));
  brace.position.set(POLE.x - 0.9, ARM_Y - 0.55, POLE.z); brace.rotation.z = Math.PI / 2 - 0.62; poste.add(brace);
  const base = new Mesh(new CylinderGeometry(0.42, 0.5, 0.35, 16), pm('poste', '#6b7280'));
  base.position.set(POLE.x, CURB + 0.17, POLE.z); poste.add(base);

  // Valla LED
  const adTex = adTexture();
  const valla = part('valla', new Vector3(0, 0.9, 0.7), new Vector3(1.9, ARM_Y + 0.1, POLE.z + 0.2));
  const vFrame = new Mesh(new BoxGeometry(3.5, 1.3, 0.22), pm('valla', '#111827', { metalness: 0.4 }));
  vFrame.position.set(1.9, ARM_Y - 0.82, POLE.z); valla.add(vFrame);
  const screenMat = new MeshStandardMaterial({ color: '#0b1020', emissive: '#ffffff', emissiveMap: adTex, emissiveIntensity: 1.15, roughness: 0.4 });
  const screen = new Mesh(new PlaneGeometry(3.3, 1.12), screenMat);
  screen.position.set(1.9, ARM_Y - 0.82, POLE.z + 0.115); valla.add(screen);
  const screenBack = new Mesh(new PlaneGeometry(3.3, 1.12), new MeshStandardMaterial({ color: '#0b1020', emissive: '#ffffff', emissiveMap: adTex, emissiveIntensity: 1.15 }));
  screenBack.rotation.y = Math.PI; screenBack.position.set(1.9, ARM_Y - 0.82, POLE.z - 0.115); valla.add(screenBack);
  [0.6, 3.2].forEach((x) => {
    const h = new Mesh(new CylinderGeometry(0.03, 0.03, 0.2, 6), pm('valla', '#9ca3af', steel)); h.position.set(x, ARM_Y - 0.12, POLE.z); valla.add(h);
  });

  // Semáforos (dos cabezales: norte-sur colgado del brazo y este-oeste en el poste)
  function trafficHead(g, id) {
    const housing = new Mesh(new BoxGeometry(0.42, 1.12, 0.34), pm(id, '#1f2937', { metalness: 0.3 }));
    g.add(housing);
    const lamps = ['#ef4444', '#f59e0b', '#22c55e'].map((c, i) => {
      const m = new MeshStandardMaterial({ color: '#111', emissive: c, emissiveIntensity: 0.05 });
      const l = new Mesh(new CircleGeometry(0.12, 20), m);
      l.position.set(0, 0.34 - i * 0.34, 0.172); g.add(l);
      const visor = new Mesh(new CylinderGeometry(0.15, 0.15, 0.14, 16, 1, true, 0, Math.PI), pm(id, '#111827'));
      visor.rotation.x = Math.PI / 2; visor.rotation.y = Math.PI; visor.position.set(0, 0.36 - i * 0.34, 0.24); g.add(visor);
      return m;
    });
    return lamps;
  }
  const semaforo = part('semaforo', new Vector3(-0.9, -0.3, 0.9), new Vector3(-0.8, ARM_Y + 0.25, POLE.z));
  const headNS = new Group(); headNS.position.set(-0.8, ARM_Y - 0.72, POLE.z); semaforo.add(headNS);
  const lampsNS = trafficHead(headNS, 'semaforo');
  const hanger = new Mesh(new CylinderGeometry(0.03, 0.03, 0.2, 6), pm('semaforo', '#9ca3af', steel)); hanger.position.set(-0.8, ARM_Y - 0.1, POLE.z); semaforo.add(hanger);
  const headEW = new Group(); headEW.position.set(POLE.x + 0.4, CURB + 3.3, POLE.z - 0.1); headEW.rotation.y = Math.PI / 2; semaforo.add(headEW);
  const lampsEW = trafficHead(headEW, 'semaforo');

  // Domo PTZ
  const ptz = part('ptz', new Vector3(-0.7, -0.1, 0.8), new Vector3(POLE.x - 0.45, CURB + 5.35, POLE.z + 0.45));
  const ptzArm = new Mesh(new BoxGeometry(0.08, 0.08, 0.6), pm('ptz', '#d1d5db', steel));
  ptzArm.position.set(POLE.x - 0.25, CURB + 5.15, POLE.z + 0.25); ptzArm.rotation.y = -Math.PI / 4; ptz.add(ptzArm);
  const ptzHead = new Group(); ptzHead.position.set(POLE.x - 0.45, CURB + 4.95, POLE.z + 0.45); ptz.add(ptzHead);
  const ptzTop = new Mesh(new CylinderGeometry(0.2, 0.22, 0.16, 20), pm('ptz', '#f3f4f6')); ptzTop.position.y = 0.1; ptzHead.add(ptzTop);
  const ptzDome = new Mesh(new SphereGeometry(0.2, 24, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), pm('ptz', '#111827', { roughness: 0.15, metalness: 0.5 }));
  ptzHead.add(ptzDome);
  const ptzLens = new Mesh(new SphereGeometry(0.05, 10, 8), new MeshStandardMaterial({ color: '#111', emissive: '#ef4444', emissiveIntensity: 0.6 }));
  ptzLens.position.set(0, -0.12, 0.14); ptzHead.add(ptzLens);

  // Cámaras bala
  const balas = part('balas', new Vector3(0.6, 0.25, -0.7), new Vector3(POLE.x + 0.1, CURB + 4.95, POLE.z - 0.3));
  const bulletCams = [];
  [[POLE.x, CURB + 4.65, POLE.z - 0.25, new Vector3(1.5, 0, -9)], [POLE.x - 0.25, CURB + 4.45, POLE.z, new Vector3(-10, 0, 3)]].forEach(([x, y, z, look]) => {
    const g = new Group(); g.position.set(x, y, z);
    const body = new Mesh(new BoxGeometry(0.14, 0.14, 0.42), pm('balas', '#f3f4f6')); body.position.z = 0.15; g.add(body);
    const hood = new Mesh(new BoxGeometry(0.18, 0.03, 0.48), pm('balas', '#e5e7eb')); hood.position.set(0, 0.09, 0.16); g.add(hood);
    const lens = new Mesh(new CircleGeometry(0.05, 12), new MeshStandardMaterial({ color: '#0f172a', emissive: '#6366f1', emissiveIntensity: 0.4 }));
    lens.position.z = 0.37; g.add(lens);
    g.lookAt(look); balas.add(g); bulletCams.push({ g, look });
  });

  // Micrófono de eventos
  const mic = part('mic', new Vector3(0.3, -0.2, 0.9), new Vector3(POLE.x + 0.05, CURB + 4.05, POLE.z + 0.35));
  const micBody = new Mesh(new CylinderGeometry(0.06, 0.06, 0.26, 12), pm('mic', '#374151'));
  micBody.rotation.x = Math.PI / 2; micBody.position.set(POLE.x, CURB + 3.85, POLE.z + 0.3); mic.add(micBody);
  const micRingMat = new MeshBasicMaterial({ color: '#34d399', transparent: true, opacity: 0 });
  const micRing = new Mesh(new TorusGeometry(0.16, 0.012, 6, 28), micRingMat);
  micRing.position.set(POLE.x, CURB + 3.85, POLE.z + 0.44); mic.add(micRing);

  // Antena P2P
  const antena = part('antena', new Vector3(0, 0.9, 0), new Vector3(POLE.x, CURB + 7.85, POLE.z));
  const dishG = new Group(); dishG.position.set(POLE.x, CURB + 7.45, POLE.z); antena.add(dishG);
  const dish = new Mesh(new CylinderGeometry(0.38, 0.06, 0.18, 24, 1, true), pm('antena', '#e5e7eb', { side: DoubleSide }));
  dish.rotation.x = Math.PI / 2; dishG.add(dish);
  const feed = new Mesh(new BoxGeometry(0.12, 0.12, 0.18), pm('antena', '#f9fafb')); feed.position.z = -0.12; dishG.add(feed);
  dishG.lookAt(new Vector3(-40, 14, -40));
  const mast = new Mesh(new CylinderGeometry(0.04, 0.04, 0.4, 8), pm('antena', '#9ca3af', steel)); mast.position.set(POLE.x, CURB + 7.2, POLE.z); antena.add(mast);

  // Gabinete (caja de control + IA) y batería
  const CAB = new Vector3(POLE.x + 0.95, CURB + 0.85, POLE.z + 0.55);
  const caja = part('caja', new Vector3(0.35, 0, 0.4), new Vector3(CAB.x, CAB.y + 1.0, CAB.z + 0.3));
  const cabBody = new Mesh(new BoxGeometry(0.9, 1.5, 0.5), pm('caja', '#cfd6e0', { metalness: 0.35, roughness: 0.45 }));
  cabBody.position.copy(CAB); caja.add(cabBody);
  const doorPivot = new Group(); doorPivot.position.set(CAB.x - 0.45, CAB.y, CAB.z + 0.255); caja.add(doorPivot);
  const door = new Mesh(new BoxGeometry(0.9, 1.46, 0.03), pm('caja', '#dbe2ea', { metalness: 0.35, roughness: 0.4 }));
  door.position.x = 0.45; doorPivot.add(door);
  const sticker = new Mesh(new PlaneGeometry(0.34, 0.12), new MeshBasicMaterial({ color: '#4f46e5' }));
  sticker.position.set(0.45, 0.45, 0.017); doorPivot.add(sticker);
  const board = new Mesh(new BoxGeometry(0.3, 0.2, 0.03), pm('caja', '#15803d')); board.position.set(CAB.x - 0.2, CAB.y + 0.35, CAB.z); caja.add(board);
  const edgeBox = new Mesh(new BoxGeometry(0.34, 0.22, 0.2), pm('caja', '#111827', { metalness: 0.6 }));
  edgeBox.position.set(CAB.x + 0.18, CAB.y + 0.35, CAB.z + 0.02); caja.add(edgeBox);
  const edgeLedMat = new MeshBasicMaterial({ color: '#34d399' });
  const edgeLed = new Mesh(new SphereGeometry(0.018, 8, 6), edgeLedMat); edgeLed.position.set(CAB.x + 0.3, CAB.y + 0.35, CAB.z + 0.125); caja.add(edgeLed);
  const bateria = part('bateria', new Vector3(0.1, -0.1, 1.05), new Vector3(CAB.x, CAB.y - 0.1, CAB.z + 0.35));
  const battMat = pm('bateria', '#0f766e', { metalness: 0.3, emissive: '#f59e0b', emissiveIntensity: 0 });
  const batt = new Mesh(new BoxGeometry(0.72, 0.5, 0.36), battMat); batt.position.set(CAB.x, CAB.y - 0.35, CAB.z); bateria.add(batt);
  const battLabel = new Mesh(new PlaneGeometry(0.4, 0.14), new MeshBasicMaterial({ color: '#fef3c7' })); battLabel.position.set(CAB.x, CAB.y - 0.3, CAB.z + 0.181); bateria.add(battLabel);

  shadowify(node);

  /* ---------- Flujos de energía y datos ---------- */
  const flows = [];
  function flow(points, color, count, speed) {
    const curve = new CatmullRomCurve3(points.map((p) => new Vector3(...p)));
    const m = new MeshBasicMaterial({ color, transparent: true, opacity: 0 });
    const dots = Array.from({ length: count }, (_, i) => {
      const d = new Mesh(new SphereGeometry(0.055, 8, 6), m); d.userData.t = i / count; scene.add(d); return d;
    });
    const f = { curve, dots, m, speed, target: 0 }; flows.push(f); return f;
  }
  const px = POLE.x + 0.24, pz = POLE.z + 0.24;
  const powerFlow = flow([[CAB.x, CAB.y + 0.8, CAB.z], [px, 1.5, pz], [px, 5.0, pz], [px, ARM_Y - 0.05, pz], [2.5, ARM_Y + 0.12, POLE.z + 0.2], [-0.8, ARM_Y + 0.12, POLE.z + 0.2]], '#38bdf8', 16, 0.18);
  const dataFlow = flow([[CAB.x, CAB.y + 0.8, CAB.z - 0.1], [px - 0.4, 2, pz - 0.4], [px - 0.4, 7.3, pz - 0.4], [POLE.x - 6, 11, POLE.z - 6], [-30, 15, -30]], '#34d399', 14, 0.12);

  /* ---------- Tráfico y peatones ---------- */
  const carColors = ['#e11d48', '#f8fafc', '#2563eb', '#f59e0b', '#64748b'];
  const cars = [
    { axis: 'x', dir: 1, lane: -2, p: -22 }, { axis: 'x', dir: -1, lane: 2, p: 10 },
    { axis: 'z', dir: -1, lane: 2, p: 20 }, { axis: 'z', dir: 1, lane: -2, p: -8 }, { axis: 'z', dir: -1, lane: 2, p: 34 },
  ].map((c, i) => {
    const g = new Group();
    const body = new Mesh(new BoxGeometry(1.8, 0.55, 3.8), mat(carColors[i], { metalness: 0.5, roughness: 0.35 })); body.position.y = 0.55; g.add(body);
    const cab = new Mesh(new BoxGeometry(1.55, 0.5, 2), mat('#0f172a', { metalness: 0.6, roughness: 0.2 })); cab.position.set(0, 1.05, -0.2); g.add(cab);
    const hl = new MeshBasicMaterial({ color: '#fef9c3' });
    [-0.6, 0.6].forEach((x) => { const l = new Mesh(new PlaneGeometry(0.3, 0.14), hl); l.position.set(x, 0.62, 1.91); g.add(l); });
    shadowify(g, true, false);
    scene.add(g);
    return { ...c, g, speed: 5 + i * 0.4, v: 5 };
  });

  const personMat = ['#f97316', '#38bdf8', '#a78bfa', '#f472b6', '#facc15'].map((c) => mat(c));
  const skin = mat('#c68642');
  const people = [
    { path: [[7.2, 7.4], [15, 7.4]], s: 0.2, speed: 0.035 },
    { path: [[-6.5, 7], [-6.5, 16]], s: 0.5, speed: 0.03 },
    { path: [[-7, -6.8], [-16, -6.8]], s: 0.1, speed: 0.04 },
    { path: [[6.8, -7], [6.8, -15]], s: 0.7, speed: 0.03 },
    { path: [[4.8, -3.6], [4.8, 3.6]], s: 0.4, speed: 0.05 },
  ].map((p, i) => {
    const g = new Group();
    const body = new Mesh(new CapsuleGeometry(0.22, 0.85, 4, 10), personMat[i]); body.position.y = 0.72; g.add(body);
    const head = new Mesh(new SphereGeometry(0.17, 12, 10), skin); head.position.y = 1.48; g.add(head);
    const pivot = new Group(); pivot.add(g); pivot.position.y = CURB;
    shadowify(pivot, true, false); scene.add(pivot);
    return { ...p, pivot, dirSign: 1, fallen: 0 };
  });
  const victim = people[0];

  /* ---------- Vista IA: conos y cajas de detección ---------- */
  const iaGroup = new Group(); iaGroup.visible = false; scene.add(iaGroup);
  function viewCone(color, radius, height) {
    const geo = new ConeGeometry(radius, height, 28, 1, true);
    geo.translate(0, -height / 2, 0); geo.rotateX(-Math.PI / 2);
    const g = new Group();
    g.add(new Mesh(geo, new MeshBasicMaterial({ color, transparent: true, opacity: 0.07, side: DoubleSide, depthWrite: false })));
    g.add(new LineSegments(new EdgesGeometry(geo, 30), new LineBasicMaterial({ color, transparent: true, opacity: 0.35 })));
    iaGroup.add(g); return g;
  }
  const bulletCones = bulletCams.map(({ g, look }) => {
    const c = viewCone('#34d399', 3.4, 11); const wp = new Vector3(); g.getWorldPosition(wp); c.position.copy(wp); c.lookAt(look); return c;
  });
  const ptzCone = viewCone('#f43f5e', 1.4, 9);
  const boxFor = (w, h, d, color) => {
    const l = new LineSegments(new EdgesGeometry(new BoxGeometry(w, h, d)), new LineBasicMaterial({ color }));
    iaGroup.add(l); return l;
  };
  const personBoxes = people.map((p, i) => boxFor(0.8, 1.9, 0.8, i === 0 ? '#34d399' : '#34d399'));
  const carBoxes = cars.map(() => boxFor(2.1, 1.5, 4.1, '#818cf8'));

  /* ---------- Etiquetas HTML proyectadas ---------- */
  labelsEl.innerHTML = '';
  const labels = parts.map((p) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'tag3d'; b.dataset.part = p.id;
    b.setAttribute('aria-pressed', 'false');
    b.innerHTML = `<b>${p.n}</b><span class="t hidden sm:inline">${p.title}</span>`;
    b.addEventListener('click', () => { onSelect(p.id); api.focus(p.id); });
    labelsEl.appendChild(b);
    return { id: p.id, el: b };
  });
  const alertTag = document.createElement('div');
  alertTag.className = 'pointer-events-none absolute left-0 top-0 z-20 rounded-lg border border-rose-300/60 bg-rose-600/90 px-2 py-1 text-[11px] font-bold text-white shadow-lg';
  alertTag.style.display = 'none';
  labelsEl.appendChild(alertTag);

  /* ---------- Estado ---------- */
  let mode = 'normal';
  let selected = null;
  let explodeK = 0, explodeTarget = 0;
  let blackoutK = 0, blackoutTarget = 0;
  let camAnim = null;
  let lastInteraction = 0;
  let running = false;
  let tLight = 0;
  let fallT = 0;   // segundos desde la caída (vista IA)

  controls.addEventListener('start', () => { lastInteraction = performance.now(); camAnim = null; });

  function lightState(t) {
    // 0–6 s verde N-S, 6–7.5 amarillo N-S, 7.5–13.5 verde E-O, 13.5–15 amarillo E-O
    const c = t % 15;
    if (c < 6) return { ns: 2, ew: 0 };
    if (c < 7.5) return { ns: 1, ew: 0 };
    if (c < 13.5) return { ns: 0, ew: 2 };
    return { ns: 0, ew: 1 };
  }

  const tmp = new Vector3();
  function project(obj3d, el, dx = 0, dy = 0) {
    obj3d.getWorldPosition(tmp);
    tmp.project(camera);
    const w = stage.clientWidth, h = stage.clientHeight;
    if (tmp.z > 1) { el.style.opacity = '0'; return; }
    el.style.opacity = '';
    el.style.transform = `translate(${(tmp.x * 0.5 + 0.5) * w + dx}px, ${(-tmp.y * 0.5 + 0.5) * h + dy}px) translate(-50%, -50%)`;
  }
  const victimAnchor = new Object3D(); victim.pivot.add(victimAnchor); victimAnchor.position.set(0, 1.4, 0);

  function resize() {
    const w = stage.clientWidth, h = stage.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.fov = w < 520 ? 52 : 40;
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize); ro.observe(stage); resize();

  let last = performance.now();
  function frame(now) {
    if (!running) return;
    const dt = Math.max(0, Math.min(0.1, (now - last) / 1000)); last = now;
    tLight += dt;

    // Rotación automática: se pausa 6 s tras interactuar
    controls.autoRotate = api._autoRotate && !camAnim && now - lastInteraction > 6000;

    // Animación de cámara (enfoque de componente)
    if (camAnim) {
      camAnim.k = Math.min(1, camAnim.k + dt / 0.9);
      const e = 1 - Math.pow(1 - camAnim.k, 3);
      camera.position.lerpVectors(camAnim.fromPos, camAnim.toPos, e);
      controls.target.lerpVectors(camAnim.fromT, camAnim.toT, e);
      if (camAnim.k >= 1) camAnim = null;
    }

    // Despiece
    explodeK += (explodeTarget - explodeK) * Math.min(1, dt * 4);
    Object.keys(groups).forEach((id) => groups[id].position.copy(explode[id]).multiplyScalar(explodeK));
    doorPivot.rotation.y = -explodeK * 1.9;

    // Apagón
    blackoutK += (blackoutTarget - blackoutK) * Math.min(1, dt * 3);
    hemi.intensity = MathUtils.lerp(0.95, 0.28, blackoutK);
    sun.intensity = MathUtils.lerp(1.7, 0.22, blackoutK);
    sun.color.set(blackoutK > 0.5 ? '#9db4ff' : '#ffe3c2');
    buildings.forEach((m) => { m.emissiveIntensity = 0.55 * (1 - blackoutK); });
    lampBulbs.forEach((m) => { m.emissiveIntensity = 1.4 * (1 - blackoutK); });
    screenMat.emissiveIntensity = 1.15 * (1 - blackoutK);
    screenBack.material.emissiveIntensity = screenMat.emissiveIntensity;
    battMat.emissiveIntensity = blackoutK * (0.45 + 0.25 * Math.sin(now / 250));
    nodeGlow.intensity = blackoutK * 2.2;
    edgeLedMat.color.set(Math.sin(now / 180) > 0 ? '#34d399' : '#065f46');

    // Semáforos (siguen funcionando en el apagón)
    const ls = lightState(tLight);
    lampsNS.forEach((m, i) => { m.emissiveIntensity = (2 - i) === ls.ns ? 3.2 : 0.06; });
    lampsEW.forEach((m, i) => { m.emissiveIntensity = (2 - i) === ls.ew ? 3.2 : 0.06; });

    // Vehículos
    cars.forEach((c) => {
      const green = (c.axis === 'z' ? ls.ns : ls.ew) === 2;
      const ds = -5.8 - c.p * c.dir; // distancia a la línea de parada
      const shouldStop = !green && ds > 0 && ds < 1.2;
      c.v += ((shouldStop ? 0 : c.speed) - c.v) * Math.min(1, dt * 3);
      c.p += c.v * c.dir * dt;
      if (c.p * c.dir > 34) c.p = -c.dir * 34;
      if (c.axis === 'x') { c.g.position.set(c.p, CURB * 0, c.lane); c.g.rotation.y = c.dir > 0 ? Math.PI / 2 : -Math.PI / 2; }
      else { c.g.position.set(c.lane, 0, c.p); c.g.rotation.y = c.dir > 0 ? 0 : Math.PI; }
    });

    // Peatones (la víctima cae en la vista IA)
    const iaOn = mode === 'ia';
    people.forEach((p, i) => {
      const isVictim = i === 0;
      if (isVictim && iaOn && p.s > 0.55) {
        p.fallen = Math.min(1, p.fallen + dt * 1.6);
      } else if (!iaOn) {
        p.fallen = Math.max(0, p.fallen - dt * 2);
      }
      if (p.fallen === 0 || (!iaOn && p.fallen > 0)) {
        p.s += p.speed * dt * p.dirSign * 10 / Math.hypot(p.path[1][0] - p.path[0][0], p.path[1][1] - p.path[0][1]);
        if (p.s > 1) { p.s = 1; p.dirSign = -1; }
        if (p.s < 0) { p.s = 0; p.dirSign = 1; }
      }
      const [a, b] = p.path;
      const x = a[0] + (b[0] - a[0]) * p.s, z = a[1] + (b[1] - a[1]) * p.s;
      p.pivot.position.set(x, CURB, z);
      p.pivot.rotation.y = Math.atan2((b[0] - a[0]) * p.dirSign, (b[1] - a[1]) * p.dirSign);
      const child = p.pivot.children[0];
      child.rotation.x = -p.fallen * Math.PI / 2 * 0.98;
      child.position.y = p.fallen === 0 ? Math.abs(Math.sin(now / 160 + i)) * 0.05 : 0.2 * p.fallen;
    });
    if (iaOn && victim.fallen >= 1) fallT += dt * 8; else if (!iaOn) fallT = 0;

    // Vista IA
    iaGroup.visible = iaOn;
    if (iaOn) {
      people.forEach((p, i) => {
        const fall = i === 0 && p.fallen > 0.5;
        const ry = p.pivot.rotation.y;
        const off = fall ? -0.9 : 0; // el cuerpo tendido se extiende hacia -z local
        personBoxes[i].position.set(p.pivot.position.x + off * Math.sin(ry), fall ? 0.45 : 1.1, p.pivot.position.z + off * Math.cos(ry));
        personBoxes[i].scale.set(1, fall ? 0.45 : 1, fall ? 2.3 : 1);
        personBoxes[i].rotation.y = p.pivot.rotation.y;
        personBoxes[i].material.color.set(fall ? (fallT > 45 ? '#f43f5e' : '#f59e0b') : '#34d399');
      });
      cars.forEach((c, i) => { carBoxes[i].position.set(c.g.position.x, 0.8, c.g.position.z); carBoxes[i].rotation.y = c.g.rotation.y; });
      const vp = victim.pivot.position;
      ptzHead.lookAt(vp.x, 0, vp.z);
      const pw = new Vector3(); ptzHead.getWorldPosition(pw);
      ptzCone.position.copy(pw); ptzCone.lookAt(vp.x, 0.4, vp.z);
      bulletCones.forEach((c) => { c.children[0].material.opacity = 0.05 + 0.03 * Math.sin(now / 400); });
      micRingMat.opacity = 0.35 + 0.35 * Math.sin(now / 200);
    } else {
      ptzHead.rotation.set(0, Math.sin(now / 3000) * 0.8, 0);
      micRingMat.opacity = 0;
    }

    // Flujos
    powerFlow.target = mode === 'despiece' ? 0 : 1;
    powerFlow.m.color.set(blackoutK > 0.5 ? '#fbbf24' : '#38bdf8');
    dataFlow.target = mode === 'normal' || mode === 'ia' ? 1 : (mode === 'apagon' ? 0.6 : 0);
    flows.forEach((f) => {
      f.m.opacity += (f.target * 0.9 - f.m.opacity) * Math.min(1, dt * 3);
      f.dots.forEach((d) => {
        d.userData.t = (d.userData.t + dt * f.speed) % 1;
        d.position.copy(f.curve.getPointAt(d.userData.t));
        d.visible = f.m.opacity > 0.02;
      });
    });

    // Resaltado del componente seleccionado
    const pulse = 0.16 + 0.12 * Math.sin(now / 220);
    Object.keys(partMats).forEach((id) => partMats[id].forEach((m) => {
      if (id === selected) { m.emissive.set('#6366f1'); m.emissiveIntensity = pulse; }
      else if (m === battMat) { m.emissive.set('#f59e0b'); }
      else { m.emissiveIntensity = 0; }
    }));

    controls.update();
    renderer.render(scene, camera);

    // Etiquetas
    const showAll = mode === 'normal' || mode === 'despiece';
    labels.forEach((l) => {
      const visible = showAll || l.id === selected || (mode === 'apagon' && ['bateria', 'semaforo', 'valla'].includes(l.id)) || (mode === 'ia' && ['ptz', 'balas', 'mic', 'caja'].includes(l.id));
      l.el.style.display = visible ? '' : 'none';
      if (visible) project(anchors[l.id], l.el);
    });
    if (iaOn && victim.fallen >= 1) {
      alertTag.style.display = '';
      const s = Math.floor(fallT);
      alertTag.textContent = s >= 45 ? `⚠ Persona caída · inmóvil ${s} s · alerta al C3I` : `Persona en el suelo · ${s} s`;
      alertTag.className = alertTag.className.replace(/bg-\S+ /, s >= 45 ? 'bg-rose-600/90 ' : 'bg-amber-500/90 ');
      project(victimAnchor, alertTag, 0, -18);
    } else alertTag.style.display = 'none';

    requestAnimationFrame(frame);
  }

  function start() { if (running) return; running = true; last = performance.now(); requestAnimationFrame(frame); }
  function stop() { running = false; }
  const vis = new IntersectionObserver((en) => { if (en[0].isIntersecting && !document.hidden) start(); else stop(); }, { threshold: 0.02 });
  vis.observe(stage);
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else if (stage.getBoundingClientRect().bottom > 0) start(); });

  function animateCam(toPos, toT) {
    camAnim = { k: 0, fromPos: camera.position.clone(), toPos, fromT: controls.target.clone(), toT };
  }

  const api = {
    _autoRotate: autoRotate,
    setMode(m) {
      mode = m;
      explodeTarget = m === 'despiece' ? 1 : 0;
      blackoutTarget = m === 'apagon' ? 1 : 0;
      if (m === 'ia') { victim.s = 0.42; victim.dirSign = 1; fallT = 0; }
      if (m === 'despiece') animateCam(new Vector3(POLE.x + 7.5, 4.6, POLE.z + 7.5), new Vector3(POLE.x - 0.8, 3.2, POLE.z));
      else if (m === 'ia') animateCam(new Vector3(POLE.x + 9, 7.5, POLE.z + 11), new Vector3(POLE.x + 1.5, 1.8, POLE.z + 1.5));
      else animateCam(HOME_CAM.clone(), HOME_TARGET.clone());
    },
    highlight(id) {
      selected = id;
      labels.forEach((l) => l.el.setAttribute('aria-pressed', String(l.id === id)));
    },
    focus(id) {
      api.highlight(id);
      const a = new Vector3(); anchors[id].getWorldPosition(a);
      const dir = camera.position.clone().sub(controls.target).normalize();
      const dist = id === 'poste' || id === 'valla' ? 9 : 6.5;
      animateCam(a.clone().add(dir.multiplyScalar(dist)), a.clone());
    },
    setAutoRotate(on) { api._autoRotate = on; lastInteraction = 0; },
    reset() { animateCam(HOME_CAM.clone(), HOME_TARGET.clone()); },
  };
  start();
  return api;
}
