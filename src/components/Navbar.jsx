import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/a-propos', label: 'À Propos' },
    { path: '/services', label: 'Services' },
    { path: '/produits', label: 'Nos Produits' },
    { path: '/temoignages', label: 'Témoignages' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-spiritual-black/90 backdrop-blur-md py-4 border-b border-spiritual-gold/20 shadow-lg' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Brand Name */}
          <Link to="/" className="flex flex-col items-start" onClick={() => setIsOpen(false)}>
            <span className="text-xl sm:text-2xl font-cinzel font-bold gold-gradient-text tracking-widest">
              SA MAJESTÉ DJEGBOKPA
            </span>
            <span className="text-[10px] sm:text-xs font-outfit uppercase tracking-widest text-spiritual-cream/60">
              Prêtre Spirituel Traditionnel
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-outfit uppercase tracking-wider transition-all duration-200 ${
                  isActive 
                    ? 'text-spiritual-gold border-b-2 border-spiritual-gold font-semibold' 
                    : 'text-spiritual-cream/80 hover:text-spiritual-gold hover:bg-spiritual-gold/5'
                }`}
              >
                {link.label}
              </NavLink>
            ))}
            <a 
              href="https://wa.me/2290190103149" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-4 px-4 py-2 border border-spiritual-gold text-spiritual-gold hover:bg-spiritual-gold hover:text-spiritual-black rounded-md text-sm font-outfit uppercase tracking-wider font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <MessageSquare size={16} />
              Consultation
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-4">
            <a 
              href="tel:+2290190103149" 
              className="text-spiritual-gold p-2 border border-spiritual-gold/30 hover:border-spiritual-gold rounded-full transition-colors"
              title="Appeler Sa Majesté"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-spiritual-cream hover:text-spiritual-gold focus:outline-none p-2"
              aria-label="Menu Principal"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-[73px] sm:top-[81px] bg-spiritual-black/95 backdrop-blur-lg z-40 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="px-4 pt-8 pb-12 space-y-3 flex flex-col items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `w-full text-center py-3 text-lg font-cinzel uppercase tracking-widest rounded-lg transition-all ${
                isActive 
                  ? 'text-spiritual-gold font-bold bg-spiritual-gold/10' 
                  : 'text-spiritual-cream/90 hover:text-spiritual-gold hover:bg-spiritual-gold/5'
              }`}
            >
              {link.label}
            </NavLink>
          ))}
          
          <div className="w-full pt-6 border-t border-spiritual-gold/20 flex flex-col gap-4">
            <a
              href="https://wa.me/2290190103149"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-spiritual-gold text-spiritual-black rounded-lg font-outfit uppercase tracking-widest font-bold text-center flex items-center justify-center gap-2 hover:bg-spiritual-goldLight transition-colors"
            >
              <MessageSquare size={20} />
              WhatsApp
            </a>
            <a
              href="tel:+2290190103149"
              className="w-full py-4 border border-spiritual-cream/40 hover:border-spiritual-gold text-spiritual-cream hover:text-spiritual-gold rounded-lg font-outfit uppercase tracking-widest font-bold text-center flex items-center justify-center gap-2 transition-all"
            >
              <Phone size={20} />
              Appeler Directement
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
