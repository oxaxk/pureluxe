import { useState } from 'react';
import Button from '../base/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1716]/80 backdrop-blur-xl border-b border-[#3A3533] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT — LOGO */}
        <a href="/" className="cursor-pointer">
          <span
            className="text-2xl md:text-3xl font-bold tracking-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#FFFFFF' }}
          >
            PureLuxe Berlin
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-12">
          <a href="/#hero" className="text-lg hover:opacity-70 transition" style={{ color: '#FFFFFF' }}>Start</a>
          <a href="/#services" className="text-lg hover:opacity-70 transition" style={{ color: '#FFFFFF' }}>Leistungen</a>
          <a href="/#about" className="text-lg hover:opacity-70 transition" style={{ color: '#FFFFFF' }}>Über uns</a>
          <a href="/#specials" className="text-lg hover:opacity-70 transition" style={{ color: '#FFFFFF' }}>Angebote</a>
          <a href="/#contact" className="text-lg hover:opacity-70 transition" style={{ color: '#FFFFFF' }}>Kontakt</a>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-3xl`} style={{ color: '#FFFFFF' }}></i>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1A1716]/95 backdrop-blur-xl border-t border-[#3A3533] px-6 py-6 flex flex-col space-y-5">
          <a href="/#hero" className="text-lg" style={{ color: '#FFFFFF' }}>Start</a>
          <a href="/#services" className="text-lg" style={{ color: '#FFFFFF' }}>Leistungen</a>
          <a href="/#about" className="text-lg" style={{ color: '#FFFFFF' }}>Über uns</a>
          <a href="/#specials" className="text-lg" style={{ color: '#FFFFFF' }}>Angebote</a>
          <a href="/#contact" className="text-lg" style={{ color: '#FFFFFF' }}>Kontakt</a>
        </div>
      )}
    </header>
  );
}
