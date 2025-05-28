
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, TrendingUp } from "lucide-react";

const CredibilitySection = () => {
  const mediaLogos = [
    { name: "El País", logo: "🗞️" },
    { name: "CNMC", logo: "🏛️" },
    { name: "OCU", logo: "👥" },
    { name: "20 Minutos", logo: "📰" }
  ];

  const certifications = [
    { name: "RGPD Certificado", icon: Shield },
    { name: "CNMC Supervisado", icon: Award },
    { name: "SSL Seguro", icon: Shield },
    { name: "ISO 27001", icon: Award }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Respaldados por <span className="text-emerald-600">expertos</span> y medios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confianza avalada por organismos oficiales y reconocimiento mediático
          </p>
        </div>

        {/* Logos de medios */}
        <div className="mb-12">
          <p className="text-center text-gray-500 text-sm mb-6">Mencionados en:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {mediaLogos.map((media, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-600">
                <span className="text-2xl">{media.logo}</span>
                <span className="font-medium">{media.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certificaciones */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {certifications.map((cert, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-emerald-100">
              <CardContent className="p-4">
                <cert.icon className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">{cert.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Estadísticas destacadas */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">15.342</div>
              <div className="text-gray-600">Facturas analizadas este mes</div>
              <div className="text-sm text-emerald-600 font-medium mt-1">📈 +23% vs mes anterior</div>
            </div>
            <div>
              <TrendingUp className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">€4.2M</div>
              <div className="text-gray-600">Ahorrados a nuestros clientes</div>
              <div className="text-sm text-emerald-600 font-medium mt-1">💰 Solo en 2024</div>
            </div>
            <div>
              <Award className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Clientes satisfechos</div>
              <div className="text-sm text-emerald-600 font-medium mt-1">⭐ Valoración media 4.9/5</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
