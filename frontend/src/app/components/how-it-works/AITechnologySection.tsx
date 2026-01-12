import React from 'react';
import { Brain, Cpu, Database, Zap, Shield, TrendingUp } from 'lucide-react';

interface TechFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const techFeatures: TechFeature[] = [
  {
    icon: Brain,
    title: 'Natural Language Processing',
    description: 'Memahami konteks, makna, dan nuansa dalam jawaban kandidat dengan akurasi tinggi'
  },
  {
    icon: Cpu,
    title: 'Machine Learning Models',
    description: 'Model yang terus belajar dan meningkat dari ribuan wawancara sebelumnya'
  },
  {
    icon: Database,
    title: 'Knowledge Base',
    description: 'Database pertanyaan dan penilaian yang komprehensif untuk berbagai industri'
  },
  {
    icon: Zap,
    title: 'Real-time Analysis',
    description: 'Analisis jawaban secara real-time untuk memberikan pertanyaan follow-up yang tepat'
  },
  {
    icon: Shield,
    title: 'Bias Detection',
    description: 'Algoritma khusus untuk mendeteksi dan menghilangkan bias dalam penilaian'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Prediksi performa kandidat berdasarkan data historis dan pattern recognition'
  }
];

export default function AITechnologySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Teknologi AI di Balik Smart Interview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami menggunakan teknologi Natural Language Processing dan Machine Learning terkini
            untuk memberikan pengalaman wawancara yang cerdas dan adaptif
          </p>
        </div>

        {/* Main visual */}
        <div className="mb-16 relative">
          <div className="bg-linear-to-br from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-6">
                  Bagaimana AI Menganalisis Jawaban?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Speech to Text</h4>
                      <p className="text-blue-100 text-sm">Konversi jawaban audio/teks menjadi data terstruktur</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">NLP Analysis</h4>
                      <p className="text-blue-100 text-sm">Analisis sentiment, keyword, dan struktur jawaban</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Contextual Understanding</h4>
                      <p className="text-blue-100 text-sm">Memahami konteks dan relevansi dengan pertanyaan</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Competency Scoring</h4>
                      <p className="text-blue-100 text-sm">Penilaian berdasarkan kompetensi yang dibutuhkan</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Adaptive Follow-up</h4>
                      <p className="text-blue-100 text-sm">Generate pertanyaan lanjutan yang relevan</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="text-center">
                    <Brain className="w-20 h-20 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">AI Engine</h4>
                    <p className="text-gray-600">Powered by advanced NLP</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
                      <div className="text-xs text-gray-600">Accuracy</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-1">&lt;1s</div>
                      <div className="text-xs text-gray-600">Response Time</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">15+</div>
                      <div className="text-xs text-gray-600">Languages</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-1">50K+</div>
                      <div className="text-xs text-gray-600">Interviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech features grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {techFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-linear-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-linear-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ingin Tahu Lebih Detail tentang Teknologi Kami?
          </h3>
          <p className="text-gray-600 mb-6">
            Baca whitepaper kami atau hubungi tim untuk demo mendalam
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md font-semibold">
              Download Whitepaper
            </button>
            <button className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}