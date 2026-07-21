import React, { useState } from 'react';
import { Send, Phone, Share2, Sparkles, CheckCircle2 } from 'lucide-react';
import { STORE_PHONE } from '../utils/helpers';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Wedding Sherwani / Lehenga',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="contact" className="py-20 relative bg-[#FFFFFF] dark:bg-[#0a0a0a] text-[#1A1A1A] dark:text-white">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-[#AA7C11] font-montserrat font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Connect With Us</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-5xl font-extrabold text-[#1A1A1A] dark:text-white">
            Get in Touch
          </h2>
          <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
          <p className="text-[#5F6368] dark:text-gray-300 text-sm sm:text-base font-light font-poppins">
            Planning a wedding, festival shopping, or custom tailor fitting? Send us an inquiry or call directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Communication */}
          <div className="lg:col-span-5 space-y-6">
            <div className="luxury-card p-8 space-y-6">
              <h3 className="font-playfair text-2xl font-bold text-[#1A1A1A] dark:text-white">
                Instant Telephone Inquiry
              </h3>
              <p className="text-[#5F6368] dark:text-gray-300 text-sm leading-relaxed font-poppins">
                We are available during store hours to guide you on latest arrivals, custom fitting dates, and pricing.
              </p>

              <div className="space-y-4">
                {/* Direct Call */}
                <a
                  href={`tel:${STORE_PHONE}`}
                  className="w-full p-4 rounded-2xl bg-[#F7F7F5] dark:bg-gray-800 hover:bg-[#D4AF37] hover:text-black transition border border-[#E9E9E9] dark:border-gray-700 flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#AA7C11] group-hover:text-black" />
                    <div>
                      <h4 className="font-montserrat font-bold text-xs uppercase text-[#1A1A1A] dark:text-white group-hover:text-black">Call Store Directly</h4>
                      <p className="text-sm font-semibold text-[#AA7C11] group-hover:text-black">+91 78807 03740</p>
                    </div>
                  </div>
                  <span className="text-xs font-montserrat font-bold text-[#AA7C11] group-hover:text-black">Dial Now →</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#E9E9E9] dark:border-gray-800 space-y-3">
                <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#AA7C11]">
                  Follow & Share With Family
                </h4>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#F7F7F5] dark:bg-gray-800 text-[#1A1A1A] dark:text-white hover:bg-[#D4AF37] hover:text-black transition border border-[#E9E9E9]"
                    title="Instagram Page"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#F7F7F5] dark:bg-gray-800 text-[#1A1A1A] dark:text-white hover:bg-[#D4AF37] hover:text-black transition border border-[#E9E9E9]"
                    title="Facebook Page"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.815V8z"/></svg>
                  </a>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: 'Akshra Fashion & Agrawal Selection',
                          text: 'Check out Katra Bazar Gursarai premier clothing store!',
                          url: window.location.href
                        });
                      } else {
                        alert('Website link copied to clipboard!');
                      }
                    }}
                    className="p-3 rounded-full bg-[#F7F7F5] dark:bg-gray-800 text-[#1A1A1A] dark:text-white hover:bg-[#D4AF37] hover:text-black transition border border-[#E9E9E9]"
                    title="Share with Family"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="luxury-card p-8">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-[#1A1A1A] dark:text-white">Inquiry Received!</h3>
                  <p className="text-[#5F6368] dark:text-gray-300 text-sm max-w-md mx-auto">
                    Thank you! Our Katra Bazar store team will connect with you shortly via phone (+91 78807 03740).
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-playfair text-2xl font-bold text-[#1A1A1A] dark:text-white">
                    Send Customer Inquiry
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-montserrat font-bold text-[#1A1A1A] dark:text-gray-300 uppercase">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Agrawal"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F7F5] dark:bg-gray-800 border border-[#E9E9E9] dark:border-gray-700 text-[#1A1A1A] dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-montserrat font-bold text-[#1A1A1A] dark:text-gray-300 uppercase">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F7F5] dark:bg-gray-800 border border-[#E9E9E9] dark:border-gray-700 text-[#1A1A1A] dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-montserrat font-bold text-[#1A1A1A] dark:text-gray-300 uppercase">Shopping Interest</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F7F5] dark:bg-gray-800 border border-[#E9E9E9] dark:border-gray-700 text-[#1A1A1A] dark:text-white focus:outline-none focus:border-[#D4AF37] text-sm"
                    >
                      <option>Wedding Sherwani / Groom Suit</option>
                      <option>Bridal Lehenga & Designer Sarees</option>
                      <option>School Uniforms & Kids Wear</option>
                      <option>Men’s Ethnic & Formal Wear</option>
                      <option>Winter Shawls & Jackets</option>
                      <option>Store Visit & Custom Fitting Appointment</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-montserrat font-bold text-[#1A1A1A] dark:text-gray-300 uppercase">Message or Fitting Request</label>
                    <textarea
                      rows={4}
                      placeholder="Specify colors, sizes, or dates you plan to visit Katra Bazar store..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F7F5] dark:bg-gray-800 border border-[#E9E9E9] dark:border-gray-700 text-[#1A1A1A] dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#1A1A1A] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black font-montserrat font-bold text-xs uppercase tracking-wider shadow-lg transition flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
