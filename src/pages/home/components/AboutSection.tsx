export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bild & Trust-Card links (Desktop), oben (Mobile) */}
          <div className="order-1 flex flex-col justify-center items-center lg:items-start lg:pr-10 mt-10 lg:mt-20">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white mb-4 lg:mb-6 w-full">
              <img 
                src="/images/about/lashes.jpg"
                alt="PURELUXE BERLIN Lash Studio"
                className="w-full h-[320px] md:h-[420px] object-cover object-top"
              />
            </div>

            <div className="mt-6 max-w-md lg:ml-auto">
              <div className="bg-white rounded-2xl p-5 shadow-md border" style={{ borderColor: '#E5D8CC' }}>
                <div className="flex items-center">
                  <div
                    className="w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center mr-4"
                    style={{ borderColor: '#2E2A27' }}
                  >
                    <i className="ri-star-fill text-xl" style={{ color: '#2E2A27' }}></i>
                  </div>
                  <div>
                    <div className="font-bold text-lg" style={{ color: '#2E2A27' }}>
                      Zufriedene Lash-Kundinnen
                    </div>
                    <div className="text-sm opacity-80" style={{ color: '#2E2A27' }}>
                      Positive Erfahrungen & hochwertige Ergebnisse
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Icons rechts (Desktop), unten (Mobile) */}
          <div className="order-2">
            <h2
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2E2A27' }}
            >
              ÜBER PURELUXE BERLIN
            </h2>
            
            <div className="space-y-6" style={{ fontFamily: 'Inter, sans-serif', color: '#2E2A27' }}>
              <p className="text-lg leading-relaxed">
                Willkommen bei PURELUXE BERLIN – Ihrem spezialisierten Lash-Studio für hochwertige Wimpernextensions, Schulungen und ästhetische Beauty-Behandlungen. 
                Wir stehen für feminine Looks, höchste Präzision und ein sauberes, luxoriöses Ambiente.
              </p>
              
              <p className="text-lg leading-relaxed">
                Wir arbeiten ausschließlich mit hochwertigen Materialien, professionellen Techniken und einem besonders sanften Applikationsstil, um dauerhaft schöne, gepflegte Wimpernlooks zu erzielen – abgestimmt auf Ihre Augenform und Ihren Stil.
              </p>
              
              <p className="text-lg leading-relaxed">
                Jede Behandlung erfolgt in ruhiger, entspannter Atmosphäre – mit Zeit für Beratung, Analyse und die perfekte Lash-Anpassung.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="text-left">
                <div className="w-14 h-14 mb-3 bg-white border-2 rounded-full flex items-center justify-center" style={{ borderColor: '#2E2A27' }}>
                  <i className="ri-award-line text-2xl" style={{ color: '#2E2A27' }}></i>
                </div>
                <h3 className="font-semibold text-2xl md:text-3xl mb-2" style={{ color: '#2E2A27' }}>Zertifiziert</h3>
                <p className="text-sm opacity-80" style={{ color: '#2E2A27' }}>Professionelle Ausbildung & Schulungen.</p>
              </div>
              
              <div className="text-left">
                <div className="w-14 h-14 mb-3 bg-white border-2 rounded-full flex items-center justify-center" style={{ borderColor: '#2E2A27' }}>
                  <i className="ri-heart-line text-2xl" style={{ color: '#2E2A27' }}></i>
                </div>
                <h3 className="font-semibold text-2xl md:text-3xl mb-2" style={{ color: '#2E2A27' }}>Leidenschaft</h3>
                <p className="text-sm opacity-80" style={{ color: '#2E2A27' }}>Für Ihre Schönheit & Ihren Look.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
