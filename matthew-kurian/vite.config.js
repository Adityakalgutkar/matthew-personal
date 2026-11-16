import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vcards, headTags, viewPages, profile } from './scripts/static-assets.mjs';

// Emits the contact cards, injects metadata from src/data/profile.js and
// writes one page per QR view (e.g. /business) with its own metadata.
function personalCard() {
  let root = process.cwd();
  let outDir = 'dist';
  return {
    name: 'personal-card',
    configResolved(c) { root = c.root; outDir = path.resolve(c.root, c.build.outDir); },
    transformIndexHtml: (html) => html.replace('<!--head-tags-->', '<!--view-head-->' + headTags('full') + '<!--/view-head-->'),
    configureServer(server) {
      for (const card of vcards(root)) {
        server.middlewares.use(`/${card.fileName}`, (_req, res) => {
          res.setHeader('Content-Type', 'text/vcard; charset=utf-8');
          res.setHeader('Content-Disposition', `attachment; filename="${card.fileName}"`);
          res.end(card.text);
        });
      }
    },
    generateBundle() {
      for (const card of vcards(root)) this.emitFile({ type: 'asset', fileName: card.fileName, source: card.text });
    },
    closeBundle() {
      const index = path.join(outDir, 'index.html');
      if (!fs.existsSync(index)) return;
      const html = fs.readFileSync(index, 'utf8');
      for (const { id, dir } of viewPages()) {
        fs.mkdirSync(path.join(outDir, dir), { recursive: true });
        fs.writeFileSync(path.join(outDir, dir, 'index.html'), html.replace(/<!--view-head-->[\s\S]*?<!--\/view-head-->/, headTags(id)));
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), personalCard()],
  define: { __INLINE_VCARD__: 'false' },
  build: { target: 'es2019', cssCodeSplit: false },
});
