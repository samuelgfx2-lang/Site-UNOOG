export const profile = {
  name: 'Samuel Nogueira',
  moniker: 'Unoog',
  role: 'Multidisciplinary Designer',
  location: 'São Paulo — Brazil',
  availability: null as string | null,
  canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL ?? null,
  contact: {
    email: null as string | null,
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
      'Samuel Nogueira, also known as Unoog, is a graphic designer based in São Paulo. For more than ten years, he has worked across visual identity, branding, packaging and campaigns.',
    ],
  },
} as const;

export const experience = [
  { company: 'Sadhu', role: 'Packing & Graphic Designer' },
  { company: 'Sanluk', role: 'Art Director / Graphic Designer' },
  { company: 'Abduzido', role: 'Brand & Graphic Designer' },
  {
    company: 'Independent / Freelance Designer',
    role: 'Branding, visual identity, packaging, campaigns and digital design',
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

export const tools = ['Photoshop', 'Illustrator', 'Lightroom'] as const;

export const visualLab: ReadonlyArray<never> = [];
