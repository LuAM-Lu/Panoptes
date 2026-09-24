import { whenNear } from './site.js';
import { initDsip } from './dsip.js';

initDsip();
whenNear('#ai-show', () => import('./ai-showcase.js').then((m) => m.initShowcase()));
