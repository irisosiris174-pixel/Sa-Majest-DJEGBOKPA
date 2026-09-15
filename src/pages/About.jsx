import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Shield, Star, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { label: "Années d'Expérience", value: "50+" },
    { label: "Âge de Sagesse", value: "62" },
    { label: "Spécialités Rituelles", value: "12" },
    { label: "Lieu d'Exercice", value: "Agbangnizoun" }
  ];

  return (
    <>
      <SEO 
        title="À Propos de Sa Majesté DJEGBOKPA" 
        description="Découvrez l'histoire, la lignée spirituelle sacrée et la philosophie de vie de Sa Majesté DJEGBOKPA, prêtre traditionnel de Fâ à Agbangnizoun, Bénin."
        canonicalUrl="/a-propos"
      />
      
      <div className="pt-24 min-h-screen bg-radial-glow font-outfit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          
          {/* Header section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-cinzel font-bold text-spiritual-gold mb-6"
            >
              À Propos de Sa Majesté DJEGBOKPA
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-spiritual-cream/80 leading-relaxed"
            >
              Découvrez l'histoire et les valeurs d'un authentique prêtre spirituel béninois dévoué à l'accompagnement et au déblocage des vies.
            </motion.p>
          </div>

          {/* Intro Panel: Biography & Portrait Placeholder */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            {/* Visual Column (5 cols) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-spiritual-bordeaux/30 to-spiritual-gold/20 rounded-3xl blur-2xl opacity-50"></div>
              <div className="relative glass-card rounded-3xl overflow-hidden p-3 border border-spiritual-gold/20 shadow-2xl">
                <img 
                  src={`${import.meta.env.BASE_URL}images/img_Djegbokpa_3.jpg`} 
                  alt="Sa Majesté DJEGBOKPA à Agbangnizoun" 
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-spiritual-black/80 border border-spiritual-gold/30 px-4 py-2.5 rounded-xl">
                  <span className="text-spiritual-gold font-cinzel font-bold text-lg block">62 Ans</span>
                  <span className="text-[10px] text-spiritual-cream/60 uppercase tracking-widest font-outfit">Sagesse ancestrale</span>
                </div>
              </div>
            </motion.div>

            {/* Text Column (7 cols) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-spiritual-gold">
                Héritier d'une Lignée de Sagesse
              </h2>
              <p className="text-base sm:text-lg text-spiritual-cream/80 leading-relaxed font-outfit">
                Né au cœur d'Agbangnizoun, ancienne capitale historique du royaume du Dahomey au Bénin, **Sa Majesté DJEGBOKPA** a grandi bercé par les chants sacrés et les rituels divinatoires. Issu d'une lignée prestigieuse de maîtres initiés et de prêtres du Fâ, il a reçu dès son plus jeune âge une éducation spirituelle rigoureuse.
              </p>
              <p className="text-base sm:text-lg text-spiritual-cream/80 leading-relaxed font-outfit">
                Pendant plusieurs décennies, Sa Majesté a parfait sa connaissance des herbes médicinales, des forces cosmiques et des formules sacrées. Aujourd'hui âgé de **62 ans**, il met cette sagesse ancestrale et son don d'écoute attentive au service de consultants nationaux et internationaux.
              </p>
              
              {/* Stats Box */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {stats.map((stat, i) => (
                  <div key={i} className="glass-card rounded-xl p-4 text-center">
                    <span className="block text-2xl sm:text-3xl font-bold font-cinzel text-spiritual-gold">{stat.value}</span>
                    <span className="text-[10px] sm:text-xs text-spiritual-cream/60 uppercase tracking-wider font-outfit block mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Philosophy Section */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 md:p-12 relative overflow-hidden mb-20 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-radial-glow opacity-25 pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              <div className="lg:col-span-4">
                <span className="text-spiritual-gold uppercase tracking-widest text-xs font-bold font-outfit">Ma Vision</span>
                <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-spiritual-cream mt-2">
                  La Philosophie du Fâ
                </h2>
                <div className="mt-6 p-4 bg-spiritual-gold/5 border border-spiritual-gold/20 rounded-xl text-spiritual-gold font-cinzel italic text-sm">
                  "Le Fâ n'est pas une simple divination, c'est la carte du ciel de votre âme. Il ne condamne pas, il guide vers l'harmonie."
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6 text-spiritual-cream/80 font-outfit text-sm sm:text-base leading-relaxed">
                <p>
                  Sa Majesté DJEGBOKPA pratique une spiritualité traditionnelle tournée vers la paix, la libération et le déblocage constructif. Sa mission est d'aider chaque individu à s'aligner avec son propre destin et à surmonter les embûches semées par les énergies négatives.
                </p>
                <p>
                  Sa pratique est fondée sur trois piliers incontournables :
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                  <div className="space-y-2">
                    <div className="text-spiritual-gold"><Shield size={24} /></div>
                    <h4 className="font-bold text-spiritual-cream font-cinzel">L'Authenticité</h4>
                    <p className="text-xs text-spiritual-cream/70">Respect strict des rituels ancestraux et des ingrédients originels de la terre béninoise.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-spiritual-gold"><Star size={24} /></div>
                    <h4 className="font-bold text-spiritual-cream font-cinzel">La Confidentialité</h4>
                    <p className="text-xs text-spiritual-cream/70">Un secret professionnel absolu. Votre histoire et vos rituels ne quittent jamais le temple.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-spiritual-gold"><Compass size={24} /></div>
                    <h4 className="font-bold text-spiritual-cream font-cinzel">Le Suivi Sincère</h4>
                    <p className="text-xs text-spiritual-cream/70">Un accompagnement constant, pas de promesses magiques instantanées sans effort spirituel mutuel.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-spiritual-gold/30 text-center relative overflow-hidden bg-radial-glow"
          >
            <h3 className="text-2xl font-cinzel font-bold text-spiritual-gold mb-4">
              Consulter Sa Majesté DJEGBOKPA
            </h3>
            <p className="text-spiritual-cream/80 max-w-xl mx-auto mb-8">
              Que vous habitiez au Bénin ou à l'autre bout du monde, Sa Majesté est à votre écoute pour une consultation du Fâ claire, constructive et bienveillante.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="https://wa.me/2290190103149"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-spiritual-gold hover:bg-spiritual-goldDark text-spiritual-black font-bold uppercase tracking-widest text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Prendre rendez-vous sur WhatsApp
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 border border-spiritual-cream/30 hover:border-spiritual-gold text-spiritual-cream hover:text-spiritual-gold font-bold uppercase tracking-widest text-sm rounded-xl transition-all duration-300 flex items-center justify-center"
              >
                Écrire par e-mail
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}
