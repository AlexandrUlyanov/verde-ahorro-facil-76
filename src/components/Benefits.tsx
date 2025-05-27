
import { Card, CardContent } from "@/components/ui/card";
import { Shield, UserCheck, Zap, Clock, Euro, CheckCircle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "100% gratuito",
      description: "Revisión completa sin compromiso ni costes ocultos",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: UserCheck,
      title: "Asesor personal",
      description: "Te acompaña un experto durante todo el proceso",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: Clock,
      title: "Análisis en 24h",
      description: "Respuesta rápida con propuestas de ahorro personalizadas",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: Zap,
      title: "Múltiples servicios",
      description: "Luz, gas, móvil, fibra, seguros y alarmas",
      color: "text-orange-600 bg-orange-100"
    },
    {
      icon: Euro,
      title: "Ahorro garantizado",
      description: "Solo cobramos si conseguimos mejorarte la tarifa",
      color: "text-teal-600 bg-teal-100"
    },
    {
      icon: Shield,
      title: "Máxima seguridad",
      description: "Tus datos están protegidos y nunca los compartimos",
      color: "text-emerald-600 bg-emerald-100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Por qué elegir <span className="text-emerald-600">entraYcompara?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos expertos en encontrar la tarifa perfecta para ti, sin complicaciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg relative overflow-hidden bg-gradient-to-br from-white to-gray-50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 ${benefit.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 group-hover:rotate-6`}>
                  <benefit.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-8 max-w-4xl mx-auto border border-emerald-200">
            <h3 className="text-2xl font-bold text-emerald-700 mb-4">
              🎯 Nuestro objetivo es simple
            </h3>
            <p className="text-xl text-gray-700">
              Que pagues menos sin renunciar a la calidad de tus servicios
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
