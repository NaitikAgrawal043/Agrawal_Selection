import React from 'react';
import { X, RefreshCw, HelpCircle, Ruler, Sparkles } from 'lucide-react';

interface PolicyProps {
  page: string | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyProps> = ({ page, onClose }) => {
  if (!page) return null;

  const renderContent = () => {
    switch (page) {
      case 'size-guide':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-[#D4AF37]">
              <Ruler className="w-6 h-6" />
              <h3 className="font-playfair text-2xl font-bold">Akshra Fashion Size Guide</h3>
            </div>
            <p className="text-sm text-gray-300">
              For precision custom fittings, our in-house master tailors at Katra Bazar, Gursarai provide complimentary alterations for all store purchases.
            </p>

            {/* Men's Size Table */}
            <div className="space-y-2">
              <h4 className="font-montserrat font-bold text-xs uppercase text-[#D4AF37]">Men's Sherwani & Suit Sizes</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-gray-700">
                  <thead>
                    <tr className="bg-[#D4AF37] text-black font-bold">
                      <th className="p-2 border border-gray-700">Size Code</th>
                      <th className="p-2 border border-gray-700">Chest (Inches)</th>
                      <th className="p-2 border border-gray-700">Waist (Inches)</th>
                      <th className="p-2 border border-gray-700">Shoulder (Inches)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 text-gray-300">
                    <tr><td className="p-2 border border-gray-800">S (38)</td><td className="p-2 border border-gray-800">38"</td><td className="p-2 border border-gray-800">32"</td><td className="p-2 border border-gray-800">17.5"</td></tr>
                    <tr><td className="p-2 border border-gray-800">M (40)</td><td className="p-2 border border-gray-800">40"</td><td className="p-2 border border-gray-800">34"</td><td className="p-2 border border-gray-800">18.0"</td></tr>
                    <tr><td className="p-2 border border-gray-800">L (42)</td><td className="p-2 border border-gray-800">42"</td><td className="p-2 border border-gray-800">36"</td><td className="p-2 border border-gray-800">18.5"</td></tr>
                    <tr><td className="p-2 border border-gray-800">XL (44)</td><td className="p-2 border border-gray-800">44"</td><td className="p-2 border border-gray-800">38"</td><td className="p-2 border border-gray-800">19.0"</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Women & Kids Note */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 space-y-1">
              <strong className="text-white block font-montserrat uppercase">Bridal & Women's Lehengas:</strong>
              <p>Lehengas and Anarkalis feature unstitched blouse material and adjustable waist drawstring to accommodate all measurements seamlessly.</p>
            </div>
          </div>
        );

      case 'return-policy':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-[#D4AF37]">
              <RefreshCw className="w-6 h-6" />
              <h3 className="font-playfair text-2xl font-bold">Return & Exchange Policy</h3>
            </div>
            <div className="space-y-3 text-sm text-gray-300 leading-relaxed font-poppins">
              <p>At Akshra Fashion & Agrawal Selection, customer satisfaction is our top priority. We offer a hassle-free <strong>7-Day Store Exchange Policy</strong> for Katra Bazar shoppers.</p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>Garments can be exchanged at our Katra Bazar showroom within 7 days of purchase date with valid store receipt.</li>
                <li>Items must be unused, unwashed, and in original condition with intact price tags.</li>
                <li>Custom-tailored or altered garments are non-exchangeable unless there is a fitting defect which our tailors will gladly rectify for free.</li>
              </ul>
            </div>
          </div>
        );

      case 'care-instructions':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-[#D4AF37]">
              <Sparkles className="w-6 h-6" />
              <h3 className="font-playfair text-2xl font-bold">Garment Care Instructions</h3>
            </div>
            <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
              <p>Preserve the luster and embroidery of your luxury garments for decades:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-[#D4AF37]/30 space-y-1">
                  <h4 className="font-montserrat font-bold text-xs text-[#D4AF37] uppercase">Silk & Zardozi Sherwanis</h4>
                  <p className="text-xs text-gray-400">Dry Clean Only. Never spray perfume directly on zari metallic threads. Store in breathable muslin bags.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-[#D4AF37]/30 space-y-1">
                  <h4 className="font-montserrat font-bold text-xs text-[#D4AF37] uppercase">Chikankari & Cottons</h4>
                  <p className="text-xs text-gray-400">Hand wash separately in cold water with mild detergent. Line dry in shade to preserve vibrant colors.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'faqs':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-[#D4AF37]">
              <HelpCircle className="w-6 h-6" />
              <h3 className="font-playfair text-2xl font-bold">Frequently Asked Questions</h3>
            </div>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <h4 className="font-montserrat font-bold text-white">Q: Do you offer custom tailoring for weddings?</h4>
                <p className="text-gray-300">Yes! We have in-house master tailors at Katra Bazar, Gursarai to stitch custom sherwanis, tuxedos, and blouse fittings in 24-48 hours.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <h4 className="font-montserrat font-bold text-white">Q: Are prices higher than online stores?</h4>
                <p className="text-gray-300">No, our prices are guaranteed to be equal to or lower than online platforms while allowing you to physically inspect fabric quality and try clothes in store.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <h4 className="font-montserrat font-bold text-white">Q: Can I reserve an item via WhatsApp before visiting?</h4>
                <p className="text-gray-300">Absolutely! Click any product's WhatsApp button to message our Katra Bazar staff, and we will hold the item for your visit.</p>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-4 text-sm text-gray-300">
            <h3 className="font-playfair text-2xl font-bold text-[#D4AF37] capitalize">{page.replace('-', ' ')}</h3>
            <p>Akshra Fashion & Agrawal Selection operates in accordance with standard retail guidelines in Uttar Pradesh. Contact Katra Bazar store at +91 78807 03740 for any inquiries.</p>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="glass-card max-w-2xl w-full rounded-3xl border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-8 relative text-white max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-black transition"
        >
          <X className="w-5 h-5" />
        </button>

        {renderContent()}
      </div>
    </div>
  );
};
