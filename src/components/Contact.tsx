const details = [
  { label: "Email", value: "hello@drishyaframes.com", href: "mailto:hello@drishyaframes.com" },
  { label: "Phone", value: "+91 00000 00000", href: "tel:+910000000000" },
  { label: "Instagram", value: "@drishyaframes", href: "https://instagram.com/drishyaframes" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-medium tracking-[0.35em] text-gold uppercase">
          Get in touch
        </p>
        <h2 className="text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
          Let’s create your next frame.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-paper/55">
          Reach out for bookings, collaborations, or just to say hello.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-10">
          {details.map((detail) => (
            <a
              key={detail.label}
              href={detail.href}
              className="group flex flex-col items-center gap-1"
            >
              <span className="text-xs font-medium tracking-[0.2em] text-paper/60 uppercase">
                {detail.label}
              </span>
              <span className="text-base text-paper/85 transition-colors group-hover:text-gold">
                {detail.value}
              </span>
            </a>
          ))}
        </div>

        <a
          href="mailto:hello@drishyaframes.com"
          className="mt-14 inline-block rounded-full bg-gold px-10 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Send an email
        </a>
      </div>
    </section>
  );
}
