import React, { useState } from 'react';
import type { Product } from '../types';
import { formatCurrency, STORE_PHONE } from '../utils/helpers';
import { X, Star, Phone, CheckCircle2, Heart } from 'lucide-react';

interface QuickViewProps {
  product: Product | null;
  onClose: () => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const QuickViewModal: React.FC<QuickViewProps> = ({
  product,
  onClose,
  onToggleWishlist,
  isWishlisted
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn overflow-y-auto">
      <div className="glass-card max-w-4xl w-full rounded-3xl border border-[#D4AF37]/40 shadow-2xl overflow-hidden relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#D4AF37] hover:text-black transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Product Image */}
          <div className="relative h-96 md:h-full min-h-[380px] bg-gray-900">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.tag && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#111111] text-[#D4AF37] border border-[#D4AF37]/50 text-xs font-montserrat font-bold uppercase tracking-wider">
                {product.tag}
              </span>
            )}
          </div>

          {/* Details Body */}
          <div className="p-6 md:p-8 space-y-6 flex flex-col justify-between text-gray-900 dark:text-white">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-montserrat uppercase">
                <span>{product.category} • {product.subcategory}</span>
                <div className="flex items-center space-x-1 text-amber-500 font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{product.rating}</span>
                </div>
              </div>

              <h2 className="font-playfair text-2xl md:text-3xl font-bold">
                {product.name}
              </h2>

              <div className="flex items-baseline space-x-3">
                <span className="font-montserrat text-2xl font-bold text-[#D4AF37]">
                  {formatCurrency(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {formatCurrency(product.originalPrice)}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-poppins leading-relaxed">
                {product.description}
              </p>

              {/* Sizes Selection */}
              {product.sizes.length > 0 && (
                <div className="space-y-2">
                  <label className="text-xs font-montserrat font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                    Select Size: <span className="text-[#D4AF37]">{selectedSize}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-montserrat font-semibold transition ${
                          selectedSize === s
                            ? 'bg-[#D4AF37] text-black font-bold'
                            : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:border-[#D4AF37]'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Features List */}
              <div className="space-y-1.5 pt-2">
                <h4 className="text-xs font-montserrat font-bold uppercase text-gray-700 dark:text-gray-300">Highlights</h4>
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-gray-200/50 dark:border-gray-800/50 space-y-3">
              <div className="flex items-center space-x-3">
                <a
                  href={`tel:${STORE_PHONE}`}
                  className="flex-1 py-3.5 rounded-2xl bg-[#111111] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black font-montserrat font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Store (+91 78807 03740)</span>
                </a>

                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`p-3.5 rounded-2xl border transition ${
                    isWishlisted ? 'bg-red-600 text-white border-red-600' : 'border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
                  }`}
                >
                  <Heart className="w-4 h-4 fill-current" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
