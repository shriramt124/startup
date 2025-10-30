import { StaggerTestimonials } from "@/components/stagger-testimonials";

const TestimonialMy = () => {
  return (
    <section className="w-full bg-white py-20 text-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start lg:items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">What our clients say about EFICSY</h2>
          </div>
          <div className="lg:text-right text-black">
            <p className="max-w-md lg:ml-auto">
              Real stories from teams who built faster and scaled with EFICSY — product velocity, design clarity, and measurable ROI.
            </p>
          </div>
        </div>
        {/* Testimonials carousel below header */}
        <StaggerTestimonials />
      </div>
    </section>
  );
};

export { TestimonialMy };
