
const SuccessStories = () => {
  const stories = [
    {
      name: "María (Madrid)",
      savings: "322€/año",
      description: "en 2 facturas",
      quote: "No sabía que podía ahorrar tanto sin cambiar nada"
    },
    {
      name: "Carlos (Valencia)",
      savings: "41€/mes",
      description: "móvil + luz",
      quote: "El proceso fue súper fácil y rápido"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-16 animate-fade-in">
      {stories.map((story, index) => (
        <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-200">
          <div className="text-left">
            <div className="text-emerald-600 font-bold text-lg mb-2">{story.name}</div>
            <div className="text-gray-700 mb-2">
              {story.description.includes('año') ? 'Ahorró' : 'Bajó'} <span className="font-bold text-emerald-700">{story.savings}</span> {story.description}
            </div>
            <div className="text-sm text-gray-600">"{story.quote}"</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuccessStories;
