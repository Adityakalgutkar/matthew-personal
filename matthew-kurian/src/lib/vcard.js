/**
 * vCard 3.0 builder — read by both the browser and the build script.
 * Only fields that have a value are written. Output uses CRLF line
 * endings and folds lines at 75 octets, as RFC 2426 / 6350 require,
 * which keeps iOS Contacts and Android (Google Contacts, Samsung) happy.
 */
import { titleLine } from '../data/profile.js';

// Escape text values: backslash, comma, semicolon and newlines.
export function esc(value) {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/\r?\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;');
}

// Fold a content line to ≤75 octets (UTF-8 aware), continuation lines start with a space.
function fold(line) {
  const enc = new TextEncoder();
  if (enc.encode(line).length <= 75) return line;
  const out = [];
  let chunk = '';
  let bytes = 0;
  let limit = 75;
  for (const ch of line) {
    const b = enc.encode(ch).length;
    if (bytes + b > limit) {
      out.push(chunk);
      chunk = '';
      bytes = 0;
      limit = 74; // the leading space counts
    }
    chunk += ch;
    bytes += b;
  }
  out.push(chunk);
  return out.join('\r\n ');
}

const digits = (s) => String(s).replace(/[^\d+]/g, '');

/**
 * @param {object} p        profile
 * @param {object} [opts]
 * @param {string} [opts.url]        permanent site URL
 * @param {string} [opts.photoBase64] JPEG as base64 (no data: prefix)
 */
export function buildVCard(p, opts = {}) {
  const L = [];
  L.push('BEGIN:VCARD', 'VERSION:3.0');
  L.push(`N;CHARSET=UTF-8:${esc(p.lastName)};${esc(p.firstName)};;;`);
  L.push(`FN;CHARSET=UTF-8:${esc(p.fullName)}`);
  if (p.organisation) L.push(`ORG;CHARSET=UTF-8:${esc(p.organisation)}`);
  const title = titleLine(p);
  if (title) L.push(`TITLE;CHARSET=UTF-8:${esc(title)}`);

  if (p.phone) L.push(`TEL;TYPE=CELL,VOICE:${digits(p.phone)}`);
  if (p.email) L.push(`EMAIL;TYPE=INTERNET,PREF:${p.email.trim()}`);
  if (p.organisationPhone) {
    L.push(`item1.TEL;TYPE=WORK:${digits(p.organisationPhone)}`);
    L.push(`item1.X-ABLabel:${esc(p.organisationShort + ' office')}`);
  }
  if (p.organisationEmail) {
    L.push(`item2.EMAIL;TYPE=INTERNET,WORK:${p.organisationEmail.trim()}`);
    L.push(`item2.X-ABLabel:${esc(p.organisationShort + ' office')}`);
  }

  // Labelled URLs: iOS shows the X-ABLabel, Android shows the URL.
  if (opts.url) {
    L.push(`item3.URL:${opts.url}`);
    L.push('item3.X-ABLabel:Personal profile');
  }
  if (p.website) {
    L.push(`item4.URL;TYPE=WORK:${p.website}`);
    L.push(`item4.X-ABLabel:${esc(p.organisation)}`);
  }
  if (p.linkedin) {
    L.push(`item5.URL:${p.linkedin}`);
    L.push('item5.X-ABLabel:LinkedIn');
  }
  if (p.facebook) {
    L.push(`item6.URL:${p.facebook}`);
    L.push('item6.X-ABLabel:Facebook');
  }

  if (p.region || p.country) {
    L.push(`ADR;TYPE=WORK;CHARSET=UTF-8:;;;;${esc(p.region || '')};;${esc(p.country || '')}`);
  }
  if (opts.photoBase64) L.push(`PHOTO;ENCODING=b;TYPE=JPEG:${opts.photoBase64}`);

  L.push(`REV:${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '')}`);
  L.push('END:VCARD');
  return L.map(fold).join('\r\n') + '\r\n';
}
