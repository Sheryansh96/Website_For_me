"use client";

import { useState } from "react";

const VIDEO_ID = "9Cr2bKU6GHQ";

export default function Reel() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="reel" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-medium tracking-[0.35em] text-gold uppercase">
            In Motion
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
            Watch our work
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-paper/55">
            A short reel of moments we&apos;ve framed.
          </p>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/8 bg-[#161616]">
          {playing ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1`}
              title="Drishya Frames reel"
              allow="accelerated-video; autoplay; clipboard-write; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="Play Drishya Frames reel"
              className="group absolute inset-0 h-full w-full cursor-pointer"
            >
              <img
                src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt=""
                aria-hidden
                className="h-full w-full object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-85"
              />
              <span
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 50%, rgba(25,25,25,0) 0%, rgba(25,25,25,0.55) 100%)",
                }}
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-ink transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7Z" />
                  </svg>
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
