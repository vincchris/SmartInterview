'use client';

import React from 'react';
import { Check, X } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  traditional: boolean;
  smart: boolean;
}

const comparisonData: ComparisonRow[] = [
  { feature: 'Jadwal fleksibel 24/7', traditional: false, smart: true },
  { feature: 'Penilaian objektif tanpa bias', traditional: false, smart: true },
  { feature: 'Feedback instan', traditional: false, smart: true },
  { feature: 'Analisis mendalam dengan AI', traditional: false, smart: true },
  { feature: 'Pertanyaan adaptif', traditional: false, smart: true },
  { feature: 'Hemat waktu interviewer', traditional: false, smart: true },
  { feature: 'Scalable untuk banyak kandidat', traditional: false, smart: true },
  { feature: 'Data analytics & reporting', traditional: false, smart: true },
  { feature: 'Konsisten di semua kandidat', traditional: false, smart: true },
  { feature: 'Cost-effective', traditional: false, smart: true },
];

export default function ComparisonSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-50 to-purple-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mengapa Smart Interview?
          </h2>
          <p className="text-xl text-gray-600">
            Bandingkan dengan metode wawancara tradisional
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 bg-linear-to-r from-blue-600 to-purple-600 text-white p-6">
            <div className="font-semibold text-lg">Fitur</div>
            <div className="text-center font-semibold text-lg">Wawancara Tradisional</div>
            <div className="text-center font-semibold text-lg">Smart Interview</div>
          </div>

          {/* Body */}
          <div className="divide-y divide-gray-100">
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition"
              >
                <div className="font-medium text-gray-900">
                  {row.feature}
                </div>
                <div className="flex justify-center">
                  {row.traditional ? (
                    <Check className="w-6 h-6 text-green-600" />
                  ) : (
                    <X className="w-6 h-6 text-red-400" />
                  )}
                </div>
                <div className="flex justify-center">
                  {row.smart ? (
                    <Check className="w-6 h-6 text-green-600" />
                  ) : (
                    <X className="w-6 h-6 text-red-400" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-6 text-center">
            <p className="text-gray-600 mb-4">
              Tingkatkan efisiensi rekrutmen Anda hingga <span className="font-bold text-blue-600">70%</span>
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md font-semibold">
              Coba Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}