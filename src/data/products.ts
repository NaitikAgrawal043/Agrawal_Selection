import type { Product, Review, GalleryItem, BannerOffer, OccasionItem } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Royal Heritage Golden Silk Sherwani Set',
    category: 'Men',
    subcategory: 'Wedding Collection',
    price: 14999,
    originalPrice: 19999,
    rating: 4.9,
    reviewsCount: 48,
    image: 'https://images.unsplash.com/photo-1597983073493-88cd35cf03b0?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      '/store/suitings_counter.jpg',
      'https://images.unsplash.com/photo-1597983073493-88cd35cf03b0?auto=format&fit=crop&w=800&q=80'
    ],
    tag: 'Bridal Luxury',
    description: 'Exquisite hand-embroidered Zardozi regal sherwani crafted from raw Banarasi silk with matching churidar and stole. Custom tailored at Katra Bazar Gursarai store.',
    features: ['100% Pure Banarasi Silk', 'Hand-stitched Zardozi Motifs', 'Includes Stole & Chudidar', 'Custom Tailoring Available at Gursarai Store'],
    sizes: ['S (38)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    colors: ['Luxury Gold', 'Ivory Cream', 'Royal Maroon'],
    fabric: 'Raw Silk & Brocade',
    inStock: true
  },
  {
    id: 'p2',
    name: 'Crimson Red Hand-Embroidered Velvet Bridal Lehenga',
    category: 'Bridal',
    subcategory: 'Wedding Collection',
    price: 28999,
    originalPrice: 35000,
    rating: 5.0,
    reviewsCount: 62,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      '/store/saree_counter.jpg',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
    ],
    tag: 'Bridal Luxury',
    description: 'Statement wedding lehenga featuring heavy Gota Patti and antique Dabka embroidery on micro-velvet. Available at Katra Bazar bridal trousseau floor.',
    features: ['Double Netted Dupatta', 'Heavy Kalis with Can-Can Lining', 'Intricate Antique Metallic Threadwork', 'Free Fitting at Katra Bazar Store'],
    sizes: ['Free Size (Customizable)', 'M', 'L', 'XL'],
    colors: ['Deep Crimson Red', 'Royal Velvet Wine', 'Maroon Gold'],
    fabric: 'Micro Velvet & Organza',
    inStock: true
  },
  {
    id: 'p3',
    name: 'Kanjeevaram Pure Zari Silk Saree - Maharani Gold Edition',
    category: 'Women',
    subcategory: 'Ethnic Wear',
    price: 8499,
    originalPrice: 11999,
    rating: 4.8,
    reviewsCount: 39,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    tag: 'Festive Special',
    description: 'Authentic South Silk saree woven with pure golden zari motifs and wide contrast borders. Available on Katra Bazar saree counter floor.',
    features: ['Pure Mulberry Silk Blend', 'Woven Gold Zari Pallu', 'Unstitched Blouse Piece Included', 'Crease Resistant Weave'],
    sizes: ['6.3 Meters (With Blouse)'],
    colors: ['Peacock Blue & Gold', 'Emerald Green', 'Magenta Rose'],
    fabric: 'Kanjeevaram Silk',
    inStock: true
  },
  {
    id: 'p4',
    name: 'Louis Italian Classic Navy Blue 3-Piece Tuxedo Suit',
    category: 'Men',
    subcategory: 'Formal Wear',
    price: 11999,
    originalPrice: 15999,
    rating: 4.9,
    reviewsCount: 31,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    tag: 'Trending',
    description: 'Slim-fit luxury suit tailored from premium Italian wool blend fabric with satin peak lapels. Includes jacket, double-breasted vest, and flat-front trousers.',
    features: ['Wrinkle-Free Breathable Wool Blend', 'Satin Lapel Accent', 'Includes Blazer, Waistcoat & Trousers', 'Custom Sleeve Alterations'],
    sizes: ['38R', '40R', '42R', '44R'],
    colors: ['Midnight Navy', 'Charcoal Grey', 'Classic Black'],
    fabric: 'Italian Wool Blend',
    inStock: true
  },
  {
    id: 'p5',
    name: 'Little Prince Indo-Western Kurta & Jacquard Jacket Set',
    category: 'Kids',
    subcategory: 'Festive',
    price: 2499,
    originalPrice: 3499,
    rating: 4.9,
    reviewsCount: 27,
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80',
    tag: 'Festive Special',
    description: 'Adorable ethnic wear set for young boys including soft cotton silk kurta, pajama, and a brocade woven nehru jacket. Featured on Katra Bazar kids floor.',
    features: ['100% Skin-Friendly Soft Lining', 'Easy Snap Buttons', 'Includes Kurta, Pajama & Nehru Jacket', 'Machine Washable'],
    sizes: ['2-3 Yrs', '4-5 Yrs', '6-7 Yrs', '8-9 Yrs', '10-12 Yrs'],
    colors: ['Mustard Yellow & Gold', 'Royal Blue', 'Mint Green'],
    fabric: 'Cotton Silk & Jacquard',
    inStock: true
  },
  {
    id: 'p6',
    name: 'Princess Floral Gown Lehenga for Girls',
    category: 'Kids',
    subcategory: 'Party Wear',
    price: 2999,
    originalPrice: 4200,
    rating: 4.8,
    reviewsCount: 22,
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80',
    tag: 'New',
    description: 'Flouncy tulle and sequin embroidered celebratory gown lehenga designed for festive parties, birthdays, and wedding receptions.',
    features: ['Multi-Layer Tulle Volume', 'Lightweight Sequin Embroidery', 'Breathable Cotton Underskirt', 'Matching Hair Accessory Included'],
    sizes: ['3-4 Yrs', '5-6 Yrs', '7-8 Yrs', '9-10 Yrs'],
    colors: ['Blush Pink', 'Sky Blue', 'Golden Peach'],
    fabric: 'Soft Net & Satin',
    inStock: true
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Rajesh Sharma',
    location: 'Katra Bazar, Gursarai',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Agrawal Selection and Akshra Fashion has been our family’s go-to store! We bought all wedding sherwanis and sarees from here. The fabric quality and prices are far better than big city showrooms in Jhansi.',
    verified: true,
    purchasedItem: 'Royal Heritage Golden Silk Sherwani Set'
  },
  {
    id: 'r2',
    author: 'Pooja Gupta',
    location: 'Gursarai, UP',
    rating: 5,
    date: '1 month ago',
    comment: 'I ordered my bridal lehenga from Akshra Fashion. The fitting was custom made by their store master tailor in just 2 days. Every auntie at my wedding asked where I got such a luxurious crimson lehenga!',
    verified: true,
    purchasedItem: 'Crimson Red Hand-Embroidered Velvet Bridal Lehenga'
  },
  {
    id: 'r3',
    author: 'Amitabh Agrawal',
    location: 'Jhansi District',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Best clothing collection in Bundelkhand! Whether you need Louis Philippe style tuxedos or traditional festival kurtas for kids, they have everything under one roof with genuine warmth and respect.',
    verified: true,
    purchasedItem: 'Louis Italian Classic Navy Suit'
  },
  {
    id: 'r4',
    author: 'Sunita Verma',
    location: 'Katra Bazar Neighbor',
    rating: 5,
    date: '1 week ago',
    comment: 'Very polite behavior of staff, affordable pricing and huge variety of daily wear sarees and kids festive clothes. Akshra Fashion truly lives up to its trusted family name.',
    verified: true,
    purchasedItem: 'Kanjeevaram Pure Zari Silk Saree'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Main Showroom Exterior',
    category: 'Store Front',
    image: '/store/store_front.jpg',
    caption: 'Official entrance and front façade of Akshra Fashion & Agrawal Selection at Katra Bazar, Gursarai.'
  },
  {
    id: 'g2',
    title: 'Grand Showroom Floor & Lighting',
    category: 'Interior',
    image: '/store/store_interior.png',
    caption: 'Air-conditioned main showroom floor featuring ambient blue ceiling lighting and full garment racks.'
  },
  {
    id: 'g3',
    title: 'Suitings & Fabric Counter',
    category: 'Men & Fabrics',
    image: '/store/suitings_counter.jpg',
    caption: 'Extensive range of premium unstitched suitings, shirtings, and ethnic dress materials.'
  },
  {
    id: 'g4',
    title: 'Saree & Bridal Trousseau Section',
    category: 'Bridal & Sarees',
    image: '/store/saree_counter.jpg',
    caption: 'Spacious padded seating counters for selecting wedding sarees, bridal lehengas, and heavy dupattas.'
  },
  {
    id: 'g5',
    title: 'Kids & Apparel Display',
    category: 'Kids & Uniforms',
    image: '/store/kids_display.png',
    caption: 'Vibrant kids festive wear, polo shirts, and school uniform collection.'
  }
];

