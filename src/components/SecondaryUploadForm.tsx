
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Check, MessageSquare, Phone, Mail, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SecondaryUploadForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !phone || !name) {
      toast({
        title: "Error", 
        description: "Por favor, completa todos los campos obligatorios",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "¡Solicitud enviada!",
      description: "Te contactaremos en menos de 24h para analizar tu caso.",
    });

    setEmail("");
    setPhone("");
    setName("");
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hola! He visto vuestra web y quiero que analicéis mis facturas para ver cuánto puedo ahorrar. ¿Podemos hablar?");
    window.open(`https://wa.me/34600123456?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-green-700">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para <span className="text-emerald-200">empezar a ahorrar?</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Déjanos tus datos y te contactaremos para analizar tus facturas de forma personalizada
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Análisis personalizado</h3>
                
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

                  <Button 
                    type="submit"
                    className="w-full bg-white text-emerald-600 hover:bg-emerald-50 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <Check className="mr-2 w-5 h-5" />
                    Solicitar análisis gratuito
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact alternatives */}
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <h4 className="font-bold text-white text-xl mb-4">¿Prefieres contactar directamente?</h4>
                  
                  <div className="space-y-4">
                    <Button
                      onClick={openWhatsApp}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg rounded-xl shadow-lg"
                    >
                      <MessageSquare className="mr-3 w-6 h-6" />
                      WhatsApp directo
                    </Button>
                    
                    <div className="grid grid-cols-1 gap-3 text-white/90 text-sm">
                      <div className="flex items-center gap-2 bg-white/10 rounded-lg p-3">
                        <Mail className="w-4 h-4" />
                        <span>info@entraycompara.com</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 rounded-lg p-3">
                        <Phone className="w-4 h-4" />
                        <span>900 123 456 (gratuito)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <h4 className="font-bold text-white text-lg mb-3">🎯 ¿Qué conseguirás?</h4>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-300" />
                      Análisis completo en 24h
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-300" />
                      Propuestas personalizadas
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-300" />
                      Asesor personal asignado
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-300" />
                      Solo pagas si ahorras
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryUploadForm;
