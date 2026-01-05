'use client';

import React from 'react';
import { Brain, MessageSquare, Target, CheckCircle, Users, Clock, TrendingUp, Shield, Zap, BarChart } from 'lucide-react';
import FeatureCard from './FeatureCard';

const featuresData = [
  {
    icon: Brain,
    title: 'Pertanyaan Adaptif',
    description: 'Sistem AI kami secara dinamis menyesuaikan pertanyaan berdasarkan jawaban kandidat, menciptakan pengalaman wawancara yang personal dan mendalam.',
    benefits: [
      'Pertanyaan follow-up otomatis berdasarkan konteks jawaban',
      'Menyesuaikan tingkat kesulitan sesuai kemampuan kandidat',
      'Menggali lebih dalam pada area yang relevan',
      'Menghindari pertanyaan yang tidak perlu atau redundan'
    ],
    color: 'blue' as const
  },
  {
    icon: MessageSquare,
    title: 'Analisis NLP Mendalam',
    description: 'Natural Language Processing canggih yang memahami konteks, sentiment, dan kualitas jawaban dengan tingkat akurasi tinggi.',
    benefits: [
      'Analisis sentiment dan emosi kandidat',
      'Deteksi keyword dan kompetensi teknis',
      'Pemahaman konteks dan relevansi jawaban',
      'Evaluasi struktur dan koherensi komunikasi'
    ],
    color: 'purple' as const
  },
  {
    icon: Target,
    title: 'Penilaian Objektif',
    description: 'Evaluasi berbasis data yang menghilangkan bias manusia dan memberikan hasil yang konsisten dan fair untuk setiap kandidat.',
    benefits: [
      'Scoring konsisten tanpa pengaruh bias',
      'Kriteria penilaian yang terstandarisasi',
      'Benchmark dengan kandidat lain di posisi sama',
      'Laporan detail untuk setiap kompetensi'
    ],
    color: 'green' as const
  },
  {
    icon: CheckCircle,
    title: 'Feedback Instan',
    description: 'Kandidat mendapatkan hasil dan rekomendasi pengembangan segera setelah menyelesaikan wawancara.',
    benefits: [
      'Hasil wawancara dalam hitungan menit',
      'Analisis kekuatan dan area pengembangan',
      'Rekomendasi skill yang perlu ditingkatkan',
      'Tips untuk wawancara selanjutnya'
    ],
    color: 'orange' as const
  },
  {
    icon: Users,
    title: 'Multi-Role Support',
    description: 'Mendukung berbagai posisi dan level jabatan, dari fresh graduate hingga level executive dengan bank pertanyaan yang disesuaikan.',
    benefits: [
      'Template wawancara untuk 50+ posisi',
      'Pertanyaan disesuaikan dengan job description',
      'Support untuk technical dan non-technical roles',
      'Customizable sesuai kebutuhan perusahaan'
    ],
    color: 'pink' as const
  },
  {
    icon: Clock,
    title: 'Efisien & Fleksibel',
    description: 'Lakukan wawancara kapan saja, di mana saja tanpa perlu mengatur jadwal dengan interviewer. Hemat waktu untuk kandidat dan perusahaan.',
    benefits: [
      'Wawancara 24/7 tanpa batasan waktu',
      'Tidak perlu booking jadwal dengan interviewer',
      'Rata-rata durasi hanya 15-20 menit',
      'Resume kapan saja jika terputus'
    ],
    color: 'indigo' as const
  },
  {
    icon: TrendingUp,
    title: 'Analytics Dashboard',
    description: 'Dashboard komprehensif untuk HR dan hiring manager memantau progress rekrutmen dan menganalisis data kandidat.',
    benefits: [
      'Visualisasi data kandidat secara real-time',
      'Filter dan sort berdasarkan berbagai kriteria',
      'Export data untuk analisis lebih lanjut',
      'Tracking funnel rekrutmen'
    ],
    color: 'blue' as const
  },
  {
    icon: Shield,
    title: 'Data Security',
    description: 'Keamanan data kandidat dijamin dengan enkripsi tingkat enterprise dan compliance terhadap regulasi privasi data.',
    benefits: [
      'Enkripsi end-to-end untuk semua data',
      'Compliance dengan GDPR dan regulasi lokal',
      'Backup otomatis dan disaster recovery',
      'Access control berbasis role'
    ],
    color: 'green' as const
  },
  {
    icon: Zap,
    title: 'Quick Integration',
    description: 'Mudah diintegrasikan dengan ATS (Applicant Tracking System) existing dan tools HR lainnya yang sudah Anda gunakan.',
    benefits: [
      'API documentation lengkap',
      'SDK untuk berbagai platform',
      'Pre-built integration dengan ATS populer',
      'Support team yang responsif'
    ],
    color: 'purple' as const
  },
  {
    icon: BarChart,
    title: 'Advanced Reporting',
    description: 'Laporan mendalam dengan insights dan rekomendasi untuk meningkatkan kualitas proses rekrutmen Anda.',
    benefits: [
      'Custom report berdasarkan kebutuhan',
      'Comparison antar kandidat',
      'Trend analysis dari waktu ke waktu',
      'Predictive hiring recommendations'
    ],
    color: 'orange' as const
  }
];

export default function DetailedFeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Semua yang Anda Butuhkan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Platform lengkap dengan fitur-fitur canggih untuk wawancara kerja yang lebih baik
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              benefits={feature.benefits}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}