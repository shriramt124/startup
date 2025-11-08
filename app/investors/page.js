export const metadata = {
  title: "Investor Relations - Eficsy Investment Opportunities",
  description: "Learn about investment opportunities with Eficsy. Explore our growth in data engineering, AI solutions, and digital transformation services.",
  keywords: ["eficsy investors", "investment opportunities", "investor relations", "tech startup investment"],
  openGraph: {
    title: "Invest in Eficsy - Powering the Future of Data & AI",
    description: "Discover investment opportunities in cutting-edge data and AI solutions.",
    url: "https://eficsy.com/investors",
    type: "website",
  },
  alternates: {
    canonical: '/investors',
  },
};

export default function InvestorsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black p-6">
      <div className="max-w-3xl">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-4">Investors (Placeholder)</h1>
        <p className="text-sm sm:text-base text-gray-700">This is a placeholder Investors page. Provide investor relations and contact info here.</p>
      </div>
    </main>
  );
}
