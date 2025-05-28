
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp } from "lucide-react";

const HeroRevolutionary = () => {
  const [todaysSavings, setTodaysSavings] = useState(23456);
  const [familiesHelped, setFamiliesHelped] = useState(1247);
  const [isTextAnimating, setIsTextAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTodaysSavings(prev => prev + Math.floor(Math.random() * 50) + 10);
      setFamiliesHelped(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000);

    const textInterval = setInterval(() => {
      setIsTextAnimating(true);
      setTimeout(() => setIsTextAnimating(false), 2000);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Partículas animadas de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Gradiente dinámico */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 via-teal-500/10 to-green-600/5 animate-pulse" />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Headline principal con tipografía dinámica */}
        <h1 className={`text-6xl md:text-8xl font-black mb-8 transition-all duration-2000 ${
          isTextAnimating 
            ? 'bg-gradient-to-r from-red-600 via-orange-500 to-emerald-600 bg-clip-text text-transparent' 
            : 'bg-gradient-to-r from-emerald-600 via-teal-500 to-green-600 bg-clip-text text-transparent'
        }`}>
          TRANSFORMA TUS<br />
          <span className="block transform hover:scale-105 transition-transform duration-500">
            FACTURAS EN AHORROS
          </span>
        </h1>

        {/* Contador en tiempo real */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 mb-12 shadow-2xl border border-emerald-200 mx-auto max-w-2xl">
          <p className="text-xl text-gray-700 mb-4">📊 En tiempo real:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2 transition-all duration-1000">
                €{todaysSavings.toLocaleString()}
              </div>
              <div className="text-gray-600">Ahorrado hoy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2 transition-all duration-1000">
                {familiesHelped}
              </div>
              <div className="text-gray-600">Familias ayudadas</div>
            </div>
          </div>
        </div>

        {/* CTA Principal 3D */}
        <div className="group relative mb-8">
          <Button 
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-16 py-8 text-2xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-emerald-500/25 border-4 border-emerald-400/20"
            style={{
              boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3), 0 0 0 1px rgba(16, 185, 129, 0.1)',
              transform: 'perspective(1000px) rotateX(-5deg)'
            }}
          >
            <Sparkles className="mr-4 w-8 h-8" />
            <span className="group-hover:hidden">DESCUBRE TU AHORRO</span>
            <span className="hidden group-hover:inline">Análisis gratuito en 24h</span>
          </Button>
          
          {/* Efecto de profundidad */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 to-teal-800 rounded-2xl transform translate-y-2 -z-10 opacity-50 group-hover:translate-y-3 transition-transform duration-300" />
        </div>

        {/* Indicadores de confianza */}
        <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <span className="text-sm text-gray-600">Ahorro medio: €318/año</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-600">87 análisis en cola</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <span className="text-sm text-gray-600">100% Gratuito y sin compromiso</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroRevolutionary;
