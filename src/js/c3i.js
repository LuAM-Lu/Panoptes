import { C3I_PARTS } from './data.js';
import { $, $$, reduceMotion } from './util.js';

// Imagen interactiva de la central: pines + acercamiento suave al punto seleccionado.
const ZOOM = 1.9;
let idx = 0, zoomOn = false, tourTimer = null;

function applyZoom() {
  const canvas = $('#c3i-canvas');
  canvas.style.setProperty('--pin-scale', zoomOn ? String(1 / ZOOM) : '1');
  if (!zoomOn) { canvas.style.transform = 'none'; return; }
  const p = C3I_PARTS[idx];
  // translate(tx,ty) scale(s) con origen arriba-izquierda: el punto p queda centrado sin mostrar bordes
  const clamp = (v) => Math.min(0, Math.max(100 - 100 * ZOOM, v));
  const tx = clamp(50 - ZOOM * p.x);
  const ty = clamp(50 - ZOOM * p.y);
  canvas.style.transform = `translate(${tx}%, ${ty}%) scale(${ZOOM})`;
}

function show(i) {
  idx = (i + C3I_PARTS.length) % C3I_PARTS.length;
  const p = C3I_PARTS[idx];
  $('#c3i-info').innerHTML = `
    <div class="flex items-center gap-3">
      <span class="icon-tile bg-violet-100 text-violet-700"><span class="ms">${p.icon}</span></span>
      <span class="chip bg-slate-100 text-slate-600">Punto ${idx + 1} de ${C3I_PARTS.length}</span>
    </div>
    <h3 class="mt-4 text-xl font-extrabold">${p.title}</h3>
    <p class="mt-2 text-sm leading-relaxed text-slate-600">${p.text}</p>
    <p class="mt-4 flex gap-2 rounded-xl bg-slate-50 p-3 text-xs leading-relaxed text-slate-500"><span class="ms text-base text-violet-500">info</span>${p.note}</p>`;
  $$('#c3i-canvas .pin').forEach((b) => b.setAttribute('aria-pressed', String(Number(b.dataset.c3i) === idx)));
  applyZoom();
}

function stopTour() {
  clearInterval(tourTimer); tourTimer = null;
  const b = $('#c3i-tour');
  b.setAttribute('aria-pressed', 'false');
  b.innerHTML = '<span class="ms text-lg">play_arrow</span>Recorrido';
}

function setZoom(on) {
  zoomOn = on;
  const zb = $('#c3i-zoom');
  zb.setAttribute('aria-pressed', String(on));
  zb.innerHTML = on
    ? '<span class="ms text-lg">zoom_out_map</span><span>Vista completa</span>'
    : '<span class="ms text-lg">zoom_in</span><span>Acercar al punto</span>';
  applyZoom();
}

export function initC3i() {
  let firstPick = true;
  const pick = (i) => {
    stopTour();
    if (firstPick) { firstPick = false; setZoom(true); }
    show(i);
  };
  $('#c3i-canvas').addEventListener('click', (e) => {
    const b = e.target.closest('[data-c3i]');
    if (b) pick(Number(b.dataset.c3i));
  });
  $('#c3i-prev').addEventListener('click', () => pick(idx - 1));
  $('#c3i-next').addEventListener('click', () => pick(idx + 1));
  $('#c3i-zoom').addEventListener('click', () => { firstPick = false; setZoom(!zoomOn); });
  $('#c3i-tour').addEventListener('click', (e) => {
    if (tourTimer) { stopTour(); return; }
    const b = e.currentTarget;
    if (firstPick) { firstPick = false; setZoom(true); }
    b.setAttribute('aria-pressed', 'true');
    b.innerHTML = '<span class="ms text-lg">pause</span>Pausar';
    show(idx + 1);
    tourTimer = setInterval(() => show(idx + 1), reduceMotion ? 6000 : 3800);
  });
  // Carga inicial: sala completa, sin acercamiento
  setZoom(false);
  show(0);
}
