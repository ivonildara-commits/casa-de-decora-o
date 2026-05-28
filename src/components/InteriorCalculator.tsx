/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, ArrowRight, ArrowLeft, Send, Sparkles, Building2, User, Phone, CheckCircle } from 'lucide-react';
import { RoomType } from '../types';

export default function InteriorCalculator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [room, setRoom] = useState<RoomType>('sala');
  const [prefStyle, setPrefStyle] = useState('japandi');
  const [area, setArea] = useState('p'); // p: <15m2, m: 15-30m2, g: >30m2
  const [level, setLevel] = useState('completo'); // completo (3D + acompanhamento), basico (moodboard + links)
  
  // Client info
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Simple estimates calculation
  const getEstimation = () => {
    let basePrice = 800; // base design consult
    
    // Room weights
    if (room === 'sala') basePrice += 400;
    if (room === 'jantar') basePrice += 200;
    if (room === 'escritorio') basePrice += 150;
    if (room === 'quarto') basePrice += 300;

    // Area size multiplier
    if (area === 'm') basePrice += 500;
    if (area === 'g') basePrice += 1100;

    // Service Level weights
    if (level === 'completo') basePrice += 900;

    return {
      min: basePrice,
      max: Math.round(basePrice * 1.3)
    };
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !whatsapp) return;
    setSubmitted(true);
  };

  const handleRestart = () => {
    setRoom('sala');
    setPrefStyle('japandi');
    setArea('p');
    setLevel('completo');
    setName('');
    setWhatsapp('');
    setSubmitted(false);
    setCurrentStep(1);
  };

  const estimation = getEstimation();

  return (
    <section id="planejador" className="py-24 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="calc-header">
          <span className="text-[10px] tracking-[0.25em] font-semibold text-brand-bronze uppercase flex items-center justify-center gap-2">
            <Calculator size={13} />
            Transparência e Praticidade
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Simulador de Orçamento de Design
          </h2>
          <p className="text-sm text-white/70 leading-relaxed font-light">
            Responda a 4 perguntas rápidas sobre as dimensões do seu ambiente e o nível de acompanhamento desejado para obter um orçamento preliminar na hora.
          </p>
        </div>

        {/* Wizard Panel wrapper */}
        <div className="bg-[#141414] border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl" id="calc-wizard-card">
          
          {/* Progress bar and indicators */}
          <div className="flex items-center justify-between mb-10 text-xs font-semibold text-white/45" id="wizard-progress">
            <span>Etapa {currentStep} de 4</span>
            <div className="flex-grow mx-6 bg-white/10 h-1.5 rounded-full relative overflow-hidden">
              <div 
                style={{ width: `${(currentStep / 4) * 100}%` }}
                className="bg-brand-bronze h-full rounded-full transition-all duration-300"
              />
            </div>
            <span className="text-brand-bronze uppercase tracking-widest text-[9px]">
              {currentStep === 1 && 'Cômodo'}
              {currentStep === 2 && 'Múltiplos e Estilos'}
              {currentStep === 3 && 'Dimensões'}
              {currentStep === 4 && 'Resultado'}
            </span>
          </div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step 1: Room Purpose */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="font-serif text-lg font-bold text-white">
                      Qual ambiente você gostaria de transformar?
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { id: 'sala', label: 'Sala de Estar', desc: 'Espaço para reuniões, TV e descanso.' },
                        { id: 'quarto', label: 'Quarto', desc: 'Seu casulo pessoal e repouso.' },
                        { id: 'escritorio', label: 'Home Office', desc: 'Foco, criatividade e ergonomia.' },
                        { id: 'jantar', label: 'Sala de Jantar', desc: 'Para saborear e celebrar com amigos.' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setRoom(item.id as RoomType)}
                          className={`p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                            room === item.id 
                              ? 'border-brand-bronze bg-[#1A1A1A] shadow-md' 
                              : 'border-white/10 hover:border-white/20 bg-transparent'
                          }`}
                        >
                          <span className="font-serif font-bold text-sm text-white block mb-1">
                            {item.label}
                          </span>
                          <span className="text-[11px] text-white/60 inline-block font-light">
                            {item.desc}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Decor Style */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="font-serif text-lg font-bold text-white">
                      Qual estilo de decoração vibra melhor com sua personalidade?
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { id: 'japandi', label: 'Japandi Moderno', desc: 'Naturais, tons argilosos leves, aconchego japonês.' },
                        { id: 'terracotta', label: 'Rústico Terracota', desc: 'Cores quentes da terra, vasos rústicos.' },
                        { id: 'nordic', label: 'Minimalismo Nórdico', desc: 'Brancos, pretos industriais e madeira pinus.' },
                        { id: 'industrial', label: 'Industrial Urbano', desc: 'Concreto aparente, metais pretos e couro.' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setPrefStyle(item.id)}
                          className={`p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                            prefStyle === item.id 
                              ? 'border-brand-bronze bg-[#1A1A1A] shadow-md' 
                              : 'border-white/10 hover:border-white/20 bg-transparent'
                          }`}
                        >
                          <span className="font-serif font-bold text-sm text-white block mb-1">
                            {item.label}
                          </span>
                          <span className="text-[11px] text-white/60 inline-block font-light">
                            {item.desc}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Area Size & Service Level */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    {/* Area size range */}
                    <div>
                      <h3 className="font-serif text-base font-bold text-white mb-4">
                        Qual o tamanho aproximado do ambiente?
                      </h3>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { id: 'p', label: 'Até 15 m²', sub: 'Pequeno (ex: escritórios, quartos compactos)' },
                          { id: 'm', label: 'De 15 m² a 30 m²', sub: 'Médio (ex: salas normais, quartos master)' },
                          { id: 'g', label: 'Acima de 30 m²', sub: 'Grande (ex: lofts integrados, copas amplas)' }
                        ].map((item) => (
                          <button
                            key={item.id}
                            onClick={() => setArea(item.id)}
                            className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                              area === item.id 
                                ? 'border-brand-bronze bg-[#1A1A1A] shadow-md' 
                               : 'border-white/10 hover:border-white/20 bg-transparent'
                            }`}
                          >
                            <span className="font-bold text-xs text-white block mb-1">
                              {item.label}
                            </span>
                            <span className="text-[10px] text-white/50 leading-tight block font-light">
                              {item.sub}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Level of Service */}
                    <div>
                      <h3 className="font-serif text-base font-bold text-white mb-4">
                        Qual o nível de assessoria que você precisa?
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          key="basico"
                          onClick={() => setLevel('basico')}
                          className={`p-5 rounded-xl border-2 text-left transition-all cursor-pointer ${
                            level === 'basico' 
                              ? 'border-brand-bronze bg-[#1A1A1A] shadow-md' 
                              : 'border-white/10 hover:border-white/20 bg-transparent'
                          }`}
                        >
                          <span className="font-bold text-sm text-white block mb-1">
                            Plano Essencial (Moodboard + Links)
                          </span>
                          <span className="text-[11px] text-white/60 leading-normal font-light">
                            Desenvolvemos o conceito visual, disposição dos móveis no espaço e fornecemos links diretos para compras das peças.
                          </span>
                        </button>
                        <button
                          key="completo"
                          onClick={() => setLevel('completo')}
                          className={`p-5 rounded-xl border-2 text-left transition-all cursor-pointer ${
                            level === 'completo' 
                              ? 'border-brand-bronze bg-[#1A1A1A] shadow-md' 
                              : 'border-white/10 hover:border-white/20 bg-transparent'
                          }`}
                        >
                          <span className="font-bold text-sm text-white block mb-1">
                            Plano Premium (Projeto 3D + Detalhamento)
                          </span>
                          <span className="text-[11px] text-white/60 leading-normal font-light">
                            Inclui maquetes eletrônicas em 3D realista fotorrealista, consultoria de pintura de parede e até 3 reuniões online para revisões.
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Submit Details and See Estimate */}
                {currentStep === 4 && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="font-serif text-lg font-bold text-white">
                      Insira seus dados para liberar o cálculo instantâneo:
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed font-light">
                      Nós estimamos seu projeto e associamos um arquiteto consultor exclusivo imediatamente. Garantimos privacidade absoluta dos seus dados.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="flex flex-col">
                        <label className="text-[9px] uppercase tracking-wider font-semibold text-brand-bronze mb-1.5 flex items-center gap-1">
                          <User size={11} /> Seu Nome Completo
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Ex: Clara Mendes"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="bg-[#141414] border border-white/10 px-4 py-3 rounded-xl text-xs text-white focus:outline-none focus:border-brand-bronze focus:ring-1 focus:ring-brand-bronze/30"
                        />
                      </div>

                      {/* Phone input */}
                      <div className="flex flex-col">
                        <label className="text-[9px] uppercase tracking-wider font-semibold text-brand-bronze mb-1.5 flex items-center gap-1">
                          <Phone size={11} /> WhatsApp de Contato
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="Ex: (11) 99999-9999"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          className="bg-[#141414] border border-white/10 px-4 py-3 rounded-xl text-xs text-white focus:outline-none focus:border-brand-bronze focus:ring-1 focus:ring-brand-bronze/30"
                        />
                      </div>
                    </div>

                    <div className="bg-[#1A1A1A] border border-white/5 p-4.5 rounded-xl text-[11px] text-white/70 flex items-start gap-2.5">
                      <Sparkles size={14} className="text-brand-bronze flex-shrink-0 mt-0.5" />
                      <span>
                        Simulação gerada para o estilo <strong className="font-semibold">{prefStyle.toUpperCase()}</strong> no ambiente <strong className="font-semibold">{room.toUpperCase()}</strong>. Ao enviar, o designer associado receberá o rascunho de cores que você utilizou no simulador de parede desta página!
                      </span>
                    </div>
                  </form>
                )}

                {/* Footer buttons / actions inside wizard */}
                <div className="flex items-center justify-between border-t border-white/5 pt-8 mt-10">
                  <button
                    onClick={handleBack}
                    className={`flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white py-2 px-5 rounded-lg border border-white/10 hover:bg-white/5 transition-all cursor-pointer ${
                      currentStep === 1 ? 'pointer-events-none opacity-0' : ''
                    }`}
                  >
                    <ArrowLeft size={14} />
                    <span>Voltar</span>
                  </button>

                  <button
                    onClick={currentStep === 4 ? handleSubmit : handleNext}
                    className="flex items-center gap-2 bg-brand-bronze hover:bg-brand-terracotta text-black text-xs font-bold uppercase tracking-wider py-3.5 px-7 rounded-full shadow-lg transition-all cursor-pointer"
                  >
                    <span>{currentStep === 4 ? 'Gerar Cálculo' : 'Continuar'}</span>
                    {currentStep === 4 ? <Send size={14} /> : <ArrowRight size={14} />}
                  </button>
                </div>
              </motion.div>
            ) : (
              // SUBMITTED SUCCESS VIEW containing the math estimates!
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
                id="submitted-budget-estimate"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-950/30 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-6">
                  <CheckCircle size={32} />
                </div>

                <span className="text-[10px] tracking-[0.25em] font-semibold text-brand-bronze uppercase">
                  Parabéns, {name.split(' ')[0]}! Estimativa Pronta
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-3 mb-6">
                  Seu projeto estimado na hora
                </h3>

                {/* Estimate Result Counter cards */}
                <div className="max-w-md mx-auto bg-[#1A1A1A] border border-white/10 py-8 px-6 rounded-2xl shadow-xl mb-8">
                  <span className="text-[9px] uppercase tracking-wider font-semibold text-white/50">
                    Investimento estimado da Assessoria Design
                  </span>
                  
                  {/* Result Numbers */}
                  <div className="flex items-baseline justify-center gap-2 mt-2 mb-1">
                    <span className="text-3xl font-bold font-mono text-white">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(estimation.min)}
                    </span>
                    <span className="text-white/40 text-xs font-light">a</span>
                    <span className="text-3xl font-bold font-mono text-brand-bronze">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(estimation.max)}
                    </span>
                  </div>

                  <span className="text-[10px] text-white/60 font-light max-w-xs mx-auto block leading-normal">
                    *Preço estimado para o plano {level === 'completo' ? 'Premium (3D Detalhado)' : 'Essencial'} num espaço de {area === 'p' ? 'até 15m²' : area === 'm' ? '15m² a 30m²' : 'mais de 30m²'}.
                  </span>
                </div>

                <div className="max-w-md mx-auto text-left space-y-4 text-xs font-light text-white/80 mb-10 leading-relaxed border-t border-white/10 pt-6">
                  <h4 className="font-serif font-bold text-white text-sm">Próximos passos programados:</h4>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze mt-1.5 flex-shrink-0" />
                      <span>Um arquiteto associado entrará em contato através do número <strong className="font-semibold text-white">{whatsapp}</strong> nas próximas duas horas comerciais para marcar seu primeiro agendamento cortesia.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-bronze mt-1.5 flex-shrink-0" />
                      <span>Desenvolvendo este projeto conosco, você ganha <strong className="font-semibold text-brand-bronze">15% de desconto promocional</strong> em qualquer peça física comprada de nosso catálogo nas seções acima!</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={handleRestart}
                  className="text-xs uppercase tracking-wider font-semibold text-brand-bronze hover:text-brand-terracotta transition-colors underline border-b border-transparent pb-0.5 cursor-pointer"
                >
                  Refazer Nova Simulação de Ambientes
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
