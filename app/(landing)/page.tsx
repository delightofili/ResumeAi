import CTASection from "@/components/landing/CtaSection";
import FeaturesSection from "@/components/landing/FeatureSection";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import TemplatesSection from "@/components/landing/TemplatesSection";
import Navbar from "@/components/ui/Navbar";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TemplatesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
