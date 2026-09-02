import type { Metadata } from 'next';
import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';

const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://unoog.online';
const siteTitle = 'UNOOG — Samuel Nogueira | Multidisciplinary Designer';
const siteDescription =
  'Portfólio de Samuel Nogueira, designer multidisciplinar em São Paulo, com projetos de branding, identidade visual, embalagens, campanhas, 3D e ilustração.';

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
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'UNOOG',
    locale: 'pt_BR',
    title: siteTitle,
    description: siteDescription,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: siteTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
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
