import React from 'react';
import { OCCASIONS } from '../data/products';
import { Sparkles, ArrowRight } from 'lucide-react';

export const ShopByOccasion: React.FC = () => {
  return (
    <section id="occasions" className="py-24 relative bg-[#FAF8F5] dark:bg-[#0c0c0c] border-b-2 border-[#E5E0D8] dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-[#AA7C11] dark:text-[#D4AF37] font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Tailored for Every Event</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-5xl font-extrabold text-[#1A1A1A] dark:text-white">
            Shop By Occasion
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#AA7C11] via-[#D4AF37] to-[#AA7C11] mx-auto rounded-full"></div>
          <p className="text-[#5F6368] dark:text-gray-300 text-sm sm:text-base font-light font-poppins">
            Whether it’s a wedding, a festive pooja, an executive meeting, or casual daily wear.
          </p>
        </div>

        {/* Occasion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {OCCASIONS.map((item) => (
            <div
              key={item.id}
              className="relative h-96 rounded-3xl overflow-hidden group border-2 border-[#E5E0D8] dark:border-gray-800 hover:border-[#D4AF37] transition duration-500 shadow-lg gold-glow-hover flex flex-col justify-end p-6 bg-white dark:bg-[#141414]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700 filter brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="relative z-10 space-y-2 text-white">
                <span className="text-[11px] font-montserrat font-bold uppercase tracking-widest text-[#D4AF37]">
                  {item.subtitle}
                </span>
                <h3 className="font-playfair text-2xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-200 font-poppins font-light line-clamp-2">
                  {item.tagline}
                </p>
                
                <a
                  href="#gallery"
                  className="pt-2 inline-flex items-center space-x-2 text-xs font-montserrat font-bold uppercase tracking-wider text-[#D4AF37] group-hover:text-white transition"
                >
                  <span>Explore Outfits</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
