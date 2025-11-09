export const metadata = {
  title: 'Careers - Join Our Team of Data & Technology Experts',
  description: 'Join Eficsy and work on cutting-edge data engineering, AI, and development projects. Explore open positions and grow your career with us.',
  keywords: ['careers', 'jobs', 'data engineer jobs', 'AI developer positions', 'software engineer careers', 'tech jobs'],
  openGraph: {
    title: 'Careers at Eficsy - Build the Future with Us',
    description: 'Join our team of innovative data engineers, AI specialists, and developers.',
    url: 'https://eficsy.com/careers',
    type: 'website',
  },
  alternates: {
    canonical: '/careers',
  },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black p-6">
      <div className="max-w-3xl">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-4">Careers (Placeholder)</h1>
        <p className="text-sm sm:text-base text-gray-700">This is a placeholder Careers page. List open roles and application instructions here.</p>
      </div>
    </main>
  );
}
