'use client';

import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Punya pertanyaan atau ingin bermitra dengan kami? Tim kami siap membantu!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informasi Kontak
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">hello@smartinterview.id</p>
                    <p className="text-gray-600">support@smartinterview.id</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telepon</h4>
                    <p className="text-gray-600">+62 21 5555 8888</p>
                    <p className="text-gray-600">+62 812 3456 7890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Alamat Kantor</h4>
                    <p className="text-gray-600">
                      Menara Rajawali Lantai 15<br />
                      Jl. DR. Ide Anak Agung Gde Agung<br />
                      Kawasan Mega Kuningan, Jakarta Selatan<br />
                      DKI Jakarta 12950
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Live Chat</h4>
                    <p className="text-gray-600">
                      Senin - Jumat: 09:00 - 18:00 WIB<br />
                      Response time: &lt;5 menit
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ikuti Kami
              </h3>
              <div className="flex space-x-3">
                <button className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition">
                  <Linkedin className="w-6 h-6 text-white" />
                </button>
                <button className="w-12 h-12 bg-sky-500 hover:bg-sky-600 rounded-lg flex items-center justify-center transition">
                  <Twitter className="w-6 h-6 text-white" />
                </button>
                <button className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition">
                  <Instagram className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-linear-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Kirim Pesan
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Perusahaan
                </label>
                <input
                  type="text"
                  placeholder="Nama perusahaan (opsional)"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subjek
                </label>
                <select className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition">
                  <option>Partnership</option>
                  <option>Product Demo</option>
                  <option>Technical Support</option>
                  <option>General Inquiry</option>
                  <option>Media</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  rows={4}
                  placeholder="Tulis pesan Anda di sini..."
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md font-semibold"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16">
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">Google Maps Location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}