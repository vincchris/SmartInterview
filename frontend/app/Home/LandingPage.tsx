"use client"

import React from "react"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import FeaturesSection from "../components/FeaturesSection"
import HowItWorksSection from "../components/HowItWorksSection"
import CTASection from "../components/CtaSection"
import Footer from "../components/Footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  )
}