
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Upload, Mail, Phone, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulación de envío
    toast({
      title: "¡Solicitud enviada!",
      description: "Nos pondremos en contacto contigo en las próximas 24 horas.",
    });

    // Reset form
    setEmail("");
    setPhone("");
    setName("");
    setMessage("");
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-emerald-600 to-green-700 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Empieza a ahorrar <span className="text-emerald-200">hoy mismo</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Envíanos tus datos y facturas. En menos de 48 horas tendrás las mejores ofertas del mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Solicita tu análisis gratuito</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Nombre completo *
                  </label>
                  <Input
                    type="text"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white focus:ring-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white focus:ring-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Teléfono *
                  </label>
                  <Input
                    type="tel"
                    placeholder="600 000 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white focus:ring-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Cuéntanos sobre tus facturas (opcional)
                  </label>
                  <textarea
                    placeholder="Ej: Familia de 4, facturas de luz altas, contrato de gas antiguo..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="w-full bg-white/10 border border-white/30 rounded-lg p-3 text-white placeholder:text-white/60 focus:border-white focus:ring-1 focus:ring-white resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-white text-emerald-600 hover:bg-emerald-50 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Solicitar análisis gratuito
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Benefits and Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">¿Qué incluye el análisis?</h3>
                <div className="space-y-4">
                  {[
                    "Revisión completa de todas tus facturas",
                    "Comparación con +200 ofertas del mercado",
                    "Cálculo exacto de tu ahorro potencial",
                    "Recomendaciones personalizadas",
                    "Gestión completa del cambio (si lo deseas)"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-200 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-white">También puedes contactarnos:</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-emerald-200" />
                    <span className="text-white/90">info@entraycompara.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-emerald-200" />
                    <span className="text-white/90">900 123 456 (gratuito)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-emerald-200" />
                    <span className="text-white/90">WhatsApp: 600 123 456</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <Upload className="w-6 h-6 text-emerald-200" />
                <span className="font-semibold text-white">Envío de facturas</span>
              </div>
              <p className="text-white/90 text-sm">
                Después de enviar este formulario, te contactaremos para enviarnos 
                tus facturas de forma segura. Aceptamos fotos, PDFs o cualquier formato.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-white/80">
            <span className="font-semibold">100% confidencial</span> • <span className="font-semibold">Sin compromisos</span> • <span className="font-semibold">Completamente gratuito</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
