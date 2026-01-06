'use client';

import React from 'react';
import { UserPlus, Briefcase, MessageSquare, Award, ArrowRight, CheckCircle } from 'lucide-react';

interface Step {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  color: 'blue' | 'purple' | 'green' | 'orange';
  image?: string;
}

const steps: Step[] = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Daftar & Buat Profil',
    description: 'Mulai dengan membuat akun dan melengkapi profil profesional Anda. Proses pendaftaran hanya memerlukan beberapa menit.',
    details: [
      'Daftar dengan email atau akun Google/LinkedIn',
      'Lengkapi informasi dasar (nama, email, nomor telepon)',
      'Upload CV atau isi pengalaman kerja',
      'Tambahkan skill dan sertifikasi yang dimiliki',
      'Verifikasi email untuk aktivasi akun'
    ],
    color: 'blue'
  },
  {
    number: '02',
    icon: Briefcase,
    title: 'Pilih Posisi & Persiapan',
    description: 'Browse posisi yang tersedia atau gunakan kode undangan dari perusahaan. Sistem akan memberikan info dan tips persiapan.',
    details: [
      'Pilih posisi yang sesuai dengan keahlian Anda',
      'Baca job description dan requirements',
      'Pelajari tips persiapan wawancara',
      'Lakukan practice interview (opsional)',
      'Atur jadwal wawancara sesuai kenyamanan Anda'
    ],
    color: 'purple'
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Wawancara dengan AI',
    description: 'Mulai wawancara interaktif dengan AI interviewer. Jawab pertanyaan dengan jelas dan AI akan menyesuaikan pertanyaan berikutnya.',
    details: [
      'Masuk ke interview room di waktu yang dipilih',
      'Cek koneksi internet dan perangkat',
      'Jawab 8-15 pertanyaan (tergantung posisi)',
      'AI memberikan pertanyaan follow-up adaptif',
      'Real-time analysis untuk setiap jawaban',
      'Dapat pause dan resume jika diperlukan'
    ],
    color: 'green'
  },
  {
    number: '04',
    icon: Award,
    title: 'Terima Hasil & Feedback',
    description: 'Dapatkan hasil lengkap dan feedback detail segera setelah wawancara. Ketahui kekuatan dan area pengembangan Anda.',
    details: [
      'Hasil wawancara tersedia dalam 5 menit',
      'Overall score dan breakdown per kompetensi',
      'Analisis kekuatan dan kelemahan',
      'Rekomendasi skill untuk ditingkatkan',
      'Comparison dengan kandidat lain',
      'Tips untuk wawancara selanjutnya',
      'Sertifikat completion (untuk beberapa posisi)'
    ],
    color: 'orange'
  }
];

export default function DetailedStepsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            4 Langkah Menuju Wawancara Sukses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proses yang dirancang untuk kemudahan dan efektivitas
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            const colorClasses = {
              blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', gradient: 'from-blue-500 to-blue-600' },
              purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', gradient: 'from-purple-500 to-purple-600' },
              green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', gradient: 'from-green-500 to-green-600' },
              orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', gradient: 'from-orange-500 to-orange-600' }
            };

            return (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`${!isEven ? 'md:order-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-linear-to-br ${colorClasses[step.color].gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                      {step.number}
                    </div>
                    <div className={`w-16 h-16 ${colorClasses[step.color].bg} rounded-xl flex items-center justify-center`}>
                      <Icon className={`w-8 h-8 ${colorClasses[step.color].text}`} />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className={`w-5 h-5 ${colorClasses[step.color].text} shrink-0 mt-0.5`} />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`${!isEven ? 'md:order-1' : ''}`}>
                  <div className={`relative bg-linier-to-br ${colorClasses[step.color].gradient} rounded-3xl p-8 shadow-2xl`}>
                    <div className="bg-white rounded-2xl p-6 min-h-400px flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-32 h-32 mx-auto ${colorClasses[step.color].bg} rounded-full flex items-center justify-center mb-6`}>
                          <Icon className={`w-16 h-16 ${colorClasses[step.color].text}`} />
                        </div>
                        <div className={`text-6xl font-bold ${colorClasses[step.color].text} mb-4`}>
                          {step.number}
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h4>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
                  </div>
                </div>

                {/* Arrow connector (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="md:col-span-2 flex justify-center my-8">
                    <ArrowRight className="w-12 h-12 text-gray-300 transform rotate-90 md:rotate-0" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}