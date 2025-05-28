
import TrustBadge from "./hero/TrustBadge";
import BenefitCards from "./hero/BenefitCards";
import HeroCTAs from "./hero/HeroCTAs";
import VideoPlayer from "./hero/VideoPlayer";
import SuccessStories from "./hero/SuccessStories";
import MobileCTA from "./hero/MobileCTA";

const Hero = () => {
  const scrollToUpload = () => {
    document.getElementById('subir-factura')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hola! Quiero que analicéis mi factura para ver cuánto puedo ahorrar. ¿Me podéis ayudar?");
    window.open(`https://wa.me/34681930144?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-500 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <TrustBadge />

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
                ¿Cansado de <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">facturas abusivas?</span> Ahorra hasta un <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">50%</span> sin cambiar tus hábitos
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in">
                Te analizamos gratis tu factura en menos de 24h. Sin compromiso.
              </p>

              <BenefitCards />

              <HeroCTAs 
                onUploadClick={scrollToUpload}
                onWhatsAppClick={openWhatsApp}
              />
            </div>

            {/* Right Column - Video */}
            <VideoPlayer />
          </div>

          <SuccessStories />
        </div>
      </div>

      <MobileCTA onUploadClick={scrollToUpload} />
    </section>
  );
};

export default Hero;
