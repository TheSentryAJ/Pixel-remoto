
export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  avatar?: string; // Opcional, para una futura imagen
}

export const testimonials: Testimonial[] = [
  {
    id: 'laura-g',
    quote: "Mi portátil para teletrabajar iba muy lento y las videollamadas se cortaban. Antonio analizó el problema y optimizó el sistema de forma remota. Ahora funciona como el primer día. Un soporte muy profesional y transparente.",
    name: "Laura G.",
    location: "Málaga",
  },
  {
    id: 'carlos-r',
    quote: "Pensé que había perdido mis fotos por culpa de un virus. Antonio me asistió en la recuperación de los archivos y me ayudó a instalar un sistema de seguridad para que no vuelva a pasar. ¡Totalmente recomendable!",
    name: "Carlos R.",
    location: "Madrid",
  },
  {
    id: 'ana-p', // Un tercer testimonio para variedad
    quote: "Necesitaba configurar una red segura en mi pequeño negocio y no sabía por dónde empezar. Antonio me guio en todo el proceso, explicando cada paso. Su paciencia y conocimiento son destacables. Ahora todo funciona perfectamente.",
    name: "Ana P.",
    location: "Coín",
  }
];
