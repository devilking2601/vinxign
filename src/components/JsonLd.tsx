'use client';

import React from 'react';

export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vinxign',
    url: 'https://vinxign.com',
    logo: 'https://vinxign.com/images/logo.webp',
    description: "Vinxign is the world's first all-in-one digital platform purpose-built to empower and uplift the global deaf community."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 