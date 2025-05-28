
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import VideoSection from "@/components/VideoSection";
import SavingsCalculator from "@/components/SavingsCalculator";
import FileUploadSection from "@/components/FileUploadSection";
import Testimonials from "@/components/Testimonials";
import SecondaryUploadForm from "@/components/SecondaryUploadForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <HowItWorks />
      <Services />
      <VideoSection />
      <SavingsCalculator />
      <FileUploadSection />
      <Testimonials />
      <SecondaryUploadForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
