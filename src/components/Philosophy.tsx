/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Shield, Hammer, Heart, Eye } from 'lucide-react';

export default function Philosophy() {
  const pillars = [
    {
      icon: <Hammer className="text-brand-bronze" size={24} />,
      title: 'Manufatura Rígida',
      subtitle: 'Feito para gerações',
      description: 'Cada móvel é estruturado sob processos de marcenaria tradicional. Unimos cavilhas perfeitas, lixamento manual extremo e fixação invisível para que sua peça permaneça impecável ao longo das décadas.'
    },
    {
      icon: <Heart className="text-brand-bronze" size={24} />,
      title: 'Materiais Honestos',
      subtitle: 'Pureza em primeiro plano',
      description: 'Mármores autênticos Travertino Romano, couro curtido vegetalmente, linho puro europeu e madeiras maciças regulamentadas. Rejeitamos plásticos imitando texturas ou compensados de baixa densidade.'
    },
    {
      icon: <Shield className="text-brand-bronze" size={24} />,
      title: 'Estilo Atemporal',
      subtitle: 'Sobrevivendo às tendências',
      description: 'Desenhamos pensando na permanência estética. Fugimos de modismos ruidosos e focamos em silhuetas orgânicas, tonalidades neutras e proporções funcionais que se adaptam a diferentes fases da sua vida.'
    },
    {
      icon: <Eye className="text-brand-bronze" size={24} />,
      title: 'Harmonia Sensorial',
      subtitle: 'O silêncio do design',
      description: 'Nossa curadoria foca no repouso visual. A escolha de cores foscas e texturas táteis deliciosas serve para acalmar os sentidos, diminuir o ruído mental diário e transformar o lar em um santuário de reconexão.'
    }
  ];

  return (
    <section id="filosofia" className="py-24 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16" id="philosophy-header">
          <span className="text-[10px] tracking-[0.25em] font-semibold text-brand-bronze uppercase">
            A Essência da Aura
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-3 mb-5">
            Onde a sofisticação encontra o repouso.
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
            Acreditamos que curar os objetos ao nosso redor é, também, uma forma de organizar nossa experience interior. Nossa filosofia prioriza o silêncio visual, a nobreza tátil e o respeito ecológico.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="philosophy-pillars-grid">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#141414] border border-white/5 hover:border-brand-bronze/40 p-8 rounded-2xl hover:bg-[#1C1C1C] shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Icon Frame */}
              <div className="w-12 h-12 bg-[#1C1C1C] rounded-xl shadow-inner border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>

              {/* Subtitle */}
              <span className="text-[9px] uppercase tracking-wider font-semibold text-brand-bronze">
                {pillar.subtitle}
              </span>

              {/* Title */}
              <h3 className="font-serif text-lg font-bold text-white mt-2 mb-4 group-hover:text-brand-terracotta transition-colors">
                {pillar.title}
              </h3>

              {/* Body */}
              <p className="text-xs text-white/60 leading-relaxed font-light">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Beautiful Quote Banner */}
        <div className="mt-20 relative rounded-3xl overflow-hidden shadow-xl" id="philosophy-quote-banner">
          <div className="absolute inset-0 bg-brand-charcoal/45 z-10" />
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1500&auto=format&fit=crop"
            alt="Interior elegante de sala e cozinha integrada"
            className="w-full h-80 object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 sm:px-16 max-w-3xl">
            <h4 className="font-serif italic text-white text-xl sm:text-2xl font-light leading-relaxed mb-4">
              "A beleza reside na eliminação do excesso. Fazer silêncio no ambiente é permitir que a luz e o vento dancem."
            </h4>
            <span className="text-xs font-semibold tracking-widest text-[#F7F4EF]/90 uppercase">
              Atelier d’Architecture & Design
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
