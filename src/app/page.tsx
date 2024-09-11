'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <div className="relative h-screen">
          <Image
            src="/images/app_cover.webp"
            alt="Migration Management Platform"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white bg-black bg-opacity-50 p-8 rounded-lg max-w-3xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Migration Management Platform
                <br />
                Odisha
              </h1>
              <motion.p 
                className="mt-6 text-2xl sm:text-3xl font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Empowering Safe and Dignified Migration
              </motion.p>
              <div className="mt-10">
                <Link href="/features" 
                  className="inline-block bg-orange-500 py-3 px-8 border border-transparent rounded-md text-lg font-medium text-white hover:bg-orange-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Explore Features
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
                About the Platform
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Comprehensive Support</h3>
                  <p className="text-gray-600">
                    From pre-departure preparation to destination support and successful return, we provide end-to-end assistance for migrant workers.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Digital Solutions</h3>
                  <p className="text-gray-600">
                    Our platform leverages technology to streamline processes, provide real-time information, and ensure seamless communication.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Safe and Dignified Migration</h3>
                  <p className="text-gray-600">
                    We prioritize the safety, rights, and dignity of migrant workers, ensuring they have access to necessary resources and support.
                  </p>
                </div>
              </div>
              <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto">
                The Migration Management Platform Odisha is designed to empower migrant workers with the tools and information needed for safe, dignified, and beneficial migration experiences.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}