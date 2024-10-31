import React from 'react';
import { FilterSection } from './FilterSection';

interface TagFiltersProps {
  selectedTags: string[];
  onTagChange: (tags: string[]) => void;
}

const TAGS = ['premium', 'wireless', 'fitness', 'smart', 'health', 'audio'];

export function TagFilters({ selectedTags, onTagChange }: TagFiltersProps) {
  return (
    <FilterSection title="Tags">
      <div className="flex flex-wrap gap-2">
        {TAGS.map(tag => (
          <button
            key={tag}
            onClick={() => {
              const newTags = selectedTags.includes(tag)
                ? selectedTags.filter(t => t !== tag)
                : [...selectedTags, tag];
              onTagChange(newTags);
            }}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedTags.includes(tag)
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </FilterSection>
  );
}