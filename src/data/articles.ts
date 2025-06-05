
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string; // e.g., "5 de Junio, 2024"
  imageUrl?: string;
  imageHint?: string;
  slug: string; // Link to the article, '#' for now
}

export const articles: Article[] = [
  {
    id: 'mantener-pc-rapido',
    title: '5 Pasos Esenciales para Mantener tu PC Rápido y Seguro',
    excerpt: 'Descubre las tareas de mantenimiento básicas que puedes realizar para que tu ordenador funcione como el primer día y protegerlo de amenazas comunes.',
    date: '5 de Junio, 2024',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'computer security software',
    slug: '#blog-1',
  },
  {
    id: 'wifi-lento',
    title: '¿Por Qué mi WiFi va Lento? Causas Comunes y Soluciones',
    excerpt: 'Exploramos los motivos más frecuentes detrás de una conexión WiFi lenta y cómo puedes solucionarlos tú mismo en casa.',
    date: '28 de Mayo, 2024',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'wifi router signal',
    slug: '#blog-2',
  },
  {
    id: 'mejores-antivirus-2024',
    title: 'Mi Opinión Sobre los Mejores Antivirus de 2024',
    excerpt: 'Un análisis personal sobre las soluciones antivirus más destacadas del año, sus pros y contras para el usuario doméstico.',
    date: '15 de Mayo, 2024',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'antivirus software interface',
    slug: '#blog-3',
  },
];
