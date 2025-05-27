
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Search, FileText } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "① Sube tu factura",
      description: "O mándala por WhatsApp. Aceptamos cualquier formato: PDF, fotos, facturas en papel...",
      detail: "Drag & drop o envío directo",
      bgColor: "from-emerald-500 to-green-500"
    },
    {
      icon: Search,
      title: "② La analizamos gratis",
      description: "Nuestro equipo la revisa en menos de 24h y compara con +200 ofertas del mercado.",
      detail: "Análisis profesional garantizado",
      bgColor: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "③ Te enviamos el estudio",
      description: "Recibes un informe claro con tu ahorro exacto y las mejores alternativas disponibles.",
      detail: "Sin compromiso ni letra pequeña",
      bgColor: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proceso <span className="text-emerald-600">paso a paso</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso simple y transparente. En menos de 24h sabrás exactamente cuánto puedes ahorrar.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-32 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-emerald-300 to-blue-300"></div>
            <div className="hidden md:block absolute top-32 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
            
            {steps.map((step, index) => (
              <div key={step.title} className="relative z-10">
                <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-white overflow-hidden group">
                  <CardContent className="p-8 text-center relative">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.bgColor} text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      <step.icon className="w-10 h-10" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-lg">{step.description}</p>
                    <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-200">
                      <p className="text-sm text-emerald-700 font-medium">{step.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-3xl p-10 shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">⏱️ Todo el proceso en menos de 48 horas</h3>
              <p className="text-xl opacity-90 leading-relaxed">
                Desde que nos envías tu factura hasta que tienes el análisis completo con tu ahorro calculado.
                <span className="block mt-2 font-semibold">¡Así de rápido empiezas a ahorrar!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
