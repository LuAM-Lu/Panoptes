// Escenas 2D ilustrativas de la IA con estilo de ilustración técnica (fondo claro, trazo de tinta).
// Coordenadas virtuales 800×500 escaladas al canvas. Cada escena expone set(), step(dt), draw()
// y comunica su estado con onUpdate(). Con { simple: true } se ocultan los detalles técnicos.

const VW = 800, VH = 500;
let FS = 1;
const INK = '#262b33', BLUE = '#2446a6', ALERT = '#d92d20', GRAY = '#8793a5';
const FILL = { bg: '#f7f8fa', lot: '#eef0f3', road: '#e2e5ea', mark: '#ffffff', wall: '#eceef2', skin: '#e6b98f' };

function rr(g, x, y, w, h, r) { g.beginPath(); if (g.roundRect) g.roundRect(x, y, w, h, r); else g.rect(x, y, w, h); }
function shape(g, fill, stroke = INK, lw = 2) { if (fill) { g.fillStyle = fill; g.fill(); } if (stroke) { g.lineWidth = lw; g.strokeStyle = stroke; g.stroke(); } }
function rect(g, x, y, w, h, fill, lw = 2, r = 0) { rr(g, x, y, w, h, r); shape(g, fill, INK, lw); }
function tag(g, x, y, text, color) {
  const fs = 13 * FS, h = 20 * FS;
  g.font = `700 ${fs}px "Plus Jakarta Sans", system-ui, sans-serif`;
  const w = g.measureText(text).width + 14 * FS;
  const ty = Math.max(h + 2, y);
  g.fillStyle = color; rr(g, x, ty - h, w, h, 4 * FS); g.fill();
  g.fillStyle = '#ffffff'; g.fillText(text, x + 7 * FS, ty - 6 * FS);
}
function box(g, x, y, w, h, color, label) {
  g.setLineDash([]); g.lineWidth = 2.5; g.strokeStyle = color; rr(g, x, y, w, h, 6); g.stroke();
  if (label) tag(g, x, y - 3, label, color);
}
function stamp(g, text) {
  g.font = `600 ${12 * FS}px "Plus Jakarta Sans", system-ui, sans-serif`;
  const h = 20 * FS, w = g.measureText(text).width + 16;
  g.fillStyle = 'rgba(255,255,255,.9)'; rr(g, 10, VH - h - 10, w, h, 4); g.fill();
  g.lineWidth = 1; g.strokeStyle = '#dde2e9'; g.stroke();
  g.fillStyle = '#46546a'; g.fillText(text, 18, VH - 10 - h * 0.3);
}
function clockText(h, m) {
  const d = new Date();
  return `${String(h ?? d.getHours()).padStart(2, '0')}:${String(m ?? d.getMinutes()).padStart(2, '0')}`;
}
function rng(seed) { let s = seed; return () => ((s = (s * 16807) % 2147483647) / 2147483647); }

class Base {
  constructor(canvas, { mini = false, simple = false, onUpdate = () => {} } = {}) {
    this.c = canvas; this.g = canvas.getContext('2d'); this.mini = mini; this.simple = simple; this.onUpdate = onUpdate;
    this.t = 0; this.scn = null; this.showAI = true; this.lastEmit = '';
    this.resize();
  }
  resize() {
    const r = this.c.getBoundingClientRect();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    this.c.width = Math.max(1, Math.round(r.width * dpr));
    this.c.height = Math.max(1, Math.round(r.height * dpr));
    this.s = (r.width / VW) * dpr; this.sy = (r.height / VH) * dpr;
    this.fs = Math.min(2.2, Math.max(1, (VW / Math.max(1, r.width)) * 0.85));
  }
  begin() {
    FS = this.fs; const g = this.g;
    g.setTransform(this.s, 0, 0, this.sy, 0, 0);
    g.fillStyle = FILL.bg; g.fillRect(0, 0, VW, VH);
    g.lineJoin = 'round'; g.lineCap = 'round';
  }
  set(scn) { this.scn = scn; this.t = 0; this.reset(); this.emit(true); }
  reset() {}
  emit(force) {
    const st = this.state();
    const key = JSON.stringify(st);
    if (force || key !== this.lastEmit) { this.lastEmit = key; this.onUpdate(st); }
  }
}

