import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

export default function Legal() {
  return (
    <>
      <SEO 
        title="Mentions Légales" 
        description="Mentions légales du site officiel de Sa Majesté DJEGBOKPA. Informations sur l'éditeur et l'hébergeur Hostinger."
        canonicalUrl="/mentions-legales"
      />
      
      <div className="pt-24 min-h-screen bg-radial-glow font-outfit">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-spiritual-cream/80 leading-relaxed space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-cinzel font-bold text-spiritual-gold mb-4">Mentions Légales</h1>
            <p className="text-sm uppercase tracking-widest text-spiritual-cream/50">En vigueur à partir de Juin 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 sm:p-8 space-y-6"
          >
            <section className="space-y-3">
              <h2 className="text-xl font-cinzel font-semibold text-spiritual-gold">1. Édition du site</h2>
              <p>
                Le site internet <a href="https://dah-djegbokpa.org" className="text-spiritual-gold hover:underline">https://dah-djegbokpa.org</a> est édité par :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Nom :</strong> Sa Majesté DJEGBOKPA</li>
                <li><strong>Profession :</strong> Prêtre spirituel traditionnel béninois</li>
                <li><strong>Localisation :</strong> Agbangnizoun, Bénin</li>
                <li><strong>Contact e-mail :</strong> djegbokpa@gmail.com</li>
                <li><strong>Téléphone / WhatsApp :</strong> +229 01 90 10 31 49</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-cinzel font-semibold text-spiritual-gold">2. Hébergement</h2>
              <p>
                Le site internet est hébergé par la société :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Hébergeur :</strong> Hostinger International Ltd.</li>
                <li><strong>Adresse web :</strong> https://www.hostinger.fr</li>
                <li><strong>Siège social :</strong> Kaunas, Lituanie</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-cinzel font-semibold text-spiritual-gold">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble du site, y compris les textes, logos, et graphismes (hors photographies d'illustration issues de la banque d'images Pexels), constituent des œuvres protégées par les lois internationales sur la propriété intellectuelle. Toute reproduction, représentation ou diffusion totale ou partielle sans l'accord écrit de l'éditeur est strictement interdite.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-cinzel font-semibold text-spiritual-gold">4. Limitation de responsabilité</h2>
              <p>
                Sa Majesté DJEGBOKPA s'efforce d'assurer au mieux l'exactitude des informations diffusées sur ce site. Cependant, les prestations spirituelles traditionnelles relèvent de la guidance spirituelle et des traditions traditionnelles béninoises. Les résultats obtenus peuvent varier d'une personne à l'autre. Le site et les consultations ne se substituent aucunement à un avis médical, juridique ou financier professionnel.
              </p>
            </section>
          </motion.div>

        </div>
      </div>
    </>
  );
}
