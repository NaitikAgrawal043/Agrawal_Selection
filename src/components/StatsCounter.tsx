import React from 'react';
import { Users, Award, Shirt, Star } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  const stats = [
    { icon: Users, count: '25,000+', label: 'Happy Customers', desc: 'Families served across Bundelkhand' },
    { icon: Award, count: '15+', label: 'Years of Trust', desc: 'Heritage in Katra Bazar, Gursarai' },
    { icon: Shirt, count: '5,000+', label: 'Latest Styles', desc: 'Men, Women, Kids & Bridal' },
    { icon: Star, count: '100%', label: 'Quality Assured', desc: 'Pure fabrics & perfect fitting' }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#111111] via-[#1a1a1a] to-[#111111] text-white border-y border-[#D4AF37]/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="text-center space-y-3 group">
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 mx-auto flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-black transition duration-300 shadow-xl">
                  <IconComponent className="w-7 h-7" />
                </div>
                <div className="font-playfair text-3xl sm:text-5xl font-bold gradient-gold-text">
                  {item.count}
                </div>
                <h3 className="font-montserrat font-bold text-sm sm:text-base text-white">
                  {item.label}
                </h3>
                <p className="text-xs text-gray-400 font-poppins max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
