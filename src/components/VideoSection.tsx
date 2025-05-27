
import { Button } from "@/components/ui/button";
import { Play, Users, Euro, Clock } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video Player */}
            <div className="relative">
              <div className="aspect-video bg-gray-900 rounded-2xl shadow-2xl overflow-hidden relative group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=450&fit=crop" 
                  alt="Video explicativo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
                  <Button className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-full w-20 h-20 p-0 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8 ml-1" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  2:15 min
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Descubre cómo <span className="text-emerald-600">ahorrar</span> en 2 minutos
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Markel te explica paso a paso cómo funciona nuestro análisis gratuito y por qué miles de familias ya están ahorrando hasta 300€ al mes.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">15.000+</div>
                  <div className="text-sm text-gray-600">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Euro className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">218€</div>
                  <div className="text-sm text-gray-600">Ahorro medio</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">&lt; 24h</div>
                  <div className="text-sm text-gray-600">Respuesta</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Ver video completo
                </Button>
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg rounded-xl">
                  Subir mi factura
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
