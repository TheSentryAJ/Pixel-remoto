
import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';
import { SupportAreasSection } from '@/components/sections/support-areas-section';
import { BlogSection } from '@/components/sections/blog-section';
import { CoverageMapSection } from '@/components/sections/coverage-map-section';
import { ContactSection } from '@/components/sections/contact-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';

const siteUrl = 'https://pixel-remoto.pages.dev'; // Reemplaza con tu URL de producción

// Metadata para la página de inicio ya se define en layout.tsx de forma global y con plantilla.
// Podemos sobreescribir o añadir específicamente para la home aquí si es necesario.
export const metadata: Metadata = {
  title: 'Pixel Remoto | Soporte Informático y Soluciones Técnicas',
  description: 'Ofrezco soporte y asistencia informática remota para solucionar tus desafíos tecnológicos. Optimización de rendimiento, seguridad, configuración y más.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pixel Remoto | Soporte Informático y Soluciones Técnicas',
    description: 'Ofrezco soporte y asistencia informática remota para solucionar tus desafíos tecnológicos. Optimización de rendimiento, seguridad, configuración y más.',
    url: `${siteUrl}/`,
    type: 'website',
     images: [
      {
        url: `${siteUrl}/og-image.png`, 
        width: 1200,
        height: 630,
        alt: `Logo de Pixel Remoto`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixel Remoto | Soporte Informático y Soluciones Técnicas',
    description: 'Ofrezco soporte y asistencia informática remota para solucionar tus desafíos tecnológicos. Optimización de rendimiento, seguridad, configuración y más.',
    images: [`${siteUrl}/twitter-card.png`],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SupportAreasSection />
      <BlogSection />
      <TestimonialsSection /> 
      <CoverageMapSection /> 
      <ContactSection />
    </>
  );
}
