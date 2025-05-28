
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoPlayer = () => {
  return (
    <div className="relative">
      <div className="aspect-video bg-gray-900 rounded-3xl shadow-2xl overflow-hidden relative group cursor-pointer">
        <img 
          src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=450&fit=crop" 
          alt="Video explicativo de cómo ahorrar en facturas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
          <Button className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-full w-24 h-24 p-0 group-hover:scale-110 transition-all duration-300">
            <Play className="w-10 h-10 ml-1" />
          </Button>
        </div>
        <div className="absolute bottom-4 left-4 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
          2:00 min - Cómo funciona
        </div>
        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
          SIN SONIDO
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
