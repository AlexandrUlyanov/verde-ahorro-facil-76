
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Wifi, Home, Shield, Car, Phone, Sun, Battery, CreditCard } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Luz y gas",
      description: "Energía para tu hogar",
      color: "text-yellow-600 bg-yellow-100",
      logo: "/lovable-uploads/0706301c-4ef6-45f1-b7c7-f30169b76a42.png" // Plenitude logo
    },
    {
      icon: Wifi,
      title: "Internet y móvil",
      description: "Conectividad completa",
      color: "text-purple-600 bg-purple-100",
      logo: "/lovable-uploads/07da68c2-c969-48be-a4e6-9d79d1886a0d.png"
    },
    {
      icon: Shield,
      title: "Alarmas",
      description: "Seguridad del hogar",
      color: "text-red-600 bg-red-100",
      logo: "/lovable-uploads/bc890bea-8b9c-4345-a46a-be51d1cfc8ff.png"
    },
    {
      icon: Home,
      title: "Hipotecas",
      description: "Financiación inmobiliaria",
      color: "text-blue-600 bg-blue-100",
      logo: "/lovable-uploads/191a829f-91fd-4a45-8f63-3cf2c623b979.png" // Wypo logo
    },
    {
      icon: CreditCard,
      title: "Seguros",
      description: "Protección integral",
      color: "text-green-600 bg-green-100",
      logo: "/lovable-uploads/191a829f-91fd-4a45-8f63-3cf2c623b979.png" // Bibe Seguros logo
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Servicios que <span className="text-emerald-600">analizamos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comparamos tu factura actual con las mejores ofertas del mercado en cada categoría
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg relative overflow-hidden h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500 group-hover:rotate-6`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <div className="mb-3 flex-grow flex items-center justify-center">
                  <img 
                    src={service.logo} 
                    alt={service.description}
                    className="h-10 mx-auto object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-8 max-w-4xl mx-auto border border-emerald-200">
            <h3 className="text-2xl font-bold text-emerald-700 mb-4">
              💡 ¿No encuentras tu servicio?
            </h3>
            <p className="text-xl text-gray-700">
              Analizamos cualquier factura recurrente. Solo súbela y te diremos si puedes ahorrar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
