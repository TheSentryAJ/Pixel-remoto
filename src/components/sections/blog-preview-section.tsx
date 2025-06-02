import Image from 'next/image';
import Link from 'next/link';
import { blogPosts, type BlogPost } from '@/data/blog-posts';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { ArrowRight, CalendarDays } from 'lucide-react';

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl group">
      {post.imageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={post.dataAiHint}
            className="transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <CardTitle className="font-headline text-xl text-primary group-hover:text-accent transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
        <div className="flex items-center text-xs text-muted-foreground pt-1">
          <CalendarDays className="w-3.5 h-3.5 mr-1.5" />
          {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-0">
        <CardDescription>{post.summary}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="text-primary p-0 group-hover:text-accent transition-colors">
          <Link href={`/blog/${post.slug}`}>
            Leer más <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function BlogPreviewSection() {
  // Displaying first 3 posts as a preview
  const postsToDisplay = blogPosts.slice(0, 3);

  return (
    <Container as="section" id="blog" className="bg-secondary/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">Consejos de Nuestro Blog</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Mantente al día con nuestros últimos artículos y consejos tecnológicos.
        </p>
      </div>
      {postsToDisplay.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsToDisplay.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">Próximamente nuevos artículos...</p>
      )}
      {/* Placeholder for "View All" button if a full blog page is implemented
      <div className="mt-12 text-center">
        <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
          <Link href="/blog">Ver todos los artículos</Link>
        </Button>
      </div> */}
    </Container>
  );
}
