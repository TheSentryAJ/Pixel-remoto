import type { LucideIcon } from 'lucide-react';
import { Wrench, Network, ShieldCheck, Laptop, HardDrive, HelpCircle, Download } from 'lucide-react';

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  Icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: 'reparacion-pc',
    name: 'Reparación de Ordenadores',
    description: 'Solución de problemas de hardware y software, optimización y mantenimiento.',
    price: 'Desde 40€',
    Icon: Wrench,
  },
  {
    id: 'configuracion-redes',
    name: 'Configuración de Redes',
    description: 'Instalación y configuración de redes domésticas y para pequeñas empresas.',
    price: 'Desde 50€',
    Icon: Network,
  },
  {
    id: 'eliminacion-virus',
    name: 'Eliminación de Virus',
    description: 'Limpieza de malware, spyware y virus. Protección antivirus.',
    price: 'Desde 45€',
    Icon: ShieldCheck,
  },
  {
    id: 'mantenimiento-equipos',
    name: 'Mantenimiento Preventivo',
    description: 'Revisiones periódicas para asegurar el óptimo funcionamiento de tus equipos.',
    price: 'Consultar',
    Icon: Laptop,
  },
  {
    id: 'instalacion-software',
    name: 'Instalación de Software',
    description: 'Instalación de software como AutoCAD, Office, Adobe Suite, etc.',
    price: 'Consultar',
    Icon: Download, // Changed from Smartphone to Download
  },
  {
    id: 'asesoramiento',
    name: 'Asesoramiento Tecnológico',
    description: 'Consultoría para la adquisición de nuevo equipamiento o software.',
    price: 'Consultar',
    Icon: HelpCircle,
  },
];
