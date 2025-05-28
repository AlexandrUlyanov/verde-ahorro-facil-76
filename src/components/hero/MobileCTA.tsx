
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

interface MobileCTAProps {
  onUploadClick: () => void;
}

const MobileCTA = ({ onUploadClick }: MobileCTAProps) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <Button 
        onClick={onUploadClick}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-lg font-bold rounded-2xl shadow-2xl"
      >
        <Upload className="mr-2 w-5 h-5" />
        Subir factura gratis
      </Button>
    </div>
  );
};

export default MobileCTA;
