// All data below is taken from the official LGU website, https://talibon.gov.ph
// (pages noted per section). Last reviewed: 19 October 2026.
// When the official site changes, update this file — every page reads from it.

export const OFFICIAL_SITE = 'https://talibon.gov.ph';

export const lgu = {
  name: 'Talibon',
  officialName: 'Municipality of Talibon',
  province: 'Bohol',
  region: 'Central Visayas (Region VII)',
  incomeClass: '1st class municipality',
  tagline: 'The Seafood Capital of Bohol',
  greeting: 'Dajon kamo sa atong matahum nga Talibon!',
  // talibon.gov.ph/brief-profile/
  facts: {
    population: 71272,
    populationYear: 2020,
    populationSource: 'PSA 2020 Census of Population and Housing',
    density: 507,
    landAreaSqKm: 140.46,
    urbanSqKm: 7.97,
    ruralSqKm: 132.49,
    barangays: 25,
    islandBarangays: 8,
    coastalBarangays: 9,
    inlandBarangays: 8,
    registeredBusinesses: 1409,
    cmciRank1st2ndClass: 17,
    cmciRankOverall2024: 178,
    cmciRankOverall2023: 336,
    kmFromTagbilaran: 114.8,
    kmFromCebu: 49.01,
    kmFromManila: 611.28,
  },
};

export const profile = {
  // talibon.gov.ph/brief-profile/
  summary:
    'Talibon is a first-class municipality at the northernmost tip of Bohol. Its coast takes in a large part of the Danajon Bank — the only documented double barrier reef in the Philippines — which is why the town is known as the Seafood Capital of Bohol. It is the province’s second most populous town after Ubay, and home to the late President Carlos P. Garcia.',
  boundaries: [
    { side: 'North', name: 'Camotes Sea' },
    { side: 'South', name: 'Trinidad' },
    { side: 'East', name: 'Bien Unido' },
    { side: 'West', name: 'Getafe' },
    { side: 'Southwest', name: 'Buenavista' },
  ],
  access: [
    'By road from Tagbilaran City: about 114.8 km via the western route of the Bohol Circumferential Road, 150 km via the eastern route, or about 109 km via the Loay Interior Road through Loboc and Carmen.',
    'By sea from Cebu City: direct boat trip of roughly 4 hours (36 nautical miles).',
    'Via the ports of Tubigon or Getafe (RoRo, fast craft), then about an hour or 30 minutes by road.',
    'To Southern Leyte: via Ubay to Bato, Leyte, about 3 hours by boat.',
  ],
  economy: [
    'Farming and fishing are the main industries: fish culture (bangus, shrimp, tilapia), banana, coconut, oyster, rice, seaweed, swine, cassava, corn and native chicken.',
    'A growing commercial hub for northern Bohol, with at least 1,409 registered retailers, wholesalers and traders, plus banks and financial institutions.',
    'Alturas Group has operated a mall and supermarket in town since 2003; a shipyard opened in Sitio Tabon, Brgy. San Francisco in 2024.',
    'Artisanal fish traps, hats and pottery; quarrying of silica, limestone, diorite, sand, iron ore and gravel shipped to Cebu and Iligan.',
  ],
  denseIslands: ['Nocnocan', 'Guindacpan', 'Calituban', 'Cataban'],
  urbanBarangays: ['Poblacion', 'San Jose', 'San Francisco', 'San Isidro', 'Balintawak', 'San Agustin'],
  competitiveness:
    'Ranked 17th among 1st- and 2nd-class municipalities nationwide in the DTI Cities and Municipalities Competitiveness Index (CMCI) 2024, and rose from 336th (2023) to 178th (2024) among all LGUs.',
};

// talibon.gov.ph/vission-mission-and-values/
export const visionMission = {
  vision:
    'Talibon: The Seafood Capital of Bohol, anchoring sustainable tourism, smart urban growth, and digital innovation, empowered by its marine wealth, cultural vibrance, and climate-resilient communities.',
  mission:
    'To promote inclusive economic development by sustainably managing marine resources, fostering innovation in governance, enhancing urban infrastructure, and empowering communities through education, culture, and enterprise.',
};

