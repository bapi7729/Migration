'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src="/images/CYSD-LOGO.png" alt="CYSD Logo" width={80} height={40} />
            <p className="text-sm text-gray-400">
              Empowering communities through sustainable development
            </p>
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="/" className="text-sm text-gray-300 hover:text-white">Home</Link>
            <Link href="/features" className="text-sm text-gray-300 hover:text-white">Features</Link>
            <Link href="/about" className="text-sm text-gray-300 hover:text-white">About</Link>
            <Link href="/contact" className="text-sm text-gray-300 hover:text-white">Contact</Link>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-400">
            &copy; 2024 Migration Management Platform Odisha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;