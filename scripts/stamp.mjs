// Agrega ?v=<huella> a la hoja de estilos y a los scripts de entrada en las páginas.
// Así, tras cada publicación, el navegador no mezcla un HTML nuevo con CSS o JS viejos en caché.
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

const hash = (f) => createHash('sha1').update(readFileSync(f)).digest('hex').slice(0, 8);
const files = ['assets/css/app.css', 'assets/js/main.js', 'assets/js/anexo.js'];
const v = Object.fromEntries(files.map((f) => [f, hash(f)]));

for (const page of ['index.html', 'anexo.html']) {
  let s = readFileSync(page, 'utf8');
  for (const f of files) {
    s = s.replace(new RegExp(`(["'])${f.replace(/[.]/g, '\\.')}(\\?v=[0-9a-f]+)?\\1`, 'g'), `$1${f}?v=${v[f]}$1`);
  }
  writeFileSync(page, s);
}
console.log('Versiones:', Object.entries(v).map(([f, h]) => `${f}?v=${h}`).join('  '));
