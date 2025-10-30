import React from 'react';

export default function ApproachSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-1 lg:order-1">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="slideimage1.jpg"
                alt="Team collaborating"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-2 lg:order-2">
            <p className="text-sm text-gray-400 mb-4">About Us</p>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              More Than Just Designers —
              <br />
              We’re Your Creative Growth Partner
            </h2>
            <p className="text-gray-300 max-w-xl mb-8">
              With years of experience and a proven track record, we work closely with startups,
              enterprises, and agencies to deliver meaningful digital solutions. From strategy
              to pixel-perfect design and engineering, we bring visions to life and help them
              grow.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white text-black px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3"
              >
                View Our Work
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <a href="#contact" className="text-white border border-white/20 px-6 py-3 rounded-full inline-flex items-center gap-2">
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
