
import React, { useState, useEffect } from "react";
import { Shield, Award, Users, TrendingUp, Lock, CheckCircle } from "lucide-react";

const TrustElements3D = () => {
  const [activeElement, setActiveElement] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);

  const trustElements = [
    {
      icon: Shield,
      title: "Seguridad Garantizada",
      description: "Datos encriptados SSL 256 bits",
      stat: "100%",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      title: "Certificación ISO",
      description: "Estándares internacionales",
      stat: "ISO 27001",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Familias Atendidas",
      description: "Clientes satisfechos",
      stat: "15.847",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Ahorro Promedio",
      description: "Reducción en facturas",
      stat: "42%",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Lock,
      title: "Privacidad Total",
      description: "Sin compartir datos",
      stat: "RGPD",
      color: "from-red-500 to-red-600"
    },
    {
      icon: CheckCircle,
      title: "Garantía Éxito",
      description: "O devolvemos tu dinero",
      stat: "100%",
      color: "from-green-500 to-green-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveElement((prev) => (prev + 1) % trustElements.length);
      setRotationAngle((prev) => prev + 60);
    }, 3000);

    return () => clearInterval(interval);
  }, [trustElements.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Elementos de Confianza
          </h2>
          <p className="text-xl text-gray-300">Certificaciones y garantías que nos avalan</p>
        </div>

        {/* 3D Rotating Carousel */}
        <div className="relative w-full max-w-6xl mx-auto perspective-1000">
          <div 
            className="relative w-full h-96 transform-style-preserve-3d transition-transform duration-1000"
            style={{
              transform: `rotateY(${rotationAngle}deg)`
            }}
          >
            {trustElements.map((element, index) => {
              const angle = (360 / trustElements.length) * index;
              const isActive = index === activeElement;
              const IconComponent = element.icon;
              
              return (
                <div
                  key={index}
                  className={`absolute w-64 h-80 transition-all duration-1000 ${
                    isActive ? 'scale-110 z-20' : 'scale-100 z-10'
                  }`}
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(300px) ${isActive ? 'translateZ(350px)' : ''}`,
                    transformOrigin: 'center center'
                  }}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${element.color} rounded-2xl shadow-2xl p-6 text-white relative overflow-hidden`}>
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${element.color} opacity-20 blur-xl`} />
                    
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="text-center">
                        <IconComponent className="w-16 h-16 mx-auto mb-4 drop-shadow-lg" />
                        <h3 className="text-xl font-bold mb-2">{element.title}</h3>
                        <p className="text-sm opacity-90">{element.description}</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-4xl font-black mb-2">{element.stat}</div>
                        <div className="text-xs uppercase tracking-wider opacity-75">Garantizado</div>
                      </div>
                    </div>

                    {/* 3D depth effect */}
                    <div className="absolute inset-0 bg-black/10 transform translate-x-1 translate-y-1 rounded-2xl -z-10" />
                    <div className="absolute inset-0 bg-black/5 transform translate-x-2 translate-y-2 rounded-2xl -z-20" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Element Display */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
            <div className="flex items-center justify-center gap-4 mb-4">
              {React.createElement(trustElements[activeElement].icon, { className: "w-12 h-12 text-white" })}
              <h3 className="text-3xl font-bold text-white">{trustElements[activeElement].title}</h3>
            </div>
            <p className="text-lg text-gray-300 mb-6">{trustElements[activeElement].description}</p>
            <div className="text-5xl font-black text-white">{trustElements[activeElement].stat}</div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-12">
          {trustElements.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === activeElement 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              onClick={() => {
                setActiveElement(index);
                setRotationAngle(index * 60);
              }}
            />
          ))}
        </div>

        {/* Timeline indicator */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="bg-white/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-emerald-400 to-teal-400 h-2 rounded-full transition-all duration-3000"
              style={{ width: `${((activeElement + 1) / trustElements.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustElements3D;
