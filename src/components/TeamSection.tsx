
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, TrendingUp, Phone } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Markel Rodríguez",
      role: "Fundador & CEO",
      experience: "8 años en sector energético",
      speciality: "Ex-Endesa, especialista en tarifas",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      achievements: "Ha gestionado +50.000 contratos energéticos"
    },
    {
      name: "Ana Martínez",
      role: "Directora Comercial",
      experience: "12 años en consultoría energética",
      speciality: "Experta en ahorro empresarial",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b547?w=400&h=400&fit=crop&crop=face",
      achievements: "Certificada por CNMC en mediación energética"
    },
    {
      name: "Carlos Vega", 
      role: "Analista Senior",
      experience: "6 años en comparación de tarifas",
      speciality: "Matemático especializado en optimización",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      achievements: "Procesó +15.000 análisis con 98% precisión"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "15.342",
      label: "Familias asesoradas",
      period: "En 2024"
    },
    {
      icon: TrendingUp,
      number: "€4.2M",
      label: "Ahorrado a clientes",
      period: "Total acumulado"
    },
    {
      icon: Award,
      number: "96%", 
      label: "Satisfacción cliente",
      period: "Valoración media 4.8/5"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            El equipo detrás de tu <span className="text-emerald-600">ahorro</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesionales con décadas de experiencia en el sector energético, trabajando para optimizar tu factura.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {team.map((member, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-gradient-to-br from-white to-emerald-50 overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-emerald-200 shadow-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-emerald-600 font-semibold mb-2">{member.role}</div>
                <div className="text-gray-600 text-sm mb-4">{member.experience}</div>
                
                <div className="bg-emerald-100 rounded-xl p-4 mb-4">
                  <div className="text-sm text-emerald-800 font-medium">{member.speciality}</div>
                </div>
                
                <div className="text-xs text-gray-500 italic">{member.achievements}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-10 max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.period}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🤝 Háblanos directamente</h3>
            <p className="text-xl opacity-90 mb-6">
              Nuestro equipo está disponible para resolver cualquier duda sobre tu factura
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/34681930144" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                WhatsApp: +34 681 930 144
              </a>
              <a 
                href="mailto:info.entraycompara@gmail.com"
                className="bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                Email: info.entraycompara@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
