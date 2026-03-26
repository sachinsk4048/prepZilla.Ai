//frontend\src\Pages\LandingPage.jsx

import Navbar from "../components/layout/Navbar";
import Hero from "../components/landingPage/Hero";
import Footer from "../components/landingPage/Footer";
import TrustedCompanies from "../components/landingPage/TrustedCompanies";
import PrepareSection from "../components/landingPage/PrepareSection";
import StatsCounter from "../components/landingPage/StatsCounter";
import TestimonialCarousel from "../components/landingPage/TestimonialCarousel";
import CTASection from "../components/landingPage/CTASection";

function LandingPage() {
  return (
<div className="hero-bg relative min-h-screen pt-20 text-gray-900 overflow-hidden">      <div className="grid-bg"></div>
       <div className="blob blob1"></div>
  <div className="blob blob2"></div>
  <div className="blob blob3"></div>


      <Navbar />

      <Hero />
      <TrustedCompanies />
      <PrepareSection />
      <StatsCounter />
       <TestimonialCarousel />
      <CTASection />
      <Footer />

    </div>
  );
}

export default LandingPage;