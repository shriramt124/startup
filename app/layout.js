import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
    default: "Eficsy - Data Engineering, AI & Development Solutions",
    template: "%s | Eficsy"
  },
  description: "Eficsy delivers cutting-edge data analytics, AI automation, and web & mobile app development services to transform your business.",
  keywords: ["data engineering", "AI automation", "web development", "mobile app development", "data analytics", "business intelligence", "machine learning", "artificial intelligence"],
  authors: [{ name: "Eficsy" }],
  creator: "Eficsy",
  publisher: "Eficsy",
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
    title: "Eficsy - Data Engineering, AI & Development Solutions",
    description: "Eficsy delivers cutting-edge data analytics, AI automation, and web & mobile app development services to transform your business.",
    images: [
      {
        url: '/eficwhite1.png',
        width: 1200,
        height: 630,
        alt: 'Eficsy - Data Engineering & AI Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Eficsy - Data Engineering, AI & Development Solutions",
    description: "Eficsy delivers cutting-edge data analytics, AI automation, and web & mobile app development services to transform your business.",
    images: ['/eficwhite1.png'],
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
  icons: {
    icon: '/eficwhite1.png',
    shortcut: '/eficwhite1.png',
    apple: '/eficwhite1.png',
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Eficsy",
    "url": "https://eficsy.com",
    "logo": "https://eficsy.com/eficwhite1.png",
    "description": "Eficsy delivers cutting-edge data analytics, AI automation, and web & mobile app development services to transform your business.",
    "sameAs": [
      // Add your social media profiles here when available
      // "https://www.linkedin.com/company/eficsy",
      // "https://twitter.com/eficsy",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English"]
    }
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "u3jeslgd0k");
          `}
        </Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
