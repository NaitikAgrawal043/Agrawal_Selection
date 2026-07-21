import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ShopByOccasion } from './components/ShopByOccasion';
import { SchoolUniformBanner, INITIAL_SCHOOLS } from './components/SchoolUniformBanner';
import { FeaturedGallery } from './components/FeaturedGallery';
import { StoreShowcase } from './components/StoreShowcase';
import { TestimonialsSection } from './components/TestimonialsSection';
import { StatsCounter } from './components/StatsCounter';
import { LocationMap } from './components/LocationMap';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuickViewModal } from './components/QuickViewModal';
import { AISearchModal } from './components/AISearchModal';
import { PolicyModal } from './components/PolicyModal';
import { FloatingCTAs } from './components/FloatingCTAs';

import type { Product, Review, SchoolItem } from './types';
import { INITIAL_PRODUCTS, INITIAL_REVIEWS } from './data/products';
import { loadLocalData, saveLocalData } from './utils/helpers';

export const App: React.FC = () => {
  // Pure White / Ivory Light Mode default
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return loadLocalData('dark_mode', false);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    saveLocalData('dark_mode', darkMode);
  }, [darkMode]);

  // Catalog State
  const [products] = useState<Product[]>(() => {
    return loadLocalData('products', INITIAL_PRODUCTS);
  });

  // Featured Schools State
  const [schools] = useState<SchoolItem[]>(() => {
    return loadLocalData('schools', INITIAL_SCHOOLS);
  });

  // Testimonials state
  const [reviews] = useState<Review[]>(() => {
    return loadLocalData('reviews', INITIAL_REVIEWS);
  });

  // Wishlist State
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    return loadLocalData('wishlist', ['p1', 'p2']);
  });

  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const updated = prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id];
      saveLocalData('wishlist', updated);
      return updated;
    });
  };

  // Modals state
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activePolicyPage, setActivePolicyPage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1A1A1A] dark:bg-[#0a0a0a] dark:text-[#f3f4f6] selection:bg-[#D4AF37] selection:text-black">
      
      {/* Header & Sticky Nav */}
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenPolicy={(p) => setActivePolicyPage(p)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        wishlistCount={wishlistIds.length}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <WhyChooseUs />
        <ShopByOccasion />
        <SchoolUniformBanner schools={schools} />
        <FeaturedGallery />
        <StoreShowcase />
        <TestimonialsSection reviews={reviews} />
        <StatsCounter />
        <LocationMap />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPolicy={(p) => setActivePolicyPage(p)}
      />

      {/* Modals & Overlays */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
      />

      <AISearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={products}
        onQuickView={(p) => setQuickViewProduct(p)}
      />

      <PolicyModal
        page={activePolicyPage}
        onClose={() => setActivePolicyPage(null)}
      />

      {/* Floating Action Buttons */}
      <FloatingCTAs />

    </div>
  );
};

export default App;
