import { blogPosts } from '@/data/blog-posts';
import { Container } from '@/components/ui/container';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays } from 'lucide-react';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Helper function to generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: 'Artículo no encontrado',
      description: 'El artículo que busca no existe o ha sido movido.',
    };
  }
  return {
    title: `${post.title} | Blog de Alhaurín Tech Solutions`,
    description: post.summary,
  };
}


export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Container className="max-w-3xl py-10 md:py-16">
      <Button variant="outline" asChild className="mb-8 group hover:border-primary">
        <Link href="/#blog" className="text-foreground group-hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Blog
        </Link>
      </Button>

      <article className="bg-card p-6 sm:p-8 md:p-10 rounded-xl shadow-xl border">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarDays className="w-4 h-4 mr-1.5 text-primary/80" />
            {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </header>

        {post.imageUrl && (
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg mb-8 border">
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint={post.dataAiHint || 'technology article'}
              priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none dark:prose-invert text-foreground/90">
          <p className="lead text-xl mb-6">{post.summary}</p>
          <p className="mt-6">
            Este es un contenido de marcador de posición para el artículo del blog. En una aplicación real,
            aquí se mostraría el contenido completo del artículo, posiblemente obtenido de un CMS o
            archivos markdown. Por ahora, simularemos un texto más extenso.
          </p>
          <h2 className="font-headline text-2xl mt-8 mb-4 text-primary/90 border-b pb-2">Profundizando en el Tema</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam id dolor id nibh ultricies vehicula ut id elit.
            Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum.
          </p>
          <p>
            Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            Nullam quis risus eget urna mollis ornare vel eu leo.
          </p>
          <blockquote className="border-l-4 border-primary bg-primary/5 p-4 my-6 italic text-primary/90">
            "Una cita relevante o un consejo clave podría ir aquí para enfatizar un punto importante del artículo."
          </blockquote>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Curabitur blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
        </div>
      </article>
    </Container>
  );
}
