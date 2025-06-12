import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';
import JsonLd from '@/components/JsonLd';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://vinxign.com'),
  title: 'Vinxign - Communication Without Barriers',
  description: 'Vinxign is the world’s first all-in-one digital platform purpose-built to empower and uplift the global deaf community.',
  keywords: 'Vinxign, digital innovation, AI, technology solutions, Social Media for Deaf, Deaf, Deaf Community, Devesh Gurjar, Vishwesh Gurjar',
  authors: [{ name: 'Vinxign Media Private Limited' }],
  openGraph: {
    title: 'Vinxign - Communication Without Barriers',
    description: 'Vinxign is the world’s first all-in-one digital platform purpose-built to empower and uplift the global deaf community.',
    url: 'https://vinxign.com',
    siteName: 'Vinxign',
    images: [
      {
        url: '/images/logo.webp',
        width: 800,
        height: 600,
        alt: 'Vinxign Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinxign - Communication Without Barriers',
    description: 'Vinxign is the world’s first all-in-one digital platform purpose-built to empower and uplift the global deaf community.',
    images: ['/images/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/images/logo.webp',
    apple: '/images/logo.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/images/logo.webp" as="image" type="image/webp" />
        <link rel="canonical" href="https://vinxign.com" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="sitemap" href="/sitemap.xml" />
        <JsonLd />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900">
            <Navbar />
            <main className="pt-16">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
} 
