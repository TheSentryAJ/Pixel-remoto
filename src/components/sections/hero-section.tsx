
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-background via-secondary/20 to-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-headline text-primary tracking-tight">
            Soluciones Tecnológicas <span className="block sm:inline text-foreground/80">Innovadoras con Pixel Remoto</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
            En Pixel Remoto, ofrecemos servicios expertos de reparación, configuración y asesoramiento informático para particulares y empresas, estés donde estés.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-shadow">
              <Link href="#contacto">Contactar Ahora</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 shadow-sm hover:shadow-md transition-shadow">
              <Link href="#servicios">Ver Servicios</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-72 md:h-auto md:min-h-[450px] rounded-xl overflow-hidden shadow-2xl group">
          <Image
            src="https://i.imgur.com/pyOMB4m.png" 
            alt="Persona trabajando en un portátil en un entorno moderno - Pixel Remoto"
            fill={true}
            className="object-contain transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
            data-ai-hint="IT technology"
            priority
          />
           <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
