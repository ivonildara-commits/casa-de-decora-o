/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, Compass, ArrowRight } from 'lucide-react';
import { GALLERY_ROOMS } from '../data';

export default function RoomGallery() {
  const [filter, setFilter] = useState('Todos');
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const categories = ['Todos', 'Salas', 'Quartos', 'Jantar', 'Escritórios'];

  const filteredRooms = filter === 'Todos'
    ? GALLERY_ROOMS
    : GALLERY_ROOMS.filter(room => room.category === filter);

  return (
    <section id="inspire" className="py-24 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" id="gallery-header">
          <div>
            <span className="text-[10px] tracking-[0.25em] font-semibold text-brand-bronze uppercase">
              Inspiração & Portfólio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-3">
              Ambientes Projetados Aura
            </h2>
            <p className="text-sm text-white/70 leading-relaxed font-light mt-2 max-w-xl">
              Navegue pelos espaços físicos residenciais e corporativos reais que ganharam vida através de nossa equipe.
            </p>
          </div>

          {/* Filter Categories buttons */}
          <div className="flex flex-wrap gap-2.5" id="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  filter === cat
                    ? 'bg-brand-bronze text-black font-bold shadow-md'
                    : 'bg-[#141414] hover:bg-[#1A1A1A] text-white/70 border border-white/5 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry/Grid Photos layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredRooms.map((room) => (
              <motion.div
                layout
                key={room.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col bg-[#141414] border border-white/5 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setZoomedImage(room.image)}
              >
                {/* Photo frame */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay shadow info */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white text-brand-charcoal flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                  <span className="absolute bottom-3 left-3 bg-black/85 text-brand-bronze text-[9px] font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-md shadow border border-white/5">
                    {room.category}
                  </span>
                </div>

                {/* Info summary */}
                <div className="p-6">
                  <h3 className="font-serif text-base font-bold text-white group-hover:text-brand-bronze transition-colors mb-2">
                    {room.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed font-light line-clamp-2">
                    {room.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive light-box zoomed view */}
        <AnimatePresence>
          {zoomedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              id="gallery-zoom-modal"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setZoomedImage(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl z-10 shadow-2xl border border-white/10"
              >
                <img
                  src={zoomedImage}
                  alt="Zoomed Design"
                  className="w-full h-full object-contain max-h-[80vh]"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setZoomedImage(null)}
                  className="absolute top-4 right-4 bg-brand-bronze hover:bg-brand-terracotta text-black font-bold text-xs py-2 px-4 rounded-full transition-colors cursor-pointer"
                >
                  Fechar
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
