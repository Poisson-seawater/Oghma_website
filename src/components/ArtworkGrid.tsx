import React from 'react';

export interface Artwork {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  memoryDescription: string;
}

interface ArtworkGridProps {
  artworks: Artwork[];
}

export function ArtworkGrid({ artworks }: ArtworkGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="group relative">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="mt-2">
            <h3 className="text-lg font-medium text-gray-900">{artwork.title}</h3>
            <p className="text-sm text-gray-500 line-clamp-2">{artwork.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}