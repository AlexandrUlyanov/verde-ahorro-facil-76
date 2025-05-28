
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import VideoSection from "@/components/VideoSection";
import FileUploadSection from "@/components/FileUploadSection";
import Testimonials from "@/components/Testimonials";
import CredibilitySection from "@/components/CredibilitySection";
import Urgency from "@/components/Urgency";
import SecondaryUploadForm from "@/components/SecondaryUploadForm";
import FAQ from "@/components/FAQ";
import TrustElements from "@/components/TrustElements";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <HowItWorks />
      <Services />
      <VideoSection />
      <FileUploadSection />
      <Testimonials />
      <CredibilitySection />
      <Urgency />
      <SecondaryUploadForm />
      <FAQ />
      <TrustElements />
      <Footer />
    </div>
  );
};

export default Index;
