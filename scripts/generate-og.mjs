// Renders scripts/og-template.html to public/og-image.png (1200x630).
// Requires playwright with chromium available; not a project dependency:
//   npx -y playwright@latest screenshot is not enough (needs fonts to load),
//   so run e.g.: node scripts/generate-og.mjs (with playwright resolvable)
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  ({ chromium } = require('/tmp/pw-verify/node_modules/playwright'));
}

const here = dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(`file://${join(here, 'og-template.html')}`);
await page.waitForTimeout(500); // font load
await page.screenshot({ path: join(here, '..', 'public', 'og-image.png') });
await browser.close();
console.log('wrote public/og-image.png');
