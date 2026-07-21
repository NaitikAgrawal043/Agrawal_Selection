import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  UserCheck
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const owners = [
    {
      name: 'Arvind Agrawal',
      alias: '(Dimpal Agrawal)',
      initials: 'AA'
    },
    {
      name: 'Dheeraj Agrawal',
      initials: 'DA'
    },
    {
      name: 'Neeraj Agrawal',
      initials: 'NA'
    }
  ];

  const timelineEvents = [
    {
      year: '2004',
      title: 'Agrawal Selection Established',
      store: 'Agrawal Selection',
      desc: 'Founded in Katra Bazar, Gursarai with a commitment to providing quality clothing, fair pricing, and honest service to families across the region.'
    },
    {
      year: '2020',
      title: 'Akshra Fashion Launched',
      store: 'Akshra Fashion',
      desc: 'Launched to introduce a modern, stylish, and trend-focused shopping experience featuring bridal trousseaus and modern festive wear.'
    },
    {
      year: '2026',
      title: 'Digital Showroom & Local Delivery',
      store: 'Akshra & Agrawal Selection',
      desc: 'Bringing our Katra Bazar collections online for instant catalog views, photo previews, and personalized fitting services.'
    }
  ];

  const coreValues = [
    { title: 'Trust Built Over Years', desc: 'Serving local families with honesty and dedication since 2004.' },
    { title: 'Honest & Transparent Pricing', desc: 'National brand quality without high price markups.' },
    { title: 'Premium Quality Fabrics', desc: 'Handpicked silks, cambric cottons, and fine embroidery.' },
    { title: 'Latest Fashion Trends', desc: 'Fresh arrivals matching modern style trends.' },
    { title: 'Wide Variety for Every Age', desc: 'Apparel for Men, Women, Kids & Bridal Trousseau.' },
    { title: 'Customer Satisfaction First', desc: 'Easy store exchange guarantee on every purchase.' },
    { title: 'Strong Community Roots', desc: 'Proudly rooted in Katra Bazar, Gursarai, Jhansi.' }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#FAF8F5] dark:bg-[#0c0c0c] border-b-2 border-[#E5E0D8] dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Main Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-[#AA7C11] dark:text-[#D4AF37] font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#AA7C11] dark:text-[#D4AF37]" />
            <span>Our Journey & Family Heritage</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            The Story of Agrawal Selection & Akshra Fashion
          </h2>
          <div className="w-28 h-1.5 bg-gradient-to-r from-[#AA7C11] via-[#D4AF37] to-[#AA7C11] mx-auto rounded-full"></div>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg font-light leading-relaxed">
            Located in the bustling heart of <strong>Katra Bazar, Gursarai, Jhansi</strong>, our family business represents a tradition of trust, affordability, and premier fashion.
          </p>
        </div>

        {/* Brand Story Hero Card - ORANGE BACKGROUND */}
        <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white rounded-3xl p-8 lg:p-12 shadow-2xl mb-20 relative overflow-hidden border-2 border-orange-400/50">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-montserrat font-bold uppercase tracking-widest text-amber-200">
                Two Premier Stores • One Family Legacy
              </span>
              <h3 className="font-playfair text-2xl sm:text-4xl font-bold text-white leading-tight">
                Combining Traditional Values with Contemporary Fashion
              </h3>
              <p className="text-orange-50 text-sm sm:text-base leading-relaxed font-poppins">
                In <strong>2004</strong>, <strong className="text-white">Agrawal Selection</strong> began its journey in Katra Bazar with a mission to deliver quality clothing at fair prices while nurturing lifelong bonds with our customers. Over the years, it became a trusted household name across Gursarai.
              </p>
              <p className="text-orange-50 text-sm sm:text-base leading-relaxed font-poppins">
                Building on this rich foundation, <strong className="text-white">Akshra Fashion</strong> was launched in <strong>2020</strong> to bring a fresh, trend-focused shopping experience—offering royal wedding attire, designer sarees, and modern western wear while upholding the same core family values.
              </p>

              <div className="flex items-center space-x-6 pt-3">
                <div className="flex items-center space-x-3 p-3 rounded-2xl bg-black/20 border border-white/20">
                  <div className="w-10 h-10 rounded-xl bg-amber-400 text-black font-bold font-playfair text-lg flex items-center justify-center shadow-md">
                    '04
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-xs text-white">Agrawal Selection</h4>
                    <p className="text-[10px] text-amber-200 font-semibold">Est. 2004</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-2xl bg-black/20 border border-white/20">
                  <div className="w-10 h-10 rounded-xl bg-amber-400 text-black font-bold font-playfair text-lg flex items-center justify-center shadow-md">
                    '20
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-xs text-white">Akshra Fashion</h4>
                    <p className="text-[10px] text-amber-200 font-semibold">Est. 2020</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/40">
                <img
                  src="/store/store_front.jpg"
                  alt="Akshra Fashion Katra Bazar Showroom"
                  className="w-full h-80 object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-black/90 p-4 rounded-2xl border border-amber-400/50 text-xs font-montserrat font-bold text-white shadow-xl flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Katra Bazar, Gursarai, Jhansi (UP)</span>
              </div>
            </div>

          </div>
        </div>

        {/* Chronological Timeline */}
        <div className="mb-20 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="font-playfair text-3xl font-bold text-gray-900 dark:text-white">
              Business Timeline
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Key milestones in our story of serving Katra Bazar families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timelineEvents.map((ev, idx) => (
              <div
                key={idx}
                className="luxury-card p-8 space-y-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] text-black font-playfair font-bold text-xl flex items-center justify-center shadow-lg">
                  {ev.year}
                </div>
                <span className="text-[11px] font-montserrat font-bold uppercase tracking-wider text-[#AA7C11] dark:text-[#D4AF37]">
                  {ev.store}
                </span>
                <h4 className="font-playfair text-xl font-bold text-gray-900 dark:text-white">
                  {ev.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 font-poppins leading-relaxed">
                  {ev.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Store Owners Leadership Names (NO IMAGES, NO DESIGNATIONS) */}
        <div className="mb-20 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 text-[#AA7C11] dark:text-[#D4AF37] font-montserrat font-bold text-xs uppercase tracking-widest">
              <UserCheck className="w-4 h-4" />
              <span>Store Owners</span>
            </div>
            <h3 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Our Leadership
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              The family entrepreneurs behind Agrawal Selection and Akshra Fashion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {owners.map((owner, idx) => (
              <div
                key={idx}
                className="luxury-card p-8 flex flex-col items-center text-center space-y-4 group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] text-black font-playfair font-bold text-xl flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
                  {owner.initials}
                </div>
                <div className="space-y-1">
                  <h4 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white">
                    {owner.name}
                  </h4>
                  {owner.alias && (
                    <p className="text-xs font-montserrat font-semibold text-[#AA7C11] dark:text-[#D4AF37]">
                      {owner.alias}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Grid (7 Items - "Personalized Shopping Assistance" Removed) */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="font-playfair text-3xl font-bold text-gray-900 dark:text-white">
              Our Core Values
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              What sets our Katra Bazar store experience apart.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="luxury-card p-6 space-y-2">
                <div className="flex items-center space-x-2 text-[#AA7C11] dark:text-[#D4AF37]">
                  <CheckCircle2 className="w-4.5 h-4.5 flex-shrink-0" />
                  <h4 className="font-montserrat font-bold text-sm text-gray-900 dark:text-white">{val.title}</h4>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-6 font-poppins">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
