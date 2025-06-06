
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
const siteDescription = 'Asistencia informática y soluciones tecnológicas por Antonio J. Obtén ayuda con problemas de PC, seguridad, configuración de equipos y más.';
const siteAuthor = 'Antonio J.';
const twitterHandle = '@tuTwitter'; // Reemplaza con tu handle de Twitter si tienes

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | ${siteAuthor} - Soporte Técnico y Soluciones IT`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  generator: 'Next.js',
  applicationName: siteName,
  referrer: 'origin-when-cross-origin',
  keywords: ['soporte informático', 'asistencia técnica', 'soluciones IT', 'Antonio J', 'reparación PC', 'seguridad informática', 'blog tecnología'],
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
      default: `${siteName} | ${siteAuthor} - Soporte Técnico y Soluciones IT`,
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
      default: `${siteName} | ${siteAuthor} - Soporte Técnico y Soluciones IT`,
      template: `%s | ${siteName}`,
    },
    description: siteDescription,
    site: twitterHandle,
    creator: twitterHandle,
    images: [`${siteUrl}/twitter-card.png`],
  },
  verification: {
    google: 'tVPYb8090VaVMWqQqULdNxWz19G-GHKBxGH-ZMTzofM',
    // other: { me: ['my-email@example.com', 'my-link'], }, // Si necesitas otras verificaciones
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
  // appleWebApp: { // Si quieres configurar para PWA en iOS
  //   title: siteName,
  //   statusBarStyle: 'default',
  //   capable: true,
  // },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F5F5' }, // --background HSL(0 0% 96.1%)
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' }, // --background dark HSL(240 10% 3.9%)
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
  }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": siteAuthor,
  "url": siteUrl,
  "sameAs": [
    // "https://www.linkedin.com/in/tu-perfil/", // Añade tus perfiles sociales
    // "https://twitter.com/tuTwitter"
  ],
  "jobTitle": "Técnico Informático"
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
        <meta name="msvalidate.01" content="E63AA6497EF2E996A8F141795872DC89" />
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
