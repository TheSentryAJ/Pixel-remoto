
import type { Metadata } from 'next';
import { articles, type Article } from '@/data/articles';
import { Container } from '@/components/ui/container';
import { notFound } from 'next/navigation';
import { CalendarDays } from 'lucide-react';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) {
    return {
      title: 'Artículo no encontrado',
    };
  }
  return {
    title: `${article.title} | Antonio J.`,
    description: article.excerpt,
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

  return (
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
  );
}
