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
    'Matthew Kurian is a social worker, pastor and entrepreneur who has made Goa his home since 1993. He has spent more than three decades working alongside people on the margins, first with men recovering from addiction, then with children and families in the state’s poorest communities.',
    'In 1997 he and Anita Edgar founded El Shaddai Charitable Trust around a shared vision: giving vulnerable children the chance of a safe and fulfilling childhood. As its Co-Founder and Managing Trustee, he has seen that vision grow into homes, schools and community programmes across four Indian states. Alongside it, he serves as a pastor in Mapusa and is the founder of Style BU, a bespoke clothing label.',
  ],
  facts: [
    { label: 'From', value: 'Kerala' },
    { label: 'Based in', value: 'Goa, since 1993' },
    { label: 'Studied', value: 'Hotel management' },
    { label: 'Co-founded', value: 'El Shaddai Charitable Trust, 1997' },
    { label: 'Founded', value: 'Style BU, Mapusa' },
    { label: 'Pastor', value: 'Faith Community Church, Mapusa' },
  ],

  // Areas of focus, drawn from the chapters below (no new claims).
  focus: [
    { title: 'Child welfare', text: 'Rescue, care and homes for children living on the streets and in slums.' },
    { title: 'Education', text: 'Schooling for children outside the system, including non-formal education.' },
    { title: 'Addiction recovery', text: 'His first work in Goa, with people recovering from drugs and alcohol.' },
    { title: 'Ministry', text: 'Pastoral care, prayer meetings and a football ministry for young people.' },
    { title: 'Enterprise', text: 'Bespoke fashion and hospitality businesses in Goa.' },
  ],

  // Quotations, each from a named public source (see CONTENT-SOURCES.md).
  // own: Matthew's own words, from his LinkedIn profile.
  // said: a public LinkedIn recommendation from a colleague.
  quotes: {
    own: { text: 'I am passionate in developing people. Helping people to come to their full potential in life.', source: 'Matthew Kurian, on LinkedIn' },
    said: { text: 'He’s firmly rooted in his core reason for starting El Shaddai – the street children. He truly cares for them and it shows.', source: 'Gasper D’Souza, colleague, on LinkedIn' },
  },
  // ── His life, in chapters ──────────────────────────────────
  // Every statement below comes from a published source (listed in
  // CONTENT-SOURCES.md). Nothing is invented. Items Matthew still needs
  // to confirm are listed in that file too.
  //
  //  body    paragraphs of story text
  //  points  short dated milestones shown beside the story
  //  ledger  'recognition' or 'ventures' shows that list in the chapter
  //  media   photos and videos (files in public/life). Captions state only
  //          what is known from the file or its date.
  //  private optional paragraph that is NOT shown unless `show` is true.
  //          Only switch it on once Matthew has said he wants it public.
  chapters: [
    {
      id: 'early-life',
      title: 'Early life & childhood',
      period: 'Kerala',
      body: [
        'Matthew grew up in Kerala, in a Catholic family. When a cousin went on to become a Franciscan priest, the young Matthew began to wonder whether the same calling might be meant for him.',
      ],
    },
    {
      id: 'education',
      title: 'Education',
      period: 'Kerala',
      body: [
        'After high school he followed that question into the seminary. It turned out not to be his path, and he left.',
        'His formal studies came a little later. In his early twenties he went back to college and completed a degree in hotel management, a training he would return to years later in business.',
      ],
      points: [
        { when: 'After school', what: 'Enters the seminary, then leaves' },
        { when: 'Early 20s', what: 'Graduates in hotel management' },
      ],
    },
    {
      id: 'personal-journey',
      title: 'Personal journey',
      period: 'The turning points',
      body: [
        'Leaving the seminary began a long season of questioning. Matthew drifted away from the church, and for a time called himself an atheist, convinced that religion was too often used to control people.',
        'At around 22, a charismatic prayer meeting led by the Goan priest Fr. Jeno Rodrigues changed that. He came away with his faith in God restored, a faith he has lived out ever since, though outside the church he grew up in.',
        'In 1993 that renewed sense of purpose took him from Kerala to Goa, with one clear aim: to work with people whose lives had been taken over by drugs and alcohol.',
      ],
      points: [
        { when: 'Around 22', what: 'Faith renewed' },
        { when: '1993', what: 'Moves from Kerala to Goa' },
      ],
      private: {
        show: false,
        text: 'Matthew has spoken openly about his own struggle with drug addiction, which lasted more than eight years. At around 22 he left that life behind, returned to college and found his faith again, an experience that later drew him to stand alongside others facing addiction.',
      },
    },
    {
      id: 'professional-journey',
      title: 'Professional journey',
      period: '1993 onwards',
      body: [
        'Matthew’s first work in Goa was in addiction recovery, at a time when few organisations in the state worked in the field. He worked with IPHB, then in Altinho and now at Bambolim beside Goa Medical College, with Kripa’s alcohol centre for men, and at a de-addiction centre in Mapusa run under Asilo Hospital.',
        'Alongside his life’s work with El Shaddai, he has built businesses of his own, and has been described as a serial entrepreneur. A love of fashion, and frustration with ill-fitting ready-made wear, led him to open a bespoke tailoring store, first in Calangute and then in Mapusa. It became Style BU, short for “Be Unique”: made-to-measure clothing for everyday wear and weddings, with clients ranging from film stars to five-star hotels ordering uniforms. By 2022 it had employed around 50 people over roughly a decade and staged two fashion shows, and Matthew spoke of building a fashion industry in Goa that develops young designers and models.',
        'He has also put his hotel management training to use. Company records list him as a director of three hospitality companies in Goa.',
      ],
      ledger: 'ventures',
    },
    {
      id: 'leadership-ministry',
      title: 'Leadership & ministry',
      period: '1997 onwards',
      body: [
        'As Co-Founder and Managing Trustee, Matthew has helped steer El Shaddai from a single small home in Goa to work across Kerala, Karnataka and Tamil Nadu, supported by partner offices that opened in the United Kingdom in 2009 and Germany in 2010. He has travelled across India and overseas to speak for child welfare, and has championed non-formal education as a way to reach children that ordinary schooling leaves behind.',
        'In 1999 he and Anita also set up El Shaddai Charitable Trust in the United Kingdom, a registered charity created solely to support the work in Goa.',
        'He is also a pastor. Known to many simply as Pastor Matthew, he is listed first among the pastors of Faith Community Church in Mapusa and has led the church’s Sunday prayer meetings in Calangute. Working with the UK charity Coaching For Christ, he helped train local coaches so the church could run a football ministry for children in the area. One young man who grew up in El Shaddai’s care, from kindergarten to Class 10, has described Pastor Matthew and Anita as the parents he looked up to.',
      ],
      points: [
        { when: '1999', what: 'El Shaddai UK registered as a charity in England' },
        { when: '2009', what: 'El Shaddai UK office opens' },
        { when: '2010', what: 'El Shaddai Germany founded' },
        { when: '2025', what: 'Flags off El Shaddai’s Goa Marathon at Miramar' },
      ],
      media: [
        { src: '/life/ps-matthew-2010.jpg', w: 735, h: 404, alt: 'Matthew Kurian receiving flowers from a child on stage', caption: 'Pastor Matthew at an event, April 2010.' },
        { src: '/life/with-children.jpg', w: 1200, h: 799, alt: 'Matthew Kurian with a group of smiling girls', caption: 'Pastor Matthew with children.' },
        { src: '/life/matthew-anita-2012.jpg', w: 1400, h: 935, alt: 'Matthew Kurian and Anita Edgar', caption: 'With El Shaddai co-founder Anita Edgar, May 2012.' },
      ],
    },
    {
      id: 'community',
      title: 'Community & social contributions',
      period: 'From the 1990s',
      body: [
        'Matthew’s work with children began among the Lamani community, migrant families from Karnataka living in the slums of Karaswada and Sinquerim. He came to know the families, later visited their home villages in Karnataka, ran health camps, taught hygiene, clean water, prenatal care and the value of schooling, and went to government offices on their behalf for the basics they lacked.',
        'Believing lasting change would come through the children, he started a small school with the community’s help, teaching reading and numbers. In 1997, with Anita Edgar, he set up El Shaddai Charitable Trust and its first children’s home, Victory House in Chapora, rescuing 15 children that year. Four more homes had opened in Goa by 2002, and in 2003 the first community project opened in Panjim, offering a safe place, meals, education and skills training. Day and night shelters followed, along with the Manna Meals on Wheels feeding programme in Mapusa, Margao and Vasco, and support for women.',
      ],
      points: [
        { when: '1997', what: 'Victory House, the first home, opens in Chapora' },
        { when: '1999', what: 'Shanti Niketan, the first school, opens in Saligao with over 100 children' },
        { when: 'Today', what: 'Over 70,000 children educated, according to El Shaddai' },
      ],
      media: [
        { src: '/life/agape-home-2009.jpg', w: 1400, h: 1050, alt: 'Four men outside the Agape Children’s Home', caption: 'Agape Children’s Home in Mundgod, Uttar Kannada, run by El Shaddai. February 2009.' },
        { src: '/life/children-2010.jpg', w: 1400, h: 1050, alt: 'A large group of children outside a home', caption: 'Children in El Shaddai’s care, June 2010.' },
        { src: '/life/shanti-niketan-2012.jpg', w: 1400, h: 1050, alt: 'An award being presented on stage at Shanti Niketan', caption: 'At Shanti Niketan Non-Formal School, March 2012. Chief guest Mr Sanjeev Gadkar presents the winners’ group award, with Matthew Kurian.' },
        { type: 'video', src: '/life/matthew-2020.mp4', poster: '/life/video-2020-poster.jpg', w: 1280, h: 720, alt: 'Video of Matthew Kurian with children', caption: 'With children in El Shaddai’s care, October 2020. 1 minute.' },
      ],
    },
    {
      id: 'achievements',
      title: 'Achievements & milestones',
      period: 'Recognition',
      body: [
        'Matthew’s work has been recognised nationally and in his home state of Kerala. Under his leadership El Shaddai marked 25 years in 2022, and has itself received the Giving Economy Changemakers Award (2022) and the IIHM award for Outstanding Contribution to the Development of Education in India (2023).',
      ],
      ledger: 'recognition',
      media: [
        { src: '/life/award-2012.jpg', w: 1024, h: 683, alt: 'Matthew Kurian on stage holding an award trophy and certificate', caption: 'Receiving an award, April 2012.' },
      ],
    },
    {
      id: 'present-day',
      title: 'Present day',
      period: 'Today',
      body: [
        'Nearly three decades after founding El Shaddai, Matthew remains its Co-Founder and Managing Trustee, working from the Trust’s base in Assagao, North Goa. He continues to serve as a pastor at Faith Community Church in Mapusa, runs Style BU, and is a director of hospitality businesses in Goa.',
        'Goa, the place he came to in 1993 to help others rebuild their lives, has been his home ever since.',
      ],
      media: [
        { type: 'video', src: '/life/matthew-2026.mp4', poster: '/life/video-2026-poster.jpg', w: 1280, h: 720, alt: 'Video of Matthew Kurian speaking with children', caption: 'Matthew in his own words, with children in El Shaddai’s care, 2026. 5 minutes.' },
        { src: '/life/matthew-anita-today.jpg', w: 1084, h: 1400, alt: 'Matthew Kurian and Anita Edgar today', caption: 'With Anita Edgar.' },
      ],
    },
  ],
  recognition: [
    { year: '2008', title: 'National Award for Child Welfare', by: 'Government of India, presented in New Delhi' },
    { year: '2012', title: 'Excellence Award for National Social Activity', by: 'Global Achievers Foundation' },
    { year: '2023', title: 'Deepika Maanava Shresta Award', by: 'Deepika, Kerala' },
  ],

  // Other ventures. Source: Ministry of Corporate Affairs director record,
  // DIN 02209241 (the same DIN is a director of El Shaddai's foundations).
  // Names shown without "Private Limited". Confirm with Matthew which
  // ones he wants listed, and their trading names, before publishing.
  ventures: [
    { name: 'Style BU', role: 'Founder', since: '', note: 'Bespoke clothing, Mapusa' },
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
