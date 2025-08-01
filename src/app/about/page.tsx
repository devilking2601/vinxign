'use client';
import React from 'react';
import { motion } from 'framer-motion';

const principles = [
  {
    title: 'Inclusion First',
    desc: 'Every feature is designed with the deaf community at the center.',
  },
  {
    title: 'Visual Communication',
    desc: 'Prioritize sign language, visuals, and motion over sound.',
  },
  {
    title: 'Empower Through Expression',
    desc: 'Encourage storytelling, creativity, and authentic self-representation.',
  },
  {
    title: 'Economic Opportunity',
    desc: 'Equip users to earn, grow, and succeed independently.',
  },
  {
    title: 'Safe Community Space',
    desc: 'Build a positive, respectful environment for all voices to thrive.',
  },
  {
    title: 'Representation Matters',
    desc: 'Amplify deaf creators, culture, and community impact.',
  },
  {
    title: 'Simplicity & Clarity',
    desc: 'Ensure navigation and interaction are intuitive and barrier-free.',
  },
  {
    title: 'Support Deaf-Owned Brands',
    desc: 'Create visibility and growth opportunities for deaf businesses.',
  },
  {
    title: 'Tech with Purpose',
    desc: 'Innovate only in ways that serve real needs and long-term empowerment.',
  },
  {
    title: 'Protect User Privacy',
    desc: 'Secure all personal and financial data with transparency and care.',
  },
];

export default function AboutPage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4 relative"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">Overview</h1>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-200 bg-gradient-to-br from-[#8b5cf6]/10 to-[#ec4899]/10 dark:from-[#8b5cf6]/20 dark:to-[#ec4899]/20 rounded-2xl p-6 shadow-lg">
              <p className="text-center"><strong>Vinxign</strong> is the world's first all-in-one digital platform purpose-built to empower and uplift the global deaf community. In a digital world that often overlooks accessibility, <strong>Vinxign stands out</strong> by providing a fully inclusive space where deaf individuals can connect, create, and thrive.</p>
              <p className="text-center">Our platform combines <strong>social networking, content creation, learning, and e-commerce</strong> into one seamless experience. With features tailored specifically for visual communication and deaf-friendly interaction, <strong>Vinxign is more than just a tech product—it's a movement</strong> toward equity, representation, and economic opportunity.</p>
              <p className="text-center">Whether it's sharing a story, creating <strong>monetizable content</strong>, learning new skills, or supporting deaf-owned businesses, users will find everything they need to grow—<strong>personally, professionally, and socially</strong>—right here on Vinxign.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Vision</h2>
            <div className="bg-gradient-to-br from-[#8b5cf6]/10 to-[#ec4899]/10 dark:from-[#8b5cf6]/20 dark:to-[#ec4899]/20 rounded-2xl p-6 shadow-lg text-lg text-gray-700 dark:text-gray-200 text-center">
              To empower the deaf community by making digital life fully accessible, inclusive, and equitable.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Mission</h2>
            <div className="bg-gradient-to-br from-[#8b5cf6]/10 to-[#ec4899]/10 dark:from-[#8b5cf6]/20 dark:to-[#ec4899]/20 rounded-2xl p-6 shadow-lg text-lg text-gray-700 dark:text-gray-200 text-center">
              To revolutionize digital access for the deaf through an all-in-one inclusive platform.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Our Principles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {principles.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#8b5cf6]/10 to-[#ec4899]/10 dark:from-[#8b5cf6]/20 dark:to-[#ec4899]/20 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-xl font-semibold text-[#8b5cf6] dark:text-[#ec4899] mb-2 text-center">{p.title}</h3>
                  <p className="text-gray-700 dark:text-gray-200 text-center">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
} 