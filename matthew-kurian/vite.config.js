import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vcardText, headTags, profile } from './scripts/static-assets.mjs';

// Emits the contact card and injects metadata from src/data/profile.js
function personalCard() {
  let root = process.cwd();
  return {
    name: 'personal-card',
    configResolved(c) { root = c.root; },
    transformIndexHtml: (html) => html.replace('<!--head-tags-->', headTags()),
    configureServer(server) {
      server.middlewares.use(`/${profile.vcardFileName}`, (_req, res) => {
        res.setHeader('Content-Type', 'text/vcard; charset=utf-8');
        res.setHeader('Content-Disposition', `attachment; filename="${profile.vcardFileName}"`);
        res.end(vcardText(root));
      });
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: profile.vcardFileName, source: vcardText(root) });
    },
  };
}

export default defineConfig({
  plugins: [react(), personalCard()],
  define: { __INLINE_VCARD__: 'false' },
  build: { target: 'es2019', cssCodeSplit: false },
});
