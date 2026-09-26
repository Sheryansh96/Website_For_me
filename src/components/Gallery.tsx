import Image from "next/image";

const tiles = [
  {
    span: "sm:col-span-2 sm:row-span-2",
    label: "Weddings",
    src: "/gallery/wedding-01.jpg",
    focus: "50% 25%",
  },
  { span: "", label: "Events" },
  {
    span: "",
    label: "Portraits",
    src: "/gallery/portrait-01.jpg",
    focus: "50% 20%",
  },
  {
    span: "sm:row-span-2",
    label: "Portraits",
    src: "/gallery/portrait-02.jpg",
    focus: "50% 15%",
  },
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
            A glimpse into the frames we&apos;ve captured.
          </p>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-4">
          {tiles.map((tile, i) => (
            <div
              key={`${tile.label}-${i}`}
              className={`group relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-[#232323] to-[#161616] transition-transform duration-500 hover:scale-[1.015] ${tile.span}`}
            >
              {tile.src ? (
                <>
                  <Image
                    src={tile.src}
                    alt={`Drishya Frames — ${tile.label}`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: tile.focus }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(22,22,22,0.75) 0%, rgba(22,22,22,0) 40%)",
                    }}
                  />
                  <span className="absolute bottom-4 left-5 text-xs font-medium tracking-wide text-paper/90 uppercase">
                    {tile.label}
                  </span>
                </>
              ) : (
                <>
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
                      <circle
                        cx="12"
                        cy="13"
                        r="3.4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                    </svg>
                    <span className="text-xs font-medium tracking-wide uppercase">
                      {tile.label}
                    </span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
