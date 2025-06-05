
import { articles, type Article } from '@/data/articles';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CalendarDays } from 'lucide-react';

function ArticleCard({ article }: { article: Article }) {
  const { title, excerpt, date, slug } = article;
  const parsedDate = new Date(date);
  const displayDate = !isNaN(parsedDate.getTime())
    ? parsedDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
    : 'Fecha inválida';

  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden border">
      <CardHeader className="pt-6 pb-2">
        <CardTitle className="font-headline text-xl text-primary hover:underline">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        <CardDescription className="text-muted-foreground mb-4 text-sm">{excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex items-center text-xs text-muted-foreground mb-4 sm:mb-0">
          <CalendarDays className="w-4 h-4 mr-2" />
          <span>{displayDate}</span>
        </div>
        <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 hover:text-accent-foreground" asChild>
          <Link href={`/blog/${slug}`}>Leer Más</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function BlogSection() {
  const displayedArticles = articles.slice(0, 3); 

  return (
    <Container as="section" id="blog" className="bg-secondary/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-primary">Desde Mi Blog Técnico</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Artículos, guías y reflexiones sobre el mundo de la tecnología, el soporte técnico y temas que me apasionan.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
       <div className="text-center mt-12">
        <Button variant="ghost" className="text-primary hover:text-primary/80 text-lg" asChild>
            <Link href="/blog">Ver todos los artículos</Link>
        </Button>
      </div>
    </Container>
  );
}

    