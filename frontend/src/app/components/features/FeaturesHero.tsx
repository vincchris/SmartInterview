'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export default function FeaturesHero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          <span>AI-Powered Interview Platform</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Fitur-Fitur
          <span className="block text-blue-600">Smart Interview System</span>
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Temukan bagaimana teknologi NLP dan AI kami mengubah cara perusahaan melakukan wawancara
          dan membantu kandidat menunjukkan potensi terbaik mereka.
        </p>
      </div>
    </section>
  );
}