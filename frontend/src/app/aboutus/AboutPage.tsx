import Navbar from "../components/landing/Navbar";
import AboutHero from "../components/about/AboutHero";
import ContactSection from "../components/about/ContactSection";
import MissionVisionSection from "../components/about/MissionVissionSection";
import PartnersSection from "../components/about/PartnerSection";
import StorySection from "../components/about/StorySection";
import TeamSection from "../components/about/TeamSection";
import Footer from "../components/landing/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <MissionVisionSection />
      <StorySection />
      <TeamSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </>
  )
}