import React from 'react';
import SEO from '../components/SEO';
import { Award, ShieldCheck, HeartHandshake, EyeOff, UserCheck, PhoneCall, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyConsult() {
  const values = [
    {
      icon: Award,
      title: "Héritage & Expérience Unique",
      description: "Issu d'une grande lignée de prêtres du Fâ et d'initiés, Sa Majesté DJEGBOKPA a hérité des secrets et rituels divinatoires transmis de génération en génération. Fort de ses 62 ans d'âge et de plus de cinquante années d'exercice pratique, il maîtrise parfaitement les mystères spirituels traditionnels."
    },
    {
      icon: EyeOff,
      title: "Confidentialité Absolue",
      description: "Toutes vos démarches, consultations et rituels restent sous le sceau du secret absolu. Vos secrets sont gardés dans le respect strict des préceptes sacrés. Aucun partage de données personnelles, de problèmes de couple ou d'affaires n'est effectué avec des tiers."
    },
    {
      icon: HeartHandshake,
      title: "Écoute & Accompagnement Humain",
      description: "Consulter Sa Majesté DJEGBOKPA, c'est s'adresser à un homme sage et à l'écoute. Il prend le temps d'analyser vos difficultés sans jugement, avec bienveillance et empathie. Un suivi personnalisé et régulier sur WhatsApp est mis en place jusqu'à la résolution de votre problème."
    },
    {
      icon: ShieldCheck,
      title: "Sérieux & Intégrité",
      description: "Sa Majesté DJEGBOKPA n'accomplit pas de faux miracles et ne fait pas de promesses irréalistes. Il vous révèle honnêtement ce que le Fâ conseille. Si votre demande n'est pas réalisable spirituellement ou si elle enfreint les lois de la nature, il vous le dira en toute franchise."
    },
    {
      icon: Compass,
      title: "Savoir Ancestral Pur",
      description: "Les rituels de Sa Majesté DJEGBOKPA sont réalisés dans le strict respect de la tradition sacrée béninoise, à l'aide d'ingrédients rituels authentiques (plantes rares, poudres sacrées, offrandes traditionnelles d'Agbangnizoun). Aucun recours à des magies néfastes ou dangereuses."
    },
    {
      icon: UserCheck,
      title: "Suivi Post-Rituel Continu",
      description: "Sa Majesté ne vous laisse jamais seul après l'accomplissement d'un travail. Il vous oriente sur l'hygiène spirituelle quotidienne à adopter, les prières simples à formuler et reste joignable à tout moment pour analyser l'évolution positive de votre situation."
    }
  ];

  return (
    <>
      <SEO 
        title="Pourquoi Consulter Sa Majesté DJEGBOKPA ?" 
        description="Découvrez les engagements de sérieux, de confidentialité absolue et d'expérience de Sa Majesté DJEGBOKPA, prêtre spirituel traditionnel béninois à Agbangnizoun."
        canonicalUrl="/pourquoi-me-consulter"
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
              Pourquoi Consulter Sa Majesté ?
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-spiritual-cream/80 leading-relaxed"
            >
              Le choix d'un guide spirituel est une décision délicate. Sa Majesté DJEGBOKPA fonde sa pratique sur l'authenticité traditionnelle, le sérieux, et la protection absolue de votre vie privée.
            </motion.p>
          </div>

          {/* Grid of Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, index) => {
              const IconComp = val.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass-card rounded-2xl p-6 sm:p-8 hover:border-spiritual-gold/30 transition-all duration-300 relative overflow-hidden group shadow-xl"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-radial-glow opacity-20 pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
                  
                  <div className="p-3 bg-spiritual-gold/10 border border-spiritual-gold/30 text-spiritual-gold rounded-xl w-fit mb-6">
                    <IconComp size={28} />
                  </div>
                  
                  <h3 className="text-xl font-cinzel font-bold text-spiritual-gold mb-3 group-hover:text-spiritual-goldLight transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-sm sm:text-base text-spiritual-cream/70 leading-relaxed font-outfit">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive CTA bottom */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 glass-card rounded-2xl p-8 border border-spiritual-gold/30 text-center relative overflow-hidden bg-radial-glow"
          >
            <h3 className="text-2xl font-cinzel font-bold text-spiritual-gold mb-4">
              Entrez en contact avec un guide de confiance
            </h3>
            <p className="text-spiritual-cream/80 max-w-xl mx-auto mb-8">
              Que vous ayez besoin d'un simple conseil spirituel ou d'un rituel complexe, Sa Majesté DJEGBOKPA vous oriente sur la voie de la réussite et de la paix intérieure.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="https://wa.me/2290190103149"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-spiritual-gold hover:bg-spiritual-goldDark text-spiritual-black font-bold uppercase tracking-widest text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Discuter sur WhatsApp
              </a>
              <a
                href="tel:+2290190103149"
                className="w-full sm:w-auto px-8 py-4 border border-spiritual-cream/30 hover:border-spiritual-gold text-spiritual-cream hover:text-spiritual-gold font-bold uppercase tracking-widest text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <PhoneCall size={16} />
                Appeler Sa Majesté (+229)
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}
