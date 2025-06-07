
import Link from 'next/link';
import NextImage from 'next/image'; // Importar NextImage
// Mountain ya no se importa

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-muted-foreground">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-primary">
            <NextImage src="/mountain.png" alt="Pixel Remoto Logo" width={24} height={24} />
            <span className="font-headline">Pixel Remoto</span>
          </Link>
          <p className="text-sm">
            &copy; {currentYear} Antonio J. Espacio personal sobre tecnología.
          </p>
          <div className="text-sm">
            <p><a href="mailto:info@pixelremoto.com" className="hover:text-primary">info@pixelremoto.com</a></p>
            {/* <p><a href="tel:+34684358645" className="hover:text-primary">+34 684 358 645</a></p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
