export const metadata = {
  title: 'Investors - Partner with Eficsy',
  description: 'Learn about investment opportunities and partnership options with Eficsy. Join us in transforming businesses through data and technology.',
  keywords: ['investors', 'partnerships', 'investment opportunities', 'business growth'],
  openGraph: {
    title: 'Investor Relations - Eficsy',
    description: 'Investment and partnership opportunities with Eficsy.',
    url: 'https://eficsy.com/investors',
    type: 'website',
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
