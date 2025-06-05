
import type { Metadata } from 'next';
import { articles, type Article } from '@/data/articles';
import { Container } from '@/components/ui/container';
import { notFound } from 'next/navigation';
import { CalendarDays } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';

type Props = {
  params: { slug: string };
};

const siteUrl = 'https://pixel-remoto.pages.dev'; // Reemplaza con tu URL de producción
const siteAuthor = 'Antonio J.';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) {
    return {
      title: 'Artículo no encontrado',
    };
  }
  
  const articlePublishedTime = new Date(article.date).toISOString(); // Asumiendo que article.date es parseable
  // Para image, si tienes una imagen específica por artículo, úsala. Sino una genérica.
  const imageUrl = article.imageUrl || `${siteUrl}/og-image-blog.png`; // Crea og-image-blog.png o usa una imagen por artículo

  return {
    title: `${article.title} | ${siteAuthor}`,
    description: article.excerpt,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | ${siteAuthor}`,
      description: article.excerpt,
      url: `${siteUrl}/blog/${article.slug}`,
      type: 'article',
      publishedTime: articlePublishedTime,
      authors: [siteAuthor],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | ${siteAuthor}`,
      description: article.excerpt,
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.imageUrl || `${siteUrl}/og-image-blog.png`, // Asegúrate que la imagen exista
    "author": {
      "@type": "Person",
      "name": siteAuthor,
      "url": siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Pixel Remoto",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png` // Asegúrate que este logo exista en public
      }
    },
    "datePublished": new Date(article.date).toISOString(),
    "dateModified": new Date(article.date).toISOString(), // Actualizar si hay modificaciones
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${article.slug}`
    }
  };

  return (
    <>
      <Script
        id="blog-posting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Container as="article" className="py-12 md:py-16 lg:py-20">
        <header className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-headline text-primary mb-3">{article.title}</h1>
          <div className="flex items-center justify-center text-sm text-muted-foreground">
            <CalendarDays className="w-4 h-4 mr-2" />
            <span>Publicado el {article.date}</span>
          </div>
        </header>
        
        <div 
          className="prose prose-lg dark:prose-invert max-w-none mx-auto bg-card p-6 sm:p-8 rounded-xl shadow-lg border"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-12 text-center">
          <Link href="/blog" className="text-primary hover:underline">
            &larr; Volver al Blog
          </Link>
        </div>
      </Container>
    </>
  );
}
