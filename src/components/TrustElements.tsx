
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award, CheckCircle } from "lucide-react";

const TrustElements = () => {
  const trustElements = [
    {
      icon: Shield,
      title: "SSL Seguro",
      description: "Encriptación de datos",
      badge: "RGPD Compliant"
    },
    {
      icon: Clock,
      title: "Respuesta 24h",
      description: "Garantía de tiempo",
      badge: "Compromiso"
    },
    {
      icon: Award,
      title: "CNMC Regulado",
      description: "Solo compañías legales",
      badge: "Verificado"
    },
    {
      icon: CheckCircle,
      title: "Sin letra pequeña",
      description: "Transparencia total",
      badge: "Garantizado"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tu <span className="text-emerald-600">confianza</span> es lo primero
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {trustElements.map((element, index) => (
            <Card 
              key={element.title}
              className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-emerald-50 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 bg-emerald-600 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                {element.badge}
              </div>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <element.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{element.title}</h3>
                <p className="text-gray-600 text-sm">{element.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-2xl p-8 shadow-xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">💡 Garantía total</h3>
            <p className="text-lg opacity-90">
              <span className="font-semibold">Si no mejoramos tu tarifa, no pagas nada.</span><br />
              Sin compromisos, sin letra pequeña, sin sorpresas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustElements;
