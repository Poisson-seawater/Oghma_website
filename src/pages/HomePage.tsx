import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeatureSection } from '../components/home/FeatureSection';

export function HomePage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <FeatureSection />
    </div>
  );
}