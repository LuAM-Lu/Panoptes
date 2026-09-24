import { DSIP_PARTS } from './data.js';
import { $, $$ } from './util.js';

const MODE_STATUS = {
  normal: 'Todo en orden: el poste ordena el tránsito, vigila la esquina y muestra publicidad.',
  apagon: 'Sin electricidad: la batería mantiene el semáforo y las cámaras hasta 5 horas. La pantalla se apaga para ahorrar.',
  emergencia: 'La cámara detecta a una persona en el suelo y avisa a la central en segundos.',
  choque: 'Un motorizado choca en la esquina. La cámara lo detecta, avisa a la central y los semáforos abren paso a la ambulancia.',
  multitud: 'La esquina se llena de gente. La cámara cuenta personas sin identificarlas, avisa a Protección Civil y la pantalla indica otra ruta.',
  humo: 'Se quema un contenedor. La cámara ve el humo, avisa a los bomberos y los semáforos les abren paso.',
  robo: 'Alguien fuerza la caja del poste. Suena la alarma, la cámara lo sigue y la policía llega al lugar.',
  disparo: 'El micrófono reconoce un disparo, la cámara gira hacia el lugar y avisa a la policía. No graba conversaciones.',
};
const NIGHT_NOTE = 'De noche, las cámaras siguen viendo con luz infrarroja.';

let viewer = null;
let current = null;
let mode = 'normal';
let night = false;

function renderInfo(id) {
  const p = DSIP_PARTS.find((x) => x.id === id);
  current = p ? p.id : null;
  const info = $('#dsip-info');
  if (!p) {
    info.innerHTML = `<p class="text-ink-500">Toque un nombre del dibujo o de la lista para ver para qué sirve.</p>`;
  } else {
    info.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="icon-tile"><span class="ms">${p.icon}</span></span>
        <h3 class="h3">${p.title}</h3>
      </div>
      <p class="mt-3 leading-relaxed text-ink-600">${p.text}</p>`;
  }
  $$('#dsip-parts button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.part === current)));
  $$('#dsip2d .pin').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.part === current)));
}

function selectPart(id, fromViewer = false) {
  renderInfo(id);
  if (viewer && !fromViewer) viewer.focus(id);
}

function showStatus() {
  $('#dsip3d-status').textContent = MODE_STATUS[mode] + (night ? ` ${NIGHT_NOTE}` : '');
}

function setMode(next) {
  mode = next;
  $$('#dsip-modes button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.mode === mode)));
  $('#dsip3d-stage').classList.toggle('is-blackout', mode === 'apagon');
  showStatus();
  if (viewer) viewer.setMode(mode);
}

function setNight(on) {
  night = on;
  const btn = $('#dsip-night');
  btn.setAttribute('aria-pressed', String(on));
  btn.innerHTML = on ? '<span class="ms text-xl">light_mode</span>De día' : '<span class="ms text-xl">dark_mode</span>De noche';
  $('#dsip3d-stage').classList.toggle('is-night', on);
  showStatus();
  if (viewer) viewer.setNight(on);
}

function fallback2d() {
  const loading = $('#dsip3d-loading');
  if (loading) loading.remove();
  $('#dsip2d').hidden = false;
  $('#dsip-modes').hidden = true;
  $('#dsip-reset').hidden = true;
  $('#dsip-night').hidden = true;
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
      class="flex min-h-[48px] w-full items-center gap-3 rounded-xl px-3 py-2 text-left font-semibold text-ink-700 transition hover:bg-ink-100 aria-pressed:bg-brand-50 aria-pressed:text-brand-600">
      <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-current font-label text-base font-bold">${p.n}</span>${p.label}</button></li>`).join('');
  renderInfo('caja');

  const pick = (e) => {
    const b = e.target.closest('[data-part]');
    if (b) selectPart(b.dataset.part);
  };
  $('#dsip-parts').addEventListener('click', pick);
  $('#dsip2d').addEventListener('click', pick);
  $('#dsip-modes').addEventListener('click', (e) => {
    const b = e.target.closest('[data-mode]');
    if (b) setMode(b.dataset.mode);
  });
  $('#dsip-reset').addEventListener('click', () => viewer && viewer.reset());
  $('#dsip-night').addEventListener('click', () => setNight(!night));

  if (!webglAvailable()) { fallback2d(); return; }

  const stage = $('#dsip3d-stage');
  const io = new IntersectionObserver((entries) => {
    if (!entries.some((en) => en.isIntersecting)) return;
    io.disconnect();
    import('./dsip3d.js')
      .then((m) => m.createViewer(stage, $('#dsip3d-labels'), {
        parts: DSIP_PARTS,
        onSelect: (id) => selectPart(id, true),
      }))
      .then((v) => {
        viewer = v;
        $('#dsip3d-loading').remove();
        viewer.setMode(mode);
        viewer.setNight(night);
        if (current) viewer.highlight(current);
      })
      .catch((err) => { console.warn('Visor 3D no disponible:', err); fallback2d(); });
  }, { rootMargin: '500px 0px' });
  io.observe(stage);
}
