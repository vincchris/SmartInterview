'use client';

import React from 'react';
import Link from 'next/link';
import { Brain, ArrowLeft } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
            <Brain className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Smart Interview</span>
          </Link>

          <Link
            href="/"
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Illustration/Info */}
            <div className="hidden md:block">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-linear-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
                  <div className="text-white">
                    <h2 className="text-4xl font-bold mb-6">
                      Bergabung dengan Smart Interview
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                      Platform wawancara berbasis AI yang membantu Anda mendapatkan pekerjaan
                      impian atau menemukan kandidat terbaik dengan lebih efisien.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Wawancara 24/7</h3>
                          <p className="text-blue-100 text-sm">
                            Lakukan wawancara kapan saja sesuai jadwal Anda
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Feedback Instan</h3>
                          <p className="text-blue-100 text-sm">
                            Dapatkan hasil dan rekomendasi dalam hitungan menit
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Penilaian Objektif</h3>
                          <p className="text-blue-100 text-sm">
                            AI menilai tanpa bias untuk hasil yang fair
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">50K+</div>
                      <div className="text-xs text-gray-600">Kandidat</div>
                    </div>
                    <div className="w-px h-12 bg-gray-200"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">500+</div>
                      <div className="text-xs text-gray-600">Perusahaan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {children}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <p>&copy; 2024 Smart Interview. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-blue-600 transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-600 transition">
                Terms of Service
              </Link>
              <Link href="/about" className="hover:text-blue-600 transition">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}