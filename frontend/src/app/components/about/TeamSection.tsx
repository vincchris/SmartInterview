'use client';

import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Budi Santoso',
    role: 'CEO & Co-Founder',
    description: 'Ex-Google engineer dengan 10+ tahun pengalaman di AI/ML. Passionate tentang menggunakan teknologi untuk menyelesaikan masalah sosial.'
  },
  {
    name: 'Siti Nurhaliza',
    role: 'CTO & Co-Founder',
    description: 'PhD in Computer Science dari NUS. Expert di Natural Language Processing dan Machine Learning dengan 15+ publikasi internasional.'
  },
  {
    name: 'Ahmad Wijaya',
    role: 'VP of Product',
    description: 'Ex-Gojek Product Lead. Berpengalaman membangun produk yang user-centric dan scalable untuk jutaan pengguna di Asia Tenggara.'
  },
  {
    name: 'Linda Kusuma',
    role: 'Head of AI Research',
    description: 'Former Research Scientist di Microsoft. Fokus pada bias detection dan fairness dalam AI systems untuk recruitment.'
  },
  {
    name: 'Denny Prasetyo',
    role: 'VP of Engineering',
    description: 'Ex-Tokopedia Tech Lead. Expert dalam building scalable systems dan leading engineering teams yang high-performing.'
  },
  {
    name: 'Maya Puspita',
    role: 'Head of Customer Success',
    description: 'Background di HR consulting dengan 8+ tahun membantu perusahaan mengoptimalkan proses rekrutmen mereka.'
  }
];

export default function TeamSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tim di Balik Smart Interview
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kombinasi expertise di AI, product development, dan HR untuk menciptakan solusi terbaik
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition border-2 border-gray-100 hover:border-blue-200"
            >
              {/* Avatar */}
              <div className="w-24 h-24 bg-linear-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              {/* Info */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-3 pt-4 border-t border-gray-100">
                <button className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-lg flex items-center justify-center transition">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </button>
                <button className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-lg flex items-center justify-center transition">
                  <Mail className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Join Us CTA */}
        <div className="mt-16 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Bergabung dengan Tim Kami
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Kami selalu mencari talenta terbaik untuk membangun masa depan rekrutmen yang lebih baik
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition shadow-lg font-bold text-lg">
            Lihat Posisi Terbuka
          </button>
        </div>
      </div>
    </section>
  );
}