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
    logoSrc: '/work/liveperson/LivePerson_logo.svg',
    cover: '/work/liveperson/cover.png',
    overviewImage: '/work/liveperson/01.png',
    screens: [
      { src: '/work/liveperson/01.png', annotation: 'Primary agent workspace – legacy UI redesigned for WCAG 2.0 compliance, extended with new features, and kept familiar enough to eliminate retraining overhead.' },
      { src: '/work/liveperson/wireframes.png', annotation: 'Rapid wireframing during the discovery phase of a new feature wizard – mapping flows before committing to high-fidelity.' },
      { src: '/work/liveperson/02.png', annotation: 'High-fidelity mockup of the wizard – first step of the rule definition flow for the new feature.' },
      { src: '/work/liveperson/03.png', annotation: 'Fully interactive prototype of the bot-testing workspace – where bot builders can run live conversations with their AI. Built on Material 3, adapted to LivePerson\'s brand token system.' },
      { src: '/work/liveperson/04.png', annotation: 'Next-generation prompt builder – lets bot builders craft, fine-tune, and reuse prompts anywhere across the platform. Designed for power users who iterate fast and need their prompt library close at hand.' },
      { src: '/work/liveperson/knowledge%20center.png', annotation: 'Knowledge Center fully redesigned to the next-gen design system – light theme. Cleaner hierarchy, updated components, and a content layout built for agents who need answers fast.' },
      { src: '/work/liveperson/knowledge%20center%20-%20dark%20-%201920.png', annotation: 'Knowledge Center in dark theme – same redesign applied across both colour modes, ensuring full parity between light and dark without visual compromise.' },
      { src: '/work/liveperson/iconset.png', annotation: 'A glimpse of the icon library – 3 sizes, 2 styles each (outline and filled), consistent optical weight across every glyph regardless of complexity. Each icon lives as a stroke-based source for editing, then exported as flattened shapes with proper naming conventions for zero-friction handoff. Light and dark variants were added later by another designer – personally I find the duplication unnecessary, but the system accommodates it cleanly.' },
    ],
    title: 'SaaS Help Desk & Bot Builder Platform',
    tagline: 'Three coexisting design systems. Four engineering teams. One designer keeping it together.',
    overview: 'Contracted via Master of Code Global to work embedded within LivePerson – a conversational AI platform serving enterprise clients worldwide. The product spans a complex help desk, an agent workspace, and a visual bot-builder used by customer support teams at scale. The scope was broad and the pace was constant.',
    challenge: 'Three design systems were alive simultaneously – legacy, current, and next-gen – each feeding different parts of the product. All three had to be maintained and evolved in parallel without destabilising the teams depending on them.',
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
        body: 'The legacy design system had hit its ceiling – under modern demands and WCAG 2.0 compliance requirements, it simply couldn\'t cover what the product needed. The task: rebuild the entire system to be accessible, contemporary, and familiar enough that users wouldn\'t experience shock after the redesign. Meanwhile, internal tools earmarked for deprecation were still shipping new features and couldn\'t switch systems mid-flight. The mobile product added a third variable – a forked Material Design system, chosen to compress delivery timelines. Three systems, all live, all requiring maintenance and forward design work simultaneously.',
      },
      {
        title: 'Icon System',
        body: 'Started as a personal initiative – created before any design system overhaul even began, to replace an ageing iconset that was neither consistent nor sufficient for the product\'s needs. Grew into a library of 1,000+ icons across three sizes (16, 24, 32px), each with its own level of detail calibrated for legibility at that scale. Two styles – outlined and filled – optimised for both retina and non-retina displays. All platform-specific cases covered, and the library kept expanding with every new feature shipped.',
      },
      {
        title: 'Feature Design',
        body: 'Embedded across multiple feature teams in several divisions simultaneously. Took features from a half-formed idea or detailed PRD all the way to production-ready specs – mapping user flows when needed, skipping wireframes when speed demanded it, always keeping technical and platform constraints in frame. Delivered fully clickable high-fidelity Figma prototypes and flow screencasts. Every handoff included states, edge cases, and redlines. Worked closely with the full stakeholder mix – engineers, product managers, division directors, tech writers – keeping alignment tight across every layer. Kept a constant balance between UI refinement and implementation velocity.',
      },
      {
        title: 'Accessibility',
        body: 'Applied WCAG 2.0 AA standards to every new component. Worked closely with a dedicated accessibility specialist to find the right balance between brand integrity and genuine inclusivity – not just hitting a checklist. Refined complex web app interfaces to remain usable at 200% zoom, defined proper keyboard navigation flows, documented contrast ratios, focus states, and interaction patterns. Accessible variants were built directly in Figma so engineers had no ambiguity at handoff.',
      },
    ],
    outcomes: 'Over 5+ years, kept multiple engineering teams moving without design becoming a bottleneck. The icon library became a shared asset used across all three design systems. Features shipped consistently, 2–3 weeks ahead of engineering sprints – a supply rhythm that held across team changes and product pivots.',
    metrics: [
      { value: '1,000+', label: 'icons delivered' },
      { value: '20+', label: 'features shipped' },
      { value: 'up to 4', label: 'engineering teams were fully loaded weeks ahead' },
      { value: '3', label: 'design systems maintained' },
    ],
    nextSlug: 'political-crm',
    nextTitle: 'Web CRM for Political Activists',
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
    overview: 'Redesign of digital platforms for 2 top NBA teams. The core UX challenge was improving fan experience while preserving each team\'s brand identity within the strict technical constraints of the NBA-provided website engine – a platform with fixed templates and limited customisation.',
    challenge: 'The NBA platform imposed hard limits on layout, component types, and integration options. The design work had to be impactful within an envelope that couldn\'t be changed.',
    responsibilities: [
      'Audited existing team websites against real fan journeys – surfacing friction, dead ends, and missed brand moments',
      'Worked directly with team stakeholders to align design decisions with brand identity and content priorities',
      'Acted as art director: defined redesign guidelines within platform constraints and reviewed mockups produced by a collaborating designer',
    ],
    process: [
      {
        title: 'UX Audit',
        body: 'Reviewed the team websites against the core fan use-cases: game schedules, ticket purchase, the team store, news, and player stats. Mapped every friction point and dead end, then compiled a prioritised list of improvements scoped strictly to what the NBA platform actually allowed.',
      },
      {
        title: 'Constraints Mapping',
        body: 'Documented the NBA platform\'s template system – what was fixed, what was configurable, what could be skinned. This became the design brief: work the edges of the envelope, not against the walls.',
      },
      {
        title: 'Redesign',
        body: 'Delivered new visual hierarchies, navigation structures, and page layouts for both teams. Each needed its own identity while sharing the same underlying template system.',
      },
    ],
    outcomes: 'Completed the engagement in 3 months. A UX audit turned identified friction into a concrete, platform-scoped action list. Working as art director alongside a collaborating designer, the redesign improved fan navigation across key journeys – schedules, tickets, store, news – while giving each team a stronger, more distinct brand presence within the rigid boundaries of the NBA-provided platform.',
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
    tagline: 'From whiteboard sketch to acquired product – built alongside the founders from day one.',
    overview: 'This one started with a blue marker on a whiteboard. The client knew how to model healthcare inventory costs; I knew how to turn complex data into navigable interfaces. Together with the development team, we built a SaaS platform for hospital asset assessment and cost projection from scratch – a product that eventually grew into a profitable business and was acquired by a major corporation.',
    challenge: 'The project launched before Figma existed. Sketch wasn\'t yet the industry default, and Fireworks – the tool I knew best – had just been deprecated by Adobe. The entire CRM, with its dense tables, complex forms, and multi-role workflows, had to be designed in Photoshop. Getting that to work at product quality was the real challenge.',
    responsibilities: [
      'Co-designed the initial product concept with the founders – data model, user flows, and interface structure sketched together from scratch',
      'Designed the full product suite in Photoshop: client dashboard, admin panel, and field technician mobile app',
      'Designed data visualisation components for real-time asset tracking across ~20 hospitals',
      'Led migration from Photoshop to Figma years later, establishing a component library and new handoff workflows',
      'Handed the project off to two designers after the migration, with full documentation and a stable design system in place',
    ],
    process: [
      {
        title: 'Whiteboard to Wireframe',
        body: 'No design tools, no brief – just the founders, a whiteboard, and a blue marker. The data model and core user flows were worked out together in that first session. The founders understood the healthcare domain; I shaped it into something buildable and navigable. That alignment from day one set the product\'s direction for years.',
      },
      {
        title: 'Designing in Photoshop',
        body: 'Figma didn\'t exist. Sketch wasn\'t yet standard. Fireworks – the tool I\'d relied on – had just been killed by Adobe. So a full CRM with complex tables, multi-step forms, and three distinct user interfaces got designed in Photoshop. It worked, but it required rigour that modern tools take for granted.',
      },
      {
        title: 'MVP & Iteration',
        body: 'We launched an MVP and the founders used it in the field – testing assumptions, refining workflows, and improving cost projection models through real client engagements. The product was built to be validated, not just shipped.',
      },
      {
        title: 'Figma Migration',
        body: 'Years into the engagement, I led the migration from Photoshop to Figma: rebuilt the component library, established token structure and handoff conventions, and brought the design system up to a state where it could be handed off cleanly. Two designers from our team took it forward from there.',
      },
    ],
    outcomes: 'A product built from a whiteboard sketch grew into a profitable SaaS business serving ~20 hospitals – and was eventually acquired by a major corporation. The Figma migration extended the product\'s design lifespan and enabled a clean handoff to a growing team. The engagement ran for several years and covered every phase: concept, MVP, iteration, scaling, and succession.',
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
    title: 'In-Store iOS Suite for Top US Jewelry Brand',
    tagline: 'Two apps, one store – one to close the sale, one to seal the experience.',
    overview: 'A suite of bespoke iOS applications for a top US jewelry brand, designed to work together on the shop floor. The iPhone app serves as a private tool for sales associates – giving them real-time competitive pricing intelligence and deal-making capabilities. The iPad app faces the client: a digital showcase and credit calculator that makes the purchase decision feel considered and effortless. Everything built from the brand\'s own design language.',
    challenge: 'Two devices, two audiences, one coherent brand experience. The iPhone app needed to feel like a professional instrument – fast, discreet, sharp. The iPad app needed to feel like an extension of the store itself – premium, calm, confidence-building. Both had to work under the same roof without visual contradiction.',
    responsibilities: [
      'Designed two distinct iOS applications for in-store use: iPhone for staff, iPad for client-facing scenarios',
      'Mapped the sales associate\'s workflow – competitive pricing checks, product comparison, consultation flow',
      'Designed the iPad showcase and credit calculation experience for direct client interaction',
      'Translated the brand\'s existing brand book into a functional iOS design language across both apps',
      'Delivered high-fidelity prototypes for stakeholder review and in-store validation',
    ],
    process: [
      {
        title: 'iPhone – Staff Intelligence Tool',
        body: 'Sales associates needed a discreet edge: the ability to check market prices for comparable products at competitor stores mid-consultation and use that data to build a compelling proposal. The app surfaces competitive pricing, supports product comparison, and keeps the associate in control of the conversation – without the client ever knowing it\'s being used.',
      },
      {
        title: 'iPad – Client Showcase & Credit Calculator',
        body: 'The iPad app is designed to be handed to the client. A digital showcase of the brand\'s collection paired with a credit calculator that lets customers explore payment options on the spot. The experience is unhurried – premium enough to match the physical environment, practical enough to move the sale forward.',
      },
      {
        title: 'Brand Alignment',
        body: 'All design decisions were grounded in the brand\'s existing brand book. Adapted its visual language – typography, colour, spatial logic – into native iOS components that felt at home in the store without drifting from the brand\'s established identity.',
      },
    ],
    outcomes: 'Delivered two complementary iOS applications that work as a system on the shop floor – one sharpening the associate\'s capability, one elevating the client\'s experience. The suite extended the brand\'s premium identity into digital without compromise.',
    metrics: [
      { value: '2', label: 'iOS apps delivered' },
      { value: '2', label: 'distinct audiences served' },
    ],
    nextSlug: 'portfolio-site',
    nextTitle: 'This Portfolio',
  },
  {
    slug: 'portfolio-site',
    counter: '06',
    client: 'Personal Project',
    clientDisplay: 'Personal Project',
    year: '5 days',
    role: 'Designer · AI Director',
    domains: ['AI-Assisted', 'Astro', 'Portfolio'],
    nda: false,
    logoSrc: '/work/portfolio/portfolio_logo.png',
    cover: '/work/portfolio/portfolio_project_cover.png',
    title: 'This Portfolio',
    tagline: 'Built with Claude Code, Claude Sonnet 4.6, and Gemini. Finished in 5 days.',
    overview: 'I\'d been using AI agents for client work but had never properly tested the whole pipeline on something of my own. I also didn\'t have a portfolio. So I used one problem to solve the other. I collected a pack of reference images for the visual direction – intentionally minimal, because I wanted the work to be the thing you look at, not the site – dropped in my CV, and started iterating.',
    challenge: 'The challenge wasn\'t technical – it was editorial. AI generates fluent, generic text. Real portfolio writing is specific, personal, and earned. Every section needed to be rewritten in a voice that reflects how I actually think and work, not how a language model describes a designer.',
    responsibilities: [
      'Designed and directed the full site concept, visual language, and content strategy',
      'Built and configured four custom agents: Orchestrator, Brand Architect, Front-End Architect, and Logo Designer',
      'Drew the logo manually – AI-generated options were consistently unusable',
      'Generated background images with Figma AI, then refined them in Affinity',
      'Iterated on design, layout, and copy across multiple sessions – using Claude and Gemini as art directors',
      'Rewrote all project descriptions from raw notes and client memory into coherent case study copy',
      'Collected and incorporated feedback from working designers',
    ],
    process: [
      {
        title: 'Agent Setup',
        body: 'Four agents: an Orchestrator to coordinate the others, a Brand Architect to define the visual language, a Front-End Architect to build and maintain the codebase, and a Logo Designer to handle the mark. The Logo Designer was the only one that failed – AI cannot produce a good logo at this point. I drew the BD mark myself. The background images were a different story: generated with Figma AI, then adjusted in Affinity until they looked right.',
      },
      {
        title: 'Design & Build',
        body: 'Three days from blank canvas to a fully functional site. The reference pack defined the direction: dark, typographic, no decoration. The AI handled structure and implementation. I directed, corrected, and pushed back whenever something read like a template.',
      },
      {
        title: 'Art Direction with AI',
        body: 'After the initial build, I brought Claude and Gemini in as reviewers – asking for honest critique, not validation. Two more days of iterations followed: layout adjustments, copy rewrites, spacing refinements. I also circulated it to colleagues who are working designers. Their feedback landed differently than the AI\'s.',
      },
      {
        title: 'Editorial Pass',
        body: 'The last phase was the slowest: replacing AI-generated copy with real descriptions of how each project actually worked. Not what I did, but how it felt to do it, what the actual constraints were, and what the outcome meant. That part can\'t be delegated.',
      },
    ],
    outcomes: 'A portfolio that took 5 days instead of months – and one that reflects how I actually work, not a sanitised version of it. The process proved a point: AI is a tool. The threshold for getting things built is lower than it\'s ever been. But the judgement about what to build, and whether it\'s any good, still has to come from somewhere.',
    metrics: [
      { value: '5', label: 'days to launch' },
      { value: '4', label: 'AI agents (3 succeeded)' },
    ],
    nextSlug: 'liveperson',
    nextTitle: 'SaaS Help Desk & Bot Builder Platform',
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
      { src: '/work/political/04.png', annotation: 'Figma prototype of the page-builder concept – a fully clickable POC used to walk the client through the idea before a line of code was written. This design also served as the visual reference fed into Google AI Studio, where a second prototype was generated that let the client explore the feature hands-on themselves.' },
    ],
    protoUrl: 'https://bdoshchak.github.io/page-builder/',
    protoGif: '/work/political/builder-preview.gif',
    title: 'Web CRM for Political Activists',
    tagline: '3+ year engagement. 3 platforms. One AI sprint that changed the scope.',
    overview: 'Digital platform for US-based grassroots political activism – public website, volunteer mobile app, and internal CRM for campaign staff. The platform grew over 3+ years from initial concept to a full-featured suite: volunteer coordination, phone banking queues, canvassing tracking, petition management, and real-time campaign updates.',
    challenge: 'Two fundamentally different users sharing one system: the volunteer who opens the app in a five-minute window between shifts, and the campaign staffer managing hundreds of contacts all day. Every design decision had to serve both – without making either feel like a compromise.',
    responsibilities: [
      'Designed the full platform suite across 3+ years: public website, volunteer mobile app, and internal CRM',
      'Mapped and designed volunteer workflows: sign-ups, phone banking, canvassing logging, petition flows',
      'Designed the internal CRM for campaign staff – volunteer management, outreach tracking, phone banking queues',
      'Prototyped an AI-powered page builder: 3 working prototypes in 12 total hours (Figma, Google AI Studio, Claude Code)',
    ],
    process: [
      {
        title: 'Origin',
        body: 'The platform started life as a grassroots CRM built by a volunteer. Once the campaign secured a budget for professional design and development, we were brought in to take it further. The brief was clear: expand the system\'s capabilities without losing the accessibility that made it work for non-technical users.',
      },
      {
        title: 'CRM Expansion',
        body: 'The redesigned platform gained substantial new ground – email sending with custom template management, full conversation history, and a petition tool that automatically routes submissions to US representatives based on the signer\'s location. Each addition had to integrate cleanly into a system that campaign staff would live in all day.',
      },
      {
        title: 'Volunteer Mobile App',
        body: 'A dedicated mobile release followed, built for volunteers in the field: activity tracking, shift sign-ups, and direct communication with supporters. Throughout both phases the design decisions were shaped by a constant tension between feature ambition and development cost – every choice had to earn its place.',
      },
      {
        title: 'AI Sprint',
        body: 'By client request, prototyped an AI-powered page builder in 12 total working hours. Three working prototypes across three environments – Figma, Google AI Studio, and Claude Code. Client confirmed full development scope following the sprint.',
      },
    ],
    outcomes: 'Delivered a full platform suite – website, mobile app, and CRM – over a 3+ year engagement. The AI sprint demonstrated that production-quality prototypes can be created in hours, not weeks – and directly led to the client investing in full development.',
    metrics: [
      { value: '3', label: 'platforms (web · mobile · CRM)' },
      { value: '12h', label: 'to 3 working AI prototypes' },
      { value: '3+yr', label: 'ongoing engagement' },
    ],
    nextSlug: 'nba-teams',
    nextTitle: 'Web Platform for NBA Teams',
  },
];