// talibon.gov.ph/history-of-talibon-2/ and /previous-mayor-until-present-2/
export const history = [
  { year: '1521', text: 'Members of Magellan’s expedition are said to have taken refuge in the area, an early point of contact that introduced Christianity locally.' },
  { year: '1596', text: 'Jesuit missionaries arriving in Bohol found lay missions already active in Talibon.' },
  { year: '1733', text: 'Per recent NHCP-published research (Romanillos, 2022), Talibon separated from Inabanga as its own town, with Nicolas Calagan as first elected head.' },
  { year: '1854', text: 'April 22, 1854 is the founding date recognised by existing municipal ordinance. The two accounts are still being reconciled.' },
  { year: '1942', text: 'Japanese forces occupied Talibon on April 13. Mayor Maximino Garcia and then-Senator Carlos P. Garcia joined the government-in-exile and guerrilla movement.' },
  { year: '1986', text: 'Start of the Fifth Republic era of local government, beginning with appointed officers-in-charge.' },
  { year: '2024', text: 'Ranked 17th among 1st- and 2nd-class municipalities in the DTI CMCI.' },
];

export type Mayor = { name: string; term: string; note?: string };
export const mayorEras: { era: string; mayors: Mayor[] }[] = [
  {
    era: 'Fifth Philippine Republic (1986 – present)',
    mayors: [
      { name: 'Janette A. Garcia', term: '2019 – present' },
      { name: 'Restituto B. Auxtero', term: '2010 – 2019' },
      { name: 'Juanario A. Item', term: '2004 – 2010' },
      { name: 'Marcos Q. Aurestila', term: '2001 – 2004' },
      { name: 'Juanario A. Item', term: '1995 – 2001' },
      { name: 'Gaudencio A. Artiaga', term: '1988 – 1995' },
      { name: 'Flordelis A. Garcia', term: '1988', note: 'OIC' },
      { name: 'Samuel T. Turtoga', term: '1987 – 1988', note: 'OIC' },
      { name: 'Esperanza E. Cañete', term: '1986 – 1987', note: 'OIC' },
      { name: 'Sergio E. Credo', term: '1986', note: 'OIC' },
    ],
  },
  {
    era: 'Martial Law period (1972 – 1986)',
    mayors: [
      { name: 'Aureliano Evardo', term: '1979 – 1986' },
      { name: 'Vidal V. Crescencio, Sr.', term: '1972 – 1979' },
    ],
  },
  {
    era: 'Postwar Philippines (1946 – 1972)',
    mayors: [
      { name: 'Catalino Y. Casoyla', term: '1964 – 1971' },
      { name: 'Lazaro Evardo', term: '1957 – 1963' },
      { name: 'Maximino A. Garcia, Sr.', term: '1952 – 1957' },
      { name: 'Deogracias Mumar', term: '1951', note: 'Acting' },
      { name: 'Pio Mabanag', term: '1948 – 1951', note: 'Appointed' },
    ],
  },
  {
    era: 'Japanese Occupation & transition (1942 – 1948)',
    mayors: [
      { name: 'Eulalio Revilles', term: '1946 – 1948' },
      { name: 'Frederico Aguhar', term: '1946', note: 'Acting' },
      { name: 'Luis B. Goyeneche', term: '1944', note: 'Appointed' },
      { name: 'Maximino Boiser, Sr.', term: '1942 – 1943', note: 'Died in office' },
    ],
  },
  {
    era: 'Insular Government & Commonwealth (1912 – 1946)',
    mayors: [
      { name: 'Maximino A. Garcia, Sr.', term: '1938 – 1946' },
      { name: 'Ernesto B. Flores', term: '1934 – 1937' },
      { name: 'Policronio Garcia, Sr.', term: '1925 – 1933' },
      { name: 'Rosendo Evangelista', term: '1922 – 1925' },
      { name: 'Longino Avergonzado', term: '1919 – 1922' },
      { name: 'Gregorio G. Valmoria', term: '1916 – 1919' },
      { name: 'Policronio Garcia, Sr.', term: '1912 – 1916' },
    ],
  },
  {
    era: 'Republic of Bohol & early American period (1898 – 1912)',
    mayors: ['Eufemio Mumar', 'Miguel Valmoria', 'Pedro Valmoria', 'Fortunato Boncales', 'Marcelino Avergonzado'].map(
      (name) => ({ name, term: 'Term not recorded' }),
    ),
  },
  {
    era: 'Spanish colonial regime (1733 – 1898)',
    mayors: [
      { name: 'Nicolas Calagan', term: '1733', note: 'First elected' },
      { name: 'Mateo Auxtero', term: '1854' },
      ...[
        'Francisco Auxtero', 'Feliciano Evangelista', 'Anatalio Orjaleza', 'Maximo Evangelista', 'Pablo Gurrea',
        'Maximino Mumar', 'Cipriano Tabigue', 'Santiago Evangelista', 'Gregorio Evangelista', 'Modesto Evangelista',
        'Quiterio Garcia', 'Eugenio Evangelista', 'Maximo Rosales',
      ].map((name) => ({ name, term: 'Term not recorded' })),
    ],
  },
];

