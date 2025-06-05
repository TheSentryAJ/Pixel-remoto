
"use client";

import type { Testimonial } from '@/data/testimonials';
import { testimonials as allTestimonials } from '@/data/testimonials';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { quote, name, location, avatar } = testimonial;
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <Card className="flex flex-col h-full shadow-lg rounded-xl overflow-hidden border bg-card flex-shrink-0 w-[calc(100%/1.1)] sm:w-[calc(100%/2.1)] md:w-[calc(100%/3.1)] mx-2">
      <CardHeader className="p-6 pb-0">
        <Quote className="w-8 h-8 text-primary/50 mb-2" />
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-2">
        <blockquote className="text-muted-foreground italic text-sm md:text-base">"{quote}"</blockquote>
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
  const [duplicatedTestimonials, setDuplicatedTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // Duplicate testimonials for seamless scrolling effect
    // Ensure there are enough items if allTestimonials is short
    if (allTestimonials.length > 0) {
        let extendedTestimonials = [...allTestimonials];
        // To ensure smooth looping, especially if few items, duplicate until a reasonable number
        while (extendedTestimonials.length < 12 && allTestimonials.length > 0) { // Ensure at least 12 items for good visual scroll or more if few originals
            extendedTestimonials = [...extendedTestimonials, ...allTestimonials];
        }
        setDuplicatedTestimonials(extendedTestimonials);
    }
  }, []);

  if (allTestimonials.length === 0) {
    return null; // Don't render section if no testimonials
  }

  // Calculate animation duration based on number of unique testimonials
  // e.g., 5 seconds per testimonial
  const animationDuration = Math.max(allTestimonials.length * 7, 30); // Minimum 30s

  return (
    <Container as="section" id="testimonios" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">Opiniones Sobre Mi Soporte</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          La confianza y satisfacción de quienes han recibido mi asistencia es mi mejor carta de presentación.
        </p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div 
          className="flex whitespace-nowrap"
          style={{ 
            animation: `scroll-testimonials ${animationDuration}s linear infinite`
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </Container>
  );
}
