'use client';

import React from 'react';
import Link from 'next/link';

const team = [
  {
    name: 'Devesh Gurjar',
    position: 'Founder and Chief Executive Officier',
    img: '/images/Devesh.webp',
    slug: 'devesh-gurjar',
    tagline: '"The goal isn\'t just to build apps or companies—it\'s to build tools that help people grow, express themselves, and feel seen."',
  },
  {
    name: 'Vishwesh Gurjar',
    position: 'Director & Community Representative',
    img: '/images/vishu.webp',
    slug: 'vishwesh-gurjar',
    tagline: '"Being deaf isn\'t a barrier—it\'s a perspective. I bring our world to the table, so technology can finally listen to us."',
  },
  {
    name: 'Dhawal Khope',
    position: 'Chief Designing Officer & Creative Head',
    img: '/images/dhawal.webp',
    slug: 'dhawal-khope',
    tagline: '"Design isn\'t just what it looks like—it\'s how it moves, how it feels, and how it speaks without saying a word."',
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">Meet Our Team</h2>
        <div className="text-center mb-8">
          <a href="/team" className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] text-white font-semibold shadow hover:scale-105 transition-transform">View Full Team</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center cursor-pointer border border-gray-100 dark:border-gray-700 hover:border-[#8b5cf6] min-h-[420px]"
            >
              <div className="relative w-52 h-52 mb-4">
                <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] group-hover:from-[#a21caf] group-hover:to-[#db2777]">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800"
                  />
                </div>
              </div>
              <div className="font-bold text-lg text-gray-900 dark:text-white mb-1">{member.name}</div>
              <div className="text-[#8b5cf6] dark:text-[#ec4899] text-sm font-medium mb-2">{member.position}</div>
              <div className="italic text-gray-600 dark:text-gray-300 text-xs">{member.tagline}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 