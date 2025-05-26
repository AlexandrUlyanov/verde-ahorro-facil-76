
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, Clock, Shield, Users, Zap, Heart } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Ahorro garantizado",
      description: "Entre 20% y 50% menos en tus facturas mensuales",
      stat: "Hasta 50%",
      color: "text-emerald-600 bg-emerald-100"
    },
    {
      icon: Clock,
      title: "Rápido y sencillo",
      description: "Solo necesitas 5 minutos para empezar a ahorrar",
      stat: "5 minutos",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: Shield,
      title: "100% seguro",
      description: "Proceso completamente seguro y confidencial",
      stat: "Sin riesgos",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: Users,
      title: "Para todos",
      description: "Empresas, autónomos, familias... todos pueden ahorrar",
      stat: "+10.000",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: Zap,
      title: "Sin interrupciones",
      description: "Cambios sin cortes de suministro ni molestias",
      stat: "0 cortes",
      color: "text-yellow-600 bg-yellow-100"
    },
    {
      icon: Heart,
      title: "Completamente gratis",
      description: "No cobramos por nuestro servicio de comparación",
      stat: "0€ coste",
      color: "text-red-600 bg-red-100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Por qué elegir <span className="text-emerald-600">entraYcompara</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos expertos en encontrar las mejores ofertas del mercado. 
            Tu tranquilidad y ahorro son nuestra prioridad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 ${benefit.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                      <span className="text-sm font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                        {benefit.stat}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Sabías que la mayoría de personas pagan hasta un 40% más de lo necesario?
            </h3>
            <p className="text-lg text-gray-600">
              Las compañías cuentan con que no compares precios. Nosotros hacemos el trabajo por ti, 
              <span className="font-semibold text-emerald-600"> completamente gratis</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
