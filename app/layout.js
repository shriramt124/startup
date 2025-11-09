import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://eficsy.com'),
  title: {
    default: 'Eficsy - Data Engineering, AI & Web Development Solutions',
    template: '%s | Eficsy'
  },
  description: 'Leading technology consultancy specializing in data engineering, AI automation, analytics, and custom web & mobile app development. Transform your business with data-driven solutions.',
  keywords: ['data engineering', 'AI automation', 'data analytics', 'web development', 'mobile app development', 'AI strategy', 'business intelligence', 'technology consulting', 'eficsy'],
  authors: [{ name: 'Eficsy' }],
  creator: 'Eficsy',
  publisher: 'Eficsy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eficsy.com',
    siteName: 'Eficsy',
    title: 'Eficsy - Data Engineering, AI & Web Development Solutions',
    description: 'Transform your business with cutting-edge data engineering, AI automation, and custom digital solutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eficsy - Technology Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eficsy - Data Engineering, AI & Web Development Solutions',
    description: 'Transform your business with cutting-edge data engineering, AI automation, and custom digital solutions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
