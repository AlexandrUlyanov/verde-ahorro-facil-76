
import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Scan, CheckCircle, Zap, Shield, Clock } from "lucide-react";

const GamifiedUploadForm = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setUploadedFile(file);
      startScanning();
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile(file);
      startScanning();
    }
  };

  const startScanning = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
      setStep(2);
    }, 3000);
  };

  const handleSubmit = () => {
    setStep(3);
    // Aquí iría la lógica de envío
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Sube tu Factura y Descubre tu Ahorro
          </h2>
          <p className="text-xl text-gray-600">Proceso gamificado en 3 pasos simples</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((stepNum) => (
                <div key={stepNum} className={`flex items-center ${stepNum < 3 ? 'flex-1' : ''}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold transition-all duration-500 ${
                    step >= stepNum ? 'bg-gradient-to-r from-purple-500 to-indigo-500 scale-110' : 'bg-gray-300'
                  }`}>
                    {step > stepNum ? <CheckCircle className="w-6 h-6" /> : stepNum}
                  </div>
                  {stepNum < 3 && (
                    <div className={`flex-1 h-2 mx-4 rounded transition-all duration-500 ${
                      step > stepNum ? 'bg-gradient-to-r from-purple-500 to-indigo-500' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subir Factura</span>
              <span>Datos Básicos</span>
              <span>Análisis Completo</span>
            </div>
          </div>

          {/* Step 1: File Upload */}
          {step === 1 && (
            <Card className="p-8 bg-white/80 backdrop-blur-lg border-2 border-dashed border-purple-300 hover:border-purple-500 transition-all duration-300">
              <div
                className={`relative p-12 rounded-xl transition-all duration-300 ${
                  dragActive 
                    ? 'bg-gradient-to-br from-purple-100 to-indigo-100 scale-105' 
                    : 'bg-gradient-to-br from-gray-50 to-gray-100'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {!uploadedFile && !isScanning && (
                  <div className="text-center">
                    <Upload className="w-16 h-16 text-purple-500 mx-auto mb-6 animate-bounce" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Arrastra tu factura aquí
                    </h3>
                    <p className="text-gray-600 mb-6">
                      O haz click para seleccionar el archivo
                    </p>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileInput}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload">
                      <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-3 cursor-pointer">
                        Seleccionar Archivo
                      </Button>
                    </label>
                  </div>
                )}

                {isScanning && (
                  <div className="text-center">
                    <Scan className="w-16 h-16 text-purple-500 mx-auto mb-6 animate-spin" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Escaneando tu factura...
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Analizando datos y calculando tu potencial de ahorro
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-3 rounded-full animate-pulse" style={{width: '60%'}} />
                    </div>
                  </div>
                )}

                {scanComplete && (
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-green-800 mb-4">
                      ¡Factura procesada!
                    </h3>
                    <p className="text-gray-600">
                      Archivo: {uploadedFile?.name}
                    </p>
                  </div>
                )}
              </div>
            </Card>
          )}

          {/* Step 2: Contact Info */}
          {step === 2 && (
            <Card className="p-8 bg-white/90 backdrop-blur-lg border border-purple-200 shadow-2xl">
              <div className="text-center mb-8">
                <Zap className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  ¡Casi listo para tu análisis!
                </h3>
                <p className="text-gray-600">Solo necesitamos tu número para enviarte los resultados</p>
              </div>

              <div className="max-w-md mx-auto space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Número de teléfono
                  </label>
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+34 600 000 000"
                    className="w-full px-4 py-3 text-lg border-2 border-purple-300 focus:border-purple-500 rounded-lg"
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={!phone}
                  className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-4 text-lg font-semibold disabled:opacity-50"
                >
                  Iniciar Análisis Prioritario
                </Button>

                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>100% Seguro</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Análisis en 24h</span>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 shadow-2xl text-center">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-green-800 mb-4">
                ¡Análisis en Proceso!
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Te enviaremos los resultados a tu teléfono en menos de 24 horas
              </p>
              <div className="bg-white/70 p-6 rounded-lg">
                <p className="text-sm text-gray-600">
                  Mientras tanto, nuestro equipo de expertos está analizando tu factura para encontrar las mejores oportunidades de ahorro.
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default GamifiedUploadForm;
