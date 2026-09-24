#!/usr/bin/env python3
"""Genera un subconjunto de la fuente Material Symbols con solo los íconos usados.

Uso: python3 scripts/build_icons.py   (requiere internet)
Escanea index.html y src/js, descarga el woff2 reducido a assets/fonts/ y
escribe src/css/icons.css. Luego ejecute `npm run build`.
"""
import re, pathlib, urllib.request, urllib.parse, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'
# Íconos que se asignan dinámicamente en JS y no aparecen literales en el HTML
DYNAMIC = {'close', 'menu', 'play_arrow', 'pause', 'zoom_in', 'zoom_out_map', 'info', 'progress_activity', 'visibility_off'}

names = set(DYNAMIC)
sources = [ROOT / 'index.html'] + sorted((ROOT / 'src' / 'js').glob('*.js'))
for f in sources:
    s = f.read_text(encoding='utf-8')
    names |= set(re.findall(r'class="ms[^"]*">\s*([a-z0-9_]+)\s*<', s))
    names |= set(re.findall(r"icon:\s*'([a-z0-9_]+)'", s))
    names |= set(re.findall(r"\[\s*'([a-z0-9_]+)',\s*'[A-ZÁÉÍÓÚ0-9≈−]", s))
    names |= set(re.findall(r"data-icon=\"([a-z0-9_]+)\"", s))

def get(url):
    return urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': UA}), timeout=60).read()

try:
    cp = get('https://raw.githubusercontent.com/google/material-design-icons/master/variablefont/'
             'MaterialSymbolsOutlined%5BFILL%2CGRAD%2Copsz%2Cwght%5D.codepoints').decode()
    valid = {l.split()[0] for l in cp.splitlines() if l.strip()}
    bad = sorted(n for n in names if n not in valid)
    if bad:
        print('Íconos desconocidos (revise el nombre):', ', '.join(bad))
        names -= set(bad)
except Exception as e:  # noqa: BLE001
    print('Aviso: no se pudo validar contra codepoints:', e)

icon_list = ','.join(sorted(names))
css_url = ('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400..600,0..1,0'
           '&icon_names=' + icon_list + '&display=block')
css = get(css_url).decode()
m = re.search(r'url\((https://[^)]+)\)', css)
if not m:
    sys.exit('No se encontró la URL del woff2 en la respuesta de Google Fonts')
out = ROOT / 'assets' / 'fonts' / 'material-symbols-subset.woff2'
out.write_bytes(get(m.group(1)))
(ROOT / 'src' / 'css' / 'icons.css').write_text(
    '/* Generado por scripts/build_icons.py — %d íconos */\n'
    '@font-face {\n  font-family: "Material Symbols Outlined";\n  font-style: normal;\n'
    '  font-weight: 400 600;\n  font-display: block;\n'
    '  src: url("../fonts/material-symbols-subset.woff2") format("woff2");\n}\n' % len(names), encoding='utf-8')
print(f'{len(names)} íconos → {out.relative_to(ROOT)} ({out.stat().st_size // 1024} KB)')
