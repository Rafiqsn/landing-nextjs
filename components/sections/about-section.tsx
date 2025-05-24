'use client';

import { SKILL } from '@/lib/constants';
import React from 'react';

export const AboutSection = () => {
  // Helper function untuk random posisi tapi hindari tengah (30%-70%)
  const randomEdgePosition = () => {
    const pos = Math.random();
    return pos < 0.5
      ? (pos * 0.6) * 100 // 0% - 30% (kali 0.6, karena max 0.6)
      : 70 + (pos - 0.5) * 60; // 70% - 100%
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="shooting-star"
            style={{
              top: `${randomEdgePosition()}%`,
              left: `${randomEdgePosition()}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Foto profil bulat */}
        <div className="w-32 h-32 rounded-full overflow-hidden mb-8 border-4 border-purple-600 shadow-lg">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Foto Profil"
            className="w-full h-full object-cover"
          />
        </div>

        <h2
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ color: "#7b2ff7" }}
        >
          Tentang Rafiq
        </h2>

        <p
          className="text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto"
          style={{ color: "#222222" }}
        >
          Aku bisanya React, Next.js, Vue, Supabase, Tailwind CSS, Python, Firebase ,dan Prisma. Dengan skill ini, aku bisa bikin aplikasi web yang keren dan fungsional sesuai kebutuhan.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center">
          {SKILL.map((src, idx) => {
            const name = (src.split("/").pop() ?? "")
              .replace(".svg", "")
              .replace(/(^\w)/, (c) => c.toUpperCase());

            return (
              <div key={idx} className="flex flex-col items-center space-y-3">
                <img
                  src={src}
                  alt={name}
                  className="w-20 h-20 object-contain filter drop-shadow-lg"
                />
                <span style={{ color: "#222222" }} className="font-medium">
                  {name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .shooting-star {
          position: absolute;
          display: block;
          width: 2px;
          height: 100px;
          background: linear-gradient(45deg, #c084fc, transparent);
          opacity: 0.9;
          border-radius: 50%;
          filter: drop-shadow(0 0 8px #a066ff);
          transform: rotate(45deg);
          animation-name: shooting;
          animation-timing-function: ease-in;
          animation-iteration-count: infinite;
        }

        @keyframes shooting {
          0% {
            transform: translate(0, 0) rotate(45deg);
            opacity: 1;
          }
          100% {
            transform: translate(-200px, 600px) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};
