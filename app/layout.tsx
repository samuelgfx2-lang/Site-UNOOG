import type { Metadata } from 'next';
import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';

const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

const display = Space_Grotesk({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: 'Samuel Unoog — Multidisciplinary Designer',
  description:
    'Portfolio of Samuel Unoog, a multidisciplinary designer based in São Paulo working across branding, visual identity, packaging, campaigns, 3D and illustration.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: 'Samuel Unoog — Multidisciplinary Designer',
    description:
      'Portfolio of Samuel Unoog, a multidisciplinary designer based in São Paulo working across branding, visual identity, packaging, campaigns, 3D and illustration.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Samuel Unoog — Multidisciplinary Designer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuel Unoog — Multidisciplinary Designer',
    description:
      'Portfolio of Samuel Unoog, a multidisciplinary designer based in São Paulo working across branding, visual identity, packaging, campaigns, 3D and illustration.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
