import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Heart,
  Sparkles
} from 'lucide-react';
import { STORE_PHONE } from '../utils/helpers';

interface FooterProps {
  onOpenPolicy: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-12 border-t border-[#D4AF37]/30">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] flex items-center justify-center text-black font-playfair font-bold text-xl shadow-lg">
                A
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold tracking-tight text-white">
                  AKSHRA <span className="text-[#D4AF37]">FASHION</span>
                </h3>
                <p className="text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase font-montserrat font-semibold">
                  & Agrawal Selection
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-300 font-poppins leading-relaxed max-w-md">
              Serving families across Katra Bazar, Gursarai, and Jhansi with quality clothing, transparent prices, and traditional trust since 2004.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-[#D4AF37] font-montserrat">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Agrawal Selection (2004) • Akshra Fashion (2020)</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#D4AF37]">
              Customer Service & Policies
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-poppins">
              <li>
                <button onClick={() => onOpenPolicy('size-guide')} className="hover:text-[#D4AF37] transition">
                  Size Guide (Men, Women & Kids)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('returns')} className="hover:text-[#D4AF37] transition">
                  7-Day Store Exchange Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('care')} className="hover:text-[#D4AF37] transition">
                  Garment Care & Fabric Maintenance
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('faqs')} className="hover:text-[#D4AF37] transition">
                  Frequently Asked Questions (FAQs)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Visit Store Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-widest text-[#D4AF37]">
              Visit Showroom
            </h4>

            <div className="space-y-3 text-xs text-gray-300 font-poppins">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>Katra Bazar, Gursarai, Jhansi, Uttar Pradesh 284202</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href={`tel:${STORE_PHONE}`} className="hover:text-white transition">+91 78807 03740</a>
              </p>
              <p className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>Store Hours: 9:30 AM – 9:00 PM (All 7 Days)</span>
              </p>
            </div>

            <a
              href="#location"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#D4AF37] text-black font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-white transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Directions to Store</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-poppins space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Akshra Fashion & Agrawal Selection. All Rights Reserved.</p>

          <p className="flex items-center space-x-1 text-xs">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current inline" />
            <span>for Katra Bazar, Gursarai</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