/* =========================== IA-01 PERSONA CAÍDA =========================== */
class Person {
  constructor(o) { Object.assign(this, { x: 0, y: 400, h: 150, v: 0, phase: 0, pose: 'walk', ang: 0, color: '#5b8def', dir: 1 }, o); }
  joints() {
    const { x, y, h } = this;
    const sw = this.pose === 'walk' ? Math.sin(this.phase) : 0;
    let j;
    if (this.pose === 'sit') {
      j = { head: [x, y - h * 0.62], neck: [x, y - h * 0.55], shoulder: [x, y - h * 0.5], hip: [x, y - h * 0.18],
        kneeL: [x + h * 0.2 * this.dir, y - h * 0.2], kneeR: [x + h * 0.18 * this.dir, y - h * 0.16],
        footL: [x + h * 0.22 * this.dir, y], footR: [x + h * 0.2 * this.dir, y],
        handL: [x + h * 0.12 * this.dir, y - h * 0.22], handR: [x + h * 0.1 * this.dir, y - h * 0.25] };
    } else {
      j = { head: [x, y - h * 0.93], neck: [x, y - h * 0.84], shoulder: [x, y - h * 0.8], hip: [x, y - h * 0.5],
        kneeL: [x + sw * h * 0.1, y - h * 0.26], kneeR: [x - sw * h * 0.1, y - h * 0.26],
        footL: [x + sw * h * 0.18, y], footR: [x - sw * h * 0.18, y],
        handL: [x - sw * h * 0.14, y - h * 0.5], handR: [x + sw * h * 0.14, y - h * 0.5] };
    }
    if (this.ang) {
      const a = this.ang * this.dir, ca = Math.cos(a), sa = Math.sin(a);
      Object.keys(j).forEach((k) => { const dx = j[k][0] - x, dy = j[k][1] - y; j[k] = [x + dx * ca - dy * sa, y + dx * sa + dy * ca]; });
    }
    return j;
  }
  draw(g, keypoints) {
    const j = this.joints(), h = this.h;
    const seg = (a, b, w, col) => { g.strokeStyle = col; g.lineWidth = w; g.beginPath(); g.moveTo(...j[a]); g.lineTo(...j[b]); g.stroke(); };
    // trazo de tinta debajo, color encima
    [['hip', 'kneeL'], ['kneeL', 'footL'], ['hip', 'kneeR'], ['kneeR', 'footR']].forEach(([a, b]) => { seg(a, b, h * 0.085, INK); seg(a, b, h * 0.05, '#46546a'); });
    seg('shoulder', 'hip', h * 0.15, INK); seg('shoulder', 'hip', h * 0.115, this.color);
    [['shoulder', 'handL'], ['shoulder', 'handR']].forEach(([a, b]) => { seg(a, b, h * 0.07, INK); seg(a, b, h * 0.04, this.color); });
    g.beginPath(); g.arc(...j.head, h * 0.075, 0, Math.PI * 2); shape(g, FILL.skin, INK, 2);
    if (keypoints) {
      g.fillStyle = BLUE;
      Object.values(j).forEach(([px, py]) => { g.beginPath(); g.arc(px, py, 3, 0, Math.PI * 2); g.fill(); });
    }
    const xs = Object.values(j).map((p) => p[0]), ys = Object.values(j).map((p) => p[1]);
    const pad = h * 0.1;
    return [Math.min(...xs) - pad, Math.min(...ys) - pad - h * 0.05, Math.max(...xs) - Math.min(...xs) + pad * 2, Math.max(...ys) - Math.min(...ys) + pad * 2 + h * 0.05];
  }
}

function streetBackdrop(g, win) {
  // edificios en línea
  [[0, 110, 170], [175, 70, 130], [310, 140, 140], [455, 90, 110], [570, 60, 120], [695, 120, 105]].forEach(([x, y, w]) => {
    rect(g, x + 4, y, w - 8, 330 - y, FILL.wall);
    for (let yy = y + 16; yy < 300; yy += 34) for (let xx = x + 16; xx < x + w - 24; xx += 30) rect(g, xx, yy, 14, 18, win(xx, yy) ? '#fbe7b8' : '#ffffff', 1.4);
  });
  // farol
  g.strokeStyle = INK; g.lineWidth = 5; g.beginPath(); g.moveTo(470, 330); g.lineTo(470, 160); g.lineTo(505, 160); g.stroke();
  g.strokeStyle = '#8b929c'; g.lineWidth = 3; g.beginPath(); g.moveTo(470, 330); g.lineTo(470, 160); g.lineTo(505, 160); g.stroke();
  rect(g, 494, 160, 24, 10, '#ffffff', 2, 3);
  // acera y calle
  rect(g, -4, 330, VW + 8, 80, '#e9ebef');
  rect(g, -4, 410, VW + 8, 94, FILL.road);
  for (let x = 20; x < VW; x += 90) rect(g, x, 456, 50, 6, FILL.mark, 1.2, 2);
}

