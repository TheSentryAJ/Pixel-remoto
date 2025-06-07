"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Mountain } from 'lucide-react'; // Vuelve a importar Mountain
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// NextImage ya no es necesario para el logo aquí, pero podría usarse para otras imágenes.
// Si no se usa para otras imágenes en este archivo, se puede quitar.
// Por ahora lo mantendré en caso de que se use para otras cosas, si no, se puede optimizar luego.
import NextImage from 'next/image';


const navItems = [
  { href: '/#areas-de-soporte', label: 'Áreas de Soporte' },
  { href: '/soluciones', label: 'Soluciones' },
  { href: '/blog', label: 'Blog' },
  { href: '/sobre-mi', label: 'Sobre Mí' },
  { href: '/#contacto', label: 'Contacto' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
            <Mountain className="h-8 w-8" /> {/* Revertido a Mountain de lucide-react */}
            <span className="font-headline">Antonio J.</span>
          </Link>

          {/* Desktop Navigation - Simplified structure */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                     <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary" onClick={() => setMobileMenuOpen(false)}>
                        <Mountain className="h-7 w-7" /> {/* Revertido a Mountain de lucide-react */}
                        <span className="font-headline">Antonio J.</span>
                      </Link>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Cerrar menú</span>
                    </Button>
                  </div>
                  <nav className="flex-grow p-4 space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block py-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
