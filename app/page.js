import Hero from "./components/Hero";
import Challenges from "./components/Challenges";

export const metadata = {
  title: 'Home - Data Engineering, AI & Digital Solutions',
  description: 'Eficsy transforms businesses through data engineering, AI automation, advanced analytics, and exceptional web & mobile development. Get started with a free consultation.',
  keywords: ['data solutions', 'AI automation', 'web development', 'mobile apps', 'data engineering services', 'business transformation', 'digital innovation'],
  openGraph: {
    title: 'Eficsy - Transform Your Business with Data & AI',
    description: 'Leading provider of data engineering, AI automation, and custom digital solutions.',
    url: 'https://eficsy.com',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
};
import OurServices from "./components/OurServices";
import Metrics from "./components/Metrics";
import CtaSection from "./components/CtaSection";
import DataStrategySection from "./components/DataStrategySection";
import ApproachSection from "./components/ApproachSection"
import ContactUs from "./components/ContactUs";
import { TestimonialMy } from "./components/TestiMonialMy";
import BlogSection from "./components/BlogSection";
import FaqSection from "./components/FaqSection";


'use client';

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <Challenges />
      <Metrics />
      <OurServices />
      <CtaSection />
      <DataStrategySection />
      <ApproachSection />
      <TestimonialMy />
      <BlogSection />
      <FaqSection />
      <ContactUs />
    </>
  );
}