// talibon.gov.ph/directory-of-departments/
export type Office = { office: string; head?: string; phone?: string; email?: string; group: string };
export const offices: Office[] = [
  { group: 'Executive', office: 'Municipal Mayor', head: 'Hon. Janette A. Garcia', phone: '0998 267 4370', email: 'mayor@talibon.gov.ph' },
  { group: 'Legislative', office: 'Municipal Vice Mayor', head: 'Hon. Dave A. Evangelista', email: 'vicemayor@talibon.gov.ph' },
  { group: 'Executive', office: 'Municipal Administrator', head: 'Manuelito A. Carosus', phone: '0910 297 7123', email: 'admin@talibon.gov.ph' },
  { group: 'Planning & Infrastructure', office: 'Municipal Planning & Development Coordinator (MPDC)', head: 'Engr. Gerry V. Araneta', phone: '0976 068 7964', email: 'mpdc@talibon.gov.ph' },
  { group: 'Planning & Infrastructure', office: 'Municipal Engineer', head: 'Engr. Lorenzo R. Flores', phone: '0929 718 8834', email: 'engineer@talibon.gov.ph' },
  { group: 'Planning & Infrastructure', office: 'Zoning Administrator', head: 'Engr. Gerry V. Araneta', email: 'zoning@talibon.gov.ph' },
  { group: 'Finance', office: 'Municipal Assessor', head: 'Engr. Ramel A. Artiaga', phone: '0917 671 3043', email: 'assessor@talibon.gov.ph' },
  { group: 'Finance', office: 'Municipal Budget Officer', head: 'Falconiris A. Lugasip', phone: '0955 895 0152', email: 'mbo@talibon.gov.ph' },
  { group: 'Finance', office: 'Municipal Accountant', head: 'Flor Jemma P. Cajes', phone: '0950 477 9626', email: 'accountant@talibon.gov.ph' },
  { group: 'Finance', office: 'Municipal Treasurer', head: 'Bernardita V. Autentico', phone: '0950 568 6550', email: 'treasurer@talibon.gov.ph' },
  { group: 'Finance', office: 'Internal Auditor (designate)', head: 'Jocelyn A. Baron', email: 'internal.auditor@talibon.gov.ph' },
  { group: 'Finance', office: 'Bids and Awards Committee (BAC)', email: 'bac@talibon.gov.ph' },
  { group: 'Finance', office: 'Business Permits & Licensing (BPLS)', head: 'Leo Denis Tubo', email: 'bpls@talibon.gov.ph' },
  { group: 'Social Services', office: 'Municipal Health Officer', head: 'Dr. Mary Jeciel D. Clemente-Dolor', phone: '0917 168 3800', email: 'mho@talibon.gov.ph' },
  { group: 'Social Services', office: 'Social Welfare & Development (MSWDO)', head: 'Ellen A. Magallanes', phone: '0906 786 0146', email: 'mswdo@talibon.gov.ph' },
  { group: 'Social Services', office: 'Municipal Civil Registrar', head: 'Celestina T. Pentacase', phone: '0999 103 8380', email: 'civilregistrar@talibon.gov.ph' },
  { group: 'Social Services', office: 'Public Employment Service Office (PESO)', head: 'Almer D. Polo', phone: '0917 119 1922', email: 'peso@talibon.gov.ph' },
  { group: 'Social Services', office: 'Population Commission Officer', email: 'popcomm@talibon.gov.ph' },
  { group: 'Economic & Environment', office: 'Municipal Agriculturist', head: 'Angelito A. Oroyan', phone: '0998 489 7501', email: 'agriculturist@talibon.gov.ph' },
  { group: 'Economic & Environment', office: 'Environment & Natural Resources (MENRO)', head: 'Cielito O. Evangelista', phone: '0951 642 4396', email: 'menro@talibon.gov.ph' },
  { group: 'Economic & Environment', office: 'Tourism Officer', head: 'Rachel P. Sayson', phone: '0999 768 6109', email: 'tourism@talibon.gov.ph' },
  { group: 'Economic & Environment', office: 'Market Supervisor', head: 'Felix D. Evangelista, Jr.', phone: '0999 598 5491', email: 'marketsupervisor@talibon.gov.ph' },
  { group: 'Economic & Environment', office: 'Talibon Integrated Transport Terminal', head: 'Engr. Ferdinand Q. Artiaga', phone: '0930 080 8313', email: 'titt@talibon.gov.ph' },
  { group: 'Administration', office: 'General Services Office (GSO)', head: 'Cielito O. Evangelista', phone: '0951 642 4396', email: 'gso@talibon.gov.ph' },
  { group: 'Administration', office: 'Human Resource Management Office', head: 'Sarah Jane R. Henson', phone: '0925 700 5005', email: 'hrmo@talibon.gov.ph' },
  { group: 'Administration', office: 'Disaster Risk Reduction & Management (MDRRMO)', head: 'Vladimir G. Avenido', phone: '0909 777 4362', email: 'drrm@talibon.gov.ph' },
  { group: 'Administration', office: 'Municipal Information Officer', head: 'Shannen Marie E. Caray', email: 'mio@talibon.gov.ph' },
  { group: 'Administration', office: 'College Administrator', head: 'Dr. Stanley Clark Dipay', email: 'collegeadmin@talibon.gov.ph' },
  { group: 'Legislative', office: 'Sangguniang Bayan Secretary', head: 'Camilo N. Garcia', email: 'sbsecretary@talibon.gov.ph' },
  { group: 'Legislative', office: 'Sangguniang Bayan Office', head: 'Blesilda T. Cullamat', email: 'sanggunian@talibon.gov.ph' },
];

