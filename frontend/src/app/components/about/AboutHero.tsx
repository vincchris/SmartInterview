import React from 'react';
import { Heart, Target, Users } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            <span>Tentang Kami</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Mengubah Cara Dunia
            <span className="block text-blue-600">Melakukan Wawancara Kerja</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Smart Interview didirikan dengan misi untuk membuat proses rekrutmen lebih fair,
            efisien, dan berbasis data. Kami percaya bahwa setiap kandidat berhak mendapatkan
            kesempatan yang sama untuk menunjukkan potensi terbaik mereka.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">2021</div>
            <p className="text-gray-600 font-medium">Tahun Didirikan</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
            <p className="text-gray-600 font-medium">Wawancara Selesai</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <p className="text-gray-600 font-medium">Perusahaan Partner</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
            <p className="text-gray-600 font-medium">Akurasi AI</p>
          </div>
        </div>
      </div>
    </section>
  );
}