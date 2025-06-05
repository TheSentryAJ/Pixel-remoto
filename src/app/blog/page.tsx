
import type { Metadata } from 'next';
import Link from 'next/link';
import { articles } from '@/data/articles';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { CalendarDays } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog Técnico | Antonio J. - Pixel Remoto',
  description: 'Artículos, guías y consejos sobre tecnología, soporte informático y ciberseguridad por Antonio J.',
};

export default function BlogListPage() {
  return (
    <Container as="section" className="py-12 md:py-16 lg:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold font-headline text-primary">Mi Blog Técnico</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Compartiendo conocimientos, guías prácticas y reflexiones sobre el mundo de la tecnología y el soporte informático.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Card key={article.id} className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden border">
            <CardHeader className="pt-6 pb-2">
              <CardTitle className="font-headline text-xl text-primary hover:underline">
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-6 pt-0">
              <CardDescription className="text-muted-foreground mb-4 text-sm">{article.excerpt}</CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="flex items-center text-xs text-muted-foreground mb-4 sm:mb-0">
                <CalendarDays className="w-4 h-4 mr-2" />
                <span>{article.date}</span>
              </div>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 hover:text-accent-foreground" asChild>
                <Link href={`/blog/${article.slug}`}>Leer Más</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Container>
  );
}

