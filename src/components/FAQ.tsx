
import { Card, CardContent } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Clock, Euro, FileText, Phone, UserX, RefreshCw, CheckCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Tengo que cambiar de compañía?",
      answer: "Sí, ya que por ahora solo trabajamos con Plenitude por los ahorros significativos que puedes hacer.",
      icon: RefreshCw
    },
    {
      question: "¿Cuánto tiempo tarda el proceso completo?",
      answer: "El análisis inicial lo tienes en menos de 24 horas. Si decides proceder con nuestras recomendaciones, te acompañamos en todo el proceso.",
      icon: Clock
    },
    {
      question: "¿Qué pasa si no consiguen mejorar mi tarifa?",
      answer: "Si no encontramos una mejora significativa en tu tarifa actual, no hay ningún coste para ti. Nuestro servicio es 100% gratuito si no conseguimos ahorrarte dinero. Solo cobramos una pequeña comisión a las compañías cuando te ayudamos a ahorrar.",
      icon: CheckCircle
    },
    {
      question: "¿Y si no quiero contratar nada al final?",
      answer: "No pasa absolutamente nada. El análisis es completamente gratuito y sin compromiso. Solo te presentamos opciones mejores que tu tarifa actual, pero la decisión final es 100% tuya. No hay presión ni obligaciones.",
      icon: UserX
    },
    {
      question: "¿Qué pasa con mis datos personales?",
      answer: "Tus datos están 100% protegidos con cifrado SSL y cumplimos estrictamente con la RGPD. Solo usamos tu información para analizar tu factura y contactarte con propuestas de ahorro. Nunca vendemos ni compartimos tus datos con terceros.",
      icon: Shield
    },
    {
      question: "¿Este servicio es realmente gratuito?",
      answer: "Sí, es 100% gratuito para ti. Solo cobramos una pequeña comisión a las compañías cuando consigues una tarifa mejor. Si no mejoramos tu factura, no hay ningún coste para ti. Así de simple.",
      icon: Euro
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Resolvemos tus <span className="text-emerald-600">dudas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Las preguntas más frecuentes sobre nuestro servicio de análisis de facturas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-emerald-100">
                    <AccordionTrigger className="text-left hover:text-emerald-600 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <faq.icon className="w-5 h-5 text-emerald-600" />
                        </div>
                        <span className="font-semibold text-lg">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-lg leading-relaxed pl-14 pr-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">🛡️ Máxima seguridad y transparencia</h3>
              <p className="text-xl mb-6 opacity-90">Si tienes más preguntas, nuestro equipo está aquí para ayudarte</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/34681930144" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp: +34 681 930 144
                </a>
                <a 
                  href="mailto:info.entraycompara@gmail.com"
                  className="bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-800 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  info.entraycompara@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
