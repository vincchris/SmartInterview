import React from "react";

export default function CTASection() {
  return (
    <section className="py-20 bg-linear-to-br from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-white mb-6">
          Siap memulai Wawancara Anda?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Bergabunglah dengan ribuan kandidat yang telah merasakan pengalaman wawancara yang lebih baik
        </p>
        <button className="px-10 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition shadow-xl font-bold text-lg">
          Mulai Sekarang - Gratis
        </button>
      </div>
    </section>
  )
}