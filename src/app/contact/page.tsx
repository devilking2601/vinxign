import React from 'react';
import { Metadata } from 'next';
import ContactLinks from '@/components/ContactForm';

export const metadata: Metadata = {
  title: "Contact Us | Vinxign",
  description: "Reach out to Vinxign for business inquiries, collaborations, or support. We're here to connect and create together.",
  openGraph: {
    title: "Contact Us | Vinxign",
    description: "Reach out to Vinxign for business inquiries, collaborations, or support. We're here to connect and create together.",
    url: "https://vinxign.com/contact",
    siteName: "Vinxign",
    images: [
      {
        url: "/images/logo.webp",
        width: 512,
        height: 512,
        alt: "Vinxign Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Vinxign",
    description: "Reach out to Vinxign for business inquiries, collaborations, or support. We're here to connect and create together.",
    images: ["/images/logo.webp"],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h1>
          <div className="space-y-4 text-lg text-gray-700 dark:text-gray-200 bg-gradient-to-br from-[#8b5cf6]/10 to-[#ec4899]/10 dark:from-[#8b5cf6]/20 dark:to-[#ec4899]/20 rounded-2xl p-6 shadow-lg">
            <p className="text-center">
              Reach out to Vinxign for business inquiries, collaborations, or support. We're here to connect and create together.
            </p>
          </div>
        </div>
        
        <ContactLinks />
      </div>
    </div>
  );
}
