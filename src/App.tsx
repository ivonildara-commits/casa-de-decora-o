/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageSquare, ArrowUpRight, Compass, ShieldCheck, HelpCircle, Star } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import CuratedCatalog from './components/CuratedCatalog';
import PaletteSimulator from './components/PaletteSimulator';
import InteriorCalculator from './components/InteriorCalculator';
import RoomGallery from './components/RoomGallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { TESTIMONIALS } from './data';

export default function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleScrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      // Calculate offset for sticky header
      const headerOffset = 84;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen font-sans antialiased text-[#E5E5E5] bg-[#0A0A0A] selection:bg-brand-bronze selection:text-black overflow-x-hidden">
      
      {/* 1. HEADER (STIKCY) */}
      <Header onScrollToSection={handleScrollToSection} />

      {/* 2. HERO */}
      <Hero onScrollToSection={handleScrollToSection} />

      {/* 3. PHILOSOPHY / CORE PILLARS */}
      <Philosophy />

      {/* 4. EXCLUSIVE PRODUCTS CATALOG */}
      <CuratedCatalog />

      {/* 5. INTERACTIVE ROOM PAINT PREVIEW SIMULATOR */}
      <PaletteSimulator />

      {/* 6. EXPERIMENTAL SLIDER TESTIMONIAL */}
      <section className="py-24 bg-[#141414] text-white border-t border-white/5 overflow-hidden relative">
        {/* Abstract design elements */}
        <div className="absolute left-[-5%] top-[-5%] w-[40vw] h-[40vw] rounded-full bg-brand-bronze/10 blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16" id="testimonials-header">
            <span className="text-[10px] tracking-[0.25em] font-semibold text-brand-bronze uppercase block mb-3">
              Vozes que Inspiramos
            </span>
            <h2 className="font-serif text-3xl font-bold text-white leading-tight">
              A Opinião de Quem Confia na Aura
            </h2>
          </div>

          {/* Testimonial slider view */}
          <div className="relative bg-[#1C1C1C] border border-white/5 rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-12" id="testimonial-slider-card">
            {/* User image */}
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-brand-bronze flex-shrink-0 shadow-md">
              <img
                src={TESTIMONIALS[activeTestimonial].image}
                alt={TESTIMONIALS[activeTestimonial].name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Quote details */}
            <div className="flex-grow space-y-4 text-center md:text-left">
              <div className="flex justify-center md:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-brand-bronze fill-brand-bronze" />
                ))}
              </div>

              <p className="font-serif italic text-base sm:text-lg text-white/90 font-light leading-relaxed">
                "{TESTIMONIALS[activeTestimonial].text}"
              </p>

              <div>
                <h4 className="font-serif font-bold text-sm text-white">
                  {TESTIMONIALS[activeTestimonial].name}
                </h4>
                <p className="text-[10px] uppercase tracking-wider text-brand-bronze mt-1">
                  {TESTIMONIALS[activeTestimonial].role}
                </p>
              </div>
            </div>
          </div>

          {/* Slider indicators */}
          <div className="flex items-center justify-center gap-3.5 mt-8" id="slider-indicators-row">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeTestimonial === idx ? 'bg-brand-bronze w-9' : 'bg-white/20 hover:bg-white/45 w-2.5'
                }`}
                aria-label={`Visualizar testemunho ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 7. PORTFOLIO GALLERY */}
      <RoomGallery />

      {/* 8. BUDGET / INTERIOR WIZARD CALCULATOR */}
      <InteriorCalculator />

      {/* 9. FAQ ACCORDION */}
      <FAQ />

      {/* 10. SOCIAL CALL TO ACTION / MINI BANNER */}
      <section className="py-20 bg-gradient-to-tr from-[#0F0F0F] via-[#1A1A1A] to-[#0A0A0A] overflow-hidden relative border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-[10px] tracking-[0.2em] font-bold text-brand-bronze uppercase">
            Sua Vez de Transformar
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
            Vamos desenhar juntos a atmosfera dos seus sonhos?
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed font-light">
            Seja mudando uma única parede com uma paleta de cores harmoniosa, escolhendo uma poltrona escultural perfeita ou redefinindo a marcenaria de uma residência completa, nós estamos de braços abertos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4" id="banner-actions">
            <button
              onClick={() => handleScrollToSection('planejador')}
              className="w-full sm:w-auto bg-brand-bronze hover:bg-brand-terracotta text-black text-xs font-semibold uppercase tracking-wider py-4 px-10 rounded-full transition-all duration-300 shadow hover:shadow-lg cursor-pointer"
            >
              Começar Simulação Grátis
            </button>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-white/20 hover:bg-white/5 text-white text-xs font-semibold uppercase tracking-wider py-4 px-10 rounded-full transition-all text-center"
            >
              Agendar Chamada de Vídeo
            </a>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <Footer onScrollToSection={handleScrollToSection} />

    </div>
  );
}
