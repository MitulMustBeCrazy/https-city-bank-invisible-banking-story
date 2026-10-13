import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const v2 = resolve(here, '../v2');
const read = name => readFileSync(resolve(v2, name), 'utf8');
let html = read('index.html');
html = html.replace('  <link rel="stylesheet" href="editorial.css">\n  <link rel="stylesheet" href="rebuild.css">',
  `  <style>\n${read('editorial.css')}\n${read('rebuild.css')}\n  </style>`);
html = html.replace('  <script src="presentation.js" defer></script>\n  <script src="motion.js" defer></script>\n', '');
html = html.replace('</body>', `  <script>\n${read('presentation.js')}\n  </script>\n  <script>\n${read('motion.js')}\n  </script>\n</body>`);
writeFileSync(resolve(v2, 'standalone.html'), html);
