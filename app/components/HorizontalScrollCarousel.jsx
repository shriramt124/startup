"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollCarousel() {
  const values = [
    {
      title: 'Collaboration',
      tagline: 'We achieve more when we work together.',
      description:
        'Collaboration fuels our strength as a team. We value every voice, encourage open dialogue, and create an environment where ideas are shared freely.',
    },
    {
      title: 'Empathy',
      tagline: 'We listen, understand, and put people first.',
      description:
        'By understanding the perspectives and emotions of others, we design solutions and foster relationships that are genuinely human‑centered.',
    },
    {
      title: 'Excellence',
      tagline: 'We aim higher, always striving for quality in all we do.',
      description:
        'We deliver work that is thoughtful, precise, and impactful. Every detail matters — from how we craft ideas to how we execute them.',
    },
    {
      title: 'Integrity',
      tagline: 'We act with honesty and transparency in everything we do.',
      description:
        'Trust, openness, and accountability guide our decisions and relationships with clients, partners, and within our team.',
    },
    {
      title: 'Innovation',
      tagline: 'We push boundaries to turn ideas into outcomes.',
      description:
        'Curiosity and experimentation help us discover new opportunities and build better ways forward.',
    },
  ];

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    const container = scrollContainerRef.current;

    if (!section || !trigger || !container) return;

    // Calculate the distance to scroll
    const getScrollAmount = () => {
      const scrollWidth = container.scrollWidth;
      const viewportWidth = window.innerWidth;
      return -(scrollWidth - viewportWidth);
    };

    // Create the horizontal scroll animation
    const animation = gsap.to(container, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: () => `+=${Math.abs(getScrollAmount())}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Refresh on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white">
      {/* Header outside the scroll area */}
      <div className="pt-16 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            Where imagination
            <br className="hidden sm:block" /> meets execution.
          </h2>
           
        </div>
      </div>

      {/* Horizontal scroll section */}
      <div ref={triggerRef} className="h-screen">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div ref={scrollContainerRef} className="flex gap-8 px-6 lg:px-12">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="flex-shrink-0 w-[85vw] sm:w-[70vw] lg:w-[50vw] h-[70vh] flex items-center"
              >
                <div className="w-full bg-black text-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-gray-800 h-full flex flex-col justify-center">
                  <div className="text-gray-400 text-lg sm:text-xl font-semibold mb-8 uppercase tracking-wider">
                    {value.title}
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                    {value.tagline}
                  </h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6" />
                  <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
