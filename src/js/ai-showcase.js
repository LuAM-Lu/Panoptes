// Demostración breve de la IA en la página principal: una animación por situación,
// con una frase fija y una línea de estado. Avanza sola hasta que el visitante elige una.
import { FallScene, NoveltyScene, AudioScene, CrowdScene } from './ai-scenes.js';
import { reduceMotion, $, $$ } from './util.js';

const ITEMS = {
  caida: { cls: FallScene, scn: 'caida', dur: 11, caption: 'Si alguien cae y no se levanta, avisa a la central para enviar ayuda.' },
  choque: { cls: NoveltyScene, scn: 'choque', dur: 8, caption: 'Detecta el choque y muestra a la central el lugar exacto.' },
  humo: { cls: NoveltyScene, scn: 'humo', dur: 9, caption: 'Avisa a los bomberos si el humo crece. No confunde una parrilla con un incendio.' },
  robo: { cls: NoveltyScene, scn: 'sabotaje', dur: 8, caption: 'Avisa si alguien abre la caja, tapa una cámara o se lleva la batería.' },
  grito: { cls: AudioScene, scn: 'grito', dur: 7, caption: 'Reconoce un grito de auxilio o un disparo, sin grabar conversaciones.' },
  multitud: { cls: CrowdScene, scn: 'estampida', dur: 9, caption: 'Avisa si una multitud se aprieta demasiado o sale corriendo.' },
};
const ORDER = Object.keys(ITEMS);
const TONE_ICON = { alert: 'notifications_active', warn: 'schedule', ok: 'check_circle', info: 'info', dim: 'visibility' };

export function initShowcase() {
  const canvas = $('#ai-canvas');
  const caption = $('#ai-caption');
  const status = $('#ai-status');
  const buttons = $$('#ai-show [data-ai]');
  const scenes = new Map();
  let key = 'caida', scene = null, elapsed = 0, auto = !reduceMotion, visible = false, last = 0, raf = 0;

  const onUpdate = (st) => {
    const [tone, text] = st.verdict;
    status.className = `mt-2 flex min-h-[3rem] items-start gap-2 text-base ${tone === 'alert' ? 'font-bold text-alert' : 'text-ink-600'}`;
    status.innerHTML = `<span class="ms text-xl">${TONE_ICON[tone] || 'visibility'}</span><span>${text}</span>`;
  };

  function sceneFor(k) {
    const it = ITEMS[k];
    if (!scenes.has(it.cls)) scenes.set(it.cls, new it.cls(canvas, { simple: true, onUpdate }));
    return scenes.get(it.cls);
  }

  function show(k) {
    key = k; elapsed = 0;
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.ai === k)));
    caption.textContent = ITEMS[k].caption;
    scene = sceneFor(k);
    scene.resize();
    scene.set(ITEMS[k].scn);
    if (reduceMotion) {
      // Sin animación: se muestra directamente el momento del aviso.
      for (let t = 0; t < ITEMS[k].dur - 1; t += 0.05) scene.step(0.05);
      scene.draw();
    }
  }

  function frame(now) {
    if (!visible) { raf = 0; return; }
    const dt = Math.min(0.1, Math.max(0, (now - last) / 1000));
    last = now;
    scene.step(dt);
    scene.draw();
    elapsed += dt;
    if (elapsed > ITEMS[key].dur) {
      if (auto) show(ORDER[(ORDER.indexOf(key) + 1) % ORDER.length]);
      else show(key);
    }
    raf = requestAnimationFrame(frame);
  }

  function start() {
    if (reduceMotion || raf) return;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  }

  buttons.forEach((b) => b.addEventListener('click', () => { auto = false; show(b.dataset.ai); }));
  new IntersectionObserver((en) => {
    visible = en[0].isIntersecting && !document.hidden;
    if (visible) start();
  }, { threshold: 0.1 }).observe(canvas);
  document.addEventListener('visibilitychange', () => {
    visible = !document.hidden && canvas.getBoundingClientRect().top < innerHeight && canvas.getBoundingClientRect().bottom > 0;
    if (visible) start();
  });
  let rt = 0;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => { if (scene) { scene.resize(); scene.draw(); } }, 150);
  });

  show(key);
}
