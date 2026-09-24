// Escenas 2D ilustrativas de los módulos de IA. Coordenadas virtuales 800×500 escaladas al canvas.
// Cada escena expone: set(escenario), step(dt), draw() y emite su estado con onUpdate().

const VW = 800, VH = 500;
let FS = 1; // escala de textos: legibles también en canvas pequeños (móvil, simulador)
const C = {
  ok: '#34d399', warn: '#f59e0b', alert: '#f43f5e', info: '#818cf8', dim: '#64748b', text: '#e2e8f0',
};

function rng(seed) { let s = seed; return () => ((s = (s * 16807) % 2147483647) / 2147483647); }
function rr(g, x, y, w, h, r) { g.beginPath(); g.roundRect ? g.roundRect(x, y, w, h, r) : g.rect(x, y, w, h); }
function tag(g, x, y, text, color) {
  const fs = 12 * FS, h = 16 * FS;
  g.font = `700 ${fs}px ui-monospace, Menlo, Consolas, monospace`;
  const w = g.measureText(text).width + 10 * FS;
  g.fillStyle = color; rr(g, x, y - h, w, h, 3); g.fill();
  g.fillStyle = '#0b1020'; g.fillText(text, x + 5 * FS, y - 4 * FS);
}
function box(g, x, y, w, h, color, label, mini) {
  g.strokeStyle = color; g.lineWidth = 2; g.setLineDash([]);
  g.strokeRect(x, y, w, h);
  const k = Math.min(12, w / 4, h / 4); g.lineWidth = 4; // esquinas marcadas
  [[x, y, 1, 1], [x + w, y, -1, 1], [x, y + h, 1, -1], [x + w, y + h, -1, -1]].forEach(([cx, cy, sx, sy]) => {
    g.beginPath(); g.moveTo(cx + sx * k, cy); g.lineTo(cx, cy); g.lineTo(cx, cy + sy * k); g.stroke();
  });
  if (label) tag(g, x, y, label, color, mini);
}
function stamp(g, text) {
  g.font = `600 ${11 * FS}px ui-monospace, Menlo, Consolas, monospace`;
  const h = 18 * FS;
  g.fillStyle = 'rgba(2,6,23,.65)'; rr(g, 10, VH - h - 10, g.measureText(text).width + 14, h, 4); g.fill();
  g.fillStyle = '#cbd5e1'; g.fillText(text, 17, VH - 10 - h * 0.3);
}
function clockText(h, m) {
  const d = new Date();
  const hh = String(h ?? d.getHours()).padStart(2, '0'), mm = String(m ?? d.getMinutes()).padStart(2, '0');
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ${hh}:${mm}:${String(d.getSeconds()).padStart(2, '0')}`;
}

class Base {
  constructor(canvas, { mini = false, onUpdate = () => {} } = {}) {
    this.c = canvas; this.g = canvas.getContext('2d'); this.mini = mini; this.onUpdate = onUpdate;
    this.t = 0; this.scn = null; this.showAI = true; this.lastEmit = '';
    this.resize();
  }
  resize() {
    const r = this.c.getBoundingClientRect();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    this.c.width = Math.max(1, Math.round(r.width * dpr));
    this.c.height = Math.max(1, Math.round(r.height * dpr));
    this.s = (r.width / VW) * dpr;
    this.sy = (r.height / VH) * dpr;
    this.fs = Math.min(2.2, Math.max(1, (VW / Math.max(1, r.width)) * 0.85));
  }
  begin() { FS = this.fs; this.g.setTransform(this.s, 0, 0, this.sy, 0, 0); this.g.clearRect(0, 0, VW, VH); }
  set(scn) { this.scn = scn; this.t = 0; this.done = false; this.reset(); this.emit(true); }
  reset() {}
  emit(force) {
    const st = this.state();
    const key = JSON.stringify(st);
    if (force || key !== this.lastEmit) { this.lastEmit = key; this.onUpdate(st); }
  }
}

/* =========================== IA-01 PERSONA CAÍDA =========================== */
class Person {
  constructor(o) { Object.assign(this, { x: 0, y: 400, h: 150, v: 0, phase: 0, pose: 'walk', ang: 0, color: '#f97316', dir: 1 }, o); }
  joints(now) {
    const { x, y, h } = this;
    const sw = this.pose === 'walk' ? Math.sin(this.phase) : 0;
    let j;
    if (this.pose === 'sit') {
      j = { head: [x, y - h * 0.62], neck: [x, y - h * 0.55], hip: [x, y - h * 0.18], kneeL: [x + h * 0.2 * this.dir, y - h * 0.2], kneeR: [x + h * 0.18 * this.dir, y - h * 0.16],
        footL: [x + h * 0.22 * this.dir, y], footR: [x + h * 0.2 * this.dir, y], handL: [x + h * 0.12 * this.dir, y - h * 0.22], handR: [x + h * 0.1 * this.dir, y - h * 0.25], shoulder: [x, y - h * 0.5] };
    } else {
      j = { head: [x, y - h * 0.93], neck: [x, y - h * 0.84], shoulder: [x, y - h * 0.8], hip: [x, y - h * 0.5],
        kneeL: [x + sw * h * 0.1, y - h * 0.26], kneeR: [x - sw * h * 0.1, y - h * 0.26],
        footL: [x + sw * h * 0.18, y], footR: [x - sw * h * 0.18, y],
        handL: [x - sw * h * 0.14, y - h * 0.5], handR: [x + sw * h * 0.14, y - h * 0.5] };
    }
    if (this.ang) { // rotación alrededor de los pies
      const cx = x, cy = y, a = this.ang * this.dir, ca = Math.cos(a), sa = Math.sin(a);
      Object.keys(j).forEach((k) => { const [px, py] = j[k]; const dx = px - cx, dy = py - cy; j[k] = [cx + dx * ca - dy * sa, cy + dx * sa + dy * ca]; });
    }
    return j;
  }
  draw(g, now, ai) {
    const j = this.joints(now), h = this.h;
    g.lineCap = 'round'; g.lineJoin = 'round';
    g.strokeStyle = '#1e293b'; g.lineWidth = h * 0.085;
    const seg = (a, b) => { g.beginPath(); g.moveTo(...j[a]); g.lineTo(...j[b]); g.stroke(); };
    seg('hip', 'kneeL'); seg('kneeL', 'footL'); seg('hip', 'kneeR'); seg('kneeR', 'footR');
    g.strokeStyle = this.color; g.lineWidth = h * 0.12; seg('shoulder', 'hip');
    g.lineWidth = h * 0.06; seg('shoulder', 'handL'); seg('shoulder', 'handR');
    g.fillStyle = '#c68642'; g.beginPath(); g.arc(...j.head, h * 0.075, 0, Math.PI * 2); g.fill();
    if (ai) {
      g.strokeStyle = 'rgba(56,189,248,.9)'; g.lineWidth = 1.5;
      [['head', 'neck'], ['neck', 'hip'], ['hip', 'kneeL'], ['kneeL', 'footL'], ['hip', 'kneeR'], ['kneeR', 'footR'], ['shoulder', 'handL'], ['shoulder', 'handR']].forEach(([a, b]) => seg(a, b));
      g.fillStyle = '#38bdf8';
      Object.values(j).forEach(([px, py]) => { g.beginPath(); g.arc(px, py, 2.6, 0, Math.PI * 2); g.fill(); });
    }
    const xs = Object.values(j).map((p) => p[0]), ys = Object.values(j).map((p) => p[1]);
    const pad = h * 0.08;
    return [Math.min(...xs) - pad, Math.min(...ys) - pad - h * 0.05, Math.max(...xs) - Math.min(...xs) + pad * 2, Math.max(...ys) - Math.min(...ys) + pad * 2 + h * 0.05];
  }
}

export class FallScene extends Base {
  constructor(c, o) {
    super(c, o);
    const r = rng(7); this.win = Array.from({ length: 60 }, () => [r() * 800, r() * 200, r() > 0.55]);
  }
  reset() {
    this.people = [
      new Person({ x: 40, y: 395, h: 140, v: 38, color: '#38bdf8', phase: 1 }),
      new Person({ x: 700, y: 410, h: 150, v: -30, color: '#a78bfa', dir: -1, phase: 2 }),
    ];
    this.subject = null; this.fallAt = null; this.decision = null;
    if (this.scn === 'caida') this.subject = new Person({ x: 170, y: 400, h: 150, v: 34, color: '#f97316' });
    if (this.scn === 'sentado') this.subject = new Person({ x: 180, y: 400, h: 150, v: 36, color: '#f472b6' });
    if (this.scn === 'calle') this.subject = new Person({ x: 330, y: 392, h: 140, pose: 'lie', ang: Math.PI / 2, color: '#64748b', v: 0 });
    if (this.subject) this.people.push(this.subject);
  }
  decide(d) { this.decision = d; this.emit(true); }
  immobile() { return this.fallAt == null ? 0 : Math.floor((this.t - this.fallAt) * 9); }
  step(dt) {
    this.t += dt;
    this.people.forEach((p) => {
      if (p === this.subject && this.scn === 'caida' && p.x > 225 && this.fallAt == null) { p.pose = 'fall'; this.fallAt = this.t + 0.6; }
      if (p === this.subject && this.scn === 'sentado' && p.x > 250) { p.pose = 'sit'; p.v = 0; }
      if (p.pose === 'fall') { p.ang = Math.min(Math.PI / 2, p.ang + dt * 3.2); p.v = 0; }
      if (p.pose === 'walk') { p.x += p.v * dt; p.phase += dt * 7; if (p.x > 840) p.x = -40; if (p.x < -40) p.x = 840; }
    });
    this.emit();
  }
  state() {
    const s = this.scn, im = this.immobile();
    if (s === 'caida') {
      const fallen = this.fallAt != null && this.t >= this.fallAt;
      const alert = fallen && im >= 45;
      return {
        readout: [['Estado', !fallen ? 'Caminando' : alert ? 'Inmóvil en el suelo' : 'En el suelo', !fallen ? 'ok' : alert ? 'alert' : 'warn'],
          ['Tiempo inmóvil', fallen ? im + ' s / 45 s' : '—', alert ? 'alert' : 'dim'], ['Confianza', fallen ? '0,91' : '0,96', 'info'], ['PTZ', alert ? 'Orientado al punto' : 'Ronda', alert ? 'ok' : 'dim']],
        verdict: this.decision === 'ok' ? ['ok', 'Despachado: ambulancia de Protección Civil · llegada estimada 6 min · registrado en la bitácora.']
          : this.decision === 'fp' ? ['info', 'Marcado como falso positivo: el caso se usa para reentrenar el modelo.']
            : alert ? ['alert', 'ALERTA IA-01: persona caída e inmóvil 45 s en la parada. Esperando confirmación del operador.']
              : fallen ? ['warn', 'Posible caída: contando segundos de inmovilidad antes de alertar.'] : ['dim', 'Monitoreando la parada de transporte…'],
        alert: alert && !this.decision,
      };
    }
    if (s === 'sentado') return { readout: [['Postura', this.subject.pose === 'sit' ? 'Sentada en el brocal' : 'De pie', 'ok'], ['Tiempo inmóvil', '—', 'dim'], ['Confianza', '0,94', 'info']], verdict: ['ok', 'Sin alerta: la postura es sentada, no hubo caída.'] };
    if (s === 'taller') return { readout: [['Zona', 'Taller en la acera', 'warn'], ['Persona acostada', 'Sí (bajo el vehículo)', 'dim'], ['Regla', 'Zona de exclusión', 'info']], verdict: ['ok', 'Sin alerta: la zona del taller está excluida por configuración.'] };
    return { readout: [['Postura', 'Acostada, sin caída previa', 'warn'], ['Horario', 'Nocturno', 'dim'], ['Clasificación', 'Persona en reposo', 'info']], verdict: ['info', 'Aviso social, no policial: se notifica a servicios sociales de la alcaldía.'] };
  }
  draw() {
    const g = this.g; this.begin();
    const now = performance.now();
    // cielo y edificios
    const sky = g.createLinearGradient(0, 0, 0, 330); sky.addColorStop(0, '#0b1224'); sky.addColorStop(1, '#1e2a47');
    g.fillStyle = sky; g.fillRect(0, 0, VW, 330);
    g.fillStyle = '#131c33'; [[0, 90, 180], [170, 50, 140], [300, 120, 150], [440, 70, 120], [560, 30, 140], [690, 100, 120]].forEach(([x, y, w]) => g.fillRect(x, y, w, 330 - y));
    this.win.forEach(([x, y, on]) => { if (on) { g.fillStyle = 'rgba(253,230,138,.55)'; g.fillRect(x, 100 + y, 9, 11); } });
    // farol
    g.fillStyle = '#475569'; g.fillRect(470, 150, 6, 180);
    const lg = g.createRadialGradient(473, 150, 2, 473, 150, 160); lg.addColorStop(0, 'rgba(253,230,138,.35)'); lg.addColorStop(1, 'rgba(253,230,138,0)');
    g.fillStyle = lg; g.fillRect(310, 0, 330, 420);
    // acera y calle
    g.fillStyle = '#3b4556'; g.fillRect(0, 330, VW, 80); g.fillStyle = '#64748b'; g.fillRect(0, 404, VW, 6);
    g.fillStyle = '#1c2230'; g.fillRect(0, 410, VW, 90);
    g.fillStyle = '#e2e8f0'; for (let x = 20; x < VW; x += 90) g.fillRect(x, 460, 50, 5);
    // parada
    g.fillStyle = '#94a3b8'; g.fillRect(150, 250, 6, 150); g.fillRect(320, 250, 6, 150);
    g.fillStyle = 'rgba(148,163,184,.25)'; g.fillRect(156, 262, 164, 90);
    g.fillStyle = '#4f46e5'; g.fillRect(140, 244, 196, 16);
    g.fillStyle = '#fff'; g.font = '800 12px system-ui'; g.fillText('PARADA', 214, 257);
    g.fillStyle = '#334155'; g.fillRect(180, 360, 110, 10);
    // taller
    g.fillStyle = '#b45309'; g.fillRect(560, 250, 200, 20); g.fillStyle = '#fff'; g.fillText('TALLER MECÁNICO', 600, 264);
    g.fillStyle = '#e11d48'; rr(g, 590, 345, 150, 45, 10); g.fill(); g.fillStyle = '#0f172a'; rr(g, 620, 325, 80, 26, 8); g.fill();
    g.fillStyle = '#111827'; g.beginPath(); g.arc(615, 392, 14, 0, 7); g.arc(715, 392, 14, 0, 7); g.fill();
    if (this.scn === 'taller') { // piernas del mecánico bajo el carro
      g.strokeStyle = '#1e293b'; g.lineWidth = 11; g.lineCap = 'round';
      g.beginPath(); g.moveTo(650, 398); g.lineTo(610, 402); g.moveTo(650, 398); g.lineTo(612, 392); g.stroke();
    }
    if (this.scn === 'calle') { g.fillStyle = '#a16207'; g.fillRect(250, 382, 170, 14); }

    const ai = this.showAI;
    if (ai && (this.scn === 'taller' || this.scn === 'caida')) { // zona de exclusión
      g.save(); g.fillStyle = 'rgba(245,158,11,.12)'; g.fillRect(560, 300, 210, 110);
      g.strokeStyle = 'rgba(245,158,11,.7)'; g.setLineDash([6, 5]); g.lineWidth = 1.5; g.strokeRect(560, 300, 210, 110); g.restore();
      tag(g, 562, 406, 'ZONA EXCLUIDA', C.warn, this.mini);
    }
    this.people.forEach((p) => {
      const b = p.draw(g, now, ai && p.pose !== 'lie');
      if (!ai) return;
      if (p === this.subject) {
        const im = this.immobile();
        let col = C.ok, lab = 'persona 0,96';
        if (this.scn === 'caida' && this.fallAt != null && this.t >= this.fallAt) { col = im >= 45 ? C.alert : C.warn; lab = im >= 45 ? `CAÍDA · ${im} s` : `en el suelo · ${im} s`; }
        if (this.scn === 'sentado' && p.pose === 'sit') lab = 'sentada 0,94';
        if (this.scn === 'calle') { col = C.info; lab = 'en reposo · aviso social'; }
        box(g, ...b, col, lab, this.mini);
      } else box(g, ...b, C.ok, 'persona', this.mini);
    });
    // Recuadro PTZ ampliado cuando hay alerta
    if (this.scn === 'caida' && this.immobile() >= 45 && this.subject) {
      const [ix, iy, iw, ih] = [560, 20, 220, 140];
      g.save(); rr(g, ix, iy, iw, ih, 8); g.clip();
      g.fillStyle = '#3b4556'; g.fillRect(ix, iy, iw, ih);
      g.translate(ix + iw / 2, iy + ih * 0.72); g.scale(1.6, 1.6); g.translate(-this.subject.x - 40, -this.subject.y);
      this.subject.draw(g, now, false); g.restore();
      g.strokeStyle = C.alert; g.lineWidth = 2; rr(g, ix, iy, iw, ih, 8); g.stroke();
      tag(g, ix + 8, iy + 22, 'PTZ 12× · EN VIVO', C.alert, this.mini);
    }
    stamp(g, `${clockText()} · CAM DSIP-04 · PARADA`);
  }
}

/* ======================= IA-02/03/04 NOVEDADES Y SABOTAJE ======================= */
export class NoveltyScene extends Base {
  reset() {
    this.smoke = []; this.sparks = []; this.cover = 0;
    this.car = { x: -80, y: 262, v: 150, stopped: false };
    this.moto = { x: 382, y: -40, v: 150, ang: 0, down: false };
    this.traffic = [{ x: 300, y: 225, v: -90 }, { x: 900, y: 225, v: -80 }];
    this.decision = null; this.hit = false;
  }
  decide(d) { this.decision = d; this.emit(true); }
  step(dt) {
    this.t += dt;
    const s = this.scn;
    this.traffic.forEach((c) => { c.x += c.v * dt; if (c.x < -100) c.x = 900; });
    if (s === 'choque') {
      const c = this.car, m = this.moto;
      if (!this.hit) {
        c.x += c.v * dt; m.y += m.v * dt;
        if (c.x + 70 >= m.x - 12 && m.y >= c.y - 30) {
          this.hit = true; this.hitAt = this.t;
          for (let i = 0; i < 40; i++) this.sparks.push({ x: m.x, y: m.y, vx: (Math.random() - 0.5) * 260, vy: (Math.random() - 0.5) * 260, life: 0.6 + Math.random() * 0.5 });
        }
      } else {
        m.down = true; m.ang = Math.min(Math.PI / 2, m.ang + dt * 5); m.x = Math.min(m.x + dt * 60, 430); m.y = Math.min(m.y + dt * 30, 300);
      }
    }
    if (s === 'humo' || s === 'parrilla') {
      const growing = s === 'humo';
      const rate = growing ? 10 + this.t * 10 : 6;
      const src = growing ? [620 + Math.sin(this.t) * 20, 110] : [120, 395];
      for (let i = 0; i < rate * dt * 3; i++) this.smoke.push({ x: src[0] + (Math.random() - 0.5) * (growing ? 40 + this.t * 12 : 14), y: src[1], r: growing ? 10 + Math.random() * 14 : 6 + Math.random() * 6, life: growing ? 3.5 : 1.6, a: 0 });
    }
    this.smoke.forEach((p) => { p.a += dt; p.y -= 26 * dt * (1 + p.a); p.x += 10 * dt; p.r += 12 * dt; p.life -= dt; });
    this.smoke = this.smoke.filter((p) => p.life > 0);
    this.sparks.forEach((p) => { p.x += p.vx * dt; p.y += p.vy * dt; p.life -= dt; });
    this.sparks = this.sparks.filter((p) => p.life > 0);
    if (s === 'sabotaje') this.cover = Math.min(0.82, Math.max(0, (this.t - 1.6) * 0.45));
    this.emit();
  }
  smokeArea() { return this.scn === 'humo' ? Math.min(99, 2 + this.t * 5.5) : 1.2; }
  state() {
    const s = this.scn, dec = this.decision;
    const decided = dec === 'ok' ? ['ok', 'Despachado y registrado en la bitácora.'] : dec === 'fp' ? ['info', 'Marcado como falso positivo para reentrenamiento.'] : null;
    if (s === 'choque') {
      const on = this.hit && this.t - this.hitAt > 0.8;
      return { readout: [['Evento', this.hit ? 'Colisión' : 'Flujo normal', this.hit ? 'alert' : 'ok'], ['Vehículos involucrados', this.hit ? '2 (carro + moto)' : '—', 'dim'], ['Persona en la calzada', on ? 'Sí' : '—', on ? 'alert' : 'dim'], ['Confianza', this.hit ? '0,88' : '—', 'info']],
        verdict: decided || (on ? ['alert', 'NOVEDAD VIAL: choque con motorizado. Sugerido: tránsito + ambulancia.'] : ['dim', 'Analizando la intersección…']), alert: on && !dec };
    }
    if (s === 'humo') {
      const a = this.smokeArea(), on = this.t > 4.5;
      return { readout: [['Área de humo', a.toFixed(1).replace('.', ',') + ' m²', on ? 'alert' : 'warn'], ['Persistencia', Math.floor(this.t * 12) + ' s', 'dim'], ['Tendencia', 'Creciente', 'alert'], ['Lugar', 'Terreno baldío', 'dim']],
        verdict: decided || (on ? ['alert', 'HUMO persistente y creciente en terreno baldío. Sugerido: Bomberos.'] : ['warn', 'Humo detectado: midiendo crecimiento antes de alertar…']), alert: on && !dec };
    }
    if (s === 'parrilla') {
      return { readout: [['Área de humo', '1,2 m²', 'ok'], ['Persistencia', Math.floor(this.t * 12) + ' s', 'dim'], ['Tendencia', 'Estable', 'ok'], ['Lugar', 'Venta de comida', 'dim']],
        verdict: ['ok', 'Descartado: humo estable y pequeño de una parrilla de venta de comida.'] };
    }
    const door = this.t > 0.8, vib = this.t > 1.2, batt = this.t > 3.6, on = this.cover > 0.5;
    return { readout: [['Puerta del gabinete', door ? 'ABIERTA' : 'Cerrada', door ? 'alert' : 'ok'], ['Vibración del poste', vib ? '2,8 g' : '0,1 g', vib ? 'warn' : 'ok'], ['Cámara obstruida', Math.round(this.cover * 100) + ' %', on ? 'alert' : 'dim'], ['Batería', batt ? 'Desconectada' : '12,8 V', batt ? 'alert' : 'ok']],
      verdict: decided || (on ? ['alert', 'SABOTAJE en DSIP-07: gabinete abierto y cámara tapada. Sugerido: patrulla.'] : door ? ['warn', 'Sensor de puerta activado: vigilando el nodo…'] : ['dim', 'Nodo DSIP-07 en ronda nocturna.']), alert: on && !dec };
  }
  draw() {
    const g = this.g; this.begin(); const s = this.scn;
    const night = s === 'sabotaje' || s === 'choque';
    g.fillStyle = night ? '#171d2b' : '#222a3a'; g.fillRect(0, 0, VW, VH);
    // aceras y terreno
    g.fillStyle = '#39445b'; [[0, 0, 300, 180], [470, 0, 330, 180], [0, 320, 300, 180], [470, 320, 330, 180]].forEach((r) => g.fillRect(...r));
    g.fillStyle = '#365314'; g.fillRect(520, 20, 260, 140); g.fillStyle = '#4d7c0f'; for (let i = 0; i < 30; i++) g.fillRect(530 + (i * 37) % 240, 30 + (i * 53) % 120, 6, 6);
    g.fillStyle = '#f8fafc'; g.font = '700 11px system-ui'; g.fillText('TERRENO BALDÍO', 600, 40);
    // puesto de comida
    g.fillStyle = '#b91c1c'; g.fillRect(70, 360, 110, 60); g.fillStyle = '#fef3c7'; g.fillText('PERROS · PINCHOS', 78, 395);
    // calles
    g.fillStyle = '#eab308'; for (let x = 0; x < VW; x += 50) if (x < 290 || x > 480) g.fillRect(x, 248, 26, 4);
    for (let y = 0; y < VH; y += 50) if (y < 170 || y > 330) g.fillRect(383, y, 4, 26);
    g.fillStyle = '#cbd5e1'; for (let i = 0; i < 8; i++) { g.fillRect(310 + i * 20, 184, 10, 26); g.fillRect(310 + i * 20, 290, 10, 26); g.fillRect(262, 190 + i * 16, 26, 8); g.fillRect(484, 190 + i * 16, 26, 8); }
    // tráfico de fondo
    this.traffic.forEach((c) => { g.fillStyle = '#64748b'; rr(g, c.x, c.y - 14, 60, 28, 6); g.fill(); if (this.showAI) box(g, c.x - 3, c.y - 17, 66, 34, C.info, this.mini ? '' : 'vehículo', this.mini); });
    if (s === 'choque') {
      const c = this.car, m = this.moto;
      g.fillStyle = '#e11d48'; rr(g, c.x, c.y - 16, 76, 32, 7); g.fill(); g.fillStyle = '#0f172a'; g.fillRect(c.x + 40, c.y - 12, 18, 24);
      g.save(); g.translate(m.x, m.y); g.rotate(m.ang); g.fillStyle = '#0ea5e9'; rr(g, -8, -26, 16, 52, 6); g.fill(); g.restore();
      if (m.down) { g.fillStyle = '#f97316'; g.beginPath(); g.ellipse(m.x + 40, m.y + 26, 22, 9, 0.3, 0, 7); g.fill(); g.fillStyle = '#c68642'; g.beginPath(); g.arc(m.x + 62, m.y + 30, 7, 0, 7); g.fill(); }
      this.sparks.forEach((p) => { g.fillStyle = `rgba(251,191,36,${p.life})`; g.fillRect(p.x, p.y, 3, 3); });
      if (this.showAI) {
        box(g, c.x - 4, c.y - 20, 84, 40, this.hit ? C.alert : C.info, this.hit ? 'colisión' : 'vehículo', this.mini);
        box(g, m.x - 30, m.y - 32, m.down ? 110 : 60, m.down ? 80 : 64, this.hit ? C.alert : C.info, m.down ? 'moto caída + persona' : 'moto', this.mini);
      }
    }
    // humo
    this.smoke.forEach((p) => { g.fillStyle = `rgba(203,213,225,${Math.min(0.28, p.life * 0.1)})`; g.beginPath(); g.arc(p.x, p.y, p.r, 0, 7); g.fill(); });
    if (this.showAI && (s === 'humo' || s === 'parrilla') && this.smoke.length) {
      const xs = this.smoke.map((p) => p.x), ys = this.smoke.map((p) => p.y);
      const x0 = Math.max(0, Math.min(...xs) - 20), y0 = Math.max(0, Math.min(...ys) - 20), x1 = Math.min(VW, Math.max(...xs) + 20), y1 = Math.min(VH, Math.max(...ys) + 20);
      box(g, x0, y0, x1 - x0, y1 - y0, s === 'humo' ? (this.t > 4.5 ? C.alert : C.warn) : C.ok, s === 'humo' ? 'humo creciente' : 'humo estable · parrilla', this.mini);
    }
    if (s === 'sabotaje') {
      // poste y gabinete vistos desde la cámara vecina
      g.fillStyle = '#94a3b8'; g.fillRect(560, 60, 12, 280); g.fillStyle = '#cbd5e1'; g.fillRect(580, 270, 60, 80);
      g.save(); g.translate(580, 270); g.fillStyle = '#e2e8f0'; if (this.t > 0.8) { g.transform(1, 0, -0.5, 1, 0, 0); } g.fillRect(this.t > 0.8 ? 60 : 0, 0, this.t > 0.8 ? 12 : 60, 80); g.restore();
      if (this.t > 0.8) { g.fillStyle = '#1e293b'; g.fillRect(590, 280, 40, 60); g.fillStyle = '#0f766e'; g.fillRect(595, 312, 30, 22); }
      // persona manipulando
      const p = new Person({ x: 540, y: 350, h: 130, pose: 'walk', color: '#334155' }); p.draw(g, 0, this.showAI);
      if (this.showAI) box(g, 505, 205, 80, 150, C.alert, 'persona en el gabinete', this.mini);
      // obstrucción de la lente
      if (this.cover > 0) {
        const r = g.createRadialGradient(120, 90, 10, 120, 90, 900 * this.cover);
        r.addColorStop(0, 'rgba(2,6,23,.98)'); r.addColorStop(0.75, 'rgba(2,6,23,.9)'); r.addColorStop(1, 'rgba(2,6,23,0)');
        g.fillStyle = r; g.fillRect(0, 0, VW, VH);
        if (this.cover > 0.5) { g.fillStyle = C.alert; g.font = '800 22px system-ui'; g.fillText(`⚠ CÁMARA OBSTRUIDA ${Math.round(this.cover * 100)} %`, 230, 250); }
      }
    }
    stamp(g, `${clockText(s === 'sabotaje' ? 2 : null, s === 'sabotaje' ? 15 : null)} · ${s === 'sabotaje' ? 'CAM DSIP-06 → DSIP-07' : 'CAM DSIP-04 · INTERSECCIÓN'}`);
  }
}

/* =========================== IA-05 AUDIO =========================== */
const CLASSES = ['Grito', 'Disparo', 'Pirotecnia', 'Vidrio roto', 'Moto/escape', 'Ambiente'];
const TARGETS = {
  grito: [0.87, 0.03, 0.02, 0.02, 0.02, 0.04], disparo: [0.03, 0.82, 0.11, 0.02, 0.01, 0.01],
  coheton: [0.02, 0.12, 0.91, 0.01, 0.01, 0.03], moto: [0.01, 0.03, 0.02, 0.01, 0.93, 0.05],
  vidrio: [0.03, 0.04, 0.02, 0.85, 0.01, 0.05],
};
export class AudioScene extends Base {
  constructor(c, o) {
    super(c, o);
    this.spec = document.createElement('canvas'); this.spec.width = 360; this.spec.height = 64;
    this.sg = this.spec.getContext('2d'); this.sg.fillStyle = '#05060f'; this.sg.fillRect(0, 0, 360, 64);
    this.wave = new Array(240).fill(0); this.festive = false;
    this.pal = Array.from({ length: 256 }, (_, i) => { const t = i / 255; return `rgb(${Math.round(255 * Math.min(1, t * 1.6))},${Math.round(255 * Math.max(0, t * 1.4 - 0.45))},${Math.round(90 + 140 * Math.sin(Math.PI * t) - 60 * t)})`; });
  }
  reset() { this.probs = [0.02, 0.01, 0.02, 0.01, 0.04, 0.9]; this.decision = null; }
  setFestive(on) { this.festive = on; this.emit(true); }
  decide(d) { this.decision = d; this.emit(true); }
  spectrum() { // 64 bandas (0 = graves abajo)
    const t = this.t, s = this.scn, b = new Float32Array(64);
    for (let i = 0; i < 64; i++) b[i] = 0.08 + Math.random() * 0.07 + (i < 10 ? 0.12 : 0);
    const ev = (t0, t1) => t >= t0 && t <= t1;
    if (s === 'grito' && ev(1, 2.8)) { const f = 20 + Math.sin(t * 30) * 1.5; [1, 2, 3].forEach((h) => { const k = Math.round(f * h * 0.55); if (k < 64) { b[k] += 0.9 / h; b[k + 1] += 0.5 / h; } }); }
    if (s === 'disparo') [1.2, 1.7].forEach((t0) => { if (ev(t0, t0 + 0.12)) for (let i = 0; i < 64; i++) b[i] += 0.95 - (t - t0) * 5; });
    if (s === 'coheton') { if (ev(0.6, 1.4)) { const k = Math.round(20 + (t - 0.6) * 45); b[k] += 0.9; } if (ev(1.45, 1.55)) for (let i = 0; i < 64; i++) b[i] += 0.9; if (ev(1.6, 2.6) && Math.random() > 0.6) for (let i = 20; i < 64; i++) b[i] += Math.random() * 0.6; }
    if (s === 'moto' && ev(0.5, 3.2)) { const a = 1 - Math.abs(t - 1.8) / 1.4; [4, 8, 12, 16].forEach((k) => { b[k] += a * 0.8; b[k + 1] += a * 0.4; }); }
    if (s === 'vidrio' && ev(1.2, 1.9)) for (let i = 34; i < 64; i++) if (Math.random() > 0.45) b[i] += 0.9 * (1.9 - t);
    return b;
  }
  step(dt) {
    this.t += dt;
    const b = this.spectrum();
    // desplaza espectrograma
    const sg = this.sg; sg.drawImage(this.spec, -2, 0);
    for (let i = 0; i < 64; i++) { sg.fillStyle = this.pal[Math.max(0, Math.min(255, Math.round(b[i] * 255)))]; sg.fillRect(358, 63 - i, 2, 1); }
    const amp = b.reduce((a, v) => a + v, 0) / 64;
    this.wave.push(amp); this.wave.shift();
    const active = this.t > 1.1 && TARGETS[this.scn];
    const tgt = active ? TARGETS[this.scn] : [0.02, 0.01, 0.02, 0.01, 0.04, 0.9];
    const adj = tgt.slice();
    if (this.festive && active) { adj[2] = Math.min(0.97, adj[2] + 0.06); if (this.scn === 'disparo') { adj[1] = 0.71; adj[2] = 0.24; } }
    this.probs = this.probs.map((p, i) => p + (adj[i] - p) * Math.min(1, dt * 3));
    this.emit();
  }
  state() {
    const top = this.probs.indexOf(Math.max(...this.probs));
    const conf = this.probs[top];
    const settled = this.t > 2.2;
    const cls = CLASSES[top];
    const f = (v) => v.toFixed(2).replace('.', ',');
    let verdict = ['dim', 'Escuchando… (búfer de 2 s en memoria, nada se graba)'], alert = false;
    if (settled) {
      if (this.scn === 'grito') { verdict = ['alert', `ALERTA IA-05: grito de auxilio (${f(conf)}). El PTZ se orienta y el operador verifica con video.`]; alert = true; }
      if (this.scn === 'disparo') { verdict = this.festive ? ['warn', `Posible detonación (${f(conf)}) en temporada festiva: prioridad media, confirmar con video.`] : ['alert', `ALERTA IA-05: detonación (${f(conf)}). Prioridad alta: patrulla + verificación con video.`]; alert = true; }
      if (this.scn === 'coheton') verdict = ['ok', `Descartado: pirotecnia (${f(conf)}), no es un disparo.`];
      if (this.scn === 'moto') verdict = ['ok', `Descartado: escape de moto (${f(conf)}).`];
      if (this.scn === 'vidrio') { verdict = ['alert', `ALERTA IA-05: rotura de vidrio (${f(conf)}). Posible robo a comercio.`]; alert = true; }
    }
    if (this.decision === 'ok') { verdict = ['ok', 'Unidad despachada tras verificar con el PTZ. Registrado en la bitácora.']; alert = false; }
    if (this.decision === 'fp') { verdict = ['info', 'Marcado como falso positivo para reentrenar el modelo.']; alert = false; }
    return { readout: [['Clase principal', settled ? cls : '—', alert ? 'alert' : 'info'], ['Confianza', settled ? f(conf) : '—', 'dim'], ['Temporada festiva', this.festive ? 'Activa' : 'No', this.festive ? 'warn' : 'dim'], ['Audio almacenado', '0 bytes', 'ok']], verdict, alert: alert && !this.decision };
  }
  draw() {
    const g = this.g; this.begin();
    g.fillStyle = '#060a14'; g.fillRect(0, 0, VW, VH);
    g.fillStyle = '#94a3b8'; g.font = '700 12px ui-monospace, Menlo, monospace';
    g.fillText('MICRÓFONO DSIP-02 · FORMA DE ONDA', 20, 26);
    g.strokeStyle = '#34d399'; g.lineWidth = 1.5; g.beginPath();
    this.wave.forEach((a, i) => { const x = 20 + i * (760 / 240), h = a * 90 * (i % 2 ? 1 : -1); if (i) g.lineTo(x, 88 + h); else g.moveTo(x, 88 + h); });
    g.stroke();
    g.fillText('ESPECTROGRAMA (0–8 kHz)', 20, 160);
    g.imageSmoothingEnabled = false; g.drawImage(this.spec, 20, 168, 760, 170); g.imageSmoothingEnabled = true;
    g.strokeStyle = 'rgba(148,163,184,.3)'; g.strokeRect(20, 168, 760, 170);
    // barras de clases
    const top = this.probs.indexOf(Math.max(...this.probs));
    CLASSES.forEach((c, i) => {
      const x = 20 + (i % 3) * 255, y = 360 + Math.floor(i / 3) * 56;
      g.fillStyle = '#cbd5e1'; g.font = '700 13px system-ui'; g.fillText(c, x, y + 14);
      g.fillStyle = 'rgba(148,163,184,.18)'; rr(g, x, y + 22, 230, 12, 6); g.fill();
      const danger = ['Grito', 'Disparo', 'Vidrio roto'].includes(c);
      g.fillStyle = i === top && this.t > 1.1 ? (danger ? C.alert : C.ok) : '#6366f1';
      rr(g, x, y + 22, Math.max(4, 230 * this.probs[i]), 12, 6); g.fill();
      g.fillStyle = '#94a3b8'; g.font = '600 12px ui-monospace, monospace'; g.fillText(this.probs[i].toFixed(2).replace('.', ','), x + 190, y + 14);
    });
    g.fillStyle = 'rgba(16,185,129,.15)'; rr(g, 520, 12, 260, 24, 6); g.fill();
    g.fillStyle = '#6ee7b7'; g.font = '700 12px system-ui'; g.fillText('● Búfer 2 s en RAM · 0 bytes grabados', 532, 29);
  }
}

/* =========================== IA-06 MULTITUDES =========================== */
export class CrowdScene extends Base {
  reset() {
    const n = this.scn === 'aforo' ? 260 : this.scn === 'cola' ? 120 : this.scn === 'estampida' ? 540 : 420;
    this.agents = Array.from({ length: n }, (_, i) => this.spawn(i));
    this.panicAt = this.scn === 'estampida' ? 2.4 : Infinity;
    this.queue = 0; this.decision = null; this.maxFlow = 0;
  }
  decide(d) { this.decision = d; this.emit(true); }
  spawn(i) {
    const s = this.scn;
    if (s === 'procesion') { const u = Math.random(); return { u, off: (Math.random() - 0.5) * 36, v: 0.018 + Math.random() * 0.006, x: 0, y: 0 }; }
    if (s === 'cola') return { x: 180 + Math.random() * 380, y: 150 + Math.random() * 220, vx: 0, vy: 0, q: -1 };
    if (s === 'aforo') { const x = 120 + Math.random() * 560, y = 110 + Math.random() * 300; return { x, y, tx: x, ty: y, vx: 0, vy: 0 }; }
    const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * 95; // estampida: salida de misa, plaza llena
    return { x: 380 + Math.cos(a) * r * 1.5, y: 250 + Math.sin(a) * r, vx: 0, vy: 0 };
  }
  step(dt) {
    this.t += dt; const s = this.scn;
    if (s === 'aforo' && this.agents.length < 1240 && this.t < 7) for (let k = 0; k < 170 * dt; k++) { const e = Math.random() > 0.5; this.agents.push({ x: e ? 105 : 695, y: 260 + (Math.random() - 0.5) * 60, tx: 120 + Math.random() * 560, ty: 110 + Math.random() * 300, vx: 0, vy: 0 }); }
    if (s === 'cola' && this.queue < 75) this.queue += dt * 16;
    let flow = 0;
    this.agents.forEach((a, i) => {
      if (s === 'procesion') {
        a.u = (a.u + a.v * dt) % 1;
        const p = this.path(a.u); a.x = p[0] + a.off * p[2]; a.y = p[1] + a.off * p[3];
        flow += 25;
        return;
      }
      if (s === 'cola') {
        if (i < this.queue) { // la cola sale de la puerta del banco y dobla hacia la vía de emergencia
          const d = i * 7;
          const qx = d < 255 ? 705 - d : 450, qy = d < 255 ? 255 : 255 + (d - 255);
          a.x += (qx - a.x) * dt * 2.5; a.y += (qy - a.y) * dt * 2.5;
        } else { a.x += Math.sin(this.t + i) * 8 * dt; a.y += Math.cos(this.t * 0.7 + i) * 8 * dt; }
        return;
      }
      if (s === 'aforo') { // cada persona camina hacia un punto libre de la plaza
        a.vx += ((a.tx - a.x) * 1.5 - a.vx) * Math.min(1, dt * 4) + (Math.random() - 0.5) * 20 * dt;
        a.vy += ((a.ty - a.y) * 1.5 - a.vy) * Math.min(1, dt * 4) + (Math.random() - 0.5) * 20 * dt;
        const sp = Math.hypot(a.vx, a.vy); if (sp > 45) { a.vx *= 45 / sp; a.vy *= 45 / sp; }
        a.x += a.vx * dt; a.y += a.vy * dt; flow += sp;
        return;
      }
      if (this.t > this.panicAt) { // huida radial desde el punto de pánico
        const dx = a.x - 340, dy = a.y - 250, d = Math.hypot(dx, dy) || 1;
        a.vx += (dx / d) * 220 * dt; a.vy += (dy / d) * 220 * dt;
        const sp = Math.hypot(a.vx, a.vy); if (sp > 120) { a.vx *= 120 / sp; a.vy *= 120 / sp; }
      } else { a.vx += (Math.random() - 0.5) * 30 * dt; a.vy += (Math.random() - 0.5) * 30 * dt; a.vx *= 0.95; a.vy *= 0.95; }
      a.x += a.vx * dt; a.y += a.vy * dt;
      flow += Math.hypot(a.vx, a.vy);
    });
    this.flow = this.agents.length ? flow / this.agents.length : 0;
    this.maxFlow = Math.max(this.maxFlow, this.flow);
    this.emit();
  }
  path(u) { // recorrido de la procesión alrededor de la plaza (rectángulo redondeado)
    const pts = [[140, 110], [660, 110], [660, 400], [140, 400]];
    const k = u * 4, i = Math.floor(k), f = k - i, a = pts[i % 4], b = pts[(i + 1) % 4];
    const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy);
    return [a[0] + dx * f, a[1] + dy * f, -dy / L, dx / L];
  }
  density() {
    const cell = 40, cols = Math.ceil(VW / cell), rows = Math.ceil(VH / cell), grid = new Uint16Array(cols * rows);
    this.agents.forEach((a) => { const cx = Math.floor(a.x / cell), cy = Math.floor(a.y / cell); if (cx >= 0 && cy >= 0 && cx < cols && cy < rows) grid[cy * cols + cx]++; });
    return { grid, cols, rows, cell };
  }
  state() {
    const d = this.density(); const peak = Math.max(...d.grid) / 16; // 1 px ≈ 0,1 m → celda de 40 px ≈ 16 m²
    const n = this.agents.length, s = this.scn;
    const f1 = (v) => v.toFixed(1).replace('.', ',');
    const vel = (this.flow || 0) / 28; // tiempo de la simulación acelerado
    let verdict = ['ok', 'Densidad normal: sin riesgo.'], alert = false;
    if (s === 'procesion') verdict = ['ok', 'Procesión fluyendo con densidad segura. Sin alerta.'];
    if (s === 'cola' && this.queue > 66) { verdict = ['alert', 'ALERTA IA-06: la cola del banco invade la vía de emergencia. Coordinar con el banco y tránsito.']; alert = true; }
    else if (s === 'cola') verdict = ['warn', 'Cola en crecimiento frente al banco…'];
    if (s === 'estampida' && this.t > this.panicAt + 0.4) { verdict = ['alert', 'ALERTA IA-06: dispersión súbita (posible estampida). Protección Civil + policía.']; alert = true; }
    if (s === 'aforo') { if (n > 1000) { verdict = ['alert', `ALERTA IA-06: aforo excedido (${n.toLocaleString('es-VE')} / 1.000). Cerrar accesos y abrir salidas.`]; alert = true; } else verdict = ['warn', `Ingreso a la plaza: ${n.toLocaleString('es-VE')} / 1.000 personas.`]; }
    if (this.decision === 'ok') { verdict = ['ok', 'Protección Civil notificada; mensaje de rutas alternas en las vallas LED.']; alert = false; }
    if (this.decision === 'fp') { verdict = ['info', 'Marcado como falso positivo para reentrenar el modelo.']; alert = false; }
    return { readout: [['Personas (conteo)', n.toLocaleString('es-VE'), 'info'], ['Densidad pico', f1(peak) + ' p/m²', peak > 2.5 ? 'alert' : peak > 1.5 ? 'warn' : 'ok'], ['Velocidad media', f1(vel) + ' m/s', vel > 2 ? 'alert' : 'dim'], ['Identificación', 'Ninguna (anónimo)', 'ok']], verdict, alert: alert && !this.decision };
  }
  draw() {
    const g = this.g; this.begin(); const s = this.scn;
    g.fillStyle = '#1b2334'; g.fillRect(0, 0, VW, VH);
    g.fillStyle = '#2b3650'; g.fillRect(100, 90, 600, 340);                       // plaza
    g.fillStyle = '#3f3a2f'; g.fillRect(300, 20, 200, 60); g.beginPath(); g.moveTo(290, 22); g.lineTo(400, 2); g.lineTo(510, 22); g.fill();
    g.fillStyle = '#e2e8f0'; g.font = '800 12px system-ui'; g.fillText('IGLESIA', 374, 58);
    g.fillStyle = '#1e3a8a'; g.fillRect(712, 200, 80, 110); g.fillStyle = '#e2e8f0'; g.fillText('BANCO', 728, 260);
    g.strokeStyle = 'rgba(244,63,94,.7)'; g.setLineDash([8, 6]); g.lineWidth = 2; g.strokeRect(300, 440, 400, 44); g.setLineDash([]);
    g.fillStyle = '#fda4af'; g.font = '700 11px system-ui'; g.fillText('VÍA DE EMERGENCIA', 440, 466);
    g.fillStyle = '#166534'; [[160, 150], [640, 150], [160, 380], [640, 380], [400, 250]].forEach(([x, y]) => { g.beginPath(); g.arc(x, y, 16, 0, 7); g.fill(); });
    if (this.showAI) { // mapa de calor
      const d = this.density();
      for (let y = 0; y < d.rows; y++) for (let x = 0; x < d.cols; x++) {
        const v = d.grid[y * d.cols + x] / 16; if (v < 0.3) continue;
        const col = v > 2.5 ? '244,63,94' : v > 1.5 ? '245,158,11' : '52,211,153';
        g.fillStyle = `rgba(${col},${Math.min(0.5, 0.12 + v * 0.12)})`; g.fillRect(x * d.cell, y * d.cell, d.cell, d.cell);
      }
    }
    g.fillStyle = '#e2e8f0';
    const panic = this.t > this.panicAt;
    this.agents.forEach((a) => { g.fillStyle = panic ? '#fecaca' : '#e2e8f0'; g.fillRect(a.x - 1.8, a.y - 1.8, 3.6, 3.6); });
    if (this.showAI && panic) { // vectores de flujo
      g.strokeStyle = 'rgba(244,63,94,.9)'; g.lineWidth = 2;
      for (let k = 0; k < 16; k++) { const an = (k / 16) * Math.PI * 2; g.beginPath(); g.moveTo(340 + Math.cos(an) * 40, 250 + Math.sin(an) * 30); g.lineTo(340 + Math.cos(an) * 90, 250 + Math.sin(an) * 70); g.stroke(); }
    }
    g.fillStyle = 'rgba(16,185,129,.15)'; rr(g, 12, 12, 250, 24, 6); g.fill();
    g.fillStyle = '#6ee7b7'; g.font = '700 12px system-ui'; g.fillText('● Solo puntos anónimos · sin rostros', 22, 29);
    stamp(g, `${clockText()} · CAM DSIP-09 · PLAZA${s === 'cola' ? ' / BANCO' : ''}`);
  }
}

export const SCENES = {
  caida: { cls: FallScene, code: 'IA-01', title: 'Persona caída o desmayada', cam: 'CAM DSIP-04 · PARADA',
    desc: 'Detecta a una persona que cae y queda inmóvil. Cuenta los segundos antes de alertar para no confundir a quien se sienta o se agacha.',
    scenarios: [['caida', 'Se desmaya en la parada'], ['sentado', 'Se sienta en el brocal'], ['taller', 'Mecánico bajo un carro'], ['calle', 'Persona durmiendo en la calle']] },
  novedades: { cls: NoveltyScene, code: 'IA-02 · 03 · 04', title: 'Novedades viales, humo y sabotaje', cam: 'CAM DSIP-04 · INTERSECCIÓN',
    desc: 'Choques y motos caídas, humo que crece en un terreno y ataques al propio nodo. Distingue el humo estable de una parrilla del de un incendio.',
    scenarios: [['choque', 'Choque con motorizado'], ['humo', 'Humo en terreno baldío'], ['parrilla', 'Parrilla de venta de comida'], ['sabotaje', 'Robo de batería (2:15 a. m.)']] },
  audio: { cls: AudioScene, code: 'IA-05', title: 'Gritos, disparos y vidrios', cam: 'MICRÓFONO DSIP-02',
    desc: 'Clasifica sonidos en el propio poste sin grabar nada. Aprende a diferenciar un cohetón o el escape de una moto de un disparo.',
    scenarios: [['grito', 'Grito de auxilio'], ['disparo', 'Disparo'], ['coheton', 'Cohetón'], ['moto', 'Moto con escape'], ['vidrio', 'Vidrio roto']] },
  multitud: { cls: CrowdScene, code: 'IA-06', title: 'Aglomeraciones y multitudes', cam: 'CAM DSIP-09 · PLAZA',
    desc: 'Mide densidad y flujo con puntos anónimos. Alerta cuando hay riesgo para la vida: estampidas, aforo excedido o colas que bloquean una vía de emergencia.',
    scenarios: [['procesion', 'Procesión'], ['cola', 'Cola en el banco'], ['estampida', 'Estampida'], ['aforo', 'Aforo excedido']] },
};
