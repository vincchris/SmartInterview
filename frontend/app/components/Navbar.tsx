import React from "react";
import { Brain } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-blue-600"/>
            <span className="text-xl font-bold text-gray-900">Smart Interview</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition">
              Fitur
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition">
              Cara Kerja
            </a>
            <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition">
              Benefits
            </a>
            <button className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition">
              Login
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}