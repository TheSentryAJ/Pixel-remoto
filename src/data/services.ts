import type { LucideIcon } from 'lucide-react';
import { Wrench, Network, ShieldCheck, Laptop, Smartphone, HelpCircle } from 'lucide-react';

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
    id: 'reparacion-moviles',
    name: 'Reparación de Móviles',
    description: 'Solución a problemas comunes en smartphones y tablets.',
    price: 'Desde 30€',
    Icon: Smartphone,
  },
  {
    id: 'asesoramiento',
    name: 'Asesoramiento Tecnológico',
    description: 'Consultoría para la adquisición de nuevo equipamiento o software.',
    price: 'Consultar',
    Icon: HelpCircle,
  },
];
