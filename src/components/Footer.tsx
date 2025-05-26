
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold text-emerald-400 mb-4">entraYcompara</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Tu aliado para ahorrar en servicios esenciales. Comparamos, negociamos y 
              gestionamos todo para que tú solo tengas que disfrutar del ahorro.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">info@entraycompara.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">900 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">Madrid, España</span>
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
              <li>Otros servicios</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Sobre nosotros</li>
              <li>Cómo funciona</li>
              <li>Preguntas frecuentes</li>
              <li>Contacto</li>
              <li>Política de privacidad</li>
              <li>Términos de uso</li>
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
