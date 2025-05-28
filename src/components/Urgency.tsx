
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Bell, AlertTriangle, Users, Timer } from "lucide-react";
import { useState, useEffect } from "react";

const Urgency = () => {
  const [counter, setCounter] = useState(18);
  const [recentActivity, setRecentActivity] = useState("Pedro");
  const [weeklyAnalysis, setWeeklyAnalysis] = useState(247);

  useEffect(() => {
    // Contador de horas restantes
    const interval = setInterval(() => {
      setCounter(prev => prev > 12 ? prev - 1 : 23);
    }, 45000); // Cada 45 segundos

    // Simulación de actividad reciente
    const names = ["Pedro", "María", "Carlos", "Ana", "José", "Carmen", "Laura", "David"];
    const activityInterval = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      setRecentActivity(randomName);
    }, 35000);

    // Contador de análisis semanales
    const weeklyInterval = setInterval(() => {
      setWeeklyAnalysis(prev => prev + Math.floor(Math.random() * 3));
    }, 60000);

    return () => {
      clearInterval(interval);
      clearInterval(activityInterval);
      clearInterval(weeklyInterval);
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ⏰ <span className="text-red-600">Últimas 24 horas</span> con análisis prioritario garantizado
          </h2>
          <p className="text-lg text-gray-600">No te quedes sin tu análisis gratuito</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Contador de tiempo */}
            <Card className="bg-gradient-to-br from-red-500 to-orange-500 text-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <Timer className="w-12 h-12 mx-auto mb-4 animate-pulse" />
                <div className="text-3xl font-bold mb-2">{counter}h</div>
                <p className="text-sm opacity-90">restantes para análisis prioritario</p>
              </CardContent>
            </Card>

            {/* Actividad reciente */}
            <Card className="bg-gradient-to-br from-green-500 to-emerald-500 text-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <Bell className="w-12 h-12 mx-auto mb-4 animate-bounce" />
                <p className="font-semibold mb-1">{recentActivity}</p>
                <p className="text-sm opacity-90">acaba de subir su factura</p>
                <p className="text-xs opacity-75 mt-1">(hace 3 min)</p>
              </CardContent>
            </Card>

            {/* Contador semanal en tiempo real */}
            <Card className="bg-gradient-to-br from-blue-500 to-purple-500 text-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{weeklyAnalysis}</div>
                <p className="text-sm opacity-90">análisis esta semana</p>
                <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                  <div className="bg-white h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-orange-200 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-orange-600 animate-pulse" />
                <span className="font-bold text-gray-900 text-xl">¡Capacidad limitada!</span>
              </div>
              <p className="text-gray-600 text-lg mb-4">
                Nuestros expertos tienen capacidad limitada para garantizar análisis en menos de 24h.
              </p>
              <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl p-4 border-l-4 border-red-500">
                <p className="text-red-700 font-semibold">
                  ⚠️ Solo quedan <span className="text-red-800 font-bold">{24 - counter} plazas</span> para análisis prioritario hoy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Urgency;
