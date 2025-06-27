// src/app/page.tsx
'use client';

import FeaturedCasinos from '@/components/FeaturedCasinos';
import Hero from '@/components/Hero';
import TopCasinos from '@/components/TopCasinos';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TopCasinos />
      <FeaturedCasinos />
    </>
  );
}
