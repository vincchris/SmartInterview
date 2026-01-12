import React from "react";
import { ArrowRight } from "lucide-react";

interface Step {
  step: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    step: '1',
    title: 'Daftar & Login',
    desc: 'Buat akun dan lengkapi profil Anda'
  },
  {
    step: '2',
    title: 'Pilih Posisi',
    desc: 'Tentukan role yang ingin Anda lamar'
  },
  {
    step: '3',
    title: 'Mulai Interview',
    desc: 'Jawab pertanyaan AI secara interaktif'
  },
  {
    step: '4',
    title: 'Terima Hasil',
    desc: 'Dapatkan analisis dan feedback lengkap'
  }
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-linear-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cara Kerja
          </h2>
          <p className="text-4xl text-gray-600">
            Proses Wawancara yang simple dan efektif dalam 4 langkah
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-blue-300"/>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}