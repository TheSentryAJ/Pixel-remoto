
import { Mountain } from 'lucide-react'; // Consider changing Mountain to a more generic tech icon if desired
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-muted-foreground">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-primary">
            <Mountain className="h-6 w-6" /> {/* You might want to choose a different icon for Pixel Remoto */}
            <span className="font-headline">Pixel Remoto</span>
          </Link>
          <p className="text-sm">
            &copy; {currentYear} Pixel Remoto. Todos los derechos reservados.
          </p>
          <div className="text-sm">
            {/* <p>Alhaurín el Grande, Málaga</p>  Consider if this is still relevant for Pixel Remoto */}
            <p><a href="mailto:info@pixelremoto.com" className="hover:text-primary">info@pixelremoto.com</a></p>
            <p><a href="tel:+34684358645" className="hover:text-primary">+34 684 358 645</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
