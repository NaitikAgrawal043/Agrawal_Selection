import React, { useState } from 'react';
import type { Product, CategoryType, Review, BannerOffer, SchoolItem } from '../types';
import { X, Plus, Trash2, RefreshCw, BarChart2, Package, Tag, MessageSquare, ShieldCheck, GraduationCap } from 'lucide-react';
import { formatCurrency } from '../utils/helpers';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onAddProduct: (p: Product) => void;
  onDeleteProduct: (id: string) => void;
  reviews: Review[];
  onAddReview: (r: Review) => void;
  offers: BannerOffer[];
  onToggleOffer: (id: string) => void;
  onResetDefaults: () => void;
  schools?: SchoolItem[];
  onAddSchool?: (s: SchoolItem) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  products,
  onAddProduct,
  onDeleteProduct,
  reviews,
  onAddReview,
  offers,
  onToggleOffer,
  onResetDefaults,
  schools = [],
  onAddSchool
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'offers' | 'reviews' | 'schools'>('dashboard');

  // Add product form state
  const [newProd, setNewProd] = useState<Partial<Product>>({
    name: '',
    category: 'Men',
    subcategory: 'Ethnic Wear',
    price: 3499,
    originalPrice: 4999,
    rating: 4.8,
    reviewsCount: 12,
    image: 'https://images.unsplash.com/photo-1597983073493-88cd35cf03b0?auto=format&fit=crop&w=800&q=80',
    tag: 'Trending',
    description: 'Fresh arrival at Katra Bazar showroom.',
    features: ['100% Quality Fabric', 'Custom Fitting Available'],
    sizes: ['M', 'L', 'XL'],
    colors: ['Gold', 'Maroon'],
    fabric: 'Silk Blend',
    inStock: true
  });

  // Add school form state
  const [newSchoolName, setNewSchoolName] = useState('');
  const [newSchoolLoc, setNewSchoolLoc] = useState('Gursarai');
  const [newSchoolBadge, setNewSchoolBadge] = useState('Complete Ready Stock');

  const handleAddProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProd.name || !newProd.price || !newProd.image) return;

    const productToAdd: Product = {
      id: `p_${Date.now()}`,
      name: newProd.name,
      category: (newProd.category as CategoryType) || 'Men',
      subcategory: newProd.subcategory || 'Ethnic Wear',
      price: Number(newProd.price),
      originalPrice: Number(newProd.originalPrice || newProd.price),
      rating: 4.9,
      reviewsCount: 1,
      image: newProd.image,
      tag: newProd.tag as any,
      description: newProd.description || 'New Katra Bazar collection.',
      features: newProd.features || ['Premium Fabric'],
      sizes: newProd.sizes || ['M', 'L'],
      colors: newProd.colors || ['Gold'],
      fabric: newProd.fabric || 'Silk',
      inStock: true
    };

    onAddProduct(productToAdd);
    alert(`Product "${productToAdd.name}" added successfully to store catalog!`);
    setNewProd({
      name: '',
      price: 3499,
      image: 'https://images.unsplash.com/photo-1597983073493-88cd35cf03b0?auto=format&fit=crop&w=800&q=80',
      description: '',
      category: 'Men'
    });
  };

  const handleAddSchoolSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSchoolName || !onAddSchool) return;

    onAddSchool({
      id: `sch_${Date.now()}`,
      name: newSchoolName,
      location: newSchoolLoc,
      badge: newSchoolBadge
    });

    alert(`School "${newSchoolName}" added to uniform showcase!`);
    setNewSchoolName('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="glass-card max-w-5xl w-full rounded-3xl border border-[#D4AF37]/50 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-white">
        
        {/* Header */}
        <div className="p-6 bg-[#111111] border-b border-[#D4AF37]/30 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-playfair text-xl font-bold">Akshra Store Manager Admin Panel</h2>
              <p className="text-xs text-[#D4AF37] font-montserrat uppercase tracking-wider">Katra Bazar, Gursarai Showroom Dashboard</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onResetDefaults}
              className="px-3 py-1.5 rounded-lg border border-red-500/40 text-red-400 hover:bg-red-500 hover:text-white transition text-xs font-montserrat font-bold flex items-center space-x-1"
              title="Reset sample data"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Data</span>
            </button>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Admin Navigation Tabs */}
        <div className="flex border-b border-gray-800 bg-[#161616] px-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`py-3.5 px-5 text-xs font-montserrat font-bold uppercase tracking-wider border-b-2 transition flex items-center space-x-2 whitespace-nowrap ${
              activeTab === 'dashboard' ? 'border-[#D4AF37] text-[#D4AF37]' : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <BarChart2 className="w-4 h-4" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`py-3.5 px-5 text-xs font-montserrat font-bold uppercase tracking-wider border-b-2 transition flex items-center space-x-2 whitespace-nowrap ${
              activeTab === 'products' ? 'border-[#D4AF37] text-[#D4AF37]' : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Manage Products ({products.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('schools')}
            className={`py-3.5 px-5 text-xs font-montserrat font-bold uppercase tracking-wider border-b-2 transition flex items-center space-x-2 whitespace-nowrap ${
              activeTab === 'schools' ? 'border-[#D4AF37] text-[#D4AF37]' : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>School Uniforms ({schools.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('offers')}
            className={`py-3.5 px-5 text-xs font-montserrat font-bold uppercase tracking-wider border-b-2 transition flex items-center space-x-2 whitespace-nowrap ${
              activeTab === 'offers' ? 'border-[#D4AF37] text-[#D4AF37]' : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <Tag className="w-4 h-4" />
            <span>Offers & Banners</span>
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`py-3.5 px-5 text-xs font-montserrat font-bold uppercase tracking-wider border-b-2 transition flex items-center space-x-2 whitespace-nowrap ${
              activeTab === 'reviews' ? 'border-[#D4AF37] text-[#D4AF37]' : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Testimonials ({reviews.length})</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-grow">
          
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-[#D4AF37]/30 space-y-2">
                  <span className="text-xs font-montserrat font-semibold text-gray-400 uppercase">Total Active Products</span>
                  <div className="text-3xl font-playfair font-bold text-[#D4AF37]">{products.length} Items</div>
                  <p className="text-xs text-gray-400">Available across Men, Women, Kids & Bridal</p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-[#D4AF37]/30 space-y-2">
                  <span className="text-xs font-montserrat font-semibold text-gray-400 uppercase">Featured Schools</span>
                  <div className="text-3xl font-playfair font-bold text-amber-400">{schools.length} Schools</div>
                  <p className="text-xs text-gray-400">Official uniform partner list</p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-[#D4AF37]/30 space-y-2">
                  <span className="text-xs font-montserrat font-semibold text-gray-400 uppercase">WhatsApp Inquiries</span>
                  <div className="text-3xl font-playfair font-bold text-emerald-400">142 Inquiries</div>
                  <p className="text-xs text-gray-400">Directly connected to +91 78807 03740</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 space-y-3">
                <h3 className="font-playfair text-lg font-bold text-white">Katrabazar Store Quick Guide</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  As store admin, you can add new product pictures, prices, and partner schools here. When parents or shoppers click "Visit Store" or "Call Now", they connect directly to your mobile.
                </p>
              </div>
            </div>
          )}

          {/* Manage Products Tab */}
          {activeTab === 'products' && (
            <div className="space-y-8">
              {/* Add Product Form */}
              <form onSubmit={handleAddProductSubmit} className="p-6 rounded-2xl bg-white/5 border border-[#D4AF37]/30 space-y-4">
                <h3 className="font-playfair text-lg font-bold text-[#D4AF37] flex items-center space-x-2">
                  <Plus className="w-5 h-5" />
                  <span>Add New Apparel Item to Catalog</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Product Name (e.g. Royal Maroon Sherwani)"
                    value={newProd.name}
                    onChange={e => setNewProd({ ...newProd, name: e.target.value })}
                    className="px-4 py-2.5 rounded-xl bg-black/50 border border-white/20 text-xs focus:outline-none focus:border-[#D4AF37]"
                  />

                  <select
                    value={newProd.category}
                    onChange={e => setNewProd({ ...newProd, category: e.target.value as CategoryType })}
                    className="px-4 py-2.5 rounded-xl bg-[#111111] border border-white/20 text-xs focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                    <option value="Bridal">Bridal</option>
                    <option value="Accessories">Accessories</option>
                  </select>

                  <input
                    type="number"
                    required
                    placeholder="Offer Price (₹)"
                    value={newProd.price}
                    onChange={e => setNewProd({ ...newProd, price: Number(e.target.value) })}
                    className="px-4 py-2.5 rounded-xl bg-black/50 border border-white/20 text-xs focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input
                    type="url"
                    required
                    placeholder="Image URL (Unsplash or Cloudinary)"
                    value={newProd.image}
                    onChange={e => setNewProd({ ...newProd, image: e.target.value })}
                    className="px-4 py-2.5 rounded-xl bg-black/50 border border-white/20 text-xs focus:outline-none focus:border-[#D4AF37]"
                  />

                  <input
                    type="text"
                    placeholder="Fabric (e.g. Pure Banarasi Silk)"
                    value={newProd.fabric}
                    onChange={e => setNewProd({ ...newProd, fabric: e.target.value })}
                    className="px-4 py-2.5 rounded-xl bg-black/50 border border-white/20 text-xs focus:outline-none focus:border-[#D4AF37]"
                  />

                  <select
                    value={newProd.tag}
                    onChange={e => setNewProd({ ...newProd, tag: e.target.value as any })}
                    className="px-4 py-2.5 rounded-xl bg-[#111111] border border-white/20 text-xs focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Trending">Trending</option>
                    <option value="Bestseller">Bestseller</option>
                    <option value="Bridal Luxury">Bridal Luxury</option>
                    <option value="Festive Special">Festive Special</option>
                    <option value="New">New</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#D4AF37] text-black font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-white transition shadow-lg"
                >
                  Publish Item to Website
                </button>
              </form>

              {/* Products Table */}
              <div className="space-y-3">
                <h4 className="font-montserrat font-bold text-xs uppercase text-gray-400">Current Catalog ({products.length} Items)</h4>
                <div className="space-y-2">
                  {products.map(p => (
                    <div key={p.id} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img src={p.image} alt={p.name} className="w-12 h-12 object-cover rounded-lg" />
                        <div>
                          <h5 className="font-playfair font-bold text-sm text-white">{p.name}</h5>
                          <span className="text-[10px] text-[#D4AF37] font-montserrat">{p.category} • {formatCurrency(p.price)}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => onDeleteProduct(p.id)}
                        className="p-2 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white transition"
                        title="Delete Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* Manage Schools Tab */}
          {activeTab === 'schools' && (
            <div className="space-y-6">
              <form onSubmit={handleAddSchoolSubmit} className="p-6 rounded-2xl bg-white/5 border border-[#D4AF37]/30 space-y-4">
                <h3 className="font-playfair text-lg font-bold text-[#D4AF37] flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>Add New Featured School for Uniforms</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="School Name (e.g. St. Mary's High School)"
                    value={newSchoolName}
                    onChange={e => setNewSchoolName(e.target.value)}
                    className="px-4 py-2.5 rounded-xl bg-black/50 border border-white/20 text-xs focus:outline-none focus:border-[#D4AF37]"
                  />

                  <input
                    type="text"
                    placeholder="Location (e.g. Gursarai Center)"
                    value={newSchoolLoc}
                    onChange={e => setNewSchoolLoc(e.target.value)}
                    className="px-4 py-2.5 rounded-xl bg-black/50 border border-white/20 text-xs focus:outline-none focus:border-[#D4AF37]"
                  />

                  <input
                    type="text"
                    placeholder="Badge (e.g. Complete Ready Stock)"
                    value={newSchoolBadge}
                    onChange={e => setNewSchoolBadge(e.target.value)}
                    className="px-4 py-2.5 rounded-xl bg-black/50 border border-white/20 text-xs focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#D4AF37] text-black font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-white transition shadow-lg"
                >
                  + Add School to Showcase
                </button>
              </form>

              <div className="space-y-2">
                <h4 className="font-montserrat font-bold text-xs uppercase text-gray-400">Current Partner Schools ({schools.length})</h4>
                {schools.map(s => (
                  <div key={s.id} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <h5 className="font-playfair font-bold text-white text-base">{s.name}</h5>
                      <span className="text-xs text-gray-400">{s.location} • {s.badge}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Offers Tab */}
          {activeTab === 'offers' && (
            <div className="space-y-4">
              <h3 className="font-playfair text-lg font-bold text-[#D4AF37]">Manage Promotional Offers</h3>
              {offers.map(off => (
                <div key={off.id} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-black text-[10px] font-bold uppercase">{off.discountBadge}</span>
                    <h4 className="font-playfair font-bold text-white text-base">{off.title}</h4>
                    <p className="text-xs text-gray-400">{off.subtitle}</p>
                  </div>

                  <button
                    onClick={() => onToggleOffer(off.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-montserrat font-bold uppercase transition ${
                      off.active ? 'bg-emerald-600 text-white' : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    {off.active ? 'Active' : 'Disabled'}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-playfair text-lg font-bold text-[#D4AF37]">Customer Testimonials</h3>
                <button
                  onClick={() => {
                    const author = prompt('Customer Name:');
                    const comment = prompt('Review text:');
                    if (author && comment) {
                      onAddReview({
                        id: `r_${Date.now()}`,
                        author,
                        location: 'Gursarai Customer',
                        rating: 5,
                        date: 'Just now',
                        comment,
                        verified: true
                      });
                    }
                  }}
                  className="px-3 py-1.5 rounded-lg bg-[#D4AF37] text-black text-xs font-montserrat font-bold uppercase"
                >
                  + Add Customer Review
                </button>
              </div>

              {reviews.map(r => (
                <div key={r.id} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-montserrat font-bold text-sm text-white">{r.author} ({r.location})</span>
                    <span className="text-xs text-amber-400">★ {r.rating}.0</span>
                  </div>
                  <p className="text-xs text-gray-300 italic">"{r.comment}"</p>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
