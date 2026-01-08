'use client';

import React from 'react';
import { Target, Eye, Compass } from 'lucide-react';

export default function MissionVisionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Misi Kami
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Memberikan akses yang equal dan fair kepada semua kandidat untuk menunjukkan
              kemampuan terbaik mereka melalui teknologi AI yang objektif dan adaptif, serta
              membantu perusahaan menemukan talent terbaik dengan lebih efisien.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition">
            <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Visi Kami
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Menjadi platform wawancara berbasis AI terdepan di Asia Tenggara yang dipercaya
              oleh jutaan kandidat dan ribuan perusahaan untuk proses rekrutmen yang lebih
              baik, cepat, dan akurat.
            </p>
          </div>

          {/* Values */}
          <div className="bg-linear-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition">
            <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
              <Compass className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nilai Kami
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Fairness</strong> - Tanpa bias dan diskriminasi</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Innovation</strong> - Terus berinovasi</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Excellence</strong> - Kualitas terbaik</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Transparency</strong> - Jujur dan terbuka</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}