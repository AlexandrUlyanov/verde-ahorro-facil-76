
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  files: File[];
  onFormReset: () => void;
}

const ContactForm = ({ files, onFormReset }: ContactFormProps) => {
  const [phone, setPhone] = useState("");
  const [invoiceType, setInvoiceType] = useState("");
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const { toast } = useToast();

  const handlePrivacyChange = (checked: boolean | "indeterminate") => {
    setAcceptedPrivacy(checked === true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (files.length === 0) {
      toast({
        title: "Error",
        description: "Por favor, sube al menos una factura",
        variant: "destructive",
      });
      return;
    }

    if (!phone || !invoiceType) {
      toast({
        title: "Error", 
        description: "Por favor, completa todos los campos obligatorios",
        variant: "destructive",
      });
      return;
    }

    if (!acceptedPrivacy) {
      toast({
        title: "Error",
        description: "Debes aceptar la política de privacidad para continuar",
        variant: "destructive",
      });
      return;
    }

    // Simulación de envío
    toast({
      title: "¡Solicitud enviada!",
      description: "Analizaremos tus facturas y te contactaremos en menos de 24h.",
    });

    // Reset form
    setPhone("");
    setInvoiceType("");
    setAcceptedPrivacy(false);
    onFormReset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-white/90 mb-2">
          Teléfono *
        </label>
        <Input
          type="tel"
          placeholder="+34 681 930 144"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white focus:ring-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white/90 mb-2">
          Tipo de factura principal *
        </label>
        <Select value={invoiceType} onValueChange={setInvoiceType} required>
          <SelectTrigger className="bg-white/10 border-white/30 text-white focus:border-white focus:ring-white">
            <SelectValue placeholder="Selecciona el tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="luz">Electricidad</SelectItem>
            <SelectItem value="gas">Gas natural</SelectItem>
            <SelectItem value="luz-gas">Luz + Gas</SelectItem>
            <SelectItem value="internet">Internet/Fibra</SelectItem>
            <SelectItem value="movil">Móvil</SelectItem>
            <SelectItem value="internet-movil">Internet + Móvil</SelectItem>
            <SelectItem value="seguro-hogar">Seguro de hogar</SelectItem>
            <SelectItem value="seguro-coche">Seguro de coche</SelectItem>
            <SelectItem value="otros">Otros servicios</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Checkbox de política de privacidad */}
      <div className="flex items-start space-x-3">
        <Checkbox 
          id="privacy"
          checked={acceptedPrivacy}
          onCheckedChange={handlePrivacyChange}
          className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-emerald-600"
        />
        <label htmlFor="privacy" className="text-sm text-white/90 leading-relaxed cursor-pointer">
          He leído y acepto la{" "}
          <a href="#" className="text-emerald-200 underline hover:text-white transition-colors">
            política de privacidad
          </a>
        </label>
      </div>

      <Button 
        type="submit"
        className="w-full bg-white text-emerald-600 hover:bg-emerald-50 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
      >
        <Check className="mr-2 w-5 h-5" />
        Continuar al análisis
        <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Button>

      <p className="text-center text-white/70 text-sm">
        Análisis gratuito en menos de 24h
      </p>
    </form>
  );
};

export default ContactForm;
