
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import VideoSection from "@/components/VideoSection";
import FileUploadSection from "@/components/FileUploadSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import TrustElements from "@/components/TrustElements";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Services />
      <HowItWorks />
      <VideoSection />
      <FileUploadSection />
      <Testimonials />
      <FAQ />
      <TrustElements />
      <Footer />
    </div>
  );
};

export default Index;