export class FallScene extends Base {
  constructor(c, o) { super(c, o); const r = rng(7); this.lit = new Set(Array.from({ length: 40 }, () => Math.floor(r() * 80))); }
  reset() {
    this.people = [
      new Person({ x: 40, y: 395, h: 140, v: 38, color: '#8fb3e8', phase: 1 }),
      new Person({ x: 700, y: 405, h: 150, v: -30, color: '#b9c1cd', dir: -1, phase: 2 }),
    ];
    this.subject = null; this.fallAt = null; this.decision = null;
    if (this.scn === 'caida') this.subject = new Person({ x: 170, y: 400, h: 150, v: 34, color: '#f08a4b' });
    if (this.scn === 'sentado') this.subject = new Person({ x: 180, y: 400, h: 150, v: 36, color: '#f08a4b' });
    if (this.scn === 'calle') this.subject = new Person({ x: 330, y: 392, h: 140, pose: 'lie', ang: Math.PI / 2, color: '#8793a5' });
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
          ['Tiempo inmóvil', fallen ? `${im} s de 45 s` : 'No aplica', alert ? 'alert' : 'dim'], ['Cámara PTZ', alert ? 'Enfocando a la persona' : 'En ronda', 'dim']],
        verdict: this.decision === 'ok' ? ['ok', 'Ambulancia enviada. Queda registrado en la bitácora.']
          : this.decision === 'fp' ? ['info', 'Marcado como falsa alarma: se usa para mejorar el modelo.']
            : alert ? ['alert', 'Alerta: persona caída e inmóvil en la parada. Esperando confirmación del operador.']
              : fallen ? ['warn', 'Posible caída: el sistema espera 45 segundos antes de alertar.'] : ['dim', 'Vigilando la parada de autobús.'],
        alert: alert && !this.decision,
      };
    }
    if (s === 'sentado') return { readout: [['Postura', this.subject.pose === 'sit' ? 'Sentada' : 'De pie', 'ok']], verdict: ['ok', 'Sin alerta: la persona se sentó, no se cayó.'] };
    if (s === 'taller') return { readout: [['Zona', 'Taller en la acera', 'warn']], verdict: ['ok', 'Sin alerta: la zona del taller está excluida.'] };
    return { readout: [['Postura', 'Acostada, sin caída', 'warn']], verdict: ['info', 'Aviso a servicios sociales, no a la policía.'] };
  }
  draw() {
    const g = this.g; this.begin();
    streetBackdrop(g, (x, y) => this.lit.has(Math.floor((x * 7 + y * 3) / 13) % 80));
    // parada de autobús
    g.strokeStyle = INK; g.lineWidth = 5; [[150, 250, 400], [320, 250, 400]].forEach(([x, y0, y1]) => { g.beginPath(); g.moveTo(x, y0); g.lineTo(x, y1); g.stroke(); });
    rect(g, 156, 262, 164, 86, 'rgba(206,224,245,.45)', 1.5);
    rect(g, 140, 242, 196, 20, BLUE, 2, 3);
    g.fillStyle = '#ffffff'; g.font = '800 13px "Plus Jakarta Sans", system-ui'; g.fillText('PARADA', 212, 257);
    rect(g, 180, 358, 110, 10, '#b9c1cd', 1.5, 2);
    // taller mecánico
    rect(g, 560, 246, 200, 24, '#ffffff', 2, 3); g.fillStyle = INK; g.font = '800 13px "Plus Jakarta Sans", system-ui'; g.fillText('TALLER MECÁNICO', 600, 263);
    rect(g, 590, 345, 150, 45, '#a9c7ea', 2, 10); rect(g, 620, 324, 80, 25, '#dfe8f4', 2, 8);
    [615, 715].forEach((x) => { g.beginPath(); g.arc(x, 392, 14, 0, 7); shape(g, '#46546a'); });
    if (this.scn === 'taller') { g.strokeStyle = INK; g.lineWidth = 10; g.beginPath(); g.moveTo(652, 400); g.lineTo(612, 403); g.moveTo(652, 400); g.lineTo(614, 394); g.stroke(); }
    if (this.scn === 'calle') rect(g, 250, 382, 170, 14, '#d9c49a', 2, 2);

    const ai = this.showAI;
    if (ai && !this.simple && (this.scn === 'taller' || this.scn === 'caida')) {
      g.save(); g.setLineDash([7, 6]); g.lineWidth = 2; g.strokeStyle = GRAY; g.strokeRect(556, 300, 214, 112); g.restore();
      tag(g, 558, 426, 'Zona excluida', GRAY);
    }
    this.people.forEach((p) => {
      const b = p.draw(g, ai && !this.simple && p.pose !== 'lie');
      if (!ai) return;
      if (p === this.subject) {
        const im = this.immobile();
        let col = BLUE, lab = 'Persona';
        if (this.scn === 'caida' && this.fallAt != null && this.t >= this.fallAt) { col = im >= 45 ? ALERT : BLUE; lab = im >= 45 ? `Persona caída: ${im} s` : `En el suelo: ${im} s`; }
        if (this.scn === 'sentado' && p.pose === 'sit') lab = 'Sentada';
        if (this.scn === 'calle') { col = GRAY; lab = 'En reposo'; }
        box(g, ...b, col, lab);
      } else if (!this.simple) box(g, ...b, BLUE, '');
    });
    if (this.scn === 'caida' && this.immobile() >= 45 && this.subject) { // recuadro de la cámara PTZ
      const [ix, iy, iw, ih] = [560, 24, 220, 138];
      g.save(); rr(g, ix, iy, iw, ih, 8); g.clip();
      g.fillStyle = '#e9ebef'; g.fillRect(ix, iy, iw, ih);
      g.translate(ix + iw / 2, iy + ih * 0.72); g.scale(1.6, 1.6); g.translate(-this.subject.x - 40, -this.subject.y);
      this.subject.draw(g, false); g.restore();
      g.lineWidth = 3; g.strokeStyle = ALERT; rr(g, ix, iy, iw, ih, 8); g.stroke();
      tag(g, ix + 8, iy + 26, 'Cámara PTZ acercando', ALERT);
    }
    if (!this.simple) stamp(g, `${clockText()}  Cámara DSIP-04, parada`);
  }
}

