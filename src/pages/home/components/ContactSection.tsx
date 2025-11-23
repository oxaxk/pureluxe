export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2E2A27' }}
        >
          Bereit für Ihren neuen Lash-Look?
        </h2>
        
        <p className="text-xl mb-12 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
          Jetzt Termin oder Beratung per Instagram DM anfragen – feminine, hochwertige Lash-Ergebnisse in Berlin.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a 
            href="https://instagram.com/pureluxeberlin"
            className="inline-flex items-center px-8 py-4 font-semibold text-lg rounded-full transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer text-white"
            style={{ backgroundColor: '#2E2A27' }}
          >
            <i className="ri-instagram-line mr-3 text-2xl"></i>
            Instagram DM – Termin anfragen
          </a>
        </div>

        <form className="max-w-2xl mx-auto grid gap-6 md:grid-cols-2 text-left">
          <div className="md:col-span-2">
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Alternativ kannst du uns auch eine Anfrage über dieses Formular senden. Wir melden uns bei dir per Instagram DM oder Nachricht zurück.
            </p>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
              Name*
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CDB8A6] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
              E-Mail (optional)
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CDB8A6] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
              Gewünschte Leistung*
            </label>
            <select
              required
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#CDB8A6] focus:border-transparent"
              style={{ backgroundPosition: 'right 1rem center' }}
            >
              <option value="">Bitte auswählen</option>
              <option value="classic">Classic – New Set / Refill</option>
              <option value="light-volume">Light Volume – New Set / Refill</option>
              <option value="volume">Volume – New Set / Refill</option>
              <option value="mega-volume">Mega Volume – New Set / Refill</option>
              <option value="refill">Auffüllung (1–2 / 3 Wochen)</option>
              <option value="training">Lash-Schulung</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
              Wunschdatum
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CDB8A6] focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
              Nachricht
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CDB8A6] focus:border-transparent"
              placeholder="z. B. Wunsch-Look, bisherige Erfahrungen, besondere Hinweise"
            />
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="px-10 py-4 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: '#CDB8A6', color: '#2E2A27', fontFamily: 'Inter, sans-serif' }}
            >
              Anfrage senden
            </button>
          </div>
        </form>
        
      </div>
    </section>
  );
}
