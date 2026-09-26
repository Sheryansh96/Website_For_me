import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2.5">
          <Image
            src="/brand/logo.png"
            alt="Drishya Frames"
            width={24}
            height={24}
            className="h-6 w-6 rounded-full bg-white/95 p-0.5"
          />
          <span className="text-xs font-medium tracking-[0.2em] text-paper/60 uppercase">
            Drishya Frames
          </span>
        </div>
        <p className="text-xs text-paper/55">
          © {new Date().getFullYear()} Drishya Frames. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
