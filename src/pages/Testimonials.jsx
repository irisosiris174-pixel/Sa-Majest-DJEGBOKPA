import React from 'react';
import SEO from '../components/SEO';
import TestimonialCard from '../components/TestimonialCard';
import { testimonialsData } from '../data/testimonialsData';
import { MessageSquare, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <>
      <SEO 
        title="Témoignages de consultants" 
        description="Lisez les témoignages et retours d'expérience sincères des consultants de Sa Majesté DJEGBOKPA en France, en Afrique et dans le monde entier."
        canonicalUrl="/temoignages"
      />
      
      <div className="pt-24 min-h-screen bg-radial-glow font-outfit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-cinzel font-bold text-spiritual-gold mb-6"
            >
              Témoignages &amp; Retours
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-spiritual-cream/80 leading-relaxed"
            >
              Découvrez les retours d'expérience sincères et authentiques partagés par des personnes que Sa Majesté DJEGBOKPA a accompagnées sur le chemin de la sérénité, de la protection et de la réussite.
            </motion.p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((test, index) => (
              <TestimonialCard key={index} testimonial={test} index={index} />
            ))}
          </div>

          {/* Bottom Info Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 glass-card rounded-2xl p-6 sm:p-8 border border-spiritual-gold/20 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4 text-left max-w-2xl">
              <div className="p-3 bg-spiritual-bordeaux/10 border border-spiritual-bordeaux/30 text-spiritual-gold rounded-full shrink-0">
                <Heart size={28} className="fill-spiritual-gold text-spiritual-gold" />
              </div>
              <div>
                <h4 className="font-cinzel text-lg font-bold text-spiritual-gold">Votre situation a évolué grâce à l'aide de Sa Majesté ?</h4>
                <p className="text-sm text-spiritual-cream/70 mt-1 leading-relaxed">
                  Votre retour d'expérience est précieux. Il permet de guider d'autres personnes confrontées aux mêmes difficultés vers le chemin de la libération. Envoyez-nous votre témoignage sur WhatsApp de façon totalement anonyme si vous le souhaitez.
                </p>
              </div>
            </div>
            
            <a
              href="https://wa.me/2290190103149"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-4 bg-spiritual-gold hover:bg-spiritual-goldDark text-spiritual-black font-bold uppercase tracking-widest text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shrink-0 font-outfit"
            >
              <MessageSquare size={16} />
              Partager mon expérience
            </a>
          </motion.div>

        </div>
      </div>
    </>
  );
}
