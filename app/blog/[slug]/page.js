import Image from 'next/image';
import { notFound } from 'next/navigation';
import { apiUrl } from '../../../lib/api';
function cx(...classes) { return classes.filter(Boolean).join(' '); }

async function getPost(slug) {
  try {
    console.log("sluggg from the ",slug);
    // Fetch from the admin/backend app running on port 3000
    const res = await fetch(apiUrl(`/api/v1/posts/${slug}`), {
      next: { revalidate: 60 }
    });
    // console.debug('Post fetch status:', res.status);
    if (!res.ok) {
      if (res.status === 404) return null;
      console.error('Failed to fetch post:', res.status, await res.text());
      return null;
    }
    
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  console.log("Params received in BlogPostPage:", resolvedParams);
  const { slug } = resolvedParams;
  const post = await getPost(slug);

  console.debug('Loaded post', post?.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Post Header */}
      <header className="relative h-[40vh] sm:h-[50vh] w-full">
        {post.coverImageUrl && (
          <Image
            src={post.coverImageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end max-w-4xl mx-auto p-6 lg:p-12">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-white/80 text-sm">
            <span>{new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            {post.readTime && <span>•</span>}
            {post.readTime && <span>{post.readTime} min read</span>}
          </div>
        </div>
      </header>

      {/* Post Content */}
      <article className="max-w-3xl mx-auto p-6 lg:p-12">
        {post.contentHtml ? (
          <div
            className={cx(
              'prose prose-lg',
              'prose-headings:font-bold prose-headings:text-black',
              'prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl',
              'prose-h1:mb-6 prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3',
              'prose-p:text-gray-800',
              'prose-ol:list-decimal prose-ul:list-disc',
              'prose-ol:pl-6 prose-ul:pl-6',
              'prose-li:leading-relaxed',
              'prose-a:text-green-700 hover:prose-a:underline',
              'prose-blockquote:font-medium prose-blockquote:text-gray-700',
              'prose-code:bg-gray-100 prose-code:text-pink-600',
              'prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-5',
              'prose-img:rounded-xl',
              'prose-hr:my-12'
            )}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        ) : (
          <p>This post has no content yet.</p>
        )}
      </article>
    </main>
  );
}

// Optional: Generate static paths for better performance
export async function generateStaticParams() {
  try {
    // Use backend on port 3000 for static params too
  const res = await fetch(apiUrl('/api/v1/posts?limit=100&published=true'));
    if (!res.ok) return [];
    const data = await res.json();
    const posts = data.data?.items || [];
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Failed to generate static params for posts:', error);
    return [];
  }
}
