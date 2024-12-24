import React from 'react';
import { Star, Palette, CheckCircle } from 'lucide-react';
import { Artist } from '../types';

interface ArtistCardProps {
  artist: Artist;
  onContact: (artist: Artist) => void;
}

export function ArtistCard({ artist, onContact }: ArtistCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={artist.avatar}
          alt={artist.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
          ${artist.price.from} - ${artist.price.to}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{artist.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-gray-600">{artist.rating.toFixed(1)}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{artist.bio}</p>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Palette className="w-4 h-4 text-purple-500" />
            <span className="text-sm text-gray-600">{artist.completedWorks} works</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-600">Verified Artist</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {artist.specialties.map((specialty) => (
            <span
              key={specialty}
              className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
            >
              {specialty}
            </span>
          ))}
        </div>
        
        <button
          onClick={() => onContact(artist)}
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Commission Artist
        </button>
      </div>
    </div>
  );
}