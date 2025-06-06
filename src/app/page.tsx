
export const runtime = 'edge';

import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';
import { SupportAreasSection } from '@/components/sections/support-areas-section';
import { BlogSection } from '@/components/sections/blog-section';
import { CoverageMapSection } from '@/components/sections/coverage-map-section';
import { ContactSection } from '@/components/sections/contact-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';

const siteUrl = 'https://pixel-remoto.pages.dev';

export const metadata: Metadata = {
  title: 'Pixel Remoto - Soluciones Tecnológicas Innovadoras',
  description: 'Pixel Remoto: Asistencia técnica y soluciones tecnológicas innovadoras para optimizar tu rendimiento y seguridad. Soporte informático experto para tus desafíos tecnológicos.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pixel Remoto - Soluciones Tecnológicas Innovadoras',
    description: 'Pixel Remoto: Asistencia técnica y soluciones tecnológicas innovadoras para optimizar tu rendimiento y seguridad. Soporte informático experto para tus desafíos tecnológicos.',
    url: `${siteUrl}/`,
    type: 'website',
     images: [
      {
        url: `${siteUrl}/og-image.png`, 
        width: 1200,
        height: 630,
        alt: `Logo de Pixel Remoto - Soluciones Tecnológicas`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixel Remoto - Soluciones Tecnológicas Innovadoras',
    description: 'Pixel Remoto: Asistencia técnica y soluciones tecnológicas innovadoras para optimizar tu rendimiento y seguridad. Soporte informático experto para tus desafíos tecnológicos.',
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
