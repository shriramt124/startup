
import { apiUrl } from '../lib/api';

export default async function sitemap() {
  const baseUrl = 'https://eficsy.com';

  // Fetch blog posts
  let posts = [];
  try {
    const res = await fetch(apiUrl('/api/v1/posts?published=true&limit=1000'), {
      next: { revalidate: 3600 }
    });
    if (res.ok) {
      const data = await res.json();
      posts = data.data?.items || [];
    }
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error);
  }

  // Fetch projects
  let projects = [];
  try {
    const res = await fetch(apiUrl('/api/v1/projects?limit=1000'), {
      next: { revalidate: 3600 }
    });
    if (res.ok) {
      const data = await res.json();
      projects = data.data?.items || [];
    }
  } catch (error) {
    console.error('Error fetching projects for sitemap:', error);
  }

  // Static pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ];

  // Add blog posts
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt || post.createdAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...routes, ...postRoutes];
}
