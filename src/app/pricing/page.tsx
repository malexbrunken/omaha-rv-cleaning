import type { Metadata } from "next";
import Link from "next/link";
import { packages, addons, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "RV Cleaning Prices Omaha | Published Per-Foot Pricing",
  description:
    "Transparent RV cleaning prices for the Omaha metro: exterior wash $7/ft, full clean $12/ft, showroom detail $18–$22/ft. No mystery quotes — see the numbers before you call.",
};

const faq = [
  {
    q: "How much does RV cleaning cost in Omaha?",
    a: "For a typical 24–40 foot RV in the Omaha metro, expect roughly $170–$280 for an exterior wash, $290–$480 for a full interior-and-exterior clean, and a quoted price of $18–$22 per foot for our showroom-level detail. Your exact number depends on length and condition — we confirm it by phone before we ever show up.",
  },
  {
    q: "Why publish prices when other companies won't?",
    a: "Because you deserve to budget before you call. Most detailing companies quote only after seeing the rig. We clean one vehicle type all day, every day, so we know what a job takes — and we're comfortable putting the number on the website.",
  },
  {
    q: "Do you charge extra to come to my storage lot?",
    a: "Not within our normal service area — Omaha, Elkhorn, Valley, Waterloo, Bennington, Gretna, Papillion, La Vista, Millard, and Ashland. We service storage lots all the time; you never need to move your rig.",
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-navy mb-4">RV Cleaning Prices — Published, Not Hidden</h1>
      <p className="text-lg text-muted mb-10 max-w-3xl">
        We price by the foot because that&apos;s what the job actually depends on. These are real numbers for the Omaha metro —
        the same ones we&apos;ll quote you on the phone.
      </p>

      {packages.map((p) => (
        <div key={p.name} className={`mb-6 rounded-2xl border-2 p-7 ${p.popular ? "border-accent bg-cream" : "border-siteborder"}`}>
          <div className="flex flex-wrap justify-between items-baseline gap-3 mb-2">
            <h2 className="text-2xl font-bold text-navy">
              {p.name} {p.popular && <span className="text-accent text-base font-bold uppercase tracking-wide ml-2">Most Popular</span>}
            </h2>
            <p className="text-3xl font-extrabold text-navy">{p.price}</p>
          </div>
          <p className="text-muted text-sm mb-3">{p.priceNote}</p>
          <p className="mb-4">{p.blurb}</p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {p.features.map((f) => (
              <li key={f} className="flex gap-2"><span className="text-accent font-bold">✓</span> {f}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Add-Ons</h2>
      <ul className="rounded-2xl bg-cream border border-siteborder p-6 space-y-2.5 mb-8">
        {addons.map((a) => (
          <li key={a.name} className="flex gap-3 text-lg"><span className="text-accent font-bold">＋</span> {a.name}{a.note ? ` (${a.note})` : ""} — priced by phone</li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-navy mb-4">Season Pass — our best value</h2>
      <p className="mb-10">
        Book three or more washes for the season and save 15% automatically. Most pass holders keep a standing appointment
        at their storage lot — we show up on schedule and text you a photo when it&apos;s done.{" "}
        <Link href="/services/rv-storage-washing" className="text-accent underline font-semibold">More on seasonal service →</Link>
      </p>

      <h2 className="text-2xl font-bold text-navy mb-4">Pricing questions</h2>
      {faq.map((f) => (
        <div key={f.q} className="mb-5">
          <h3 className="font-bold text-lg text-navy">{f.q}</h3>
          <p className="text-muted">{f.a}</p>
        </div>
      ))}

      <div className="bg-navy text-white rounded-2xl p-8 text-center mt-10">
        <p className="text-xl font-bold mb-4">Want your exact number?</p>
        <a href={site.phoneHref} className="inline-block bg-accent text-white font-bold text-lg px-8 py-4 rounded-lg">
          Call {site.phone}
        </a>
        <p className="text-white/70 mt-4">Open {site.hours} · quotes take under a minute</p>
      </div>
    </div>
  );
}
