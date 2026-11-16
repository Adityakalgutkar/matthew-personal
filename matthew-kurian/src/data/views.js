/**
 * ─────────────────────────────────────────────────────────────
 *  VIEWS — one site, four QR codes
 * ─────────────────────────────────────────────────────────────
 *  Each view is the same site showing only what fits that card:
 *
 *    /              full        everything (personal profile)
 *    /el-shaddai    el-shaddai  El Shaddai Charitable Trust only
 *    /goa-marathon  goa-marathon  the Goa Marathon and El Shaddai
 *    /business      business    Style BU only
 *
 *  Anything a view leaves out comes from profile.js unchanged.
 *  Inside profile.js, a paragraph, milestone or photo can carry
 *  `views: ['full']` to appear only in the listed views.
 *
 *  Keys a view can set:
 *    path, label        URL path and the small label above the name
 *    sections           which sections appear, in order
 *    hero               role / organisation / organisationShort / note / intro
 *    introduction, facts, focus (titles to keep), quotes (keys to keep)
 *    chapters           chapter ids to keep, or full chapter objects
 *    chaptersLabel      heading above the chapters
 *    galleryTabs        gallery tab ids to keep
 *    channels           contact rows to keep (keys from lib/channels.js)
 *    contact            fields that change the saved contact card
 *    meta               page title and description for search and link previews
 *
 *  Plain JavaScript, no imports, so the build script can read it.
 */

