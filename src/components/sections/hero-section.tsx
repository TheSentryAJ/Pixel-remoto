
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-background via-secondary/20 to-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-12 md:gap-16 items-center">
        <div className="text-center md:text-left md:col-span-2 md:pr-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-headline text-primary tracking-tight">
            Explorando Soluciones IT, <span className="block sm:inline text-foreground/80">un Pixel a la Vez</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
            Soy Antonio J., un técnico informático apasionado por la tecnología y la resolución de problemas complejos. En este espacio comparto mis proyectos, guías y reflexiones.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-shadow">
              <Link href="#proyectos">Explora mis Proyectos</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 shadow-sm hover:shadow-md transition-shadow">
              <Link href="#blog">Lee mis Artículos</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-80 md:h-auto md:min-h-[500px] rounded-xl overflow-hidden shadow-2xl group md:col-span-3">
          <Image
            src="https://i.imgur.com/pyOMB4m.png" 
            alt="Escritorio de trabajo tecnológico personal"
            fill={true}
            className="object-cover object-right-center transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
            data-ai-hint="modern workspace technology"
            priority
          />
           <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
