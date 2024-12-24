import React from 'react';
import { MemoryForm } from '../components/MemoryForm';

interface MemorySharingProps {
  onSubmit: (memory: any) => void;
}

export function MemorySharing({ onSubmit }: MemorySharingProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Share Your Memory</h1>
        <p className="text-gray-600 mb-8">
          Tell us about the special moment you'd like to transform into art. Our talented artists
          will bring your memory to life in a unique and beautiful way.
        </p>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <MemoryForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}