import React, { useState, useEffect } from 'react';
import { Tag, ArrowRight } from 'lucide-react';
import type { BannerOffer } from '../types';

interface FestivalProps {
  offers: BannerOffer[];
}

export const FestivalCountdown: React.FC<FestivalProps> = ({ offers }) => {
  const activeOffer = offers.find(o => o.active) || offers[0];

  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 18,
    minutes: 42,
    seconds: 10
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!activeOffer) return null;

  return (
    <section className="py-12 bg-gradient-to-r from-amber-950 via-neutral-900 to-black text-white relative border-y border-[#D4AF37]/30">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Offer Details */}
        <div className="space-y-3 max-w-2xl text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-montserrat font-bold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            <span>Limited Festival Offer ({activeOffer.discountBadge})</span>
          </div>

          <h3 className="font-playfair text-2xl sm:text-4xl font-bold">
            {activeOffer.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 font-poppins">
            {activeOffer.subtitle}
          </p>
        </div>

        {/* Countdown Timer Blocks */}
        <div className="flex items-center space-x-4">
          <div className="flex space-x-3 text-center">
            <div className="glass-card px-3 py-2 rounded-xl border border-[#D4AF37]/40 min-w-[60px]">
              <span className="font-playfair text-xl font-bold text-[#D4AF37]">{timeLeft.days}</span>
              <p className="text-[9px] font-montserrat uppercase text-gray-300">Days</p>
            </div>
            <div className="glass-card px-3 py-2 rounded-xl border border-[#D4AF37]/40 min-w-[60px]">
              <span className="font-playfair text-xl font-bold text-[#D4AF37]">{timeLeft.hours}</span>
              <p className="text-[9px] font-montserrat uppercase text-gray-300">Hours</p>
            </div>
            <div className="glass-card px-3 py-2 rounded-xl border border-[#D4AF37]/40 min-w-[60px]">
              <span className="font-playfair text-xl font-bold text-[#D4AF37]">{timeLeft.minutes}</span>
              <p className="text-[9px] font-montserrat uppercase text-gray-300">Mins</p>
            </div>
            <div className="glass-card px-3 py-2 rounded-xl border border-[#D4AF37]/40 min-w-[60px]">
              <span className="font-playfair text-xl font-bold text-[#D4AF37]">{timeLeft.seconds}</span>
              <p className="text-[9px] font-montserrat uppercase text-gray-300">Secs</p>
            </div>
          </div>

          <a
            href="#location"
            className="px-6 py-3.5 rounded-full bg-[#D4AF37] text-black font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-white transition flex items-center space-x-1.5 shadow-xl"
          >
            <span>{activeOffer.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
