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

  // About. Sources: El Shaddai Board of Trustees page (childrescue.net),
  // Incredible Goa (22 Sep 2018), El Shaddai project documents,
  // childrescue.net news post on the Deepika award, and the Ministry of
  // Corporate Affairs director record (DIN 02209241).
  introduction: [
    'Matthew Kurian has spent more than three decades working alongside people on the margins in Goa, first with men recovering from addiction, then with children and families in the state’s poorest communities.',
    'In 1997 he and Anita Edgar set up El Shaddai Charitable Trust around a shared vision: giving vulnerable children the chance of a safe and fulfilling childhood. That vision has grown into care, schooling and support for children, families and whole communities.',
  ],
  facts: [
    { label: 'From', value: 'Kerala' },
    { label: 'Based in', value: 'Goa, since 1993' },
    { label: 'Studied', value: 'Hotel management' },
    { label: 'Co-founded', value: 'El Shaddai Charitable Trust, 1997' },
  ],
  milestones: [
    { year: '1993', title: 'Arrives in Goa', text: 'Moves from Kerala to work with people recovering from addiction, at IPHB, Kripa and a de-addiction centre in Mapusa.' },
    { year: '1990s', title: 'A first school', text: 'Works with Lamani families in Goa and Karnataka and starts a small school for their children.' },
    { year: '1997', title: 'El Shaddai', text: 'Meets Anita Edgar, visiting from Devon. Together they set up El Shaddai Charitable Trust.' },
    { year: '2008', title: 'National recognition', text: 'Receives the National Award for Child Welfare from the Government of India.' },
    { year: 'Today', title: 'Still in Goa', text: 'Co-Founder of El Shaddai and a director of hospitality businesses in Goa.' },
  ],
  recognition: [
    { year: '2008', title: 'National Award for Child Welfare', by: 'Government of India' },
    { year: '2012', title: 'Excellence Award for National Social Activity', by: 'Global Achievers Foundation' },
    { year: '2023', title: 'Manava Shreshta Award', by: 'Deepika, Kerala' },
  ],

  // Other ventures. Source: Ministry of Corporate Affairs director record,
  // DIN 02209241 (the same DIN is a director of El Shaddai's foundations).
  // Names shown without "Private Limited". Confirm with Matthew which
  // ones he wants listed, and their trading names, before publishing.
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
