
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

const siteName = 'Pixel Remoto';
const siteUrl = 'https://pixel-remoto.pages.dev';
const siteDescription = 'Como técnico informático, ofrezco soporte y asistencia para resolver tus desafíos tecnológicos. Ayuda con la optimización de rendimiento, seguridad y software.';
const siteAuthor = 'Antonio J.';
const twitterHandle = '@tuTwitter'; // Reemplazar con el real si existe
const logoUrl = `${siteUrl}/logo.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Soporte Informático Remoto | ${siteName} - Asistencia Técnica`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  generator: 'Next.js',
  applicationName: siteName,
  referrer: 'origin-when-cross-origin',
  keywords: ['soporte informático', 'asistencia técnica', 'soluciones IT', 'Antonio J', 'reparación PC', 'seguridad informática', 'blog tecnología', 'tecnico informatico', 'ayuda informatica', 'soporte tecnico remoto', 'resolucion de problemas de PC', 'experto en informatica'],
  authors: [{ name: siteAuthor, url: siteUrl }],
  creator: siteAuthor,
  publisher: siteAuthor,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: {
      default: `Soporte Informático Remoto | ${siteName} - Asistencia Técnica`,
      template: `%s | ${siteName}`,
    },
    description: siteDescription,
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `Logo de ${siteName}`,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: `Soporte Informático Remoto | ${siteName} - Asistencia Técnica`,
      template: `%s | ${siteName}`,
    },
    description: siteDescription,
    site: twitterHandle,
    creator: twitterHandle,
    images: [`${siteUrl}/twitter-card.png`],
  },
  verification: {
    google: 'tVPYb8090VaVMWqQqULdNxWz19G-GHKBxGH-ZMTzofM', // Asegúrate que esta es la correcta
    other: {
      me: ['ajmanza98@gmail.com', siteUrl], // Actualizar si es necesario
      msvalidate: ['E63AA6497EF2E996A8F141795872DC89'], // Asegúrate que esta es la correcta
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F5F5' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
  ],
  colorScheme: 'light dark',
};

const siteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": siteName,
  "url": siteUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${siteUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Pixel Remoto",
    "logo": {
      "@type": "ImageObject",
      "url": logoUrl, // Usará /logo.png
    }
  }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": siteAuthor,
  "url": siteUrl,
  "sameAs": [
    // "https://www.linkedin.com/in/tu-perfil/",
    // "https://twitter.com/tuTwitter"
  ],
  "jobTitle": "Técnico Informático",
  "worksFor": {
    "@type": "Organization",
    "name": siteName
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
<head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
<body className="font-body antialiased flex flex-col min-h-screen bg-background text-foreground">
          <a href="#main-content" className="skip-to-content-link">
            Saltar al contenido principal
          </a>
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        <Script id="service-worker-registration">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                  .then(registration => {
                    console.log('Service Worker registrado con éxito:', registration);
                  })
                  .catch(error => {
                    console.log('Error al registrar el Service Worker:', error);
                  });
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
