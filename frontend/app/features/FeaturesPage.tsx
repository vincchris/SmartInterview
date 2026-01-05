"use client"

import React from "react"
import Navbar from "../components/landing/Navbar"
import FeaturesHero from "../components/features/FeaturesHero"
import DetailedFeaturesSection from "../components/features/DetailedFeatureSection"
import ComparisonSection from "../components/features/ComparisonSection"
import FAQSection from "../components/features/FAQSection"
import CTASection from "../components/landing/CtaSection"
import Footer from "../components/landing/Footer"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <FeaturesHero />
      <DetailedFeaturesSection />
      <ComparisonSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  )
}