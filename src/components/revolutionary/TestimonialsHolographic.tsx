
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Star, Play, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  savings: number;
  service: string;
  quote: string;
  avatar: string;
  videoUrl?: string;
}

const TestimonialsHolographic = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isHolographicActive, setIsHolographicActive] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "María González",
      location: "Madrid",
      savings: 156,
      service: "Electricidad + Gas",
      quote: "No podía creer que fuera tan fácil. En una semana reduje mis facturas un 40%.",
      avatar: "👩‍💼"
    },
    {
      id: 2,
      name: "Carlos Ruiz",
      location: "Barcelona", 
      savings: 203,
      service: "Internet + Móvil",
      quote: "El ahorro fue inmediato. Ahora tengo más dinero para mi familia.",
      avatar: "👨‍🔧"
    },
    {
      id: 3,
      name: "Ana Martín",
      location: "Valencia",
      savings: 127,
      service: "Seguros + Telefonía",
      quote: "El servicio superó todas mis expectativas. Recomiendo 100%.",
      avatar: "👩‍🎓"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Testimonios Holográficos
          </h2>
          <p className="text-xl text-gray-600">Historias reales de ahorro transformador</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Holographic Display */}
          <div className="relative">
            <div 
              className={`relative perspective-1000 transform transition-all duration-1000 ${
                isHolographicActive ? 'scale-105 rotate-y-5' : ''
              }`}
              onMouseEnter={() => setIsHolographicActive(true)}
              onMouseLeave={() => setIsHolographicActive(false)}
            >
              <Card className="p-8 bg-gradient-to-br from-white/90 to-emerald-50/50 backdrop-blur-lg border-2 border-emerald-200 shadow-2xl relative overflow-hidden">
                {/* Holographic effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-200/20 to-transparent transform skew-x-12 animate-pulse" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl">{currentTestimonial.avatar}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{currentTestimonial.name}</h3>
                      <p className="text-emerald-600 font-semibold">{currentTestimonial.location}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-emerald-500 mb-4" />
                    <p className="text-lg text-gray-700 italic leading-relaxed">
                      "{currentTestimonial.quote}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-emerald-600">€{currentTestimonial.savings}</div>
                      <div className="text-sm text-gray-600">ahorrado/mes</div>
                    </div>
                  </div>
                </div>

                {/* 3D effect layers */}
                <div className="absolute inset-0 bg-emerald-400/10 transform translate-x-2 translate-y-2 rounded-lg -z-10" />
                <div className="absolute inset-0 bg-emerald-600/5 transform translate-x-4 translate-y-4 rounded-lg -z-20" />
              </Card>
            </div>
          </div>

          {/* Interactive Testimonial List */}
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  index === activeTestimonial
                    ? 'bg-emerald-100 border-2 border-emerald-300 shadow-lg'
                    : 'bg-white border border-gray-200 hover:bg-emerald-50'
                }`}
                onClick={() => setActiveTestimonial(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.service}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-emerald-600">€{testimonial.savings}</div>
                    <div className="text-xs text-gray-500">mes</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTestimonial ? 'bg-emerald-500 w-8' : 'bg-gray-300'
              }`}
              onClick={() => setActiveTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHolographic;
