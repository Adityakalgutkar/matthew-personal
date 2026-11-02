/**
 * ─────────────────────────────────────────────────────────────
 *  MATTHEW KURIAN — central profile configuration
 * ─────────────────────────────────────────────────────────────
 *  Every personal detail on the site, in the vCard and in the
 *  page metadata comes from this file. Edit here only.
 *
 *  RULE: leave a value as null until it has been verified with
 *  Matthew. Null contact fields are simply not shown and are
 *  never written into the saved contact card.
 *
 *  This file is plain JavaScript (no imports) so the build
 *  script can read it too.
 */

export const profile = {
  // ── Identity ────────────────────────────────────────────────
  firstName: 'Matthew',
  lastName: 'Kurian',
  fullName: 'Matthew Kurian',
  monogram: 'MK',

  // Published by El Shaddai as "Co-founder and Managing Trustee".
  // "Co-Founder" is shown by default. Set showSecondaryTitle to true
  // once Matthew confirms he would like "Managing Trustee" shown too.
  designation: 'Co-Founder',
  secondaryTitle: 'Managing Trustee',
  showSecondaryTitle: false,

  organisation: 'El Shaddai Charitable Trust',
  organisationShort: 'El Shaddai',
  organisationFounded: '1997',
  location: 'Goa, India',
  region: 'Goa',
  country: 'India',

  // ── Words ───────────────────────────────────────────────────
  // Written for the site; none of these are quotations from Matthew.
  heroIntroduction:
    'Building opportunities for children and communities to create brighter futures.',
  heroNote: 'Working with children in Goa since 1997.',

  // About. Facts from El Shaddai's published Board of Trustees page.
  introduction: [
    'Matthew Kurian is the Co-Founder of El Shaddai Charitable Trust, an organisation he founded with Anita Edgar around a shared vision: giving vulnerable children the chance of a safe and fulfilling childhood.',
    'Over the years, that vision has grown into a wider effort supporting children, families and communities through care, education and opportunity.',
  ],
  // Short chronology shown beside the introduction (all published by El Shaddai).
  milestones: [
    { year: '1993', text: 'Moves to Goa from Kerala to work with people recovering from addiction.' },
    { year: '1997', text: 'Meets Anita Edgar, visiting from Devon. Together they set up El Shaddai Charitable Trust.' },
    { year: 'Today', text: 'Co-Founder of El Shaddai, based in Goa.' },
  ],

  // Other ventures. Source: Ministry of Corporate Affairs director record,
  // DIN 02209241 (the same DIN is a director of El Shaddai's foundations).
  // Names shown without "Private Limited". Confirm with Matthew which
  // ones he wants listed, and their trading names, before publishing.
  venturesIntro:
    'A hotel management graduate, Matthew is also a director of hospitality businesses in Goa.',
  ventures: [
    { name: 'Goandream Hospitality', role: 'Director', since: '2005' },
    { name: 'Schreiber Resorts', role: 'Director', since: '2011' },
    { name: 'Abigail Resorts', role: 'Director', since: '2016' },
  ],

  // His work
  organisationSummary:
    'Founded by Matthew Kurian and Anita Edgar, El Shaddai Charitable Trust works to create safe environments, educational opportunities and brighter futures for vulnerable children and communities.',
  organisationAreas: [
    { title: 'Children’s homes and shelters', text: 'Safe, caring homes for children who need one.' },
    { title: 'Education and schools', text: 'Schooling that keeps children learning and opens doors.' },
    { title: 'Community centres', text: 'Day care and support close to where families live.' },
    { title: 'Family and community support', text: 'Help for families facing hardship, so children can stay safe.' },
    { title: 'Women’s empowerment', text: 'Shelter, skills and support for women.' },
  ],
  organisationVision: 'A childhood for children who have never had one.',

  // ── Contact (verified values only — null hides the action) ──
  phone: null,        // e.g. '+91 98xxx xxxxx'  (Matthew's own number, never the organisation line)
  whatsapp: null,     // international format, digits only, e.g. '9198xxxxxxxx'
  email: null,        // e.g. 'name@childrescue.net'
  linkedin: null,     // full URL
  website: 'https://childrescue.net/',
  websiteLabel: 'childrescue.net',

  // Optional organisation contact. Always shown labelled as an
  // organisation contact, never as Matthew's own.
  organisationPhone: null,
  organisationEmail: null,

  // ── Web ─────────────────────────────────────────────────────
  // Permanent public address, no trailing slash. Used for Share,
  // Open Graph and the contact card.
  siteUrl: 'https://matthew-kurian.vercel.app',

  // ── Portrait ────────────────────────────────────────────────
  // Tried in order; the first that loads is shown.
  //  1. The official El Shaddai team photo, saved locally. Download
  //     it from the link below into public/matthew-kurian-official.webp.
  //  2. The same official photo, loaded from childrescue.net.
  //  3. The previously supplied photo.
  profileImages: [
    '/matthew-kurian-official.webp',
    'https://childrescue.net/wp-content/uploads/2026/10/team-matthew-kurian-2026.webp',
    '/matthew-kurian.jpg',
  ],
  profileImageAlt: 'Matthew Kurian',
  // Vertical focus of the crop (0% top … 100% bottom).
  profileImageFocus: '25%',
  // 'ink': black-and-white print toned to the site palette (ink shadows,
  // parchment highlights), so any photo sits with the design. 'none': original colour.
  profileImageTone: 'ink',
  // Small copy embedded in the saved contact card, and the link-preview image.
  profileImageCard: '/matthew-kurian-card.jpg',
  ogImage: '/matthew-kurian.jpg',

  vcardFileName: 'matthew-kurian.vcf',
};

export function titleLine(p = profile) {
  return p.showSecondaryTitle && p.secondaryTitle ? `${p.designation} & ${p.secondaryTitle}` : p.designation;
}
