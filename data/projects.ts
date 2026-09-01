export type ProjectTheme = 'blue' | 'orange' | 'dark' | 'paper';

export type ProjectModule =
  | { type: 'color'; label: string; tone: ProjectTheme }
  | { type: 'text'; eyebrow: string; body: string }
  | { type: 'asset-placeholder'; label: string; orientation: 'landscape' | 'portrait' };

export type Project = {
  id: string;
  slug: string;
  title: string;
  year?: string;
  client?: string;
  categories: string[];
  services: string[];
  summary: string;
  theme: ProjectTheme;
  coverClass: string;
  featured: boolean;
  gallery: ProjectModule[];
};

export const projects: Project[] = [
  {
    id: '01', slug: 'unoog-visual-identity', title: 'UNOOG', year: '2025',
    categories: ['Visual Identity', 'Branding'], services: ['Identity', 'Art Direction'],
    summary: 'An identity system built from contrast, motion and a modular six-arm symbol.',
    theme: 'blue', coverClass: 'cover-unoog', featured: true,
    gallery: [
      { type: 'color', label: 'IDENTITY / 001', tone: 'blue' },
      { type: 'asset-placeholder', label: 'Brand application imagery', orientation: 'landscape' },
    ],
  },
  {
    id: '02', slug: 'maria-helena', title: 'Dra. Maria Helena',
    categories: ['Visual Identity'], services: ['Identity'],
    summary: 'A visual identity case awaiting its definitive image sequence and confirmed credits.',
    theme: 'paper', coverClass: 'cover-maria', featured: true,
    gallery: [{ type: 'asset-placeholder', label: 'Project cover and case images', orientation: 'portrait' }],
  },
  {
    id: '03', slug: 'elite-barbershop', title: 'Elite Barbershop',
    categories: ['Visual Identity'], services: ['Identity'],
    summary: 'A selected identity project. Final project copy and media remain configurable.',
    theme: 'dark', coverClass: 'cover-elite', featured: true,
    gallery: [{ type: 'asset-placeholder', label: 'Project media', orientation: 'landscape' }],
  },
  {
    id: '04', slug: 'sadhu-events', title: 'Sadhu — Events',
    categories: ['Visual Identity', 'Events'], services: ['Identity', 'Graphic Design'],
    summary: 'Visual identity for events created within Sadhu.',
    theme: 'orange', coverClass: 'cover-sadhu', featured: true,
    gallery: [{ type: 'asset-placeholder', label: 'Event identity system', orientation: 'landscape' }],
  },
  {
    id: '05', slug: 'sadhu-mundial-champions-2026', title: 'Mundial Champions 2026',
    categories: ['Campaign', 'Graphic Design'], services: ['Campaign', 'Graphic Design'],
    summary: 'Campaign work developed for Sadhu. Final case assets are pending.',
    theme: 'blue', coverClass: 'cover-champions', featured: true,
    gallery: [{ type: 'asset-placeholder', label: 'Campaign visuals', orientation: 'portrait' }],
  },
  {
    id: '06', slug: 'unimed-hospital-10-de-julho', title: 'Unimed / Hospital 10 de Julho',
    categories: ['Graphic Design'], services: ['Graphic Design'],
    summary: 'Selected graphic design work. Credits and complete media remain to be confirmed.',
    theme: 'paper', coverClass: 'cover-unimed', featured: true,
    gallery: [{ type: 'asset-placeholder', label: 'Project documentation', orientation: 'landscape' }],
  },
  {
    id: '07', slug: 'hypertrophy-academy', title: 'Hypertrophy Academy',
    categories: ['Branding'], services: ['Branding'],
    summary: 'A branding project selected for the portfolio. Final imagery is pending.',
    theme: 'orange', coverClass: 'cover-hypertrophy', featured: true,
    gallery: [{ type: 'asset-placeholder', label: 'Brand system imagery', orientation: 'landscape' }],
  },
  {
    id: '08', slug: 'burger-grill', title: 'Burger Grill',
    categories: ['Branding', 'Packaging'], services: ['Branding', 'Packaging'],
    summary: 'A selected food and packaging project. Project details remain editable.',
    theme: 'dark', coverClass: 'cover-burger', featured: true,
    gallery: [{ type: 'asset-placeholder', label: 'Packaging and applications', orientation: 'portrait' }],
  },
];
