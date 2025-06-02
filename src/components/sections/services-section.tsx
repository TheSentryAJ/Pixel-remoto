import { services, type Service } from '@/data/services';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function ServiceCard({ service }: { service: Service }) {
  const { Icon, name, description, price } = service;
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
      <CardHeader className="items-center text-center pt-8 pb-4 bg-primary/5">
        <div className="p-4 bg-primary/10 rounded-full inline-block mb-4 border-2 border-primary/20">
          <Icon className="w-10 h-10 text-primary" />
        </div>
        <CardTitle className="font-headline text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col text-center p-6">
        <CardDescription className="text-muted-foreground mb-4 flex-grow">{description}</CardDescription>
        <p className="text-lg font-semibold text-primary mb-6">{price}</p>
        <Button variant="outline" className="mt-auto border-accent text-accent hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent/10 focus:text-accent-foreground" asChild>
          <Link href="#contacto">Solicitar Servicio</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export function ServicesSection() {
  return (
    <Container as="section" id="servicios" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">Nuestros Servicios</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          En Alhaurín Tech Solutions ofrecemos una amplia gama de servicios informáticos para cubrir todas sus necesidades tecnológicas.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Container>
  );
}
