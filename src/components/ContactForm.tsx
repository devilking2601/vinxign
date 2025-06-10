'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const cards = [
  {
    title: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/company/vinxign-media-private-limited/',
    button: 'Go to LinkedIn',
    icon: '/images/logo.webp',
    bg: 'from-[#8b5cf6]/20 to-[#ec4899]/20',
  },
  {
    title: 'Email Us',
    href: 'mailto:vinxign@gmail.com',
    button: 'Send Email',
    icon: '/images/logo.webp',
    bg: 'from-[#ec4899]/20 to-[#8b5cf6]/20',
  },
];

const ContactLinks = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    className="max-w-4xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 gap-8 bg-gray-50 dark:bg-gray-900"
  >
    {cards.map((card) => (
      <motion.a
        key={card.title}
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className={`flex flex-col items-center justify-center bg-gradient-to-br ${card.bg} dark:from-[#8b5cf6]/30 dark:to-[#ec4899]/30 rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:shadow-2xl group bg-white/80 dark:bg-gray-800/80`}
      >
        <Image src={card.icon} alt="Vinxign Logo" width={64} height={64} className="mb-4 rounded-full shadow" />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">{card.title}</h3>
        <button
          className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] text-white font-semibold shadow hover:from-[#a21caf] hover:to-[#db2777] transition-all dark:bg-gray-900 dark:text-white"
        >
          {card.button}
        </button>
      </motion.a>
    ))}
  </motion.div>
);

export default ContactLinks; 