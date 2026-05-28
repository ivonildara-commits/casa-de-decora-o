/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Compass, RefreshCw, Layout, Star, Lightbulb, Info } from 'lucide-react';
import { RoomType, StyleTheme } from '../types';
import { STYLE_THEMES } from '../data';

export default function PaletteSimulator() {
  const [activeRoom, setActiveRoom] = useState<RoomType>('sala');
  const [activeStyle, setActiveStyle] = useState<StyleTheme>(STYLE_THEMES[0]);
  
  // Customizable simulator state variables
  const [wallColor, setWallColor] = useState(STYLE_THEMES[0].colors.background);
  const [sofaColor, setSofaColor] = useState(STYLE_THEMES[0].colors.secondary);
  const [cushionColor, setCushionColor] = useState(STYLE_THEMES[0].colors.accent);
  const [artFrameColor, setArtFrameColor] = useState(STYLE_THEMES[0].colors.primary);
  const [activeTab, setActiveTab] = useState<'paredes' | 'moveis' | 'detalhes'>('paredes');

  const handleStyleChange = (style: StyleTheme) => {
    setActiveStyle(style);
    setWallColor(style.colors.background);
    setSofaColor(style.colors.secondary);
    setCushionColor(style.colors.accent);
    setArtFrameColor(style.colors.primary);
  };

  const handleReset = () => {
    setWallColor(activeStyle.colors.background);
    setSofaColor(activeStyle.colors.secondary);
    setCushionColor(activeStyle.colors.accent);
    setArtFrameColor(activeStyle.colors.primary);
  };

  const roomsList: { id: RoomType; label: string }[] = [
    { id: 'sala', label: 'Sala de Estar' },
    { id: 'quarto', label: 'Dormitório Casal' },
    { id: 'escritorio', label: 'Home Office' },
    { id: 'jantar', label: 'Sala de Jantar' },
  ];

  return (
    <section id="simulador" className="py-24 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12" id="simulador-header">
          <span className="text-[10px] tracking-[0.25em] font-semibold text-brand-bronze uppercase flex items-center gap-2">
            <Palette size={13} />
            Estúdio de Criação Aura
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-3 mb-5">
            Simulador de Cores e Ambientes
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
            Selecione qual cômodo deseja visualizar, experimente nossos 4 temas-assinatura e clique livremente nas paletas para mudar as cores das paredes, do mobiliário e dos quadros em tempo real.
          </p>
        </div>

        {/* Double Column sandbox controller */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch" id="simulador-grid">
          
          {/* Left Column: Interactive Vector Room sandbox previews */}
          <div className="lg:col-span-7 flex flex-col justify-between" id="room-canvas-container">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 bg-[#141414]/90 border border-white/10 p-3 rounded-2xl shadow-xl">
              {/* Room selector */}
              <div className="flex bg-[#1A1A1A] p-1 rounded-xl border border-white/5">
                {roomsList.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setActiveRoom(room.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all ${
                      activeRoom === room.id
                        ? 'bg-brand-bronze text-black font-semibold shadow-md'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {room.label}
                  </button>
                ))}
              </div>

              {/* Reset button */}
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs text-brand-bronze hover:text-brand-terracotta transition-colors cursor-pointer"
                title="Restaurar paleta padrão do tema"
              >
                <RefreshCw size={13} />
                <span className="font-medium uppercase tracking-wider text-[9px]">Resetar</span>
              </button>
            </div>

            {/* Simulated Room Box */}
            <div 
              style={{ backgroundColor: wallColor }}
              className="relative w-full h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-inner border border-white/10 transition-colors duration-500 ease-out flex flex-col justify-between p-6"
            >
              {/* Floating Blueprint context tags */}
              <div className="flex justify-between items-start z-10">
                <span className="bg-black/80 backdrop-blur-sm text-brand-bronze border border-white/10 px-3 py-1 rounded-lg text-[9px] uppercase tracking-wider font-semibold">
                  Preview: {roomsList.find(r => r.id === activeRoom)?.label || activeRoom} • Aura Studio
                </span>
                <span className="bg-black/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-[9px] font-mono shadow-sm border border-white/5">
                  Cor Parede: <span className="font-bold underline uppercase">{wallColor}</span>
                </span>
              </div>

              {/* STYLISH LAYERED CSS DRAWING PLAYGROUND SCENE */}
              <div className="absolute inset-0 flex flex-col justify-end" id="layered-interior-vector">
                
                {/* 1. Fine Wall Art Canvas Frame (changes with artFrameColor state) */}
                <motion.div 
                   initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{ borderColor: '#2A2A2A', backgroundColor: artFrameColor }}
                  className="absolute top-20 left-[20%] w-32 h-[130px] border-[4px] rounded-sm shadow-md flex flex-col items-center justify-center p-3 transition-colors duration-500"
                >
                  {/* Inside minimal geometric poster drawings */}
                  <div className="w-full h-full bg-white/10 rounded flex flex-col items-center justify-center border border-white/20">
                    <div className="w-10 h-10 rounded-full border border-white/40 border-dashed animate-spin-[20s]" />
                    <span className="text-[7px] text-white/50 tracking-widest uppercase font-mono mt-2">AURA V.01</span>
                  </div>
                </motion.div>

                {/* 2. Window Framing or Floating Shelf with Ceramics */}
                <div className="absolute top-24 right-[15%] w-36 h-28 border-l-2 border-r-2 border-brand-charcoal/10 flex flex-col justify-between">
                  <div className="border-t-2 border-brand-charcoal/10 w-full" />
                  <div className="bg-brand-charcoal/5 h-px w-full" />
                  {/* floating tiny shelf */}
                  <div className="w-full h-2 bg-[#2a2a2a]/15 shadow-sm rounded-full flex justify-around px-4">
                    {/* Tiny visual vase */}
                    <div className="w-4 h-6 bg-brand-bronze rounded-t-full -mt-4 opacity-80" />
                    <div className="w-2.5 h-4 bg-brand-terracotta rounded-full -mt-2 opacity-80" />
                  </div>
                </div>

                {/* 3. The Designer Sofas / Couches (changes with sofaColor state) */}
                <div className="relative mx-auto w-[280px] sm:w-[380px] h-32 flex flex-col justify-end z-10">
                  {/* Main sofa backing cushions */}
                  <div className="flex justify-around px-4 w-full h-11">
                    <div 
                      style={{ backgroundColor: sofaColor }}
                      className="w-[48%] h-[38px] rounded-t-xl border-b border-white/10 transition-colors duration-500 shadow"
                    />
                    <div 
                      style={{ backgroundColor: sofaColor }}
                      className="w-[48%] h-[38px] rounded-t-xl border-b border-white/10 transition-colors duration-500 shadow"
                    />
                  </div>
                  
                  {/* Seat cushions */}
                  <div 
                    style={{ backgroundColor: sofaColor }}
                    className="w-full h-12 rounded-t-md rounded-b-lg shadow-md transition-colors duration-500 relative flex justify-around items-center px-6"
                  >
                    {/* Visual pillows / cushions (changes with cushionColor state) */}
                    <div 
                      style={{ backgroundColor: cushionColor }}
                      className="w-8 h-8 rounded-lg transform -rotate-12 hover:rotate-0 transition-all duration-500 shadow-sm border border-black/10 -mt-5"
                    />
                    <div 
                      style={{ backgroundColor: cushionColor }}
                      className="w-8 h-8 rounded-lg transform rotate-12 hover:rotate-0 transition-all duration-500 shadow-sm border border-black/10 -mt-5"
                    />
                  </div>

                  {/* Sofa sleek wooden legs */}
                  <div className="flex justify-between px-10 w-full h-5">
                    <div className="w-2 h-full bg-[#3d2a1b] rounded-b-md transform -rotate-12 origin-top" />
                    <div className="w-2 h-full bg-[#3d2a1b] rounded-b-md transform rotate-12 origin-top" />
                  </div>
                </div>

                {/* 4. Minimalist Floor Lamp (glowing bulb) */}
                <div className="absolute bottom-4 right-[25%] h-56 w-12 flex flex-col items-center justify-between pointer-events-none">
                  {/* Lamp Shade bulb arc */}
                  <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center -mb-2 z-10" style={{ backgroundColor: sofaColor }}>
                    <div className="w-4 h-4 rounded-full bg-yellow-100 animate-ping absolute" />
                    <div className="w-4 h-4 rounded-full bg-yellow-100 shadow" />
                  </div>
                  <div className="w-1 bg-[#1c1c1c] h-full" />
                  <div className="w-10 h-1 bg-[#1c1c1c] rounded-full" />
                </div>

                {/* 5. Natural Plant decor */}
                <div className="absolute bottom-5 left-[12%] z-10 flex flex-col items-center">
                  {/* Organic plants green leaves */}
                  <div className="flex justify-center -mb-2 gap-px relative">
                    <div className="w-2.5 h-10 bg-[#425C4D] rounded-full transform -rotate-45 origin-bottom translate-y-1" />
                    <div className="w-2.5 h-12 bg-[#526D5E] rounded-full transform -rotate-12 origin-bottom" />
                    <div className="w-2.5 h-11 bg-[#476051] rounded-full transform rotate-12 origin-bottom" />
                    <div className="w-2.5 h-9 bg-[#425C4D] rounded-full transform rotate-45 origin-bottom translate-y-1" />
                  </div>
                  {/* Ceramic pot pot */}
                  <div className="w-9 h-10 bg-[#A45E40] border-b-2 border-black/20 rounded-b-xl rounded-t shadow-sm" />
                </div>

                {/* 6. Realistic floor layout */}
                <div className="w-full h-8 bg-[#1A1A1A] border-t border-white/5 flex flex-col justify-around py-1">
                  <div className="w-full h-px bg-white/5" />
                  <div className="w-full h-px bg-white/5" />
                </div>

              </div>
            </div>

            {/* Quick tips label */}
            <div className="mt-4 flex items-start gap-2.5 p-4 rounded-2xl bg-[#141414] border border-white/10 shadow-lg">
              <Lightbulb className="text-brand-bronze flex-shrink-0" size={17} />
              <p className="text-[11px] text-white/70 leading-relaxed font-light">
                <strong className="font-semibold text-white">Dica do Designer:</strong> {activeStyle.suggestion} O contraste entre texturas porosas (como o estofado do sofá) e planos lisos (cor de parede {wallColor}) gera riqueza visual sem carregar o espaço físico.
              </p>
            </div>
          </div>

          {/* Right Column: Customizer Palette Pickers */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#141414] border border-white/5 p-8 rounded-3xl shadow-2xl" id="palette-picker-panel">
            <div>
              <span className="text-[9px] uppercase tracking-wider font-semibold text-brand-bronze block mb-2">
                Etapa 1: Escolher o Tema Geral
              </span>
              <h3 className="font-serif text-xl font-bold text-white mb-4">
                Estilos Disponíveis
              </h3>

              {/* Theme Buttons selectors */}
              <div className="grid grid-cols-2 gap-3 mb-8" id="style-themes-selector">
                {STYLE_THEMES.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => handleStyleChange(theme)}
                    className={`flex flex-col items-start p-4 rounded-2xl border-2 text-left cursor-pointer transition-all ${
                      activeStyle.id === theme.id
                        ? 'border-brand-bronze bg-brand-bronze/5 shadow-inner'
                        : 'border-white/10 hover:border-white/20 bg-transparent'
                    }`}
                  >
                    <span className="font-serif font-bold text-xs text-white mb-1">
                      {theme.name}
                    </span>
                    <span className="text-[9px] font-light text-white/60 line-clamp-2 md:line-clamp-none">
                      {theme.colors.description}
                    </span>
                  </button>
                ))}
              </div>

              {/* Selector Tabs for specific objects to colorize */}
              <span className="text-[9px] uppercase tracking-wider font-semibold text-brand-bronze block mb-2">
                Etapa 2: Pintura Personalizada d'Espaço
              </span>
              <h3 className="font-serif text-base font-bold text-white mb-3">
                O que você quer colorir?
              </h3>

              <div className="grid grid-cols-3 gap-2 bg-[#1A1A1A] p-1.5 rounded-xl mb-6 border border-white/5">
                <button
                  onClick={() => setActiveTab('paredes')}
                  className={`py-1.5 rounded-lg text-[10px] uppercase tracking-wider font-semibold transition-all ${
                    activeTab === 'paredes'
                      ? 'bg-brand-bronze shadow-md text-black font-semibold'
                      : 'text-white/60 hover:text-white cursor-pointer'
                  }`}
                >
                  Paredes
                </button>
                <button
                  onClick={() => setActiveTab('moveis')}
                  className={`py-1.5 rounded-lg text-[10px] uppercase tracking-wider font-semibold transition-all ${
                    activeTab === 'moveis'
                      ? 'bg-brand-bronze shadow-md text-black font-semibold'
                      : 'text-white/60 hover:text-white cursor-pointer'
                  }`}
                >
                  Sofá
                </button>
                <button
                  onClick={() => setActiveTab('detalhes')}
                  className={`py-1.5 rounded-lg text-[10px] uppercase tracking-wider font-semibold transition-all ${
                    activeTab === 'detalhes'
                      ? 'bg-brand-bronze shadow-md text-black font-semibold'
                      : 'text-white/60 hover:text-white cursor-pointer'
                  }`}
                >
                  Almofada/Arte
                </button>
              </div>

              {/* Color list options related to active tab */}
              <div className="mb-8 p-4 bg-[#1C1C1C] border border-white/5 rounded-2xl">
                <span className="text-[9px] uppercase tracking-wider font-semibold text-white/45 block mb-3">
                  Cores sugeridas do tema {activeStyle.name}:
                </span>
                <div className="flex flex-wrap gap-4 items-center justify-start">
                  
                  {/* Render the selected theme colors chips */}
                  {Object.entries(activeStyle.colors)
                    .filter(([key]) => ['primary', 'secondary', 'accent', 'background', 'textColor'].includes(key))
                    .map(([colorRole, hexValue]) => {
                      const isSelected = 
                        activeTab === 'paredes' ? wallColor === hexValue :
                        activeTab === 'moveis' ? sofaColor === hexValue :
                        (cushionColor === hexValue || artFrameColor === hexValue);

                      return (
                        <button
                          key={colorRole}
                          style={{ backgroundColor: hexValue as string }}
                          onClick={() => {
                            if (activeTab === 'paredes') setWallColor(hexValue as string);
                            else if (activeTab === 'moveis') setSofaColor(hexValue as string);
                            else {
                              setCushionColor(hexValue as string);
                              setArtFrameColor(hexValue as string);
                            }
                          }}
                          className={`w-10 h-10 rounded-full border-2 transform hover:scale-110 active:scale-95 shadow transition-all flex items-center justify-center cursor-pointer ${
                            isSelected ? 'border-white scale-105 ring-2 ring-brand-bronze' : 'border-transparent'
                          }`}
                          title={`Papel: ${colorRole} (${hexValue})`}
                        >
                          {isSelected && <span className="text-white drop-shadow font-serif text-[11px] font-bold">✓</span>}
                        </button>
                      );
                    })}
                </div>
              </div>
            </div>

            {/* Customizer Output specifications banner footer in panel */}
            <div className="border-t border-white/10 pt-6 mt-auto">
              <div className="flex items-center gap-3 bg-[#1A1A1A] p-4 rounded-xl border border-white/10">
                <Layout size={18} className="text-brand-bronze" />
                <div>
                  <span className="text-[10px] text-white/70 uppercase tracking-widest font-semibold block">
                    Gostou deste arranjo de cores?
                  </span>
                  <p className="text-[11px] text-white/80 leading-normal mt-0.5 font-light">
                    Fale com nosso designer na hora da consultoria para aplicar esta proporção de cores no seu cômodo original!
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
