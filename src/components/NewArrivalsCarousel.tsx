import React, { useState } from 'react';
import type { Product } from '../types';
import { formatCurrency, getWhatsAppLink } from '../utils/helpers';
import { Eye, MessageSquare, ChevronLeft, ChevronRight, Sparkles, Star } from 'lucide-react';

interface NewArrivalsProps {
  products: Product[];
  onQuickView: (product: Product) => void;
}

export const NewArrivalsCarousel: React.FC<NewArrivalsProps> = ({ products, onQuickView }) => {
  const newItems = products.filter(p => p.tag === 'New' || p.tag === 'Trending' || p.tag === 'Festive Special');
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? Math.max(0, newItems.length - 3) : prev - 1));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 3 >= newItems.length ? 0 : prev + 1));
  };

  const visibleItems = newItems.slice(startIndex, startIndex + 4);

  return (
    <section id="new-arrivals" className="py-20 relative bg-[#F8F5EF] dark:bg-[#0d0d0d]">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-[#D4AF37] font-montserrat font-semibold text-xs uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>Fresh Off The Loom</span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              New 2026 Arrivals
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37] rounded-full"></div>
          </div>

          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-3 rounded-full bg-white dark:bg-gray-800 border border-[#D4AF37]/30 text-gray-800 dark:text-white hover:bg-[#D4AF37] hover:text-black transition shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-3 rounded-full bg-white dark:bg-gray-800 border border-[#D4AF37]/30 text-gray-800 dark:text-white hover:bg-[#D4AF37] hover:text-black transition shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleItems.map((product) => (
            <div
              key={product.id}
              className="glass-card rounded-2xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] transition duration-500 hover:shadow-2xl gold-glow-hover flex flex-col justify-between group"
            >
              <div className="relative h-72 overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#D4AF37] text-black font-montserrat font-bold text-[10px] uppercase tracking-wider shadow-md">
                  {product.tag}
                </span>

                <button
                  onClick={() => onQuickView(product)}
                  className="absolute bottom-4 left-4 right-4 py-2 rounded-xl bg-black/80 text-white text-xs font-montserrat font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center space-x-1 hover:bg-[#D4AF37] hover:text-black"
                >
                  <Eye className="w-4 h-4" />
                  <span>Quick View</span>
                </button>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-gray-500 font-montserrat uppercase">
                  <span>{product.category}</span>
                  <div className="flex items-center space-x-1 text-amber-500 font-bold">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{product.rating}</span>
                  </div>
                </div>
                <h3 className="font-playfair text-base font-bold text-gray-900 dark:text-white line-clamp-1">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between pt-2 border-t border-gray-200/40 dark:border-gray-800/40">
                  <span className="font-montserrat font-bold text-base text-[#D4AF37]">
                    {formatCurrency(product.price)}
                  </span>
                  <a
                    href={getWhatsAppLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
