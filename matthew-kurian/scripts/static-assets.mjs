/**
 * Build-time helpers shared by vite.config.js:
 *  - the downloadable contact card (matthew-kurian.vcf), with the
 *    portrait embedded when public/matthew-kurian.jpg exists
 *  - <head> metadata (SEO, Open Graph, JSON-LD) from the profile
 */
import fs from 'node:fs';
import path from 'node:path';
import { profile } from '../src/data/profile.js';
import { buildVCard } from '../src/lib/vcard.js';
import { renderHeadTags } from '../src/lib/meta.js';

export function vcardText(root) {
  const img = path.join(root, 'public', (profile.profileImageCard || profile.profileImage).replace(/^\//, ''));
  let photoBase64;
  if (fs.existsSync(img)) {
    const buf = fs.readFileSync(img);
    // Contacts apps resize anyway; skip embedding unusually large originals.
    if (buf.length < 200 * 1024) photoBase64 = buf.toString('base64');
  }
  const url = profile.siteUrl ? profile.siteUrl.replace(/\/$/, '') + '/' : undefined;
  return buildVCard(profile, { url, photoBase64 });
}

export const headTags = () => renderHeadTags(profile);
export { profile };
