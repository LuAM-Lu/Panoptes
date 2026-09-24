// Genera Panoptes_Dossier_Ejecutivo.pdf a partir de dossier.html con Chrome/Chromium sin interfaz.
// Uso: CHROME_PATH=/ruta/a/chrome npm run dossier
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const chrome = process.env.CHROME_PATH || 'google-chrome';
const out = path.join(root, 'Panoptes_Dossier_Ejecutivo.pdf');
execFileSync(chrome, [
  '--headless=new', '--disable-gpu', '--no-sandbox', '--no-pdf-header-footer',
  '--virtual-time-budget=4000', `--print-to-pdf=${out}`,
  pathToFileURL(path.join(root, 'dossier.html')).href,
], { stdio: 'inherit' });
console.log('PDF generado:', out);
