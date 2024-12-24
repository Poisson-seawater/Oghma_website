import React from 'react';
import { NavigationTabs } from './components/layout/NavigationTabs';
import { HomePage } from './pages/HomePage';
import { MarketplaceView } from './components/marketplace/MarketplaceView';
import { MemorySharing } from './pages/MemorySharing';
import { LoginPage } from './pages/LoginPage';
import { ArtistDashboard } from './pages/ArtistDashboard';
import { SAMPLE_ARTISTS } from './data/sampleData';
import { Artist } from './types';
import { ScrollText } from 'lucide-react';
import { useAuth } from './hooks/useAuth';

type View = 'home' | 'memory-sharing' | 'marketplace' | 'login' | 'artist-dashboard';

export default function App() {
  const [currentView, setCurrentView] = React.useState<View>('home');
  const [showForm, setShowForm] = React.useState(false);
  const { user, loading } = useAuth();

  const handleContact = (artist: Artist) => {
    setShowForm(true);
  };

  const handleMemorySubmit = (memory: any) => {
    console.log('Memory submitted:', memory);
  };

  const handleArtistLogin = () => {
    if (user) {
      setCurrentView('artist-dashboard');
    } else {
      setCurrentView('login');
    }
  };

  const handleLogoClick = () => {
    setCurrentView('home');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <NavigationTabs
            currentView={currentView}
            onViewChange={setCurrentView}
            onArtistLogin={handleArtistLogin}
            isLoggedIn={!!user}
            onLogoClick={handleLogoClick}
            Logo={ScrollText}
          />
        </div>
      </header>

      <main>
        {currentView === 'home' && <HomePage />}
        {currentView === 'marketplace' && (
          <MarketplaceView
            showForm={showForm}
            artists={SAMPLE_ARTISTS}
            onContact={handleContact}
            onSubmitMemory={handleMemorySubmit}
            onCloseForm={() => setShowForm(false)}
          />
        )}
        {currentView === 'memory-sharing' && (
          <MemorySharing onSubmit={handleMemorySubmit} />
        )}
        {currentView === 'login' && <LoginPage />}
        {currentView === 'artist-dashboard' && <ArtistDashboard />}
      </main>
    </div>
  );
}