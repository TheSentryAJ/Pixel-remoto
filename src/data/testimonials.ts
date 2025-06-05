
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
  },
  {
    id: 'elena-v',
    quote: "El ordenador de mi hijo no arrancaba y tenía un trabajo importante. Antonio respondió rápido y pudo solucionar el problema el mismo día. Un servicio excelente y muy amable.",
    name: "Elena V.",
    location: "Marbella",
  },
  {
    id: 'pablo-s',
    quote: "Quería montar un pequeño servidor en casa para mis archivos y no sabía cómo. Antonio me asesoró sobre el hardware y me ayudó con toda la configuración. Ahora tengo mi nube personal.",
    name: "Pablo S.",
    location: "Mijas",
  },
  {
    id: 'lucia-n',
    quote: "Mi correo electrónico había sido hackeado. Estaba muy preocupada. Antonio me ayudó a recuperar la cuenta y a reforzar la seguridad. Me sentí mucho más tranquila después.",
    name: "Lucía N.",
    location: "Estepona",
  },
  {
    id: 'fernando-c',
    quote: "Compré un ordenador nuevo y necesitaba transferir todos mis datos y programas del antiguo. Antonio hizo todo el proceso de forma rápida y sin perder nada. Muy profesional.",
    name: "Fernando C.",
    location: "Benalmádena",
  },
  {
    id: 'marta-h',
    quote: "Tenía dudas sobre qué software de edición de vídeo usar y cómo configurarlo. La asesoría de Antonio fue muy útil, me recomendó la mejor opción para mis necesidades y presupuesto.",
    name: "Marta H.",
    location: "Torremolinos",
  },
  {
    id: 'roberto-a',
    quote: "Después de una actualización, mi Wi-Fi dejó de funcionar. Antonio se conectó de forma remota y encontró el problema con los drivers. Solucionado en menos de una hora.",
    name: "Roberto A.",
    location: "Rincón de la Victoria",
  },
  {
    id: 'isabel-q',
    quote: "La pantalla de mi portátil se veía con colores extraños. Pensé que tendría que comprar uno nuevo, pero Antonio identificó que era un problema de configuración del controlador gráfico. ¡Me ahorró mucho dinero!",
    name: "Isabel Q.",
    location: "Antequera",
  },
  {
    id: 'samuel-t',
    quote: "Necesitaba una solución para hacer copias de seguridad automáticas de mis proyectos. Antonio me configuró un sistema robusto y fácil de gestionar. Ahora trabajo con más tranquilidad.",
    name: "Samuel T.",
    location: "Vélez-Málaga",
  },
  {
    id: 'clara-z',
    quote: "Siempre recurro a Antonio para cualquier problema técnico. Su capacidad para explicar las cosas de forma sencilla y su rapidez para encontrar soluciones son invaluables.",
    name: "Clara Z.",
    location: "Alhaurín de la Torre",
  }
];