// talibon.gov.ph/barangays-of-talibon/ — the official page lists 24 barangays;
// Sikatuna (the 25th per the brief profile's count) is added from PSA PSGC.
export type Barangay = { name: string; captain?: string; officialPage?: string; type?: 'Island' | 'Urban' };
const island = new Set(['Nocnocan', 'Guindacpan', 'Calituban', 'Cataban']);
const urban = new Set(profile.urbanBarangays);
const slug = (n: string) => n.toLowerCase().replace('ñ', 'n').replace(/\s+/g, '-');
export const barangays: Barangay[] = [
  'Bagacay', 'Balintawak', 'Burgos', 'Busalian', 'Calituban', 'Cataban', 'Guindacpan', 'Magsaysay', 'Mahanay',
  'Nocnocan', 'Poblacion', 'Rizal', 'Sag', 'San Agustin', 'San Carlos', 'San Francisco', 'San Isidro', 'San Jose',
  'San Pedro', 'San Roque', 'Santo Niño', 'Sikatuna', 'Suba', 'Tanghaligue', 'Zamora',
].map((name) => ({
  name,
  captain: name === 'Bagacay' ? 'Dennis Sabiar' : undefined,
  officialPage:
    name === 'Sikatuna'
      ? undefined
      : `${OFFICIAL_SITE}/barangay-${name === 'Bagacay' ? 'bacagay' : slug(name)}/`,
  type: island.has(name) ? 'Island' : urban.has(name) ? 'Urban' : undefined,
}));

