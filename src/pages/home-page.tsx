import { HeroSection } from '../components/sections/hero-section';
import { BandStorySection } from '../components/sections/band-story-section';
import { GalleryHighlightSection } from '../components/sections/gallery-highlight-section';
import { PerformancesPreviewSection } from '../components/sections/performances-preview-section';
import { BookingCtaSection } from '../components/sections/booking-cta-section';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <BandStorySection />
      <GalleryHighlightSection />
      <PerformancesPreviewSection />
      <BookingCtaSection />
    </main>
  );
}
