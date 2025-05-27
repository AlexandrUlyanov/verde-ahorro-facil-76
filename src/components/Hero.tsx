
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, MessageSquare, Shield, Clock, TrendingDown } from "lucide-react";

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
        <div className="text-center max-w-6xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Shield className="w-4 h-4" />
            Análisis 100% gratuito • Sin compromiso • Expertos reales
          </div>

          {/* Main Heading - Más directo y enfocado en ahorro */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-fade-in">
            Ahorra hasta <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">500€/año</span><br />
            en tus facturas
          </h1>

          {/* Subtitle más específico */}
          <div className="mb-8 animate-fade-in">
            <p className="text-2xl md:text-3xl font-semibold text-emerald-700 mb-4">
              Te lo demostramos gratis
            </p>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Solo sube una factura y nuestros expertos te dirán si puedes pagar menos
            </p>
          </div>

          {/* Beneficios rápidos visuales */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-emerald-200">
              <div className="flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-medium text-gray-700">Sin cambiar de compañía</span>
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
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in">
            <Button 
              onClick={scrollToUpload}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-6 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 min-w-[250px] font-bold"
            >
              <Upload className="mr-3 w-6 h-6" />
              Subir factura para analizar
            </Button>
            <Button 
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 min-w-[250px]"
            >
              <MessageSquare className="mr-3 w-6 h-6" />
              Consultar por WhatsApp
            </Button>
          </div>

          {/* Casos de éxito rápidos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12 animate-fade-in">
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

          {/* Guarantee más destacada */}
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-2xl p-8 shadow-xl max-w-3xl mx-auto animate-fade-in">
            <h3 className="text-2xl font-bold mb-3">💡 Garantía de ahorro</h3>
            <p className="text-lg opacity-95 mb-4">Si no te encontramos una factura más barata, el análisis es completamente gratis</p>
            <p className="text-emerald-100 text-sm">Solo trabajamos con compañías legales y reguladas en España</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
