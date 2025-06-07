
export interface Project {
  id: string;
  title: string;
  challenge: string;
  solution: string;
  toolsUsed: string[];
  result: string;
  imageUrl?: string;
  imageHint?: string;
  slug?: string; // For future dedicated project pages
}

export const projects: Project[] = [
  {
    id: 'optimizacion-teletrabajo',
    title: 'Optimización de PC para Teletrabajo Intensivo',
    challenge: 'Un cliente experimentaba lentitud extrema en su equipo al usar múltiples aplicaciones para teletrabajo (videoconferencias, VPN, software ofimático).',
    solution: 'Realicé un diagnóstico completo, identificando cuellos de botella en el almacenamiento y la RAM. Actualicé el HDD a un SSD NVMe, aumenté la RAM de 8GB a 16GB, optimicé el inicio de Windows, limpié archivos innecesarios y configuré correctamente las aplicaciones de videoconferencia.',
    toolsUsed: ['Diagnóstico de hardware', 'Clonación de disco (Macrium Reflect)', 'Optimización de Windows', 'Configuración de software'],
    result: 'El tiempo de arranque se redujo en un 70%. Las aplicaciones ahora se ejecutan de forma fluida y las videollamadas son estables, mejorando significativamente la productividad.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'computer workspace',
    slug: '#proyecto-1',
  },
  {
    id: 'red-domestica-segura',
    title: 'Configuración de Red Doméstica Segura y Eficiente',
    challenge: 'Una familia necesitaba mejorar la cobertura WiFi en su hogar de dos plantas y asegurar su red contra accesos no autorizados, además de configurar controles parentales.',
    solution: 'Instalé un sistema WiFi Mesh para garantizar cobertura total. Configuré una contraseña WPA3 robusta, segmenté la red para invitados, implementé controles parentales a nivel de router y eduqué a la familia sobre buenas prácticas de seguridad.',
    toolsUsed: ['Sistema WiFi Mesh', 'Configuración de router avanzada', 'Análisis de red WiFi', 'Software de control parental'],
    result: 'Cobertura WiFi completa en toda la casa, velocidad de conexión mejorada, red segura y herramientas para gestionar el acceso a internet de los menores.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'home network router',
    slug: '#proyecto-2',
  },
  {
    id: 'mini-pc-mediacenter',
    title: 'Mini PC como Media Center y Servidor Doméstico',
    challenge: 'Convertir un antiguo Mini PC en un centro multimedia versátil y un pequeño servidor de archivos para el hogar, accesible desde cualquier dispositivo de la red local.',
    solution: 'Instalé una distribución ligera de Linux (ej. Ubuntu Server o DietPi), configuré Kodi para la gestión multimedia, Plex Media Server para streaming, y Samba para compartir archivos. Se optimizó el consumo energético.',
    toolsUsed: ['Linux (Ubuntu Server/DietPi)', 'Kodi', 'Plex Media Server', 'Samba', 'SSH'],
    result: 'El Mini PC ahora funciona como un media center eficiente, capaz de reproducir contenido en 4K y servir archivos a toda la red doméstica, con un bajo consumo energético.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mini pc setup',
    slug: '#proyecto-3',
  },
];
