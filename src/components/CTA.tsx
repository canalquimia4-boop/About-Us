import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?auto=format&fit=crop&q=80&w=2000" 
          alt="Pool background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-dark/80 mix-blend-multiply"></div>
      </div>

      {/* Wave Effect (Top) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10 rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C 150,120 350,0 600,60 C 850,120 1050,0 1200,60 L 1200,120 L 0,120 Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          {t('home_ready_title')}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed"
        >
          {t('home_ready_subtitle')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a 
            href="https://intensiva.com.br/projetos/waterland/contact/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-light hover:bg-brand-light/90 text-white font-bold py-5 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg"
          >
            {t('cta_schedule')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
