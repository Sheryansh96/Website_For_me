"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "drishyasframes@gmail.com";

const EVENT_TYPES = [
  "Wedding",
  "Pre-wedding / Engagement",
  "Portrait session",
  "Event",
  "Product shoot",
  "Other",
];

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-paper placeholder:text-paper/35 outline-none transition-colors focus:border-gold/60 focus:bg-white/[0.07]";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState(EVENT_TYPES[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = `New inquiry from ${name} — ${eventType}`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "(Not provided)"}`,
      `Event type: ${eventType}`,
      "",
      message || "(No additional details provided.)",
    ];

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-14 flex flex-col gap-4 text-left"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="text-xs font-medium tracking-[0.15em] text-paper/60 uppercase"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-xs font-medium tracking-[0.15em] text-paper/60 uppercase"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="phone"
            className="text-xs font-medium tracking-[0.15em] text-paper/60 uppercase"
          >
            Phone number (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 000 000 0000"
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="eventType"
            className="text-xs font-medium tracking-[0.15em] text-paper/60 uppercase"
          >
            Event type
          </label>
          <select
            id="eventType"
            name="eventType"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className={`${inputClasses} appearance-none`}
          >
            {EVENT_TYPES.map((type) => (
              <option key={type} value={type} className="bg-[#191919]">
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-xs font-medium tracking-[0.15em] text-paper/60 uppercase"
        >
          Tell us about your event (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Date, location, anything else we should know"
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="mt-2 self-center rounded-full bg-gold px-10 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
      >
        Send inquiry
      </button>
      <p className="text-center text-xs text-paper/40">
        This opens your email app with the details filled in, ready to send.
      </p>
    </form>
  );
}
