
export const runtime = 'edge';

import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Página no Encontrada | Pixel Remoto',
  description: 'La página que buscas no existe o ha sido movida.',
};

export default function NotFound() {
  return (
    <Container className="text-center py-20">
      <h1 className="text-4xl font-bold text-primary mb-4">404 - Página No Encontrada</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Lo sentimos, la página que estás buscando no se pudo encontrar o ha sido movida.
      </p>
      <Button asChild>
        <Link href="/">Volver a la Página de Inicio</Link>
      </Button>
    </Container>
  );
}
