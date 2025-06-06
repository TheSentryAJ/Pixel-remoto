
import { type Article, articles } from '@/data/articles';

const SITE_URL = 'https://pixel-remoto.pages.dev'; // Ensure this is your production URL

function generateSitemapXml(): string {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Static pages
  const staticPages = [
    { loc: '/', lastmod: '2025-06-05', changefreq: 'weekly', priority: '1.0' },
    { loc: '/soluciones', lastmod: '2025-06-05', changefreq: 'monthly', priority: '0.8' },
    { loc: '/sobre-mi', lastmod: '2025-06-05', changefreq: 'monthly', priority: '0.7' },
    { loc: '/blog', lastmod: '2025-06-05', changefreq: 'weekly', priority: '0.9' },
    // Add other static pages here if any
  ];

  staticPages.forEach(page => {
    xml += `
  <url>
    <loc>${SITE_URL}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // Dynamic blog posts
  articles.forEach((article: Article) => {
    // article.date is already in YYYY-MM-DD format
    const articleDate = article.date; 
    xml += `
  <url>
    <loc>${SITE_URL}/blog/${article.slug}</loc>
    <lastmod>${articleDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  xml += `</urlset>`;
  return xml;
}

export async function GET() {
  const sitemap = generateSitemapXml();
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
