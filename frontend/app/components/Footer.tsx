import React from "react";
import { Brain } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="w-6 h-6 text-blue-500" />
              <span className="text-white font-bold">Smart Interview</span>
            </div>
            <p className="text-sm">
              Platform wawancara kerja berbasis AI untuk masa depan rekrutmen yang lebih baik.
            </p>
          </div>

          {/* Produk */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produk</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">Fitur</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Harga</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Demo</a>
              </li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="text-white font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">Tentang</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Karir</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">Privacy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Terms</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2026 Smart Interview System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}