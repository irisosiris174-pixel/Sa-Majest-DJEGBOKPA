import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceCard({ service, index }) {
  // Dynamically resolve the Lucide icon component
  const IconComponent = Icons[service.iconName] || Icons.HelpCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col h-full group"
    >
      {/* Service Image Header */}
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-spiritual-black via-spiritual-black/40 to-transparent z-10"></div>
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Floating Icon */}
        <div className="absolute bottom-4 left-4 z-20 bg-spiritual-black/80 border border-spiritual-gold/40 p-3 rounded-xl text-spiritual-gold">
          <IconComponent size={24} />
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-cinzel font-bold text-spiritual-gold group-hover:text-spiritual-goldLight transition-colors mb-3">
            {service.title}
          </h3>
          <p className="text-sm text-spiritual-cream/70 font-outfit leading-relaxed line-clamp-3 mb-6">
            {service.shortDescription}
          </p>
        </div>

        <Link 
          to={`/services/${service.slug}`}
          className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl border border-spiritual-gold/40 text-spiritual-gold hover:bg-spiritual-gold hover:text-spiritual-black transition-all duration-300 font-outfit uppercase tracking-widest text-xs font-bold"
        >
          Découvrir le Rituel &rarr;
        </Link>
      </div>
    </motion.div>
  );
}
