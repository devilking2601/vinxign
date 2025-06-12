'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Head from 'next/head';

const teamDetails = {
  'devesh-gurjar': {
    name: "Devesh Gurjar",
    position: "Founder and Chief Executive Officier",
    img: "/images/Devesh.webp",
    vision: "The goal isn't just to build apps or companies—it's to build tools that help people grow, express themselves, and feel seen.",
    linkedin: "https://www.linkedin.com/in/devesh-gurjar",
    email: "dev25.gurjar@gmail.com",
    intro: `Devesh Gurjar is a young entrepreneur driven by a desire to create meaningful and accessible digital experiences. As the Founder and CEO of Vinxign Media Private Limited, he leads with a clear vision: to build technology that serves people, empowers communities, and brings positive change.`,
    background: `Currently pursuing a B.A. (Hons.) in Political Science at the University of Delhi, he balances his academic journey with a deep commitment to innovation and social impact. With no formal background in technology, he taught himself coding, design, and product development—motivated by a simple belief that solutions should be built by those who truly care about the people they're meant to serve. Through patience, perseverance, and purpose, he began shaping Vinxign not just as a platform, but as a reflection of inclusive thinking and long-term value.`,
    highlights: [
      "Undergraduate student at University of Delhi",
      "Self-taught in technology and digital product development",
      "Founder of Vinxign Media Private Limited",
      "Focused on accessibility, especially for the deaf community",
      "Advocates for ethical innovation and youth-driven change",
    ],
  },
  'vishwesh-gurjar': {
    name: "Vishwesh Gurjar",
    position: "Director & Community Representative",
    img: "/images/vishu.webp",
    vision: "Being deaf isn't a barrier—it's a perspective. I bring our world to the table, so technology can finally listen to us.",
    linkedin: "",
    email: "",
    intro: `Vishwesh Gurjar is the heart of Vinxign's mission—representing the very community the platform serves. As a proud deaf individual, he plays a pivotal role as the Director and Community Representative, ensuring every product decision is rooted in lived experience and community feedback.`,
    background: `Vishwesh holds a Bachelor's degree in Commerce (B.Com) and brings deep insight into the everyday challenges faced by the deaf community. His journey reflects strength, clarity, and an unshakable commitment to inclusion. Acting as the direct bridge between Vinxign and the deaf community, he listens, learns, and leads—offering real-world insights that guide our product, accessibility, and communication strategies.`,
    highlights: [
      "Graduated B.Com with a focus on communication and inclusion",
      "Deaf leader and core voice of the community at Vinxign",
      "Acts as the ground-level link between product teams and deaf users",
      "Guides feature decisions with real-world deaf experiences",
      "Advocates for accessibility-first technology and authentic representation",
    ],
  },
  'dhawal-khope': {
    name: "Dhawal Khope",
    position: "Chief Designing Officer & Creative Head",
    img: "/images/dhawal.webp",
    vision: "Design isn't just what it looks like—it's how it moves, how it feels, and how it speaks without saying a word.",
    linkedin: "",
    email: "",
    intro: `Dhawal Khope is the visual force behind Vinxign's vibrant presence. As the Chief Designing Officer and Creative Head, he leads everything from motion graphics to app UI/UX design with a natural flair for creativity that defies his age.`,
    background: `At just 18 years old, Dhawal recently completed his schooling, but his talent is already far beyond classroom boundaries. Without formal design training, he mastered animation, visual storytelling, and brand aesthetics through self-learning and constant experimentation. From creating intuitive app flows to crafting captivating animations, he ensures every frame of Vinxign is meaningful and memorable—built with the deaf community's needs at heart.`,
    highlights: [
      "Completed high school in 2024",
      "Chief Designing Officer at Vinxign",
      "Heads animation, interface design, and brand visuals",
      "Self-taught in tools like After Effects, Figma, and UI software",
      "Believes in design that includes, communicates, and empowers",
    ],
  },
};

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const member = teamDetails[params.slug as keyof typeof teamDetails];
  if (!member) return notFound();
  const isDevesh = params.slug === 'devesh-gurjar';
  return (
    <>
      {isDevesh && (
        <Head>
          <title>Devesh Gurjar - CEO & Founder | Vinxign</title>
          <meta name="description" content="Devesh Gurjar is the CEO & Founder of Vinxign Media Private Limited. Young entrepreneur, accessibility advocate, and leader in digital innovation." />
          <meta property="og:title" content="Devesh Gurjar - CEO & Founder | Vinxign" />
          <meta property="og:description" content="Devesh Gurjar is the CEO & Founder of Vinxign Media Private Limited. Young entrepreneur, accessibility advocate, and leader in digital innovation." />
          <meta property="og:image" content="https://vinxign.com/images/Devesh.webp" />
          <meta property="og:type" content="profile" />
          <meta property="og:url" content="https://vinxign.com/team/devesh-gurjar" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Devesh Gurjar - CEO & Founder | Vinxign" />
          <meta name="twitter:description" content="Devesh Gurjar is the CEO & Founder of Vinxign Media Private Limited. Young entrepreneur, accessibility advocate, and leader in digital innovation." />
          <meta name="twitter:image" content="https://vinxign.com/images/Devesh.webp" />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Devesh Gurjar',
            jobTitle: 'Founder and Chief Executive Officier',
            image: 'https://vinxign.com/images/Devesh.webp',
            url: 'https://vinxign.com/team/devesh-gurjar',
            sameAs: [
              'https://www.linkedin.com/in/devesh-gurjar',
              'mailto:dev25.gurjar@gmail.com',
            ],
            worksFor: {
              '@type': 'Organization',
              name: 'Vinxign Media Private Limited',
              url: 'https://vinxign.com',
            },
            description: 'Devesh Gurjar is the CEO & Founder of Vinxign Media Private Limited. Young entrepreneur, accessibility advocate, and leader in digital innovation.'
          }) }} />
        </Head>
      )}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4"
      >
        <div className="w-full max-w-5xl bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 mt-16" style={{backdropFilter: 'blur(8px)'}}>
          {/* Left 40% */}
          <div className="md:w-2/5 w-full flex flex-col items-center md:items-start gap-6">
            <div className="relative w-full h-80 mb-2">
              <div className="absolute inset-0 rounded-2xl p-1 bg-gradient-to-r from-[#8b5cf6] to-[#ec4899]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-2xl border-4 border-white dark:border-gray-800 shadow-lg"
                />
              </div>
            </div>
            <div className="font-bold text-2xl text-gray-900 dark:text-white text-center md:text-left w-full">{member.name}</div>
            <div className="text-[#8b5cf6] dark:text-[#ec4899] text-lg font-medium text-center md:text-left w-full">{member.position}</div>
            <div className="italic text-gray-600 dark:text-gray-300 text-base text-center md:text-left w-full">{member.vision}</div>
            <div className="flex gap-4 mt-2 w-full justify-center md:justify-start">
              {member.linkedin && member.linkedin !== "" && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-semibold">LinkedIn</a>
              )}
              {member.email && member.email !== "" && (
                <a href={`mailto:${member.email}`} className="text-blue-600 dark:text-blue-400 underline font-semibold">Email</a>
              )}
            </div>
          </div>
          {/* Right 60% */}
          <div className="md:w-3/5 w-full flex flex-col gap-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Introduction</h2>
              <p className="text-gray-700 dark:text-gray-200">{member.intro}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Background</h2>
              <p className="text-gray-700 dark:text-gray-200">{member.background}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Key Highlights</h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200">
                {member.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
} 
