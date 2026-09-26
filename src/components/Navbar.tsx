import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#reel", label: "Reel" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 backdrop-blur-xl bg-black/60 border-b border-white/5 sm:px-10">
        <Link href="#top" className="flex items-center gap-2.5">
          <Image
            src="/brand/logo.png"
            alt="Drishya Frames"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full bg-white/95 p-1"
            priority
          />
          <span className="text-sm font-medium tracking-[0.2em] text-paper/90 uppercase">
            Drishya Frames
          </span>
        </Link>
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-paper/70 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
