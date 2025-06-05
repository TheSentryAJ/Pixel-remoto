
import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Code, Settings, Brain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre Mí | Antonio J. - Técnico Informático',
  description: 'Conoce a Antonio J., el técnico detrás de Pixel Remoto. Apasionado por la tecnología con un enfoque resolutivo y proactivo para cada desafío técnico.',
};

export default function SobreMiPage() {
  return (
    <Container as="section" className="py-12 md:py-16 lg:py-20">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1">
          <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-xl border-4 border-background">
            <Image
              src="https://placehold.co/400x500.png" // Placeholder, reemplazar con una foto tuya
              alt="Antonio J. - Técnico Informático"
              layout="fill"
              objectFit="cover"
              className="transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              data-ai-hint="professional portrait tech"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-primary mb-6">
            Soy Antonio J.
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Un apasionado de la tecnología y la resolución de problemas complejos. Desde que tengo memoria, me ha fascinado entender cómo funcionan las cosas, especialmente en el ámbito de la informática y los sistemas digitales.
          </p>
          <p className="text-muted-foreground mb-4">
            Con varios años de experiencia en el sector, he tenido la oportunidad de enfrentarme a una amplia variedad de desafíos técnicos, desde la optimización de equipos para mejorar su rendimiento hasta la configuración de redes seguras y la recuperación de datos. Cada problema es un nuevo rompecabezas que me motiva a encontrar la solución más eficiente y efectiva.
          </p>
          <p className="text-muted-foreground mb-6">
            Este espacio, "Pixel Remoto", nació de mi deseo de compartir mis conocimientos y ofrecer asistencia a quienes se sienten abrumados por la tecnología o simplemente necesitan una mano experta para que sus dispositivos funcionen como deberían. Mi enfoque es siempre proactivo, buscando no solo solucionar el problema inmediato, sino también prevenir futuras incidencias.
          </p>
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <Settings className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-muted-foreground"><strong className="text-foreground">Enfoque Resolutivo:</strong> Me centro en identificar la raíz del problema para ofrecer soluciones duraderas.</p>
            </div>
            <div className="flex items-start gap-3">
              <Brain className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-muted-foreground"><strong className="text-foreground">Aprendizaje Continuo:</strong> El mundo tecnológico evoluciona constantemente, y yo con él. Siempre estoy investigando y aprendiendo nuevas herramientas y técnicas.</p>
            </div>
             <div className="flex items-start gap-3">
              <Code className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-muted-foreground"><strong className="text-foreground">Comunicación Clara:</strong> Creo firmemente en explicar los problemas y las soluciones de manera que cualquiera pueda entender, sin tecnicismos innecesarios.</p>
            </div>
          </div>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/#contacto">Hablemos de tu proyecto o consulta</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
