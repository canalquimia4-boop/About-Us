import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Target, Eye, Heart } from 'lucide-react';
import OverlappingImages from '../components/OverlappingImages';

export default function About() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-brand-dark py-32 text-white overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Luxury Pool Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/80 to-brand-dark/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {t('about_hero_title')}
          </motion.h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            {t('about_hero_subtitle')}
          </p>
        </div>

        {/* Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C 150,120 350,0 600,60 C 850,120 1050,0 1200,60 L 1200,120 L 0,120 Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                {t('about_story_p1')}
              </p>
              <p>
                {t('about_story_p2')}
              </p>
              <p>
                {t('about_story_p3')}
              </p>
            </div>
            <div className="relative">
              <OverlappingImages 
                image1="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&q=80&w=800"
                image2="https://drive.google.com/thumbnail?id=1_OE0sqKKohsbht0yTj-EtM556Ta0JwZY&sz=w1000"
                alt1="Pool maintenance work"
                alt2="Pool renovation result"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-xl space-y-4">
              <div className="w-12 h-12 bg-brand-light/10 text-brand-light rounded-xl flex items-center justify-center">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">{t('about_mission_title')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('about_mission_text')}
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl space-y-4">
              <div className="w-12 h-12 bg-brand-light/10 text-brand-light rounded-xl flex items-center justify-center">
                <Eye size={24} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">{t('about_vision_title')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('about_vision_text')}
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl space-y-4">
              <div className="w-12 h-12 bg-brand-light/10 text-brand-light rounded-xl flex items-center justify-center">
                <Heart size={24} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">{t('about_values_title')}</h3>
              <ul className="text-slate-600 text-sm space-y-2">
                <li><strong>{t('about_value_1_title')}</strong> {t('about_value_1_text')}</li>
                <li><strong>{t('about_value_2_title')}</strong> {t('about_value_2_text')}</li>
                <li><strong>{t('about_value_3_title')}</strong> {t('about_value_3_text')}</li>
                <li><strong>{t('about_value_4_title')}</strong> {t('about_value_4_text')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
