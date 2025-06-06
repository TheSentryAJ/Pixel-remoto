
import type { LucideIcon } from 'lucide-react';
import { Activity, ShieldCheck, HardDrive, Wifi, Printer, HelpCircle } from 'lucide-react';

export interface SupportArea {
  id: string;
  problem: string;
  supportOffered: string;
  Icon: LucideIcon;
}

export const supportAreas: SupportArea[] = [
  {
    id: 'pc-lento',
    problem: 'Soporte para Optimización de Rendimiento',
    supportOffered: 'Como técnico informático, mi soporte se centra en diagnosticar y resolver los cuellos de botella que ralentizan tu equipo. Recibe asistencia técnica para que tu PC o portátil funcione a su máxima capacidad, solucionando problemas de PC.',
    Icon: Activity,
  },
  {
    id: 'seguridad-virus',
    problem: 'Asistencia en Seguridad y Eliminación de Virus',
    supportOffered: 'Ofrezco soporte informático para eliminar malware y configurar tus defensas. Protege tu información con la ayuda de un experto en informática y evita futuras amenazas con asistencia técnica especializada.',
    Icon: ShieldCheck,
  },
  {
    id: 'configuracion-equipos',
    problem: 'Ayuda con la Configuración de Equipos y Software',
    supportOffered: 'La correcta configuración inicial es clave. Proporciono soporte técnico remoto para instalar tus nuevos dispositivos, periféricos o programas, asegurando un funcionamiento perfecto desde el principio.',
    Icon: HardDrive,
  },
  {
    id: 'problemas-wifi',
    problem: 'Soporte Informático para Redes Wi-Fi',
    supportOffered: 'Si necesitas ayuda informática con tu conexión, te asisto para solucionar problemas de conectividad, mejorar la cobertura y velocidad de tu Wi-Fi, y configurar tu red doméstica de forma segura y eficiente.',
    Icon: Wifi,
  },
  {
    id: 'soporte-impresoras',
    problem: 'Asistencia Técnica para Impresoras y Periféricos',
    supportOffered: 'Ofrezco soporte para resolver problemas comunes con impresoras (atascos, conexión, calidad) y otros periféricos. Un técnico informático puede ayudarte con la configuración y resolución de problemas.',
    Icon: Printer,
  },
  {
    id: 'consultas-generales',
    problem: 'Consultas de Soporte Técnico General',
    supportOffered: 'Si tienes cualquier otra pregunta o necesitas asistencia técnica con algún aspecto tecnológico, no dudes en consultarme. Como experto en informática, estoy aquí para ofrecerte la ayuda informática que necesitas.',
    Icon: HelpCircle,
  },
];