/* ======================= IA-02/03/04 NOVEDADES Y SABOTAJE ======================= */
function topCar(g, x, y, w, h, fill, rot = 0) {
  g.save(); g.translate(x + w / 2, y + h / 2); g.rotate(rot);
  rect(g, -w / 2, -h / 2, w, h, fill, 2, 7);
  rect(g, w * 0.08, -h / 2 + 4, w * 0.22, h - 8, '#dfe8f4', 1.5, 3);
  g.restore();
}
export class NoveltyScene extends Base {
  reset() {
    this.smoke = []; this.sparks = []; this.cover = 0;
    this.car = { x: -80, y: 262, v: 150 };
    this.moto = { x: 382, y: -40, v: 150, ang: 0, down: false };
    this.traffic = [{ x: 300, y: 225, v: -90 }, { x: 900, y: 225, v: -80 }];
    this.decision = null; this.hit = false;
  }
  decide(d) { this.decision = d; this.emit(true); }
  step(dt) {
    this.t += dt; const s = this.scn;
    this.traffic.forEach((c) => { c.x += c.v * dt; if (c.x < -100) c.x = 900; });
    if (s === 'choque') {
      const c = this.car, m = this.moto;
      if (!this.hit) {
        c.x += c.v * dt; m.y += m.v * dt;
        if (c.x + 70 >= m.x - 12 && m.y >= c.y - 30) {
          this.hit = true; this.hitAt = this.t;
          for (let i = 0; i < 30; i++) this.sparks.push({ x: m.x, y: m.y, vx: (Math.random() - 0.5) * 240, vy: (Math.random() - 0.5) * 240, life: 0.5 + Math.random() * 0.4 });
        }
      } else { m.down = true; m.ang = Math.min(Math.PI / 2, m.ang + dt * 5); m.x = Math.min(m.x + dt * 60, 430); m.y = Math.min(m.y + dt * 30, 300); }
    }
    if (s === 'humo' || s === 'parrilla') {
      const growing = s === 'humo';
      const rate = growing ? 10 + this.t * 10 : 6;
      const src = growing ? [630 + Math.sin(this.t) * 20, 110] : [125, 395];
      for (let i = 0; i < rate * dt * 3; i++) this.smoke.push({ x: src[0] + (Math.random() - 0.5) * (growing ? 40 + this.t * 12 : 14), y: src[1], r: growing ? 10 + Math.random() * 14 : 6 + Math.random() * 6, life: growing ? 3.5 : 1.6, a: 0 });
    }
    this.smoke.forEach((p) => { p.a += dt; p.y -= 26 * dt * (1 + p.a); p.x += 10 * dt; p.r += 12 * dt; p.life -= dt; });
    this.smoke = this.smoke.filter((p) => p.life > 0);
    this.sparks.forEach((p) => { p.x += p.vx * dt; p.y += p.vy * dt; p.life -= dt; });
    this.sparks = this.sparks.filter((p) => p.life > 0);
    if (s === 'sabotaje') this.cover = Math.min(0.82, Math.max(0, (this.t - 1.6) * 0.45));
    this.emit();
  }
  state() {
    const s = this.scn, dec = this.decision;
    const decided = dec === 'ok' ? ['ok', 'Unidad enviada. Queda registrado en la bitácora.'] : dec === 'fp' ? ['info', 'Marcado como falsa alarma para mejorar el modelo.'] : null;
    if (s === 'choque') {
      const on = this.hit && this.t - this.hitAt > 0.8;
      return { readout: [['Evento', this.hit ? 'Choque' : 'Tránsito normal', this.hit ? 'alert' : 'ok'], ['Persona en la calle', on ? 'Sí' : 'No', on ? 'alert' : 'dim']],
        verdict: decided || (on ? ['alert', 'Choque con un motorizado. Se sugiere enviar tránsito y ambulancia.'] : ['dim', 'Vigilando la intersección.']), alert: on && !dec };
    }
    if (s === 'humo') {
      const on = this.t > 4.5;
      return { readout: [['Humo', 'Creciendo', on ? 'alert' : 'warn'], ['Lugar', 'Terreno baldío', 'dim']],
        verdict: decided || (on ? ['alert', 'Humo que crece en un terreno. Se sugiere avisar a los bomberos.'] : ['warn', 'Humo detectado: midiendo si crece antes de alertar.']), alert: on && !dec };
    }
    if (s === 'parrilla') return { readout: [['Humo', 'Pequeño y estable', 'ok'], ['Lugar', 'Venta de comida', 'dim']], verdict: ['ok', 'Sin alerta: es el humo de una parrilla.'] };
    const door = this.t > 0.8, batt = this.t > 3.6, on = this.cover > 0.5;
    return { readout: [['Puerta de la caja', door ? 'Abierta' : 'Cerrada', door ? 'alert' : 'ok'], ['Cámara', on ? 'Tapada' : 'Normal', on ? 'alert' : 'ok'], ['Batería', batt ? 'Desconectada' : 'Conectada', batt ? 'alert' : 'ok']],
      verdict: decided || (on ? ['alert', 'Posible robo en el poste DSIP-07. Se sugiere enviar una patrulla.'] : door ? ['warn', 'La puerta de la caja se abrió.'] : ['dim', 'Poste DSIP-07 en vigilancia nocturna.']), alert: on && !dec };
  }
  draw() {
    const g = this.g; this.begin(); const s = this.scn;
    rect(g, -4, -4, VW + 8, VH + 8, FILL.road, 0);
    [[0, 0, 300, 180], [470, 0, 330, 180], [0, 320, 300, 180], [470, 320, 330, 180]].forEach(([x, y, w, h]) => rect(g, x, y, w, h, FILL.lot, 2));
    rect(g, 520, 22, 250, 136, '#e3eedd', 2, 4);
    g.fillStyle = INK; g.font = '700 12px "Plus Jakarta Sans", system-ui'; g.fillText('TERRENO BALDÍO', 598, 44);
    rect(g, 70, 360, 110, 60, '#f6d9cf', 2, 4); g.fillStyle = INK; g.fillText('VENTA DE COMIDA', 80, 395);
    for (let x = 0; x < VW; x += 50) if (x < 290 || x > 480) rect(g, x, 247, 26, 6, FILL.mark, 1.2, 2);
    for (let y = 0; y < VH; y += 50) if (y < 170 || y > 330) rect(g, 382, y, 6, 26, FILL.mark, 1.2, 2);
    for (let i = 0; i < 8; i++) { rect(g, 310 + i * 20, 186, 10, 24, FILL.mark, 1.2); rect(g, 310 + i * 20, 290, 10, 24, FILL.mark, 1.2); rect(g, 262, 190 + i * 16, 24, 8, FILL.mark, 1.2); rect(g, 484, 190 + i * 16, 24, 8, FILL.mark, 1.2); }
    this.traffic.forEach((c) => { topCar(g, c.x, c.y - 14, 60, 28, '#d7dde6'); if (this.showAI && !this.simple) box(g, c.x - 4, c.y - 18, 68, 36, BLUE, ''); });
    if (s === 'choque') {
      const c = this.car, m = this.moto;
      topCar(g, c.x, c.y - 16, 76, 32, '#a9c7ea');
      g.save(); g.translate(m.x, m.y); g.rotate(m.ang); rect(g, -8, -26, 16, 52, '#f2c14e', 2, 6); g.restore();
      if (m.down) { g.beginPath(); g.ellipse(m.x + 40, m.y + 26, 22, 9, 0.3, 0, 7); shape(g, '#f08a4b'); g.beginPath(); g.arc(m.x + 62, m.y + 30, 7, 0, 7); shape(g, FILL.skin); }
      this.sparks.forEach((p) => { g.fillStyle = `rgba(242,167,27,${p.life})`; g.fillRect(p.x, p.y, 3, 3); });
      if (this.showAI) {
        if (!this.simple) box(g, c.x - 6, c.y - 22, 88, 44, this.hit ? ALERT : BLUE, this.hit ? 'Choque' : 'Vehículo');
        if (m.down) box(g, m.x - 32, m.y - 34, 112, 82, ALERT, 'Moto caída y persona');
      }
    }
    this.smoke.forEach((p) => { g.fillStyle = `rgba(135,147,165,${Math.min(0.3, p.life * 0.11)})`; g.beginPath(); g.arc(p.x, p.y, p.r, 0, 7); g.fill(); });
    if (this.showAI && (s === 'humo' || s === 'parrilla') && this.smoke.length) {
      const xs = this.smoke.map((p) => p.x), ys = this.smoke.map((p) => p.y);
      const x0 = Math.max(2, Math.min(...xs) - 20), y0 = Math.max(24, Math.min(...ys) - 20), x1 = Math.min(VW - 2, Math.max(...xs) + 20), y1 = Math.min(VH - 2, Math.max(...ys) + 20);
      box(g, x0, y0, x1 - x0, y1 - y0, s === 'humo' ? (this.t > 4.5 ? ALERT : BLUE) : GRAY, s === 'humo' ? 'Humo que crece' : 'Humo de parrilla');
    }
    if (s === 'sabotaje') {
      rect(g, 556, 60, 14, 280, '#d5d9df', 2, 3);
      rect(g, 580, 268, 64, 84, '#d8dce2', 2, 3);
      if (this.t > 0.8) { rect(g, 590, 280, 44, 62, '#454b54', 1.5); rect(g, 596, 312, 32, 22, '#c3c8d0', 1.5); rect(g, 644, 268, 14, 84, '#d8dce2', 2); }
      new Person({ x: 540, y: 352, h: 130, color: '#46546a' }).draw(g, false);
      if (this.showAI) box(g, 500, 200, 90, 160, ALERT, 'Persona en la caja');
      if (this.cover > 0) {
        const r = g.createRadialGradient(120, 90, 10, 120, 90, 900 * this.cover);
        r.addColorStop(0, 'rgba(38,43,51,.96)'); r.addColorStop(0.75, 'rgba(38,43,51,.88)'); r.addColorStop(1, 'rgba(38,43,51,0)');
        g.fillStyle = r; g.fillRect(0, 0, VW, VH);
        if (this.cover > 0.5) tag(g, 250, 262, `Cámara tapada: ${Math.round(this.cover * 100)} %`, ALERT);
      }
    }
    if (!this.simple) stamp(g, `${clockText(s === 'sabotaje' ? 2 : null, s === 'sabotaje' ? 15 : null)}  ${s === 'sabotaje' ? 'Cámara DSIP-06 mirando al DSIP-07' : 'Cámara DSIP-04, intersección'}`);
  }
}

