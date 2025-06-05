
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Antonio J. - Soporte Técnico y Soluciones IT',
  description: 'Asistencia informática y soluciones tecnológicas por Antonio J. Obtén ayuda con problemas de PC, seguridad, configuración de equipos y más.',
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: 'tVPYb8090VaVMWqQqULdNxWz19G-GHKBxGH-ZMTzofM',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* <meta name="google-site-verification" content="tVPYb8090VaVMWqQqULdNxWz19G-GHKBxGH-ZMTzofM" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
