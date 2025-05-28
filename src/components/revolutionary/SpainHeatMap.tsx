
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, TrendingUp } from "lucide-react";

const SpainHeatMap = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [realTimeData, setRealTimeData] = useState({
    madrid: { savings: 45234, families: 1247 },
    barcelona: { savings: 38902, families: 1089 },
    valencia: { savings: 23456, families: 678 },
    sevilla: { savings: 19823, families: 543 },
    bilbao: { savings: 15647, families: 423 }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        madrid: { 
          savings: prev.madrid.savings + Math.floor(Math.random() * 100), 
          families: prev.madrid.families + Math.floor(Math.random() * 3) 
        },
        barcelona: { 
          savings: prev.barcelona.savings + Math.floor(Math.random() * 80), 
          families: prev.barcelona.families + Math.floor(Math.random() * 2) 
        },
        valencia: { 
          savings: prev.valencia.savings + Math.floor(Math.random() * 60), 
          families: prev.valencia.families + Math.floor(Math.random() * 2) 
        },
        sevilla: { 
          savings: prev.sevilla.savings + Math.floor(Math.random() * 50), 
          families: prev.sevilla.families + Math.floor(Math.random() * 2) 
        },
        bilbao: { 
          savings: prev.bilbao.savings + Math.floor(Math.random() * 40), 
          families: prev.bilbao.families + Math.floor(Math.random() * 1) 
        }
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const regions = [
    { id: 'madrid', name: 'Madrid', x: 50, y: 60, intensity: 'high' },
    { id: 'barcelona', name: 'Barcelona', x: 75, y: 45, intensity: 'high' },
    { id: 'valencia', name: 'Valencia', x: 70, y: 65, intensity: 'medium' },
    { id: 'sevilla', name: 'Sevilla', x: 35, y: 80, intensity: 'medium' },
    { id: 'bilbao', name: 'Bilbao', x: 45, y: 25, intensity: 'low' }
  ];

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'high': return 'bg-red-500 shadow-red-500/50';
      case 'medium': return 'bg-orange-500 shadow-orange-500/50';
      case 'low': return 'bg-green-500 shadow-green-500/50';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <MapPin className="inline mr-4 text-emerald-400" />
            Mapa de Ahorro de España
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Visualización en tiempo real de donde más familias están ahorrando
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Mapa interactivo */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 backdrop-blur-lg border-emerald-500/20">
              <CardContent className="p-8">
                <div className="relative w-full h-96 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl overflow-hidden">
                  {/* Fondo del mapa de España simplificado */}
                  <div className="absolute inset-0 opacity-20">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path
                        d="M20,70 Q30,50 50,60 Q70,40 80,60 Q85,70 75,80 Q50,90 25,85 Z"
                        fill="currentColor"
                        className="text-emerald-300"
                      />
                    </svg>
                  </div>

                  {/* Puntos de calor */}
                  {regions.map((region) => (
                    <div
                      key={region.id}
                      className={`absolute w-6 h-6 rounded-full ${getIntensityColor(region.intensity)} animate-pulse cursor-pointer transform -translate-x-3 -translate-y-3 hover:scale-150 transition-all duration-300 shadow-lg`}
                      style={{ left: `${region.x}%`, top: `${region.y}%` }}
                      onMouseEnter={() => setActiveRegion(region.id)}
                      onMouseLeave={() => setActiveRegion(null)}
                    >
                      {activeRegion === region.id && (
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white p-3 rounded-lg whitespace-nowrap z-10">
                          <div className="font-bold">{region.name}</div>
                          <div className="text-sm">
                            €{realTimeData[region.id as keyof typeof realTimeData]?.savings.toLocaleString()} ahorrado
                          </div>
                          <div className="text-sm">
                            {realTimeData[region.id as keyof typeof realTimeData]?.families} familias
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Alto ahorro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span>Medio ahorro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Ahorro inicial</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Estadísticas en tiempo real */}
          <div className="space-y-6">
            <Card className="bg-emerald-800/50 backdrop-blur-lg border-emerald-400/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-xl font-bold">Top Regiones</h3>
                </div>

                <div className="space-y-4">
                  {Object.entries(realTimeData)
                    .sort(([,a], [,b]) => b.savings - a.savings)
                    .slice(0, 3)
                    .map(([city, data], index) => (
                    <div key={city} className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                      <div>
                        <div className="font-semibold capitalize">{city}</div>
                        <div className="text-sm opacity-75">{data.families} familias</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-emerald-300">€{data.savings.toLocaleString()}</div>
                        <div className="text-xs opacity-75">ahorrado</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-orange-800/50 backdrop-blur-lg border-orange-400/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">
                  {Object.values(realTimeData).reduce((sum, region) => sum + region.families, 0)}
                </div>
                <div className="text-sm opacity-90">Total familias ayudadas</div>
                
                <div className="text-3xl font-bold text-orange-300 mb-2 mt-4">
                  €{Object.values(realTimeData).reduce((sum, region) => sum + region.savings, 0).toLocaleString()}
                </div>
                <div className="text-sm opacity-90">Ahorro total acumulado</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpainHeatMap;
