'use client';

import React from 'react';
import { Lightbulb, Rocket, TrendingUp, Award } from 'lucide-react';

interface Milestone {
  year: string;
  icon: React.ElementType;
  title: string;
  description: string;
  color: 'blue' | 'purple' | 'green' | 'orange';
}

const milestones: Milestone[] = [
  {
    year: '2021',
    icon: Lightbulb,
    title: 'Ide Awal',
    description: 'Didirikan oleh tim engineer dan HR professionals yang frustasi dengan proses wawancara tradisional yang memakan waktu dan seringkali bias.',
    color: 'blue'
  },
  {
    year: '2022',
    icon: Rocket,
    title: 'Product Launch',
    description: 'Meluncurkan MVP pertama dengan 10 perusahaan pilot. Berhasil menyelesaikan 1,000 wawancara pertama dengan feedback positif.',
    color: 'purple'
  },
  {
    year: '2023',
    icon: TrendingUp,
    title: 'Rapid Growth',
    description: 'Ekspansi ke 100+ perusahaan dan 20,000+ wawancara. Mendapat pendanaan Series A untuk pengembangan AI yang lebih canggih.',
    color: 'green'
  },
  {
    year: '2024',
    icon: Award,
    title: 'Recognition',
    description: 'Menjadi Top 10 HR Tech Startup di Asia Tenggara. Menangani 50,000+ wawancara dengan 500+ perusahaan partner.',
    color: 'orange'
  }
];

export default function StorySection() {
  const colorClasses = {
    blue: { bg: 'bg-blue-500', light: 'bg-blue-100', text: 'text-blue-600' },
    purple: { bg: 'bg-purple-500', light: 'bg-purple-100', text: 'text-purple-600' },
    green: { bg: 'bg-green-500', light: 'bg-green-100', text: 'text-green-600' },
    orange: { bg: 'bg-orange-500', light: 'bg-orange-100', text: 'text-orange-600' }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perjalanan Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dari startup kecil hingga platform yang dipercaya ribuan perusahaan
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-blue-200 via-purple-200 to-green-200 transform -translate-x-1/2"></div>

          {/* Milestones */}
          <div className="space-y-12 md:space-y-24">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLeft = index % 2 === 0;
              const colors = colorClasses[milestone.color];

              return (
                <div key={index} className="relative">
                  {/* Desktop layout */}
                  <div className={`hidden md:grid md:grid-cols-2 gap-8 items-center`}>
                    {/* Content */}
                    <div className={`${isLeft ? 'text-right' : 'text-left md:col-start-2'}`}>
                      <div className={`inline-block ${isLeft ? 'md:ml-auto' : ''}`}>
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition max-w-md">
                          <div className={`inline-flex items-center justify-center w-12 h-12 ${colors.light} rounded-xl mb-4`}>
                            <Icon className={`w-6 h-6 ${colors.text}`} />
                          </div>
                          <div className={`text-3xl font-bold ${colors.text} mb-2`}>
                            {milestone.year}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isLeft ? 'md:col-start-2' : 'md:col-start-1'}`}>
                      <div className={`w-6 h-6 ${colors.bg} rounded-full border-4 border-white shadow-lg`}></div>
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden flex items-start space-x-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-1 h-full bg-linear-to-b from-blue-200 to-purple-200 my-2 min-h-25"></div>
                      )}
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg flex-1">
                      <div className={`text-2xl font-bold ${colors.text} mb-2`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="text-6xl mb-6">"</div>
            <p className="text-2xl md:text-3xl font-medium mb-6 leading-relaxed">
              Kami tidak hanya membangun teknologi. Kami membangun masa depan
              yang lebih fair untuk rekrutmen di Indonesia.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-full"></div>
              <div className="text-left">
                <div className="font-bold text-lg">Budi Santoso</div>
                <div className="text-blue-100">CEO & Co-Founder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}