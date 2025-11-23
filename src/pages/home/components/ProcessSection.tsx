export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Beratung & Look-Auswahl',
      description: 'Wir wählen gemeinsam den passenden Stil: Classic, Light Volume, Volume oder Mega Volume.',
      icon: 'ri-search-eye-line'
    },
    {
      number: '02',
      title: 'Lash-Design & Vorbereitung',
      description: 'Analyse Ihrer Augenform, Bestimmung der Länge, Stärke und Curl für den perfekten Look.',
      icon: 'ri-pencil-ruler-line'
    },
      {
      number: '03',
      title: 'Applikation der Extensions',
      description: 'Präzise, saubere Applikation einzelner Lashes in professioneller Technik – sanft & schonend.',
      icon: 'ri-eye-line'
    },
    {
      number: '04',
      title: 'Aftercare & Pflegehinweise',
      description: 'Tipps zur Haltbarkeit, Reinigung und Auffüllintervallen (1–2 Wochen / 3 Wochen).',
      icon: 'ri-hand-heart-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2E2A27' }}
          >
            Ablauf Ihrer Lash-Behandlung
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', color: '#2E2A27' }}>
            Der PURELUXE-Prozess für einen perfekten, femininen Lash-Look – sauber, präzise und hochwertig.
          </p>
        </div>
        
        <div className="relative">
          {/* Durchgehende Linie hinter den Kreisen (nur Desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gray-300"
          ></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
              <div className="relative mb-12 flex flex-col items-center">
                <div
                  className="w-20 h-20 mx-auto bg-white border-2 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ borderColor: '#2E2A27' }}
                >
                  <i className={`${step.icon} text-2xl`} style={{ color: '#2E2A27' }}></i>
                </div>


                {/* Mobile Vertical Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-12 bg-gray-300 mt-2"></div>
                )}
              </div>
              
              <h3
                className="text-2xl md:text-3xl font-semibold mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2E2A27' }}
              >
                {step.title}
              </h3>
              
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#2E2A27' }} className="opacity-80 text-lg md:text-xl leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
