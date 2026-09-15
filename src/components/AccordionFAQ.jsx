import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AccordionFAQ({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-spiritual-gold/20 last:border-0 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-2 font-cinzel text-base sm:text-lg font-semibold text-spiritual-cream hover:text-spiritual-gold transition-colors focus:outline-none group"
      >
        <span className="pr-4">{faq.question}</span>
        <ChevronDown 
          size={20} 
          className={`text-spiritual-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="py-3 text-sm sm:text-base text-spiritual-cream/70 font-outfit leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
