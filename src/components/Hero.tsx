/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, Sparkles, Compass } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-28 pb-16 bg-gradient-to-b from-[#0A0A0A] to-[#0D0D0D] overflow-hidden"
    >
      {/* Background organic shape */}
      <div 
        className="absolute right-[-10%] top-[-10%] w-[60vw] h-[60vw] rounded-full bg-brand-bronze/5 blur-3xl -z-10 pointer-events-none"
        id="hero-bg-accent"
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Editorial Text Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col justify-center"
          id="hero-text-container"
        >
          {/* Tagline Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 border border-brand-bronze/30 bg-brand-softcharcoal px-4 py-1.5 rounded-full w-fit mb-6 shadow-md"
          >
            <Sparkles size={13} className="text-brand-bronze animate-pulse" />
            <span className="text-[10px] font-semibold tracking-[0.2em] text-brand-bronze uppercase">
              Curadoria de Alto Padrão
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6"
          >
            Sua casa, sua maior{' '}
            <span className="italic font-normal text-brand-bronze block sm:inline">
              poesia visual
            </span>
            .
          </motion.h1>

          {/* Body Copy */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-white/70 leading-relaxed font-light mb-8 max-w-lg"
          >
            Mobiliário autoral, curadoria têxtil rica e projetos sob medida criados para transformar espaços físicos em refúgios repletos de serenidade, significado e arte.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
            id="hero-ctas"
          >
            <button
              onClick={() => onScrollToSection('colecoes')}
              className="flex items-center justify-center gap-2 bg-brand-bronze hover:bg-brand-terracotta text-black text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>Explorar Coleções</span>
              <ArrowRight size={15} className="text-black" />
            </button>
            <button
              onClick={() => onScrollToSection('simulador')}
              className="flex items-center justify-center gap-2 border border-white/25 hover:bg-white/5 text-white text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-full transition-all duration-300 cursor-pointer"
            >
              <Compass size={15} />
              <span>Simular Ambientes</span>
            </button>
          </motion.div>

          {/* Quick Pillars list */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8"
            id="hero-pillars"
          >
            <div>
              <h3 className="font-serif text-lg font-bold text-white max-w-fit">100%</h3>
              <p className="text-[10px] text-white/50 uppercase tracking-wider font-semibold mt-1">
                Madeira Autêntica
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white max-w-fit">Manufatura</h3>
              <p className="text-[10px] text-white/50 uppercase tracking-wider font-semibold mt-1">
                Artesanal Local
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white max-w-fit">Assinatura</h3>
              <p className="text-[10px] text-white/50 uppercase tracking-wider font-semibold mt-1">
                Design Exclusivo
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual / Image Column */}
        <div className="lg:col-span-6 relative h-[450px] sm:h-[550px] flex items-center justify-center" id="hero-media-wrapper">
          {/* Main Hero Photo Container with floating decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="w-full h-full relative"
          >
            {/* Elegant Background Framing */}
            <div className="absolute inset-4 border border-brand-bronze/20 rounded-2xl transform translate-x-3 translate-y-3 -z-10" />

            {/* Main Picture */}
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
                alt="Ambiente elegante decorado com móveis Aura"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Image Gradient overlay to make text popped if any */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* floating editorial quote block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-6 -left-6 sm:-left-12 bg-[#141414] p-5 sm:p-6 rounded-xl shadow-xl max-w-xs border border-white/10 hidden sm:block"
            >
              <p className="font-serif font-light text-xs italic text-white/90 leading-relaxed mb-3">
                "O design genuíno não preenche o espaço; ele traduz no silêncio quem nós somos em nossa melhor forma."
              </p>
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-brand-bronze" />
                <span className="text-[10px] tracking-widest font-semibold text-brand-bronze uppercase">
                  Estúdio Aura
                </span>
              </div>
            </motion.div>

            {/* floating design tag badge */}
            <div className="absolute top-6 right-6 bg-[#141414]/90 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-full text-[9px] uppercase tracking-[0.2em] font-medium hidden sm:flex items-center gap-2 border border-white/10">
              <Leaf size={11} className="text-brand-bronze" />
              <span>Sustentabilidade</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
