
import { TrendingDown, Clock, Shield } from "lucide-react";

const BenefitCards = () => {
  const benefits = [
    {
      icon: TrendingDown,
      text: "Ahorro garantizado"
    },
    {
      icon: Clock,
      text: "Revisión en 24h"
    },
    {
      icon: Shield,
      text: "Asesor personal"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 animate-fade-in">
      {benefits.map((benefit, index) => (
        <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-emerald-200">
          <div className="flex items-center gap-2">
            <benefit.icon className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BenefitCards;
