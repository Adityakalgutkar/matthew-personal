/** Builds the <head> metadata from the profile. Used at build time. */
import { titleLine } from '../data/profile.js';

const attr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

export function renderHeadTags(p) {
  const title = (p.meta && p.meta.title) || `${p.fullName} — ${titleLine(p)}, ${p.organisation}`;
  const description = (p.meta && p.meta.description) || `${p.fullName}, ${titleLine(p)} of ${p.organisation}, ${p.location}. ${p.heroIntroduction}`;
  const base = p.siteUrl ? p.siteUrl.replace(/\/$/, '') : '';
  const pageUrl = base + (p.viewPath && p.viewPath !== '/' ? p.viewPath : '/');
  const image = base && p.ogImage ? `${base}${p.ogImage}` : '';

  const tags = [
    `<title>${attr(title)}</title>`,
    `<meta name="description" content="${attr(description)}" />`,
    `<meta name="author" content="${attr(p.fullName)}" />`,
    `<meta property="og:type" content="profile" />`,
    `<meta property="og:title" content="${attr(p.fullName)}" />`,
    `<meta property="og:description" content="${attr(`${titleLine(p)}, ${p.organisation} · ${p.location}`)}" />`,
    `<meta property="profile:first_name" content="${attr(p.firstName)}" />`,
    `<meta property="profile:last_name" content="${attr(p.lastName)}" />`,
    `<meta name="twitter:card" content="${image ? 'summary_large_image' : 'summary'}" />`,
    `<meta name="twitter:title" content="${attr(p.fullName)}" />`,
  ];
  if (base) {
    tags.push(`<link rel="canonical" href="${attr(pageUrl)}" />`);
    tags.push(`<meta property="og:url" content="${attr(pageUrl)}" />`);
  }
  if (image) {
    tags.push(`<meta property="og:image" content="${attr(image)}" />`);
    tags.push(`<meta property="og:image:alt" content="${attr(p.profileImageAlt)}" />`);
  }

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: p.fullName,
    jobTitle: titleLine(p),
    worksFor: p.view === 'business'
      ? { '@type': 'Organization', name: p.organisation, url: p.website }
      : { '@type': 'NGO', name: p.organisation, url: p.website, foundingDate: p.organisationFounded },
    address: { '@type': 'PostalAddress', addressRegion: p.region, addressCountry: p.country },
    ...(base ? { url: pageUrl } : {}),
    ...(image ? { image } : {}),
  };
  tags.push(`<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`);
  return tags.join('\n    ');
}
