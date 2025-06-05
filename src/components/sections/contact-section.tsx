
import { ContactForm } from '@/components/contact-form';
import { Container } from '@/components/ui/container';
import { Mail, Linkedin, MessageSquare } from 'lucide-react'; // Replaced Phone with Linkedin or similar

export function ContactSection() {
  return (
    <Container as="section" id="contacto" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">¿Hablamos?</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Si tienes alguna pregunta, sugerencia o simplemente quieres charlar sobre tecnología, no dudes en escribirme.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3 bg-card p-6 sm:p-8 rounded-xl shadow-xl border">
          <ContactForm />
        </div>
        <div className="md:col-span-2 space-y-8 bg-secondary/50 p-6 sm:p-8 rounded-xl shadow-lg">
          <div>
            <h3 className="text-xl font-semibold font-headline text-primary mb-3 flex items-center gap-2">
              <Mail className="w-6 h-6 text-accent" />
              Escríbeme
            </h3>
            <a href="mailto:info@pixelremoto.com" className="text-muted-foreground hover:text-accent transition-colors block">info@pixelremoto.com</a>
            <p className="text-sm text-muted-foreground mt-1">Siempre estoy abierto a nuevas ideas y colaboraciones.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-headline text-primary mb-3 flex items-center gap-2">
              <Linkedin className="w-6 h-6 text-accent" /> {/* Placeholder for LinkedIn */}
              Conecta Conmigo
            </h3>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors block">
              Visita mi perfil de LinkedIn (Próximamente)
            </a>
             <p className="text-sm text-muted-foreground mt-1">Puedes encontrar más sobre mi trayectoria profesional.</p>
          </div>
           <div>
            <h3 className="text-xl font-semibold font-headline text-primary mb-3 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-accent" />
              Sobre este Espacio
            </h3>
            <p className="text-muted-foreground">Este es mi rincón digital personal donde comparto mi pasión por la tecnología, proyectos en los que he trabajado y artículos que espero encuentres útiles.</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
