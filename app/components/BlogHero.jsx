
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogHero({ posts }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!posts || posts.length === 0) return;
    
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, posts]);

  const handleNext = () => {
    if (isAnimating || !posts || posts.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % posts.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating || !posts || posts.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  if (!posts || posts.length === 0) {
    return (
      <section className="relative h-[500px] md:h-[600px] bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
        <p className="text-white text-xl">No featured posts available</p>
      </section>
    );
  }

  const currentPost = posts[currentIndex];

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={currentPost.coverImageUrl || '/assets/demo/cs1.webp'}
          alt={currentPost.title}
          fill
          className="object-cover transition-opacity duration-500"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-end pb-12 md:pb-20">
        {/* Category Badge */}
        {currentPost.category?.name && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-green-600 rounded-full">
              {currentPost.category.name}
            </span>
          </div>
        )}

        {/* Title - Truncated with proper CSS */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 max-w-4xl blog-hero-title">
          {currentPost.title}
        </h1>

        {/* Excerpt - Truncated with proper CSS */}
        {currentPost.excerpt && (
          <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-6 max-w-3xl blog-hero-excerpt">
            {currentPost.excerpt}
          </p>
        )}

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-white/70 text-sm mb-6">
          <span>
            {new Date(currentPost.publishedAt || currentPost.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          {currentPost.readTime && (
            <>
              <span>•</span>
              <span>{currentPost.readTime} min read</span>
            </>
          )}
        </div>

        {/* CTA Button */}
        <Link
          href={`/blog/${currentPost.slug}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 w-fit"
        >
          Read Article
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-6 lg:right-12 z-20 flex items-center gap-3">
        <button
          onClick={handlePrev}
          disabled={isAnimating}
          className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          disabled={isAnimating}
          className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2">
        {posts.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 500);
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
