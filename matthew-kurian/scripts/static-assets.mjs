/**
 * Build-time helpers shared by vite.config.js:
 *  - the downloadable contact cards (one per distinct card in src/data/views.js),
 *    with the portrait embedded when it exists
 *  - <head> metadata (SEO, Open Graph, JSON-LD) for each view
 *  - viewPages(): the extra HTML pages, e.g. business/index.html
 */
import fs from 'node:fs';
import path from 'node:path';
import { profile as base } from '../src/data/profile.js';
import { views, viewIds } from '../src/data/views.js';
import { applyView } from '../src/lib/view.js';
import { buildVCard } from '../src/lib/vcard.js';
import { renderHeadTags } from '../src/lib/meta.js';

export const profile = applyView(base, 'full');
export const viewProfile = (id) => applyView(base, id);

export function vcardText(root, id = 'full') {
  const p = applyView(base, id);
  const img = path.join(root, 'public', p.profileImageCard.replace(/^\//, ''));
  let photoBase64;
  if (fs.existsSync(img)) {
    const buf = fs.readFileSync(img);
    // Contacts apps resize anyway; skip embedding unusually large originals.
    if (buf.length < 200 * 1024) photoBase64 = buf.toString('base64');
  }
  const url = p.siteUrl ? p.siteUrl.replace(/\/$/, '') + (p.viewPath === '/' ? '/' : p.viewPath) : undefined;
  return buildVCard(p, { url, photoBase64 });
}

/** One entry per distinct contact-card file: { fileName, text }. */
export function vcards(root) {
  const seen = new Map();
  for (const id of viewIds) {
    const p = applyView(base, id);
    if (!seen.has(p.vcardFileName)) seen.set(p.vcardFileName, vcardText(root, id));
  }
  return [...seen].map(([fileName, text]) => ({ fileName, text }));
}

export const headTags = (id = 'full') => renderHeadTags(applyView(base, id));

/** Extra pages for the QR views: [{ dir: 'business', id }] */
export const viewPages = () => viewIds.filter((id) => views[id].path && views[id].path !== '/').map((id) => ({ id, dir: views[id].path.replace(/^\//, '') }));
