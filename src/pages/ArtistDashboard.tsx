import React, { useState } from 'react';
import { Upload, Settings } from 'lucide-react';
import { ArtworkGrid } from '../components/ArtworkGrid';
import { SAMPLE_ARTWORKS } from '../data/sampleData';

export function ArtistDashboard() {
  const [activeTab, setActiveTab] = useState<'works' | 'profile'>('works');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Artist Dashboard</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700">
          <Upload className="h-4 w-4 mr-2" />
          Upload Artwork
        </button>
      </div>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('works')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'works'
              ? 'bg-purple-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          My Works
        </button>
        <button
          onClick={() => setActiveTab('profile')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'profile'
              ? 'bg-purple-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Profile Settings
        </button>
      </div>

      {activeTab === 'works' ? (
        <div>
          <ArtworkGrid artworks={SAMPLE_ARTWORKS} />
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg p-6 max-w-2xl">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Profile Settings</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Specialties</label>
              <input
                type="text"
                placeholder="e.g., Watercolor, Digital Art, Portraits"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
            >
              <Settings className="h-4 w-4 mr-2" />
              Save Changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
}