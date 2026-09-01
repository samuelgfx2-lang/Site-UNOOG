export const profile = {
  name: 'Samuel Nogueira',
  moniker: 'Unoog',
  role: 'Multidisciplinary Designer',
  location: 'São Paulo — Brazil',
  availability: null as string | null,
  canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL ?? null,
  contact: {
    email: 'unoogfx@gmail.com' as string | null,
    behance: 'https://www.behance.net/Unoog',
    instagram: 'https://www.instagram.com/unoog/',
    linkedin: null as string | null,
  },
  about: {
    pt: [
      'Sou Samuel Nogueira, também conhecido como Unoog — designer gráfico de São Paulo. Há mais de 10 anos, crio projetos de identidade visual, branding, embalagens e campanhas para marcas do Brasil e de diferentes partes do mundo.',
      'Continuo expandindo minha linguagem criativa por meio do 3D, da animação, da ilustração e de projetos independentes de design gráfico.',
      'Meu trabalho busca ajudar marcas a cultivar cultura, personalidade e relevância. Acredito em romper com ideias limitantes para expandir universos, fortalecer propósitos e construir marcas autênticas e inovadoras — marcas que valorizam as pessoas, suas histórias e seus valores.',
    ],
    en: [
      "I'm Samuel, Unoog — a graphic designer from São Paulo. For over 10 years I've been creating visual identity, branding, packaging, and campaigns for brands in Brazil and around the world.",
      'I continue to expand my language through 3D, animation, illustration, and independent design and illustration projects.',
      'My work aims to help brands cultivate culture, personality, and purpose. I believe in breaking down limiting ideas to expand and strengthen purpose, building authentic brands that value people, their stories, and their values.',
    ],
  },
} as const;

export const experience = [
  { company: 'Sadhu', role: 'Packaging & Graphic Designer', date: '2026 — CURRENT' },
  { company: 'Sanluk', role: 'Art Director / Graphic Designer', date: '2025' },
  { company: 'Abduzido', role: 'Brand & Graphic Designer', date: '2025' },
  {
    company: 'Independent / Freelance Designer',
    role: 'Branding, visual identity, packaging, campaigns and digital design',
    date: '2012 — 2024',
  },
] as const;

export const capabilities = [
  'Branding',
  'Visual Identity',
  'Packaging',
  'Art Direction',
  'Campaigns',
  'Editorial Design',
  'Digital Design',
  'Social Media',
  '3D & Motion',
  'Illustration',
] as const;

export const tools = [
  'Photoshop',
  'Illustrator',
  'Lightroom',
  'Cinema 4D',
  'Unreal Engine',
  'After Effects',
  'Figma',
] as const;

export const workflow = [
  'Advanced Task Management',
  'Process Building',
  'AI Systems',
  'ClickUp',
  'Notion',
] as const;

export const visualLab: ReadonlyArray<never> = [];
