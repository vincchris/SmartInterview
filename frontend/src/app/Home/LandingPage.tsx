import React from "react"
import Navbar from "../components/landing/Navbar"
import HeroSection from "../components/landing/HeroSection"
import FeaturesSection from "../components/landing/FeaturesSection"
import HowItWorksSection from "../components/landing/HowItWorksSection"
import CTASection from "../components/landing/CtaSection"
import Footer from "../components/landing/Footer"

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </>
  )
}