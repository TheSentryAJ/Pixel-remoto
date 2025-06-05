
import type { Metadata } from 'next';
// import NextImage from 'next/image'; // Ya no es necesario
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Code, Settings, Brain } from 'lucide-react';

const siteUrl = 'https://pixel-remoto.pages.dev'; 

export const metadata: Metadata = {
  title: 'Sobre Mí | Antonio J. - Técnico Informático',
  description: 'Conoce a Antonio J., el técnico detrás de Pixel Remoto. Apasionado por la tecnología con un enfoque resolutivo y proactivo para cada desafío técnico.',
  alternates: {
    canonical: '/sobre-mi',
  },
  openGraph: {
    title: 'Sobre Mí | Antonio J. - Técnico Informático',
    description: 'Conoce a Antonio J., el técnico detrás de Pixel Remoto. Apasionado por la tecnología con un enfoque resolutivo y proactivo para cada desafío técnico.',
    url: `${siteUrl}/sobre-mi`,
    type: 'profile',
    profile: {
      firstName: 'Antonio',
      lastName: 'J.', 
      username: 'AntonioJPixelRemoto', 
      gender: 'male', 
    },
    images: [ // Puedes mantener una imagen OG diferente si quieres, o eliminarla si no tienes una específica
      {
        url: `${siteUrl}/og-image.png`, // Imagen genérica del sitio para OG
        width: 1200,
        height: 630,
        alt: 'Antonio J. - Técnico Informático',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Mí | Antonio J. - Técnico Informático',
    description: 'Conoce a Antonio J., el técnico detrás de Pixel Remoto. Apasionado por la tecnología con un enfoque resolutivo y proactivo para cada desafío técnico.',
    images: [`${siteUrl}/twitter-card.png`], // Imagen genérica del sitio para Twitter Card
  },
};

export default function SobreMiPage() {
  return (
    <Container as="section" className="py-12 md:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto"> {/* Contenedor para centrar y limitar el ancho del texto */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-primary mb-6 text-center md:text-left">
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
          <div className="space-y-4 mb-8 p-6 bg-secondary/30 rounded-xl border">
            <div className="flex items-start gap-3">
              <Settings className="w-7 h-7 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Enfoque Resolutivo</h3>
                <p className="text-muted-foreground text-sm">Me centro en identificar la raíz del problema para ofrecer soluciones duraderas.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Brain className="w-7 h-7 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Aprendizaje Continuo</h3>
                <p className="text-muted-foreground text-sm">El mundo tecnológico evoluciona constantemente, y yo con él. Siempre estoy investigando y aprendiendo nuevas herramientas y técnicas.</p>
              </div>
            </div>
             <div className="flex items-start gap-3">
              <Code className="w-7 h-7 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Comunicación Clara</h3>
                <p className="text-muted-foreground text-sm">Creo firmemente en explicar los problemas y las soluciones de manera que cualquiera pueda entender, sin tecnicismos innecesarios.</p>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/#contacto">Hablemos de tu proyecto o consulta</Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
