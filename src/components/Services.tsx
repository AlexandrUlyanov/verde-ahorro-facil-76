
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Wifi, Home, Shield, Car, Phone, Banknote, Calculator } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Luz",
      description: "Compañías eléctricas",
      color: "text-yellow-600 bg-yellow-100"
    },
    {
      icon: Home,
      title: "Gas",
      description: "Suministro de gas natural",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: Wifi,
      title: "Internet",
      description: "Fibra y móvil",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: Phone,
      title: "Teléfono",
      description: "Líneas fijas y móviles",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: Shield,
      title: "Seguros",
      description: "Auto, hogar, vida",
      color: "text-red-600 bg-red-100"
    },
    {
      icon: Banknote,
      title: "Hipotecas",
      description: "Préstamos hipotecarios",
      color: "text-emerald-600 bg-emerald-100"
    },
    {
      icon: Car,
      title: "Combustible",
      description: "Tarjetas de descuento",
      color: "text-orange-600 bg-orange-100"
    },
    {
      icon: Calculator,
      title: "Otros servicios",
      description: "Cualquier factura recurrente",
      color: "text-gray-600 bg-gray-100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comparamos <span className="text-emerald-600">todos</span> tus servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde facturas de luz hasta seguros. Analizamos cada uno de tus gastos esenciales 
            para encontrar las mejores opciones del mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            <span className="font-semibold text-emerald-600">¿No ves tu servicio?</span> 
            {" "}Contacta con nosotros, comparamos cualquier factura recurrente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
