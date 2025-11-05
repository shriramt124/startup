"use client";

import Image from "next/image";
import React, { useState } from "react";
import DataStrategySection from "../components/DataStrategySection";
import {WhyChooseUs} from  "../about/page";
import { ContactCTA } from "../about/page";
 
const projects = [
  {
    id: 1,
    tag: "Research & optimisation",
    title: "Keyword Research & Analysis",
    desc:
      "We tackle digital challenges head-on, providing innovative solutions that drive success in a rapidly evolving digital landscape.",
    image:
      "https://images.unsplash.com/photo-1600268331780-6f91e3f9db21?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    tag: "Link building",
    title: "Link Building & Off-Page SEO",
    desc:
      "We tackle digital challenges head-on, providing innovative solutions that drive success in a rapidly evolving digital landscape.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    tag: "Brand strategy",
    title: "Brand Positioning & Messaging",
    desc:
      "Shape your brand story and messaging so it resonates across every touchpoint and channel.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    tag: "UI design",
    title: "Interface Design for SaaS",
    desc:
      "Design clean, accessible and fast interfaces that convert and delight your users.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
  },
];

function ProjectCard({ tag, title, desc, image }) {
  return (
    <div className="group rounded-[28px] bg-white border border-gray-100 shadow-sm p-6 md:p-8 transition-all hover:shadow-lg">
      <div className="w-fit mb-5">
        <span className="inline-flex items-center rounded-full border border-violet-300 bg-violet-50/60 text-violet-700 text-xs md:text-sm px-3 py-1.5">
          {tag}
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        {desc}
      </p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={700}
          className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          priority={false}
        />
      </div>
    </div>
  );
}

function Pagination({ page, setPage, total, perPage }) {
  const pageCount = Math.ceil(total / perPage);
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  const go = (p) => {
    if (p < 1 || p > pageCount) return;
    setPage(p);
    // scroll to top of grid for better UX
    if (typeof window !== "undefined") {
      const el = document.getElementById("work-grid-top");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      <button
        onClick={() => go(page - 1)}
        className={`px-3 py-2 rounded-md border text-sm ${
          page === 1
            ? "text-gray-400 border-gray-200 cursor-not-allowed bg-gray-50"
            : "text-gray-700 border-gray-200 hover:bg-gray-50"
        }`}
        disabled={page === 1}
        aria-label="Previous page"
      >
        Prev
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => go(p)}
          className={`h-9 w-9 rounded-md text-sm font-medium transition-colors border ${
            p === page
              ? "bg-violet-600 text-white border-violet-600"
              : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
          }`}
          aria-current={p === page ? "page" : undefined}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => go(page + 1)}
        className={`px-3 py-2 rounded-md border text-sm ${
          page === pageCount
            ? "text-gray-400 border-gray-200 cursor-not-allowed bg-gray-50"
            : "text-gray-700 border-gray-200 hover:bg-gray-50"
        }`}
        disabled={page === pageCount}
        aria-label="Next page"
      >
        Next
      </button>
    </div>
  );
}

export default function WorkPage() {
  const [page, setPage] = useState(1);
  const perPage = 2;
  const start = (page - 1) * perPage;
  const visible = projects.slice(start, start + perPage);
  const total = projects.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 text-center">
            <span className="block">Explore the Projects</span>
            <span className="block mt-2">We’ve Worked</span>
          </h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div id="work-grid-top" className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {visible.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </div>
          <div className="mt-8">
            <Pagination page={page} setPage={setPage} total={total} perPage={perPage} />
          </div>
        </div>
      </section>

      <WhyChooseUs />
       <ContactCTA />
    </div>
  );
}
