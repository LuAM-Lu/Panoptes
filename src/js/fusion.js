import { $, $$ } from './util.js';

// Simulador de fusión comercial: pasivo → pánico (licorería) → rastreo (toda la ruta).
const STATES = {
  1: { active: [], alert: [], text: 'Modo pasivo: cada comercio conserva su video cifrado; no se consume ancho de banda municipal.', dim: 'bg-rose-500/0' },
  2: { active: [0], alert: [0], text: 'Modo pánico: alerta en la licorería. El C3I abre solo las cámaras exteriores de ese perímetro.', dim: 'bg-rose-500/5' },
  3: { active: [0, 1, 2, 3], alert: [0], text: 'Rastreo: se suman el centro comercial, la clínica y los nodos DSIP de la ruta de escape.', dim: 'bg-rose-500/10' },
};

function set(n) {
  const st = STATES[n];
  $$('[data-fusion]').forEach((b) => b.setAttribute('aria-pressed', String(Number(b.dataset.fusion) === n)));
  $$('[data-fusion-step]').forEach((b) => {
    const on = Number(b.dataset.fusionStep) === n;
    b.setAttribute('aria-pressed', String(on));
    b.classList.toggle('shadow-lift', on);
    b.classList.toggle('opacity-70', !on);
  });
  for (let i = 0; i < 4; i++) {
    const line = $('#fl-' + i);
    const node = $(`[data-fnode="${i}"]`);
    const on = st.active.includes(i);
    line.setAttribute('stroke', on ? '#f43f5e' : (n === 1 ? '#06b6d4' : '#cbd5e1'));
    line.setAttribute('stroke-width', on ? '1.4' : '.6');
    line.classList.toggle('animate-dash', on);
    node.classList.toggle('border-rose-400', on);
    node.classList.toggle('border-transparent', !on);
    node.classList.toggle('opacity-50', n > 1 && !on);
    node.querySelector('.ms').classList.toggle('text-rose-500', st.alert.includes(i));
  }
  $('#fusion-hub').classList.toggle('ring-4', n > 1);
  $('#fusion-hub').classList.toggle('ring-rose-300', n > 1);
  $('#fusion-dim').className = 'pointer-events-none absolute inset-0 transition-colors duration-500 ' + st.dim;
  $('#fusion-status').textContent = st.text;
}

export function initFusion() {
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-fusion],[data-fusion-step]');
    if (b) set(Number(b.dataset.fusion || b.dataset.fusionStep));
  });
  $$('[data-fnode]').forEach((n) => n.addEventListener('click', () => set(3)));
  set(1);
}
