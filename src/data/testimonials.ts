
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
    id: 'ana-p', 
    quote: "Necesitaba configurar una red segura en mi pequeño negocio y no sabía por dónde empezar. Antonio me guio en todo el proceso, explicando cada paso. Su paciencia y conocimiento son destacables. Ahora todo funciona perfectamente.",
    name: "Ana P.",
    location: "Coín",
  },
  {
    id: 'javier-m',
    quote: "Tenía problemas constantes con mi impresora que nadie sabía solucionar. Antonio dio con la tecla rápidamente y ahora imprime sin fallos. ¡Un alivio!",
    name: "Javier M.",
    location: "Alhaurín el Grande",
  },
  {
    id: 'sofia-l',
    quote: "Actualicé mi PC y varios programas dejaron de funcionar. Antonio revisó las compatibilidades y reinstaló todo correctamente. Muy eficiente y claro en sus explicaciones.",
    name: "Sofía L.",
    location: "Fuengirola",
  },
  {
    id: 'david-b',
    quote: "Mi conexión a internet era inestable, especialmente para jugar online. Antonio optimizó la configuración de mi router y la red. Ahora va como la seda. ¡Gracias!",
    name: "David B.",
    location: "Cártama",
  }
];

