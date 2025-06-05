
import { projects, type Project } from '@/data/projects';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ListChecks, Settings, CheckCircle } from 'lucide-react';

function ProjectCard({ project }: { project: Project }) {
  const { title, challenge, solution, toolsUsed, result, slug } = project;
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden border">
      <CardHeader className="pt-6 pb-2">
        <CardTitle className="font-headline text-xl text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col p-6 pt-2">
        <div className="mb-4">
          <h4 className="font-semibold text-sm text-foreground/90 mb-1 flex items-center"><ListChecks className="w-4 h-4 mr-2 text-accent" /> El Desafío:</h4>
          <CardDescription className="text-muted-foreground text-sm">{challenge}</CardDescription>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-sm text-foreground/90 mb-1 flex items-center"><Settings className="w-4 h-4 mr-2 text-accent" /> Mi Solución:</h4>
          <CardDescription className="text-muted-foreground text-sm">{solution}</CardDescription>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-sm text-foreground/90 mb-1">Herramientas Utilizadas:</h4>
          <div className="flex flex-wrap gap-2">
            {toolsUsed.map(tool => <Badge key={tool} variant="secondary">{tool}</Badge>)}
          </div>
        </div>
        <div className="mb-6">
          <h4 className="font-semibold text-sm text-foreground/90 mb-1 flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" /> El Resultado:</h4>
          <CardDescription className="text-muted-foreground text-sm">{result}</CardDescription>
        </div>
        {slug && (
          <Button variant="outline" className="mt-auto border-primary text-primary hover:bg-primary/10" asChild>
            <Link href={slug}>Ver Detalles (Próximamente)</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export function ProjectsSection() {
  return (
    <Container as="section" id="proyectos" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">Mis Proyectos y Casos de Estudio</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Aquí presento algunos de los desafíos técnicos que he abordado, detallando el proceso y las soluciones implementadas.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Container>
  );
}
