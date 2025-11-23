import { useState, useEffect } from 'react';
import Button from '../../../components/base/Button';

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down & past 100px
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="bg-[#F5EDE7]/90 backdrop-blur-xl border-b border-[#E5D8CC] shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="cursor-pointer">
              <span
                className="text-2xl md:text-3xl font-bold tracking-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2E2A27' }}
              >
                PureLuxe Berlin
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-lg hover:opacity-70 transition"
                style={{ color: '#2E2A27' }}
              >
                Leistungen
              </a>
              <a
                href="#about"
                className="text-lg hover:opacity-70 transition"
                style={{ color: '#2E2A27' }}
              >
                Über uns
              </a>
              <a
                href="#specials"
                className="text-lg hover:opacity-70 transition"
                style={{ color: '#2E2A27' }}
              >
                Angebote
              </a>
              <a
                href="#contact"
                className="text-lg hover:opacity-70 transition"
                style={{ color: '#2E2A27' }}
              >
                Kontakt
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i
                className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}
                style={{ color: '#2E2A27' }}
              ></i>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-[#E5D8CC] px-6 pb-4 pt-3 bg-[#F5EDE7]/95">
              <div className="flex flex-col space-y-4">
                <a
                  href="#services"
                  className="text-lg"
                  style={{ color: '#2E2A27' }}
                >
                  Leistungen
                </a>
                <a
                  href="#about"
                  className="text-lg"
                  style={{ color: '#2E2A27' }}
                >
                  Über uns
                </a>
                <a
                  href="#specials"
                  className="text-lg"
                  style={{ color: '#2E2A27' }}
                >
                  Angebote
                </a>
                <a
                  href="#contact"
                  className="text-lg"
                  style={{ color: '#2E2A27' }}
                >
                  Kontakt
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mobile video (shown < md) */}
        <video
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
          src="/videos/hero-mobile.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* Desktop video (shown >= md) */}
        <video
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          src="/videos/hero-mobile.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 flex-1 flex items-center px-6 max-w-5xl mx-auto pb-24 md:pb-16 pt-32">
        <div className="w-full text-center md:text-left">
          <h2
            className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-wide md:leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            PURELUXE BERLIN
          </h2>
          
          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto md:mx-0" style={{ fontFamily: 'Inter, sans-serif' }}>
            Wimpernextensions & Lash-Schulungen in Berlin. 
            Feminine, hochwertige Looks von deiner Lash-Expertin.
          </p>
          
          <div className="flex flex-row flex-wrap gap-6 justify-center md:justify-start items-center">
            <Button 
              href="https://instagram.com/pureluxeberlin" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              <i className="ri-instagram-line mr-3 text-2xl"></i>
              Instagram DM – Termin anfragen
            </Button>
            
            <Button 
              href="#services" 
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
            >
              <i className="ri-eye-line mr-3 text-2xl"></i>
              Leistungen & Preise ansehen
            </Button>

            <Button 
              href="#contact" 
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-4 md:w-[360px]"
            >
              <i className="ri-edit-line mr-3 text-2xl"></i>
              Anfrage über Kontaktformular
            </Button>
          </div>
          
          <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-white/90 border-t border-white/15 pt-10 md:pt-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center">
                <i className="ri-award-line text-2xl"></i>
              </div>
              <h3 className="font-semibold text-2xl md:text-xl mb-2">Lash-Design</h3>
              <p className="text-white/80 text-sm leading-relaxed">Individuelle Looks von Classic bis Mega Volume.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center">
                <i className="ri-user-heart-line text-2xl"></i>
              </div>
              <h3 className="font-semibold text-2xl md:text-xl mb-2">Studio & Schulungen</h3>
              <p className="text-white/80 text-sm leading-relaxed">Erfahrene Lash-Expertin & professionelle Schulungen.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center">
                <i className="ri-map-pin-line text-2xl"></i>
              </div>
              <h3 className="font-semibold text-2xl md:text-xl mb-2">Einfache Buchung</h3>
              <p className="text-white/80 text-sm leading-relaxed">Termine schnell & unkompliziert per Instagram DM oder Kontaktformular.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
