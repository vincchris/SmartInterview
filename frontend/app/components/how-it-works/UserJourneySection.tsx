'use client';

import React from 'react';
import { User, Mail, FileText, Video, BarChart, Star } from 'lucide-react';

interface JourneyStep {
  icon: React.ElementType;
  stage: string;
  title: string;
  userAction: string;
  systemResponse: string;
}

const journeySteps: JourneyStep[] = [
  {
    icon: Mail,
    stage: 'Pre-Interview',
    title: 'Undangan Wawancara',
    userAction: 'Kandidat menerima email undangan dari perusahaan',
    systemResponse: 'Sistem mengirim link unique untuk akses interview room'
  },
  {
    icon: User,
    stage: 'Onboarding',
    title: 'Setup Profil',
    userAction: 'Login dan melengkapi informasi profil',
    systemResponse: 'Sistem memverifikasi data dan menyiapkan pertanyaan yang relevan'
  },
  {
    icon: FileText,
    stage: 'Preparation',
    title: 'Briefing & Tips',
    userAction: 'Membaca panduan dan melakukan test connection',
    systemResponse: 'Memberikan tips wawancara dan checklist persiapan'
  },
  {
    icon: Video,
    stage: 'Interview',
    title: 'Sesi Wawancara',
    userAction: 'Menjawab pertanyaan dari AI interviewer',
    systemResponse: 'AI menganalisis jawaban dan memberikan pertanyaan follow-up'
  },
  {
    icon: BarChart,
    stage: 'Post-Interview',
    title: 'Analisis',
    userAction: 'Menunggu hasil (2-5 menit)',
    systemResponse: 'AI memproses semua jawaban dan generate comprehensive report'
  },
  {
    icon: Star,
    stage: 'Results',
    title: 'Feedback & Next Steps',
    userAction: 'Membaca hasil dan rekomendasi',
    systemResponse: 'Menampilkan score, insights, dan next steps dari perusahaan'
  }
];

export default function UserJourneySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pengalaman Kandidat dari Awal hingga Akhir
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Perjalanan yang seamless dan user-friendly untuk kandidat
          </p>
        </div>

        <div className="relative">
          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-8">
              {journeySteps.map((step, index) => {
                const Icon = step.icon;
                const row = Math.floor(index / 3);
                const col = index % 3;

                return (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition h-full">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {step.stage}
                        </span>
                        <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>

                      <div className="space-y-3">
                        <div>
                          <div className="text-xs font-semibold text-gray-500 uppercase mb-1">
                            Kandidat:
                          </div>
                          <p className="text-sm text-gray-700">
                            {step.userAction}
                          </p>
                        </div>

                        <div>
                          <div className="text-xs font-semibold text-blue-600 uppercase mb-1">
                            Sistem:
                          </div>
                          <p className="text-sm text-gray-700">
                            {step.systemResponse}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Arrow connector */}
                    {index < journeySteps.length - 1 && col < 2 && (
                      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <div className="w-8 h-1 bg-blue-300"></div>
                      </div>
                    )}

                    {/* Down arrow at end of row */}
                    {col === 2 && index < journeySteps.length - 1 && (
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="w-1 h-8 bg-blue-300"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-6">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {step.stage}
                      </span>
                      <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>

                    <div className="space-y-3">
                      <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase mb-1">
                          Kandidat:
                        </div>
                        <p className="text-sm text-gray-700">
                          {step.userAction}
                        </p>
                      </div>

                      <div>
                        <div className="text-xs font-semibold text-blue-600 uppercase mb-1">
                          Sistem:
                        </div>
                        <p className="text-sm text-gray-700">
                          {step.systemResponse}
                        </p>
                      </div>
                    </div>
                  </div>

                  {index < journeySteps.length - 1 && (
                    <div className="flex justify-center my-4">
                      <div className="w-1 h-8 bg-blue-300"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              4.8/5
            </div>
            <p className="text-gray-600 text-sm">
              User Experience Rating
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-green-600 mb-2">
              92%
            </div>
            <p className="text-gray-600 text-sm">
              Completion Rate
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              &lt;30min
            </div>
            <p className="text-gray-600 text-sm">
              Average Duration
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              89%
            </div>
            <p className="text-gray-600 text-sm">
              Would Recommend
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}