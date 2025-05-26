
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingDown, DollarSign } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-500 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <TrendingDown className="w-4 h-4" />
            Ahorra hasta un 50% en tus facturas
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              entraYcompara
            </span>
            <br />
            <span className="text-3xl md:text-5xl text-gray-700">
              Tu dinero vale más
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Comparamos todas tus facturas de servicios esenciales y te ayudamos a conseguir el mejor precio. 
            <span className="font-semibold text-emerald-600"> Sin complicaciones, sin cambios molestos.</span>
          </p>

          {/* Stats */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 animate-fade-in">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
              <DollarSign className="w-8 h-8 text-emerald-600" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">20-50%</div>
                <div className="text-sm text-gray-600">Ahorro mensual</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">⚡</span>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">5 min</div>
                <div className="text-sm text-gray-600">Proceso completo</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">✓</span>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Gratuito</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              onClick={scrollToContact}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Empezar ahora gratis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg rounded-xl"
            >
              Ver cómo funciona
            </Button>
          </div>

          {/* Trust indicators */}
          <p className="text-sm text-gray-500 mt-8 animate-fade-in">
            ✓ Sin compromisos ✓ Proceso 100% online ✓ Resultados garantizados
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
