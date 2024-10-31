import React from 'react';
import { Sliders } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Filters() {
  const { userPreferences, updatePreferences } = useStore();

  const categories = ['Electronics', 'Wearables', 'Accessories', 'Audio'];
  const tags = ['premium', 'wireless', 'fitness', 'smart', 'health', 'audio'];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Sliders className="w-5 h-5 text-indigo-600" />
        <h2 className="text-xl font-semibold">Filters</h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Categories</h3>
          <div className="space-y-2">
            {categories.map(category => (
              <label key={category} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={userPreferences.categories.includes(category)}
                  onChange={(e) => {
                    const newCategories = e.target.checked
                      ? [...userPreferences.categories, category]
                      : userPreferences.categories.filter(c => c !== category);
                    updatePreferences({ categories: newCategories });
                  }}
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-600">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Price Range</h3>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="1000"
              step="50"
              value={userPreferences.priceRange[1]}
              onChange={(e) => {
                updatePreferences({
                  priceRange: [0, parseInt(e.target.value)]
                });
              }}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>$0</span>
              <span>${userPreferences.priceRange[1]}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => {
                  const newTags = userPreferences.tags.includes(tag)
                    ? userPreferences.tags.filter(t => t !== tag)
                    : [...userPreferences.tags, tag];
                  updatePreferences({ tags: newTags });
                }}
                className={`px-3 py-1 rounded-full text-sm ${
                  userPreferences.tags.includes(tag)
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}