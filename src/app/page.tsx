import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { CoverageMapSection } from '@/components/sections/coverage-map-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { BlogPreviewSection } from '@/components/sections/blog-preview-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CoverageMapSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <ContactSection />
    </>
  );
}
