import { whenNear } from './site.js';

whenNear('#ai-lab', () => import('./ai-lab.js').then((m) => m.initLab()));
whenNear('#sim', () => import('./simulator.js').then((m) => m.initSimulator()));
