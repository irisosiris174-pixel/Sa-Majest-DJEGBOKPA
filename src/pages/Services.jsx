import React, { useState } from 'react';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/servicesData';
import { motion, AnimatePresence } from 'framer-motion';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tous les rituels' },
    { id: 'guidance', label: 'Guidance & Voyance' },
    { id: 'amour', label: 'Amour & Harmonie' },
    { id: 'protection', label: 'Protection & Libération' },
    { id: 'reussite', label: 'Prospérité & Réussite' }
  ];

  // Helper to categorize slugs
  const getServiceCategory = (slug) => {
    if (['consultation-spirituelle', 'voyance-traditionnelle', 'conseils-spirituels'].includes(slug)) {
      return 'guidance';
    }
    if (['retour-affectif', 'harmonie-familiale', 'benedictions'].includes(slug)) {
      return 'amour';
    }
    if (['protection-spirituelle', 'desenvoutement', 'purification'].includes(slug)) {
      return 'protection';
    }
    if (['ouverture-de-chemins', 'reussite-professionnelle', 'chance-financiere'].includes(slug)) {
      return 'reussite';
    }
    return 'all';
  };

  const filteredServices = selectedCategory === 'all'
    ? servicesData
    : servicesData.filter(service => getServiceCategory(service.slug) === selectedCategory);

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "numberOfItems": servicesData.length,
    "itemListElement": servicesData.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.shortDescription,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Sa Majesté DJEGBOKPA",
          "telephone": "+2290190103149",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Agbangnizoun",
            "addressCountry": "BJ"
          }
        }
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Rituels Traditionnels et Services Spirituels" 
        description="Découvrez les 12 services traditionnels de Sa Majesté DJEGBOKPA : consultation du Fâ, retour affectif, protection spirituelle, désenvoûtement, purification, prospérité."
        canonicalUrl="/services"
        schemaData={servicesSchema}
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
              Prestations &amp; Rituels
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-spiritual-cream/80 leading-relaxed"
            >
              Chaque situation de vie possède sa résonance spirituelle. Sa Majesté DJEGBOKPA pratique 12 spécialités sacrées issues de la tradition d'Agbangnizoun pour vous guider et débloquer vos chemins de vie.
            </motion.p>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border focus:outline-none ${
                  selectedCategory === cat.id
                    ? 'bg-spiritual-gold text-spiritual-black border-spiritual-gold shadow-lg shadow-spiritual-gold/10'
                    : 'bg-spiritual-black/40 text-spiritual-cream/80 border-spiritual-gold/25 hover:border-spiritual-gold hover:text-spiritual-gold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid of Cards */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ServiceCard service={service} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </>
  );
}
