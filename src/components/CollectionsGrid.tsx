import React, { useState } from 'react';
import type { Product, CategoryType } from '../types';
import { formatCurrency, getWhatsAppLink } from '../utils/helpers';
import { Eye, MessageSquare, Heart, Star, Sparkles, Filter } from 'lucide-react';

interface CollectionsGridProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
}

export const CollectionsGrid: React.FC<CollectionsGridProps> = ({
  products,
  onQuickView,
  onToggleWishlist,
  wishlistIds
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'All'>('All');

  const categories: (CategoryType | 'All')[] = [
    'All',
    'Men',
    'Women',
    'Kids',
    'Bridal',
    'Ethnic Wear',
    'Western Wear',
    'Casual Wear',
    'Formal Wear',
    'Wedding Collection',
    'Party Wear',
    'Winter Collection',
    'Accessories'
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory || p.subcategory === selectedCategory);

  return (
    <section id="collections" className="py-20 relative bg-[#FAF8F5] dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 text-[#D4AF37] font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Latest Catalog & Styles</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            Curated Fashion Collections
          </h2>
          <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-light font-poppins">
            Handcrafted sarees, grooms sherwanis, executive tuxedos, and kids festive wear available at Katra Bazar, Gursarai.
          </p>
        </div>

        {/* Category Filters Pill Scroll */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-12 scrollbar-none justify-start lg:justify-center">
          <div className="flex items-center space-x-2 px-2">
            <Filter className="w-4 h-4 text-[#D4AF37] hidden md:inline" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-montserrat font-bold uppercase tracking-wider transition whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black shadow-lg shadow-[#D4AF37]/30 scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] border border-gray-200 dark:border-gray-700 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);
            const discountPercent = product.originalPrice
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
              : 0;

            return (
              <div
                key={product.id}
                className="bg-white dark:bg-[#141414] rounded-2xl overflow-hidden border border-[#D4AF37]/25 hover:border-[#D4AF37] transition duration-500 hover:shadow-2xl gold-glow-hover flex flex-col justify-between group shadow-md"
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                    {product.tag && (
                      <span className="px-3 py-1 rounded-full bg-[#111111]/90 text-[#D4AF37] border border-[#D4AF37]/40 text-[10px] font-montserrat font-bold uppercase tracking-wider shadow-md backdrop-blur-md">
                        {product.tag}
                      </span>
                    )}
                    {discountPercent > 0 && (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-montserrat font-bold uppercase tracking-wider shadow-md">
                        {discountPercent}% OFF
                      </span>
                    )}
                  </div>

                  {/* Wishlist Heart Button */}
                  <button
                    onClick={() => onToggleWishlist(product)}
                    aria-label="Wishlist Item"
                    className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition shadow-md ${
                      isWishlisted
                        ? 'bg-red-600 text-white'
                        : 'bg-black/50 text-white hover:bg-[#D4AF37] hover:text-black'
                    }`}
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </button>

                  {/* Quick View Button on Hover */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button
                      onClick={() => onQuickView(product)}
                      className="w-full py-2.5 rounded-xl bg-white dark:bg-black text-gray-900 dark:text-white font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-[#D4AF37] hover:text-black transition flex items-center justify-center space-x-1.5 shadow-lg"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 space-y-3 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-montserrat uppercase mb-1">
                      <span>{product.category} • {product.fabric}</span>
                      <div className="flex items-center space-x-1 text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{product.rating}</span>
                        <span className="text-gray-400 font-normal">({product.reviewsCount})</span>
                      </div>
                    </div>

                    <h3 className="font-playfair text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#D4AF37] transition line-clamp-2">
                      {product.name}
                    </h3>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-2 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-lg font-bold font-montserrat text-[#D4AF37]">
                          {formatCurrency(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-400 line-through">
                            {formatCurrency(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Store Tailoring Available</span>
                    </div>

                    {/* WhatsApp Action */}
                    <a
                      href={getWhatsAppLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-montserrat font-bold text-xs uppercase tracking-wider transition flex items-center space-x-1 shadow-md"
                      title="Ask Availability on WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-2xl max-w-md mx-auto shadow-md">
            <p className="text-gray-600 dark:text-gray-300">No products found in this category. Visit store for custom orders!</p>
          </div>
        )}

      </div>
    </section>
  );
};
