import React from 'react';

interface ProductTagsProps {
  tags: string[];
}

export function ProductTags({ tags }: ProductTagsProps) {
  return (
    <div className="flex gap-2">
      {tags.map(tag => (
        <span 
          key={tag}
          className="px-2 py-1 text-xs bg-indigo-100 text-indigo-800 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}