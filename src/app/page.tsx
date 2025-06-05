
import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';
import { SupportAreasSection } from '@/components/sections/support-areas-section';
import { BlogSection } from '@/components/sections/blog-section';
import { CoverageMapSection } from '@/components/sections/coverage-map-section';
import { ContactSection } from '@/components/sections/contact-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section'; // Nueva importación

export const metadata: Metadata = {
  title: 'Pixel Remoto | Soporte Informático y Soluciones Técnicas',
  description: 'Ofrezco soporte y asistencia informática remota para solucionar tus desafíos tecnológicos. Optimización de rendimiento, seguridad, configuración y más.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SupportAreasSection />
      <BlogSection />
      <TestimonialsSection /> {/* Nueva sección añadida */}
      <CoverageMapSection /> 
      <ContactSection />
    </>
  );
}
