/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Eye, X, MessageSquare, Info, ShieldAlert, BadgeCheck } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, CATEGORIES } from '../data';

export default function CuratedCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [inquiryName, setInquiryName] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const filteredProducts = activeCategory === 'todos'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim()) return;
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setInquiryName('');
      setSelectedProduct(null);
    }, 2500);
  };

  return (
    <section id="colecoes" className="py-24 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" id="catalog-header">
          <div>
            <span className="text-[10px] tracking-[0.25em] font-semibold text-brand-bronze uppercase">
              Curadoria Exclusiva
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-3">
              Coleção Elegância Silenciosa
            </h2>
            <p className="text-sm text-white/70 leading-relaxed font-light mt-2 max-w-xl">
              Peças autorais e acessórios cuidadosamente curados por nossos designers de interiores para criar pontos focais marcantes no seu ambiente.
            </p>
          </div>

          {/* Tab Categories Filters */}
          <div className="flex flex-wrap gap-2" id="catalog-category-tabs">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4.5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === category.id
                    ? 'bg-brand-bronze text-black font-semibold shadow-md'
                    : 'bg-[#141414] text-white/70 hover:bg-[#1C1C1C] hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          id="product-cards-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col bg-[#141414] border border-white/5 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-brand-bronze/40 transition-all duration-300"
              >
                {/* Image Wrap */}
                <div className="relative aspect-square overflow-hidden bg-[#1A1A1A]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover visual controls */}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => {
                        setInquirySubmitted(false);
                        setSelectedProduct(product);
                      }}
                      className="flex items-center gap-2 bg-brand-bronze text-black font-semibold text-xs py-2.5 px-5 rounded-full shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-terracotta cursor-pointer"
                    >
                      <Eye size={14} />
                      <span>Ver Detalhes</span>
                    </button>
                  </div>
                </div>

                {/* product specifications card */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[9px] uppercase tracking-wider font-semibold text-brand-bronze">
                      {product.category === 'mobiliario' ? 'Mobiliário' : product.category === 'iluminacao' ? 'Iluminação' : product.category === 'acessorios' ? 'Acessórios' : 'Arte & Quadros'}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-white/80">
                      <Star size={12} className="text-amber-500 fill-amber-500" />
                      <span>{product.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-base font-bold text-white mb-2 leading-snug group-hover:text-brand-bronze transition-colors min-h-[48px] line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-end justify-between mt-auto pt-4 border-t border-white/5">
                    <div className="flex flex-col">
                      <span className="text-[9px] tracking-wide text-white/40 uppercase">
                        À Vista ou Parcelado
                      </span>
                      <span className="font-mono text-base font-bold text-white mt-0.5">
                        {formatPrice(product.price)}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="text-xs font-semibold text-brand-bronze hover:text-brand-terracotta transition-colors border-b border-transparent hover:border-brand-bronze pb-0.5 cursor-pointer"
                    >
                      Consultar
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Sheet (Modal Product specifications) */}
        <AnimatePresence>
          {selectedProduct && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
              id="product-modal-container"
            >
              {/* Back backdrop shadow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="fixed inset-0 bg-black/75 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative bg-[#141414] rounded-3xl shadow-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 overflow-hidden z-10 border border-white/10"
              >
                {/* Close Button top corner */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 z-20 bg-[#1C1C1C] text-white hover:bg-brand-bronze hover:text-black p-2 rounded-full shadow-md transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>

                {/* Left Side: Large Preview Illustration */}
                <div className="md:col-span-5 h-[300px] md:h-auto relative bg-[#1A1A1A]">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                </div>

                {/* Right Side: Informative Body */}
                <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                  <div>
                    {/* Category with stars */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] tracking-[0.15em] font-semibold text-brand-bronze uppercase">
                        {selectedProduct.category.toUpperCase()} • DESIGN EXCLUSIVO
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                        <Star size={13} className="text-amber-500 fill-amber-500" />
                        <span>{selectedProduct.rating.toFixed(1)} de 5.0</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                      {selectedProduct.name}
                    </h3>

                    <p className="font-mono text-xl font-bold text-brand-bronze mb-6">
                      {formatPrice(selectedProduct.price)}
                    </p>

                    <div className="space-y-4 mb-8">
                      <p className="text-sm text-white/80 font-light leading-relaxed">
                        {selectedProduct.description}
                      </p>

                      {/* Technical specifications */}
                      <div className="grid grid-cols-2 gap-4 text-xs font-medium border-t border-b border-white/10 py-4 mt-6">
                        <div className="flex items-start gap-2">
                           <Info size={14} className="text-brand-bronze mt-0.5" />
                          <div>
                            <span className="text-white/45 block font-light uppercase text-[9px] tracking-wider">
                              Dimensões
                            </span>
                            <span className="text-white">{selectedProduct.dimensions}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <BadgeCheck size={14} className="text-brand-bronze mt-0.5" />
                          <div>
                            <span className="text-white/45 block font-light uppercase text-[9px] tracking-wider">
                              Material
                            </span>
                            <span className="text-white">{selectedProduct.material}</span>
                          </div>
                        </div>
                      </div>

                      {/* Color Palette variants indication */}
                      <div>
                        <span className="text-white/45 text-[9px] font-semibold uppercase tracking-wider block mb-2">
                          Disponível em Paletas:
                        </span>
                        <div className="flex items-center gap-2">
                          {selectedProduct.colors.map((color, i) => (
                            <div 
                              key={i}
                              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center p-0.5 shadow-inner cursor-default"
                              title={`Opção de cor hex ${color}`}
                            >
                              <div className="w-full h-full rounded-full" style={{ backgroundColor: color }} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Booking Contact Form */}
                  <div className="bg-[#1A1A1A] border border-white/10 p-5 rounded-2xl">
                    <AnimatePresence mode="wait">
                      {inquirySubmitted ? (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-center py-4 flex flex-col items-center justify-center"
                        >
                          <div className="w-9 h-9 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 mb-2 border border-emerald-500/20">
                            ✓
                          </div>
                          <h4 className="text-sm font-semibold text-white">Solicitação enviada de imediato!</h4>
                          <p className="text-[11px] text-white/60 mt-1">
                            Um de nossos designers entrará em contato via WhatsApp.
                          </p>
                        </motion.div>
                      ) : (
                        <motion.form
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          onSubmit={handleInquirySubmit}
                          className="flex flex-col gap-3"
                        >
                          <div className="flex flex-col">
                            <label className="text-[9px] uppercase tracking-wider font-semibold text-brand-bronze mb-1.5">
                              Interessado nesta peça? Solicite informações de entrega e customizações:
                            </label>
                            <div className="flex gap-2">
                              <input
                                required
                                type="text"
                                placeholder="Seu Nome ou WhatsApp"
                                value={inquiryName}
                                onChange={(e) => setInquiryName(e.target.value)}
                                className="flex-grow bg-[#141414] border border-white/10 px-4 py-2.5 rounded-xl text-xs text-white focus:outline-none focus:border-brand-bronze"
                              />
                              <button
                                type="submit"
                                className="bg-brand-bronze hover:bg-brand-terracotta text-black text-xs font-bold px-5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                              >
                                <MessageSquare size={13} />
                                <span>Perguntar</span>
                              </button>
                            </div>
                          </div>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
