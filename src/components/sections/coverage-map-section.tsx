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
            Ofrecemos nuestros servicios en <strong>Alhaurín el Grande</strong> y nos desplazamos por toda la <strong>provincia de Málaga</strong>.
          </p>
          <p className="text-muted-foreground mb-4">
            Algunas de las localidades donde ofrecemos servicio incluyen: Coín, Cártama, Alhaurín de la Torre, Mijas, Fuengirola, Marbella, Torremolinos y Málaga capital.
          </p>
          <p className="text-muted-foreground">
            Si tiene dudas sobre si cubrimos su zona, no dude en <Link href="#contacto" className="text-primary hover:underline font-medium">contactarnos</Link>.
          </p>
        </div>
        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl border-4 border-background order-1 md:order-2">
          <iframe
            src="https://maps.google.com/maps?q=Alhaur%C3%ADn%20el%20Grande%2C%20M%C3%A1laga%2C%20Spain&t=&z=9&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de cobertura interactivo de Alhaurín Tech Solutions"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
