
import { useCallback } from "react";
import { Upload, FileText, X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface FileDropZoneProps {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  isDragging: boolean;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
  onWhatsAppClick: () => void;
}

const FileDropZone = ({ files, setFiles, isDragging, setIsDragging, onWhatsAppClick }: FileDropZoneProps) => {
  const { toast } = useToast();

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles]);
    
    toast({
      title: "Archivos añadidos",
      description: `${droppedFiles.length} archivo(s) listo(s) para analizar`,
    });
  }, [setFiles, setIsDragging, toast]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...selectedFiles]);
      
      toast({
        title: "Archivos seleccionados",
        description: `${selectedFiles.length} archivo(s) añadido(s)`,
      });
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
          isDragging 
            ? 'border-white bg-white/20' 
            : 'border-white/40 hover:border-white/60 hover:bg-white/5'
        }`}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={() => setIsDragging(true)}
        onDragLeave={() => setIsDragging(false)}
      >
        <Upload className="w-16 h-16 text-white/80 mx-auto mb-4" />
        <p className="text-white/90 text-lg mb-4">
          Arrastra tus facturas aquí o haz clic para seleccionar
        </p>
        <Input
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
          onChange={handleFileSelect}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold cursor-pointer hover:bg-emerald-50 transition-colors inline-block"
        >
          Seleccionar archivos
        </label>
        <p className="text-white/70 text-sm mt-4">
          PDF, JPG, PNG, DOC... cualquier formato
        </p>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="mt-6 space-y-3">
          {files.map((file, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-white" />
                <span className="text-white font-medium">{file.name}</span>
              </div>
              <button
                onClick={() => removeFile(index)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 text-center">
        <Button
          onClick={onWhatsAppClick}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
        >
          <MessageSquare className="mr-2 w-5 h-5" />
          O enviar por WhatsApp
        </Button>
        <p className="text-white/70 text-sm mt-2">
          Análisis gratuito en menos de 24h
        </p>
      </div>
    </>
  );
};

export default FileDropZone;
