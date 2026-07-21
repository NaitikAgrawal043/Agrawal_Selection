import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Phone, Sparkles, Award, Star } from 'lucide-react';
import { STORE_PHONE } from '../utils/helpers';

export const Hero: React.FC = () => {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1920&q=80',
      title: 'Style That Defines You.',
      sub: 'Premium Fashion for Every Generation in Gursarai & Jhansi.',
      tag: 'New Festive & Bridal Collection'
    },
    {
      image: '/store/kids_display.png',
      title: 'Complete School Uniforms & Dresses.',
      sub: 'Durable fabrics, perfect fitting & affordable pricing for all local schools.',
      tag: 'Admission Season Special'
    },
    {
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=80',
      title: 'Bespoke Wedding Lehengas.',
      sub: 'Celebrate your special day with Katra Bazar’s most trusted bridal destination.',
      tag: 'Grand Wedding Specials'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-white dark:bg-[#0c0c0c] transition-colors duration-300">
      {/* Carousel Background Images */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ transition: 'opacity 1s ease-in-out, transform 8s ease-out' }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover filter brightness-[0.65]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        </div>
      ))}

      {/* Floating Animated Light Cards */}
      <div className="hidden lg:block absolute top-36 left-12 bg-white/95 dark:bg-[#141414]/95 backdrop-blur-md p-4 rounded-2xl border border-[#E5E5E5] dark:border-gray-800 shadow-xl animate-float max-w-xs z-20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#AA7C11] dark:text-[#D4AF37]">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold font-montserrat text-[#1A1A1A] dark:text-white uppercase tracking-wider">Trusted Family Store</h4>
            <p className="text-[11px] text-[#5F6368] dark:text-gray-400">Katra Bazar, Gursarai</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-24 right-12 bg-white/95 dark:bg-[#141414]/95 backdrop-blur-md p-4 rounded-2xl border border-[#E5E5E5] dark:border-gray-800 shadow-xl z-20">
        <div className="flex items-center space-x-3">
          <div className="flex -space-x-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
            ))}
          </div>
          <span className="text-xs font-bold text-[#1A1A1A] dark:text-white">4.9 / 5 Google Reviews</span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Tag Pill */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/40 text-white text-xs font-montserrat font-bold uppercase tracking-widest backdrop-blur-md animate-pulse shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{slides[currentSlide].tag}</span>
          </div>

          {/* Headline */}
          <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight text-white drop-shadow-lg">
            {slides[currentSlide].title}
          </h1>

          {/* Subheading */}
          <p className="font-poppins text-lg sm:text-2xl text-gray-200 font-light max-w-2xl mx-auto drop-shadow-md">
            {slides[currentSlide].sub}
          </p>

          {/* Action CTAs */}
          <div className="pt-6 flex flex-wrap justify-center items-center gap-4">
            {/* Primary Button */}
            <a
              href="#uniforms"
              className="px-8 py-4 rounded-full bg-[#D4AF37] text-black hover:bg-white font-montserrat font-bold text-xs uppercase tracking-wider transition flex items-center space-x-2 shadow-2xl hover:scale-105"
            >
              <span>Explore School Uniforms</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Visit Store Button */}
            <a
              href="#location"
              className="px-8 py-4 rounded-full bg-white/15 hover:bg-white/30 border border-white/40 backdrop-blur-md text-white font-montserrat font-bold text-xs uppercase tracking-wider transition flex items-center space-x-2 shadow-md"
            >
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>Visit Store (Katra Bazar)</span>
            </a>

            {/* Direct Call */}
            <a
              href={`tel:${STORE_PHONE}`}
              className="px-6 py-4 rounded-full bg-black/70 hover:bg-black border border-[#D4AF37]/60 text-[#D4AF37] hover:text-white font-montserrat font-bold text-xs transition flex items-center space-x-2 shadow-lg"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call Store (+91 78807 03740)</span>
            </a>
          </div>

          {/* Slide Indicator Dots */}
          <div className="pt-10 flex justify-center items-center space-x-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-500 ${
                  idx === currentSlide ? 'w-10 bg-[#D4AF37]' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
