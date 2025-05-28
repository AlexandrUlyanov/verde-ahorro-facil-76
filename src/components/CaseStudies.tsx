
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, Calendar, MapPin, FileText } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      title: "Familia García - Madrid",
      date: "Noviembre 2024",
      type: "Luz + Gas",
      beforeCost: "156€/mes",
      afterCost: "89€/mes",
      savings: "804€/año",
      details: "Piso de 85m² con 3 habitantes",
      beforeProvider: "Endesa",
      afterProvider: "Plenitude",
      beforeImage: "/lovable-uploads/449f55fe-0435-40a7-9a35-1e3f3b479371.png",
      afterImage: "/lovable-uploads/84c1cc4f-a946-4d33-85ef-75dbc9d3f079.png"
    },
    {
      title: "Empresa AutoMóvil SL - Valencia",
      date: "Octubre 2024", 
      type: "Luz empresarial",
      beforeCost: "1.247€/mes",
      afterCost: "891€/mes",
      savings: "4.272€/año",
      details: "Taller mecánico, 15 empleados",
      beforeProvider: "Iberdrola",
      afterProvider: "Plenitude",
      beforeImage: "/lovable-uploads/bc890bea-8b9c-4345-a46a-be51d1cfc8ff.png",
      afterImage: "/lovable-uploads/b69d5555-7e1b-455b-a791-d68b06705c1d.png"
    },
    {
      title: "Pensionista - Sevilla",
      date: "Diciembre 2024",
      type: "Luz",
      beforeCost: "78€/mes", 
      afterCost: "52€/mes",
      savings: "312€/año",
      details: "Apartamento 45m², 1 persona",
      beforeProvider: "Naturgy",
      afterProvider: "Plenitude",
      beforeImage: "/lovable-uploads/191a829f-91fd-4a45-8f63-3cf2c623b979.png",
      afterImage: "/lovable-uploads/07da68c2-c969-48be-a4e6-9d79d1886a0d.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Casos <span className="text-emerald-600">reales</span> de ahorro
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Facturas antes y después de nuestros clientes. Datos reales, ahorros verificados.
          </p>
          <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium inline-block mt-4">
            ✓ Casos verificados con documentación real
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white overflow-hidden">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6">
                  <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
                  <div className="flex items-center gap-4 text-emerald-100 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {caseStudy.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {caseStudy.type}
                    </div>
                  </div>
                </div>

                {/* Before/After Comparison */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* Before */}
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-2">ANTES</div>
                      <div className="bg-red-100 rounded-lg p-3 mb-2">
                        <img src={caseStudy.beforeImage} alt="Factura antes" className="w-full h-20 object-cover rounded" />
                      </div>
                      <div className="text-red-600 font-bold text-lg">{caseStudy.beforeCost}</div>
                      <div className="text-xs text-gray-500">{caseStudy.beforeProvider}</div>
                    </div>

                    {/* After */}
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-2">DESPUÉS</div>
                      <div className="bg-green-100 rounded-lg p-3 mb-2">
                        <img src={caseStudy.afterImage} alt="Factura después" className="w-full h-20 object-cover rounded" />
                      </div>
                      <div className="text-green-600 font-bold text-lg">{caseStudy.afterCost}</div>
                      <div className="text-xs text-gray-500">{caseStudy.afterProvider}</div>
                    </div>
                  </div>

                  {/* Savings Highlight */}
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl p-4 text-center mb-4">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <TrendingDown className="w-5 h-5" />
                      <span className="text-sm font-medium">AHORRO ANUAL</span>
                    </div>
                    <div className="text-2xl font-bold">{caseStudy.savings}</div>
                  </div>

                  {/* Details */}
                  <div className="text-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    {caseStudy.details}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-emerald-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">📊 ¿Quieres ver tu caso personalizado?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Cada caso es único. Súbenos tu factura y te mostraremos tu ahorro exacto con documentación real.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Calcular mi ahorro real
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
