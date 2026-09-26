const BLADES = Array.from({ length: 8 }, (_, i) => i * 45);

function ApertureMark() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 400"
      className="pointer-events-none absolute left-1/2 top-1/2 h-[130vh] w-[130vh] -translate-x-1/2 -translate-y-1/2 opacity-[0.07] sm:h-[110vh] sm:w-[110vh]"
    >
      <g stroke="#DFBC59" strokeWidth="0.75" fill="none">
        {BLADES.map((angle) => (
          <line
            key={angle}
            x1="200"
            y1="200"
            x2="200"
            y2="10"
            transform={`rotate(${angle} 200 200)`}
          />
        ))}
        <circle cx="200" cy="200" r="120" />
        <circle cx="200" cy="200" r="70" />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 35%, rgba(223,188,89,0.16) 0%, rgba(25,25,25,0) 70%), radial-gradient(80% 60% at 50% 100%, rgba(223,188,89,0.08) 0%, rgba(25,25,25,0) 60%)",
        }}
      />
      <ApertureMark />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="mb-4 text-xs font-medium tracking-[0.35em] text-gold uppercase">
          Photography Studio
        </p>
        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-7xl">
          Every frame,
          <br />
          a moment worth keeping.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/60 sm:text-xl">
          Drishya Frames captures portraits, events, and stories with a
          quiet, cinematic eye — crafted to feel timeless.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Book a session
          </a>
          <a
            href="#gallery"
            className="rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium text-paper transition-colors hover:border-gold/60 hover:text-gold"
          >
            View gallery
          </a>
        </div>
      </div>
    </section>
  );
}
