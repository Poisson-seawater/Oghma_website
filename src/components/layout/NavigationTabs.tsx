import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavigationTabsProps {
  currentView: string;
  onViewChange: (view: any) => void;
  onArtistLogin: () => void;
  isLoggedIn: boolean;
  onLogoClick: () => void;
  Logo: LucideIcon;
}

export function NavigationTabs({
  currentView,
  onViewChange,
  onArtistLogin,
  isLoggedIn,
  onLogoClick,
  Logo,
}: NavigationTabsProps) {
  return (
    <nav className="flex items-center justify-between w-full">
      <button
        onClick={onLogoClick}
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <Logo className="h-6 w-6 text-purple-600" />
        <span className="text-xl font-bold text-gray-900">Oghma</span>
      </button>
      
      <div className="flex items-center gap-6">
        <button
          onClick={() => onViewChange('memory-sharing')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            currentView === 'memory-sharing'
              ? 'bg-purple-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Memory Sharing
        </button>
        <button
          onClick={() => onViewChange('marketplace')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            currentView === 'marketplace'
              ? 'bg-purple-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Marketplace
        </button>
      </div>

      <button
        onClick={onArtistLogin}
        className="px-4 py-2 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
      >
        {isLoggedIn ? 'Artist Dashboard' : 'Artist Login'}
      </button>
    </nav>
  );
}