
import { Card } from "@/components/ui/card";

const CompanyLogos = () => {
  const companies = [
    { name: "Wypo", category: "Electricidad" },
    { name: "Plenitude", category: "Electricidad" },
    { name: "Endesa", category: "Electricidad" },
    { name: "Finetwork", category: "Internet" },
    { name: "Digi", category: "Internet" },
    { name: "Movistar", category: "Internet" },
    { name: "ADT", category: "Alarmas" },
    { name: "Securitas", category: "Alarmas" },
    { name: "Mapfre", category: "Seguros" },
    { name: "AXA", category: "Seguros" },
    { name: "Mutua", category: "Seguros" },
    { name: "Repsol", category: "Gas" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comparamos con las <span className="text-emerald-600">mejores compañías</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabajamos con más de 200 proveedores regulados en España para encontrar tu mejor opción
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {companies.map((company, index) => (
            <Card 
              key={company.name}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white border-gray-200"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-emerald-600 font-bold text-sm">{company.name.slice(0, 2)}</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{company.name}</h3>
              <p className="text-xs text-gray-500">{company.category}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">+200 compañías comparadas</h3>
            <p className="text-gray-600 text-lg">
              Solo trabajamos con proveedores <span className="font-semibold text-emerald-600">legales y regulados</span> por la CNMC. 
              Tu seguridad y la legalidad de las ofertas están garantizadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
