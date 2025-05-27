
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import FileUploadSection from "@/components/FileUploadSection";
import Testimonials from "@/components/Testimonials";
import CompanyLogos from "@/components/CompanyLogos";
import TrustElements from "@/components/TrustElements";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <HowItWorks />
      <FileUploadSection />
      <Testimonials />
      <CompanyLogos />
      <TrustElements />
      <Footer />
    </div>
  );
};

export default Index;
