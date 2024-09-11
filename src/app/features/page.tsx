import React from 'react';
import FeaturesGrid from '@/components/FeaturesGrid';

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Platform Features</h1>
      <FeaturesGrid />
    </div>
  );
}