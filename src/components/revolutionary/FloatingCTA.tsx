
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Upload, MessageSquare, Calculator, Users } from "lucide-react";

const FloatingCTA = () => {
  const [currentSection, setCurrentSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      setIsVisible(scrollY > windowHeight * 0.3);

      // Detectar sección actual basada en scroll
      if (scrollY < windowHeight) {
        setCurrentSection('hero');
      } else if (scrollY < windowHeight * 2) {
        setCurrentSection('calculator');
      } else if (scrollY < windowHeight * 3) {
        setCurrentSection('testimonials');
      } else {
        setCurrentSection('form');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCtaContent = () => {
    switch (currentSection) {
      case 'hero':
        return { icon: Upload, text: 'Subir factura', color: 'from-emerald-600 to-teal-600' };
      case 'calculator':
        return { icon: Calculator, text: 'Calcular ahorro', color: 'from-blue-600 to-purple-600' };
      case 'testimonials':
        return { icon: Users, text: 'Ver casos reales', color: 'from-orange-600 to-red-600' };
      case 'form':
        return { icon: MessageSquare, text: 'Contactar ahora', color: 'from-green-600 to-emerald-600' };
      default:
        return { icon: Upload, text: 'Empezar gratis', color: 'from-emerald-600 to-teal-600' };
    }
  };

  const { icon: Icon, text, color } = getCtaContent();

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button 
        className={`bg-gradient-to-r ${color} hover:scale-110 text-white px-6 py-4 rounded-full shadow-2xl transition-all duration-300 font-bold`}
        style={{
          boxShadow: '0 10px 30px rgba(0,0,0,0.3), 0 0 20px rgba(16, 185, 129, 0.3)'
        }}
      >
        <Icon className="mr-2 w-5 h-5" />
        {text}
      </Button>
      
      {/* Efecto de ondas */}
      <div className="absolute inset-0 rounded-full bg-emerald-400 opacity-30 animate-ping" />
      <div className="absolute inset-0 rounded-full bg-emerald-400 opacity-20 animate-ping" style={{ animationDelay: '0.5s' }} />
    </div>
  );
};

export default FloatingCTA;
