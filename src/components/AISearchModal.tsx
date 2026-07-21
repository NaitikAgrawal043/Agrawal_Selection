import React, { useState } from 'react';
import type { Product } from '../types';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';
import { formatCurrency } from '../utils/helpers';

interface AISearchProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onQuickView: (product: Product) => void;
}

export const AISearchModal: React.FC<AISearchProps> = ({
  isOpen,
  onClose,
  products,
  onQuickView
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const filtered = query.trim() === ''
    ? []
    : products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.subcategory.toLowerCase().includes(query.toLowerCase()) ||
        p.fabric.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );

  const quickPrompts = [
    'Bridal Lehenga',
    'Mens Sherwani',
    'Louis Tuxedo Suit',
    'Silk Saree',
    'Kids Kurta Set',
    'Cotton Kurti',
    'Pashmina Shawl'
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-fadeIn">
      <div className="glass-card max-w-3xl w-full rounded-3xl border border-[#D4AF37]/50 shadow-2xl p-6 space-y-6 text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-[#D4AF37]">
            <Sparkles className="w-5 h-5 animate-spin-slow" />
            <h3 className="font-playfair text-xl font-bold">AI Smart Fashion Search</h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-[#D4AF37]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type e.g. 'Red Velvet Lehenga', 'Silk Saree', 'Groom Suit'..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 border border-[#D4AF37]/40 text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] font-poppins text-base"
          />
        </div>

        {/* Quick Tag Recommendations */}
        <div className="space-y-2">
          <span className="text-[11px] font-montserrat font-bold uppercase tracking-wider text-gray-400">Popular Searches:</span>
          <div className="flex flex-wrap gap-2">
            {quickPrompts.map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="px-3 py-1 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-black transition text-xs font-montserrat"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto space-y-3 pr-2">
          {query.trim() !== '' && filtered.length === 0 && (
            <p className="text-center text-sm text-gray-400 py-8">
              No matching items found for "{query}". Try searching "Sherwani", "Saree", or "Lehenga".
            </p>
          )}

          {filtered.map((product) => (
            <div
              key={product.id}
              className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 flex items-center justify-between transition cursor-pointer group"
              onClick={() => {
                onClose();
                onQuickView(product);
              }}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-14 object-cover rounded-xl"
                />
                <div>
                  <span className="text-[10px] font-montserrat uppercase text-[#D4AF37]">{product.category} • {product.fabric}</span>
                  <h4 className="font-playfair text-sm font-bold text-white group-hover:text-[#D4AF37] transition">
                    {product.name}
                  </h4>
                  <div className="flex items-center space-x-2 text-xs font-montserrat font-bold text-[#D4AF37]">
                    <span>{formatCurrency(product.price)}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  className="p-2 rounded-xl bg-[#D4AF37] text-black text-xs font-montserrat font-bold uppercase flex items-center space-x-1"
                >
                  <span>View</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
