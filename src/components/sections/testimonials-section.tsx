
import { testimonials, type Testimonial } from '@/data/testimonials';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // Asumiendo que tienes Avatars
import { Quote } from 'lucide-react';

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { quote, name, location, avatar } = testimonial;
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <Card className="flex flex-col h-full shadow-lg rounded-xl overflow-hidden border bg-card">
      <CardHeader className="p-6 pb-0">
        <Quote className="w-8 h-8 text-primary/50 mb-2" />
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-2">
        <blockquote className="text-muted-foreground italic">"{quote}"</blockquote>
      </CardContent>
      <CardFooter className="p-6 pt-2 flex items-center gap-3">
        <Avatar className="h-10 w-10">
          {avatar && <AvatarImage src={avatar} alt={name} />}
          <AvatarFallback className="bg-primary/20 text-primary font-semibold">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-sm text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{location}</p>
        </div>
      </CardFooter>
    </Card>
  );
}

export function TestimonialsSection() {
  return (
    <Container as="section" id="testimonios" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">Opiniones Sobre Mi Soporte</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          La confianza y satisfacción de quienes han recibido mi asistencia es mi mejor carta de presentación.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </Container>
  );
}
