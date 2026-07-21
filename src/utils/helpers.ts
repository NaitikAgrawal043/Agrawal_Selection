import type { Product } from '../types';

export const STORE_PHONE = '+917880703740';
export const STORE_WHATSAPP = '919450073521';
export const STORE_ADDRESS = 'Katra Bazar, Gursarai, Jhansi, Uttar Pradesh 284202';

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

export const getWhatsAppLink = (product?: Product, customMessage?: string): string => {
  let message = '';
  if (product) {
    message = `Namaste Akshra Fashion & Agrawal Selection! I am interested in purchasing/inquiring about:\n\n📌 *${product.name}*\nPrice: ${formatCurrency(product.price)}\nCategory: ${product.category}\nFabric: ${product.fabric}\n\nCan you please share availability and store visit details at Katra Bazar, Gursarai?`;
  } else if (customMessage) {
    message = customMessage;
  } else {
    message = `Namaste Akshra Fashion & Agrawal Selection! I would like to inquire about your latest clothing collections and store offers at Katra Bazar, Gursarai.`;
  }
  
  return `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(message)}`;
};

export const getPhoneCallLink = (): string => {
  return `tel:${STORE_PHONE}`;
};

export const getGoogleMapsDirectionsLink = (): string => {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Katra Bazar Gursarai Jhansi Uttar Pradesh India')}`;
};

// LocalStorage helpers for Admin management
export const loadLocalData = <T>(key: string, fallback: T): T => {
  try {
    const data = localStorage.getItem(`akshra_${key}`);
    return data ? JSON.parse(data) : fallback;
  } catch (err) {
    console.error(`Error reading ${key} from localStorage`, err);
    return fallback;
  }
};

export const saveLocalData = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(`akshra_${key}`, JSON.stringify(data));
  } catch (err) {
    console.error(`Error saving ${key} to localStorage`, err);
  }
};
