"use client";
import Hero from "./components/Hero";
import Challenges from "./components/Challenges";
import OurServices from "./components/OurServices";
import Metrics from "./components/Metrics";
import CtaSection from "./components/CtaSection";
import DataStrategySection from "./components/DataStrategySection";
import ApproachSection from "./components/ApproachSection"
import ContactUs from "./components/ContactUs";
import { TestimonialMy } from "./components/TestiMonialMy";
import BlogSection from "./components/BlogSection";
import FaqSection from "./components/FaqSection";


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
