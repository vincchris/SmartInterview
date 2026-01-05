import React, { useState } from 'react';
import { Sparkles, ArrowRight, Users, CheckCircle, MessageSquare, Target, Clock } from 'lucide-react';

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Powered by AI & NLP Technology</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Wawancara Kerja
              <span className="block text-blue-600">Lebih Cerdas & Adaptif</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Platform wawancara berbasis AI yang memahami konteks, menganalisis jawaban secara mendalam,
              dan memberikan pengalaman wawancara yang personal untuk setiap kandidat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                className="group px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="font-semibold">Mulai Wawancara</span>
                <ArrowRight className={`w-5 h-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition shadow-md border-2 border-gray-200 font-semibold">
                Lihat Demo
              </button>
            </div>

            <div className="flex items-center space-x-6 pt-6">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">
                  <strong className="text-gray-900">5,000+</strong> Kandidat
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-600">
                  <strong className="text-gray-900">95%</strong> Akurasi
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Demo */}
          <div className="relative">
            <div className="relative bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">AI Interviewer</p>
                    <p className="text-sm text-gray-500">Sedang mendengarkan...</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      "Ceritakan tentang pengalaman Anda dalam mengelola tim?"
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 ml-8">
                    <p className="text-sm text-gray-700">
                      "Saya pernah memimpin tim 5 orang dalam project..."
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-500">Analisis real-time</span>
                  </div>
                  <span className="text-xs text-gray-500">Progress: 45%</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">98% Match</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium">15 min avg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}