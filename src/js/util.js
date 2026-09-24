// Utilidades compartidas.
export const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const $ = (s, r = document) => r.querySelector(s);
export const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const usd0 = new Intl.NumberFormat('es-VE', { maximumFractionDigits: 0 });
const usd2 = new Intl.NumberFormat('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
/** Formato monetario venezolano: $105.820 o $15,10 */
export const money = (v, dec = 0) => '$' + (dec ? usd2 : usd0).format(v);

/** Ejecuta fn solo mientras el elemento esté visible (ahorra batería en teléfonos). */
export function onVisible(el, fn) {
  const io = new IntersectionObserver((entries) => entries.forEach((en) => fn(en.isIntersecting)), { threshold: 0.05 });
  io.observe(el);
  return io;
}
