import { Mountain } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-muted-foreground">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-primary">
            <Mountain className="h-6 w-6" />
            <span className="font-headline">Antonio - Soluciones Informáticas</span>
          </Link>
          <p className="text-sm">
            &copy; {currentYear} Antonio - Tu Experto Informático. Todos los derechos reservados.
          </p>
          <div className="text-sm">
            <p>Alhaurín el Grande, Málaga</p>
            <p><a href="mailto:contacto@antonio.tech" className="hover:text-primary">contacto@antonio.tech</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
