"use client";
import React, { useEffect, useRef } from 'react';

const CtaSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate the percentage of the section that is visible
      const visibleHeight = Math.max(0, Math.min(height, windowHeight - top));
      const progress = visibleHeight / height;

      // Update the CSS variable
      sectionRef.current.style.setProperty('--reveal-progress', `${progress * 100}%`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white py-24 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="relative inline-block">
            <span
              className="relative z-10 block"
              style={{
                backgroundImage: 'linear-gradient(90deg, #1e90ff var(--reveal-progress), #ffffff var(--reveal-progress))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                backgroundRepeat: 'no-repeat',
              }}
            >
              Just one more step to make your perfect choice.{" "}
            </span>
          </span>
          <span className="text-gray-400 block">
            Click either button below to get started.
          </span>
        </h2>
        <div className="mt-10 flex items-center justify-center">
          <a
            href="#"
            aria-label="Free Consultation"
            className="bg-white text-black font-semibold px-6 py-3  inline-flex items-center gap-3 shadow-sm hover:shadow-md transition shadow-black/10"
          >
            <span>Free Consultation</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

