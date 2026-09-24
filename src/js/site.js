// Comportamiento común de las páginas: desplazamiento, menú móvil y sección activa.
import { reduceMotion, $, $$ } from './util.js';

/* ---------- Desplazamiento: siempre empieza arriba, salvo que el enlace apunte a una sección ---------- */
if (!location.hash) window.scrollTo(0, 0);

function goTo(id, smooth) {
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: smooth && !reduceMotion ? 'smooth' : 'auto', block: 'start' });
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
}

document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
  const id = a.getAttribute('href').slice(1);
  if (!id || !document.getElementById(id)) return;
  e.preventDefault();
  goTo(id, true);
  history.replaceState(null, '', id === 'inicio' ? location.pathname : '#' + id);
});

/* ---------- Menú móvil ---------- */
const menuBtn = $('#menu-btn');
const mobileNav = $('#mobile-nav');
function setMenu(open) {
  mobileNav.hidden = !open;
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  menuBtn.querySelector('.ms').textContent = open ? 'close' : 'menu';
}
menuBtn.addEventListener('click', () => setMenu(mobileNav.hidden));
mobileNav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !mobileNav.hidden) { setMenu(false); menuBtn.focus(); } });
window.matchMedia('(min-width: 1280px)').addEventListener('change', (m) => { if (m.matches) setMenu(false); });

/* ---------- Sección activa en el menú ---------- */
const navLinks = $$('#site-header nav .nav-link');
const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    navLinks.forEach((a) => a.setAttribute('aria-current', String(a.getAttribute('href') === '#' + en.target.id)));
  });
}, { rootMargin: '-40% 0px -55% 0px' });
navLinks.map((a) => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean).forEach((t) => spy.observe(t));

export function whenNear(selector, load) {
  const el = $(selector);
  if (!el) return;
  const io = new IntersectionObserver((entries) => {
    if (entries.some((en) => en.isIntersecting)) { io.disconnect(); load(); }
  }, { rootMargin: '600px 0px' });
  io.observe(el);
}
