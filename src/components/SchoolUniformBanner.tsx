import React from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  Phone, 
  GraduationCap, 
  Shirt,
  School
} from 'lucide-react';
import { STORE_PHONE } from '../utils/helpers';

export interface SchoolItem {
  id: string;
  name: string;
  location: string;
  badge?: string;
}

export const INITIAL_SCHOOLS: SchoolItem[] = [
  { id: 'sch1', name: 'Buds & Blooms School', location: 'Gursarai', badge: 'Official Uniform Partner' },
  { id: 'sch2', name: "St. Mary's School", location: 'Gursarai & Nearby', badge: 'Complete Ready Stock' },
  { id: 'sch3', name: 'Jain Mandir School', location: 'Gursarai Center', badge: 'Custom Size Fittings' }
];

interface SchoolUniformProps {
  schools?: SchoolItem[];
}

export const SchoolUniformBanner: React.FC<SchoolUniformProps> = ({ schools = INITIAL_SCHOOLS }) => {
  const features = [
    'Quality Guaranteed',
    'Perfect Fitting',
    'Affordable Prices',
    'Ready Stock Available'
  ];

  return (
    <section id="uniforms" className="py-24 relative bg-white dark:bg-[#111111] border-b-2 border-[#E5E0D8] dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Promotional Banner Card - PARROT GREEN GRADIENT */}
        <div className="bg-gradient-to-r from-lime-600 via-emerald-600 to-green-700 text-white rounded-3xl p-8 lg:p-12 shadow-2xl border-2 border-lime-400/50 relative overflow-hidden mb-16">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/20 border border-white/40 text-amber-200 font-montserrat font-bold text-xs uppercase tracking-widest backdrop-blur-md">
                <GraduationCap className="w-4 h-4 text-amber-300" />
                <span>Admission Season Special</span>
              </div>

              <h2 className="font-playfair text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                School Admissions Open?
              </h2>

              <p className="font-playfair text-xl sm:text-2xl text-amber-200 font-bold">
                Get Complete School Uniforms Under One Roof
              </p>

              <p className="text-emerald-50 text-xs sm:text-sm font-poppins leading-relaxed">
                For years, <strong>Agrawal Selection</strong> and <strong>Akshra Fashion</strong> have proudly served students and families across Gursarai and nearby areas with durable fabrics, accurate sizing, comfortable fittings, and affordable pricing.
              </p>

              {/* Value Checks Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2 bg-black/20 p-3 rounded-xl border border-white/20">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 flex-shrink-0" />
                    <span className="text-xs font-montserrat font-bold text-white uppercase">{feat}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-emerald-100 italic">
                Visit Agrawal Selection & Akshra Fashion Today for hassle-free student fitting!
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="#location"
                  className="px-8 py-3.5 rounded-full bg-amber-400 text-black font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-white transition flex items-center space-x-2 shadow-lg"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Visit Store</span>
                </a>

                <a
                  href={`tel:${STORE_PHONE}`}
                  className="px-8 py-3.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/40 text-white font-montserrat font-bold text-xs uppercase tracking-wider transition flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Call Now (+91 78807 03740)</span>
                </a>
              </div>

            </div>

            {/* Right Display Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/50 relative group">
                <img
                  src="/store/kids_display.png"
                  alt="School Uniform & Kids Wear Display at Katra Bazar"
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-montserrat font-bold text-amber-300 uppercase tracking-widest">
                    Real Store Display • Katra Bazar
                  </span>
                  <h4 className="font-playfair text-lg font-bold">School Uniforms & Kids Apparel Counter</h4>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Featured Schools Showcase */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 text-[#AA7C11] dark:text-[#D4AF37] font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full bg-[#D4AF37]/15">
              <School className="w-4 h-4 text-[#AA7C11] dark:text-[#D4AF37]" />
              <span>Trusted Uniform Destination</span>
            </div>
            <h3 className="font-playfair text-3xl font-extrabold text-[#1A1A1A] dark:text-white">
              Featured Schools We Serve
            </h3>
            <p className="text-xs sm:text-sm text-[#5F6368] dark:text-gray-300 font-poppins">
              Preferred destination for school uniforms for several educational institutions across Gursarai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {schools.map((school) => (
              <div
                key={school.id}
                className="luxury-card p-6 flex flex-col justify-between group space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F2EE] dark:bg-gray-800 text-[#AA7C11] dark:text-[#D4AF37] flex items-center justify-center font-bold text-xl shadow-sm group-hover:bg-[#D4AF37] group-hover:text-black transition">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg font-bold text-[#1A1A1A] dark:text-white">
                      {school.name}
                    </h4>
                    <p className="text-xs text-[#5F6368] dark:text-gray-400">{school.location}</p>
                  </div>
                </div>

                {school.badge && (
                  <div className="pt-2 border-t border-[#E5E0D8] dark:border-gray-800 flex items-center justify-between">
                    <span className="text-[10px] font-montserrat font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                      ✔ {school.badge}
                    </span>
                    <Shirt className="w-4 h-4 text-[#AA7C11] dark:text-[#D4AF37]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <p className="text-xs font-montserrat font-semibold text-[#5F6368] dark:text-gray-400">
              🎓 Serving <strong>hundreds of students</strong> every academic year across Gursarai, Jhansi and surrounding areas.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
