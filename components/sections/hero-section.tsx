'use client';

import React from 'react';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center px-6 text-center"
      style={{
        background: `radial-gradient(circle at 20% 30%, #7b2ff7, transparent 40%),
                     radial-gradient(circle at 80% 70%,rgb(130, 34, 233), transparent 50%),
                     linear-gradient(135deg,rgb(25, 21, 34), #6a11cb,rgb(47, 26, 82))`,
        backgroundBlendMode: "screen",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "white",
      }}
    >
      {/* Overlay semi-transparent gelap supaya teks makin jelas */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
  {/* Container bintang */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

      {/* Konten teks dan button */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Galaxy Akademi <span className="text-purple-500">Crypto</span>
      </h1>

        <p className="text-lg md:text-xl mb-6">
          Explore the vast universe of possibilities with our cosmic-themed landing page. Let your ideas shine like stars in the galaxy.
        </p>
        <a
          href="#cta"
          className="inline-block bg-gradient-to-r from-purple-600 to-purple-900 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:from-purple-900 hover:to-purple-600 transition-colors"
        >
          Get Started
        </a>
      </div>

      <style jsx>{`
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          opacity: 0.8;
          animation-name: twinkle;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.2; }
        }
      `}</style>
    </section>
  );
};
