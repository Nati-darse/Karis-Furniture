'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Our Craft', href: '/our-craft' },
    { name: 'Process', href: '/our-process' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Main Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fff7ed]/90 backdrop-blur-md border-b border-orange-200">
        <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo - Now using your Image */}
          <Link href="/" className="flex items-center">
            <div className="relative h-16 w-48"> 
              {/* 
                Adjust the width (w-40) and height (h-10) classes based on your logo's aspect ratio.
                The path '/images/logo.png' assumes your logo is at public/images/logo.png.
                CHANGE THIS PATH to match your actual file (e.g., /Images/karis-logo.jpg)
              */}
              <Image
                src="/images/logo.png" // Update this path to your actual logo file!
                alt="Karis Furniture Logo"
                fill
                style={{ objectFit: 'contain' }} // This ensures the whole logo fits within the div
                priority // Important for above-the-fold images
                className="hover:opacity-80 transition-opacity"
              />
            </div>
          </Link>
            
          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#431407] hover:text-orange-600 font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-200"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-[#431407] mb-1.5 transition-all"
              ></motion.span>
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-[#431407] mb-1.5 transition-all"
              ></motion.span>
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-[#431407] transition-all"
              ></motion.span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#fff7ed] border-b border-orange-200"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#431407] hover:text-orange-600 font-medium py-2 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold text-center mt-4 hover:bg-orange-700 transition-all duration-300"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer to prevent content from being hidden behind fixed header */}
      <div className="h-20"></div>
    </>
  );
}