
import { useState, useEffect } from "react";
import { CheckCircle, TrendingUp } from "lucide-react";

interface Notification {
  id: number;
  message: string;
  type: 'savings' | 'signup';
  visible: boolean;
}

const RealtimeNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const savingsMessages = [
    "María de Madrid acaba de ahorrar €127 en su factura de luz",
    "Carlos de Barcelona redujo su factura €89 con Internet + móvil", 
    "Ana de Valencia ahorró €156 cambiando de compañía de gas",
    "David de Sevilla consiguió €203 de descuento anual",
    "Laura de Bilbao redujo sus facturas €91 al mes"
  ];

  const signupMessages = [
    "3 personas están viendo esta página ahora",
    "Alguien de Madrid acaba de subir su factura",
    "Nueva consulta recibida desde Barcelona",
    "2 análisis completados en los últimos 10 minutos"
  ];

  useEffect(() => {
    const showNotification = () => {
      const isSavings = Math.random() > 0.3;
      const messages = isSavings ? savingsMessages : signupMessages;
      const message = messages[Math.floor(Math.random() * messages.length)];
      
      const newNotification: Notification = {
        id: Date.now(),
        message,
        type: isSavings ? 'savings' : 'signup',
        visible: true
      };

      setNotifications(prev => [newNotification, ...prev.slice(0, 2)]);

      // Ocultar después de 4 segundos
      setTimeout(() => {
        setNotifications(prev => 
          prev.map(notif => 
            notif.id === newNotification.id 
              ? { ...notif, visible: false }
              : notif
          )
        );
      }, 4000);

      // Eliminar después de 5 segundos
      setTimeout(() => {
        setNotifications(prev => 
          prev.filter(notif => notif.id !== newNotification.id)
        );
      }, 5000);
    };

    // Primera notificación después de 3 segundos
    const initialTimer = setTimeout(showNotification, 3000);

    // Luego cada 8-15 segundos
    const interval = setInterval(() => {
      if (Math.random() > 0.3) { // 70% probabilidad
        showNotification();
      }
    }, 8000 + Math.random() * 7000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed top-20 left-6 z-40 space-y-3 max-w-sm">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`transform transition-all duration-500 ${
            notification.visible 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-full opacity-0'
          }`}
        >
          <div className={`p-4 rounded-lg shadow-lg backdrop-blur-md border ${
            notification.type === 'savings'
              ? 'bg-emerald-50/95 border-emerald-200 text-emerald-800'
              : 'bg-blue-50/95 border-blue-200 text-blue-800'
          }`}>
            <div className="flex items-start gap-3">
              {notification.type === 'savings' ? (
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              ) : (
                <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              )}
              <p className="text-sm font-medium leading-snug">
                {notification.message}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RealtimeNotifications;
