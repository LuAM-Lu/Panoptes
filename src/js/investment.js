import { $, $$, money } from './util.js';

// Pestañas de costos y simulador de ocupación publicitaria.
const STREET_INVESTMENT = 246396.5;
const SLOTS = 10 * 10; // 10 vallas × 10 espacios
const PRICE = 50;      // USD por espacio al mes

function setTab(name) {
  $$('[data-cost]').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.cost === name)));
  $$('[data-cost-panel]').forEach((p) => { p.hidden = p.dataset.costPanel !== name; });
}

function updateOcc() {
  const occ = Number($('#occ').value) / 100;
  const month = SLOTS * PRICE * occ;
  const years = STREET_INVESTMENT / (month * 12);
  $('#occ-out').textContent = Math.round(occ * 100) + ' %';
  $('#occ-income').textContent = money(month);
  $('#occ-year').textContent = money(month * 12);
  $('#occ-payback').textContent = years.toLocaleString('es-VE', { maximumFractionDigits: 1 }) + ' años';
  let note;
  if (occ >= 0.95) note = 'Con pauta plena, la inversión de calle se recupera en ≈ 4 años; sumando el ahorro eléctrico y la eliminación de reposiciones de semáforos, el piloto completo en ≈ 5 años.';
  else if (occ >= 0.6) note = 'Escenario base: la pauta cubre la energía de los nodos y el mantenimiento, y amortiza la calle en un plazo razonable para un contrato de 15 años.';
  else note = 'Escenario conservador: la pauta cubre la energía y parte del mantenimiento, pero no amortiza la inversión por sí sola. Conviene anunciantes ancla o la Vía A.';
  $('#occ-note').textContent = note;
}

export function initInvestment() {
  $('#cost-tabs').addEventListener('click', (e) => {
    const b = e.target.closest('[data-cost]');
    if (b) setTab(b.dataset.cost);
  });
  $('#occ').addEventListener('input', updateOcc);
  updateOcc();
}
