import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { servicesData } from '../data/servicesData';
import { testimonialsData } from '../data/testimonialsData';
import { faqData } from '../data/faqData';
import { productsData } from '../data/productsData';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import AccordionFAQ from '../components/AccordionFAQ';
import { ArrowRight, Compass, Shield, Heart, Sparkles, MessageSquare, Phone, MapPin, Mail, Send, AlertCircle, CheckCircle2, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: 'Consultation depuis l\'accueil',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setStatus('success');
        setFormData({ nom: '', email: '', telephone: '', sujet: 'Consultation depuis l\'accueil', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.message || "Une erreur est survenue lors de l'envoi.");
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage("Une erreur réseau est survenue.");
    }
  };

  // Group schema data for Home
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://dah-djegbokpa.org/#person",
        "name": "Sa Majesté DJEGBOKPA",
        "description": "Prêtre spirituel traditionnel béninois, expert en divination du Fâ et rituels traditionnels.",
        "image": "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
        "jobTitle": "Prêtre Traditionnel / Guérisseur spirituel",
        "birthPlace": "Bénin",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Agbangnizoun",
          "addressCountry": "BJ"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://dah-djegbokpa.org/#business",
        "name": "Sa Majesté DJEGBOKPA",
        "telephone": "+2290190103149",
        "email": "djegbokpa@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Agbangnizoun",
          "addressCountry": "BJ"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "7.1852",
          "longitude": "1.9912"
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Sa Majesté DJEGBOKPA | Prêtre Spirituel Traditionnel Béninois" 
        description="Site officiel de Sa Majesté DJEGBOKPA, puissant prêtre spirituel traditionnel béninois à Agbangnizoun. Consultation sacrée du Fâ, retour affectif, désenvoûtement, purification."
        canonicalUrl="/"
        schemaData={homeSchema}
      />

      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center lg:items-end justify-center pt-24 pb-16 lg:pt-28 lg:pb-0 overflow-hidden bg-black">
        {/* Solid deep black background */}
        <div className="absolute inset-0 z-0 bg-black"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center lg:items-end">
            
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-5 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start lg:pb-24 lg:pt-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4 w-full"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-spiritual-gold/30 bg-spiritual-gold/5 text-spiritual-gold uppercase tracking-widest text-xs font-semibold font-outfit">
                  <Sparkles size={14} /> Sagesse Ancestrale Béninoise
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[32px] xl:text-[42px] 2xl:text-[54px] font-cinzel font-black tracking-wider leading-tight text-spiritual-cream">
                  SA MAJESTÉ <span className="gold-gradient-text">DJEGBOKPA</span>
                </h1>
                <p className="text-xl sm:text-2xl font-cinzel text-spiritual-gold font-medium uppercase tracking-widest">
                  Prêtre Spirituel Traditionnel Béninois
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg text-spiritual-cream/80 font-outfit leading-relaxed max-w-2xl"
              >
                Héritier de secrets et pouvoirs ancestraux d'Agbangnizoun. Sa Majesté DJEGBOKPA vous écoute et vous guide vers la libération de vos blocages sentimentaux, matériels et spirituels. Consultations précises sur place et à distance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 w-full sm:w-auto font-outfit"
              >
                <a 
                  href="https://wa.me/2290190103149" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-spiritual-gold hover:bg-spiritual-goldDark text-spiritual-black font-bold uppercase tracking-widest text-sm rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-spiritual-gold/20 text-center"
                >
                  Consulter sur WhatsApp
                </a>
                <Link 
                  to="/services" 
                  className="w-full sm:w-auto px-8 py-4 border border-spiritual-cream/30 hover:border-spiritual-gold text-spiritual-cream hover:text-spiritual-gold font-bold uppercase tracking-widest text-sm rounded-xl transition-all duration-300 hover:bg-spiritual-gold/5 flex items-center justify-center gap-2 group"
                >
                  <span>Découvrir les Rituels</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Master's Photo */}
            <div className="lg:col-span-7 w-full flex justify-center lg:justify-end lg:self-end">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative w-full max-w-md lg:max-w-none flex justify-center lg:justify-end items-end"
              >
                <img 
                  src={`${import.meta.env.BASE_URL}images/img_Djegbokpa_Hero.png`} 
                  alt="Sa Majesté DJEGBOKPA Prêtre Traditionnel" 
                  className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] lg:max-h-[95vh] xl:max-h-[100vh] object-contain object-bottom transform hover:scale-[1.01] transition-transform duration-700"
                  loading="eager"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Présentation Section */}
      <section className="py-20 relative overflow-hidden bg-spiritual-black border-t border-spiritual-gold/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-radial-glow opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Col */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-radial-glow opacity-30 blur-xl"></div>
              <div className="relative glass-card rounded-3xl p-3 border border-spiritual-gold/20 shadow-2xl overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}images/img_Djegbokpa_3.jpg`} 
                  alt="Sa Majesté Djegbokpa Prêtre Traditionnel" 
                  className="w-full h-[450px] object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content Col */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-spiritual-gold uppercase tracking-widest text-xs font-bold font-outfit block">Qui est Sa Majesté DJEGBOKPA ?</span>
              <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-spiritual-cream leading-tight">
                Gardien des Traditions Sacrées d'Agbangnizoun
              </h2>
              <p className="text-base sm:text-lg text-spiritual-cream/70 leading-relaxed font-outfit">
                Sa Majesté DJEGBOKPA est un prêtre spirituel traditionnel âgé de 62 ans, basé à Agbangnizoun, berceau de l'histoire spirituelle du Bénin. Issu d'une longue lignée de devins et de guérisseurs traditionnels, il met son héritage unique et sa clairvoyance au service de ceux qui souffrent.
              </p>
              <p className="text-base sm:text-lg text-spiritual-cream/70 leading-relaxed font-outfit">
                À travers l'oracle sacré du Fâ, il décrypte les mystères de votre destinée, identifie les causes réelles de vos blocages (jalousie, sorcellerie, mauvais sort) et prépare avec soin les bains, purifications et protections nécessaires.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-spiritual-gold/10 font-outfit">
                <div>
                  <h4 className="text-3xl font-cinzel font-bold text-spiritual-gold">62</h4>
                  <p className="text-xs text-spiritual-cream/50 uppercase tracking-wider mt-1">Ans de sagesse</p>
                </div>
                <div>
                  <h4 className="text-3xl font-cinzel font-bold text-spiritual-gold">50+</h4>
                  <p className="text-xs text-spiritual-cream/50 uppercase tracking-wider mt-1">Ans d'exercice</p>
                </div>
                <div>
                  <h4 className="text-3xl font-cinzel font-bold text-spiritual-gold">10k+</h4>
                  <p className="text-xs text-spiritual-cream/50 uppercase tracking-wider mt-1">Vies transformées</p>
                </div>
              </div>
              
              <div className="pt-4">
                <Link 
                  to="/a-propos" 
                  className="inline-flex items-center gap-2 text-spiritual-gold hover:text-spiritual-goldLight font-bold uppercase tracking-widest text-sm transition-colors group font-outfit"
                >
                  En savoir plus sur son histoire
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Services Phares */}
      <section className="py-20 relative overflow-hidden bg-radial-glow border-t border-spiritual-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-spiritual-gold uppercase tracking-widest text-xs font-bold font-outfit block">Nos Spécialités</span>
            <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-spiritual-cream">
              Rituels &amp; Actions Spirituelles
            </h2>
            <p className="text-base text-spiritual-cream/70 font-outfit">
              Découvrez un aperçu des principaux rituels sacrés pratiqués par Sa Majesté DJEGBOKPA pour dénouer les difficultés de votre existence.
            </p>
          </div>

          {/* Grid Preview (4 items) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.slice(0, 4).map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-spiritual-bordeaux/30 border border-spiritual-bordeaux hover:bg-spiritual-bordeaux/50 text-spiritual-cream rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 font-outfit"
            >
              <span>Découvrir nos 12 rituels</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* 3.5 Nos Produits */}
      <section className="py-20 relative overflow-hidden bg-spiritual-black border-t border-spiritual-gold/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-radial-glow opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-spiritual-gold uppercase tracking-widest text-xs font-bold font-outfit block">Nouveautés</span>
            <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-spiritual-cream">
              Nos Produits Traditionnels
            </h2>
            <p className="text-base text-spiritual-cream/70 font-outfit">
              Découvrez notre sélection de préparations spirituelles puissantes.
            </p>
          </div>

          {/* Slider / Grid Preview (4 items) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-outfit">
            {productsData.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden group border border-spiritual-gold/15 shadow-xl flex flex-col"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-black">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/Produits/${product.image}`} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 z-10 bg-spiritual-gold text-spiritual-black font-bold px-3 py-1 rounded-full text-xs tracking-wide">
                    {product.price}
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between">
                  <h3 className="font-cinzel text-lg font-bold text-spiritual-cream mb-4 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <a
                    href="https://wa.me/2290190103149"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-spiritual-gold/10 hover:bg-spiritual-gold text-spiritual-gold hover:text-spiritual-black border border-spiritual-gold/30 rounded-xl transition-all duration-300 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 mt-auto"
                  >
                    <ShoppingBag size={16} />
                    <span>Acheter</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/produits" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-spiritual-bordeaux/30 border border-spiritual-bordeaux hover:bg-spiritual-bordeaux/50 text-spiritual-cream rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 font-outfit"
            >
              <span>Découvrir toute la boutique</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>


      {/* 4. Pourquoi faire confiance */}
      <section className="py-20 relative overflow-hidden bg-spiritual-black border-t border-spiritual-gold/10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-radial-glow-green opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-spiritual-gold uppercase tracking-widest text-xs font-bold font-outfit block">Valeurs et Déontologie</span>
              <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-spiritual-cream">
                Pourquoi accorder votre confiance à Sa Majesté ?
              </h2>
              <p className="text-base text-spiritual-cream/70 leading-relaxed font-outfit">
                Dans le domaine de la spiritualité traditionnelle, le sérieux est primordial. Sa Majesté DJEGBOKPA a bâti sa solide réputation nationale et internationale sur des principes éthiques stricts.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex gap-4 items-start font-outfit">
                  <div className="p-2 bg-spiritual-gold/10 border border-spiritual-gold/30 text-spiritual-gold rounded-lg shrink-0 mt-0.5">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-md font-bold text-spiritual-cream">Secret professionnel absolu</h4>
                    <p className="text-xs text-spiritual-cream/60 mt-1">Vos problèmes de couple, de santé ou de travail restent confidentiels à jamais.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start font-outfit">
                  <div className="p-2 bg-spiritual-gold/10 border border-spiritual-gold/30 text-spiritual-gold rounded-lg shrink-0 mt-0.5">
                    <Compass size={20} />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-md font-bold text-spiritual-cream">Oracle du Fâ authentique</h4>
                    <p className="text-xs text-spiritual-cream/60 mt-1">Aucune spéculation ni mensonge. Sa Majesté vous transmet la pure vérité révélée par l'oracle.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start font-outfit">
                  <div className="p-2 bg-spiritual-gold/10 border border-spiritual-gold/30 text-spiritual-gold rounded-lg shrink-0 mt-0.5">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-md font-bold text-spiritual-cream">Accompagnement et écoute active</h4>
                    <p className="text-xs text-spiritual-cream/60 mt-1">Sa Majesté est disponible chaque jour sur WhatsApp pour répondre à vos doutes et suivre vos rituels.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 font-outfit">
                <Link 
                  to="/pourquoi-me-consulter" 
                  className="inline-flex items-center gap-2 text-spiritual-gold hover:text-spiritual-goldLight font-bold uppercase tracking-widest text-sm transition-colors group"
                >
                  Découvrir tous ses engagements
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Masonry Images Preview */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Left Column: Portrait photo galery4 */}
              <div className="relative group">
                <img 
                  src={`${import.meta.env.BASE_URL}images/img_Djegbokpa_1.jpg`} 
                  alt="Sa Majesté Djegbokpa" 
                  className="rounded-3xl h-[464px] w-full object-cover border border-spiritual-gold/15 shadow-2xl transition-all duration-500 group-hover:border-spiritual-gold/30"
                  loading="lazy"
                />
              </div>
              {/* Right Column: Landscape photos galery1 and galery3 */}
              <div className="flex flex-col gap-4">
                <img 
                  src={`${import.meta.env.BASE_URL}images/galery1.jpg`} 
                  alt="Bougies rituelles" 
                  className="rounded-2xl h-[224px] w-full object-cover border border-spiritual-gold/10 shadow-lg transition-all duration-500 hover:border-spiritual-gold/25"
                  loading="lazy"
                />
                <img 
                  src={`${import.meta.env.BASE_URL}images/galery3.jpg`} 
                  alt="Arbre traditionnel sacré" 
                  className="rounded-2xl h-[224px] w-full object-cover border border-spiritual-gold/10 shadow-lg transition-all duration-500 hover:border-spiritual-gold/25"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Témoignages Section */}
      <section className="py-20 relative overflow-hidden bg-radial-glow border-t border-spiritual-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-spiritual-gold uppercase tracking-widest text-xs font-bold font-outfit block">Reconnaissance</span>
            <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-spiritual-cream">
              Ils ont retrouvé la Paix et la Chance
            </h2>
            <p className="text-base text-spiritual-cream/70 font-outfit">
              Découvrez les avis authentiques de personnes ayant vu leur situation s'améliorer grâce aux travaux de Sa Majesté.
            </p>
          </div>

          {/* Grid Preview (3 items) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.slice(0, 3).map((test, index) => (
              <TestimonialCard key={index} testimonial={test} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/temoignages" 
              className="inline-flex items-center gap-2 text-spiritual-gold hover:text-spiritual-goldLight font-bold uppercase tracking-widest text-sm transition-colors group font-outfit"
            >
              Voir tous les témoignages de consultants
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. FAQ Preview */}
      <section className="py-20 relative overflow-hidden bg-spiritual-black border-t border-spiritual-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <span className="text-spiritual-gold uppercase tracking-widest text-xs font-bold font-outfit block">Réponses Claires</span>
            <h2 className="text-3xl font-cinzel font-bold text-spiritual-cream">FAQ - Questions Fréquentes</h2>
          </div>

          {/* FAQ Accordions (3 items) */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-xl">
            {faqData.slice(0, 3).map((faq, index) => (
              <AccordionFAQ key={index} faq={faq} index={index} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              to="/faq" 
              className="inline-flex items-center gap-2 text-spiritual-gold hover:text-spiritual-goldLight font-bold uppercase tracking-widest text-sm transition-colors group font-outfit"
            >
              Consulter toute la foire aux questions
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 7. Contact & Coordonnées */}
      <section className="py-20 relative overflow-hidden bg-radial-glow border-t border-spiritual-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-spiritual-gold uppercase tracking-widest text-xs font-bold font-outfit block">Prendre Contact</span>
            <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-spiritual-cream">Écrire à Sa Majesté DJEGBOKPA</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Info details col (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="glass-card rounded-2xl p-6 space-y-6 font-outfit">
                <h3 className="text-xl font-cinzel font-bold text-spiritual-gold">Coordonnées</h3>
                
                <div className="space-y-4 text-sm text-spiritual-cream/80">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-spiritual-gold shrink-0 mt-0.5" />
                    <span>Agbangnizoun, Bénin</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-spiritual-gold shrink-0" />
                    <a href="tel:+2290190103149" className="hover:text-spiritual-gold">+229 01 64 67 59 83</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare size={20} className="text-spiritual-gold shrink-0" />
                    <a href="https://wa.me/2290190103149" target="_blank" rel="noopener noreferrer" className="text-green-400 font-semibold">WhatsApp Direct</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-spiritual-gold shrink-0" />
                    <a href="mailto:djegbokpa@gmail.com" className="hover:text-spiritual-gold truncate">djegbokpa@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl overflow-hidden h-52 border border-spiritual-gold/20">
                <iframe 
                  title="Agbangnizoun, Bénin map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.332306766436!2d1.9811568213606622!3d7.185208465492167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1025531d0db7ee47%3A0xe54d2ad58b1638be!2sAgbangnizoun!5e0!3m2!1sfr!2sbj!4v1700000000000!5m2!1sfr!2sbj"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Quick Contact Form (8 cols) */}
            <div className="lg:col-span-8">
              <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-xl">
                {status === 'success' ? (
                  <div className="text-center py-8">
                    <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-cinzel font-bold text-spiritual-gold mb-2">Message envoyé !</h4>
                    <p className="text-sm text-spiritual-cream/70 max-w-md mx-auto">
                      Votre demande a bien été envoyée à Sa Majesté DJEGBOKPA. Une réponse confidentielle vous sera formulée rapidement.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')} 
                      className="mt-6 px-5 py-2.5 bg-spiritual-gold hover:bg-spiritual-goldDark text-spiritual-black text-xs uppercase tracking-widest font-bold rounded-xl transition-all"
                    >
                      Écrire de nouveau
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 font-outfit">
                    {status === 'error' && (
                      <div className="p-3 bg-red-950/40 border border-red-500/50 rounded-xl text-red-200 text-xs flex items-center gap-2">
                        <AlertCircle size={16} />
                        <span>{errorMessage}</span>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold mb-1 text-spiritual-cream/70">Nom complet *</label>
                        <input 
                          type="text" 
                          name="nom" 
                          value={formData.nom} 
                          onChange={handleChange} 
                          required 
                          className="w-full bg-spiritual-black/50 border border-spiritual-gold/20 focus:border-spiritual-gold rounded-xl px-4 py-2.5 text-sm focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1 text-spiritual-cream/70">Téléphone / WhatsApp *</label>
                        <input 
                          type="tel" 
                          name="telephone" 
                          value={formData.telephone} 
                          onChange={handleChange} 
                          required 
                          className="w-full bg-spiritual-black/50 border border-spiritual-gold/20 focus:border-spiritual-gold rounded-xl px-4 py-2.5 text-sm focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1 text-spiritual-cream/70">Adresse e-mail *</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="w-full bg-spiritual-black/50 border border-spiritual-gold/20 focus:border-spiritual-gold rounded-xl px-4 py-2.5 text-sm focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1 text-spiritual-cream/70">Votre message confidentiel *</label>
                      <textarea 
                        name="message" 
                        rows="4" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                        className="w-full bg-spiritual-black/50 border border-spiritual-gold/20 focus:border-spiritual-gold rounded-xl px-4 py-2.5 text-sm focus:outline-none"
                        placeholder="Expliquez brièvement votre préoccupation..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-3.5 bg-spiritual-gold hover:bg-spiritual-goldDark text-spiritual-black disabled:bg-spiritual-gold/50 font-bold uppercase tracking-widest text-xs rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? 'Envoi...' : (
                        <>
                          <Send size={14} />
                          <span>Envoyer le message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
