import React, { useState } from 'react';
import Link from 'next/link';
import { Brain, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
            <Brain className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Smart Interview</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-600 hover:text-blue-600 transition font-medium">
              Fitur
            </Link>
            <Link href="/how-it-works" className="text-gray-600 hover:text-blue-600 transition font-medium">
              Cara Kerja
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-600 transition font-medium">
              Harga
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition font-medium">
              Tentang
            </Link>
            <Link href="/login" className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition">
              Masuk
            </Link>
            <Link href="/register" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md font-medium">
              Daftar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                href="/features"
                className="text-gray-600 hover:text-blue-600 transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Fitur
              </Link>
              <Link
                href="/how-it-works"
                className="text-gray-600 hover:text-blue-600 transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Cara Kerja
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-blue-600 transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Harga
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-blue-600 transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang
              </Link>
              <Link
                href="/login"
                className="text-blue-600 hover:text-blue-700 font-medium transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Masuk
              </Link>
              <Link
                href="/register"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Daftar
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}