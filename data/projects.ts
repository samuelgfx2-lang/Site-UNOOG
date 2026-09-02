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
  | { type: 'timeline'; title: string; steps: string[] }
  | { type: 'link-grid'; title: string; description: string; items: { label: string; href: string }[] };

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
  coverLabel?: string;
  sourceUrl?: string;
  featureSize?: 'wide' | 'standard';
  gallery: ProjectModule[];
};

export const initialProjectCount = 7;

export const projects: Project[] = [
  {
    id: '01', slug: 'unoog-visual-identity', title: 'UNOOG', year: '2025',
    categories: ['Visual Identity', 'Branding'], services: ['Identity', 'Art Direction', 'Illustration'],
    summary: 'A living identity built from contrast, motion, expressive characters and a modular symbol.',
    theme: 'blue', coverClass: 'cover-unoog', featureSize: 'wide',
    sourceUrl: 'https://www.behance.net/gallery/217372399/Unoog',
    gallery: [
      { type: 'chapter', eyebrow: 'BRAND SYSTEM', title: 'A character-led identity designed to move.', body: 'Wordmark, symbol, color and illustrated characters form one flexible visual language.' },
      { type: 'carousel', title: 'Character system', description: 'Three expressions from the UNOOG identity.', items: [
        { src: '/brand/characters/head-primary.svg', alt: 'UNOOG character in orange and blue', label: 'Primary character' },
        { src: '/brand/characters/head-orange.svg', alt: 'UNOOG character in tonal orange', label: 'Tonal character' },
        { src: '/brand/characters/head-light.svg', alt: 'UNOOG character with cream highlights', label: 'Light character' },
      ] },
    ],
  },
  {
    id: '02', slug: 'sadhu', title: 'Sadhu', year: '2026 — CURRENT',
    categories: ['Packaging', 'Campaigns'], services: ['Art Direction', 'Packaging', 'Graphic Design'],
    summary: 'One parent case that brings product collections, campaigns and packaging chapters together.',
    theme: 'orange', coverClass: 'cover-sadhu', coverImage: '/projects/cases/sadhu-cover.webp', featureSize: 'standard',
    sourceUrl: 'https://unoog.myportfolio.com/sadhu-mundial-champions-2026',
    gallery: [
      { type: 'chapter', eyebrow: 'ONGOING BRAND PARTNERSHIP', title: 'One brand. Many product worlds.', body: 'Sadhu is organized as a single expandable case: each collection becomes a short visual chapter instead of a separate portfolio project.' },
      { type: 'carousel', title: 'Mundial Champions 2026', description: 'Country-led graphics applied from the booklet dieline to the retail display.', items: [
        { src: '/projects/cases/sadhu-mundial-brasil.webp', alt: 'Sadhu Mundial Champions Brazil product set', label: 'Brazil collection' },
        { src: '/projects/cases/sadhu-mundial-display.webp', alt: 'Sadhu Mundial Champions retail display', label: 'Retail display' },
      ] },
      { type: 'carousel', title: 'Holi Colors & product design', description: 'A colorful packaging system extended across campaign and product information.', items: [
        { src: '/projects/cases/sadhu-holi-hero.webp', alt: 'Sadhu Holi Colors campaign visual', label: 'Campaign key visual' },
        { src: '/projects/cases/sadhu-holi-product.webp', alt: 'Sadhu Holi Colors product stack', label: 'Product range' },
        { src: '/projects/cases/sadhu-tray.webp', alt: 'Sadhu product sheet for traditional trays', label: 'Product communication' },
      ] },
      { type: 'link-grid', title: 'Project context', description: 'Selected live references for the brand and collection.', items: [
        { label: 'Mundial Champions case', href: 'https://unoog.myportfolio.com/sadhu-mundial-champions-2026' },
        { label: 'Sadhu product universe', href: 'https://www.sadhupaper.com.br/' },
      ] },
    ],
  },
  {
    id: '03', slug: 'unimed-hospital-10-de-julho', title: 'Unimed',
    categories: ['Graphic Design', 'Campaign'], services: ['Campaign', 'Graphic Design'],
    summary: 'An institutional campaign translated into a clear and flexible visual system.',
    theme: 'paper', coverClass: 'cover-unimed', coverImage: '/projects/unimed-cover.webp', featureSize: 'standard',
    sourceUrl: 'https://www.behance.net/gallery/248475737/Unimed-Hospital-10-Julho-Somos-todos-Nota-10',
    gallery: [
      { type: 'chapter', eyebrow: 'INSTITUTIONAL CAMPAIGN', title: 'A message designed to scale.', body: 'The project connects a direct celebratory idea with consistent campaign applications.' },
      { type: 'carousel', title: 'Campaign identity', description: 'The selected cover introduces the communication system.', items: [
        { src: '/projects/unimed-cover.webp', alt: 'Unimed campaign cover', label: 'Campaign cover' },
      ] },
    ],
  },
  {
    id: '04', slug: 'maria-helena', title: 'Dra. Maria Helena',
    categories: ['Visual Identity'], services: ['Strategy', 'Identity', 'Applications'],
    summary: 'A precise and human identity balancing professional authority with an approachable voice.',
    theme: 'paper', coverClass: 'cover-maria', coverImage: '/projects/maria-helena-cover.webp', featureSize: 'standard',
    sourceUrl: 'https://www.behance.net/gallery/250164147/Advogada-Dra-Maria-Helena-Identidade-Visual',
    gallery: [
      { type: 'chapter', eyebrow: 'VISUAL IDENTITY', title: 'Professional without becoming distant.', body: 'Typography, symbol and tone of voice create a confident legal identity with a personal presence.' },
      { type: 'carousel', title: 'Identity essentials', description: 'A concise look at the visual logic and personality.', items: [
        { src: '/projects/cases/maria-intro.webp', alt: 'Maria Helena identity introduction', label: 'Tone of voice' },
        { src: '/projects/cases/maria-type.webp', alt: 'Maria Helena typographic system', label: 'Typography' },
        { src: '/projects/cases/maria-symbol.webp', alt: 'Maria Helena symbol application', label: 'Symbol' },
      ] },
    ],
  },
  {
    id: '05', slug: 'esperanca-restaurante', title: 'Esperança Restaurante',
    categories: ['Branding', 'Hospitality'], services: ['Identity', 'Art Direction'],
    summary: 'A restaurant identity shaped around warmth, gathering and an expressive culinary presence.',
    theme: 'orange', coverClass: 'cover-esperanca', coverLabel: 'ER', featureSize: 'standard',
    gallery: [
      { type: 'chapter', eyebrow: 'RESTAURANT IDENTITY', title: 'A warm place with a clear point of view.', body: 'A short case focused on the brand idea, its visual voice and the guest-facing experience.' },
    ],
  },
  {
    id: '06', slug: 'grupo-magic', title: 'Grupo Magic',
    categories: ['Editorial', 'Brand Experience'], services: ['Art Direction', 'Graphic Design', 'Campaign'],
    summary: 'A broad creative partnership spanning editorial systems, events and branded experiences.',
    theme: 'blue', coverClass: 'cover-magic', coverImage: '/projects/grupo-magic-cover.webp', featureSize: 'wide',
    sourceUrl: 'https://www.behance.net/gallery/247710699/TR-Anual-Grupo-Magic',
    gallery: [
      { type: 'chapter', eyebrow: 'MULTIPLE DELIVERABLES', title: 'One brand across moments and formats.', body: 'The case groups annual-report graphics, event communication and physical pieces into one coherent visual story.' },
      { type: 'carousel', title: 'Brand experience', description: 'A compact selection from welcome kit to event materials.', items: [
        { src: '/projects/cases/magic-box.webp', alt: 'Grupo Magic welcome box', label: 'Welcome kit' },
        { src: '/projects/cases/magic-lanyard.webp', alt: 'Grupo Magic event lanyard', label: 'Event system' },
        { src: '/projects/cases/magic-buttons.webp', alt: 'Grupo Magic campaign buttons', label: 'Campaign objects' },
        { src: '/projects/cases/magic-shirt.webp', alt: 'Grupo Magic event shirt', label: 'Event apparel' },
      ] },
    ],
  },
  {
    id: '07', slug: 'hypertrophy-academy', title: 'Hypertrophy',
    categories: ['Branding'], services: ['Brand Strategy', 'Identity'],
    summary: 'A performance-focused brand shaped around discipline, progression and direct training culture.',
    theme: 'orange', coverClass: 'cover-hypertrophy', coverImage: '/projects/hypertrophy-cover.webp', featureSize: 'standard',
    sourceUrl: 'https://www.behance.net/gallery/233925351/Hypertrophy-Academy',
    gallery: [
      { type: 'chapter', eyebrow: 'BRAND IDENTITY', title: 'Built around progression.', body: 'A direct identity system linking training culture, discipline and everyday performance.' },
    ],
  },
  {
    id: '08', slug: 'elite-barbershop', title: 'Elite',
    categories: ['Visual Identity'], services: ['Identity', 'Art Direction', 'Environmental'],
    summary: 'A bold barbershop identity connecting craft, atmosphere and customer experience.',
    theme: 'dark', coverClass: 'cover-elite', coverImage: '/projects/elite-barbershop-cover.webp', featureSize: 'standard',
    sourceUrl: 'https://www.behance.net/gallery/248736481/Elite-Barbershop-ID-Visual',
    gallery: [
      { type: 'chapter', eyebrow: 'BARBERSHOP IDENTITY', title: 'Classic codes, sharper expression.', body: 'The system moves from logo to service menu, environment and staff apparel.' },
      { type: 'carousel', title: 'Physical touchpoints', description: 'Three applications extracted from the original presentation.', items: [
        { src: '/projects/cases/elite-stationery.webp', alt: 'Elite Barbershop service menu and stationery', label: 'Service system' },
        { src: '/projects/cases/elite-capes.webp', alt: 'Elite Barbershop capes', label: 'Uniform applications' },
        { src: '/projects/cases/elite-detail.webp', alt: 'Elite Barbershop cape detail', label: 'Identity detail' },
      ] },
    ],
  },
  {
    id: '09', slug: 'botoadvance', title: 'Botoadvance',
    categories: ['Branding', 'Digital'], services: ['Identity', 'Digital Design'],
    summary: 'A technology-led identity designed for clarity, progression and a confident digital presence.',
    theme: 'blue', coverClass: 'cover-botoadvance', coverLabel: 'BA', featureSize: 'standard',
    gallery: [
      { type: 'chapter', eyebrow: 'DIGITAL BRAND', title: 'Designed to signal progress.', body: 'A compact case centered on identity, interface language and scalable digital use.' },
    ],
  },
  {
    id: '10', slug: 'abduzido', title: 'Abduzido',
    categories: ['Branding', 'Strategy'], services: ['Brand Strategy', 'Identity', 'Applications'],
    summary: 'A complete identity universe built around curiosity, new perspectives and the unknown.',
    theme: 'dark', coverClass: 'cover-abduzido', coverImage: '/projects/cases/abduzido-cover.webp', featureSize: 'standard',
    gallery: [
      { type: 'chapter', eyebrow: 'BRAND IDENTITY', title: 'A visual system from another point of view.', body: 'The identity combines an alien-inspired mark, controlled color and adaptable applications.' },
      { type: 'carousel', title: 'Identity in use', description: 'A concise extraction from the original 50-page brand presentation.', items: [
        { src: '/projects/cases/abduzido-system.webp', alt: 'Abduzido logo color system', label: 'Logo system' },
        { src: '/projects/cases/abduzido-mobile.webp', alt: 'Abduzido mobile application', label: 'Digital application' },
        { src: '/projects/cases/abduzido-billboard.webp', alt: 'Abduzido billboard', label: 'Outdoor campaign' },
        { src: '/projects/cases/abduzido-apparel.webp', alt: 'Abduzido apparel collection', label: 'Apparel' },
      ] },
    ],
  },
  {
    id: '11', slug: 'escola-bootcamp', title: 'Bootcamp',
    categories: ['Visual Identity', 'Education'], services: ['Identity', 'Digital Design'],
    summary: 'An energetic education brand organizing learning, community and digital communication.',
    theme: 'orange', coverClass: 'cover-bootcamp', coverImage: '/projects/escola-bootcamp-cover.webp', featureSize: 'wide',
    sourceUrl: 'https://www.behance.net/gallery/233925053/Escola-Bootcamp',
    gallery: [
      { type: 'chapter', eyebrow: 'EDUCATION BRAND', title: 'A system made to teach and activate.', body: 'Identity and digital communication come together in a direct, energetic learning brand.' },
    ],
  },
  {
    id: '12', slug: 'sanluk', title: 'Sanluk',
    categories: ['Art Direction', 'Graphic Design'], services: ['Art Direction', 'Campaigns'],
    summary: 'A flexible graphic direction built to keep everyday communication consistent and recognizable.',
    theme: 'paper', coverClass: 'cover-sanluk', coverLabel: 'SL', featureSize: 'standard',
    gallery: [
      { type: 'chapter', eyebrow: 'ONGOING ART DIRECTION', title: 'Consistency across everyday communication.', body: 'A short selection focused on campaign direction, graphic rhythm and brand continuity.' },
    ],
  },
  {
    id: '13', slug: '3d-projects', title: '3D Projects',
    categories: ['3D', 'Illustration'], services: ['Modeling', 'Lighting', 'Art Direction'],
    summary: 'A selected archive of isometric worlds, environments and low-poly experiments.',
    theme: 'blue', coverClass: 'cover-3d', coverLabel: '3D', featureSize: 'wide',
    gallery: [
      { type: 'chapter', eyebrow: '3D ARCHIVE', title: 'Small worlds, built from every angle.', body: 'Eight concise studies showing modeling, composition, lighting and visual storytelling.' },
      { type: 'link-grid', title: 'Selected 3D studies', description: 'Open any project to see the complete external case.', items: [
        { label: 'Three States — Low Poly', href: 'https://unoog.myportfolio.com/three-states-isometric-low-poly-keira-inspiration' },
        { label: 'Mirror’s Edge Isometric', href: 'https://unoog.myportfolio.com/mirrors-edge-isometric' },
        { label: 'Room V2', href: 'https://unoog.myportfolio.com/room-v2' },
        { label: 'Low Poly Tree', href: 'https://unoog.myportfolio.com/low-poly-tree' },
        { label: 'De Dust', href: 'https://unoog.myportfolio.com/de-dust' },
        { label: 'Super Mario', href: 'https://unoog.myportfolio.com/super-mario' },
        { label: 'Isometric Room', href: 'https://unoog.myportfolio.com/isometric-room' },
        { label: 'Vegan Lotus', href: 'https://unoog.myportfolio.com/vegan-lotus' },
      ] },
    ],
  },
  {
    id: '14', slug: 'image-gallery', title: 'Image Gallery',
    categories: ['Campaigns', 'Image Making'], services: ['Art Direction', 'Graphic Design'],
    summary: 'A visual index for compact campaigns, food projects and independent graphic work.',
    theme: 'orange', coverClass: 'cover-gallery', coverImage: '/projects/cases/image-gallery-cover.webp', coverLabel: 'IMG', featureSize: 'standard',
    gallery: [
      { type: 'chapter', eyebrow: 'VISUAL INDEX', title: 'More images. Less explanation.', body: 'A compact gateway to image-led projects that work best as a fast, varied visual archive.' },
      { type: 'link-grid', title: 'Open a project', description: 'Each item opens its complete external gallery.', items: [
        { label: 'São Paulo — SP', href: 'https://unoog.myportfolio.com/sao-paulo-sp' },
        { label: 'Casa do Óleo', href: 'https://unoog.myportfolio.com/casa-do-oleo' },
        { label: 'Barzin', href: 'https://unoog.myportfolio.com/barzin' },
        { label: 'LB', href: 'https://unoog.myportfolio.com/lb' },
        { label: 'LB Food', href: 'https://unoog.myportfolio.com/lb-food' },
        { label: 'Rota 20', href: 'https://unoog.myportfolio.com/rota-20' },
        { label: 'Anti Corpus', href: 'https://unoog.myportfolio.com/anti-corpus' },
        { label: 'Los Burger', href: 'https://unoog.myportfolio.com/los-burger' },
        { label: 'Coroa Santa 2025', href: 'https://unoog.myportfolio.com/coroa-santa-2025' },
        { label: 'Silva Sales', href: 'https://unoog.myportfolio.com/silva-sales' },
      ] },
    ],
  },
];
