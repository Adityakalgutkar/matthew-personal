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
  // Hero line. Written for the site, not a quotation from Matthew.
  heroIntroduction:
    'Since 1997, working to give children in Goa a safe home, an education and the chance of a real childhood.',

  // "A little about Matthew". Facts from El Shaddai's published
  // Board of Trustees page (childrescue.net).
  introduction: [
    'Matthew Kurian came to Goa from Kerala in 1993 to work alongside people recovering from addiction. In 1997 he met Anita Edgar, who was visiting from Devon, and together they set up El Shaddai Charitable Trust.',
    'What began as a shared conviction, that every child deserves a safe and fulfilling childhood, has grown into decades of care, education and support for vulnerable children, their families and their communities.',
  ],

  // Organisation section
  organisationSummary:
    'Together with its team and supporters, El Shaddai Charitable Trust provides care, education and opportunities for children and communities facing difficult circumstances.',
  organisationVision: 'A childhood for children who have never had one.',
  organisationFocus: [
    { title: 'Safe homes', text: 'Residential care and protection for children at risk.' },
    { title: 'Education', text: 'Schooling and learning that open real opportunities.' },
    { title: 'Women & families', text: 'Support for mothers and families in hardship.' },
    { title: 'Children’s rights', text: 'Advocacy for children from the streets and slums.' },
  ],

  // ── Contact (verified values only — null hides the row) ─────
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
  // The permanent public address of this site, without a trailing
  // slash, e.g. 'https://matthewkurian.com'. Used for Share, Open
  // Graph and the contact card. Falls back to the current address.
  siteUrl: null,

  // Portrait (supplied photograph, cropped 4:5 around Matthew).
  // public/matthew-kurian-card.jpg is a small copy embedded in the
  // contact card. A monogram shows if the image ever fails to load.
  profileImage: '/matthew-kurian.jpg',
  profileImageCard: '/matthew-kurian-card.jpg',
  profileImageFallback: null,
  profileImageAlt: 'Portrait of Matthew Kurian',
  // Vertical focus of the crop (0% top … 100% bottom). Nudge if the face sits high or low.
  profileImageFocus: '22%',

  vcardFileName: 'matthew-kurian.vcf',
};

export function titleLine(p = profile) {
  const t = p.showSecondaryTitle && p.secondaryTitle ? `${p.designation} & ${p.secondaryTitle}` : p.designation;
  return t;
}
