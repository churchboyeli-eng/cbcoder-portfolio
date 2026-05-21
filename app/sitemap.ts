import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cbvisuals.com'; // Replace with production URL

  const routes = [
    '',
    '/about',
    '/contact',
    '/photography',
    '/post-production',
    '/rentals',
    '/social-cinema',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}
