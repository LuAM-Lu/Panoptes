import { SPECS, GALLERY, AI_CORE, AI_EXTRA } from './data.js';
import { initDsip } from './dsip.js';
import { initC3i } from './c3i.js';
import { initFusion } from './fusion.js';
import { initInvestment } from './investment.js';
import { reduceMotion, $, $$ } from './util.js';

/* ---------- Intro (una vez por sesión, omitible) ---------- */
(function intro() {
  const el = $('#intro');
  if (!el) return;
  let seen = false;
  try { seen = sessionStorage.getItem('panoptes-intro') === '1'; } catch (e) { /* sin almacenamiento */ }
  if (seen || reduceMotion) { el.remove(); return; }
  const done = () => { el.classList.add('done'); setTimeout(() => el.remove(), 700); };
  el.addEventListener('click', done);
  setTimeout(done, 1500);
  try { sessionStorage.setItem('panoptes-intro', '1'); } catch (e) { /* sin almacenamiento */ }
})();

/* ---------- Cabecera: fondo al hacer scroll y tema según la sección ---------- */
const header = $('#site-header');
const darkSections = $$('section[data-theme="dark"]');
function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 24);
  const y = 40;
  const overDark = darkSections.some((s) => {
    const r = s.getBoundingClientRect();
    return r.top <= y && r.bottom >= y;
  });
  header.classList.toggle('on-dark', overDark);
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

/* ---------- Menú móvil ---------- */
const menuBtn = $('#menu-btn');
const mobileNav = $('#mobile-nav');
function setMenu(open) {
  mobileNav.hidden = !open;
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.querySelector('.ms').textContent = open ? 'close' : 'menu';
  if (open) header.classList.add('scrolled');
  else updateHeader();
}
menuBtn.addEventListener('click', () => setMenu(mobileNav.hidden));
mobileNav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !mobileNav.hidden) setMenu(false); });

/* ---------- Resaltado de la sección activa ---------- */
const navLinks = $$('#site-header nav .nav-link');
const spyTargets = navLinks.map((a) => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    navLinks.forEach((a) => a.setAttribute('aria-current', String(a.getAttribute('href') === '#' + en.target.id)));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
spyTargets.forEach((t) => spy.observe(t));

/* ---------- Aparición al hacer scroll ---------- */
const revealer = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('in'); revealer.unobserve(en.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
$$('.reveal').forEach((el) => revealer.observe(el));

/* ---------- Contadores ---------- */
const counter = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    counter.unobserve(en.target);
    const end = Number(en.target.dataset.count);
    if (reduceMotion) return;
    const t0 = performance.now();
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / 1100);
      en.target.textContent = Math.round(end * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}, { threshold: 0.6 });
$$('[data-count]').forEach((el) => counter.observe(el));

/* ---------- Portada: reloj y alertas rotativas ---------- */
const HERO_ALERTS = [
  { icon: 'personal_injury', tone: 'rose', pos: [40, 68], title: 'Persona caída · parada Av. principal', text: 'Inmóvil 41 s · PTZ orientado · ambulancia notificada tras confirmación del operador' },
  { icon: 'electric_bolt', tone: 'amber', pos: [58, 52], title: 'Apagón · DSIP-04 en batería (96 %)', text: 'Semáforo y cámaras operativos · valla apagada para ahorrar energía · 4 h 48 min restantes' },
  { icon: 'groups', tone: 'amber', pos: [30, 30], title: 'Aglomeración · plaza Bolívar', text: '2,4 personas/m² en la salida de la misa · Protección Civil avisada · solo conteo anónimo' },
  { icon: 'graphic_eq', tone: 'emerald', pos: [74, 38], title: 'Cohetón descartado', text: 'Pirotecnia (0,91), no disparo · temporada festiva activa · sin grabar audio' },
];
const TONES = {
  rose: ['border-rose-400/40', 'bg-rose-500/15 text-rose-300', 'bg-rose-500', 'bg-rose-500/70'],
  amber: ['border-amber-400/40', 'bg-amber-500/15 text-amber-300', 'bg-amber-500', 'bg-amber-500/70'],
  emerald: ['border-emerald-400/40', 'bg-emerald-500/15 text-emerald-300', 'bg-emerald-500', 'bg-emerald-500/70'],
};
(function hero() {
  const clock = $('#hero-clock');
  const tick = () => { clock.textContent = new Date().toLocaleTimeString('es-VE', { hour12: false }); };
  tick(); setInterval(tick, 1000);
  const box = $('#hero-alert'), icon = $('#hero-alert-icon'), title = $('#hero-alert-title'), text = $('#hero-alert-text'), ping = $('#hero-ping');
  let i = 0;
  const show = () => {
    const a = HERO_ALERTS[i % HERO_ALERTS.length]; i++;
    const t = TONES[a.tone];
    box.style.opacity = '0';
    setTimeout(() => {
      box.className = `flex items-start gap-3 rounded-xl border ${t[0]} bg-ink-950/90 p-3 backdrop-blur transition-all duration-500`;
      icon.className = `icon-tile h-10 w-10 ${t[1]}`;
      icon.innerHTML = `<span class="ms">${a.icon}</span>`;
      title.textContent = a.title; text.textContent = a.text;
      ping.className = `absolute grid h-7 w-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full ${t[2]} text-white transition-all duration-700`;
      ping.style.left = a.pos[0] + '%'; ping.style.top = a.pos[1] + '%';
      ping.innerHTML = `<span class="absolute inset-0 animate-ping2 rounded-full ${t[3]}"></span><span class="ms relative text-base">${a.icon}</span>`;
      box.style.opacity = '1';
    }, 350);
  };
  if (!reduceMotion) setInterval(show, 4200);
})();

