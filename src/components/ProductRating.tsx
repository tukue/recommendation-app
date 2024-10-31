import React from 'react';
import { Star } from 'lucide-react';

interface ProductRatingProps {
  rating: number;
}

export function ProductRating({ rating }: ProductRatingProps) {
  return (
    <div className="bg-white px-2 py-1 rounded-full flex items-center gap-1">
      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      <span className="text-sm font-medium">{rating}</span>
    </div>
  );
}