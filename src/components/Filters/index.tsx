import React from 'react';
import { Sliders } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { CategoryFilters } from './CategoryFilters';
import { PriceFilter } from './PriceFilter';
import { TagFilters } from './TagFilters';

export function Filters() {
  const { userPreferences, updatePreferences } = useStore();

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Sliders className="w-5 h-5 text-indigo-600" />
        <h2 className="text-xl font-semibold">Filters</h2>
      </div>

      <div className="space-y-6">
        <CategoryFilters
          selectedCategories={userPreferences.categories}
          onCategoryChange={(categories) => updatePreferences({ categories })}
        />
        
        <PriceFilter
          maxPrice={userPreferences.priceRange[1]}
          onPriceChange={(priceRange) => updatePreferences({ priceRange })}
        />
        
        <TagFilters
          selectedTags={userPreferences.tags}
          onTagChange={(tags) => updatePreferences({ tags })}
        />
      </div>
    </div>
  );
}