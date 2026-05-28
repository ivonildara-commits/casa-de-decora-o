/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Compass, Sparkles, Send, MapPin, Phone, Mail, Instagram, Bookmark } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const [newsEmail, setNewsEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10" id="main-footer">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/5 pb-16">
        
        {/* Column 1: Brand details and statement */}
        <div className="md:col-span-4 space-y-6" id="footer-brand-col">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-brand-bronze text-black flex items-center justify-center font-serif text-base font-bold">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-widest uppercase text-white">
                Aura
              </span>
              <span className="text-[8px] uppercase tracking-[0.25em] text-brand-bronze">
                Atelier de Decoração
              </span>
            </div>
          </div>

          <p className="text-xs text-white/60 leading-relaxed font-light">
            Nós acreditamos na harmonia física dos objetos para inspirar sentimentos diários de calma, propósito e sofisticação no seu próprio santuário residencial ou comercial.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a 
              href="#" 
              aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-white/10 hover:border-brand-bronze text-white hover:text-brand-bronze flex items-center justify-center transition-all"
            >
              <Instagram size={14} />
            </a>
            <a 
              href="#" 
              aria-label="Pinterest"
              className="w-8 h-8 rounded-full border border-white/10 hover:border-brand-bronze text-white hover:text-brand-bronze flex items-center justify-center transition-all"
            >
              <Bookmark size={14} />
            </a>
          </div>
        </div>

        {/* Column 2: Direct Jump lists */}
        <div className="md:col-span-2 space-y-4" id="footer-links-col">
          <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-[#F7F4EF]/90 border-l border-brand-bronze pl-2">
            Navegação
          </h4>
          <ul className="space-y-2.5 text-xs text-white/70 font-light">
            {[
              { label: 'Início', id: 'inicio' },
              { label: 'Filosofia', id: 'filosofia' },
              { label: 'Coleções', id: 'colecoes' },
              { label: 'Simulador', id: 'simulador' },
              { label: 'Planejamento', id: 'planejador' },
              { label: 'Perguntas', id: 'faq' }
            ].map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => onScrollToSection(link.id)}
                  className="hover:text-brand-bronze transition-colors cursor-pointer text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact & Address coordinates */}
        <div className="md:col-span-3 space-y-4" id="footer-contacts-col">
          <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-[#F7F4EF]/90 border-l border-brand-bronze pl-2">
            Endereços & Contato
          </h4>
          <ul className="space-y-4 text-xs text-white/70 font-light">
            <li className="flex items-start gap-3">
              <MapPin size={15} className="text-brand-bronze flex-shrink-0 mt-0.5" />
              <span>Av. Brigadeiro Faria Lima, 4200<br />Itaim Bibi, São Paulo - SP<br />CEP 04538-132</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-brand-bronze flex-shrink-0" />
              <span>(11) 3210-9876</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-brand-bronze flex-shrink-0" />
              <span>contato@auradecor.com</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter newsletter subscription */}
        <div className="md:col-span-3 space-y-4" id="footer-newsletter-col">
          <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-[#F7F4EF]/90 border-l border-brand-bronze pl-2">
            Informativo Semanal
          </h4>
          <p className="text-xs text-white/60 font-light leading-normal">
            Receba ensaios conceituais sobre decoração, aviso de novos produtos e ofertas exclusivas no e-mail.
          </p>

          <form onSubmit={handleNewsSubmit} className="flex flex-col gap-2 pt-2">
            <div className="flex gap-1.5 bg-brand-softcharcoal border border-white/10 p-1 rounded-xl">
              <input
                required
                type="email"
                placeholder="Seu melhor e-mail"
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                className="bg-transparent text-xs text-white px-3 flex-grow focus:outline-none placeholder-white/30"
              />
              <button
                type="submit"
                className="bg-brand-bronze hover:bg-brand-terracotta text-black p-2.5 rounded-lg transition-colors cursor-pointer"
                aria-label="Inscrever email"
              >
                <Send size={12} className="text-black" />
              </button>
            </div>
            {subscribed && (
              <span className="text-[10px] text-emerald-400 font-semibold mt-1 block">
                ✓ E-mail cadastrado com sucesso!
              </span>
            )}
          </form>
        </div>

      </div>

      {/* Bottom copyright details bar */}
      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-white/40 tracking-wider uppercase font-semibold">
        <span>© {new Date().getFullYear()} Aura Atelier de Decorações Ltda. Todos os direitos reservados.</span>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-brand-bronze transition-colors">Termos de Uso</a>
          <span>•</span>
          <a href="#" className="hover:text-brand-bronze transition-colors">Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
