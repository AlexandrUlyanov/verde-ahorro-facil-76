
import { Mail, Phone, MessageSquare } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-white/10 rounded-xl p-4 border border-white/20">
      <h4 className="font-semibold text-white mb-2">También puedes contactarnos:</h4>
      <div className="space-y-2 text-sm text-white/90">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>info.entraycompara@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>+34 681 930 144</span>
        </div>
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp: +34 681 930 144</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
