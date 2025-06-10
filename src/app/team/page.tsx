'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const team = [
  {
    name: "Devesh Gurjar",
    position: "Founder and Chief Executive Officier",
    img: "/images/Devesh.webp",
    slug: "devesh-gurjar",
    tagline: "The goal isn't just to build apps or companies—it's to build tools that help people grow, express themselves, and feel seen.",
  },
  {
    name: "Vishwesh Gurjar",
    position: "Director & Community Representative",
    img: "/images/vishu.webp",
    slug: "vishwesh-gurjar",
    tagline: "Being deaf isn't a barrier—it's a perspective. I bring our world to the table, so technology can finally listen to us.",
  },
  {
    name: "Dhawal Khope",
    position: "Chief Designing Officer & Creative Head",
    img: "/images/dhawal.webp",
    slug: "dhawal-khope",
    tagline: "Design isn't just what it looks like—it's how it moves, how it feels, and how it speaks without saying a word.",
  },
];

export default function TeamPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Meet Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className="group block bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 border border-gray-100 dark:border-gray-700 hover:border-[#8b5cf6] min-h-[420px]"
            >
              <div className="flex flex-col items-center gap-8">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] group-hover:from-[#a21caf] group-hover:to-[#db2777]">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center">
                  <div className="font-bold text-2xl text-gray-900 dark:text-white mb-2">{member.name}</div>
                  <div className="text-[#8b5cf6] dark:text-[#ec4899] text-lg font-medium mb-2">{member.position}</div>
                  <div className="italic text-gray-600 dark:text-gray-300 text-base">{member.tagline}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 