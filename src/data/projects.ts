export interface ScreenItem {
  src: string;
  annotation?: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProcessStep {
  title: string;
  body: string;
}

export interface Project {
  slug: string;
  counter: string;
  client: string;
  clientDisplay: string;
  year: string;
  role: string;
  domains: string[];
  nda: boolean;
  logoSrc?: string;
  cover?: string;
  overviewImage?: string;
  screens?: ScreenItem[];
  protoUrl?: string;
  protoGif?: string;
  title: string;
  tagline: string;
  overview: string;
  challenge: string;
  responsibilities: string[];
  process: ProcessStep[];
  outcomes: string;
  metrics: ProjectMetric[];
  nextSlug: string;
  nextTitle: string;
}

export const projects: Project[] = [
  {
    slug: 'liveperson',
    counter: '01',
    client: 'LivePerson',
    clientDisplay: 'LivePerson',
    year: '5+ years',
    role: 'UI/UX Designer (via MOCG)',
    domains: ['Enterprise SaaS', 'Design Systems', 'WCAG'],
    nda: false,
    logoSrc: '/LivePerson_logo.svg',
    cover: '/work/liveperson/cover.png',
    overviewImage: '/work/liveperson/01.png',
    screens: [
      { src: '/work/liveperson/01.png', annotation: 'Primary agent workspace — legacy UI redesigned for WCAG 2.0 compliance, extended with new features, and kept familiar enough to eliminate retraining overhead.' },
      { src: '/work/liveperson/wireframes.png' },
      { src: '/work/liveperson/02.png' },
      { src: '/work/liveperson/03.png' },
      { src: '/work/liveperson/04.png' },
      { src: '/work/liveperson/knowledge%20center.png' },
      { src: '/work/liveperson/knowledge%20center%20-%20dark%20-%201920.png' },
      { src: '/work/liveperson/iconset.png' },
    ],
    title: 'SaaS Help Desk & Bot Builder Platform',
    tagline: 'Three coexisting design systems. Four engineering teams. One designer keeping it together.',
    overview: 'Contracted via Master of Code Global to work embedded within LivePerson — a conversational AI platform serving enterprise clients worldwide. The product spans a complex help desk, an agent workspace, and a visual bot-builder used by customer support teams at scale. The scope was broad and the pace was constant.',
    challenge: 'Three design systems were alive simultaneously — legacy, current, and next-gen — each feeding different parts of the product. All three had to be maintained and evolved in parallel without destabilising the teams depending on them.',
    responsibilities: [
      'Contributed to and maintained 3 coexisting design systems at different maturity stages',
      'Designed and delivered 20+ new product features across multiple squads',
      'Created 1,000+ icons across 3 sizes and 2 styles (outline / filled)',
      'Kept 3–4 engineering teams supplied with design-ready specs 2–3 weeks ahead of sprint',
      'Maintained WCAG 2.0 AA compliance across all new components',
      'Collaborated directly with product managers and engineers on technical constraints and feasibility',
    ],
    process: [
      {
        title: 'Audit & Alignment',
        body: 'Mapped the relationships between three live design systems. Identified component overlap, naming conflicts, and token gaps. Built a shared matrix showing which teams depended on which system — and where decisions in one would break another.',
      },
      {
        title: 'Icon System',
        body: 'Designed a systematic icon library: 2 styles, 3 sizes, consistent optical weight across all glyphs. Delivered in batches of 50–100, with naming conventions aligned to engineering component trees for zero-translation handoff.',
      },
      {
        title: 'Feature Design',
        body: 'Operated as the embedded designer for multiple feature squads simultaneously. Ran discovery, mapped user flows, delivered annotated Figma specs. Prioritised handoff clarity — every spec included states, edge cases, and redlines.',
      },
      {
        title: 'Accessibility',
        body: 'Applied WCAG 2.0 AA standards to every new component. Documented contrast ratios, focus states, and interaction patterns. Built accessible component variants directly in Figma so engineers had no ambiguity.',
      },
    ],
    outcomes: 'Over 5+ years, kept multiple engineering teams moving without design becoming a bottleneck. The icon library became a shared asset used across all three design systems. Features shipped consistently, 2–3 weeks ahead of engineering sprints — a supply rhythm that held across team changes and product pivots.',
    metrics: [
      { value: '1,000+', label: 'icons delivered' },
      { value: '20+', label: 'features shipped' },
      { value: 'up to 4', label: 'engineering teams were fully loaded weeks ahead' },
      { value: '3', label: 'design systems maintained' },
    ],
    nextSlug: 'nba-teams',
    nextTitle: 'Web Platform for NBA Teams',
  },
  {
    slug: 'nba-teams',
    counter: '02',
    client: 'NBA Teams',
    clientDisplay: 'NBA Teams (NDA)',
    year: '3 months',
    role: 'Lead UI/UX Designer',
    domains: ['Sports', 'Web', 'UX Audit'],
    nda: true,
    logoSrc: '/work/nba/nbalogo.jpg',
    cover: '/work/nba/nbacover.png',
    title: 'Web Platform for NBA Teams',
    tagline: 'Improving fan experience within the rigid constraints of a league-mandated platform.',
    overview: 'Redesign of digital platforms for 2 top NBA teams. The core UX challenge was improving fan experience while preserving each team\'s brand identity within the strict technical constraints of the NBA-provided website engine — a platform with fixed templates and limited customisation.',
    challenge: 'The NBA platform imposed hard limits on layout, component types, and integration options. The design work had to be impactful within an envelope that couldn\'t be changed.',
    responsibilities: [
      'Conducted UX audit of existing team websites, identifying friction points in fan journeys',
      'Redesigned information architecture and navigation for both team sites',
      'Created high-fidelity Figma prototypes within NBA platform constraints',
      'Collaborated with team stakeholders on brand alignment and content priorities',
    ],
    process: [
      {
        title: 'UX Audit',
        body: 'Reviewed both team websites against fan use-cases: finding game schedules, buying tickets, following news, accessing player stats. Catalogued friction, dead ends, and missed brand moments.',
      },
      {
        title: 'Constraints Mapping',
        body: 'Documented the NBA platform\'s template system — what was fixed, what was configurable, what could be skinned. This became the design brief: work the edges of the envelope, not against the walls.',
      },
      {
        title: 'Redesign',
        body: 'Delivered new visual hierarchies, navigation structures, and page layouts for both teams. Each needed its own identity while sharing the same underlying template system.',
      },
    ],
    outcomes: 'Delivered redesigned UX for 2 NBA team websites within a 3-month engagement. Both sites improved fan navigation and strengthened team brand expression within the constraints of the league platform.',
    metrics: [
      { value: '2', label: 'team websites redesigned' },
      { value: '3mo', label: 'engagement duration' },
    ],
    nextSlug: 'healthcare-saas',
    nextTitle: 'Hospital Asset Management SaaS',
  },
  {
    slug: 'healthcare-saas',
    counter: '03',
    client: 'Healthcare Client',
    clientDisplay: 'Healthcare Client (NDA)',
    year: '2 years',
    role: 'Lead UI/UX Designer',
    domains: ['Healthcare', 'SaaS', 'Mobile', 'Data Viz'],
    nda: true,
    logoSrc: '/work/health/healthlogo.svg',
    cover: '/work/health/healthcover.png',
    overviewImage: '/work/health/preview.png',
    title: 'Hospital Asset Management SaaS',
    tagline: 'Full product suite — dashboard, admin, field app — for a network of 20 hospitals.',
    overview: 'SaaS platform built from scratch to monitor and manage physical assets across a hospital network. Real-time analytics and dashboards tracking asset performance, maintenance cycles, and location. The product served three distinct user groups with fundamentally different needs and contexts of use.',
    challenge: 'Three user groups, three interfaces, one coherent product. The field technician using a mobile app in a hospital corridor has nothing in common with the admin reviewing reports in an office — yet the data has to be consistent across all views.',
    responsibilities: [
      'Led design of the full product suite: client dashboard, admin panel, and field technician mobile app',
      'Designed data visualisation components for real-time asset tracking across ~20 hospitals',
      'Led migration from Photoshop to Figma, establishing new component library and workflows',
      'Conducted user research with hospital staff to validate workflows and terminology',
      'Delivered annotated specs for 3 platforms: web dashboard, web admin, iOS/Android field app',
    ],
    process: [
      {
        title: 'User Research',
        body: 'Interviewed hospital administrators, IT staff, and field technicians. Each group had distinct goals, vocabulary, and device contexts. The research shaped three separate information architectures that shared a unified data model.',
      },
      {
        title: 'Figma Migration',
        body: 'The team was working in Photoshop with no shared component system. Led the migration to Figma: established a component library, token structure, and handoff conventions that scaled across all three product surfaces.',
      },
      {
        title: 'Dashboard & Data Viz',
        body: 'Designed the primary analytics surface — charts, KPI cards, alert systems, and drill-down views for asset performance data. Focused on scannable layouts for users who check dashboards in minutes, not hours.',
      },
      {
        title: 'Mobile Field App',
        body: 'Designed the iOS/Android app for field technicians: optimised for one-handed use, glanceable asset status, and quick action flows for maintenance logging. Context was physical — users in motion, often in low-light environments.',
      },
    ],
    outcomes: 'Delivered a coherent product suite across three platforms serving ~20 hospitals. The Figma migration reduced design-to-dev friction and gave the team a foundation to scale. All three surfaces — dashboard, admin, field app — shipped within the 2-year engagement.',
    metrics: [
      { value: '~20', label: 'hospitals served' },
      { value: '3', label: 'platforms designed' },
    ],
    nextSlug: 'jewelry-brand',
    nextTitle: 'In-Store iOS Tool for Top US Jewelry Brand',
  },
  {
    slug: 'jewelry-brand',
    counter: '04',
    client: 'Luxury Retail Brand',
    clientDisplay: 'Luxury Retail Brand (NDA)',
    year: '2 years',
    role: 'UI/UX Designer',
    domains: ['Luxury Retail', 'iOS', 'Mobile'],
    nda: true,
    logoSrc: '/work/jewelry/jewelrylogo.svg',
    cover: '/work/jewelry/jewelrycover.png',
    overviewImage: '/work/jewelry/wireframes.png',
    title: 'In-Store iOS Tool for Top US Jewelry Brand',
    tagline: 'A tool that makes expert knowledge feel effortless — for staff, not just customers.',
    overview: 'Bespoke iOS application for a top US jewelry brand\'s in-store staff. The tool guides sales associates through diamond selection consultations — surfacing inventory, education content, and comparison tools in a way that enhances the in-store conversation rather than replacing it.',
    challenge: 'The tool had to feel premium — matching the brand\'s physical environment — while being fast and practical enough for a sales associate to use mid-conversation with a customer. Luxury UI and usability are often in tension.',
    responsibilities: [
      'Designed iPhone and iPad applications for in-store retail use',
      'Mapped consultation workflows with sales associates and brand managers',
      'Created a design language aligned with the brand\'s luxury positioning',
      'Delivered high-fidelity prototypes for stakeholder review and user testing',
    ],
    process: [
      {
        title: 'Workflow Mapping',
        body: 'Shadowed in-store consultations (remotely, via recorded sessions) to understand the real sequence of a diamond selection conversation. The app had to follow that sequence — not impose a new one.',
      },
      {
        title: 'Brand Alignment',
        body: 'Developed a visual language that matched the physical store environment: refined typography, restrained colour, tactile-feeling components. The UI had to look right sitting on a mahogany counter.',
      },
      {
        title: 'Prototype & Test',
        body: 'Built high-fidelity interactive prototypes for both iPhone and iPad. Tested with sales associates for speed and legibility under real conditions — in hand, under store lighting, mid-sentence.',
      },
    ],
    outcomes: 'Delivered iPhone and iPad applications enabling in-store staff to guide diamond selection consultations confidently. The tool enhanced the sales conversation without interrupting its natural flow.',
    metrics: [
      { value: '2', label: 'platforms (iPhone + iPad)' },
    ],
    nextSlug: 'political-crm',
    nextTitle: 'Web CRM for Political Activists',
  },
  {
    slug: 'political-crm',
    counter: '05',
    client: 'Political Campaign',
    clientDisplay: 'Political Campaign (NDA)',
    year: '3+ years',
    role: 'UI/UX Designer',
    domains: ['CRM', 'Web', 'Mobile', 'AI Prototyping'],
    nda: true,
    logoSrc: '/work/political/politicallogo.svg',
    cover: '/work/political/politicalcover.png',
    overviewImage: '/work/political/01.png',
    screens: [
      { src: '/work/political/01.png' },
      { src: '/work/political/02.png' },
      { src: '/work/political/03.png' },
      { src: '/work/political/04.png' },
    ],
    protoUrl: 'https://bdoshchak.github.io/page-builder/',
    protoGif: '/work/political/builder-preview.gif',
    title: 'Web CRM for Political Activists',
    tagline: '3+ year engagement. 3 platforms. One AI sprint that changed the scope.',
    overview: 'Digital platform for US-based grassroots political activism — public website, volunteer mobile app, and internal CRM for campaign staff. The platform grew over 3+ years from initial concept to a full-featured suite: volunteer coordination, phone banking queues, canvassing tracking, petition management, and real-time campaign updates.',
    challenge: 'Two fundamentally different users sharing one system: the volunteer who opens the app in a five-minute window between shifts, and the campaign staffer managing hundreds of contacts all day. Every design decision had to serve both — without making either feel like a compromise.',
    responsibilities: [
      'Designed the full platform suite across 3+ years: public website, volunteer mobile app, and internal CRM',
      'Mapped and designed volunteer workflows: sign-ups, phone banking, canvassing logging, petition flows',
      'Designed the internal CRM for campaign staff — volunteer management, outreach tracking, phone banking queues',
      'Prototyped an AI-powered page builder: 3 working prototypes in 12 total hours (Figma, Google AI Studio, Claude Code)',
      'Conducted iterative usability testing with volunteer users',
    ],
    process: [
      {
        title: 'Research',
        body: 'Interviewed campaign volunteers and organisers. The volunteer opens the app once a week, mid-commute. The campaign staffer lives in the CRM eight hours a day. Two entirely different information densities — both had to be right.',
      },
      {
        title: 'Volunteer App',
        body: 'Designed around minimal-step flows: sign up for a shift in 3 taps, log a canvassing result in under a minute. Assumed poor connectivity and constant interruptions as the baseline condition.',
      },
      {
        title: 'CRM Design',
        body: 'Built for people in it all day: volunteer management, outreach tracking, phone banking queues, reporting dashboards. Denser and more powerful than the public-facing product — every action optimised for speed, not discovery.',
      },
      {
        title: 'AI Sprint',
        body: 'By client request, prototyped an AI-powered page builder in 12 total working hours. Three working prototypes across three environments — Figma, Google AI Studio, and Claude Code. Client confirmed full development scope following the sprint.',
      },
    ],
    outcomes: 'Delivered a full platform suite — website, mobile app, and CRM — over a 3+ year engagement. The AI sprint demonstrated that production-quality prototypes can be created in hours, not weeks — and directly led to the client investing in full development.',
    metrics: [
      { value: '3', label: 'platforms (web · mobile · CRM)' },
      { value: '12h', label: 'to 3 working AI prototypes' },
      { value: '3+yr', label: 'ongoing engagement' },
    ],
    nextSlug: 'liveperson',
    nextTitle: 'SaaS Help Desk & Bot Builder Platform',
  },
];
