
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María García",
      role: "Familia de 4 personas",
      content: "Increíble el ahorro que hemos conseguido. Entre luz, gas e internet ahora pagamos 180€ menos al mes. El proceso fue súper fácil.",
      saving: "180€/mes",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "Carlos Ruiz",
      role: "Autónomo",
      content: "Como autónomo cada euro cuenta. EntraYcompara me ayudó a reducir mis gastos fijos en un 35%. Totalmente recomendable.",
      saving: "35% ahorro",
      rating: 5,
      avatar: "CR"
    },
    {
      name: "Ana López",
      role: "Pequeña empresa",
      content: "Llevamos años pagando lo mismo sin comparar. En solo una semana conseguimos ofertas mucho mejores para todos nuestros servicios.",
      saving: "45% ahorro",
      rating: 5,
      avatar: "AL"
    },
    {
      name: "José Martín",
      role: "Jubilado",
      content: "Pensaba que cambiar de compañía era muy complicado, pero ellos se encargaron de todo. Ahora mi pensión me llega mucho más lejos.",
      saving: "120€/mes",
      rating: 5,
      avatar: "JM"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros <span className="text-emerald-600">clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Miles de familias, autónomos y empresas ya están ahorrando con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-emerald-600 text-sm">{testimonial.role}</p>
                  </div>
                  <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">
                    {testimonial.saving}
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-emerald-200" />
                  <p className="text-gray-700 leading-relaxed pl-6 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">+10.000</div>
                <div className="text-gray-600">Clientes satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">4.9/5</div>
                <div className="text-gray-600">Valoración media</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">€2.8M</div>
                <div className="text-gray-600">Ahorro total generado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
