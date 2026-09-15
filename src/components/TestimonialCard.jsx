import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="glass-card rounded-2xl p-6 relative flex flex-col justify-between h-full hover:border-spiritual-gold/30 transition-all duration-300 shadow-xl"
    >
      {/* Decorative Quote Icon */}
      <div className="absolute top-4 right-4 text-spiritual-gold/10">
        <Quote size={50} className="stroke-current fill-current" />
      </div>

      <div>
        {/* Star Rating */}
        <div className="flex gap-1 mb-4 text-spiritual-gold">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-current" />
          ))}
        </div>

        {/* Comment */}
        <p className="text-sm sm:text-base text-spiritual-cream/80 italic font-outfit leading-relaxed mb-6">
          "{testimonial.comment}"
        </p>
      </div>

      {/* Author Details */}
      <div className="border-t border-spiritual-gold/10 pt-4 flex justify-between items-end">
        <div>
          <h4 className="font-cinzel text-md font-bold text-spiritual-gold">
            {testimonial.name}
          </h4>
          <span className="text-xs text-spiritual-cream/50 font-outfit uppercase tracking-widest">
            {testimonial.country}
          </span>
        </div>
        <span className="text-xs bg-spiritual-bordeaux/30 border border-spiritual-bordeaux/50 px-2.5 py-1 rounded-full text-spiritual-gold font-outfit tracking-wide">
          {testimonial.service}
        </span>
      </div>
    </motion.div>
  );
}
