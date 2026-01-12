import React from "react"
import Navbar from "../components/landing/Navbar"
import HowItWorksHero from "../components/how-it-works/HowItWorksHero"
import DetailedStepsSection from "../components/how-it-works/DetailedStepsSection"
import TimelineSection from "../components/how-it-works/TimelineSection"
import AITechnologySection from "../components/how-it-works/AITechnologySection"
import UserJourneySection from "../components/how-it-works/UserJourneySection"
import CTASection from "../components/landing/CtaSection"
import Footer from "../components/landing/Footer"

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <HowItWorksHero />
      <DetailedStepsSection />
      <TimelineSection />
      <UserJourneySection />
      <AITechnologySection />
      <CTASection />
      <Footer />
    </>
  )
}