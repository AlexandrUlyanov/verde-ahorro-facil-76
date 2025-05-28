
import HeroRevolutionary from "@/components/revolutionary/HeroRevolutionary";
import SavingsCalculator from "@/components/revolutionary/SavingsCalculator";
import SpainHeatMap from "@/components/revolutionary/SpainHeatMap";
import TestimonialsHolographic from "@/components/revolutionary/TestimonialsHolographic";
import GamifiedUploadForm from "@/components/revolutionary/GamifiedUploadForm";
import TrustElements3D from "@/components/revolutionary/TrustElements3D";
import HowItWorksParallax from "@/components/revolutionary/HowItWorksParallax";
import RealtimeNotifications from "@/components/revolutionary/RealtimeNotifications";
import FloatingCTA from "@/components/revolutionary/FloatingCTA";
import Footer from "@/components/Footer";

const RevolutionaryIndex = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 overflow-x-hidden">
      <HeroRevolutionary />
      <SavingsCalculator />
      <SpainHeatMap />
      <TestimonialsHolographic />
      <GamifiedUploadForm />
      <TrustElements3D />
      <HowItWorksParallax />
      <RealtimeNotifications />
      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default RevolutionaryIndex;
