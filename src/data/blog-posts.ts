export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  date: string; // Format YYYY-MM-DD
  imageUrl?: string;
  dataAiHint?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'troubleshooting-common-wifi-issues',
    title: 'Troubleshooting Common Wi-Fi Issues',
    summary: 'Aprende a solucionar los problemas más comunes de Wi-Fi en casa o en la oficina.',
    date: '2024-05-10',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'wifi router',
  },
  {
    id: '2',
    slug: 'speed-up-your-slow-computer',
    title: 'Speed Up Your Slow Computer',
    summary: 'Consejos prácticos para mejorar el rendimiento de un ordenador lento.',
    date: '2024-04-22',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'computer speed',
  },
  {
    id: '3',
    slug: 'protecting-your-computer-from-viruses',
    title: 'Protecting Your Computer from Viruses',
    summary: 'Mantén tu equipo seguro con estas recomendaciones contra virus y malware.',
    date: '2024-03-15',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'computer security',
  },
];
