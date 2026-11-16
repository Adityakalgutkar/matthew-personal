/**
 * Applies a view (src/data/views.js) to the profile: returns a copy of the
 * profile holding only what that view shows. Used by the page and the build.
 */
import { views } from '../data/views.js';

const visible = (item, id) => !item || typeof item !== 'object' || !item.views || item.views.includes(id);
const text = (b) => (typeof b === 'string' ? b : b.text);

function shapeChapter(c, id) {
  return {
    ...c,
    title: (c.viewTitle && c.viewTitle[id]) || c.title,
    body: (c.body || []).filter((b) => visible(b, id)).map(text),
    points: (c.points || []).filter((x) => visible(x, id)),
    media: (c.media || []).filter((x) => visible(x, id)),
  };
}

export const SECTIONS = ['about', 'work', 'gallery', 'contact'];

export function applyView(base, id) {
  const v = views[id] || views.full;
  const key = views[id] ? id : 'full';
  const h = v.hero || {};
  const byId = Object.fromEntries((base.chapters || []).map((c) => [c.id, c]));
  const chapters = (v.chapters || base.chapters.map((c) => c.id))
    .map((c) => (typeof c === 'string' ? byId[c] : c))
    .filter(Boolean)
    .map((c) => shapeChapter(c, key));
  const tabs = v.galleryTabs;
  const p = {
    ...base,
    ...(v.contact || {}),
    view: key,
    viewPath: v.path || '/',
    viewLabel: v.label || 'Personal profile',
    sections: v.sections || SECTIONS,
    designation: h.role || base.designation,
    organisation: h.organisation || base.organisation,
    organisationShort: h.organisationShort || base.organisationShort,
    location: h.location || base.location,
    heroNote: h.note || base.heroNote,
    heroIntroduction: h.intro || base.heroIntroduction,
    introduction: v.introduction || base.introduction,
    facts: v.facts || base.facts,
    focus: v.focus ? base.focus.filter((f) => v.focus.includes(f.title)) : base.focus,
    quotes: v.quotes ? Object.fromEntries(Object.entries(base.quotes || {}).filter(([k]) => v.quotes.includes(k))) : base.quotes,
    chapters,
    chaptersLabel: v.chaptersLabel || 'His life, in chapters',
    gallery: tabs ? (base.gallery || []).filter((g) => tabs.includes(g.tab)) : base.gallery,
    channels: v.channels || null,
    websiteName: (v.contact && v.contact.websiteName) || 'El Shaddai Charitable Trust',
    meta: v.meta || null,
    brand: v.brand || null,
  };
  if (v.contact && 'website' in v.contact) {
    // A business card points to the business, not the Trust.
    p.churchWebsite = null;
    p.churchYouTube = null;
  }
  return p;
}

/** Which view the visitor came in on: /business, ?view=business or #business. */
export function detectView() {
  if (typeof window === 'undefined') return 'full';
  const { pathname, search, hash } = window.location;
  const fromQuery = new URLSearchParams(search).get('view') || (hash.match(/^#(?:view=)?([\w-]+)$/) || [])[1];
  if (fromQuery && views[fromQuery]) return fromQuery;
  const seg = (pathname || '/').split('/').filter(Boolean)[0];
  return seg && views[seg] ? seg : 'full';
}
