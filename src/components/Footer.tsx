import { Heart, Mail, Phone, MapPin, MessageSquare, Shield, Lock } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hola! Quiero información sobre el análisis gratuito de facturas.");
    window.open(`https://wa.me/34681930144?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        {/* Closing phrase destacada */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">🌟 Nuestra garantía</h3>
            <p className="text-2xl font-medium">
              Si no mejoramos tu tarifa, no pagas nada. Así de claro.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold text-emerald-400 mb-4">entraYcompara</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Tu aliado para ahorrar en servicios esenciales. Comparamos, negociamos y 
              gestionamos todo para que tú solo tengas que disfrutar del ahorro.
            </p>
            
            {/* Contact info with WhatsApp prominent */}
            <div className="space-y-3">
              <button
                onClick={openWhatsApp}
                className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl transition-colors w-full max-w-xs"
              >
                <MessageSquare className="w-5 h-5" />
                <span className="font-semibold">WhatsApp: 681 930 144</span>
              </button>
              
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">info.entraycompara@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">900 123 456 (gratuito)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">Madrid, España</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Comparación de luz</li>
              <li>Comparación de gas</li>
              <li>Internet y telefonía</li>
              <li>Seguros</li>
              <li>Hipotecas</li>
              <li>Alarmas</li>
            </ul>
          </div>

          {/* Legal and Trust */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Confianza y Legal</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Protección RGPD</span>
              </li>
              <li className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>Cifrado SSL</span>
              </li>
              <li>Supervisado por CNMC</li>
              <li>Política de privacidad</li>
              <li>Términos de uso</li>
              <li>Sobre nosotros</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 entraYcompara. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-red-400 fill-current" /> para ayudarte a ahorrar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
