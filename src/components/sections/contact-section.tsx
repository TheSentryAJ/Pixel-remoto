
import { ContactForm } from '@/components/contact-form';
import { Container } from '@/components/ui/container';
import { Mail, Phone, MapPinIcon } from 'lucide-react';

export function ContactSection() {
  return (
    <Container as="section" id="contacto" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">Contacte con Nosotros</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          ¿Tiene alguna pregunta o necesita ayuda con su tecnología? Rellene el formulario o contáctenos directamente. En Pixel Remoto estamos para ayudarle.
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
              Escríbanos
            </h3>
            <a href="mailto:info@pixelremoto.com" className="text-muted-foreground hover:text-accent transition-colors block">info@pixelremoto.com</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-headline text-primary mb-3 flex items-center gap-2">
              <Phone className="w-6 h-6 text-accent" />
              Llámenos
            </h3>
            <a href="tel:+34684358645" className="text-muted-foreground hover:text-accent transition-colors block">+34 684 358 645 <span className="text-xs">(Teléfono de contacto)</span></a>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-headline text-primary mb-3">Nuestro Horario de Atención</h3>
            <p className="text-muted-foreground">Lunes - Viernes: 9:00 - 18:00</p>
            <p className="text-muted-foreground">Sábados: 10:00 - 14:00 (Servicio Remoto)</p>
            <p className="text-muted-foreground">Domingos: Cerrado</p>
          </div>
           <div>
            <h3 className="text-xl font-semibold font-headline text-primary mb-3 flex items-center gap-2">
              <MapPinIcon className="w-6 h-6 text-accent" />
              Nuestra Cobertura
            </h3>
            <p className="text-muted-foreground">Ofrecemos servicios principalmente remotos.</p>
            <p className="text-sm text-muted-foreground">(Consulte para servicios presenciales en áreas específicas)</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
