import { Product, UserPreference } from '../types';

export function generateRecommendations(products: Product[], preferences: UserPreference): Product[] {
  return products
    .filter(product => {
      const matchesCategory = preferences.categories.length === 0 || 
        preferences.categories.includes(product.category);
      const matchesPrice = product.price >= preferences.priceRange[0] && 
        product.price <= preferences.priceRange[1];
      const matchesTags = preferences.tags.length === 0 || 
        preferences.tags.some(tag => product.tags.includes(tag));
      
      return matchesCategory && matchesPrice && matchesTags;
    })
    .sort((a, b) => {
      // Sort by relevance score
      const scoreA = calculateRelevanceScore(a, preferences);
      const scoreB = calculateRelevanceScore(b, preferences);
      return scoreB - scoreA;
    });
}

function calculateRelevanceScore(product: Product, preferences: UserPreference): number {
  let score = product.rating * 0.5; // Base score from rating

  // Category match bonus
  if (preferences.categories.includes(product.category)) {
    score += 2;
  }

  // Tag match bonus
  const tagMatches = preferences.tags.filter(tag => product.tags.includes(tag)).length;
  score += tagMatches * 0.5;

  return score;
}