/* =========================== IA-05 AUDIO =========================== */
const CLASSES = ['Grito', 'Disparo', 'Pirotecnia', 'Vidrio roto', 'Moto o escape', 'Ambiente'];
const TARGETS = {
  grito: [0.87, 0.03, 0.02, 0.02, 0.02, 0.04], disparo: [0.03, 0.82, 0.11, 0.02, 0.01, 0.01],
  coheton: [0.02, 0.12, 0.91, 0.01, 0.01, 0.03], moto: [0.01, 0.03, 0.02, 0.01, 0.93, 0.05],
  vidrio: [0.03, 0.04, 0.02, 0.85, 0.01, 0.05],
};
export class AudioScene extends Base {
  constructor(c, o) {
    super(c, o);
    this.spec = document.createElement('canvas'); this.spec.width = 360; this.spec.height = 64;
    this.sg = this.spec.getContext('2d'); this.sg.fillStyle = FILL.bg; this.sg.fillRect(0, 0, 360, 64);
    this.wave = new Array(240).fill(0); this.festive = false;
    const a = [247, 248, 250], b = [36, 70, 166], k = [15, 26, 43];
    this.pal = Array.from({ length: 256 }, (_, i) => {
      const t = i / 255, u = t < 0.6 ? t / 0.6 : (t - 0.6) / 0.4, p = t < 0.6 ? a : b, q = t < 0.6 ? b : k;
      return `rgb(${p.map((v, j) => Math.round(v + (q[j] - v) * u)).join(',')})`;
    });
  }
  reset() { this.probs = [0.02, 0.01, 0.02, 0.01, 0.04, 0.9]; this.decision = null; }
  setFestive(on) { this.festive = on; this.emit(true); }
  decide(d) { this.decision = d; this.emit(true); }
  spectrum() {
    const t = this.t, s = this.scn, b = new Float32Array(64);
    for (let i = 0; i < 64; i++) b[i] = 0.04 + Math.random() * 0.06 + (i < 10 ? 0.1 : 0);
    const ev = (t0, t1) => t >= t0 && t <= t1;
    if (s === 'grito' && ev(1, 2.8)) { const f = 20 + Math.sin(t * 30) * 1.5; [1, 2, 3].forEach((h) => { const k = Math.round(f * h * 0.55); if (k < 63) { b[k] += 0.9 / h; b[k + 1] += 0.5 / h; } }); }
    if (s === 'disparo') [1.2, 1.7].forEach((t0) => { if (ev(t0, t0 + 0.12)) for (let i = 0; i < 64; i++) b[i] += 0.95 - (t - t0) * 5; });
    if (s === 'coheton') { if (ev(0.6, 1.4)) { const k = Math.round(20 + (t - 0.6) * 45); b[Math.min(63, k)] += 0.9; } if (ev(1.45, 1.55)) for (let i = 0; i < 64; i++) b[i] += 0.9; if (ev(1.6, 2.6) && Math.random() > 0.6) for (let i = 20; i < 64; i++) b[i] += Math.random() * 0.6; }
    if (s === 'moto' && ev(0.5, 3.2)) { const a = 1 - Math.abs(t - 1.8) / 1.4; [4, 8, 12, 16].forEach((k) => { b[k] += a * 0.8; b[k + 1] += a * 0.4; }); }
    if (s === 'vidrio' && ev(1.2, 1.9)) for (let i = 34; i < 64; i++) if (Math.random() > 0.45) b[i] += 0.9 * (1.9 - t);
    return b;
  }
  step(dt) {
    this.t += dt;
    const b = this.spectrum();
    this.sg.drawImage(this.spec, -2, 0);
    for (let i = 0; i < 64; i++) { this.sg.fillStyle = this.pal[Math.max(0, Math.min(255, Math.round(b[i] * 255)))]; this.sg.fillRect(358, 63 - i, 2, 1); }
    this.wave.push(b.reduce((a, v) => a + v, 0) / 64); this.wave.shift();
    const active = this.t > 1.1 && TARGETS[this.scn];
    const adj = (active ? TARGETS[this.scn] : [0.02, 0.01, 0.02, 0.01, 0.04, 0.9]).slice();
    if (this.festive && active) { adj[2] = Math.min(0.97, adj[2] + 0.06); if (this.scn === 'disparo') { adj[1] = 0.71; adj[2] = 0.24; } }
    this.probs = this.probs.map((p, i) => p + (adj[i] - p) * Math.min(1, dt * 3));
    this.emit();
  }
  state() {
    const top = this.probs.indexOf(Math.max(...this.probs));
    const settled = this.t > 2.2, cls = CLASSES[top];
    let verdict = ['dim', 'Escuchando. El sonido se analiza en memoria y no se graba.'], alert = false;
    if (settled) {
      if (this.scn === 'grito') { verdict = ['alert', 'Grito de auxilio. La cámara gira hacia el lugar y el operador revisa.']; alert = true; }
      if (this.scn === 'disparo') { verdict = this.festive ? ['warn', 'Posible disparo en temporada de fiestas: se confirma con la cámara.'] : ['alert', 'Posible disparo. Se sugiere enviar una patrulla.']; alert = true; }
      if (this.scn === 'coheton') verdict = ['ok', 'Sin alerta: es pirotecnia, no un disparo.'];
      if (this.scn === 'moto') verdict = ['ok', 'Sin alerta: es el escape de una moto.'];
      if (this.scn === 'vidrio') { verdict = ['alert', 'Rotura de vidrio. Posible robo a un comercio.']; alert = true; }
    }
    if (this.decision === 'ok') { verdict = ['ok', 'Unidad enviada tras revisar la cámara.']; alert = false; }
    if (this.decision === 'fp') { verdict = ['info', 'Marcado como falsa alarma para mejorar el modelo.']; alert = false; }
    return { readout: [['Sonido reconocido', settled ? cls : 'Escuchando', alert ? 'alert' : 'info'], ['Audio guardado', 'Ninguno', 'ok'], ['Temporada de fiestas', this.festive ? 'Sí' : 'No', 'dim']], verdict, alert: alert && !this.decision };
  }
  draw() {
    const g = this.g; this.begin();
    g.fillStyle = '#46546a'; g.font = `700 ${14 * FS}px "Plus Jakarta Sans", system-ui`;
    g.fillText('Sonido de la calle', 24, 34);
    g.strokeStyle = BLUE; g.lineWidth = 2; g.beginPath();
    this.wave.forEach((a, i) => { const x = 24 + i * (752 / 240), h = a * 90 * (i % 2 ? 1 : -1); if (i) g.lineTo(x, 94 + h); else g.moveTo(x, 94 + h); });
    g.stroke();
    g.imageSmoothingEnabled = false; g.drawImage(this.spec, 24, 158, 752, 150); g.imageSmoothingEnabled = true;
    g.lineWidth = 2; g.strokeStyle = INK; g.strokeRect(24, 158, 752, 150);
    const top = this.probs.indexOf(Math.max(...this.probs));
    const shown = this.simple ? [0, 1, 2] : [0, 1, 2, 3, 4, 5];
    shown.forEach((i, n) => {
      const x = 24 + (n % 3) * 255, y = 334 + Math.floor(n / 3) * 70;
      g.fillStyle = INK; g.font = `700 ${14 * FS}px "Plus Jakarta Sans", system-ui`; g.fillText(CLASSES[i], x, y + 16);
      const danger = i === 0 || i === 1 || i === 3;
      g.fillStyle = i === top && this.t > 1.1 ? (danger ? ALERT : BLUE) : '#b9c1cd';
      rr(g, x, y + 28, Math.max(6, 230 * this.probs[i]), 14, 4); g.fill();
    });
    tag(g, 540, 40, 'No se graba audio', BLUE);
  }
}

