
import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, FileText, Check, X, MessageSquare, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FileUploadSection = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles]);
    
    toast({
      title: "Archivos añadidos",
      description: `${droppedFiles.length} archivo(s) listo(s) para analizar`,
    });
  }, [toast]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...selectedFiles]);
      
      toast({
        title: "Archivos seleccionados",
        description: `${selectedFiles.length} archivo(s) añadido(s)`,
      });
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (files.length === 0) {
      toast({
        title: "Error",
        description: "Por favor, sube al menos una factura",
        variant: "destructive",
      });
      return;
    }

    if (!email || !phone || !name) {
      toast({
        title: "Error", 
        description: "Por favor, completa todos los campos obligatorios",
        variant: "destructive",
      });
      return;
    }

    // Simulación de envío
    toast({
      title: "¡Solicitud enviada!",
      description: "Analizaremos tus facturas y te contactaremos en menos de 24h.",
    });

    // Reset form
    setFiles([]);
    setEmail("");
    setPhone("");
    setName("");
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hola! Quiero que analicéis mi factura para ver cuánto puedo ahorrar. ¿Puedo enviaros la factura por aquí?");
    window.open(`https://wa.me/34681930144?text=${message}`, '_blank');
  };

  return (
    <section id="subir-factura" className="py-20 bg-gradient-to-br from-emerald-600 to-green-700 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sube tu factura y descubre tu <span className="text-emerald-200">ahorro</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Análisis gratuito en menos de 24h. Sin compromiso ni letra pequeña.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* File Upload */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Subir facturas</h3>
                
                <div
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                    isDragging 
                      ? 'border-white bg-white/20' 
                      : 'border-white/40 hover:border-white/60 hover:bg-white/5'
                  }`}
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  onDragEnter={() => setIsDragging(true)}
                  onDragLeave={() => setIsDragging(false)}
                >
                  <Upload className="w-16 h-16 text-white/80 mx-auto mb-4" />
                  <p className="text-white/90 text-lg mb-4">
                    Arrastra tus facturas aquí o haz clic para seleccionar
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold cursor-pointer hover:bg-emerald-50 transition-colors inline-block"
                  >
                    Seleccionar archivos
                  </label>
                  <p className="text-white/70 text-sm mt-4">
                    PDF, JPG, PNG, DOC... cualquier formato
                  </p>
                </div>

                {/* File List */}
                {files.length > 0 && (
                  <div className="mt-6 space-y-3">
                    {files.map((file, index) => (
                      <div key={index} className="bg-white/10 rounded-lg p-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-white" />
                          <span className="text-white font-medium">{file.name}</span>
                        </div>
                        <button
                          onClick={() => removeFile(index)}
                          className="text-white/70 hover:text-white transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 text-center">
                  <Button
                    onClick={openWhatsApp}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
                  >
                    <MessageSquare className="mr-2 w-5 h-5" />
                    O enviar por WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Tus datos de contacto</h3>
                
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
                      placeholder="+34 681 930 144"
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
                    Enviar para análisis gratuito
                  </Button>
                </form>

                <div className="mt-8 space-y-4">
                  <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                    <h4 className="font-semibold text-white mb-2">También puedes contactarnos:</h4>
                    <div className="space-y-2 text-sm text-white/90">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>info.entraycompara@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>+34 681 930 144</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        <span>WhatsApp: +34 681 930 144</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto">
              <h4 className="text-xl font-bold text-white mb-3">🔒 100% Seguro y Confidencial</h4>
              <p className="text-white/90">
                Tus datos están protegidos con encriptación SSL. Cumplimos con RGPD. 
                Solo usamos tu información para el análisis de ahorro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileUploadSection;
