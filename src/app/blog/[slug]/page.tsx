export const runtime = 'edge';

import type { Metadata } from 'next';
import { articles } from '@/data/articles';
import { Container } from '@/components/ui/container';
import { notFound } from 'next/navigation';
import { CalendarDays } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';

type Props = {
  params: { slug: string };
};

const siteUrl = 'https://pixel-remoto.pages.dev';
const siteAuthor = 'Antonio J.';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) {
    return {
      title: 'Artículo no encontrado',
    };
  }

  const parsedDate = new Date(article.date);
  let articlePublishedTime: string | undefined = undefined;

  if (!isNaN(parsedDate.getTime())) {
    articlePublishedTime = parsedDate.toISOString();
  } else {
    console.error(`[generateMetadata] Invalid date for article slug '${article.slug}': ${article.date}`);
  }

  const imageUrl = article.imageUrl || `${siteUrl}/og-image-blog.png`;

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

// Removed generateStaticParams function as it conflicts with 'edge' runtime.
// export async function generateStaticParams() {
//   return articles.map((article) => ({
//     slug: article.slug,
//   }));
// }

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const parsedDisplayDate = new Date(article.date);
  const displayDate = !isNaN(parsedDisplayDate.getTime())
    ? parsedDisplayDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
    : 'Fecha inválida';

  let schemaDatePublished: string;
  let schemaDateModified: string;
  const parsedSchemaDate = new Date(article.date);

  if (!isNaN(parsedSchemaDate.getTime())) {
    schemaDatePublished = parsedSchemaDate.toISOString();
    schemaDateModified = parsedSchemaDate.toISOString();
  } else {
    console.error(`[BlogPostingSchema] Invalid date for article slug '${article.slug}': ${article.date}. Using current date as fallback.`);
    const fallbackDate = new Date().toISOString();
    schemaDatePublished = fallbackDate;
    schemaDateModified = fallbackDate;
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.imageUrl || `${siteUrl}/og-image-blog.png`,
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
        "url": `${siteUrl}/logo.png`
      }
    },
    "datePublished": schemaDatePublished,
    "dateModified": schemaDateModified,
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
            <span>Publicado el {displayDate}</span>
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
