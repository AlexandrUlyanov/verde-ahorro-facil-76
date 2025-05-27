
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Bell, AlertTriangle, Users } from "lucide-react";
import { useState, useEffect } from "react";

const Urgency = () => {
  const [counter, setCounter] = useState(12);
  const [recentActivity, setRecentActivity] = useState("Pedro");

  useEffect(() => {
    // Simulate counter going down
    const interval = setInterval(() => {
      setCounter(prev => prev > 8 ? prev - 1 : 12);
    }, 30000); // Every 30 seconds

    // Simulate recent activity updates
    const names = ["Pedro", "María", "Carlos", "Ana", "José", "Carmen"];
    const activityInterval = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      setRecentActivity(randomName);
    }, 45000);

    return () => {
      clearInterval(interval);
      clearInterval(activityInterval);
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Counter */}
            <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 animate-pulse" />
                <div className="text-3xl font-bold mb-2">{counter}</div>
                <p className="text-sm opacity-90">análisis gratuitos esta semana</p>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-gradient-to-br from-green-500 to-emerald-500 text-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <Bell className="w-12 h-12 mx-auto mb-4" />
                <p className="font-semibold mb-1">{recentActivity}</p>
                <p className="text-sm opacity-90">acaba de subir su factura</p>
                <p className="text-xs opacity-75 mt-1">(hace 2 min)</p>
              </CardContent>
            </Card>

            {/* FOMO */}
            <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="w-12 h-12 mx-auto mb-4 animate-bounce" />
                <p className="font-semibold text-sm leading-tight">
                  Esta oportunidad no estará disponible siempre
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-orange-200">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="w-6 h-6 text-orange-600" />
                <span className="font-bold text-gray-900">¡Últimas plazas disponibles!</span>
              </div>
              <p className="text-gray-600">
                Nuestros expertos tienen capacidad limitada. No te quedes sin tu análisis gratuito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Urgency;
