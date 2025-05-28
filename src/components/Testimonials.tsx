
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
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
      image: "/lovable-uploads/db2ebc81-2959-4661-ba4e-e4730b090c7f.png",
      service: "Luz + Gas"
    },
    {
      name: "Laura T.",
      location: "Bilbao",
      content: "Pensaba que estaba pagando lo justo… hasta que me enseñaron cuánto podía ahorrar.",
      saving: "286€/año",
      rating: 5,
      image: "/lovable-uploads/db2ebc81-2959-4661-ba4e-e4730b090c7f.png",
      service: "Electricidad"
    },
    {
      name: "Carlos V.",
      location: "Valencia",
      content: "Me sorprendió lo fácil que fue. En menos de 24 h ya tenía una tarifa mejor.",
      saving: "41€/mes",
      rating: 5,
      image: "/lovable-uploads/db2ebc81-2959-4661-ba4e-e4730b090c7f.png",
      service: "Internet + Móvil"
    },
    {
      name: "Andrea C.",
      location: "Madrid",
      content: "No tuve que hacer nada. Ellos lo compararon todo por mí. Literalmente ahorro sin moverme.",
      saving: "172€/año",
      rating: 5,
      image: "/lovable-uploads/db2ebc81-2959-4661-ba4e-e4730b090c7f.png",
      service: "Luz"
    },
    {
      name: "Facto RS - Empresa",
      location: "Barcelona",
      content: "Gracias a entraYcompara, optimizamos nuestras facturas de luz, gas e internet en la empresa. El ahorro ha sido brutal.",
      saving: "5.304,93€",
      rating: 5,
      image: "/lovable-uploads/db2ebc81-2959-4661-ba4e-e4730b090c7f.png",
      service: "Empresa",
      isCompany: true
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
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.name} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-emerald-50 h-full">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-4 border-emerald-200">
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
                        <div className={`px-3 py-1 rounded-full text-sm font-bold text-white ${
                          testimonial.isCompany ? 'bg-orange-600' : 'bg-emerald-600'
                        }`}>
                          {testimonial.saving}
                        </div>
                      </div>

                      <div className="relative flex-1">
                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-emerald-200" />
                        <p className="text-gray-700 leading-relaxed pl-6 mb-6 italic flex-1">
                          "{testimonial.content}"
                        </p>
                      </div>

                      <div className="flex items-center gap-1 mt-auto">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
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
                <div className="text-4xl font-bold text-emerald-600 mb-2">+15.000</div>
                <div className="text-gray-600 font-medium">Clientes asesorados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">218€</div>
                <div className="text-gray-600 font-medium">Ahorro medio/hogar</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">1.120€</div>
                <div className="text-gray-600 font-medium">Ahorro medio/negocio</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">&lt; 24h</div>
                <div className="text-gray-600 font-medium">Tiempo respuesta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
