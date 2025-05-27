
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, MessageSquare, Shield, Clock } from "lucide-react";

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
            Análisis gratuito en menos de 24h • Sin compromiso
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-fade-in">
            ¿Quieres pagar <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">menos</span><br />
            en tus facturas?
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            <span className="font-semibold">Envíanos una factura y te decimos cuánto puedes ahorrar.</span><br />
            Analizamos gratis tus facturas de luz, gas, móvil, seguros o alarmas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in">
            <Button 
              onClick={scrollToUpload}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 min-w-[200px]"
            >
              <Upload className="mr-3 w-6 h-6" />
              Subir factura
            </Button>
            <Button 
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 min-w-[200px]"
            >
              <MessageSquare className="mr-3 w-6 h-6" />
              Enviar por WhatsApp
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 animate-fade-in">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
              <Clock className="w-8 h-8 text-emerald-600" />
              <div className="text-left">
                <div className="text-xl font-bold text-gray-900">< 24h</div>
                <div className="text-sm text-gray-600">Tiempo respuesta</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">€</span>
              </div>
              <div className="text-left">
                <div className="text-xl font-bold text-gray-900">20-50%</div>
                <div className="text-sm text-gray-600">Ahorro típico</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">✓</span>
              </div>
              <div className="text-left">
                <div className="text-xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Gratuito</div>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-12 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-2xl p-6 shadow-xl max-w-2xl mx-auto animate-fade-in">
            <h3 className="text-xl font-bold mb-2">💡 Si no mejoramos tu tarifa, no pagas nada</h3>
            <p className="opacity-90">Sin letra pequeña. Solo trabajamos con compañías legales y reguladas en España.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
