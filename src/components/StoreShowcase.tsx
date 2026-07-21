import React, { useState } from 'react';
import { Compass, RotateCw, CheckCircle, Sparkles } from 'lucide-react';

export const StoreShowcase: React.FC = () => {
  const [rotationAngle, setRotationAngle] = useState(0);

  const rotateView = () => {
    setRotationAngle((prev) => (prev + 90) % 360);
  };

  const storeFeatures = [
    { title: 'Spacious Katra Bazar Showroom Floor', desc: 'Multi-counter family shopping layout for sarees, suitings & kidswear' },
    { title: 'Extensive Garment Racks & Stock', desc: 'Thousands of ready-made choices and unstitched fabrics under one roof' },
    { title: 'Dedicated Family Assistance', desc: 'Helpful staff guiding you to find the perfect sizes and styles' },
    { title: 'Transparent Fixed Pricing', desc: 'Honest, competitive and fair pricing for every budget' },
    { title: 'Central Katra Bazar Location', desc: 'Conveniently located in the primary shopping center of Gursarai' }
  ];

  return (
    <section className="py-24 relative bg-[#FAF8F5] dark:bg-[#0c0c0c] text-[#1A1A1A] dark:text-white border-b-2 border-[#E5E0D8] dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-[#AA7C11] dark:text-[#D4AF37] font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Interactive Store Experience</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1A1A1A] dark:text-white">
            Our Showroom at Katra Bazar
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#AA7C11] via-[#D4AF37] to-[#AA7C11] mx-auto rounded-full"></div>
          <p className="text-[#5F6368] dark:text-gray-300 text-sm sm:text-base font-light font-poppins">
            Take a virtual look inside Katra Bazar’s premier family clothing store.
          </p>
        </div>

        {/* 360 Interactive Viewer & Store Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* 360 View Simulator */}
          <div className="lg:col-span-7 relative">
            <div className="relative h-[420px] rounded-3xl overflow-hidden border-2 border-[#E5E0D8] dark:border-gray-800 shadow-2xl group">
              <img
                src="/store/store_interior.png"
                alt="360 Store View Katra Bazar"
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
                style={{ transform: `scale(1.1) rotate(${rotationAngle * 0.05}deg) translateX(${-rotationAngle * 0.2}px)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* 360 Floating Control Pill */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full flex items-center space-x-2 bg-black/70 border border-[#D4AF37]/50 text-xs font-montserrat font-bold uppercase text-[#D4AF37]">
                <Compass className="w-4 h-4 animate-spin-slow" />
                <span>360° Store View Active</span>
              </div>

              {/* Interactive Rotate Button */}
              <button
                onClick={rotateView}
                className="absolute bottom-6 right-6 px-6 py-3 rounded-full bg-[#D4AF37] text-black font-montserrat font-bold text-xs uppercase tracking-wider shadow-2xl hover:scale-105 transition flex items-center space-x-2"
              >
                <RotateCw className="w-4 h-4" />
                <span>Rotate View Angle</span>
              </button>
            </div>
            
            <p className="text-center text-xs text-[#5F6368] dark:text-gray-400 mt-3 font-montserrat uppercase tracking-wider">
              💡 Click "Rotate View Angle" to preview different sections of Katra Bazar showroom.
            </p>
          </div>

          {/* Right Side Store Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-montserrat font-bold text-[#AA7C11] dark:text-[#D4AF37] uppercase tracking-widest">
                Family Shopping Experience
              </span>
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#1A1A1A] dark:text-white">
                Designed for Comfort, Quality & Value
              </h3>
              <p className="text-[#5F6368] dark:text-gray-300 text-sm leading-relaxed font-poppins">
                Shopping at Akshra Fashion & Agrawal Selection is a warm family tradition built over two decades in Katra Bazar.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {storeFeatures.map((feat, idx) => (
                <div key={idx} className="luxury-card p-4 flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#AA7C11] dark:text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-montserrat font-bold text-sm text-[#1A1A1A] dark:text-white">{feat.title}</h4>
                    <p className="text-xs text-[#5F6368] dark:text-gray-400 font-poppins">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
