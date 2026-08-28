import type { Metadata } from "next";
import Link from "next/link";
import { packages, addons, site } from "@/lib/site";
import { QuoteCalc } from "@/components/QuoteCalc";
import { IconDroplet, IconSparkle } from "@/components/Icons";

export const metadata: Metadata = {
  title: "RV Cleaning Prices Omaha | Published Per-Foot Pricing",
  description:
    "Transparent RV cleaning prices for the Omaha metro: exterior wash $12/ft and Signature full detail $30/ft. No mystery quotes.",
};

const faq = [
  {
    q: "How much does RV cleaning cost in Omaha?",
    a: "For a typical 24–40 foot RV in the Omaha metro, expect roughly $290–$480 for our $12-per-foot exterior wash and $720–$1,200 for the $30-per-foot Signature interior-and-exterior detail. Your exact number depends on length and condition — we confirm it before we ever show up.",
  },
  {
    q: "Why publish prices when other companies won't?",
    a: "Because you deserve to budget before you call. Specializing in one vehicle type gives us the experience to price clearly and stand behind the number.",
  },
  {
    q: "Do you charge extra to come to my storage lot?",
    a: "Not within our normal service area — Omaha, Elkhorn, Valley, Waterloo, Bennington, Gretna, Papillion, La Vista, Millard, and Ashland.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-espresso text-cream texture-grain">
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <p className="kicker text-copper-bright mb-4">Clear from the first conversation</p>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight max-w-4xl mb-5">Professional care, priced by the foot.</h1>
          <p className="text-xl text-cream/70 max-w-2xl">Real Omaha pricing, published upfront. Choose a service, enter your RV length, and know the ballpark before you call.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.45fr_.75fr] items-start">
          <div className="space-y-6">
            {packages.map((p, i) => (
              <article key={p.name} className={`ridge bg-white rounded-2xl border p-7 md:p-8 shadow-sm ${p.popular ? "border-copper shadow-xl shadow-copper/10" : "border-line"}`}>
                <div className="flex flex-wrap justify-between items-start gap-5 mb-5">
                  <div>
                    <div className="flex items-center gap-3 mb-2 text-copper-deep">
                      {i === 0 ? <IconDroplet /> : <IconSparkle />}
                      {p.popular && <span className="kicker text-[10px] bg-copper text-white rounded-full px-3 py-1">Best value</span>}
                    </div>
                    <h2 className="text-3xl font-semibold">{p.name}</h2>
                    <p className="text-mist mt-2 max-w-xl">{p.blurb}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-5xl font-semibold text-copper-deep">{p.price}</p>
                    <p className="text-xs text-mist mt-1 max-w-[180px]">{p.priceNote}</p>
                  </div>
                </div>
                <ul className="grid gap-x-6 gap-y-2.5 border-t border-line pt-5 sm:grid-cols-2 text-[15px]">
                  {p.features.map((f) => <li key={f} className="flex gap-2"><span className="text-copper font-bold">—</span>{f}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <aside className="lg:sticky lg:top-28"><QuoteCalc /></aside>
        </div>
      </section>

      <section className="bg-cream-2 border-y border-line py-16">
        <div className="max-w-6xl mx-auto px-4 grid gap-12 md:grid-cols-2">
          <div>
            <p className="kicker text-copper-deep mb-3">Tailor the detail</p>
            <h2 className="text-3xl font-semibold mb-6">Focused add-ons</h2>
            <ul className="divide-y divide-line border-y border-line">
              {addons.map((a) => (
                <li key={a.name} className="py-4 flex justify-between gap-5">
                  <span className="font-semibold">{a.name}</span>
                  <span className="text-sm text-mist text-right">{a.note ?? "By condition"}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="kicker text-copper-deep mb-3">Keep the shine</p>
            <h2 className="text-3xl font-semibold mb-4">Season pass</h2>
            <p className="text-mist mb-5">Book three or more washes for the season and save 15%. We can keep a standing appointment at your storage lot, then text when the work is complete.</p>
            <Link href="/services/rv-storage-washing" className="font-bold text-copper-deep border-b-2 border-copper pb-1">Explore seasonal service →</Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <p className="kicker text-copper-deep mb-3">Good questions</p>
        <h2 className="text-4xl font-semibold mb-8">Before you book</h2>
        <div className="divide-y divide-line border-y border-line">
          {faq.map((f) => (
            <div key={f.q} className="py-6">
              <h3 className="font-sans font-bold text-lg mb-2">{f.q}</h3>
              <p className="text-mist">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="bg-espresso text-cream rounded-2xl p-8 md:p-10 text-center mt-12 texture-grain">
          <p className="font-display text-3xl font-semibold mb-3">Want the exact number?</p>
          <p className="text-cream/70 mb-6">Tell us your RV length and condition. Most quotes take under a minute.</p>
          <a href={site.phoneHref} className="inline-flex bg-copper hover:bg-copper-bright text-white font-bold px-8 py-4 rounded-xl">Call {site.phone}</a>
        </div>
      </section>
    </>
  );
}
