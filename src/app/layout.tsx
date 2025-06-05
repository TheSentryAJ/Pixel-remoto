
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Pixel Remoto - Soluciones Tecnológicas Innovadoras',
  description: 'Pixel Remoto ofrece servicios informáticos profesionales y soluciones tecnológicas para empresas y particulares.',
  icons: {
    icon: '/favicon.ico',
  },
  // verification object can also be used for Google, but a direct meta tag is also fine
  // verification: {
  //   google: 'google7a63ca12341af4b3',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <head>
        <meta name="google-site-verification" content="tVPYb8090VaVMWqQqULdNxWz19G-GHKBxGH-ZMTzofM" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Removed the direct Inter link to prefer next/font */}
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
