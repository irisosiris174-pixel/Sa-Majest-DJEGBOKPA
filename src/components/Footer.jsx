import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-spiritual-black border-t border-spiritual-gold/20 pt-16 pb-8 relative overflow-hidden">
      {/* Background soft glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-radial-glow opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-radial-glow-green opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Presentation & Bio brief */}
          <div className="space-y-4">
            <span className="text-xl font-cinzel font-bold gold-gradient-text tracking-widest block">
              SA MAJESTÉ DJEGBOKPA
            </span>
            <p className="text-sm text-spiritual-cream/70 leading-relaxed font-outfit">
              Prêtre spirituel traditionnel béninois basé à Agbangnizoun. Héritier d'une lignée ancestrale de grands initiés, il met ses dons et la sagesse du Fâ au service de la résolution de vos problèmes spirituels, amoureux et matériels.
            </p>
            <div className="pt-2 flex gap-3">
              <a 
                href="https://wa.me/2290190103149" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-spiritual-green/20 hover:bg-spiritual-green/40 border border-spiritual-green/40 text-spiritual-cream rounded-full transition-colors duration-200"
                title="Discuter sur WhatsApp"
              >
                <MessageSquare size={18} className="text-green-400" />
              </a>
              <a 
                href="tel:+2290190103149" 
                className="p-2 bg-spiritual-bordeaux/20 hover:bg-spiritual-bordeaux/40 border border-spiritual-bordeaux/40 text-spiritual-cream rounded-full transition-colors duration-200"
                title="Appeler Sa Majesté"
              >
                <Phone size={18} className="text-red-400" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-md font-cinzel font-semibold uppercase tracking-wider text-spiritual-gold border-b border-spiritual-gold/20 pb-2">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-spiritual-cream/70 font-outfit">
              <li>
                <Link to="/" className="hover:text-spiritual-gold transition-colors duration-200 block">Accueil</Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:text-spiritual-gold transition-colors duration-200 block">À Propos de Sa Majesté</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-spiritual-gold transition-colors duration-200 block">Tous les Services</Link>
              </li>
              <li>
                <Link to="/pourquoi-me-consulter" className="hover:text-spiritual-gold transition-colors duration-200 block">Pourquoi me consulter</Link>
              </li>
              <li>
                <Link to="/temoignages" className="hover:text-spiritual-gold transition-colors duration-200 block">Témoignages</Link>
              </li>
              <li>
                <Link to="/produits" className="hover:text-spiritual-gold transition-colors duration-200 block">Nos Produits</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-spiritual-gold transition-colors duration-200 block">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-spiritual-gold transition-colors duration-200 block">Prendre Contact</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Main Services */}
          <div className="space-y-4">
            <h3 className="text-md font-cinzel font-semibold uppercase tracking-wider text-spiritual-gold border-b border-spiritual-gold/20 pb-2">
              Nos Prestations
            </h3>
            <ul className="space-y-2 text-sm text-spiritual-cream/70 font-outfit">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link 
                    to={`/services/${service.slug}`} 
                    className="hover:text-spiritual-gold transition-colors duration-200 block truncate"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-spiritual-gold font-semibold hover:underline block pt-1">
                  Voir tous les 12 services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-md font-cinzel font-semibold uppercase tracking-wider text-spiritual-gold border-b border-spiritual-gold/20 pb-2">
              Contact &amp; Accès
            </h3>
            <ul className="space-y-3 text-sm text-spiritual-cream/70 font-outfit">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-spiritual-gold shrink-0 mt-0.5" />
                <span>Agbangnizoun, Bénin (Quartier Historique)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-spiritual-gold shrink-0" />
                <a href="tel:+2290190103149" className="hover:text-spiritual-gold transition-colors duration-200">+229 01 64 67 59 83</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare size={18} className="text-spiritual-gold shrink-0" />
                <a href="https://wa.me/2290190103149" target="_blank" rel="noopener noreferrer" className="hover:text-spiritual-gold transition-colors duration-200">WhatsApp : +229 01 90 10 31 49</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-spiritual-gold shrink-0" />
                <a href="mailto:djegbokpa@gmail.com" className="hover:text-spiritual-gold transition-colors duration-200">djegbokpa@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-spiritual-gold shrink-0 mt-0.5" />
                <span>Disponible 7j/7<br />De 08h00 à 22h00 (Bénin)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-spiritual-gold/10 flex flex-col sm:flex-row justify-between items-center text-xs text-spiritual-cream/50 gap-4">
          <div>
            &copy; {currentYear} Sa Majesté DJEGBOKPA. Tous droits réservés.
          </div>
          <div className="flex gap-4 sm:gap-6 font-outfit">
            <Link to="/mentions-legales" className="hover:text-spiritual-gold transition-colors duration-200">Mentions Légales</Link>
            <Link to="/politique-de-confidentialite" className="hover:text-spiritual-gold transition-colors duration-200">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
