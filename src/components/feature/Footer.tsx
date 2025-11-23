export default function Footer() {
  return (
    <footer className="bg-[#1A1716] py-16 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#FFFFFF' }}>
              PURELUXE BERLIN
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Lash-Studio & Schulungen – Classic, Volume, Mega Volume in Berlin.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/pureluxeberlin" 
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <i className="ri-instagram-line text-black"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-xl md:text-2xl mb-4" style={{ color: '#FFFFFF' }}>Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/#services" className="text-gray-300 hover:text-white transition-colors">Leistungen</a></li>
              <li><a href="/#about" className="text-gray-300 hover:text-white transition-colors">Über uns</a></li>
              <li><a href="/#specials" className="text-gray-300 hover:text-white transition-colors">Angebote</a></li>
              <li><a href="/#contact" className="text-gray-300 hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 PURELUXE BERLIN. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/impressum" className="text-gray-300 hover:text-white text-sm transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="text-gray-300 hover:text-white text-sm transition-colors">
              Datenschutz
            </a>
            <a href="https://slicker.agency/" className="text-gray-300 hover:text-white text-sm transition-colors">
              by Slicker
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
