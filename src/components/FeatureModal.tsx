'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FeatureModal({ feature, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-2xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <feature.icon className="text-5xl text-blue-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-800">{feature.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row items-start mb-8">
          <Image
            src={feature.image}
            alt={feature.title}
            width={400}
            height={300}
            className="w-full md:w-1/2 h-64 object-cover rounded-lg mr-8 mb-4 md:mb-0"
          />
          <p className="text-gray-600 text-xl leading-relaxed">{feature.description}</p>
        </div>
        
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Key Features:</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {feature.subFeatures.map((subFeature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-100 p-3 rounded-full">
                <subFeature.icon className="text-2xl text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{subFeature.name}</h4>
                <p className="text-gray-600">{subFeature.description || 'Enhance your migration management with this powerful feature.'}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/images/cysd-logo.png" alt="CYSD Logo" width={40} height={40} className="rounded-full" />
            <span className="text-gray-600 font-semibold">Powered by CYSD</span>
          </div>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            onClick={onClose}
          >
            Close Presentation
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}