/* =========================== IA-06 MULTITUDES =========================== */
export class CrowdScene extends Base {
  reset() {
    const n = this.scn === 'aforo' ? 260 : this.scn === 'cola' ? 120 : this.scn === 'estampida' ? 540 : 420;
    this.agents = Array.from({ length: n }, () => this.spawn());
    this.panicAt = this.scn === 'estampida' ? 2.4 : Infinity;
    this.queue = 0; this.decision = null; this.flow = 0;
  }
  decide(d) { this.decision = d; this.emit(true); }
  spawn() {
    const s = this.scn;
    if (s === 'procesion') return { u: Math.random(), off: (Math.random() - 0.5) * 36, v: 0.018 + Math.random() * 0.006, x: 0, y: 0 };
    if (s === 'cola') return { x: 180 + Math.random() * 380, y: 150 + Math.random() * 220, vx: 0, vy: 0 };
    if (s === 'aforo') { const x = 120 + Math.random() * 560, y = 110 + Math.random() * 300; return { x, y, tx: x, ty: y, vx: 0, vy: 0 }; }
    const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * 95;
    return { x: 380 + Math.cos(a) * r * 1.5, y: 250 + Math.sin(a) * r, vx: 0, vy: 0 };
  }
  path(u) {
    const pts = [[140, 110], [660, 110], [660, 400], [140, 400]];
    const k = u * 4, i = Math.floor(k), f = k - i, a = pts[i % 4], b = pts[(i + 1) % 4];
    const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy);
    return [a[0] + dx * f, a[1] + dy * f, -dy / L, dx / L];
  }
  step(dt) {
    this.t += dt; const s = this.scn;
    if (s === 'aforo' && this.agents.length < 1240 && this.t < 7) for (let k = 0; k < 170 * dt; k++) { const e = Math.random() > 0.5; this.agents.push({ x: e ? 105 : 695, y: 260 + (Math.random() - 0.5) * 60, tx: 120 + Math.random() * 560, ty: 110 + Math.random() * 300, vx: 0, vy: 0 }); }
    if (s === 'cola' && this.queue < 75) this.queue += dt * 16;
    let flow = 0;
    this.agents.forEach((a, i) => {
      if (s === 'procesion') { a.u = (a.u + a.v * dt) % 1; const p = this.path(a.u); a.x = p[0] + a.off * p[2]; a.y = p[1] + a.off * p[3]; flow += 25; return; }
      if (s === 'cola') {
        if (i < this.queue) { const d = i * 7; const qx = d < 255 ? 705 - d : 450, qy = d < 255 ? 255 : 255 + (d - 255); a.x += (qx - a.x) * dt * 2.5; a.y += (qy - a.y) * dt * 2.5; }
        else { a.x += Math.sin(this.t + i) * 8 * dt; a.y += Math.cos(this.t * 0.7 + i) * 8 * dt; }
        return;
      }
      if (s === 'aforo') {
        a.vx += ((a.tx - a.x) * 1.5 - a.vx) * Math.min(1, dt * 4); a.vy += ((a.ty - a.y) * 1.5 - a.vy) * Math.min(1, dt * 4);
        const sp = Math.hypot(a.vx, a.vy); if (sp > 45) { a.vx *= 45 / sp; a.vy *= 45 / sp; }
        a.x += a.vx * dt; a.y += a.vy * dt; flow += sp; return;
      }
      if (this.t > this.panicAt) {
        const dx = a.x - 340, dy = a.y - 250, d = Math.hypot(dx, dy) || 1;
        a.vx += (dx / d) * 220 * dt; a.vy += (dy / d) * 220 * dt;
        const sp = Math.hypot(a.vx, a.vy); if (sp > 120) { a.vx *= 120 / sp; a.vy *= 120 / sp; }
      } else { a.vx += (Math.random() - 0.5) * 30 * dt; a.vy += (Math.random() - 0.5) * 30 * dt; a.vx *= 0.95; a.vy *= 0.95; }
      a.x += a.vx * dt; a.y += a.vy * dt; flow += Math.hypot(a.vx, a.vy);
    });
    this.flow = this.agents.length ? flow / this.agents.length : 0;
    this.emit();
  }
  density() {
    const cell = 40, cols = Math.ceil(VW / cell), rows = Math.ceil(VH / cell), grid = new Uint16Array(cols * rows);
    this.agents.forEach((a) => { const cx = Math.floor(a.x / cell), cy = Math.floor(a.y / cell); if (cx >= 0 && cy >= 0 && cx < cols && cy < rows) grid[cy * cols + cx]++; });
    return { grid, cols, rows, cell };
  }
  state() {
    const d = this.density(), peak = Math.max(...d.grid) / 16, n = this.agents.length, s = this.scn;
    const f1 = (v) => v.toFixed(1).replace('.', ',');
    let verdict = ['ok', 'Sin riesgo.'], alert = false;
    if (s === 'procesion') verdict = ['ok', 'La procesión avanza con espacio suficiente. Sin alerta.'];
    if (s === 'cola') { if (this.queue > 66) { verdict = ['alert', 'La cola del banco bloquea la vía de emergencia.']; alert = true; } else verdict = ['warn', 'La cola del banco está creciendo.']; }
    if (s === 'estampida' && this.t > this.panicAt + 0.4) { verdict = ['alert', 'La gente corre de golpe: posible estampida. Avisar a Protección Civil.']; alert = true; }
    if (s === 'aforo') { if (n > 1000) { verdict = ['alert', `Plaza llena: ${n.toLocaleString('es-VE')} personas para 1.000. Abrir salidas.`]; alert = true; } else verdict = ['warn', `Entrando a la plaza: ${n.toLocaleString('es-VE')} de 1.000 personas.`]; }
    if (this.decision === 'ok') { verdict = ['ok', 'Protección Civil avisada y rutas alternas en las pantallas.']; alert = false; }
    if (this.decision === 'fp') { verdict = ['info', 'Marcado como falsa alarma para mejorar el modelo.']; alert = false; }
    return { readout: [['Personas', n.toLocaleString('es-VE'), 'info'], ['Densidad máxima', `${f1(peak)} por m²`, peak > 2.5 ? 'alert' : 'dim'], ['Identificación', 'Ninguna', 'ok']], verdict, alert: alert && !this.decision };
  }
  draw() {
    const g = this.g; this.begin(); const s = this.scn;
    rect(g, -4, -4, VW + 8, VH + 8, FILL.road, 0);
    rect(g, 100, 90, 600, 340, FILL.lot, 2, 6);
    rect(g, 300, 22, 200, 58, '#ffffff', 2, 2);
    g.beginPath(); g.moveTo(290, 24); g.lineTo(400, 2); g.lineTo(510, 24); g.closePath(); shape(g, '#ffffff');
    g.fillStyle = INK; g.font = '800 13px "Plus Jakarta Sans", system-ui'; g.fillText('IGLESIA', 373, 58);
    rect(g, 712, 200, 80, 110, '#ffffff', 2, 2); g.fillStyle = INK; g.fillText('BANCO', 729, 260);
    g.save(); g.setLineDash([9, 6]); g.lineWidth = 2; g.strokeStyle = ALERT; g.strokeRect(300, 440, 400, 44); g.restore();
    g.fillStyle = ALERT; g.font = '700 12px "Plus Jakarta Sans", system-ui'; g.fillText('VÍA DE EMERGENCIA', 440, 467);
    [[160, 150], [640, 150], [160, 380], [640, 380], [400, 250]].forEach(([x, y]) => { g.beginPath(); g.arc(x, y, 16, 0, 7); shape(g, '#cfe3c8'); });
    if (this.showAI) {
      const d = this.density();
      for (let y = 0; y < d.rows; y++) for (let x = 0; x < d.cols; x++) {
        const v = d.grid[y * d.cols + x] / 16; if (v < 0.3) continue;
        g.fillStyle = v > 2.5 ? `rgba(217,45,32,${Math.min(0.35, 0.1 + v * 0.08)})` : `rgba(36,70,166,${Math.min(0.25, 0.05 + v * 0.08)})`;
        g.fillRect(x * d.cell, y * d.cell, d.cell, d.cell);
      }
    }
    const panic = this.t > this.panicAt;
    g.fillStyle = panic ? ALERT : '#46546a';
    this.agents.forEach((a) => g.fillRect(a.x - 1.8, a.y - 1.8, 3.6, 3.6));
    if (this.showAI && panic) {
      g.strokeStyle = ALERT; g.lineWidth = 2.5;
      for (let k = 0; k < 16; k++) { const an = (k / 16) * Math.PI * 2; g.beginPath(); g.moveTo(340 + Math.cos(an) * 40, 250 + Math.sin(an) * 30); g.lineTo(340 + Math.cos(an) * 90, 250 + Math.sin(an) * 70); g.stroke(); }
    }
    tag(g, 14, 36, 'Solo puntos, sin rostros', BLUE);
    if (!this.simple) stamp(g, `${clockText()}  Cámara DSIP-09, plaza${s === 'cola' ? ' y banco' : ''}`);
  }
}

