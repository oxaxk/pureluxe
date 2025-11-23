export default function SpecialsSection() {
  const specials = [
    {
      title: 'Classic – New Set',
      description: 'Natürlich & dezent – einzelne Extensions pro Naturwimper. New Set: 90 €.',
      badge: 'CLASSIC',
      badgeColor: 'bg-[#CDB8A6]',
      icon: 'ri-eye-line',
      iconBg: 'bg-[#CDB8A6]'
    },
    {
      title: 'Light Volume – New Set',
      description: 'Feine Volumenfächer für mehr Dichte ohne zu dominant zu wirken. New Set: 80 €.',
      badge: 'LIGHT',
      badgeColor: 'bg-[#E5D8CC]',
      icon: 'ri-eye-line',
      iconBg: 'bg-[#E5D8CC]'
    },
    {
      title: 'Mega Volume – New Set',
      description: 'Maximaler Glam-Look mit sehr feinen Fächern. New Set: 100 €.',
      badge: 'MEGA',
      badgeColor: 'bg-[#A08163]',
      icon: 'ri-eye-line',
      iconBg: 'bg-[#A08163]'
    }
  ];

  return (
    <section id="specials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2E2A27' }}
          >
            Angebote & Lash-Deals
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', color: '#2E2A27' }}>
            Exklusive Angebote für Classic, Light Volume, Volume & Mega Volume – limitiert verfügbar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specials.map((special, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col">
              
              <div className="p-6 flex flex-col flex-1">
                <div className={`mb-3 w-fit ${special.badgeColor} text-white rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wide`}>
                  {special.badge}
                </div>
                <h3
                  className="text-2xl md:text-4xl font-semibold mb-2"
                  style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2E2A27' }}
                >
                  {special.title}
                </h3>
                
                <p
                  className="mb-4 opacity-80 leading-relaxed text-base md:text-lg"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#2E2A27' }}
                >
                  {special.description}
                </p>
                
                <button
                  onClick={() => (window.location.href = '#contact')}
                  className="w-full py-3 bg-white border-2 rounded-full font-medium transition-all duration-300 hover:bg-gray-50 mt-auto"
                  style={{ borderColor: '#2E2A27', color: '#2E2A27' }}
                >
                  Jetzt anfragen
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
