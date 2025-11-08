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
  title: {
    default: "Eficsy - Data Engineering, AI Strategy & Digital Solutions",
    template: "%s | Eficsy"
  },
  description: "Transform your business with expert data engineering, AI automation, analytics, and modern web & mobile development. Eficsy delivers end-to-end technology solutions that scale.",
  keywords: ["data engineering", "AI automation", "data analytics", "web development", "android development", "AI strategy", "business intelligence", "machine learning", "digital transformation"],
  authors: [{ name: "Eficsy" }],
  creator: "Eficsy",
  publisher: "Eficsy",
  metadataBase: new URL('https://eficsy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eficsy.com',
    siteName: 'Eficsy',
    title: 'Eficsy - Data Engineering, AI Strategy & Digital Solutions',
    description: 'Transform your business with expert data engineering, AI automation, analytics, and modern web & mobile development.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eficsy - Data & AI Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eficsy - Data Engineering, AI Strategy & Digital Solutions',
    description: 'Transform your business with expert data engineering, AI automation, analytics, and modern web & mobile development.',
    images: ['/twitter-image.jpg'],
    creator: '@eficsy',
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
    yandex: 'your-yandex-verification-code',
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
