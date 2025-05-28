
import { useState, useEffect } from "react";
import { Upload, Search, Calculator, CheckCircle, Phone, Mail, TrendingUp } from "lucide-react";

const HowItWorksParallax = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Upload,
      title: "Sube tu Factura",
      description: "Arrastra o selecciona tu factura actual. Nuestro sistema la procesa en segundos.",
      details: "Formatos soportados: PDF, JPG, PNG. Procesamiento automático con IA.",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      stats: "< 30 segundos"
    },
    {
      icon: Search,
      title: "Análisis Inteligente",
      description: "Nuestros expertos analizan tu consumo y buscan las mejores ofertas del mercado.",
      details: "Comparamos más de 50 proveedores para encontrar tu tarifa ideal.",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100",
      stats: "24 horas"
    },
    {
      icon: Calculator,
      title: "Cálculo de Ahorro",
      description: "Calculamos tu ahorro potencial y te mostramos opciones personalizadas.",
      details: "Estimaciones precisas basadas en tu historial de consumo real.",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      stats: "Hasta 40% menos"
    },
    {
      icon: CheckCircle,
      title: "Cambio Gratuito",
      description: "Nosotros gestionamos todo el proceso de cambio. Tú solo disfrutas del ahorro.",
      details: "Sin cortes de suministro, sin papeleos, sin complicaciones.",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      stats: "0€ gestión"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Calculate which step should be active based on scroll position
      const sectionTop = window.scrollY;
      const stepHeight = window.innerHeight / steps.length;
      const newActiveStep = Math.min(
        Math.floor(sectionTop / stepHeight),
        steps.length - 1
      );
      setActiveStep(newActiveStep);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-full h-full bg-gradient-to-br from-emerald-200/20 to-teal-200/20"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        
        {/* Floating elements */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-emerald-300 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.2)}px)`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Cómo Funciona Nuestro Proceso
          </h2>
          <p className="text-xl text-gray-600">Un viaje interactivo hacia el ahorro</p>
        </div>

        {/* Interactive Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Steps Navigation */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 transform ${
                  index === activeStep 
                    ? 'scale-105 translate-x-4' 
                    : index < activeStep 
                      ? 'opacity-60 scale-95' 
                      : 'opacity-40 scale-90'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${step.bgColor} border-2 cursor-pointer ${
                  index === activeStep ? 'border-emerald-300 shadow-2xl' : 'border-transparent'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color} text-white shadow-lg`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      {index === activeStep && (
                        <div className="animate-fade-in">
                          <p className="text-sm text-gray-500 italic mb-2">{step.details}</p>
                          <div className="inline-block bg-white/80 px-3 py-1 rounded-full text-sm font-semibold text-emerald-700">
                            {step.stats}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className={`absolute left-8 top-full w-0.5 h-8 transition-all duration-500 ${
                    index < activeStep ? 'bg-emerald-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Visual Demonstration */}
          <div className="relative">
            <div 
              className="sticky top-20 transition-all duration-1000"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              {/* Main visualization card */}
              <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${steps[activeStep].bgColor} shadow-2xl border border-white/50 backdrop-blur-lg`}>
                <div className="text-center mb-8">
                  <div className={`inline-block p-6 rounded-2xl bg-gradient-to-r ${steps[activeStep].color} text-white shadow-xl mb-4`}>
                    <steps[activeStep].icon className="w-16 h-16" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {steps[activeStep].description}
                  </p>
                </div>

                {/* Step-specific content */}
                <div className="bg-white/70 rounded-2xl p-6">
                  {activeStep === 0 && (
                    <div className="text-center">
                      <Upload className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                      <div className="text-2xl font-bold text-blue-600 mb-2">Subiendo factura...</div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full animate-pulse" style={{width: '75%'}} />
                      </div>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="text-center">
                      <Search className="w-12 h-12 text-emerald-500 mx-auto mb-4 animate-spin" />
                      <div className="text-2xl font-bold text-emerald-600 mb-2">Analizando ofertas...</div>
                      <div className="text-sm text-gray-600">50+ proveedores comparados</div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="text-center">
                      <Calculator className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                      <div className="text-2xl font-bold text-purple-600 mb-2">Tu ahorro estimado:</div>
                      <div className="text-4xl font-black text-purple-700">€156/mes</div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="text-center">
                      <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                      <div className="text-2xl font-bold text-green-600 mb-2">¡Proceso completado!</div>
                      <div className="text-sm text-gray-600">Sin interrupciones en el servicio</div>
                    </div>
                  )}
                </div>

                {/* 3D effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl transform translate-x-2 translate-y-2 -z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">¿Necesitas ayuda en el proceso?</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 bg-white/80 px-6 py-3 rounded-full shadow-lg">
              <Phone className="w-5 h-5 text-emerald-600" />
              <span className="font-semibold">900 123 456</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 px-6 py-3 rounded-full shadow-lg">
              <Mail className="w-5 h-5 text-emerald-600" />
              <span className="font-semibold">ayuda@ahorro.com</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 px-6 py-3 rounded-full shadow-lg">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              <span className="font-semibold">Ahorro garantizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksParallax;
