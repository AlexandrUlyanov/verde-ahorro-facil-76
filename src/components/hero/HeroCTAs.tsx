
import { Button } from "@/components/ui/button";
import { Upload, MessageSquare } from "lucide-react";

interface HeroCTAsProps {
  onUploadClick: () => void;
  onWhatsAppClick: () => void;
}

const HeroCTAs = ({ onUploadClick, onWhatsAppClick }: HeroCTAsProps) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-6 animate-fade-in">
        <div className="flex flex-col items-center">
          <Button 
            onClick={onUploadClick}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-8 text-2xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 min-w-[300px] font-bold"
          >
            <Upload className="mr-4 w-8 h-8" />
            Subir factura ahora
          </Button>
        </div>
        <Button 
          onClick={onWhatsAppClick}
          className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-500"
        >
          <MessageSquare className="mr-3 w-6 h-6" />
          WhatsApp directo
        </Button>
      </div>

      <p className="text-gray-500 text-sm font-medium animate-fade-in">
        ✅ Análisis gratuito en menos de 24h
      </p>
    </>
  );
};

export default HeroCTAs;
