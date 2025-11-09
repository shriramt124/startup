"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { gsap } from 'gsap';

export default function FaqSection() {
  const faqs = [
    {
      q: "What technologies do you use for web and mobile app development?",
      a: "We build modern applications using cutting-edge technologies like Next.js, React, Node.js for web development, and React Native or native Android development for mobile apps. Our stack is chosen to ensure scalability, performance, and maintainability.",
    },
    {
      q: "How can data analytics help my business make better decisions?",
      a: "Our data analytics services transform raw data into actionable insights through advanced visualization, predictive modeling, and real-time dashboards. We help you identify trends, optimize operations, and make data-driven decisions that drive growth and efficiency.",
    },
    {
      q: "What AI and automation solutions do you provide?",
      a: "We implement AI-powered solutions including machine learning models, predictive analytics, process automation, chatbots, and intelligent data processing. Our AI services help you automate repetitive tasks, enhance decision-making, and unlock new business opportunities.",
    },
    {
      q: "Do you offer both web and mobile app development?",
      a: "Yes! We provide comprehensive development services for both web applications (responsive websites, progressive web apps, e-commerce platforms) and mobile applications (native Android apps and cross-platform solutions). We handle everything from design to deployment.",
    },
    {
      q: "How long does it take to develop a custom application?",
      a: "Project timelines vary based on complexity and requirements. A typical web application takes 4-8 weeks, while mobile apps range from 6-12 weeks. We work in agile sprints with weekly milestones, ensuring you see progress and can provide feedback throughout development.",
    },
    {
      q: "Can you help us migrate our existing data infrastructure?",
      a: "Absolutely. We specialize in data engineering and migration services, including cloud migration, database modernization, ETL pipeline development, and data warehouse implementation. We ensure zero data loss and minimal downtime during transitions.",
    },
    {
      q: "What kind of support do you provide after project delivery?",
      a: "We offer comprehensive post-launch support including maintenance, updates, performance monitoring, bug fixes, and feature enhancements. We also provide training for your team and detailed documentation to ensure smooth operations.",
    },
  ];

  const [open, setOpen] = useState(0);
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      scale: 1.5,
      left: '50%',
      bottom: '50%',
      x: '-50%',
      y: '50%',
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      left: '1rem',
      bottom: '1rem',
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  return (
    <section className="bg-white text-black py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Heading row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-start lg:items-end mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Frequently Asked
            <br />
              Questions
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-md lg:ml-auto">
              Our services help you create digital products. Stay ahead of the curve with our latest insights, tips, and industry trends.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left: image with CTA card */}
          <div className="relative rounded-xl overflow-hidden bg-gray-100 min-h-[280px] sm:min-h-[320px] md:min-h-[400px] lg:max-h-[500px]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img
              src="longimage.jpg"
              alt="Support agent"
              className="w-full h-full object-cover"
            />
            {/* CTA card */}
            <div ref={cardRef} className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white rounded-md shadow-xl max-w-[280px] sm:max-w-[360px] p-3 sm:p-4 md:p-6">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2">Need More Info?</p>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 md:mb-5">
                Didn’t find what you were looking for? Let’s chat and solve it together!
              </p>
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-3 rounded-full bg-black text-white font-semibold text-xs sm:text-sm shadow overflow-hidden group transition-all hover:scale-105"
              >
                <span className="absolute inset-0 bg-green-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                <span className="relative z-10">Contact us</span>
              </a>
            </div>
          </div>

          {/* Right: accordion */}
          <div>
            <ul className="divide-y divide-gray-200">
              {faqs.map((item, idx) => {
                const isOpen = open === idx;
                return (
                  <li key={idx} className="py-4 sm:py-5 md:py-6">
                    <button
                      className="w-full flex items-start gap-4 sm:gap-6 text-left"
                      onClick={() => setOpen(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg font-semibold flex-1 leading-snug">
                        {item.q}
                      </span>
                      <span className="shrink-0 mt-1 text-gray-600">
                        {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-gray-600">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
