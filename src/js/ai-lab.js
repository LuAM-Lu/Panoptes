import { SCENES } from './ai-scenes.js';
import { $, $$, onVisible } from './util.js';

const TONE = {
  ok: 'text-emerald-300', warn: 'text-amber-300', alert: 'text-rose-300', info: 'text-indigo-300', dim: 'text-slate-400',
};
const VERDICT = {
  ok: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200',
  warn: 'border-amber-400/40 bg-amber-400/10 text-amber-200',
  alert: 'border-rose-400/50 bg-rose-500/15 text-rose-100',
  info: 'border-indigo-400/40 bg-indigo-400/10 text-indigo-100',
  dim: 'border-white/10 bg-white/[.03] text-slate-400',
};

export function initLab() {
  const canvas = $('#lab-canvas');
  let key = 'caida', scn = null, scenario = null, visible = false, raf = 0, last = 0;
  const instances = {};

  function render(st) {
    $('#lab-readout').innerHTML = st.readout.map(([k, v, t]) =>
      `<div class="flex justify-between gap-3"><span class="text-slate-500">${k}</span><span class="font-bold ${TONE[t] || TONE.dim}">${v}</span></div>`).join('');
    const [tone, text] = st.verdict;
    const box = $('#lab-verdict');
    box.className = `rounded-xl border p-3 text-sm font-bold ${VERDICT[tone]}`;
    box.textContent = text;
    $$('#lab-actions [data-decide]').forEach((b) => { b.disabled = !st.alert; });
  }

  function actions() {
    const a = $('#lab-actions');
    const common = `
      <button type="button" data-decide="ok" class="btn-vital btn-sm" disabled><span class="ms text-lg">task_alt</span>Confirmar y despachar</button>
      <button type="button" data-decide="fp" class="btn-ghost-dark btn-sm" disabled><span class="ms text-lg">thumb_down</span>Falso positivo</button>
      <button type="button" data-toggle-ai aria-pressed="true" class="btn-ghost-dark btn-sm"><span class="ms text-lg">visibility</span>Vista IA</button>`;
    const festive = key === 'audio' ? `<label class="flex w-full items-center gap-2 text-xs font-semibold text-slate-300"><input type="checkbox" data-festive class="accent-amber-400">Temporada festiva (diciembre, fiestas patronales)</label>` : '';
    a.innerHTML = common + festive;
  }

  function play(sc) {
    scenario = sc;
    $$('#lab-scenarios button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.sc === sc)));
    scn.set(sc);
  }

  function open(k) {
    key = k;
    const def = SCENES[k];
    $$('#ai-lab [data-lab]').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.lab === k)));
    $('#lab-code').textContent = def.code;
    $('#lab-title').textContent = def.title;
    $('#lab-desc').textContent = def.desc;
    $('#lab-cam').textContent = def.cam;
    $('#lab-privacy').textContent = k === 'audio' ? 'No se graba audio' : k === 'multitud' ? 'Conteo anónimo' : 'Procesado en el poste';
    $('#lab-scenarios').innerHTML = def.scenarios.map(([id, label]) =>
      `<button type="button" data-sc="${id}" aria-pressed="false" class="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-slate-200 transition hover:border-emerald-300/50 aria-pressed:border-emerald-300 aria-pressed:bg-emerald-400/15 aria-pressed:text-white">${label}</button>`).join('');
    actions();
    scn = instances[k] || (instances[k] = new def.cls(canvas, { onUpdate: render }));
    scn.resize();
    play(def.scenarios[0][0]);
  }

  function loop(now) {
    if (!visible) return;
    const dt = Math.max(0, Math.min(0.05, (now - last) / 1000)); last = now;
    scn.step(dt); scn.draw();
    raf = requestAnimationFrame(loop);
  }

  $('#ai-lab').addEventListener('click', (e) => {
    const tab = e.target.closest('[data-lab]');
    if (tab) { open(tab.dataset.lab); return; }
    const sc = e.target.closest('[data-sc]');
    if (sc) { play(sc.dataset.sc); return; }
    const d = e.target.closest('[data-decide]');
    if (d && scn.decide) { scn.decide(d.dataset.decide); return; }
    const tg = e.target.closest('[data-toggle-ai]');
    if (tg) {
      scn.showAI = !scn.showAI;
      tg.setAttribute('aria-pressed', String(scn.showAI));
      tg.innerHTML = `<span class="ms text-lg">${scn.showAI ? 'visibility' : 'visibility_off'}</span>${scn.showAI ? 'Vista IA' : 'Vista normal'}`;
    }
  });
  $('#ai-lab').addEventListener('change', (e) => {
    if (e.target.matches('[data-festive]') && scn.setFestive) { scn.setFestive(e.target.checked); play(scenario); }
  });
  // Flechas del teclado entre pestañas (patrón tablist)
  $('#ai-lab [role="tablist"]').addEventListener('keydown', (e) => {
    if (!['ArrowRight', 'ArrowLeft'].includes(e.key)) return;
    const keys = Object.keys(SCENES); const i = keys.indexOf(key);
    const next = keys[(i + (e.key === 'ArrowRight' ? 1 : keys.length - 1)) % keys.length];
    open(next); $(`#ai-lab [data-lab="${next}"]`).focus();
  });

  window.addEventListener('resize', () => scn && scn.resize());
  open('caida');
  onVisible(canvas, (v) => {
    visible = v;
    if (v) { cancelAnimationFrame(raf); last = performance.now(); raf = requestAnimationFrame(loop); }
  });
}
