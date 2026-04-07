import React from 'react';
import { motion } from 'motion/react';

interface OverlappingImagesProps {
  image1: string;
  image2: string;
  alt1?: string;
  alt2?: string;
  className?: string;
}

export default function OverlappingImages({ 
  image1, 
  image2, 
  alt1 = "Pool Service 1", 
  alt2 = "Pool Service 2",
  className = ""
}: OverlappingImagesProps) {
  return (
    <div className={`relative w-full h-[400px] md:h-[500px] ${className}`}>
      {/* Background Image (Top Left) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: -30 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 w-[80%] h-[80%] z-0"
      >
        <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
          <img
            src={image1}
            alt={alt1}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>

      {/* Foreground Image (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: 30, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-0 right-0 w-[65%] h-[65%] z-10"
      >
        <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
          <img
            src={image2}
            alt={alt2}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
      
      {/* Decorative element */}
      <motion.div
        initial={{ opacity: 0, rotate: -15 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute -top-4 -right-4 w-24 h-24 bg-brand-light/10 rounded-full blur-2xl -z-10"
      />
    </div>
  );
}
