
export default async function sitemap() {
  const baseUrl = 'https://eficsy.com';
  
  // Static pages
  const routes = [
    '',
    '/about',
    '/services',
    '/work',
    '/blog',
    '/contact',
    '/careers',
    '/investors',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' || route === '/blog' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Fetch blog posts for dynamic URLs
  let blogPosts = [];
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const res = await fetch(`${apiUrl}/api/v1/posts?published=true&limit=100`, {
      next: { revalidate: 3600 }
    });
    
    if (res.ok) {
      const data = await res.json();
      blogPosts = (data.data?.items || []).map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt || post.publishedAt || new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
  }

  return [...routes, ...blogPosts];
}
