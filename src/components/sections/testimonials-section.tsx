import { testimonials, type Testimonial } from '@/data/testimonials';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Quote, Star } from 'lucide-react';

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="bg-card shadow-lg h-full flex flex-col rounded-xl border hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-2">
        <Quote className="w-10 h-10 text-primary/70 mb-2" />
      </CardHeader>
      <CardContent className="flex-grow pt-0">
        <p className="text-muted-foreground italic text-md">"{testimonial.quote}"</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start pt-4 mt-auto border-t">
        <p className="font-semibold text-primary font-headline">{testimonial.name}</p>
        {testimonial.location && (
          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
        )}
        <div className="flex mt-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}

export function TestimonialsSection() {
  return (
    <Container as="section" id="testimonios" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">Lo que Dicen Nuestros Clientes</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          La satisfacción de nuestros clientes es nuestra mayor prioridad. Nos enorgullece la confianza que depositan en nuestro trabajo.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </Container>
  );
}
