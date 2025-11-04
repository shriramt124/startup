export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        {/* Two-column on large screens: right sidebar stays on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: big headline */}
          <div className="lg:col-span-8">
            <div className="mb-6">
              <span className="inline-flex items-center gap-3 text-sm text-gray-700">
                <span className="w-2 h-2 rounded-full bg-black inline-block" />
                ABOUT US
              </span>
            </div>

            <h1 className="font-extrabold leading-tight text-5xl sm:text-7xl tracking-tight text-black">
              Unlock your brand's potential <span className="text-gray-400">with our creative solutions.</span>
            </h1>

            <div className="mt-12">
              <a href="#contact" className="inline-flex items-center gap-3 text-orange-600 font-semibold text-sm sm:text-base">
                BOOK A CALL <span aria-hidden className="ml-1">↗</span>
              </a>
            </div>
          </div>

          {/* Right sidebar: video on top, text anchored bottom */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end lg:justify-end  lg:min-h-[420px]">
            <div className="w-full  rounded-2xl overflow-hidden shadow-lg mb-6">
              <video
                className="w-full h-50 sm:h-50 object-cover"
                poster="/assets/demo/team.jpg"
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            <p className="max-w-md text-gray-700 text-sm sm:text-base">
              Our services help you create digital products and solve your problems objectively — strategy, technology and analysis. We design and build products that scale.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
