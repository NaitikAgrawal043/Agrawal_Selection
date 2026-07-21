import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Search, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ShieldCheck, 
  Heart,
  Sparkles
} from 'lucide-react';
import { STORE_PHONE } from '../utils/helpers';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenPolicy: (page: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  wishlistCount: number;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenPolicy,
  darkMode,
  setDarkMode,
  wishlistCount
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Occasions', href: '#occasions' },
    { name: 'School Uniforms', href: '#uniforms' },
    { name: 'Store Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner - Light Vibrant Ivory */}
      <div className="bg-[#FAF8F5] dark:bg-[#121212] text-[#1A1A1A] dark:text-[#D4AF37] text-xs py-2 px-4 border-b border-[#E9E9E9] dark:border-gray-800 flex justify-between items-center overflow-hidden transition-colors">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 text-xs tracking-wider">
            <span className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#AA7C11]" />
              <span className="font-semibold text-[#1A1A1A] dark:text-white">Katra Bazar, Gursarai, Jhansi</span>
            </span>
            <span className="hidden sm:inline-block text-gray-300">|</span>
            <span className="hidden sm:inline-flex items-center space-x-1.5 text-[#5F6368] dark:text-gray-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Trusted Family Fashion & School Uniform Destination</span>
            </span>
          </div>

          <div className="flex items-center space-x-4 font-montserrat">
            <a 
              href={`tel:${STORE_PHONE}`} 
              className="hover:text-[#AA7C11] transition flex items-center space-x-1 text-xs text-[#1A1A1A] dark:text-gray-200 font-bold"
            >
              <Phone className="w-3 h-3 text-[#AA7C11]" />
              <span className="hidden md:inline">Call Store:</span>
              <span>+91 78807 03740</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        scrolled ? 'bg-white/95 dark:bg-[#111111]/95 backdrop-blur-md py-3 shadow-md border-b border-[#E5E5E5]' : 'bg-white/95 dark:bg-[#111111]/95 py-4 border-b border-[#E5E5E5] dark:border-gray-800'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] flex items-center justify-center text-black font-playfair font-bold text-xl shadow-sm group-hover:scale-105 transition">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-xl md:text-2xl font-bold tracking-tight text-[#1A1A1A] dark:text-white flex items-center">
                AKSHRA <span className="text-[#AA7C11] ml-1.5 font-light">FASHION</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#5F6368] dark:text-gray-400 uppercase font-montserrat font-semibold">
                & Agrawal Selection
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 font-montserrat text-xs tracking-wider font-semibold uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 text-[#1A1A1A] dark:text-gray-200 hover:text-[#AA7C11] dark:hover:text-[#D4AF37] transition duration-200 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#AA7C11] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              aria-label="Search Collection"
              className="p-2.5 rounded-full bg-[#F7F7F5] dark:bg-gray-800 text-[#1A1A1A] dark:text-gray-200 hover:bg-[#D4AF37] hover:text-black transition shadow-sm"
              title="AI Fashion Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Dark Mode"
              className="p-2.5 rounded-full bg-[#F7F7F5] dark:bg-gray-800 text-[#1A1A1A] dark:text-gray-200 hover:bg-[#D4AF37] hover:text-black transition shadow-sm"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Wishlist Indicator */}
            <a
              href="#gallery"
              className="relative p-2.5 rounded-full bg-[#F7F7F5] dark:bg-gray-800 text-[#1A1A1A] dark:text-gray-200 hover:bg-[#D4AF37] hover:text-black transition shadow-sm"
              title="Saved Favorites"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white rounded-full text-[10px] flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </a>

            {/* Visit Store CTA */}
            <a
              href="#location"
              className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#1A1A1A] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-montserrat font-bold text-xs uppercase tracking-wider shadow-md transition transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visit Store</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-[#1A1A1A] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 dark:bg-[#111111]/98 border-t border-[#E5E5E5] px-6 py-6 space-y-4 animate-fade-in shadow-xl">
            <div className="flex flex-col space-y-3 font-montserrat text-sm font-semibold uppercase">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#1A1A1A] dark:text-gray-200 hover:text-[#AA7C11] py-2 border-b border-gray-100 dark:border-gray-800"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col space-y-2">
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-[#1A1A1A] text-[#D4AF37] font-bold uppercase tracking-wider text-xs shadow-md"
              >
                Visit Store in Katra Bazar
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPolicy('size-guide');
                }}
                className="w-full text-center py-2.5 rounded-xl border border-[#D4AF37]/40 text-[#AA7C11] text-xs font-semibold uppercase"
              >
                View Size Guide
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
