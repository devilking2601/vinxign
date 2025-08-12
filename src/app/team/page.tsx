import React from 'react';
import { Metadata } from 'next';
import TeamContent from '@/components/TeamContent';

export const metadata: Metadata = {
  title: "Meet Our Team | Vinxign",
  description: "Get to know the passionate innovators behind Vinxign — a team driven by creativity, technology, and the vision to shape the future.",
  openGraph: {
    title: "Meet Our Team | Vinxign",
    description: "Get to know the passionate innovators behind Vinxign — a team driven by creativity, technology, and the vision to shape the future.",
    url: "https://vinxign.com/team",
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
    title: "Meet Our Team | Vinxign",
    description: "Get to know the passionate innovators behind Vinxign — a team driven by creativity, technology, and the vision to shape the future.",
    images: ["/images/logo.webp"],
  },
};

export default function TeamPage() {
  return <TeamContent />;
} 