// Footer of every talibon.gov.ph page
export const hotlines = [
  { name: 'MDRRMO (TESaRU)', numbers: ['0910 503 5390'] },
  { name: 'BFP Talibon (Fire)', numbers: ['0950 632 9025'] },
  { name: 'PNP Talibon (Police)', numbers: ['0998 598 6442'] },
  { name: 'PCG Talibon (Coast Guard)', numbers: ['0909 693 8871'] },
  { name: 'RHU Talibon (DOH)', numbers: ['0917 562 0239'] },
  { name: 'RHU Main', numbers: ['0963 347 6355'] },
  { name: 'RHU Birthing Center', numbers: ['0919 767 0072'] },
  { name: 'TARSIER (Bohol emergency)', numbers: ['117', '0949 795 5530', '0917 510 1490'] },
];

export const contact = {
  mayorsOffice: '(038) 422-2895',
  feedbackEmail: 'talibonofficial@gmail.com',
  generalEmail: 'info@talibon.gov.ph',
  facebook: 'https://www.facebook.com/TalibonOfficialPage',
};

export type LinkItem = { title: string; href: string; description?: string };

export const eServices: { provider: string; href: string; description: string; items: string[] }[] = [
  {
    provider: 'KLIK Talibon (DICT eLGU)',
    href: 'https://elgu-talibon-bohol.e.gov.ph/',
    description: 'DICT-run eLGU portal for Talibon.',
    items: ['Ordinance violation system', 'Transport franchise', 'Public market stall', 'Miscellaneous fees'],
  },
  {
    provider: 'RAMESES / Filipizen',
    href: 'https://filipizen.com/partners/bohol_talibon',
    description: 'Online billing and payment partner.',
    items: [
      'Business online billing & payment',
      'New and renewal business applications',
      'Real property tax online billing & payment',
      'Online payment order',
    ],
  },
  {
    provider: 'MultiSys e-Services',
    href: 'https://talibon-bohol.ph/',
    description: 'Citizen e-services portal linked from the official site.',
    items: ['Government services directory'],
  },
];

export const documentServices: LinkItem[] = [
  { title: 'Cedula (Community Tax Certificate)', href: `${OFFICIAL_SITE}/cedula-ctc/` },
  { title: 'Local Civil Registry requests', href: `${OFFICIAL_SITE}/document-request-system/` },
  { title: 'Document Request System', href: `${OFFICIAL_SITE}/document-request-system-2/` },
];

export const forms: LinkItem[] = [
  { title: 'Business Permit Application', href: `${OFFICIAL_SITE}/business-permit-and-licensing-system/` },
  { title: 'Building Permit Application', href: `${OFFICIAL_SITE}/building-permit-application-form/` },
  { title: 'Zoning Certification / Clearance', href: `${OFFICIAL_SITE}/zoning-certifications-clearance/` },
  { title: 'All downloadable forms', href: `${OFFICIAL_SITE}/downloadable-forms/` },
];

