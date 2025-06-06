
import { type Article, articles } from '@/data/articles';

const SITE_URL = 'https://pixel-remoto.pages.dev';

function generateSitemapXml(): string {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

  const staticPages = [
    { loc: '/', lastmod: '2025-06-05', changefreq: 'weekly', priority: '1.0' },
    { loc: '/soluciones', lastmod: '2025-06-05', changefreq: 'monthly', priority: '0.8' },
    { loc: '/sobre-mi', lastmod: '2025-06-05', changefreq: 'monthly', priority: '0.7' },
    { loc: '/blog', lastmod: '2025-06-05', changefreq: 'weekly', priority: '0.9' },
  ];

  staticPages.forEach(page => {
    if (page.loc && page.lastmod) {
      xml += `
  <url>
    <loc>${SITE_URL}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq || 'monthly'}</changefreq>
    <priority>${String(page.priority || '0.5')}</priority>
  </url>`;
    }
  });

  articles.forEach((article: Article) => {
    if (article && typeof article.slug === 'string' && article.slug && typeof article.date === 'string' && article.date) {
      const articleDate = article.date; // Expected YYYY-MM-DD
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (dateRegex.test(articleDate)) {
        xml += `
  <url>
    <loc>${SITE_URL}/blog/${article.slug}</loc>
    <lastmod>${articleDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>`;
      } else {
        console.warn(`[Sitemap] Invalid date format for article slug '${article.slug}': ${articleDate}. Skipping.`);
      }
    } else {
      console.warn(`[Sitemap] Missing slug or date for an article. Skipping. Article ID: ${article?.id || 'N/A'}`);
    }
  });

  xml += `</urlset>`;
  return xml;
}

export async function GET() {
  try {
    const sitemap = generateSitemapXml();
    return new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate', // Cache for 1 day
      },
    });
  } catch (error) {
    console.error("[Sitemap] Error generating sitemap:", error);
    return new Response("Error generating sitemap. Please check server logs.", { 
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      }
    });
  }
}
