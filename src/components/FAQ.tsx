/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="faq-header">
          <span className="text-[10px] tracking-[0.25em] font-semibold text-brand-bronze uppercase flex items-center justify-center gap-1.5">
            <HelpCircle size={13} />
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Perguntas & Respostas
          </h2>
          <p className="text-sm text-white/70 leading-relaxed font-light">
            Tem alguma dúvida sobre logística, materiais, encomendas ou sobre a nossa consultoria de design? Encontre as respostas rápidas abaixo.
          </p>
        </div>

        {/* FAQ Accordions List */}
        <div className="space-y-4" id="faq-accordion-list">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#141414] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-bronze/30 shadow-lg"
              >
                {/* Accordion trigger line */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left p-6 gap-4 font-serif font-bold text-sm sm:text-base text-white hover:text-brand-bronze transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-brand-bronze transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Simulated dynamic drawer box */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-white/75 font-light leading-relaxed border-t border-white/5">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Contact advice callout */}
        <div className="mt-14 text-center bg-[#141414] border border-white/10 p-6 rounded-2xl max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg" id="faq-callout">
          <p className="text-xs text-white/70 font-light text-left leading-normal">
            Não encontrou o que precisava? Fale com nossa equipe técnica diretamente.
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-black bg-brand-bronze hover:bg-brand-terracotta px-5 py-3 rounded-full transition-all flex-shrink-0 shadow-md"
          >
            <span>WhatsApp Direto</span>
            <ArrowRight size={13} className="text-black" />
          </a>
        </div>

      </div>
    </section>
  );
}
