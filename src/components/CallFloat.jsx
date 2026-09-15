import React from 'react';
import { Phone } from 'lucide-react';

export default function CallFloat() {
  return (
    <a
      href="tel:+2290190103149"
      className="fixed bottom-6 left-6 z-40 lg:hidden bg-spiritual-bordeaux hover:bg-spiritual-bordeauxDark text-spiritual-cream p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-spiritual-gold/40 animate-pulse"
      title="Appeler Sa Majesté directement"
    >
      <Phone size={24} className="fill-current" />
    </a>
  );
}
