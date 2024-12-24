import React from 'react';
import { Palette } from 'lucide-react';
import { NavigationTabs } from './NavigationTabs';

interface HeaderProps {
  currentView: 'marketplace' | 'artist-profile';
  onViewChange: (view: 'marketplace' | 'artist-profile') => void;
  onShareMemory: () => void;
}

export function Header({ currentView, onViewChange, onShareMemory }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Palette className="h-8 w-8 text-purple-600" />
            <h1 className="ml-2 text-2xl font-bold text-gray-900">MemoryArt</h1>
          </div>
          <NavigationTabs
            currentView={currentView}
            onViewChange={onViewChange}
            onShareMemory={onShareMemory}
          />
        </div>
      </div>
    </header>
  );
}