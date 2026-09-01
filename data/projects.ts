export type ProjectTheme = 'blue' | 'orange' | 'dark' | 'paper';

export type CaseMedia = {
  src?: string;
  alt: string;
  label: string;
  kind?: 'image' | 'video';
  tone?: ProjectTheme;
};

export type ProjectModule =
  | { type: 'chapter'; eyebrow: string; title: string; body: string }
  | { type: 'color'; label: string; tone: ProjectTheme }
  | { type: 'text'; eyebrow: string; body: string }
  | { type: 'carousel'; title: string; description: string; items: CaseMedia[] }
  | { type: 'before-after'; title: string; before: CaseMedia; after: CaseMedia }
  | { type: 'timeline'; title: string; steps: string[] };

export type Project = {
  id: string;
  slug: string;
  title: string;
  year?: string;
  categories: string[];
  services: string[];
  summary: string;
  theme: ProjectTheme;
  coverClass: string;
  coverImage?: string;
  sourceUrl?: string;
  featureSize?: 'wide' | 'standard';
  gallery: ProjectModule[];
};

const processSteps = ['Research', 'Concept', 'System', 'Production', 'Final application'];

export const initialProjectCount = 7;

export const projects: Project[] = [
  {
    id: '01', slug: 'unoog-visual-identity', title: 'UNOOG', year: '2025',
    categories: ['Visual Identity', 'Branding'], services: ['Identity', 'Art Direction', 'Illustration'],
    summary: 'A living identity built from contrast, motion, expressive characters and a modular six-arm symbol.',
    theme: 'blue', coverClass: 'cover-unoog', featureSize: 'wide',
    sourceUrl: 'https://www.behance.net/gallery/217372399/Unoog',
    gallery: [
      { type: 'chapter', eyebrow: '01 / BRAND SYSTEM', title: 'A character-led identity designed to move.', body: 'The UNOOG system combines a compact wordmark, asterisk, expressive faces and a high-contrast palette. Each part can work alone or expand into motion, digital and physical applications.' },
      { type: 'carousel', title: 'Character system', description: 'Color variations prepared for different backgrounds and moments.', items: [
        { src: '/brand/characters/head-primary.svg', alt: 'UNOOG character in orange and blue', label: 'Primary character' },
        { src: '/brand/characters/head-orange.svg', alt: 'UNOOG character in tonal orange', label: 'Tonal character' },
        { src: '/brand/characters/head-light.svg', alt: 'UNOOG character with cream highlights', label: 'Light character' },
      ] },
      { type: 'before-after', title: 'Identity evolution', before: { alt: 'Space reserved for the original mark', label: 'Before / source mark', tone: 'paper' }, after: { src: '/brand/icons/asset-36.svg', alt: 'Final UNOOG wordmark', label: 'After / final system', tone: 'blue' } },
      { type: 'timeline', title: 'From sketch to system', steps: processSteps },
    ],
  },
  {
    id: '02', slug: 'maria-helena', title: 'Dra. Maria Helena',
    categories: ['Visual Identity'], services: ['Strategy', 'Identity', 'Applications'],
    summary: 'A precise and human visual identity designed to balance professional authority with an approachable presence.',
    theme: 'paper', coverClass: 'cover-maria', featureSize: 'standard',
    sourceUrl: 'https://www.behance.net/gallery/250164147/Advogada-Dra-Maria-Helena-Identidade-Visual',
    gallery: [
      { type: 'chapter', eyebrow: 'CASE STUDY / READY FOR MEDIA', title: 'A complete identity journey.', body: 'The case is structured to receive strategy, symbol construction, typography, color, stationery and final applications without changing the page layout.' },
      { type: 'carousel', title: 'Identity construction', description: 'Replace each reserved frame with the approved project assets.', items: [
        { alt: 'Strategy and references placeholder', label: '01 / Strategy & references', tone: 'paper' },
        { alt: 'Logo construction placeholder', label: '02 / Logo construction', tone: 'blue' },
        { alt: 'Application mockups placeholder', label: '03 / Final applications', tone: 'orange' },
      ] },
      { type: 'timeline', title: 'Case progression', steps: processSteps },
    ],
  },
  {
    id: '03', slug: 'elite-barbershop', title: 'Elite Barbershop',
    categories: ['Visual Identity'], services: ['Identity', 'Art Direction', 'Environmental'],
    summary: 'A bold identity system for a barbershop, organized to connect craft, atmosphere and customer experience.',
    theme: 'dark', coverClass: 'cover-elite', featureSize: 'standard',
    sourceUrl: 'https://www.behance.net/gallery/248736481/Elite-Barbershop-ID-Visual',
    gallery: [
      { type: 'chapter', eyebrow: 'CASE STUDY / READY FOR MEDIA', title: 'From visual language to physical space.', body: 'A modular case prepared for logo development, signage, uniforms, editorial details and motion or video whenever those assets are available.' },
      { type: 'carousel', title: 'Brand touchpoints', description: 'Frames prepared for image, process and video.', items: [
        { alt: 'Identity detail placeholder', label: '01 / Identity details', tone: 'dark' },
        { alt: 'Signage placeholder', label: '02 / Signage & environment', tone: 'orange' },
        { alt: 'Motion placeholder', label: '03 / Motion or video', kind: 'video', tone: 'blue' },
      ] },
      { type: 'before-after', title: 'Brand transformation', before: { alt: 'Before identity placeholder', label: 'Before / previous expression', tone: 'paper' }, after: { alt: 'After identity placeholder', label: 'After / new expression', tone: 'dark' } },
    ],
  },
  {
    id: '04', slug: 'sadhu', title: 'Sadhu', year: '2026 — CURRENT',
    categories: ['Campaigns', 'Events', 'Graphic Design'], services: ['Campaign', 'Packaging', 'Graphic Design'],
    summary: 'One evolving brand case that brings multiple Sadhu initiatives together as chapters of the same creative partnership.',
    theme: 'orange', coverClass: 'cover-sadhu', featureSize: 'wide',
    gallery: [
      { type: 'chapter', eyebrow: 'BRAND CASE / MULTIPLE CHAPTERS', title: 'One brand. Many expressions.', body: 'Instead of separating every activation into a different project, the Sadhu case groups campaigns, events, packaging and new deliveries in a single scalable narrative.' },
      { type: 'carousel', title: 'Chapter 01 — Mundial Champions 2026', description: 'Campaign frames ready for key visual, rollout, social assets and motion.', items: [
        { alt: 'Mundial Champions key visual placeholder', label: 'Key visual', tone: 'blue' },
        { alt: 'Campaign rollout placeholder', label: 'Campaign rollout', tone: 'orange' },
        { alt: 'Campaign motion placeholder', label: 'Motion / video', kind: 'video', tone: 'dark' },
      ] },
      { type: 'carousel', title: 'Chapter 02 — Events', description: 'A flexible sequence for identities, environments and event communication.', items: [
        { alt: 'Event identity placeholder', label: 'Identity system', tone: 'dark' },
        { alt: 'Event applications placeholder', label: 'Physical applications', tone: 'paper' },
        { alt: 'Event digital assets placeholder', label: 'Digital rollout', tone: 'blue' },
      ] },
      { type: 'before-after', title: 'From dieline to final 3D', before: { alt: 'Packaging dieline placeholder', label: 'Before / dieline', tone: 'paper' }, after: { alt: 'Final 3D packaging placeholder', label: 'After / final 3D', tone: 'orange' } },
      { type: 'timeline', title: 'Expandable brand process', steps: ['Brief', 'Concept', 'Dieline', 'Production', '3D & launch'] },
    ],
  },
  {
    id: '05', slug: 'unimed-hospital-10-de-julho', title: 'Unimed / Hospital 10 de Julho',
    categories: ['Graphic Design', 'Campaign'], services: ['Campaign', 'Graphic Design'],
    summary: 'An institutional campaign system that turns a celebratory message into a clear, flexible visual language.',
    theme: 'paper', coverClass: 'cover-unimed', featureSize: 'standard',
    sourceUrl: 'https://www.behance.net/gallery/248475737/Unimed-Hospital-10-Julho-Somos-todos-Nota-10',
    gallery: [
      { type: 'chapter', eyebrow: 'INSTITUTIONAL CAMPAIGN', title: 'A message designed to scale.', body: 'The project viewer is ready for concept, graphic system, campaign pieces and documented results.' },
      { type: 'carousel', title: 'Campaign rollout', description: 'Reserved frames for the complete communication system.', items: [
        { alt: 'Campaign key visual placeholder', label: 'Key visual', tone: 'paper' },
        { alt: 'Print rollout placeholder', label: 'Print pieces', tone: 'blue' },
        { alt: 'Digital rollout placeholder', label: 'Digital assets', tone: 'orange' },
      ] },
    ],
  },
  {
    id: '06', slug: 'hypertrophy-academy', title: 'Hypertrophy Academy',
    categories: ['Branding'], services: ['Brand Strategy', 'Identity'],
    summary: 'A performance-focused brand shaped around discipline, progression and a direct training culture.',
    theme: 'orange', coverClass: 'cover-hypertrophy', featureSize: 'wide',
    sourceUrl: 'https://www.behance.net/gallery/233925351/Hypertrophy-Academy',
    gallery: [
      { type: 'chapter', eyebrow: 'BRAND IDENTITY', title: 'Built around progression.', body: 'A complete project shell ready for strategy, identity construction, typography, digital presence and physical applications.' },
      { type: 'timeline', title: 'Training the brand', steps: processSteps },
    ],
  },
  {
    id: '07', slug: 'burger-grill', title: 'Burger Grill',
    categories: ['Branding', 'Packaging'], services: ['Branding', 'Packaging'],
    summary: 'A food brand identity designed for recognition across packaging, menu systems and retail touchpoints.',
    theme: 'dark', coverClass: 'cover-burger', featureSize: 'standard',
    sourceUrl: 'https://www.behance.net/gallery/159061793/Burger-Grill',
    gallery: [
      { type: 'chapter', eyebrow: 'FOOD & PACKAGING', title: 'Identity with appetite.', body: 'The case can grow from the visual identity into menus, packaging dielines, photography and final 3D presentations.' },
      { type: 'before-after', title: 'Packaging development', before: { alt: 'Packaging dieline placeholder', label: 'Dieline', tone: 'paper' }, after: { alt: 'Final packaging placeholder', label: 'Final 3D pack', tone: 'dark' } },
    ],
  },
  {
    id: '08', slug: 'amood-fathers-day', title: 'Amood — Father’s Day',
    categories: ['Campaign', 'Art Direction'], services: ['Campaign', 'Graphic Design'],
    summary: 'A seasonal campaign that translates affection and gifting into a concise visual narrative for Amood.',
    theme: 'orange', coverClass: 'cover-amood', coverImage: '/projects/amood-cover.webp', featureSize: 'standard',
    sourceUrl: 'https://www.behance.net/gallery/177054661/Campanha-de-Dia-dos-Pais-Amood',
    gallery: [
      { type: 'chapter', eyebrow: 'SEASONAL CAMPAIGN', title: 'A campaign made for connection.', body: 'A flexible case prepared for concept, key visual, social sequence and final campaign applications.' },
      { type: 'carousel', title: 'Campaign story', description: 'Cover image plus reserved frames for the complete rollout.', items: [
        { src: '/projects/amood-cover.webp', alt: 'Amood Father’s Day campaign cover', label: 'Campaign cover' },
        { alt: 'Amood social media placeholder', label: 'Social sequence', tone: 'orange' },
        { alt: 'Amood final application placeholder', label: 'Final applications', tone: 'blue' },
      ] },
    ],
  },
  {
    id: '09', slug: 'grupo-magic-annual-report', title: 'Grupo Magic — Annual Report',
    categories: ['Editorial Design'], services: ['Editorial', 'Art Direction'],
    summary: 'An annual report system that turns complex information into a coherent, branded editorial experience.',
    theme: 'blue', coverClass: 'cover-magic', coverImage: '/projects/grupo-magic-cover.webp', featureSize: 'standard',
    sourceUrl: 'https://www.behance.net/gallery/247710699/TR-Anual-Grupo-Magic',
    gallery: [
      { type: 'chapter', eyebrow: 'EDITORIAL SYSTEM', title: 'Information with rhythm and hierarchy.', body: 'The case is ready for grid development, typographic decisions, data pages and the final publication.' },
      { type: 'carousel', title: 'Editorial sequence', description: 'Navigate through the cover and future internal spreads.', items: [
        { src: '/projects/grupo-magic-cover.webp', alt: 'Grupo Magic annual report cover', label: 'Annual report cover' },
        { alt: 'Editorial grid placeholder', label: 'Grid & hierarchy', tone: 'paper' },
        { alt: 'Data spread placeholder', label: 'Data spreads', tone: 'blue' },
      ] },
    ],
  },
  {
    id: '10', slug: 'hav-burguers', title: 'Hav Burguers',
    categories: ['Branding', 'Food'], services: ['Identity', 'Packaging'],
    summary: 'A playful food identity built to remain distinctive from storefront to packaging and digital ordering.',
    theme: 'dark', coverClass: 'cover-hav', coverImage: '/projects/hav-burguers-cover.webp', featureSize: 'standard',
    sourceUrl: 'https://www.behance.net/gallery/87215837/Hav-Burguers',
    gallery: [
      { type: 'chapter', eyebrow: 'BRAND & FOOD', title: 'A visual system with flavor.', body: 'The project structure connects identity, packaging, point of sale and campaign-ready imagery.' },
      { type: 'carousel', title: 'Brand applications', description: 'A horizontal sequence for the complete visual system.', items: [
        { src: '/projects/hav-burguers-cover.webp', alt: 'Hav Burguers project cover', label: 'Project cover' },
        { alt: 'Hav packaging placeholder', label: 'Packaging system', tone: 'orange' },
        { alt: 'Hav retail placeholder', label: 'Retail & digital', tone: 'dark' },
      ] },
    ],
  },
  {
    id: '11', slug: 'escola-bootcamp', title: 'Escola Bootcamp',
    categories: ['Visual Identity', 'Education'], services: ['Identity', 'Digital Design'],
    summary: 'An energetic education brand that organizes learning, community and digital communication into one system.',
    theme: 'orange', coverClass: 'cover-bootcamp', coverImage: '/projects/escola-bootcamp-cover.webp', featureSize: 'wide',
    sourceUrl: 'https://www.behance.net/gallery/233925053/Escola-Bootcamp',
    gallery: [
      { type: 'chapter', eyebrow: 'EDUCATION BRAND', title: 'A system made to teach and activate.', body: 'The case is prepared for identity logic, course architecture, digital screens and campaign assets.' },
      { type: 'carousel', title: 'Learning ecosystem', description: 'From the cover to future screens and communication pieces.', items: [
        { src: '/projects/escola-bootcamp-cover.webp', alt: 'Escola Bootcamp project cover', label: 'Project cover' },
        { alt: 'Bootcamp course system placeholder', label: 'Course system', tone: 'blue' },
        { alt: 'Bootcamp digital experience placeholder', label: 'Digital experience', tone: 'orange' },
      ] },
    ],
  },
  {
    id: '12', slug: 'doux-la-vie', title: 'Doux La Vie',
    categories: ['Branding', 'Packaging'], services: ['Identity', 'Packaging', 'Art Direction'],
    summary: 'A refined brand world designed through delicate contrast, tactile cues and elegant applications.',
    theme: 'paper', coverClass: 'cover-doux', coverImage: '/projects/doux-la-vie-cover.webp', featureSize: 'standard',
    sourceUrl: 'https://www.behance.net/gallery/120513599/Doux-La-Vie',
    gallery: [
      { type: 'chapter', eyebrow: 'BRAND WORLD', title: 'A soft identity with a precise system.', body: 'The case can expand from symbol and typography into packaging, material studies and campaign art direction.' },
      { type: 'carousel', title: 'Brand details', description: 'A sequence ready for identity and tactile applications.', items: [
        { src: '/projects/doux-la-vie-cover.webp', alt: 'Doux La Vie project cover', label: 'Project cover' },
        { alt: 'Doux La Vie material study placeholder', label: 'Materials & texture', tone: 'paper' },
        { alt: 'Doux La Vie packaging placeholder', label: 'Packaging applications', tone: 'orange' },
      ] },
    ],
  },
];
