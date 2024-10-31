import React from 'react';
import { FilterSection } from './FilterSection';

interface PriceFilterProps {
  maxPrice: number;
  onPriceChange: (range: [number, number]) => void;
}

export function PriceFilter({ maxPrice, onPriceChange }: PriceFilterProps) {
  return (
    <FilterSection title="Price Range">
      <div className="space-y-2">
        <input
          type="range"
          min="0"
          max="1000"
          step="50"
          value={maxPrice}
          onChange={(e) => {
            onPriceChange([0, parseInt(e.target.value)]);
          }}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>$0</span>
          <span>${maxPrice}</span>
        </div>
      </div>
    </FilterSection>
  );
}