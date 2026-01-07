'use client';

import React from 'react';
import { Clock, Zap, TrendingUp } from 'lucide-react';

interface TimelineItem {
  time: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    time: '2-3 menit',
    title: 'Registrasi',
    description: 'Buat akun dan lengkapi profil dasar'
  },
  {
    time: '5-10 menit',
    title: 'Persiapan',
    description: 'Pilih posisi dan pelajari requirements'
  },
  {
    time: '15-20 menit',
    title: 'Wawancara',
    description: 'Sesi wawancara interaktif dengan AI'
  },
  {
    time: '2-5 menit',
    title: 'Analisis',
    description: 'AI menganalisis dan mengevaluasi jawaban'
  },
  {
    time: 'Instant',
    title: 'Hasil',
    description: 'Terima hasil lengkap dan feedback'
  }
];

export default function TimelineSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Clock className="w-4 h-4" />
            <span>Cepat & Efisien</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Total Waktu: Kurang dari 30 Menit
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dari pendaftaran hingga menerima hasil, semuanya dalam waktu singkat
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden md:block relative">
          {/* Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-blue-200 via-purple-200 to-blue-200 transform -translate-y-1/2"></div>

          {/* Timeline items */}
          <div className="relative flex justify-between items-center">
            {timelineData.map((item, index) => (
              <div key={index} className="flex flex-col items-center w-1/5">
                {/* Dot */}
                <div className="relative z-10 w-16 h-16 bg-linear-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition w-full">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {item.time}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="md:hidden space-y-6">
          {timelineData.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* Left side - number and line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shrink-0">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                {index < timelineData.length - 1 && (
                  <div className="w-1 h-full bg-linear-to-b from-blue-200 to-purple-200 my-2"></div>
                )}
              </div>

              {/* Right side - content */}
              <div className="bg-white rounded-xl p-6 shadow-md flex-1">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {item.time}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">
              10x
            </div>
            <p className="text-gray-600">
              Lebih cepat dari wawancara tradisional
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">
              24/7
            </div>
            <p className="text-gray-600">
              Tersedia kapan saja, di mana saja
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">
              95%
            </div>
            <p className="text-gray-600">
              Kandidat puas dengan prosesnya
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}