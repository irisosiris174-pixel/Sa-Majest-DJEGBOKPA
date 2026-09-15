import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        setStatus('success');
        setFormData({ nom: '', email: '', telephone: '', sujet: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.message || "Une erreur est survenue lors de l'envoi.");
      }
    } catch (error) {
      console.error("Erreur d'envoi:", error);
      setStatus('error');
      setErrorMessage("Impossible de joindre le serveur. Veuillez vérifier votre connexion.");
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sa Majesté DJEGBOKPA",
    "description": "Prêtre spirituel traditionnel béninois à Agbangnizoun. Consultation du Fâ, retour d'affection, protection.",
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
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "22:00"
    }
  };

  return (
    <>
      <SEO 
        title="Contactez Sa Majesté DJEGBOKPA" 
        description="Prenez contact avec Sa Majesté DJEGBOKPA à Agbangnizoun, Bénin. Formulaire de contact sécurisé, appel direct, WhatsApp au +229 01 90 10 31 49."
        canonicalUrl="/contact"
        schemaData={contactSchema}
      />
      
      <div className="pt-24 min-h-screen relative overflow-hidden bg-radial-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-cinzel font-bold text-spiritual-gold mb-6"
            >
              Contactez Sa Majesté DJEGBOKPA
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-spiritual-cream/80 font-outfit leading-relaxed"
            >
              Que vous résidiez au Bénin ou à l'étranger, Sa Majesté DJEGBOKPA vous écoute dans le respect absolu de la confidentialité. Envoyez un message ou appelez directement pour une consultation rapide.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Column 1: Contact Details & Map (5 cols) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Cards Container */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
                <h2 className="text-2xl font-cinzel font-bold text-spiritual-gold mb-4">
                  Coordonnées Officielles
                </h2>
                
                <div className="space-y-6 text-spiritual-cream/80 font-outfit">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-spiritual-gold/10 border border-spiritual-gold/30 text-spiritual-gold rounded-xl shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-spiritual-cream font-cinzel">Localisation</h4>
                      <p className="text-sm mt-1">Quartier historique, Agbangnizoun, Bénin</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-spiritual-gold/10 border border-spiritual-gold/30 text-spiritual-gold rounded-xl shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-spiritual-cream font-cinzel">Téléphone / WhatsApp</h4>
                      <p className="text-sm mt-1">
                        <a href="tel:+2290190103149" className="hover:text-spiritual-gold transition-colors block">+229 01 64 67 59 83</a>
                        <a href="https://wa.me/2290190103149" target="_blank" rel="noopener noreferrer" className="hover:text-spiritual-gold transition-colors block mt-0.5 text-green-400">WhatsApp : +229 01 90 10 31 49</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-spiritual-gold/10 border border-spiritual-gold/30 text-spiritual-gold rounded-xl shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-spiritual-cream font-cinzel">Adresse E-mail</h4>
                      <p className="text-sm mt-1">
                        <a href="mailto:djegbokpa@gmail.com" className="hover:text-spiritual-gold transition-colors">djegbokpa@gmail.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-spiritual-gold/10 border border-spiritual-gold/30 text-spiritual-gold rounded-xl shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-spiritual-cream font-cinzel">Disponibilité</h4>
                      <p className="text-sm mt-1">7j/7, de 08h00 à 22h00 (Heure du Bénin)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Iframe Container */}
              <div className="glass-card rounded-2xl overflow-hidden h-72 border border-spiritual-gold/20 shadow-xl">
                <iframe 
                  title="Localisation de Sa Majesté DJEGBOKPA à Agbangnizoun"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.332306766436!2d1.9811568213606622!3d7.185208465492167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1025531d0db7ee47%3A0xe54d2ad58b1638be!2sAgbangnizoun!5e0!3m2!1sfr!2sbj!4v1700000000000!5m2!1sfr!2sbj" 
                  className="w-full h-full border-0"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

            {/* Column 2: Form (7 cols) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-7"
            >
              <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-2xl relative">
                <h3 className="text-2xl font-cinzel font-bold text-spiritual-gold mb-6 border-b border-spiritual-gold/10 pb-4">
                  Envoyer un message sécurisé
                </h3>
                
                {status === 'success' ? (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center text-center py-12 px-4"
                  >
                    <CheckCircle2 size={64} className="text-green-500 mb-6" />
                    <h4 className="text-2xl font-cinzel font-bold text-spiritual-gold mb-4">Message envoyé avec succès !</h4>
                    <p className="text-spiritual-cream/80 font-outfit max-w-md">
                      Sa Majesté DJEGBOKPA a bien reçu votre demande. Une réponse claire et confidentielle vous sera apportée très rapidement par e-mail ou par téléphone.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-8 px-6 py-3 bg-spiritual-gold hover:bg-spiritual-goldDark text-spiritual-black font-semibold rounded-xl transition-all"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 font-outfit">
                    {status === 'error' && (
                      <div className="p-4 bg-red-950/40 border border-red-500/50 rounded-xl text-red-200 flex items-start gap-3">
                        <AlertCircle size={20} className="shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-red-400">Échec de l'envoi</h5>
                          <p className="text-sm mt-1">{errorMessage}</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nom" className="block text-sm font-semibold mb-2 text-spiritual-cream/80">Nom complet *</label>
                        <input 
                          type="text" 
                          id="nom"
                          name="nom" 
                          value={formData.nom}
                          onChange={handleChange}
                          required
                          maxLength={60}
                          placeholder="Ex: Jean Dupont"
                          className="w-full bg-spiritual-black/50 border border-spiritual-gold/20 hover:border-spiritual-gold/40 focus:border-spiritual-gold rounded-xl px-4 py-3 text-spiritual-cream focus:outline-none focus:ring-1 focus:ring-spiritual-gold transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label htmlFor="telephone" className="block text-sm font-semibold mb-2 text-spiritual-cream/80">Numéro de téléphone *</label>
                        <input 
                          type="tel" 
                          id="telephone"
                          name="telephone" 
                          value={formData.telephone}
                          onChange={handleChange}
                          required
                          maxLength={25}
                          placeholder="Ex: +33 6 00 00 00 00"
                          className="w-full bg-spiritual-black/50 border border-spiritual-gold/20 hover:border-spiritual-gold/40 focus:border-spiritual-gold rounded-xl px-4 py-3 text-spiritual-cream focus:outline-none focus:ring-1 focus:ring-spiritual-gold transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 text-spiritual-cream/80">Adresse e-mail *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        maxLength={80}
                        placeholder="Ex: jean.dupont@email.com"
                        className="w-full bg-spiritual-black/50 border border-spiritual-gold/20 hover:border-spiritual-gold/40 focus:border-spiritual-gold rounded-xl px-4 py-3 text-spiritual-cream focus:outline-none focus:ring-1 focus:ring-spiritual-gold transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label htmlFor="sujet" className="block text-sm font-semibold mb-2 text-spiritual-cream/80">Sujet de votre demande *</label>
                      <input 
                        type="text" 
                        id="sujet"
                        name="sujet" 
                        value={formData.sujet}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        placeholder="Ex: Consultation Fâ / Retour Affectif"
                        className="w-full bg-spiritual-black/50 border border-spiritual-gold/20 hover:border-spiritual-gold/40 focus:border-spiritual-gold rounded-xl px-4 py-3 text-spiritual-cream focus:outline-none focus:ring-1 focus:ring-spiritual-gold transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2 text-spiritual-cream/80">Description de votre situation *</label>
                      <textarea 
                        id="message"
                        name="message" 
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        maxLength={2000}
                        placeholder="Veuillez décrire brièvement votre situation en toute confiance. Toutes vos données restent strictement confidentielles."
                        className="w-full bg-spiritual-black/50 border border-spiritual-gold/20 hover:border-spiritual-gold/40 focus:border-spiritual-gold rounded-xl px-4 py-3 text-spiritual-cream focus:outline-none focus:ring-1 focus:ring-spiritual-gold transition-colors duration-200"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-spiritual-gold hover:bg-spiritual-goldDark text-spiritual-black disabled:bg-spiritual-gold/50 font-bold uppercase tracking-widest py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-lg shadow-spiritual-gold/10"
                    >
                      {status === 'submitting' ? (
                        <span>Envoi en cours...</span>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Envoyer ma demande</span>
                        </>
                      )}
                    </button>
                    
                    <p className="text-[10px] text-center text-spiritual-cream/40 leading-relaxed mt-4">
                      * Les données saisies dans ce formulaire sont uniquement transmises par e-mail sécurisé à Sa Majesté DJEGBOKPA. Aucun stockage de données personnelles n'est effectué sur ce serveur.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
}
