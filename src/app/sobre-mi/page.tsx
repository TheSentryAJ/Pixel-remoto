
import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Code, Settings, Brain } from 'lucide-react';

const siteUrl = 'https://pixel-remoto.pages.dev'; 

export const metadata: Metadata = {
  title: 'Sobre Mí: Un Técnico Informático Apasionado por la Tecnología | Pixel Remoto',
  description: 'Conoce a Antonio J., técnico informático experto. Ofrezco asistencia técnica y soporte informático con un enfoque resolutivo. Descubre mi pasión por la tecnología.',
  alternates: {
    canonical: '/sobre-mi',
  },
  openGraph: {
    title: 'Sobre Mí: Un Técnico Informático Apasionado por la Tecnología | Pixel Remoto',
    description: 'Conoce a Antonio J., técnico informático experto. Ofrezco asistencia técnica y soporte informático con un enfoque resolutivo. Descubre mi pasión por la tecnología.',
    url: `${siteUrl}/sobre-mi`,
    type: 'profile',
    profile: {
      firstName: 'Antonio',
      lastName: 'J.', 
      username: 'AntonioJPixelRemoto', 
      gender: 'male', 
    },
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Antonio J. - Técnico Informático Experto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Mí: Un Técnico Informático Apasionado por la Tecnología | Pixel Remoto',
    description: 'Conoce a Antonio J., técnico informático experto. Ofrezco asistencia técnica y soporte informático con un enfoque resolutivo.',
    images: [`${siteUrl}/twitter-card.png`],
  },
};

export default function SobreMiPage() {
  return (
    <Container as="section" className="py-12 md:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-primary mb-6 text-center md:text-left">
            Sobre Mí: Un Técnico Informático Apasionado por la Tecnología
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Mi nombre es Antonio J. y desde siempre he sentido una gran pasión por la tecnología. Esta curiosidad me llevó a formarme y a convertirme en <strong>técnico informático</strong>, una profesión que me permite hacer lo que más me gusta: investigar, analizar y encontrar la mejor manera de ofrecer <strong>ayuda informática</strong>.
          </p>
          <p className="text-muted-foreground mb-4">
            Con varios años de experiencia en el sector, mi trayectoria como <strong>experto en informática</strong> me ha permitido enfrentarme a una amplia variedad de desafíos, desde la optimización de equipos para la <strong>resolución de problemas de PC</strong> hasta la configuración de redes seguras y la recuperación de datos. Cada incidencia es un nuevo rompecabezas que me motiva a encontrar la solución más eficiente y efectiva, proporcionando una <strong>asistencia técnica</strong> de calidad.
          </p>
          <p className="text-muted-foreground mb-6">
            Este espacio, "Pixel Remoto", nació de mi deseo de compartir mis conocimientos y ofrecer <strong>soporte informático</strong> a quienes se sienten abrumados por la tecnología o simplemente necesitan una mano experta para que sus dispositivos funcionen como deberían. Mi enfoque es siempre proactivo, buscando no solo solucionar el problema inmediato con <strong>soporte técnico remoto</strong>, sino también prevenir futuras incidencias.
          </p>
          <div className="space-y-4 mb-8 p-6 bg-secondary/30 rounded-xl border">
            <div className="flex items-start gap-3">
              <Settings className="w-7 h-7 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Enfoque Resolutivo en Soporte Informático</h3>
                <p className="text-muted-foreground text-sm">Me centro en identificar la raíz del problema para ofrecer soluciones duraderas y una asistencia técnica eficaz.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Brain className="w-7 h-7 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Aprendizaje Continuo como Técnico Informático</h3>
                <p className="text-muted-foreground text-sm">El mundo tecnológico evoluciona constantemente, y yo con él. Siempre estoy investigando y aprendiendo nuevas herramientas para mejorar la ayuda informática que proporciono.</p>
              </div>
            </div>
             <div className="flex items-start gap-3">
              <Code className="w-7 h-7 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Comunicación Clara en la Asistencia Técnica</h3>
                <p className="text-muted-foreground text-sm">Creo firmemente en explicar los problemas y las soluciones de manera que cualquiera pueda entender, sin tecnicismos innecesarios, al ofrecer soporte técnico remoto.</p>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/#contacto">Hablemos sobre tu necesidad de soporte</Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
