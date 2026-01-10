'use client';

import React from 'react';
import { Building2, Award, Users, TrendingUp } from 'lucide-react';

interface Partner {
  name: string;
  category: string;
}

const partners: Partner[] = [
  { name: 'Gojek', category: 'Tech' },
  { name: 'Tokopedia', category: 'E-commerce' },
  { name: 'Bank Mandiri', category: 'Banking' },
  { name: 'Unilever', category: 'FMCG' },
  { name: 'Telkomsel', category: 'Telco' },
  { name: 'BCA', category: 'Banking' },
  { name: 'Astra', category: 'Conglomerate' },
  { name: 'Shopee', category: 'E-commerce' },
  { name: 'Grab', category: 'Tech' },
  { name: 'Pertamina', category: 'Energy' },
  { name: 'PLN', category: 'Energy' },
  { name: 'Danone', category: 'FMCG' }
];

export default function PartnersSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-libear-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dipercaya oleh Perusahaan Terkemuka
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            500+ perusahaan dari berbagai industri telah menggunakan Smart Interview
            untuk proses rekrutmen mereka
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
            <p className="text-gray-600 text-sm">Perusahaan Partner</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-1">50K+</div>
            <p className="text-gray-600 text-sm">Kandidat Terverifikasi</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-1">70%</div>
            <p className="text-gray-600 text-sm">Peningkatan Efisiensi</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <Award className="w-12 h-12 text-orange-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-1">4.9/5</div>
            <p className="text-gray-600 text-sm">Rating dari Partner</p>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-xl hover:bg-gray-50 transition group"
              >
                <div className="w-20 h-20 bg-linear-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition">
                  <span className="text-2xl font-bold text-blue-600">
                    {partner.name.substring(0, 2)}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-1">
                  {partner.name}
                </h3>
                <p className="text-xs text-gray-500">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Preview */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Smart Interview menghemat 60% waktu kami dalam screening kandidat.
              Hasilnya juga lebih objektif dan konsisten."
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full"></div>
              <div>
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-sm text-gray-500">HR Director, Gojek</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">
              "AI-nya sangat impressive! Bisa menggali deeper dari jawaban kandidat
              dengan pertanyaan follow-up yang relevan."
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full"></div>
              <div>
                <p className="font-semibold text-gray-900">Michael Tan</p>
                <p className="text-sm text-gray-500">Talent Lead, Tokopedia</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Kandidat kami sangat appreciate dengan feedback yang detail dan instant.
              Candidate experience meningkat drastis!"
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full"></div>
              <div>
                <p className="font-semibold text-gray-900">Rina Wijaya</p>
                <p className="text-sm text-gray-500">CHRO, Bank Mandiri</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}