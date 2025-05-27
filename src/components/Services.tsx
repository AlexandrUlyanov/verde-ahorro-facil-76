
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Wifi, Home, Shield, Car, Phone, Sun, Battery } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Electricidad",
      description: "Wypo",
      color: "text-yellow-600 bg-yellow-100",
      savings: "Hasta 300€/año",
      logo: "/lovable-uploads/b69d5555-7e1b-455b-a791-d68b06705c1d.png"
    },
    {
      icon: Home,
      title: "Gas Natural",
      description: "Bibe",
      color: "text-blue-600 bg-blue-100",
      savings: "Hasta 200€/año",
      logo: "/lovable-uploads/84c1cc4f-a946-4d33-85ef-75dbc9d3f079.png"
    },
    {
      icon: Zap,
      title: "Energía Verde",
      description: "Plenitude",
      color: "text-green-600 bg-green-100",
      savings: "Hasta 350€/año",
      logo: "/lovable-uploads/449f55fe-0435-40a7-9a35-1e3f3b479371.png"
    },
    {
      icon: Shield,
      title: "Alarmas",
      description: "ADT",
      color: "text-red-600 bg-red-100",
      savings: "Hasta 150€/año",
      logo: "/lovable-uploads/bc890bea-8b9c-4345-a46a-be51d1cfc8ff.png"
    },
    {
      icon: Wifi,
      title: "Internet y Móvil",
      description: "Finetwork",
      color: "text-purple-600 bg-purple-100",
      savings: "Hasta 180€/año",
      logo: "/lovable-uploads/07da68c2-c969-48be-a4e6-9d79d1886a0d.png"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 bg-emerald-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                {service.savings}
              </div>
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 ${service.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 group-hover:rotate-6`}>
                  <service.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <div className="mb-4">
                  <img 
                    src={service.logo} 
                    alt={service.description}
                    className="h-12 mx-auto object-contain"
                  />
                </div>
                <p className="text-gray-600 text-lg">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-8 max-w-4xl mx-auto border border-emerald-200">
            <p className="text-xl text-gray-700 mb-4">
              <span className="font-bold text-emerald-600">¿No ves tu servicio?</span> 
            </p>
            <p className="text-lg text-gray-600">
              Analizamos cualquier factura recurrente. Solo sube la que quieras revisar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
