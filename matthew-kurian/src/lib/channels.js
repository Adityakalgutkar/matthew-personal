/** Contact channels built only from verified (non-null) profile values. */
const tel = (s) => `tel:${String(s).replace(/[^\d+]/g, '')}`;
const wa = (s) => `https://wa.me/${String(s).replace(/\D/g, '')}`;

export function personalChannels(p) {
  const rows = [];
  if (p.whatsapp) rows.push({ key: 'whatsapp', icon: 'chat', label: 'WhatsApp', value: 'Send a message', href: wa(p.whatsapp), external: true });
  if (p.phone) rows.push({ key: 'phone', icon: 'phone', label: 'Phone', value: p.phone, href: tel(p.phone) });
  if (p.email) rows.push({ key: 'email', icon: 'mail', label: 'Email', value: p.email, href: `mailto:${p.email.trim()}` });
  if (p.linkedin) rows.push({ key: 'linkedin', icon: 'profile', label: 'LinkedIn', value: 'View profile', href: p.linkedin, external: true });
  if (p.facebook) rows.push({ key: 'facebook', icon: 'profile', label: 'Facebook', value: 'View profile', href: p.facebook, external: true });
  return rows;
}

export function organisationChannels(p) {
  const rows = [];
  if (p.website) rows.push({ key: 'website', icon: 'globe', label: 'El Shaddai Charitable Trust', value: p.websiteLabel, href: p.website, external: true });
  if (p.churchWebsite) rows.push({ key: 'church', icon: 'globe', label: 'Faith Community Church', value: p.churchWebsiteLabel, href: p.churchWebsite, external: true });
  if (p.churchYouTube) rows.push({ key: 'church-yt', icon: 'globe', label: 'Sunday services and sermons', value: 'Watch on YouTube', href: p.churchYouTube, external: true });
  if (p.organisationPhone) rows.push({ key: 'org-phone', icon: 'phone', label: 'El Shaddai office', value: p.organisationPhone, href: tel(p.organisationPhone) });
  if (p.organisationEmail) rows.push({ key: 'org-email', icon: 'mail', label: 'El Shaddai office', value: p.organisationEmail, href: `mailto:${p.organisationEmail.trim()}` });
  return rows;
}

/** "Get in touch": the most direct personal channel, otherwise the contact section. */
export function getInTouchTarget(p) {
  if (p.whatsapp) return { href: wa(p.whatsapp), external: true };
  if (p.email) return { href: `mailto:${p.email.trim()}` };
  if (p.phone) return { href: tel(p.phone) };
  return { href: '#contact' };
}
