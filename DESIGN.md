# Vigía — sistema de diseño de Panoptes 2.0

## Idea rectora: «claro para leer, oscuro para operar»
Las secciones de lectura (problema, inversión, hoja de ruta, confianza, FAQ) usan fondo claro: se leen bien en un teléfono a pleno sol. Las secciones de operación (portada, nodo 3D, IA Vital, simulador, contacto) usan un fondo oscuro de sala de control. La alternancia da ritmo y separa «entender» de «ver funcionar».

Reemplaza al sistema neomórfico «Silk»: las sombras dobles, el texto de 7–9 px y los fondos animados a pantalla completa costaban legibilidad y batería en teléfonos modestos.

## Color
| Token | Valor | Uso |
|---|---|---|
| `ink-900` | `#0A1020` | Fondo de secciones oscuras |
| `ink-950` | `#060A14` | Consolas, canvas y pie de página |
| `paper` | `#F5F7FB` | Fondo de secciones claras |
| Indigo 500–600 | `#6366F1` / `#4F46E5` | Marca, acciones primarias, enlaces |
| Emerald 400–500 | `#34D399` / `#10B981` | Panoptes Vital IA, «cuidado», estado correcto |
| Amber 400–500 | `#FBBF24` / `#F59E0B` | Advertencias, apagón, expansión |
| Rose 500 | `#F43F5E` | Alertas que requieren acción |

Regla: el verde significa «IA que cuida». El rojo se reserva para alertas reales; nunca decorativo.

## Tipografía
- **Plus Jakarta Sans** (400–800), autoalojada en `assets/fonts/` (sin depender de Google Fonts).
- Titulares 800 con `tracking-tight`; cuerpo 400–500 a 16 px en móvil. **Mínimo 11 px** en cualquier texto (antes había 7–8 px).
- Cifras con `tabular-nums` y formato venezolano: `$24.639,65`.

## Componentes (en `src/css/app.css`)
- `card` / `card-dark`: borde de 1 px y sombra suave; radios de 16–24 px.
- `panel-console`: contenedor oscuro con halo índigo para 3D, laboratorio IA y simulador.
- `btn-primary`, `btn-vital`, `btn-ghost`, `btn-ghost-dark`: altura mínima de 44 px (táctil).
- `seg` / `seg-light`: controles segmentados con `aria-pressed` o `aria-selected`.
- `tbl` + `tbl-stack`: tabla en escritorio, tarjetas en móvil (`tbl-compact` muestra solo concepto y subtotal).
- `pin`: hotspot numerado sobre imágenes; `tag3d`: etiqueta proyectada del visor 3D.

## Movimiento
- Aparición al hacer scroll solo si hay JavaScript; todo se desactiva con `prefers-reduced-motion`.
- Canvas y 3D se animan **solo mientras están visibles** y se pausan con la pestaña oculta.

## Íconos
Material Symbols Outlined en un **subconjunto** con solo los íconos usados (≈ 100 KB en lugar de varios MB). Si agrega un ícono nuevo, regenere el subconjunto (ver abajo).

---

## Estructura y compilación

```
index.html            Página principal (contenido)
dossier.html          Dossier ejecutivo imprimible (3 páginas carta)
src/css/app.css       Estilos fuente (Tailwind + componentes)
src/js/*.js           Módulos: main, dsip3d (Three.js), ai-scenes, ai-lab, simulator, ai-budget, roadmap…
src/js/data.js        Fuente única de componentes, fichas, módulos IA y fases
assets/               Salida compilada (CSS, JS, fuentes) — se publica tal cual en GitHub Pages
scripts/              build_icons.py (subconjunto de íconos) y dossier-pdf.mjs (PDF)
```

```bash
npm install                     # una vez
npm run build                   # compila assets/css/app.css y assets/js/
python3 scripts/build_icons.py  # tras usar íconos nuevos (requiere internet); luego npm run build
CHROME_PATH=/ruta/a/chrome npm run dossier   # regenera Panoptes_Dossier_Ejecutivo.pdf
```

Los módulos pesados (visor 3D ≈ 135 KB comprimido, laboratorio IA, simulador, calculadora, hoja de ruta) se cargan de forma diferida cuando su sección se acerca a la pantalla. Si el equipo no soporta WebGL, el nodo se muestra como diagrama 2D con puntos interactivos.
