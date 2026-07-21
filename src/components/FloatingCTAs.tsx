import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { STORE_PHONE } from '../utils/helpers';

export const FloatingCTAs: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar at top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#111111]/20 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#D4AF37] via-amber-400 to-[#AA7C11] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Buttons Stack at Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 items-end">
        
        {/* Call Button */}
        <a
          href={`tel:${STORE_PHONE}`}
          aria-label="Call Katra Bazar Store"
          className="p-3.5 rounded-full bg-[#1A1A1A] text-[#D4AF37] border border-[#D4AF37]/50 shadow-2xl hover:scale-110 transition gold-glow group relative"
          title="Call Store Directly"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-14 top-2 px-3 py-1 rounded-lg bg-black text-[#D4AF37] text-xs font-montserrat font-bold uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition shadow-lg">
            Call Store
          </span>
        </a>

        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-[#D4AF37]/40 shadow-xl hover:bg-[#D4AF37] hover:text-black transition"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

      </div>
    </>
  );
};