export const OCCASIONS: OccasionItem[] = [
  {
    id: 'o1',
    title: 'Wedding Trousseau',
    subtitle: 'Grooms & Brides Luxury',
    image: '/store/saree_counter.jpg',
    tagline: 'Royal Zardozi Sherwanis & Designer Lehengas'
  },
  {
    id: 'o2',
    title: 'Festive Celebrations',
    subtitle: 'Diwali, Eid, Teej & Rakhi',
    image: '/store/store_interior.png',
    tagline: 'Silk Kurtas, Anarkalis & Bright Ethnic Wear'
  },
  {
    id: 'o3',
    title: 'Office & Executive',
    subtitle: 'Formal Suitings & Shirts',
    image: '/store/suitings_counter.jpg',
    tagline: 'Wrinkle-free Suits, Crisp Shirts & Blazers'
  },
  {
    id: 'o4',
    title: 'Kids & Daily Staples',
    subtitle: 'Comfortable Family Staples',
    image: '/store/kids_display.png',
    tagline: 'Soft Cotton Kurtis, Shirts & School Wear'
  }
];

export const INITIAL_OFFERS: BannerOffer[] = [
  {
    id: 'off1',
    title: 'Shadi & Festive Offer!',
    subtitle: 'Special discounts on Wedding Sherwanis & Bridal Lehengas with complimentary store tailoring.',
    discountBadge: '30% OFF',
    code: 'GURSARAI30',
    validUntil: '2026-11-30',
    bgGradient: 'from-amber-700 via-yellow-600 to-amber-900',
    ctaText: 'Claim Offer at Store',
    active: true
  }
];
