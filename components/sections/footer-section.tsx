'use client';

import React from 'react';

export const FooterSection = () => {
  return (
    <footer
      className="w-full py-8 px-6 text-center"
      style={{
        background: "linear-gradient(135deg, #1a0533, #3a0ca3, #7b2ff7)", // gradasi hitam keunguannya
        color: "#dcd6f7", // ungu muda untuk teks
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-6">
        {/* Info copyright */}
        <p className="mb-4 md:mb-0 text-sm md:text-base" style={{ opacity: 0.5 }}>
        &copy; {new Date().getFullYear()} Rafiq. All rights reserved.
        </p>


        {/* Sosial media links */}
        <div className="flex space-x-6">
          <a
            href="https://instagram.com/rafiq.sn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-purple-300 transition-colors"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 2.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
            </svg>
          </a>

          <a
            href="https://twitter.com/msafdev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-purple-300 transition-colors"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.46 6c-.77.35-1.5.59-2.28.69a3.9 3.9 0 001.7-2.15 7.72 7.72 0 01-2.47.95 3.88 3.88 0 00-6.6 3.53A11 11 0 013 5.16a3.88 3.88 0 001.2 5.18 3.87 3.87 0 01-1.76-.49v.05a3.88 3.88 0 003.11 3.8 3.92 3.92 0 01-1.75.07 3.88 3.88 0 003.62 2.7 7.79 7.79 0 01-4.82 1.66c-.31 0-.62-.02-.92-.06A11 11 0 0012 21a11 11 0 0011-11c0-.17 0-.34-.01-.51A7.94 7.94 0 0022.46 6z" />
            </svg>
          </a>

          <a
            href="https://github.com/Rafiqsn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-purple-300 transition-colors"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12a9.99 9.99 0 006.84 9.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 012.5-.34c.85 0 1.7.11 2.5.34 1.9-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.58 1.03 2.67 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
            </svg>
          </a>
        </div>
      </div>

    </footer>
  );
};
