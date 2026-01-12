'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Bagaimana AI dapat menilai jawaban kandidat secara objektif?',
    answer: 'AI kami menggunakan Natural Language Processing (NLP) untuk menganalisis berbagai aspek jawaban seperti relevansi, struktur, kedalaman, dan koherensi. Sistem ini dilatih dengan ribuan contoh wawancara dan terus belajar untuk meningkatkan akurasi. Penilaian dilakukan berdasarkan kriteria yang telah ditentukan, bukan preferensi subjektif.'
  },
  {
    question: 'Apakah Smart Interview bisa menggantikan interviewer manusia sepenuhnya?',
    answer: 'Smart Interview dirancang untuk melengkapi, bukan menggantikan interviewer manusia. Platform ini sangat efektif untuk screening awal dan penilaian kompetensi dasar, menghemat waktu interviewer untuk fokus pada tahap akhir yang memerlukan human judgment. Banyak perusahaan menggunakan kombinasi keduanya.'
  },
  {
    question: 'Berapa lama waktu yang dibutuhkan untuk menyelesaikan wawancara?',
    answer: 'Rata-rata wawancara berlangsung 15-20 menit, tergantung pada posisi dan jumlah pertanyaan. Kandidat dapat menjawab dengan kecepatan mereka sendiri, dan sistem akan menyesuaikan pertanyaan berdasarkan jawaban yang diberikan.'
  },
  {
    question: 'Apakah kandidat bisa mengulang wawancara jika hasilnya kurang memuaskan?',
    answer: 'Kebijakan retry tergantung pada pengaturan perusahaan. Biasanya kandidat diberi 1-2 kesempatan untuk mengulang wawancara dengan jeda waktu tertentu. Hal ini untuk memastikan kandidat memiliki kesempatan yang fair sambil menjaga integritas proses.'
  },
  {
    question: 'Bagaimana sistem menangani kandidat yang berbahasa non-standar atau memiliki aksen?',
    answer: 'AI kami dilatih dengan berbagai variasi bahasa Indonesia dan aksen regional. Sistem fokus pada konten jawaban, bukan aksen atau dialek. Jika sistem kesulitan memahami, kandidat akan diminta untuk mengulangi atau memperjelas jawaban.'
  },
  {
    question: 'Apakah data wawancara kandidat aman?',
    answer: 'Ya, keamanan data adalah prioritas utama. Semua data dienkripsi end-to-end, disimpan di server yang aman, dan hanya dapat diakses oleh pihak yang berwenang. Kami comply dengan GDPR dan regulasi privasi data lokal. Data kandidat tidak akan dibagikan ke pihak ketiga tanpa izin.'
  },
  {
    question: 'Bisakah perusahaan customize pertanyaan sesuai kebutuhan?',
    answer: 'Tentu! Perusahaan dapat membuat custom question bank, menambahkan pertanyaan spesifik untuk posisi tertentu, dan mengatur bobot penilaian sesuai prioritas. Tim kami juga dapat membantu merancang pertanyaan yang paling efektif untuk kebutuhan Anda.'
  },
  {
    question: 'Apakah ada trial atau demo yang bisa dicoba?',
    answer: 'Ya, kami menyediakan free trial 14 hari dengan akses penuh ke semua fitur. Anda juga dapat request demo personal dengan tim kami untuk melihat platform secara detail dan mendiskusikan kebutuhan spesifik perusahaan Anda.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-xl text-gray-600">
            Temukan jawaban untuk pertanyaan umum tentang Smart Interview
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-blue-200 transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Masih ada pertanyaan? Tim kami siap membantu!
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md font-semibold">
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
}