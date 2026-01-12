'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  color?: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'indigo';
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  benefits,
  color = 'blue'
}: FeatureCardProps) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200',
    pink: 'bg-pink-50 text-pink-600 border-pink-200',
    indigo: 'bg-indigo-50 text-indigo-600 border-indigo-200',
  };

  const iconBgClasses = {
    blue: 'bg-blue-100',
    purple: 'bg-purple-100',
    green: 'bg-green-100',
    orange: 'bg-orange-100',
    pink: 'bg-pink-100',
    indigo: 'bg-indigo-100',
  };

  const iconColorClasses = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    green: 'text-green-600',
    orange: 'text-orange-600',
    pink: 'text-pink-600',
    indigo: 'text-indigo-600',
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
      <div className={`w-16 h-16 ${iconBgClasses[color]} rounded-xl flex items-center justify-center mb-6`}>
        <Icon className={`w-8 h-8 ${iconColorClasses[color]}`} />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
          Keuntungan:
        </h4>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className={`w-5 h-5 rounded-full ${iconBgClasses[color]} flex items-center justify-center shrink-0 mt-0.5`}>
                <span className={`w-2 h-2 rounded-full ${colorClasses[color].split(' ')[1]}`}></span>
              </span>
              <span className="text-gray-700 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}