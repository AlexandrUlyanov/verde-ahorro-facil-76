
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, MessageSquare, Shield, Clock, TrendingDown, Play } from "lucide-react";

const Hero = () => {
  const scrollToUpload = () => {
    document.getElementById('subir-factura')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hola! Quiero que analicéis mi factura para ver cuánto puedo ahorrar. ¿Me podéis ayudar?");
    window.open(`https://wa.me/34600123456?text=${message}`, '_blank');
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
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
                <Shield className="w-4 h-4" />
                Análisis 100% gratuito • Sin compromiso • Expertos reales
              </div>

              {/* Main Heading - Según experto */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
                ¿Por qué seguir <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">pagando de más?</span>
              </h1>

              {/* Subtítulo según experto */}
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in">
                Te analizamos gratis tu factura en menos de 24h. Sin compromiso.
              </p>

              {/* Beneficios rápidos visuales */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 animate-fade-in">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-emerald-200">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">Ahorro garantizado</span>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-emerald-200">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">Revisión en 24h</span>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-emerald-200">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">Asesor personal</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons más prominentes */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-12 animate-fade-in">
                <Button 
                  onClick={scrollToUpload}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-8 text-2xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 min-w-[300px] font-bold"
                >
                  <Upload className="mr-4 w-8 h-8" />
                  Subir factura ahora
                </Button>
                <Button 
                  onClick={openWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <MessageSquare className="mr-3 w-6 h-6" />
                  WhatsApp directo
                </Button>
              </div>
            </div>

            {/* Right Column - Video */}
            <div className="relative">
              <div className="aspect-video bg-gray-900 rounded-3xl shadow-2xl overflow-hidden relative group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=450&fit=crop" 
                  alt="Video explicativo de cómo ahorrar en facturas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
                  <Button className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-full w-24 h-24 p-0 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-10 h-10 ml-1" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  2:00 min - Cómo funciona
                </div>
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  SIN SONIDO
                </div>
              </div>
            </div>
          </div>

          {/* Casos de éxito rápidos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-16 animate-fade-in">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-200">
              <div className="text-left">
                <div className="text-emerald-600 font-bold text-lg mb-2">María (Madrid)</div>
                <div className="text-gray-700 mb-2">Ahorró <span className="font-bold text-emerald-700">322€/año</span> en 2 facturas</div>
                <div className="text-sm text-gray-600">"No sabía que podía ahorrar tanto sin cambiar nada"</div>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-200">
              <div className="text-left">
                <div className="text-emerald-600 font-bold text-lg mb-2">Carlos (Valencia)</div>
                <div className="text-gray-700 mb-2">Bajó <span className="font-bold text-emerald-700">41€/mes</span> móvil + luz</div>
                <div className="text-sm text-gray-600">"El proceso fue súper fácil y rápido"</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA for mobile */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <Button 
          onClick={scrollToUpload}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-lg font-bold rounded-2xl shadow-2xl"
        >
          <Upload className="mr-2 w-5 h-5" />
          Subir factura gratis
        </Button>
      </div>
    </section>
  );
};

export default Hero;
