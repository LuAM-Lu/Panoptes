import { ROADMAP } from './data.js';
import { $, $$ } from './util.js';

const KIND = {
  base: { bar: 'bg-indigo-500', soft: 'bg-indigo-50 text-indigo-700', ring: 'ring-indigo-300', label: 'Plan base' },
  ia: { bar: 'bg-emerald-500', soft: 'bg-emerald-50 text-emerald-700', ring: 'ring-emerald-300', label: 'IA Vital' },
  exp: { bar: 'bg-amber-500', soft: 'bg-amber-50 text-amber-700', ring: 'ring-amber-300', label: 'Expansión' },
};

export function initRoadmap() {
  const { start, end, phases } = ROADMAP;
  const span = end - start + 1;
  const pct = (m) => ((m - start) / span) * 100;
  const ticks = [-3, 0, 6, 12, 18, 24, 30, 36];

  $('#roadmap').innerHTML = `
    <div class="card overflow-hidden">
      <div class="overflow-x-auto">
        <div class="min-w-[760px] p-4 sm:p-6">
          <div class="relative ml-[220px] h-6 text-[11px] font-bold text-slate-400">
            ${ticks.map((m, i) => `<span class="absolute whitespace-nowrap ${i === ticks.length - 1 ? '-translate-x-full' : '-translate-x-1/2'}" style="left:${pct(m)}%">${m < 0 ? 'Antes' : m === 0 ? 'Firma' : 'Mes ' + m}</span>`).join('')}
          </div>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-[220px] right-0">
              ${ticks.map((m) => `<span class="absolute inset-y-0 border-l ${m === 0 ? 'border-indigo-300' : 'border-slate-100'}" style="left:${pct(m)}%"></span>`).join('')}
              <span class="absolute inset-y-0 border-l-2 border-dashed border-slate-300" style="left:${pct(12)}%"></span>
            </div>
            <ol class="relative space-y-2">
              ${phases.map((p) => `
                <li>
                  <button type="button" data-phase="${p.id}" aria-pressed="false" class="group flex w-full items-center rounded-xl text-left transition hover:bg-slate-50 aria-pressed:bg-slate-50">
                    <span class="sticky left-0 z-10 flex w-[220px] shrink-0 items-center gap-2 bg-white py-2 pr-3 group-hover:bg-slate-50 group-aria-pressed:bg-slate-50">
                      <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full ${KIND[p.kind].soft} text-xs font-extrabold">${p.id}</span>
                      <span class="text-sm font-bold leading-tight text-slate-800">${p.name}</span>
                    </span>
                    <span class="relative h-8 flex-1">
                      <span class="absolute inset-y-1 flex items-center overflow-hidden rounded-lg ${KIND[p.kind].bar} px-2 shadow-sm transition group-hover:brightness-110 group-aria-pressed:ring-4 ${KIND[p.kind].ring}" style="left:${pct(p.from)}%;width:${Math.max(2.5, pct(p.to + 1) - pct(p.from))}%"><span class="truncate text-[11px] font-bold text-white">${p.short}</span></span>
                    </span>
                  </button>
                </li>`).join('')}
            </ol>
          </div>
        </div>
      </div>
      <p class="border-t border-slate-100 px-4 py-2 text-center text-xs text-slate-400 sm:hidden">Deslice la tabla hacia los lados para ver todo el cronograma.</p>
    </div>
    <div id="phase-detail" class="card mt-4 p-6 md:p-8" aria-live="polite"></div>`;

  function show(id) {
    const p = phases.find((x) => x.id === id);
    const k = KIND[p.kind];
    $$('#roadmap [data-phase]').forEach((b) => b.setAttribute('aria-pressed', String(Number(b.dataset.phase) === id)));
    $('#phase-detail').innerHTML = `
      <div class="flex flex-wrap items-center gap-2">
        <span class="chip ${k.soft}">${k.label}</span><span class="chip bg-slate-100 text-slate-600">${p.when}</span>
      </div>
      <h3 class="mt-3 text-2xl font-extrabold">Fase ${p.id} · ${p.name}</h3>
      <p class="mt-2 text-slate-600">${p.goal}</p>
      <div class="mt-6 grid gap-6 md:grid-cols-3">
        <div class="md:col-span-2">
          <h4 class="text-xs font-extrabold uppercase tracking-wider text-slate-500">Entregables</h4>
          <ul class="mt-3 space-y-2 text-sm text-slate-700">${p.items.map((i) => `<li class="flex gap-2"><span class="ms text-lg text-indigo-500">check_circle</span>${i}</li>`).join('')}</ul>
        </div>
        <div class="space-y-4">
          <div class="rounded-xl bg-slate-50 p-4"><h4 class="text-xs font-extrabold uppercase tracking-wider text-slate-500">Inversión estimada</h4><p class="mt-1 text-sm font-bold text-slate-900">${p.cost}</p></div>
          <div class="rounded-xl bg-emerald-50 p-4"><h4 class="text-xs font-extrabold uppercase tracking-wider text-emerald-700">Meta para avanzar</h4><p class="mt-1 text-sm text-emerald-900">${p.exit}</p></div>
        </div>
      </div>
      <div class="mt-6 flex justify-between">
        <button type="button" data-step="-1" class="btn-ghost btn-sm" ${id === 0 ? 'disabled' : ''}><span class="ms text-lg">chevron_left</span>Fase anterior</button>
        <button type="button" data-step="1" class="btn-ghost btn-sm" ${id === phases.length - 1 ? 'disabled' : ''}>Fase siguiente<span class="ms text-lg">chevron_right</span></button>
      </div>`;
  }
  let cur = 0;
  $('#roadmap').addEventListener('click', (e) => {
    const b = e.target.closest('[data-phase]');
    if (b) { cur = Number(b.dataset.phase); show(cur); return; }
    const s = e.target.closest('[data-step]');
    if (s) { cur = Math.max(0, Math.min(phases.length - 1, cur + Number(s.dataset.step))); show(cur); }
  });
  show(0);
}
