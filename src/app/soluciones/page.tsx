
import type { Metadata } from 'next';
import { SupportAreasSection } from '@/components/sections/support-areas-section';
import { Container } from '@/components/ui/container';

const siteUrl = 'https://pixel-remoto.pages.dev';

export const metadata: Metadata = {
  title: 'Asistencia y Soporte Técnico Informático | Pixel Remoto',
  description: 'Como técnico informático, ofrezco soporte en optimización de PC, seguridad, configuración de equipos y más. Descubre cómo puedo ofrecerte asistencia técnica.',
  alternates: {
    canonical: '/soluciones',
  },
  openGraph: {
    title: 'Asistencia y Soporte Técnico Informático | Pixel Remoto',
    description: 'Como técnico informático, ofrezco soporte en optimización de PC, seguridad, configuración de equipos y más. Descubre cómo puedo ofrecerte asistencia técnica.',
    url: `${siteUrl}/soluciones`,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-image.png`, 
        width: 1200,
        height: 630,
        alt: 'Soluciones de Soporte Técnico Informático en Pixel Remoto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asistencia y Soporte Técnico Informático | Pixel Remoto',
    description: 'Como técnico informático, ofrezco soporte en optimización de PC, seguridad, configuración de equipos y más. Descubre cómo puedo ofrecerte asistencia técnica.',
    images: [`${siteUrl}/twitter-card.png`],
  },
};

export default function SolucionesPage() {
  return (
    <>
      <Container as="div" className="py-12 md:py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold font-headline text-primary">Áreas de Soporte Técnico Informático</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Detallo las áreas comunes donde ofrezco mi asistencia técnica. Mi objetivo como técnico informático es proporcionarte soluciones claras y efectivas para tus desafíos tecnológicos, tanto para particulares como para profesionales que necesitan ayuda informática.
        </p>
      </Container>
      <SupportAreasSection /> 
    </>
  );
}
