
import { Shield } from "lucide-react";

const TrustBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
      <Shield className="w-4 h-4" />
      Análisis 100% gratuito • Sin compromiso • Expertos reales
    </div>
  );
};

export default TrustBadge;
