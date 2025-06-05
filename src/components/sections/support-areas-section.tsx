
import { supportAreas, type SupportArea } from '@/data/support-areas';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function SupportAreaCard({ area }: { area: SupportArea }) {
  const { problem, supportOffered, Icon } = area;
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden border">
      <CardHeader className="pt-6 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <Icon className="w-8 h-8 text-primary" />
          <CardTitle className="font-headline text-xl text-primary">{problem}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col p-6 pt-0">
        <CardDescription className="text-muted-foreground text-sm mb-6">{supportOffered}</CardDescription>
        <Button variant="outline" className="mt-auto border-accent text-accent hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent/10 focus:text-accent-foreground" asChild>
          <Link href="#contacto">Consultar sobre esto</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export function SupportAreasSection() {
  return (
    <Container as="section" id="areas-de-soporte" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">¿Cómo Puedo Ayudarte?</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Aquí describo algunas de las áreas comunes donde ofrezco mi asistencia técnica. Mi objetivo es proporcionarte soluciones claras y efectivas para tus desafíos tecnológicos.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {supportAreas.map((area) => (
          <SupportAreaCard key={area.id} area={area} />
        ))}
      </div>
    </Container>
  );
}
