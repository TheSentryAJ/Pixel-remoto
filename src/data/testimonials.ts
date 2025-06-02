export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  location?: string; // e.g., Alhaurín el Grande
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Laura G.',
    quote: 'Servicio rápido y muy profesional. Mi ordenador va como nuevo. ¡Totalmente recomendable!',
    location: 'Alhaurín el Grande',
  },
  {
    id: '2',
    name: 'Carlos M.',
    quote: 'Tenía un problema con la red de mi oficina y lo solucionaron en tiempo récord. Muy eficientes.',
    location: 'Coín',
  },
  {
    id: '3',
    name: 'Ana R.',
    quote: 'Excelente atención al cliente y precios justos. Me ayudaron a configurar todo mi equipo nuevo.',
    location: 'Málaga',
  },
];
