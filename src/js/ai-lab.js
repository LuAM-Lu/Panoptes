import { SCENES } from './ai-scenes.js';
import { $, $$, onVisible } from './util.js';

// Laboratorio de IA del anexo: cada módulo con sus situaciones reales y falsas alarmas que filtra.
const TONE = { alert: 'text-alert', info: 'text-brand-600', ok: 'text-ink-900', warn: 'text-ink-900', dim: 'text-ink-500' };
const VERDICT = {
  alert: ['border-alert bg-[#fdf0ef] text-alert', 'notifications_active'],
  ok: ['border-ink-200 bg-white text-ink-800', 'check_circle'],
  warn: ['border-ink-300 bg-ink-50 text-ink-800', 'schedule'],
  info: ['border-brand-200 bg-brand-50 text-brand-700', 'info'],
  dim: ['border-ink-200 bg-white text-ink-600', 'visibility'],
};
const LAB_ICON = { caida: 'personal_injury', novedades: 'car_crash', audio: 'graphic_eq', multitud: 'groups' };

export function initLab() {
  const canvas = $('#lab-canvas');
  let key = 'caida', scn = null, scenario = null, visible = false, raf = 0, last = 0;
  const instances = {};

  function render(st) {
    $('#lab-readout').innerHTML = st.readout.map(([k, v, t]) =>
      `<div class="flex justify-between gap-4 py-2"><dt class="text-ink-500">${k}</dt><dd class="text-right font-bold ${TONE[t] || TONE.dim}">${v}</dd></div>`).join('');
    const [tone, text] = st.verdict;
    const [cls, icon] = VERDICT[tone] || VERDICT.dim;
    const box = $('#lab-verdict');
    box.className = `flex min-h-[4.5rem] items-start gap-3 rounded-xl border-2 p-4 font-bold ${cls}`;
    box.innerHTML = `<span class="ms">${icon}</span><span>${text}</span>`;
    $$('#lab-actions [data-decide]').forEach((b) => { b.disabled = !st.alert; });
  }

  function actions() {
    const festive = key === 'audio'
      ? `<label class="flex w-full items-center gap-3 text-base font-semibold text-ink-700"><input type="checkbox" data-festive class="h-5 w-5 accent-brand-500">Temporada de fiestas (diciembre, fiestas patronales)</label>` : '';
    $('#lab-actions').innerHTML = `
      <button type="button" data-decide="ok" class="btn-primary btn-sm" disabled><span class="ms text-xl">task_alt</span>Confirmar y enviar ayuda</button>
      <button type="button" data-decide="fp" class="btn-outline btn-sm" disabled><span class="ms text-xl">block</span>Falsa alarma</button>
      <button type="button" data-toggle-ai aria-pressed="true" class="btn-outline btn-sm"><span class="ms text-xl">visibility</span>Vista de la IA</button>${festive}`;
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
    $('#lab-code').textContent = `${def.code.includes(',') ? 'Módulos' : 'Módulo'} ${def.code}`;
    $('#lab-title').textContent = def.title;
    $('#lab-desc').textContent = def.desc;
    $('#lab-cam').innerHTML = `<span class="ms text-lg">${k === 'audio' ? 'mic' : 'videocam'}</span>${def.cam}`;
    $('#lab-privacy').innerHTML = `<span class="ms text-lg">${k === 'audio' ? 'mic_off' : 'lock'}</span>${k === 'audio' ? 'No se graba audio' : k === 'multitud' ? 'Conteo sin identificar a nadie' : 'Se analiza en el poste'}`;
    $('#lab-scenarios').innerHTML = def.scenarios.map(([id, label]) =>
      `<button type="button" data-sc="${id}" aria-pressed="false" class="min-h-[44px] rounded-xl border-2 border-ink-200 bg-white px-3 text-sm font-bold text-ink-700 transition hover:border-brand-500 aria-pressed:border-brand-500 aria-pressed:bg-brand-50 aria-pressed:text-brand-600">${label}</button>`).join('');
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

  $('#lab-tabs').innerHTML = Object.entries(SCENES).map(([k, d]) =>
    `<button type="button" role="tab" data-lab="${k}" aria-selected="false" class="lab-tab"><span class="ms">${LAB_ICON[k]}</span>${d.title}</button>`).join('');

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
      tg.innerHTML = `<span class="ms text-xl">${scn.showAI ? 'visibility' : 'visibility_off'}</span>${scn.showAI ? 'Vista de la IA' : 'Vista normal'}`;
      if (!visible) scn.draw();
    }
  });
  $('#ai-lab').addEventListener('change', (e) => {
    if (e.target.matches('[data-festive]') && scn.setFestive) { scn.setFestive(e.target.checked); play(scenario); }
  });
  // Flechas del teclado entre pestañas (patrón tablist)
  $('#lab-tabs').addEventListener('keydown', (e) => {
    if (!['ArrowRight', 'ArrowLeft'].includes(e.key)) return;
    const keys = Object.keys(SCENES); const i = keys.indexOf(key);
    const next = keys[(i + (e.key === 'ArrowRight' ? 1 : keys.length - 1)) % keys.length];
    open(next); $(`#ai-lab [data-lab="${next}"]`).focus();
  });

  window.addEventListener('resize', () => { if (scn) { scn.resize(); scn.draw(); } });
  open('caida');
  onVisible(canvas, (v) => {
    visible = v;
    if (v) { cancelAnimationFrame(raf); last = performance.now(); raf = requestAnimationFrame(loop); }
  });
}
