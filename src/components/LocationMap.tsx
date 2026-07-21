import React from 'react';
import { MapPin, Clock, Phone, Navigation, Sparkles } from 'lucide-react';
import { STORE_ADDRESS, STORE_PHONE, getGoogleMapsDirectionsLink } from '../utils/helpers';

export const LocationMap: React.FC = () => {
  return (
    <section id="location" className="py-20 relative bg-[#F8F5EF] dark:bg-[#111111]">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-[#D4AF37] font-montserrat font-semibold text-xs uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Visit Our Store</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Find Us in Katra Bazar, Gursarai
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-light">
            Conveniently located in the main market center of Katra Bazar with parking facility and air-conditioned shopping floors.
          </p>
        </div>

        {/* Map & Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Card */}
          <div className="lg:col-span-5 glass-card p-8 rounded-3xl border border-[#D4AF37]/30 flex flex-col justify-between space-y-6 gold-glow shadow-2xl">
            <div className="space-y-6">
              
              {/* Store Title */}
              <div>
                <span className="text-[11px] font-montserrat font-bold uppercase tracking-widest text-[#D4AF37]">
                  Premier Destination
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  Akshra Fashion & Agrawal Selection
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-sm text-gray-900 dark:text-white">Store Address</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-poppins">
                    {STORE_ADDRESS}
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-sm text-gray-900 dark:text-white">Working Hours</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    Open Every Day: <strong>9:30 AM – 9:00 PM</strong>
                  </p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                    Open on Sundays & Public Holidays for Shadi Season
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-sm text-gray-900 dark:text-white">Telephone Inquiry</h4>
                  <a href={`tel:${STORE_PHONE}`} className="text-sm font-semibold text-[#D4AF37] hover:underline">
                    +91 78807 03740
                  </a>
                </div>
              </div>

            </div>

            {/* Directions Button */}
            <div className="pt-4 border-t border-gray-200/50 dark:border-gray-800/50 space-y-3">
              <a
                href={getGoogleMapsDirectionsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-montserrat font-bold text-xs uppercase tracking-wider hover:shadow-xl transition flex items-center justify-center space-x-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Google Maps Directions</span>
              </a>

              <p className="text-[11px] text-center text-gray-500 dark:text-gray-400">
                Landmark: Near Main Katra Square, Gursarai Market
              </p>
            </div>

          </div>

          {/* Right Embedded Map View */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-2xl relative min-h-[400px]">
            <iframe
              title="Akshra Fashion Katra Bazar Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14434.5!2d79.17!3d25.61!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM3JzAxLjkiTiA3OcKwMTAnNDguNyJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[420px] border-0 filter grayscale-0 dark:brightness-90"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
