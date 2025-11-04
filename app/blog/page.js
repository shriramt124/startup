import Link from 'next/link';

const samplePosts = [
  { slug: 'how-we-work', title: 'How We Work (Placeholder)' },
  { slug: 'design-systems', title: 'Design Systems (Placeholder)' },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-black p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-6">Blog (Placeholder)</h1>
        <p className="text-sm sm:text-base text-gray-700 mb-4">This is a placeholder blog index. Replace with your actual posts or CMS-driven list.</p>

        <ul className="space-y-3">
          {samplePosts.map((p) => (
            <li key={p.slug} className="p-3 border rounded-md">
              <Link href={`/blog/${p.slug}`} className="text-blue-700 font-semibold">{p.title}</Link>
              <p className="text-xs text-gray-600">Preview text for {p.title}.</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
