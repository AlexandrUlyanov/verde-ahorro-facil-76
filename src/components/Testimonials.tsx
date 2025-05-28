
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María G.",
      location: "Zaragoza",
      content: "Con entraYcompara ahorré más de 400€ sin cambiar de compañía. Rápido y sin líos.",
      saving: "418€/año",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b547?w=400&h=400&fit=crop&crop=face",
      service: "Luz + Gas"
    },
    {
      name: "Laura T.",
      location: "Bilbao",
      content: "Pensaba que estaba pagando lo justo… hasta que me enseñaron cuánto podía ahorrar.",
      saving: "286€/año",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      service: "Electricidad"
    },
    {
      name: "Carlos V.",
      location: "Valencia",
      content: "Me sorprendió lo fácil que fue. En menos de 24 h ya tenía una tarifa mejor.",
      saving: "41€/mes",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      service: "Internet + Móvil"
    },
    {
      name: "Andrea C.",
      location: "Madrid",
      content: "No tuve que hacer nada. Ellos lo compararon todo por mí. Literalmente ahorro sin moverme.",
      saving: "172€/año",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      service: "Luz"
    },
    {
      name: "Facto RS - Empresa",
      location: "Barcelona",
      content: "Gracias a entraYcompara, optimizamos nuestras facturas de luz, gas e internet en la empresa. El ahorro ha sido brutal.",
      saving: "5.304,93€",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      service: "Empresa",
      isCompany: true,
      hasProof: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros <span className="text-emerald-600">clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimonios reales de personas y empresas que ya están ahorrando con nosotros
          </p>
          
          {/* Video testimonial destacado */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=300&fit=crop" 
                alt="Video testimonial destacado"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
                <div className="bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Play className="w-8 h-8 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                📹 Testimonio de María - Ahorró 418€
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.name} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-emerald-50 h-full relative overflow-hidden">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-4 border-emerald-200 shadow-lg">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                          <p className="text-emerald-600 text-sm font-medium">{testimonial.location}</p>
                          <p className="text-gray-500 text-sm">{testimonial.service}</p>
                        </div>
                      </div>

                      {/* Ahorro destacado visualmente */}
                      <div className="text-center mb-6">
                        <div className={`inline-block px-6 py-4 rounded-2xl text-white font-bold shadow-lg ${
                          testimonial.isCompany ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-emerald-500 to-green-500'
                        }`}>
                          <div className="text-3xl font-black">{testimonial.saving}</div>
                          <div className="text-sm opacity-90">de ahorro</div>
                        </div>
                      </div>

                      <div className="relative flex-1">
                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-emerald-200" />
                        <p className="text-gray-700 leading-relaxed pl-6 mb-6 italic flex-1">
                          "{testimonial.content}"
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        
                        {testimonial.hasProof && (
                          <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                            ✓ Con pruebas
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-10 shadow-xl max-w-5xl mx-auto border border-emerald-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">15.342</div>
                <div className="text-gray-600 font-medium">Facturas analizadas este mes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">€318</div>
                <div className="text-gray-600 font-medium">Ahorro medio/hogar</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">€1.420</div>
                <div className="text-gray-600 font-medium">Ahorro medio/negocio</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">&lt; 18h</div>
                <div className="text-gray-600 font-medium">Tiempo respuesta medio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
