import { ContactForm } from '@/components/contact-form';
import { Container } from '@/components/ui/container';
import { Mail, Phone, MapPinIcon } from 'lucide-react';

export function ContactSection() {
  return (
    <Container as="section" id="contacto" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">Contacta Conmigo</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          ¿Tienes alguna pregunta o necesitas ayuda con tu tecnología? Rellena el formulario o contáctame directamente. Soy Antonio, ¡y estoy aquí para ayudarte!
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
            <a href="mailto:contacto@antonio.tech" className="text-muted-foreground hover:text-accent transition-colors block">contacto@antonio.tech</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-headline text-primary mb-3 flex items-center gap-2">
              <Phone className="w-6 h-6 text-accent" />
              Llámame
            </h3>
            <a href="tel:+34600000000" className="text-muted-foreground hover:text-accent transition-colors block">+34 600 000 000 <span className="text-xs">(Número de ejemplo)</span></a>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-headline text-primary mb-3">Mi Horario de Atención</h3>
            <p className="text-muted-foreground">Lunes - Viernes: 9:00 - 18:00</p>
            <p className="text-muted-foreground">Sábados: 10:00 - 14:00 (Bajo cita previa)</p>
            <p className="text-muted-foreground">Domingos: Cerrado</p>
          </div>
           <div>
            <h3 className="text-xl font-semibold font-headline text-primary mb-3 flex items-center gap-2">
              <MapPinIcon className="w-6 h-6 text-accent" />
              Desde Alhaurín para ti
            </h3>
            <p className="text-muted-foreground">Alhaurín el Grande, Málaga</p>
            <p className="text-sm text-muted-foreground">(Servicio a domicilio en toda la provincia)</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
