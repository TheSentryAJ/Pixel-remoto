
import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';
import { SupportAreasSection } from '@/components/sections/support-areas-section';
import { BlogSection } from '@/components/sections/blog-section';
import { CoverageMapSection } from '@/components/sections/coverage-map-section';
import { ContactSection } from '@/components/sections/contact-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';

const siteUrl = 'https://pixel-remoto.pages.dev';

export const metadata: Metadata = {
  title: 'Soporte Informático Remoto | Pixel Remoto - Asistencia Técnica',
  description: '¿Necesitas ayuda informática? Ofrezco soporte informático remoto como técnico especialista. Soluciones para problemas de rendimiento, seguridad y software.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Soporte Informático Remoto | Pixel Remoto - Asistencia Técnica',
    description: '¿Necesitas ayuda informática? Ofrezco soporte informático remoto como técnico especialista. Soluciones para problemas de rendimiento, seguridad y software.',
    url: `${siteUrl}/`,
    type: 'website',
     images: [
      {
        url: `${siteUrl}/og-image.png`, 
        width: 1200,
        height: 630,
        alt: `Logo de Pixel Remoto - Soporte Informático`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soporte Informático Remoto | Pixel Remoto - Asistencia Técnica',
    description: '¿Necesitas ayuda informática? Ofrezco soporte informático remoto como técnico especialista. Soluciones para problemas de rendimiento, seguridad y software.',
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