/* ---------- Diálogo reutilizable ---------- */
const modal = $('#modal');
function openModal(title, html) {
  $('#modal-title').textContent = title;
  $('#modal-body').innerHTML = html;
  if (typeof modal.showModal === 'function') modal.showModal();
  else modal.setAttribute('open', '');
}
function closeModal() { if (modal.open) modal.close(); else modal.removeAttribute('open'); }
$('#modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

document.addEventListener('click', (e) => {
  const spec = e.target.closest('[data-spec]');
  if (spec) {
    const d = SPECS[spec.dataset.spec];
    const media = d.image
      ? `<div class="grid place-items-center rounded-2xl bg-slate-50 p-6"><img src="${d.image}" alt="" class="max-h-72 object-contain"></div>`
      : `<div class="grid place-items-center rounded-2xl bg-ink-900 p-10"><span class="ms text-8xl text-emerald-300">${d.icon}</span></div>`;
    openModal(d.title, `<div class="grid gap-6 md:grid-cols-5"><div class="md:col-span-2">${media}</div>
      <ul class="grid gap-3 sm:grid-cols-2 md:col-span-3">${d.items.map(([ic, t, x]) => `
        <li class="flex gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3"><span class="ms text-indigo-600">${ic}</span>
        <div><p class="text-sm font-bold text-slate-900">${t}</p><p class="mt-0.5 text-xs leading-relaxed text-slate-600">${x}</p></div></li>`).join('')}
      </ul></div>`);
    return;
  }
  const gal = e.target.closest('[data-gallery]');
  if (gal) {
    const g = GALLERY[Number(gal.dataset.gallery)];
    openModal(g.title, `<img src="${g.img}" alt="" class="w-full rounded-2xl"><p class="mt-4 text-sm leading-relaxed text-slate-600">${g.text}</p>`);
  }
});

/* ---------- Tarjetas de módulos IA ---------- */
$('#ai-core').innerHTML = AI_CORE.map((m) => `
  <article class="card-dark reveal flex flex-col p-5">
    <div class="flex items-center justify-between">
      <span class="icon-tile bg-emerald-400/15 text-emerald-300"><span class="ms">${m.icon}</span></span>
      <span class="font-mono text-xs font-bold text-emerald-300">${m.code}</span>
    </div>
    <h4 class="mt-4 text-lg font-extrabold">${m.title}</h4>
    <p class="mt-2 text-sm leading-relaxed text-slate-300">${m.what}</p>
    <dl class="mt-4 space-y-3 border-t border-white/10 pt-4 text-xs leading-relaxed">
      <div><dt class="font-bold uppercase tracking-wider text-slate-500">Caso venezolano</dt><dd class="mt-1 text-slate-400">${m.ve}</dd></div>
      <div><dt class="font-bold uppercase tracking-wider text-slate-500">Falsos positivos que filtra</dt><dd class="mt-1 text-slate-400">${m.filter}</dd></div>
    </dl>
  </article>`).join('');
$('#ai-extra').innerHTML = AI_EXTRA.map((m) => `
  <article class="card-dark reveal p-4">
    <div class="flex items-center gap-2"><span class="ms text-indigo-300">${m.icon}</span><span class="font-mono text-[11px] font-bold text-indigo-300">${m.code}</span></div>
    <h4 class="mt-2 text-sm font-extrabold">${m.title}</h4>
    <p class="mt-1.5 text-xs leading-relaxed text-slate-400">${m.text}</p>
  </article>`).join('');
$$('#ai-core .reveal, #ai-extra .reveal').forEach((el) => revealer.observe(el));

/* ---------- Módulos interactivos ---------- */
initDsip();
initC3i();
initFusion();
initInvestment();

/* Carga diferida de los módulos pesados cuando su sección se acerca a la pantalla */
function whenNear(selector, load) {
  const el = $(selector);
  if (!el) return;
  const io = new IntersectionObserver((entries) => {
    if (entries.some((en) => en.isIntersecting)) { io.disconnect(); load(); }
  }, { rootMargin: '600px 0px' });
  io.observe(el);
}
whenNear('#ai-lab', () => import('./ai-lab.js').then((m) => m.initLab()));
whenNear('#sim', () => import('./simulator.js').then((m) => m.initSimulator()));
whenNear('#ai-calc', () => import('./ai-budget.js').then((m) => m.initCalculator()));
whenNear('#roadmap', () => import('./roadmap.js').then((m) => m.initRoadmap()));
