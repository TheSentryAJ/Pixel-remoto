
import type { Metadata } from 'next';
import { SupportAreasSection } from '@/components/sections/support-areas-section';
import { Container } from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Soluciones de Soporte Técnico | Pixel Remoto',
  description: 'Descubre cómo puedo ayudarte. Ofrezco asistencia en optimización de PC, eliminación de virus, configuración de equipos y solución de problemas de software.',
};

export default function SolucionesPage() {
  return (
    <>
      <Container as="div" className="py-12 md:py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold font-headline text-primary">Soluciones de Soporte Técnico</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Detallo las áreas comunes donde ofrezco mi asistencia técnica. Mi objetivo es proporcionarte soluciones claras y efectivas para tus desafíos tecnológicos, tanto para particulares como para profesionales.
        </p>
      </Container>
      <SupportAreasSection /> 
      {/* Puedes añadir más contenido específico para esta página si es necesario */}
    </>
  );
}
