import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { servicesData } from '../data/servicesData';
import { Phone, CheckCircle, HelpCircle, ArrowLeft, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceDetail() {
  const { slug } = useParams();

  // Find the requested service
  const service = servicesData.find((s) => s.slug === slug);

  // Redirect to services page if slug is invalid
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Sa Majesté DJEGBOKPA",
      "telephone": "+2290190103149",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Agbangnizoun",
        "addressCountry": "BJ"
      }
    },
    "description": service.shortDescription
  };

  return (
    <>
      <SEO 
        title={service.title} 
        description={service.shortDescription}
        canonicalUrl={`/services/${service.slug}`}
        ogImage={service.imageUrl}
        schemaData={serviceSchema}
      />
      
      <div className="pt-24 min-h-screen bg-radial-glow font-outfit">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          
          {/* Back Button */}
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-spiritual-gold hover:text-spiritual-goldLight font-semibold text-sm mb-8 transition-colors group"
          >
            <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
            Retour aux Services
          </Link>

          {/* Hero Banner Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden border border-spiritual-gold/25 shadow-2xl mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-spiritual-black via-spiritual-black/40 to-transparent z-10"></div>
            <img 
              src={service.imageUrl} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
            {/* Title Overlay */}
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 z-20">
              <h1 className="text-3xl sm:text-5xl font-cinzel font-bold text-spiritual-gold shadow-sm">
                {service.title}
              </h1>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Description & Lists (8 cols) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8 space-y-8"
            >
              {/* Detailed Description */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
                <h2 className="text-xl sm:text-2xl font-cinzel font-bold text-spiritual-gold border-b border-spiritual-gold/10 pb-3">
                  Présentation du Rituel
                </h2>
                <p className="text-base sm:text-lg text-spiritual-cream/80 leading-relaxed font-outfit">
                  {service.description}
                </p>
              </div>

              {/* Situations Target List */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
                <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-spiritual-gold flex items-center gap-3 border-b border-spiritual-gold/10 pb-3">
                  <HelpCircle className="text-spiritual-gold shrink-0" size={24} />
                  Quand recourir à ce service ?
                </h3>
                <ul className="space-y-3 font-outfit text-spiritual-cream/80">
                  {service.situations.map((sit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-spiritual-gold text-lg shrink-0 mt-0.5">&bull;</span>
                      <span className="text-sm sm:text-base leading-relaxed">{sit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits Expected List */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 bg-radial-glow-green">
                <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-spiritual-gold flex items-center gap-3 border-b border-spiritual-gold/10 pb-3">
                  <CheckCircle className="text-spiritual-gold shrink-0" size={24} />
                  Bénéfices Attendus
                </h3>
                <ul className="space-y-4 font-outfit text-spiritual-cream/95">
                  {service.benefits.map((ben, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 shrink-0 mt-1" size={18} />
                      <span className="text-sm sm:text-base leading-relaxed font-medium">{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Column: Sidebar CTAs (4 cols) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-4 space-y-6 lg:sticky lg:top-28"
            >
              {/* Box Contact Direct */}
              <div className="glass-card rounded-2xl p-6 border border-spiritual-gold/30 text-center space-y-6">
                <h4 className="font-cinzel text-lg font-bold text-spiritual-gold">
                  Besoin de ce rituel ?
                </h4>
                <p className="text-xs sm:text-sm text-spiritual-cream/70 leading-relaxed font-outfit">
                  Contactez Sa Majesté DJEGBOKPA dès maintenant pour fixer un rendez-vous ou pour poser vos questions en toute discrétion.
                </p>

                <div className="space-y-3 font-outfit">
                  <a
                    href="https://wa.me/2290190103149"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 bg-spiritual-gold hover:bg-spiritual-goldDark text-spiritual-black font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-spiritual-gold/10"
                  >
                    <MessageSquare size={16} />
                    WhatsApp Direct
                  </a>
                  <a
                    href="tel:+2290190103149"
                    className="w-full py-3.5 px-4 border border-spiritual-cream/20 hover:border-spiritual-gold text-spiritual-cream hover:text-spiritual-gold font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone size={16} />
                    Appeler Sa Majesté
                  </a>
                  <Link
                    to="/contact"
                    className="w-full py-3.5 px-4 bg-spiritual-bordeaux/30 border border-spiritual-bordeaux hover:bg-spiritual-bordeaux/50 text-spiritual-cream font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-300 flex items-center justify-center"
                  >
                    Écrire par Formulaire
                  </Link>
                </div>
              </div>

              {/* Informative Note */}
              <div className="p-4 bg-spiritual-black/40 border border-spiritual-gold/10 rounded-xl text-center">
                <p className="text-[10px] text-spiritual-cream/50 leading-relaxed font-outfit">
                  Les consultations ont lieu à son temple à Agbangnizoun ou à distance par téléphone / WhatsApp. Discrétion absolue et sérieux garantis.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
}
