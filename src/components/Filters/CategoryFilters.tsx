import React from 'react';
import { FilterSection } from './FilterSection';

interface CategoryFiltersProps {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
}

const CATEGORIES = ['Electronics', 'Wearables', 'Accessories', 'Audio'];

export function CategoryFilters({ selectedCategories, onCategoryChange }: CategoryFiltersProps) {
  return (
    <FilterSection title="Categories">
      <div className="space-y-2">
        {CATEGORIES.map(category => (
          <label key={category} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={(e) => {
                const newCategories = e.target.checked
                  ? [...selectedCategories, category]
                  : selectedCategories.filter(c => c !== category);
                onCategoryChange(newCategories);
              }}
              className="rounded text-indigo-600 focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-600">{category}</span>
          </label>
        ))}
      </div>
    </FilterSection>
  );
}