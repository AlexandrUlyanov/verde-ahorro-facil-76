
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
      content: "Con entraYcompara ahorré 418 €/año solo en luz y móvil. Muy fácil y sin llamadas raras. Lo recomiendo 100%.",
      saving: "418€/año",
      rating: 5,
      avatar: "MG",
      service: "Luz + Móvil"
    },
    {
      name: "Ángel C.",
      location: "Valencia",
      content: "Pensé que era como otros... pero me sorprendió. ¡Ahora pago menos en mi tienda! El análisis fue muy profesional.",
      saving: "720€/año",
      rating: 5,
      avatar: "AC",
      service: "Negocio"
    },
    {
      name: "Carmen R.",
      location: "Sevilla",
      content: "Solo subí mi factura de gas y en un día tenía 3 ofertas mejores. Cambié y ahora ahorro cada mes. Increíble.",
      saving: "156€/año",
      rating: 5,
      avatar: "CR",
      service: "Gas"
    },
    {
      name: "José L.",
      location: "Madrid",
      content: "Mi seguro del coche era carísimo. Me encontraron uno igual por 280€ menos. El servicio fue excelente.",
      saving: "280€/año",
      rating: 5,
      avatar: "JL",
      service: "Seguro coche"
    },
    {
      name: "Ana M.",
      location: "Barcelona",
      content: "Como familia numerosa gastábamos mucho. Ahora con las nuevas tarifas ahorramos más de 500€ al año.",
      saving: "567€/año",
      rating: 5,
      avatar: "AM",
      service: "Familia numerosa"
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
            Testimonios reales de personas que ya están ahorrando con nosotros
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
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                          {testimonial.avatar}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                          <p className="text-emerald-600 text-sm font-medium">{testimonial.location}</p>
                          <p className="text-gray-500 text-sm">{testimonial.service}</p>
                        </div>
                        <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">
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
                <div className="text-4xl font-bold text-emerald-600 mb-2">< 24h</div>
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
