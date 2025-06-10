'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const currentPath = window.location.pathname;
    
    if (currentPath !== '/') {
      router.push('/#contact');
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleThemeToggle = () => {
    toggleTheme();
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <img src="/images/logo.webp" alt="Vinxign Logo" className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Vinxign</span>
          </Link>

          <div className="hidden md:flex items-center justify-between flex-1 px-8">
            <div className="flex items-center justify-center space-x-8 mx-auto">
              <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-[#8b5cf6] dark:hover:text-[#ec4899] transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-[#8b5cf6] dark:hover:text-[#ec4899] transition-colors">
                About
              </Link>
              <Link href="/team" className="text-gray-700 dark:text-gray-200 hover:text-[#8b5cf6] dark:hover:text-[#ec4899] transition-colors">
                Team
              </Link>
              <a href="#contact" onClick={handleContactClick} className="text-gray-700 dark:text-gray-200 hover:text-[#8b5cf6] dark:hover:text-[#ec4899] transition-colors">
                Contact Us
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
              <Link
                href="/coming-soon"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] text-white font-semibold shadow hover:from-[#a21caf] hover:to-[#db2777] transition-all"
              >
                Continue to App
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-16 right-4 w-64 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50"
          >
            <div className="flex flex-col space-y-4">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-200 hover:text-[#8b5cf6] dark:hover:text-[#ec4899] transition-colors">
                Home
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-200 hover:text-[#8b5cf6] dark:hover:text-[#ec4899] transition-colors">
                About
              </Link>
              <Link href="/team" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-200 hover:text-[#8b5cf6] dark:hover:text-[#ec4899] transition-colors">
                Team
              </Link>
              <a href="#contact" onClick={handleContactClick} className="text-gray-700 dark:text-gray-200 hover:text-[#8b5cf6] dark:hover:text-[#ec4899] transition-colors">
                Contact Us
              </a>
              <Link
                href="/coming-soon"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] text-white font-semibold shadow hover:from-[#a21caf] hover:to-[#db2777] transition-all"
              >
                Continue to App
              </Link>
              <button
                onClick={handleThemeToggle}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 