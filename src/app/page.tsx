
import { HeroSection } from '@/components/sections/hero-section';
import { SupportAreasSection } from '@/components/sections/support-areas-section';
import { BlogSection } from '@/components/sections/blog-section';
import { CoverageMapSection } from '@/components/sections/coverage-map-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SupportAreasSection />
      <BlogSection />
      <CoverageMapSection /> 
      <ContactSection />
    </>
  );
}