export const views = {
  full: {
    path: '/',
    label: 'Personal profile',
  },

  'el-shaddai': {
    path: '/el-shaddai',
    label: 'El Shaddai Charitable Trust',
    brand: {
      name: 'El Shaddai',
      sub: 'Charitable Trust · Goa · since 1997',
      logo: null, // put the official logo in public/logos/ and set e.g. '/logos/el-shaddai.png'
      photos: [
        { src: '/life/el-shaddai-school-bags-2026.jpg', w: 1400, h: 1050, alt: 'Children holding up new school bags at an El Shaddai centre', caption: 'New school bags for the children, June 2026.' },
        { src: '/life/el-shaddai-centre-2025.jpg', w: 1400, h: 788, alt: 'Children seated on the floor of a large covered hall at an El Shaddai centre', caption: 'At an El Shaddai centre, August 2025.' },
        { src: '/life/el-shaddai-colouring-2026.jpg', w: 1050, h: 1400, alt: 'A smiling boy in a red T-shirt colouring a Holi activity sheet', caption: 'Colouring at a community class, July 2026.' },
      ],
    },
    sections: ['about', 'work', 'gallery', 'contact'],
    hero: {
      intro: 'Building opportunities for children and communities to create brighter futures.',
      note: 'Working with children in Goa since 1997.',
    },
    introduction: [
      'In 1997 Matthew Kurian and Anita Edgar founded El Shaddai Charitable Trust around a shared vision: giving vulnerable children the chance of a safe and fulfilling childhood.',
      'As its Founder and Managing Trustee, Matthew has seen that vision grow from a single home in Goa into homes, schools and community programmes across four Indian states, supported by partner charities in the United Kingdom and Germany.',
    ],
    facts: [
      { label: 'Founded', value: 'El Shaddai Charitable Trust, 1997' },
      { label: 'First home', value: 'Victory House, Chapora, 1997' },
      { label: 'Based in', value: 'Goa, since 1993' },
    ],
    focus: ['Child welfare', 'Education'],
    quotes: ['said'],
    chapters: ['leadership-ministry', 'community', 'achievements'],
    chaptersLabel: 'His work with El Shaddai',
    galleryTabs: ['el-shaddai', 'recognition', 'videos'],
    channels: ['whatsapp', 'phone', 'email', 'linkedin', 'website', 'org-phone', 'org-email'],
    meta: {
      title: 'Matthew Kurian — Founder, El Shaddai Charitable Trust',
      description: 'Matthew Kurian, Founder of El Shaddai Charitable Trust, Goa: homes, schools and community programmes for vulnerable children since 1997.',
    },
  },

  'goa-marathon': {
    path: '/goa-marathon',
    label: 'Goa Marathon',
    brand: {
      name: 'Goa Marathon',
      sub: 'A run for a cause · organised by El Shaddai',
      logo: null, // e.g. '/logos/goa-marathon.png'
      photos: [
        { src: '/life/marathon-2025-runner.jpg', w: 1400, h: 933, alt: 'A runner giving two thumbs up during the night race', caption: 'Goa Marathon, 9 February 2025.' },
        { src: '/life/marathon-2025-runners.jpg', w: 1400, h: 933, alt: 'Two runners on a lit city road; one wears a Run for Hope race T-shirt', caption: 'Runners in the Goa Marathon, 9 February 2025.' },
        { src: '/life/marathon-2025-night.jpg', w: 1400, h: 933, alt: 'A runner in a green club vest on the early-morning course', caption: 'On the course before dawn, 9 February 2025.' },
      ],
    },
    hero: {
      note: 'El Shaddai organises the Goa Marathon, a run for a cause.',
      intro: 'Every runner in the Goa Marathon helps raise funds for El Shaddai’s work with children in need.',
    },
    introduction: [
      'The Goa Marathon is El Shaddai Charitable Trust’s annual run, held to promote fitness and to raise funds for the Trust’s programmes for children.',
      'As El Shaddai’s Founder, Matthew Kurian flagged off the 2025 race at Miramar on 9 February 2025.',
    ],
    facts: [
      { label: 'Organised by', value: 'El Shaddai Charitable Trust' },
      { label: 'Races', value: 'Full Marathon, Half Marathon, 10K Run, 5K Dream Run' },
      { label: 'Details', value: 'goamarathon.org' },
    ],
    focus: [],
    quotes: [],
    chapters: [
      {
        id: 'goa-marathon',
        title: 'Goa Marathon',
        period: 'A run for a cause',
        body: [
          'Runners choose from four races, from the Full Marathon to the 5K Dream Run, and register online through the Goa Marathon website. Funds raised support El Shaddai’s programmes for children in Goa.',
        ],
        points: [
          { when: '2020', what: 'Goa Marathon 2020, held on 2 February' },
          { when: '2025', what: 'Matthew flags off the race at Miramar, 9 February' },
        ],
        media: [
          { src: '/life/marathon-2025-runners.jpg', w: 1400, h: 933, alt: 'Two runners on a lit city road; one wears a Run for Hope race T-shirt', caption: 'Runners in the Goa Marathon, 9 February 2025.' },
          { src: '/life/goa-marathon-2020.jpg', w: 1280, h: 960, alt: 'Matthew Kurian seated at a press table in front of a Goa Marathon 2020 banner', caption: 'At a press conference for the Goa Marathon 2020.' },
        ],
      },
      'achievements',
    ],
    chaptersLabel: 'The Goa Marathon',
    sections: ['about', 'work', 'gallery', 'contact'],
    galleryTabs: ['marathon'],
    channels: ['marathon', 'whatsapp', 'phone', 'email', 'linkedin', 'website', 'org-phone', 'org-email'],
    meta: {
      title: 'Matthew Kurian — Goa Marathon, El Shaddai Charitable Trust',
      description: 'The Goa Marathon is El Shaddai Charitable Trust’s annual run for a cause, raising funds for children in Goa. Matthew Kurian is El Shaddai’s Founder.',
    },
  },

  business: {
    path: '/business',
    label: 'Business',
    brand: {
      name: 'Style BU',
      sub: 'Be Unique · bespoke clothing · Mapusa, Goa',
      logo: null, // e.g. '/logos/style-bu.png'
      photos: [], // add Style BU photos (store, garments, fashion shows) here
    },
    sections: ['about', 'contact'],
    hero: {
      role: 'Founder',
      organisation: 'Style BU',
      organisationShort: 'Style BU',
      location: 'Mapusa, Goa',
      note: 'Bespoke clothing, Mapusa, Goa.',
      intro: 'Made-to-measure clothing for everyday wear and weddings. Style BU stands for “Be Unique”.',
    },
    introduction: [
      'Matthew Kurian founded Style BU out of a love of fashion and frustration with ill-fitting ready-made clothes. What began as a tailoring store in Calangute is now a bespoke label in Mapusa, making made-to-measure clothing for everyday wear and weddings.',
      'Its clients have ranged from film stars to five-star hotels ordering uniforms. By 2022 Style BU had employed around 50 people over roughly a decade and staged two fashion shows, and Matthew spoke of building a fashion industry in Goa that develops young designers and models.',
    ],
    facts: [
      { label: 'Founded', value: 'Style BU' },
      { label: 'Name', value: 'BU, short for “Be Unique”' },
      { label: 'Based in', value: 'Mapusa, Goa' },
      { label: 'Makes', value: 'Bespoke clothing, wedding wear and uniforms' },
    ],
    focus: [],
    quotes: ['own'],
    chapters: [],
    channels: ['whatsapp', 'phone', 'email', 'linkedin', 'website'],
    contact: {
      website: 'https://stylebu.in/',
      websiteLabel: 'stylebu.in',
      websiteName: 'Style BU',
      facebook: null,
      vcardFileName: 'matthew-kurian-business.vcf',
    },
    meta: {
      title: 'Matthew Kurian — Founder, Style BU',
      description: 'Matthew Kurian, Founder of Style BU, Mapusa, Goa: bespoke, made-to-measure clothing for everyday wear, weddings and uniforms.',
    },
  },
};

export const viewIds = Object.keys(views);
