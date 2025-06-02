import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { MapPin } from 'lucide-react';
import Link from 'next/link';

export function CoverageMapSection() {
  return (
    <Container as="section" id="cobertura" className="bg-secondary/30">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary mb-6 flex items-center gap-3">
            <MapPin className="w-8 h-8" />
            Área de Cobertura
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Brindamos nuestros servicios en <strong>Alhaurín el Grande</strong> y nos desplazamos por toda la <strong>provincia de Málaga</strong>.
          </p>
          <p className="text-muted-foreground mb-4">
            Algunas de las localidades donde ofrecemos servicio incluyen: Coín, Cártama, Alhaurín de la Torre, Mijas, Fuengirola, Marbella, Torremolinos y Málaga capital.
          </p>
          <p className="text-muted-foreground">
            Si tienes dudas sobre si cubrimos tu zona, no dudes en <Link href="#contacto" className="text-primary hover:underline font-medium">contactarnos</Link>.
          </p>
        </div>
        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl border-4 border-background order-1 md:order-2 group">
          <Image
            src="https://placehold.co/800x600.png"
            alt="Mapa de cobertura en la provincia de Málaga"
            layout="fill"
            objectFit="cover"
            data-ai-hint="malaga map"
            className="transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
           <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
        </div>
      </div>
    </Container>
  );
}
