'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-gray-900">
      <div className="md:hidden absolute inset-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg z-0" />
      {/* Floating gradient lights */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-300 dark:bg-[#8b5cf6] rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-blue-300 dark:bg-[#ec4899] rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 flex flex-col items-center">
            <Image
              src="/images/logo.webp"
              alt="Vinxign Logo"
              width={264}
              height={264}
              className="mx-auto mb-2 rounded-full shadow-lg"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">
              Welcome to Vinxign
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-200 mb-8">
            World's First Social Media App
          </p>
          <Link
            href="/coming-soon"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] text-white font-semibold shadow hover:from-[#a21caf] hover:to-[#db2777] transition-all dark:bg-gray-900 dark:text-white"
          >
            Continue to App
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 