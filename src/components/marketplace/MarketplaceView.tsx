import React from 'react';
import { Artist } from '../../types';
import { ArtistCard } from '../ArtistCard';
import { MemoryForm } from '../MemoryForm';

interface MarketplaceViewProps {
  showForm: boolean;
  artists: Artist[];
  onContact: (artist: Artist) => void;
  onSubmitMemory: (memory: any) => void;
  onCloseForm: () => void;
}

export function MarketplaceView({
  showForm,
  artists,
  onContact,
  onSubmitMemory,
  onCloseForm
}: MarketplaceViewProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {showForm ? (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Share Your Memory</h2>
          <MemoryForm
            onSubmit={(memory) => {
              onSubmitMemory(memory);
              onCloseForm();
            }}
          />
        </div>
      ) : (
        <>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transform Your Memories into Art
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with talented artists who will turn your cherished memories into beautiful
              pieces of art. Choose your style and let the magic happen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist) => (
              <ArtistCard
                key={artist.id}
                artist={artist}
                onContact={onContact}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}