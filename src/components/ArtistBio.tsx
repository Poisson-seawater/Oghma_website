import React from 'react';
import { Artist } from '../types';
import { MapPin, Mail, Camera } from 'lucide-react';

interface ArtistBioProps {
  artist: Artist;
}

export function ArtistBio({ artist }: ArtistBioProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-start gap-6">
        <img
          src={artist.avatar}
          alt={artist.name}
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900">{artist.name}</h1>
          <div className="flex items-center gap-4 mt-2 text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{artist.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Camera className="w-4 h-4" />
              <span>{artist.completedWorks} artworks</span>
            </div>
          </div>
          <p className="mt-4 text-gray-700">{artist.bio}</p>
          <button className="mt-4 inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            <Mail className="w-4 h-4" />
            Contact Artist
          </button>
        </div>
      </div>
    </div>
  );
}