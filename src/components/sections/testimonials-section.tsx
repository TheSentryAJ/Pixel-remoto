"use client";

import type { Testimonial } from '@/data/testimonials';
import { testimonials as allTestimonials } from '@/data/testimonials';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

const TESTIMONIALS_PER_PAGE = 3;
const CHANGE_INTERVAL = 7000; // 7 segundos para la visualización estática
const FADE_DURATION = 500;   // 0.5 segundos para la animación de fundido

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { quote, name, location, avatar } = testimonial;
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <Card className="flex flex-col h-full shadow-lg rounded-xl overflow-hidden border bg-card">
      <CardHeader className="p-6 pb-0">
        <Quote className="w-8 h-8 text-primary/50 mb-2" />
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-2">
        <blockquote className="text-muted-foreground italic text-sm md:text-base">&quot;{quote}&quot;</blockquote>
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
  const [currentPage, setCurrentPage] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const totalPages = Math.ceil(allTestimonials.length / TESTIMONIALS_PER_PAGE);

  const visibleTestimonials = allTestimonials.slice(
    currentPage * TESTIMONIALS_PER_PAGE,
    (currentPage + 1) * TESTIMONIALS_PER_PAGE
  );

  const changePage = useCallback(() => {
    if (totalPages <= 1) return; // No ciclar si solo hay una página

    setIsFading(true);
    setTimeout(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
      setIsFading(false);
    }, FADE_DURATION);
  }, [totalPages]);

  useEffect(() => {
    if (allTestimonials.length <= TESTIMONIALS_PER_PAGE) {
      return; 
    }
    const timer = setInterval(changePage, CHANGE_INTERVAL + FADE_DURATION); // Intervalo + duración del fade para tiempo total
    return () => clearInterval(timer);
  }, [changePage]); // Removed allTestimonials.length

  if (allTestimonials.length === 0) {
    return null; 
  }

  return (
    <Container as="section" id="testimonios" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">Opiniones Sobre Mi Soporte</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          La confianza y satisfacción de quienes han recibido mi asistencia es mi mejor carta de presentación.
        </p>
      </div>
      <div className="relative overflow-hidden min-h-[300px]"> {/* min-h para evitar colapso durante el fade */}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity ease-in-out",
            isFading ? "opacity-0 duration-500" : "opacity-100 duration-500 delay-100" // delay-100 para asegurar que el contenido cambie antes de ser visible
          )}
        >
          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </Container>
  );
}
