
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Calculator, Zap, Euro } from "lucide-react";

const SavingsCalculator = () => {
  const [billAmount, setBillAmount] = useState([120]);
  const [estimatedSavings, setEstimatedSavings] = useState(0);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([]);

  useEffect(() => {
    const savings = Math.floor(billAmount[0] * 0.3 + Math.random() * billAmount[0] * 0.2);
    setEstimatedSavings(savings);
  }, [billAmount]);

  const handleSliderChange = (value: number[]) => {
    setBillAmount(value);
    
    // Generar partículas al mover el slider
    const newParticles = [...Array(5)].map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
    setParticles(newParticles);
    
    setTimeout(() => setParticles([]), 1000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            <Calculator className="inline mr-4 text-emerald-600" />
            Calculadora de Ahorro Interactiva
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Arrastra el control y descubre al instante cuánto podrías ahorrar
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-white to-emerald-50 shadow-2xl border-0 relative overflow-hidden">
            <CardContent className="p-12">
              {/* Partículas de efecto */}
              {particles.map(particle => (
                <div
                  key={particle.id}
                  className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-ping"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    animationDuration: '0.5s'
                  }}
                />
              ))}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Control del slider */}
                <div className="space-y-8">
                  <div className="text-center">
                    <label className="text-xl font-semibold text-gray-700 mb-4 block">
                      ¿Cuánto pagas al mes en facturas?
                    </label>
                    <div className="text-6xl font-bold text-emerald-600 mb-8">
                      €{billAmount[0]}
                    </div>
                  </div>

                  <div className="px-4">
                    <Slider
                      value={billAmount}
                      onValueChange={handleSliderChange}
                      max={500}
                      min={30}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>€30</span>
                      <span>€500+</span>
                    </div>
                  </div>
                </div>

                {/* Resultado del ahorro */}
                <div className="text-center">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-500">
                    <Zap className="w-12 h-12 mx-auto mb-4 animate-pulse" />
                    <h3 className="text-2xl font-bold mb-4">Tu ahorro estimado:</h3>
                    <div className="text-5xl font-black mb-2 animate-pulse">
                      €{estimatedSavings}
                    </div>
                    <div className="text-lg opacity-90">al mes</div>
                    <div className="text-3xl font-bold mt-4 border-t border-emerald-400 pt-4">
                      €{estimatedSavings * 12} al año
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-orange-100 rounded-xl border-l-4 border-orange-500">
                    <div className="flex items-center">
                      <Euro className="w-5 h-5 text-orange-600 mr-2" />
                      <span className="text-orange-800 font-medium">
                        ¡Esto es solo una estimación! El análisis real puede encontrar aún más ahorro.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
