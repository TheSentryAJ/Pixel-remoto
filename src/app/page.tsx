
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { BlogSection } from '@/components/sections/blog-section';
import { CoverageMapSection } from '@/components/sections/coverage-map-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <BlogSection />
      {/* Considerar si CoverageMapSection sigue siendo relevante */}
      <CoverageMapSection /> 
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
