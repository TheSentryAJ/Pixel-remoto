
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
    problem: '¿Tu ordenador funciona lento o se bloquea con frecuencia?',
    supportOffered: 'Ofrezco soporte para diagnosticar y optimizar el rendimiento de tu sistema, realizando limpieza de archivos innecesarios, ajustes de configuración y actualizaciones para asegurar que tu equipo funcione a su máxima capacidad.',
    Icon: Activity,
  },
  {
    id: 'seguridad-virus',
    problem: 'Protección contra virus, malware y otras amenazas online',
    supportOffered: 'Proporciono asistencia en la detección y eliminación de software malicioso. Además, te ayudo a configurar herramientas de seguridad y te aconsejo sobre buenas prácticas para proteger tu información y tus dispositivos de futuras amenazas.',
    Icon: ShieldCheck,
  },
  {
    id: 'configuracion-equipos',
    problem: 'Configuración de nuevos equipos y periféricos',
    supportOffered: 'Te asisto en la instalación y configuración completa de tu nuevo ordenador (PC o portátil), impresora, escáner, red Wi-Fi o cualquier otro dispositivo, asegurando que todo funcione correctamente y esté adaptado a tus necesidades desde el primer día.',
    Icon: HardDrive,
  },
  {
    id: 'problemas-wifi',
    problem: '¿Problemas con tu conexión Wi-Fi o red doméstica?',
    supportOffered: 'Te ayudo a solucionar problemas de conectividad, mejorar la cobertura y velocidad de tu Wi-Fi, y a configurar tu red doméstica de forma segura y eficiente para todos tus dispositivos.',
    Icon: Wifi,
  },
  {
    id: 'soporte-impresoras',
    problem: 'Asistencia con impresoras y otros periféricos',
    supportOffered: 'Ofrezco soporte para resolver problemas comunes con impresoras (atascos, problemas de conexión, calidad de impresión) y otros periféricos, además de ayudarte con su configuración inicial.',
    Icon: Printer,
  },
  {
    id: 'consultas-generales',
    problem: 'Otras consultas y dudas tecnológicas',
    supportOffered: 'Si tienes cualquier otra pregunta o necesitas asistencia con algún aspecto tecnológico que no esté listado, no dudes en consultarme. Estoy aquí para ayudarte a encontrar una solución.',
    Icon: HelpCircle,
  },
];
