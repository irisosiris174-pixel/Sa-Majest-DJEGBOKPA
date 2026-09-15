import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <>
      <SEO 
        title="Politique de Confidentialité" 
        description="Politique de confidentialité de Sa Majesté DJEGBOKPA. Découvrez comment vos données de contact sont traitées avec une confidentialité absolue."
        canonicalUrl="/politique-de-confidentialite"
      />
      
      <div className="pt-24 min-h-screen bg-radial-glow font-outfit">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-spiritual-cream/80 leading-relaxed space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-cinzel font-bold text-spiritual-gold mb-4">Politique de Confidentialité</h1>
            <p className="text-sm uppercase tracking-widest text-spiritual-cream/50">Dernière mise à jour : Juin 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 sm:p-8 space-y-6"
          >
            <p className="text-base">
              La préservation de votre vie privée et de vos secrets personnels est au cœur de l'éthique de **Sa Majesté DJEGBOKPA**. Cette politique détaille comment vos informations sont gérées lorsque vous utilisez notre site internet.
            </p>

            <section className="space-y-3">
              <h2 className="text-xl font-cinzel font-semibold text-spiritual-gold">1. Nature des données collectées</h2>
              <p>
                Les seules informations personnelles collectées sur ce site sont celles que vous saisissez volontairement dans le formulaire de contact :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Votre nom complet</li>
                <li>Votre adresse e-mail</li>
                <li>Votre numéro de téléphone</li>
                <li>Le sujet et le contenu de votre message (description de votre problème)</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-cinzel font-semibold text-spiritual-gold">2. Traitement et Non-stockage des données</h2>
              <p className="font-semibold text-spiritual-cream">
                Notre site internet respecte une politique stricte de non-conservation de vos données sur serveur :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Aucune base de données :</strong> Notre site internet n'utilise aucune base de données. Les informations saisies ne sont à aucun moment stockées ou archivées en ligne.</li>
                <li><strong>Envoi direct par e-mail :</strong> Les données saisies dans le formulaire de contact servent exclusivement à générer un e-mail envoyé directement sur la boîte de messagerie sécurisée de Sa Majesté DJEGBOKPA : <strong>djegbokpa@gmail.com</strong>.</li>
                <li><strong>Sécurité des échanges :</strong> L'envoi est sécurisé par le protocole HTTPS garantissant le chiffrement des données entre votre navigateur et notre serveur Hostinger.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-cinzel font-semibold text-spiritual-gold">3. Confidentialité absolue</h2>
              <p>
                En accord avec le serment traditionnel des prêtres du Fâ, toutes les informations partagées (noms, situations familiales, problèmes sentimentaux, professionnels ou de santé) restent sous le sceau du secret absolu. Aucune information ne sera partagée, vendue ou louée à un tiers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-cinzel font-semibold text-spiritual-gold">4. Droits des utilisateurs</h2>
              <p>
                Vous disposez d'un droit d'accès, de rectification et de suppression des e-mails envoyés à Sa Majesté DJEGBOKPA. Vous pouvez exercer ce droit à tout moment en envoyant un e-mail à : <strong>djegbokpa@gmail.com</strong>. Les messages traités sont régulièrement et définitivement effacés de notre boîte mail pour préserver votre vie privée.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-cinzel font-semibold text-spiritual-gold">5. Cookies</h2>
              <p>
                Ce site n'utilise pas de cookies de ciblage publicitaire ni de cookies tiers traceurs de comportement. Seuls des cookies techniques essentiels au bon fonctionnement de l'application ou à la sécurité du formulaire peuvent être chargés temporairement.
              </p>
            </section>
          </motion.div>

        </div>
      </div>
    </>
  );
}
