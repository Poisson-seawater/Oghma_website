import React from 'react';

type AuthMode = 'login' | 'register';
type UserType = 'artist' | 'consumer';

interface AuthTabsProps {
  mode: AuthMode;
  userType: UserType;
  onModeChange: (mode: AuthMode) => void;
  onUserTypeChange: (type: UserType) => void;
}

export function AuthTabs({ mode, userType, onModeChange, onUserTypeChange }: AuthTabsProps) {
  return (
    <div className="space-y-4">
      <div className="flex rounded-lg bg-purple-50 p-1">
        <button
          onClick={() => onModeChange('login')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            mode === 'login'
              ? 'bg-white shadow text-purple-700'
              : 'text-purple-600 hover:text-purple-700'
          }`}
        >
          Login
        </button>
        <button
          onClick={() => onModeChange('register')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            mode === 'register'
              ? 'bg-white shadow text-purple-700'
              : 'text-purple-600 hover:text-purple-700'
          }`}
        >
          Register
        </button>
      </div>

      <div className="flex rounded-lg bg-purple-50 p-1">
        <button
          onClick={() => onUserTypeChange('artist')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            userType === 'artist'
              ? 'bg-white shadow text-purple-700'
              : 'text-purple-600 hover:text-purple-700'
          }`}
        >
          Artist
        </button>
        <button
          onClick={() => onUserTypeChange('consumer')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            userType === 'consumer'
              ? 'bg-white shadow text-purple-700'
              : 'text-purple-600 hover:text-purple-700'
          }`}
        >
          Art Lover
        </button>
      </div>
    </div>
  );
}