/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, ArrowRight, MessageSquare } from 'lucide-react';

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Header({ onScrollToSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Filosofia', id: 'filosofia' },
    { label: 'Coleções', id: 'colecoes' },
    { label: 'Simulador', id: 'simulador' },
    { label: 'Planejamento', id: 'planejador' },
    { label: 'FAQ', id: 'faq' }
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md py-4 shadow-xl border-b border-white/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => onScrollToSection('inicio')}
          className="flex items-center gap-2.5 cursor-pointer group"
          id="header-logo-container"
        >
          <div className="w-10 h-10 rounded-full bg-brand-bronze text-black flex items-center justify-center font-serif text-lg font-bold transition-all duration-300 group-hover:bg-brand-terracotta shadow-sm">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-widest text-white uppercase leading-none">
              Aura
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] font-medium text-brand-bronze mt-0.5">
              Atelier de Decoração
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollToSection(item.id)}
              className="relative text-xs font-medium uppercase tracking-wider text-white/70 hover:text-white transition-colors py-1 cursor-pointer group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-bronze transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="hidden md:flex items-center gap-4" id="header-actions">
          <button
            onClick={() => onScrollToSection('planejador')}
            className="flex items-center gap-2 bg-brand-bronze hover:bg-brand-terracotta text-black text-xs font-semibold uppercase tracking-wider py-2.5 px-5 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-md cursor-pointer"
            id="header-cta-button"
          >
            <MessageSquare size={14} className="text-black" />
            <span>Consultoria Grátis</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-brand-bronze transition-colors cursor-pointer"
          aria-label="Toggle Menu"
          id="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brand-softcharcoal border-b border-brand-sand/40 overflow-hidden"
            id="mobile-nav-panel"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onScrollToSection(item.id);
                  }}
                  className="text-left py-2.5 text-sm font-medium uppercase tracking-wider text-white border-b border-white/5 hover:text-brand-terracotta transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onScrollToSection('planejador');
                }}
                className="w-full flex items-center justify-center gap-2 bg-brand-bronze hover:bg-brand-terracotta text-black text-xs font-semibold py-3.5 rounded-full mt-2"
              >
                <MessageSquare size={15} />
                <span>Iniciar Consultoria</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
