import { whenNear } from './site.js';

whenNear('#ai-lab', () => import('./ai-lab.js').then((m) => m.initLab()));
whenNear('#sim', () => import('./simulator.js').then((m) => m.initSimulator()));

/* Hoja de ruta: una fase a la vez en una sola línea (pestañas accesibles con flechas) */
const rm = document.getElementById('roadmap');
if (rm) {
  const tabs = [...rm.querySelectorAll('[role="tab"]')];
  const panels = [...rm.querySelectorAll('[role="tabpanel"]')];
  const current = () => tabs.findIndex((t) => t.getAttribute('aria-selected') === 'true');
  const select = (i, focus) => {
    tabs.forEach((t, j) => { t.setAttribute('aria-selected', String(i === j)); t.tabIndex = i === j ? 0 : -1; });
    panels.forEach((p, j) => { p.hidden = i !== j; });
    rm.style.setProperty('--rm-i', i);
    if (focus) tabs[i].focus();
  };
  tabs.forEach((t, i) => t.addEventListener('click', () => select(i)));
  rm.querySelector('[role="tablist"]').addEventListener('keydown', (e) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    select((current() + step + tabs.length) % tabs.length, true);
  });
  rm.addEventListener('click', (e) => {
    const b = e.target.closest('[data-rm-step]');
    if (b) select(Math.max(0, Math.min(tabs.length - 1, current() + Number(b.dataset.rmStep))));
  });
}
