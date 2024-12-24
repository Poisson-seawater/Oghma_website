import { Artist } from '../types';
import { Artwork } from '../components/ArtworkGrid';

export const SAMPLE_ARTISTS: Artist[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    bio: 'Specializing in watercolor and digital art, I love bringing memories to life through vibrant colors and emotional depth.',
    specialties: ['Watercolor', 'Digital', 'Portraits'],
    price: { from: 150, to: 500 },
    rating: 4.9,
    completedWorks: 127
  },
  {
    id: '2',
    name: 'Marcus Rivera',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    bio: 'Contemporary artist with a passion for transforming memories into unique abstract expressions.',
    specialties: ['Abstract', 'Oil Painting', 'Mixed Media'],
    price: { from: 200, to: 800 },
    rating: 4.8,
    completedWorks: 93
  },
  {
    id: '3',
    name: 'Emma Thompson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    bio: 'Realistic portrait artist dedicated to capturing the essence of your precious moments.',
    specialties: ['Realistic', 'Portraits', 'Pencil Art'],
    price: { from: 180, to: 600 },
    rating: 4.9,
    completedWorks: 156
  }
];

export const SAMPLE_ARTWORKS: Artwork[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5',
    title: 'Summer Wedding Memory',
    description: 'Watercolor interpretation of a beach wedding.',
    memoryDescription: 'A beautiful sunset wedding ceremony by the ocean.'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee',
    title: 'Family Reunion',
    description: 'Oil painting of a multi-generational family gathering.',
    memoryDescription: 'First family reunion after 10 years apart.'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7',
    title: 'Childhood Home',
    description: 'Digital art recreation of a cherished family home.',
    memoryDescription: 'The house where three generations grew up.'
  }
];