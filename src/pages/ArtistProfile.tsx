import React from 'react';
import { ArtistBio } from '../components/ArtistBio';
import { ArtworkGrid } from '../components/ArtworkGrid';
import { SAMPLE_ARTWORKS } from '../data/sampleData';

const EXTENDED_ARTIST = {
  id: '1',
  name: 'Sarah Chen',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  bio: 'Specializing in watercolor and digital art, I love bringing memories to life through vibrant colors and emotional depth. With over 10 years of experience, I focus on capturing the emotions and atmosphere of special moments, transforming them into lasting pieces of art that tell your unique story.',
  specialties: ['Watercolor', 'Digital', 'Portraits'],
  price: { from: 150, to: 500 },
  rating: 4.9,
  completedWorks: 127,
  location: 'San Francisco, CA'
};

export function ArtistProfile() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ArtistBio artist={EXTENDED_ARTIST} />
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Memory Artworks</h2>
        <ArtworkGrid artworks={SAMPLE_ARTWORKS} />
      </div>
    </div>
  );
}