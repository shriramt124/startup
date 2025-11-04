export default function BlogPostPage({ params }) {
  const { slug } = params;

  return (
    <main className="min-h-screen bg-white text-black p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-4">{slug.replace(/-/g, ' ')} (Placeholder)</h1>
        <p className="text-sm sm:text-base text-gray-700">This is placeholder content for the post <strong>{slug}</strong>. Replace with actual post content or markdown rendering.</p>
      </div>
    </main>
  );
}
