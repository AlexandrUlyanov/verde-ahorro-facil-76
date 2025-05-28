
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import FileDropZone from "./file-upload/FileDropZone";
import ContactForm from "./file-upload/ContactForm";
import ContactInfo from "./file-upload/ContactInfo";
import SecurityNote from "./file-upload/SecurityNote";

const FileUploadSection = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hola! Quiero que analicéis mi factura para ver cuánto puedo ahorrar. ¿Puedo enviaros la factura por aquí?");
    window.open(`https://wa.me/34681930144?text=${message}`, '_blank');
  };

  const handleFormReset = () => {
    setFiles([]);
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
          
          {/* Indicador de progreso */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mt-6">
            <div className="w-8 h-8 bg-emerald-400 text-emerald-900 rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <span className="text-white font-medium">Paso 1 de 2: Sube tu factura</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* File Upload */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Subir facturas</h3>
                <FileDropZone
                  files={files}
                  setFiles={setFiles}
                  isDragging={isDragging}
                  setIsDragging={setIsDragging}
                  onWhatsAppClick={openWhatsApp}
                />
              </CardContent>
            </Card>

            {/* Formulario simplificado */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Datos básicos</h3>
                <ContactForm files={files} onFormReset={handleFormReset} />
                <div className="mt-8 space-y-4">
                  <ContactInfo />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <SecurityNote />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileUploadSection;
