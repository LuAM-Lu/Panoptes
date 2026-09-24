import { DSIP_PARTS } from './data.js';
import { $, $$ } from './util.js';

const MODE_STATUS = {
  normal: 'Red eléctrica · valla encendida · IA en el poste activa',
  apagon: 'Corte de Corpoelec · batería LiFePO4 → hasta 5 h · valla apagada para ahorrar energía',
  ia: 'Vista IA · conos de visión de las cámaras y detecciones en tiempo real (simulación)',
  despiece: 'Despiece · gabinete abierto: toque cada componente',
};

let viewer = null;       // instancia 3D cuando carga
let current = 'caja';

function renderInfo(id) {
  const p = DSIP_PARTS.find((x) => x.id === id) || DSIP_PARTS[0];
  current = p.id;
  $('#dsip-info').innerHTML = `
    <div class="flex items-center gap-3">
      <span class="icon-tile bg-indigo-500/15 text-indigo-200"><span class="ms">${p.icon}</span></span>
      <span class="chip bg-white/5 text-slate-300">Componente ${p.n} de ${DSIP_PARTS.length}</span>
    </div>
    <h3 class="mt-4 text-xl font-extrabold">${p.title}</h3>
    <p class="mt-2 text-sm leading-relaxed text-slate-300">${p.text}</p>
    <p class="mt-4 flex gap-2 rounded-xl border border-white/10 bg-white/[.03] p-3 text-xs leading-relaxed text-slate-400"><span class="ms text-base text-emerald-300">info</span>${p.note}</p>`;
  $$('#dsip-parts button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.part === p.id)));
  $$('#dsip2d .pin').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.part === p.id)));
}

export function selectPart(id, fromViewer = false) {
  renderInfo(id);
  if (viewer && !fromViewer) viewer.focus(id);
}

function setMode(mode) {
  $$('#dsip-modes button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.mode === mode)));
  $('#dsip3d-status').textContent = MODE_STATUS[mode];
  if (viewer) viewer.setMode(mode);
}

function fallback2d() {
  $('#dsip3d-loading').remove();
  $('#dsip2d').hidden = false;
  $('#dsip3d-status').hidden = true;
  $('#dsip-modes').parentElement.querySelectorAll('button').forEach((b) => { b.disabled = true; });
}

function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch (e) { return false; }
}

export function initDsip() {
  $('#dsip-parts').innerHTML = DSIP_PARTS.map((p) => `
    <li><button type="button" data-part="${p.id}" aria-pressed="false"
      class="flex w-full items-center gap-2.5 rounded-xl border border-white/10 bg-white/[.03] px-3 py-2.5 text-left text-sm font-semibold text-slate-300 transition hover:border-indigo-300/50 hover:text-white aria-pressed:border-emerald-300/60 aria-pressed:bg-emerald-400/10 aria-pressed:text-white">
      <span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-indigo-500 text-[11px] font-extrabold text-white">${p.n}</span>${p.title}</button></li>`).join('');
  renderInfo('caja');

  $('#dsip-parts').addEventListener('click', (e) => {
    const b = e.target.closest('[data-part]');
    if (b) selectPart(b.dataset.part);
  });
  $('#dsip2d').addEventListener('click', (e) => {
    const b = e.target.closest('[data-part]');
    if (b) selectPart(b.dataset.part);
  });
  $('#dsip-modes').addEventListener('click', (e) => {
    const b = e.target.closest('[data-mode]');
    if (b) setMode(b.dataset.mode);
  });
  const rot = $('#dsip-rotate');
  rot.addEventListener('click', () => {
    const on = rot.getAttribute('aria-pressed') !== 'true';
    rot.setAttribute('aria-pressed', String(on));
    if (viewer) viewer.setAutoRotate(on);
  });
  $('#dsip-reset').addEventListener('click', () => viewer && viewer.reset());

  // Enlace "Costo del nodo" abre la pestaña correspondiente en Inversión
  $$('[data-tab-link]').forEach((a) => a.addEventListener('click', () => {
    const t = document.querySelector(`[data-cost="${a.dataset.tabLink}"]`);
    if (t) t.click();
  }));

  if (!webglAvailable()) { fallback2d(); return; }

  const stage = $('#dsip3d-stage');
  const io = new IntersectionObserver((entries) => {
    if (!entries.some((en) => en.isIntersecting)) return;
    io.disconnect();
    import('./dsip3d.js')
      .then((m) => m.createViewer(stage, $('#dsip3d-labels'), {
        parts: DSIP_PARTS,
        onSelect: (id) => selectPart(id, true),
        autoRotate: rot.getAttribute('aria-pressed') === 'true',
      }))
      .then((v) => {
        viewer = v;
        $('#dsip3d-loading').remove();
        const pressed = $('#dsip-modes [aria-pressed="true"]');
        if (pressed) viewer.setMode(pressed.dataset.mode);
        viewer.highlight(current);
      })
      .catch((err) => { console.warn('Visor 3D no disponible:', err); fallback2d(); });
  }, { rootMargin: '400px 0px' });
  io.observe(stage);
}
