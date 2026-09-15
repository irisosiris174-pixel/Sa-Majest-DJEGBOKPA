import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { productsData } from '../data/productsData';

export default function Products() {
  return (
    <>
      <SEO 
        title="Nos Produits Spirituels" 
        description="Découvrez notre gamme de produits spirituels traditionnels préparés par Sa Majesté DJEGBOKPA. Savons, talismans, bagues et encens pour améliorer votre vie."
        canonicalUrl="/produits"
      />
      
      <div className="pt-24 min-h-screen bg-radial-glow font-outfit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-cinzel font-bold text-spiritual-gold mb-6"
            >
              Nos Produits Traditionnels
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-spiritual-cream/80 leading-relaxed"
            >
              Des préparations uniques confectionnées avec soin et consacrées par Sa Majesté pour attirer la chance, l'amour, la protection et la guérison.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productsData.map((product, index) => (
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

        </div>
      </div>
    </>
  );
}
