const tiles = [
  { span: "sm:col-span-2 sm:row-span-2", label: "Portraits" },
  { span: "", label: "Weddings" },
  { span: "", label: "Events" },
  { span: "sm:row-span-2", label: "Products" },
  { span: "sm:col-span-2", label: "Candid" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-medium tracking-[0.35em] text-gold uppercase">
            Selected Work
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
            The gallery
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-paper/55">
            A glimpse into the frames we&apos;ve captured. Swap these
            placeholders with your own work.
          </p>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-4">
          {tiles.map((tile) => (
            <div
              key={tile.label}
              className={`group relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-[#232323] to-[#161616] transition-transform duration-500 hover:scale-[1.015] ${tile.span}`}
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(120% 100% at 50% 100%, rgba(223,188,89,0.18) 0%, rgba(223,188,89,0) 60%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-paper/55">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-paper/40"
                >
                  <path
                    d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <circle cx="12" cy="13" r="3.4" stroke="currentColor" strokeWidth="1.4" />
                </svg>
                <span className="text-xs font-medium tracking-wide uppercase">
                  {tile.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
