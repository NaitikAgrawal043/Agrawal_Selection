import React from 'react';
import type { Review } from '../types';
import { Star, ShieldCheck, Sparkles, Quote } from 'lucide-react';

interface TestimonialsProps {
  reviews: Review[];
}

export const TestimonialsSection: React.FC<TestimonialsProps> = ({ reviews }) => {
  return (
    <section id="reviews" className="py-20 relative bg-[#F8F5EF] dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-[#D4AF37] font-montserrat font-semibold text-xs uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Voice of Our Beloved Customers</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Trusted Across Jhansi & Bundelkhand
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-light">
            Real stories from local families in Katra Bazar, Gursarai who make us their first choice.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card p-8 rounded-3xl border border-[#D4AF37]/30 hover:border-[#D4AF37] transition duration-500 shadow-xl gold-glow-hover flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition" />

              <div className="space-y-4 relative z-10">
                {/* Star Rating */}
                <div className="flex items-center space-x-1 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#D4AF37]" />
                  ))}
                  <span className="text-xs font-montserrat font-bold text-gray-800 dark:text-gray-200 ml-2">
                    5.0 Google Review
                  </span>
                </div>

                {/* Comment */}
                <p className="font-poppins text-gray-700 dark:text-gray-300 text-sm sm:text-base italic leading-relaxed">
                  "{rev.comment}"
                </p>

                {rev.purchasedItem && (
                  <div className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-montserrat font-semibold">
                    Purchased: {rev.purchasedItem}
                  </div>
                )}
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-gray-200/50 dark:border-gray-800/50 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] text-black font-playfair font-bold text-lg flex items-center justify-center shadow-md">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-sm text-gray-900 dark:text-white flex items-center space-x-1">
                      <span>{rev.author}</span>
                      {rev.verified && (
                        <span title="Verified Customer">
                          <ShieldCheck className="w-4 h-4 text-emerald-500 inline" />
                        </span>
                      )}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{rev.location} • {rev.date}</p>
                  </div>
                </div>

                <div className="text-[10px] font-montserrat uppercase font-bold text-emerald-600 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Verified Buyer
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
