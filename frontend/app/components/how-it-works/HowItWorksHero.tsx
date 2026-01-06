import React from 'react';
import { Zap } from 'lucide-react';

export default function HowItWorksHero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Zap className="w-4 h-4" />
          <span>Simple & Efektif</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Cara Kerja
          <span className="block text-blue-600">Smart Interview System</span>
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Proses wawancara yang simpel, cepat, dan efektif. Dari pendaftaran hingga mendapatkan hasil,
          semuanya dapat diselesaikan dalam hitungan menit.
        </p>
      </div>
    </section>
  );
}