'use client';

import React from 'react';
import { Brain, MessageSquare, Target, CheckCircle, Users, Clock } from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: Brain,
    title: 'Pertanyaan Adaptif',
    description: 'AI menyesuaikan pertanyaan berdasarkan jawaban kandidat secara real-time',
    color: 'blue'
  },
  {
    icon: MessageSquare,
    title: 'Analisis NLP Mendalam',
    description: 'Memahami konteks, sentiment, dan kualitas jawaban dengan akurat',
    color: 'purple'
  },
  {
    icon: Target,
    title: 'Penilaian Objektif',
    description: 'Evaluasi berbasis data tanpa bias untuk hasil yang lebih fair',
    color: 'green'
  },
  {
    icon: CheckCircle,
    title: 'Feedback Instan',
    description: 'Dapatkan hasil dan rekomendasi segera setelah wawancara',
    color: 'orange'
  },
  {
    icon: Users,
    title: 'Multi-Role Support',
    description: 'Cocok untuk berbagai posisi dari entry-level hingga executive',
    color: 'pink'
  },
  {
    icon: Clock,
    title: 'Efisien & Fleksibel',
    description: 'Lakukan wawancara kapan saja, di mana saja sesuai kenyamanan Anda',
    color: 'indigo'
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Fitur Unggulan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Teknologi NLP terdepan untuk pengalaman wawancara yang lebih baik
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className={`w-7 h-7 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}