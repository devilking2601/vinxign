'use client';

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Vinxign',
    // img: 'https://media.giphy.com/media/3o7btT1T08F0epP3Gk/giphy.gif',
    tagline: '"Stream the world your way – from entertainment to education."',
    description: 'A dynamic hub for entertainment, education, news, and more — all monetizable.',
  },
  {
    title: 'Xocial',
    // img: 'https://media.giphy.com/media/3o7TKVCG3Bvx4dUU3q/giphy.gif',
    tagline: '"Snap. Share. Sign. Connect your story."',
    description: 'Post photos, explore lives, and connect through a single Sign click.',
  },
  {
    title: 'Xhop',
    // img: 'https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif',
    tagline: '"Shop anything. Anytime. Anywhere."',
    description: 'Your digital marketplace — browse, buy, and bring it home.',
  },
  {
    title: 'Cutshot',
    // img: 'https://media.giphy.com/media/l0Exv4O4Gz3vvSMPe/giphy.gif',
    tagline: '"Big vibes. Under 3 minutes."',
    description: 'Create and explore short videos that speak louder than time.',
  },
  {
    title: 'Xeo',
    // img: 'https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif',
    tagline: '"You. Your space. Your story."',
    description: 'A fully personalized profile page reflecting who you are.',
  },
  {
    title: 'News',
    // img: 'https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif',
    tagline: '"24-hour stories. Your day, your way."',
    description: 'Share real-time life updates that vanish after 24 hours.',
  },
  {
    title: 'Inbox',
    // img: 'https://media.giphy.com/media/3o6Zt6D4nqvNaP7x9e/giphy.gif',
    tagline: '"Chat. Call. Share. All-in-One."',
    description: 'Send messages, make video calls, and share content with ease.',
  },
  {
    title: 'Xeo AI',
    // img: 'https://media.giphy.com/media/3o6ZtkQHdYhhfI6F7C/giphy.gif',
    tagline: '"Your AI. Your Language. Your World."',
    description: 'An intelligent assistant that speaks in your sign — personalized and powerful.',
  },
];

const CARD_GRADIENT = 'from-[#8b5cf6] to-[#ec4899]';

const Features = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      <div className="md:hidden absolute inset-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover what makes Vinxign unique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${CARD_GRADIENT} rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300`} />
              <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center min-h-[220px]">
                {/*
                <img src={feature.img} alt={feature.title} className="w-16 h-16 mb-2 rounded-full object-cover" />
                */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="tagline text-sm italic text-[#8b5cf6] dark:text-[#ec4899] mb-2 text-center">{feature.tagline}</p>
                <p className="text-gray-600 dark:text-gray-200 text-center">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 