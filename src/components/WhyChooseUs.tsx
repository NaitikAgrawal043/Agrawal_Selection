import React from 'react';
import { Award, Tag, Sparkles, HeartHandshake, Calendar, Shirt, Sun, Smile, Layers, IndianRupee } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: 'Premium Quality',
      desc: 'Handpicked fabrics, authentic silk, and heavy threadwork crafted for durability and luxury feel.'
    },
    {
      icon: IndianRupee,
      title: 'Affordable Pricing',
      desc: 'National brand designs without the heavy markup. Premium fashion accessible to every family.'
    },
    {
      icon: Sparkles,
      title: 'Latest Fashion Trends',
      desc: 'Regular fresh stocks matching current trends seen in Zudio, Zara, and Manyavar.'
    },
    {
      icon: HeartHandshake,
      title: 'Trusted by Families',
      desc: 'Over two decades of smiles, serving Katra Bazar and surrounding Jhansi districts.'
    },
    {
      icon: Calendar,
      title: 'Festival Collections',
      desc: 'Special curated ethnicwear drops for Diwali, Eid, Karwa Chauth, Rakhi, and Holi.'
    },
    {
      icon: Shirt,
      title: 'Bridal & Wedding Wear',
      desc: 'Royal Sherwanis, Italian Suit Tuxedos, and Heavy Velvet Lehengas for magical weddings.'
    },
    {
      icon: Sun,
      title: 'Daily & Casual Wear',
      desc: 'Soft cotton kurtis, breathable shirts, kids daily staples, and comfortable denim.'
    },
    {
      icon: Smile,
      title: 'Exemplary Service',
      desc: 'Warm hospitality, personal shopping assistance, tea/coffee service, and store trial rooms.'
    },
    {
      icon: Layers,
      title: 'Vast Collection Variety',
      desc: 'Thousands of ready-made garments and unstitched fabrics under a single spacious roof.'
    },
    {
      icon: Tag,
      title: 'Best Value Guaranteed',
      desc: 'Seasonal offer discounts, instant festival vouchers, and transparent pricing on all items.'
    }
  ];

  return (
    <section className="py-24 relative bg-white dark:bg-[#111111] border-b-2 border-[#E5E0D8] dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#AA7C11] dark:text-[#D4AF37] font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30">
            Why Choose Us
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl font-extrabold text-[#1A1A1A] dark:text-white">
            10 Reasons Katra Bazar Shoppers Prefer Us
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#AA7C11] via-[#D4AF37] to-[#AA7C11] mx-auto rounded-full"></div>
          <p className="text-[#5F6368] dark:text-gray-300 text-sm sm:text-base font-light font-poppins">
            Everything you need for a comfortable, trustworthy, and memorable shopping experience.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="luxury-card p-6 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F2EE] dark:bg-gray-800 flex items-center justify-center text-[#AA7C11] dark:text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-montserrat font-bold text-sm text-[#1A1A1A] dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5F6368] dark:text-gray-400 leading-relaxed font-poppins">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E5E0D8] dark:border-gray-800 text-[10px] text-[#AA7C11] dark:text-[#D4AF37] font-montserrat uppercase font-bold tracking-wider">
                  Reason #0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
