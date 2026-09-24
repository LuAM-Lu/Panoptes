import { $, $$, money } from './util.js';

// Modelo de costos de la IA local (USD 2026, estimados, puestos en Venezuela).
// Con los valores por defecto reproduce la tabla publicada: $105.820 y $1.963/mes.
export const COSTS = {
  edgeBox: 850, enclosure: 150, tamper: 60, mic: 180, installPerNode: 250,
  serverBase: 6000, perGpu: 4000, camsPerGpu: 60, ups: 1600, storage: 1400, network: 900,
  datasetBase: 3000, datasetPerNode: 240, training: 2000, governance: 3000,
  dev: { base: 22000, caida: 6000, novedades: 7000, audio: 6000, multitudes: 6000, copiloto: 6000 },
  contingency: 0.10,
  edgeW: 15, gpuW: 350, serverW: 200, kwh: 0.08, mlops: 1250, support: 450, reserveRate: 0.08,
  cloudPerCam: 20, cloudMbpsPerCam: 2, cloudPerMbps: 10,
};

export function estimate({ nodes, priv, mods, munis }) {
  const c = COSTS;
  const street = nodes * (c.edgeBox + c.enclosure + c.tamper + (mods.audio ? c.mic : 0));
  const gpus = priv > 0 ? Math.ceil(priv / c.camsPerGpu) : (mods.copiloto ? 1 : 0);
  const central = gpus ? c.serverBase + c.perGpu * gpus + c.ups + c.storage + c.network : 0;
  const impl = nodes * c.installPerNode + c.datasetBase + c.datasetPerNode * nodes + c.training + c.governance;
  const devFull = c.dev.base + Object.keys(mods).reduce((a, k) => a + (mods[k] ? c.dev[k] : 0), 0);
  const dev = devFull / munis;
  const cont = (street + central + impl + dev) * c.contingency;
  const capex = street + central + impl + dev + cont;
  const watts = nodes * c.edgeW + gpus * c.gpuW + (gpus ? c.serverW : 0);
  const energy = (watts * 730 / 1000) * c.kwh;
  const reserve = (street + central) * c.reserveRate / 12;
  const opex = energy + c.mlops + c.support + reserve;
  const cams = nodes * 3 + priv;
  const cloudMonthly = cams * (c.cloudPerCam + c.cloudMbpsPerCam * c.cloudPerMbps);
  return { street, central, impl, dev, cont, capex, gpus, opex, energy, cams, perCam: opex / cams,
    tcoLocal: capex + opex * 60, tcoCloud: cloudMonthly * 60, cloudMonthly, mbps: cams * c.cloudMbpsPerCam };
}

export function initCalculator() {
  const read = () => ({
    nodes: Number($('#calc-nodes').value),
    priv: Number($('#calc-priv').value),
    munis: Number($('#calc-muni').value),
    mods: Object.fromEntries($$('#ai-calc [data-mod]').map((i) => [i.dataset.mod, i.checked])),
  });
  function update() {
    const inp = read();
    $('#calc-nodes-out').textContent = inp.nodes;
    $('#calc-priv-out').textContent = inp.priv;
    $('#calc-muni-out').textContent = inp.munis;
    const r = estimate(inp);
    const line = (k, v, strong) => `<div class="flex justify-between gap-3 ${strong ? 'border-t border-slate-200 pt-2 font-extrabold text-slate-900' : 'text-slate-600'}"><dt>${k}</dt><dd class="tabular-nums">${v}</dd></div>`;
    $('#calc-out').innerHTML =
      line('Equipos en la calle', money(r.street)) +
      line(`Central (${r.gpus} GPU)`, money(r.central)) +
      line('Implementación', money(r.impl)) +
      line(inp.munis > 1 ? `Desarrollo (÷ ${inp.munis} municipios)` : 'Desarrollo del software', money(r.dev)) +
      line('Contingencia 10 %', money(r.cont)) +
      line('Inversión inicial', money(r.capex), true) +
      line('Operación mensual', money(r.opex), true) +
      line(`Por cámara al mes (${r.cams} cámaras)`, money(r.perCam, 2));
    const max = Math.max(r.tcoLocal, r.tcoCloud);
    $('#calc-tco-local').textContent = money(r.tcoLocal);
    $('#calc-tco-cloud').textContent = money(r.tcoCloud);
    $('#calc-bar-local').style.width = (r.tcoLocal / max * 100) + '%';
    $('#calc-bar-cloud').style.width = (r.tcoCloud / max * 100) + '%';
    const diff = r.tcoCloud - r.tcoLocal;
    $('#calc-verdict').textContent = diff > 0
      ? `La IA local ahorra ${money(diff)} en 5 años frente a la nube, que además exigiría ${r.mbps} Mbps dedicados las 24 horas.`
      : `En un despliegue tan pequeño la nube parece ${money(-diff)} más barata en papel, pero exige ${r.mbps} Mbps dedicados y se detiene sin internet o en apagones.`;
  }
  $('#ai-calc').addEventListener('input', update);
  update();
}
