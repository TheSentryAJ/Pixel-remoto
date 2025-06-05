
import { ContactForm } from '@/components/contact-form';
import { Container } from '@/components/ui/container';
import { Mail, Linkedin, MessageSquare } from 'lucide-react';

export function ContactSection() {
  return (
    <Container as="section" id="contacto" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">¿Necesitas Asistencia?</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Si estás experimentando algún problema técnico o tienes alguna consulta, no dudes en ponerte en contacto. Estoy aquí para ayudarte.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3 bg-card p-6 sm:p-8 rounded-xl shadow-xl border">
           <p className="text-muted-foreground mb-6 text-sm">
            Describe tu situación o el problema que estás experimentando en el siguiente formulario y me pondré en contacto contigo lo antes posible para explorar cómo puedo asistirte.
          </p>
          <ContactForm />
        </div>
        <div className="md:col-span-2 space-y-8 bg-secondary/50 p-6 sm:p-8 rounded-xl shadow-lg">
          <div>
            <h3 className="text-xl font-semibold font-headline text-primary mb-3 flex items-center gap-2">
              <Mail className="w-6 h-6 text-accent" />
              Escríbeme Directamente
            </h3>
            <a href="mailto:info@pixelremoto.com" className="text-muted-foreground hover:text-accent transition-colors block">info@pixelremoto.com</a>
            <p className="text-sm text-muted-foreground mt-1">Para consultas de soporte o cualquier duda técnica.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-headline text-primary mb-3 flex items-center gap-2">
              <Linkedin className="w-6 h-6 text-accent" />
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
            <p className="text-muted-foreground">Este es mi rincón digital personal donde comparto mi pasión por la tecnología y ofrezco mi asistencia para resolver problemas técnicos. También encontrarás artículos y guías que espero te sean útiles.</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
