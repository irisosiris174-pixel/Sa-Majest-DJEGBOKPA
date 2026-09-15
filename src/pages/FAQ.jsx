import React from 'react';
import SEO from '../components/SEO';
import AccordionFAQ from '../components/AccordionFAQ';
import { faqData } from '../data/faqData';
import { MessageSquare, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Foire Aux Questions (FAQ)" 
        description="Trouvez des réponses claires sur le déroulement des consultations du Fâ, le fonctionnement des rituels à distance et la confidentialité avec Sa Majesté DJEGBOKPA."
        canonicalUrl="/faq"
        schemaData={faqSchema}
      />
      
      <div className="pt-24 min-h-screen bg-radial-glow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-cinzel font-bold text-spiritual-gold mb-6"
            >
              Questions Fréquentes
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-spiritual-cream/80 font-outfit leading-relaxed"
            >
              Voici les réponses aux questions les plus courantes sur le fonctionnement de mes consultations, mes déplacements et mes rituels traditionnels.
            </motion.p>
          </div>

          {/* Accordion List */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl mb-16"
          >
            {faqData.map((faq, index) => (
              <AccordionFAQ key={index} faq={faq} index={index} />
            ))}
          </motion.div>

          {/* Call to Action Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-8 border border-spiritual-gold/30 text-center relative overflow-hidden bg-radial-glow-green"
          >
            <h3 className="text-2xl font-cinzel font-bold text-spiritual-gold mb-4">
              Votre question n'est pas répertoriée ?
            </h3>
            <p className="text-spiritual-cream/80 max-w-xl mx-auto mb-8 font-outfit">
              Sa Majesté DJEGBOKPA est à votre entière disposition pour éclairer vos doutes et répondre directement à toutes vos interrogations spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 font-outfit">
              <a
                href="https://wa.me/2290190103149"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-spiritual-gold hover:bg-spiritual-goldDark text-spiritual-black font-bold uppercase tracking-widest text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageSquare size={18} />
                Poser ma question sur WhatsApp
              </a>
              <a
                href="tel:+2290190103149"
                className="w-full sm:w-auto px-8 py-4 border border-spiritual-cream/30 hover:border-spiritual-gold text-spiritual-cream hover:text-spiritual-gold font-bold uppercase tracking-widest text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Appeler directement Sa Majesté
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}
