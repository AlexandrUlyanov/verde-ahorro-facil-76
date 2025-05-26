
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Search, FileText, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "1. Sube tus facturas",
      description: "Envíanos fotos o archivos de tus facturas actuales. Aceptamos cualquier formato.",
      detail: "PDF, fotos, facturas en papel... todo vale"
    },
    {
      icon: Search,
      title: "2. Analizamos el mercado",
      description: "Nuestro equipo compara tu situación actual con más de 200 ofertas disponibles.",
      detail: "Revisamos todas las compañías y ofertas"
    },
    {
      icon: FileText,
      title: "3. Te presentamos opciones",
      description: "Recibes un informe personalizado con las mejores alternativas y el ahorro exacto.",
      detail: "Propuestas claras con ahorro calculado"
    },
    {
      icon: CheckCircle,
      title: "4. Gestionamos el cambio",
      description: "Si decides cambiar, nos encargamos de todos los trámites por ti.",
      detail: "Sin papeleos ni llamadas molestas"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Así de <span className="text-emerald-600">fácil</span> es ahorrar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso simple y transparente diseñado para que ahorres sin complicaciones.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-emerald-200 z-0" />
                )}
                
                <Card className="relative z-10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-emerald-50">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <step.icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">{step.description}</p>
                    <p className="text-sm text-emerald-600 font-medium">{step.detail}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">⏱️ El proceso completo lleva menos de 48 horas</h3>
              <p className="text-lg opacity-90">
                Desde que nos envías tus facturas hasta que recibes las mejores propuestas. 
                ¡Así de rápido empiezas a ahorrar!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
