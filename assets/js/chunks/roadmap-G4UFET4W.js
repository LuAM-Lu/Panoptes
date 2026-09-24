import{g as b}from"./chunk-IARG6SOU.js";import{b as r,c as x}from"./chunk-AXNVL5X6.js";var d={base:{bar:"bg-indigo-500",soft:"bg-indigo-50 text-indigo-700",ring:"ring-indigo-300",label:"Plan base"},ia:{bar:"bg-emerald-500",soft:"bg-emerald-50 text-emerald-700",ring:"ring-emerald-300",label:"IA Vital"},exp:{bar:"bg-amber-500",soft:"bg-amber-50 text-amber-700",ring:"ring-amber-300",label:"Expansi\xF3n"}};function v(){let{start:c,end:g,phases:i}=b,m=g-c+1,s=t=>(t-c)/m*100,o=[-3,0,6,12,18,24,30,36];r("#roadmap").innerHTML=`
    <div class="card overflow-hidden">
      <div class="overflow-x-auto">
        <div class="min-w-[760px] p-4 sm:p-6">
          <div class="relative ml-[220px] h-6 text-[11px] font-bold text-slate-400">
            ${o.map((t,e)=>`<span class="absolute whitespace-nowrap ${e===o.length-1?"-translate-x-full":"-translate-x-1/2"}" style="left:${s(t)}%">${t<0?"Antes":t===0?"Firma":"Mes "+t}</span>`).join("")}
          </div>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-[220px] right-0">
              ${o.map(t=>`<span class="absolute inset-y-0 border-l ${t===0?"border-indigo-300":"border-slate-100"}" style="left:${s(t)}%"></span>`).join("")}
              <span class="absolute inset-y-0 border-l-2 border-dashed border-slate-300" style="left:${s(12)}%"></span>
            </div>
            <ol class="relative space-y-2">
              ${i.map(t=>`
                <li>
                  <button type="button" data-phase="${t.id}" aria-pressed="false" class="group flex w-full items-center rounded-xl text-left transition hover:bg-slate-50 aria-pressed:bg-slate-50">
                    <span class="sticky left-0 z-10 flex w-[220px] shrink-0 items-center gap-2 bg-white py-2 pr-3 group-hover:bg-slate-50 group-aria-pressed:bg-slate-50">
                      <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full ${d[t.kind].soft} text-xs font-extrabold">${t.id}</span>
                      <span class="text-sm font-bold leading-tight text-slate-800">${t.name}</span>
                    </span>
                    <span class="relative h-8 flex-1">
                      <span class="absolute inset-y-1 flex items-center overflow-hidden rounded-lg ${d[t.kind].bar} px-2 shadow-sm transition group-hover:brightness-110 group-aria-pressed:ring-4 ${d[t.kind].ring}" style="left:${s(t.from)}%;width:${Math.max(2.5,s(t.to+1)-s(t.from))}%"><span class="truncate text-[11px] font-bold text-white">${t.short}</span></span>
                    </span>
                  </button>
                </li>`).join("")}
            </ol>
          </div>
        </div>
      </div>
      <p class="border-t border-slate-100 px-4 py-2 text-center text-xs text-slate-400 sm:hidden">Deslice la tabla hacia los lados para ver todo el cronograma.</p>
    </div>
    <div id="phase-detail" class="card mt-4 p-6 md:p-8" aria-live="polite"></div>`;function p(t){let e=i.find(a=>a.id===t),n=d[e.kind];x("#roadmap [data-phase]").forEach(a=>a.setAttribute("aria-pressed",String(Number(a.dataset.phase)===t))),r("#phase-detail").innerHTML=`
      <div class="flex flex-wrap items-center gap-2">
        <span class="chip ${n.soft}">${n.label}</span><span class="chip bg-slate-100 text-slate-600">${e.when}</span>
      </div>
      <h3 class="mt-3 text-2xl font-extrabold">Fase ${e.id} \xB7 ${e.name}</h3>
      <p class="mt-2 text-slate-600">${e.goal}</p>
      <div class="mt-6 grid gap-6 md:grid-cols-3">
        <div class="md:col-span-2">
          <h4 class="text-xs font-extrabold uppercase tracking-wider text-slate-500">Entregables</h4>
          <ul class="mt-3 space-y-2 text-sm text-slate-700">${e.items.map(a=>`<li class="flex gap-2"><span class="ms text-lg text-indigo-500">check_circle</span>${a}</li>`).join("")}</ul>
        </div>
        <div class="space-y-4">
          <div class="rounded-xl bg-slate-50 p-4"><h4 class="text-xs font-extrabold uppercase tracking-wider text-slate-500">Inversi\xF3n estimada</h4><p class="mt-1 text-sm font-bold text-slate-900">${e.cost}</p></div>
          <div class="rounded-xl bg-emerald-50 p-4"><h4 class="text-xs font-extrabold uppercase tracking-wider text-emerald-700">Meta para avanzar</h4><p class="mt-1 text-sm text-emerald-900">${e.exit}</p></div>
        </div>
      </div>
      <div class="mt-6 flex justify-between">
        <button type="button" data-step="-1" class="btn-ghost btn-sm" ${t===0?"disabled":""}><span class="ms text-lg">chevron_left</span>Fase anterior</button>
        <button type="button" data-step="1" class="btn-ghost btn-sm" ${t===i.length-1?"disabled":""}>Fase siguiente<span class="ms text-lg">chevron_right</span></button>
      </div>`}let l=0;r("#roadmap").addEventListener("click",t=>{let e=t.target.closest("[data-phase]");if(e){l=Number(e.dataset.phase),p(l);return}let n=t.target.closest("[data-step]");n&&(l=Math.max(0,Math.min(i.length-1,l+Number(n.dataset.step))),p(l))}),p(0)}export{v as initRoadmap};
