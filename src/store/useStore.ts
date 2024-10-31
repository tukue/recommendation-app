import { create } from 'zustand';
import { Product, UserPreference } from '../types';
import { generateRecommendations } from '../utils/recommendations';

interface Store {
  products: Product[];
  userPreferences: UserPreference;
  recommendations: Product[];
  updatePreferences: (preferences: Partial<UserPreference>) => void;
  updateRecommendations: () => void;
}

export const useStore = create<Store>((set, get) => ({
  products: [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      category: 'Electronics',
      description: 'High-quality wireless headphones with noise cancellation',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000',
      rating: 4.8,
      tags: ['audio', 'wireless', 'premium']
    },
    {
      id: '2',
      name: 'Smart Fitness Watch',
      category: 'Wearables',
      description: 'Track your fitness goals with this advanced smartwatch',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=1000',
      rating: 4.6,
      tags: ['fitness', 'smart', 'health']
    },
    // Add more products as needed
  ],
  userPreferences: {
    categories: [],
    priceRange: [0, 1000],
    tags: []
  },
  recommendations: [],
  updatePreferences: (preferences) => {
    set((state) => ({
      userPreferences: { ...state.userPreferences, ...preferences }
    }));
    get().updateRecommendations();
  },
  updateRecommendations: () => {
    const { products, userPreferences } = get();
    const recommendations = generateRecommendations(products, userPreferences);
    set({ recommendations });
  }
}));