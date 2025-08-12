import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import ContactLinks from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Vinxign - Communication Without Barriers',
  description: 'Vinxign is the world\'s first all-in-one digital platform purpose-built to empower and uplift the global deaf community.',
  openGraph: {
    title: 'Vinxign - Communication Without Barriers',
    description: 'Vinxign is the world\'s first all-in-one digital platform purpose-built to empower and uplift the global deaf community.',
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
    description: 'Vinxign is the world\'s first all-in-one digital platform purpose-built to empower and uplift the global deaf community.',
    images: ['/images/logo.webp'],
  },
};

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900">
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="team">
        <Team />
        <ContactLinks />
      </div>
      <div id="contact" className="bg-gray-50 dark:bg-gray-900">
        <Footer />
      </div>
    </main>
  );
} 