export const transparency: { section: string; links: LinkItem[] }[] = [
  {
    section: 'Budget & finance',
    links: [
      { title: 'Budget and Finances', href: `${OFFICIAL_SITE}/budget-and-finances/`, description: 'Annual budget and financial statements' },
      { title: 'Finance & Frontline Services Reports', href: `${OFFICIAL_SITE}/finance-and-frontline-services-reports-2/` },
      { title: 'Full Disclosure Policy', href: `${OFFICIAL_SITE}/full-disclosure-policy-2/`, description: 'DILG-mandated FDP postings' },
      { title: 'Bayanihan Grant', href: `${OFFICIAL_SITE}/bayanihan-grant-3/` },
      { title: 'Social Return on Investment', href: `${OFFICIAL_SITE}/social-return-on-investment-2/` },
    ],
  },
  {
    section: 'Projects & procurement',
    links: [
      { title: 'Infrastructure Projects', href: `${OFFICIAL_SITE}/infrastructure-projects-3/` },
      { title: 'Invitation to Bid', href: `${OFFICIAL_SITE}/invitation-to-bid/` },
      { title: 'Request for Quotation', href: `${OFFICIAL_SITE}/request-for-quotation-3/` },
      { title: 'Notice of Award', href: `${OFFICIAL_SITE}/notice-of-award-3/` },
      { title: 'Notice to Proceed', href: `${OFFICIAL_SITE}/notice-to-proceed-3/` },
      { title: 'Contract Agreements', href: `${OFFICIAL_SITE}/contract-agreement-2/` },
      { title: 'Purchase Orders', href: `${OFFICIAL_SITE}/purchase-order-3/` },
      { title: 'Bid Supplements', href: `${OFFICIAL_SITE}/bid-supplements-3/` },
      { title: 'Procurement Monitoring Report', href: `${OFFICIAL_SITE}/procurement-monitoring-report-3/` },
    ],
  },
  {
    section: 'Laws & issuances',
    links: [
      { title: 'Enacted Ordinances', href: `${OFFICIAL_SITE}/enacted-ordinances/` },
      { title: 'Ordinances', href: `${OFFICIAL_SITE}/ordinances-2/` },
      { title: 'Resolutions', href: `${OFFICIAL_SITE}/resolutions-2/` },
      { title: 'Executive Orders', href: `${OFFICIAL_SITE}/executive-orders-2/` },
      { title: 'Citizen’s Charter', href: `${OFFICIAL_SITE}/citizen-charter/` },
    ],
  },
  {
    section: 'External records',
    links: [
      { title: 'COA Annual Audit Reports', href: 'https://www.coa.gov.ph/reports/annual-audit-reports/', description: 'Search for “Talibon” under LGUs – Region VII' },
      { title: 'DBM Transparency', href: 'https://www.dbm.gov.ph/', description: 'National budget releases to LGUs' },
      { title: 'Freedom of Information (FOI)', href: 'https://www.foi.gov.ph/' },
    ],
  },
];

export const tourism: { category: string; items: LinkItem[] }[] = [
  {
    category: 'Places to visit',
    items: [
      { title: 'Talibon Cathedral', href: `${OFFICIAL_SITE}/talibon-cathedral/`, description: 'The Cathedral of the Most Holy Trinity, seat of the Diocese of Talibon.' },
      { title: 'Bongan Sandbar', href: `${OFFICIAL_SITE}/bongan-sandbar-2/`, description: 'One of the town’s featured coastal spots.' },
    ],
  },
  {
    category: 'Festivals & events',
    items: [
      { title: 'Abundayan Festival', href: `${OFFICIAL_SITE}/abundayan-festival/` },
      { title: 'Foundation Day & Town Fiesta', href: `${OFFICIAL_SITE}/foundation-day-and-town-fiesta/` },
      { title: 'Talibon Strings of Fiesta', href: `${OFFICIAL_SITE}/talibon-strings-of-fiesta/` },
    ],
  },
  {
    category: 'Local products',
    items: [
      { title: 'Tatak Talibon Products', href: `${OFFICIAL_SITE}/tatak-talibon-products-local-delicacies-and-items/`, description: 'Local delicacies and handmade items.' },
    ],
  },
];