export const SCENES = {
  caida: { cls: FallScene, code: 'IA-01', title: 'Persona caída o desmayada', cam: 'Cámara de la parada',
    desc: 'Detecta a una persona que cae y queda inmóvil. Espera unos segundos antes de alertar para no confundir a quien se sienta.',
    scenarios: [['caida', 'Se desmaya en la parada'], ['sentado', 'Se sienta en el brocal'], ['taller', 'Mecánico bajo un carro'], ['calle', 'Persona durmiendo en la calle']] },
  novedades: { cls: NoveltyScene, code: 'IA-02, IA-03 e IA-04', title: 'Choques, humo y robo del poste', cam: 'Cámara de la intersección',
    desc: 'Choques y motos caídas, humo que crece en un terreno y ataques al propio poste. Distingue el humo de una parrilla del de un incendio.',
    scenarios: [['choque', 'Choque con motorizado'], ['humo', 'Humo en un terreno'], ['parrilla', 'Parrilla de venta de comida'], ['sabotaje', 'Robo de batería de madrugada']] },
  audio: { cls: AudioScene, code: 'IA-05', title: 'Gritos, disparos y vidrios', cam: 'Micrófono del poste',
    desc: 'Reconoce sonidos en el propio poste sin grabar nada. Distingue un cohetón o el escape de una moto de un disparo.',
    scenarios: [['grito', 'Grito de auxilio'], ['disparo', 'Disparo'], ['coheton', 'Cohetón'], ['moto', 'Moto con escape'], ['vidrio', 'Vidrio roto']] },
  multitud: { cls: CrowdScene, code: 'IA-06', title: 'Multitudes en riesgo', cam: 'Cámara de la plaza',
    desc: 'Cuenta personas sin identificarlas. Alerta ante estampidas, plazas llenas o colas que bloquean una vía de emergencia.',
    scenarios: [['procesion', 'Procesión'], ['cola', 'Cola en el banco'], ['estampida', 'Estampida'], ['aforo', 'Plaza llena']] },
};
