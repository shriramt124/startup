"use client";

import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhoWeAre from "./components/WhoWeAre";
import WhyChooseUs from "./components/WhyChooseUs";
import TechStackSection from "./components/TechStackSection";
import Challenges from "./components/Challenges";
import OurServices from "./components/OurServices";
import Metrics from "./components/Metrics";
import CtaSection from "./components/CtaSection";
import DataStrategySection from "./components/DataStrategySection";
import ApproachSection from "./components/ApproachSection";

import Blogs from "./components/Blogs";
import { Services } from "@/components/parallax-scroll-feature-section";
import Blogsmy from "./components/Blogsmy";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import TextPressureComp from "./components/TextPressureComp";
import Footer from "./components/Footer";
import { TestimonialMy } from "./components/TestiMonialMy";
import BlogSection from "./components/BlogSection";
import FaqSection from "./components/FaqSection";
// OurServices already imported above


export default function Home() {

  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}
