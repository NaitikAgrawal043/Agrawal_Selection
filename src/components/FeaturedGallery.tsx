import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/products';
import { Camera, Eye, X } from 'lucide-react';
import type { GalleryItem } from '../types';

export const FeaturedGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Store Front', 'Interior', 'Men & Fabrics', 'Bridal & Sarees', 'Kids & Uniforms'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="gallery" className="py-24 relative bg-white dark:bg-[#111111] border-b-2 border-[#E5E0D8] dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 text-[#AA7C11] dark:text-[#D4AF37] font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30">
            <Camera className="w-4 h-4 text-[#D4AF37]" />
            <span>Visual Store Experience</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-5xl font-extrabold text-[#1A1A1A] dark:text-white">
            Katra Bazar Store & Apparel Gallery
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#AA7C11] via-[#D4AF37] to-[#AA7C11] mx-auto rounded-full"></div>
          <p className="text-[#5F6368] dark:text-gray-300 text-sm sm:text-base font-light font-poppins">
            Take a high-definition glance inside our Katra Bazar showroom and featured bridal couture.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-montserrat text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#1A1A1A] dark:bg-[#D4AF37] text-[#D4AF37] dark:text-black shadow-md'
                  : 'bg-[#F5F2EE] dark:bg-gray-800 text-[#1A1A1A] dark:text-gray-300 hover:bg-[#D4AF37] hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="luxury-card overflow-hidden group cursor-pointer relative h-80 flex flex-col justify-end p-6 border-2 border-[#E5E0D8] dark:border-gray-800"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="relative z-10 space-y-1 text-white">
                <span className="text-[10px] font-montserrat font-bold uppercase tracking-widest text-[#D4AF37]">
                  {item.category}
                </span>
                <h3 className="font-playfair text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 font-poppins font-light line-clamp-2">
                  {item.caption}
                </p>
                <div className="pt-2 flex items-center space-x-1.5 text-[11px] text-[#D4AF37] font-montserrat font-bold uppercase tracking-wider">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to Expand Lightbox</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeLightbox && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
            <div className="relative max-w-4xl w-full bg-white dark:bg-[#141414] rounded-3xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl">
              <button
                onClick={() => setActiveLightbox(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#D4AF37] hover:text-black transition"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-8 h-96 md:h-[500px] bg-black">
                  <img
                    src={activeLightbox.image}
                    alt={activeLightbox.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="md:col-span-4 p-8 flex flex-col justify-between space-y-4 text-[#1A1A1A] dark:text-white">
                  <div className="space-y-3">
                    <span className="text-xs font-montserrat font-bold text-[#AA7C11] dark:text-[#D4AF37] uppercase tracking-widest">
                      {activeLightbox.category}
                    </span>
                    <h3 className="font-playfair text-2xl font-bold">
                      {activeLightbox.title}
                    </h3>
                    <p className="text-xs text-[#5F6368] dark:text-gray-300 font-poppins leading-relaxed">
                      {activeLightbox.caption}
                    </p>
                  </div>

                  <a
                    href="#location"
                    onClick={() => setActiveLightbox(null)}
                    className="w-full text-center py-3.5 rounded-full bg-[#1A1A1A] dark:bg-[#D4AF37] text-[#D4AF37] dark:text-black font-montserrat font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#D4AF37] hover:text-black transition"
                  >
                    Visit Store in Katra Bazar
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
