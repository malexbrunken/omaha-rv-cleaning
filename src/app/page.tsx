import Link from "next/link";
import { site, packages } from "@/lib/site";
import { services } from "@/lib/services";
import { towns } from "@/lib/towns";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-tan font-bold uppercase tracking-wide mb-3">Omaha&apos;s RV-Only Cleaning Specialists</p>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Your RV, cleaned like new — inside and out. We come to you.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              RVs, campers, and trailers are all we clean. Mobile service across the Omaha metro:
              hand wash, full interior detail, and our signature <strong className="text-tan">dry vapor steam sanitizing</strong> —
              including mattresses — that no other cleaning company in the area offers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={site.phoneHref} className="bg-accent text-white font-bold text-lg px-7 py-4 rounded-lg min-h-12 flex items-center">
                Call {site.phone}
              </a>
              <Link href="/pricing" className="border-2 border-tan text-tan font-bold text-lg px-7 py-4 rounded-lg min-h-12 flex items-center">
                See Our Prices
              </Link>
            </div>
            <p className="mt-5 text-white/70">Open {site.hours} · Fully self-contained — no water or power needed from you.</p>
          </div>
          <div className="bg-navy-deep rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-4">Why RV owners choose us</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex gap-3"><span aria-hidden>✅</span><span><strong>RVs only.</strong> We don&apos;t detail cars. One vehicle type, mastered.</span></li>
              <li className="flex gap-3"><span aria-hidden>✅</span><span><strong>Steam sanitation.</strong> Dry vapor kills mold, mildew, and dust mites — mattresses included.</span></li>
              <li className="flex gap-3"><span aria-hidden>✅</span><span><strong>Published pricing.</strong> Per-foot prices right on this website. No mystery quotes.</span></li>
              <li className="flex gap-3"><span aria-hidden>✅</span><span><strong>We come to you.</strong> Driveway, storage lot, or campground — 7 days a week.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-tan-light border-y border-siteborder">
        <div className="max-w-6xl mx-auto px-4 py-6 grid gap-4 sm:grid-cols-3 text-center font-semibold text-navy">
          <p>🧼 Hand wash, never brushed</p>
          <p>💧 We bring our own soft water &amp; power</p>
          <p>🛏️ Mattress steam sanitation — unique in Omaha</p>
        </div>
      </section>

      {/* Packages */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-extrabold text-navy text-center mb-3">Straightforward Packages</h2>
        <p className="text-center text-muted mb-10 max-w-2xl mx-auto">
          Priced by the foot so you know the number before you call. Every package is mobile — at your home or storage lot.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((p) => (
            <div key={p.name} className={`rounded-2xl border-2 p-7 flex flex-col ${p.popular ? "border-accent bg-cream shadow-lg" : "border-siteborder bg-white"}`}>
              {p.popular && <p className="text-accent font-bold uppercase tracking-wide text-sm mb-1">Most Popular</p>}
              <h3 className="text-2xl font-bold text-navy mb-1">{p.name}</h3>
              <p className="text-3xl font-extrabold text-navy my-2">{p.price}</p>
              <p className="text-sm text-muted mb-4">{p.priceNote}</p>
              <p className="mb-5">{p.blurb}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-accent font-bold">✓</span> {f}</li>
                ))}
              </ul>
              <a href={site.phoneHref} className="bg-navy text-white text-center font-bold py-3.5 rounded-lg min-h-12 flex items-center justify-center">
                Call for {p.name}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-muted">
          Full price details on the <Link href="/pricing" className="text-accent underline font-semibold">pricing page</Link> — add-ons and season passes included.
        </p>
      </section>

      {/* Services */}
      <section className="bg-cream py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-navy text-center mb-10">What We Clean</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="block rounded-xl border-2 border-siteborder bg-white p-6 hover:border-accent transition-colors">
                <h3 className="text-xl font-bold text-navy mb-2">{s.name}</h3>
                <p className="text-muted">{s.intro.split(".")[0]}.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-extrabold text-navy text-center mb-3">Proudly Serving the Omaha Metro</h2>
        <p className="text-center text-muted mb-8">Including the small towns where the big rigs live:</p>
        <div className="flex flex-wrap justify-center gap-3">
          {towns.map((t) => (
            <Link key={t.slug} href={`/service-areas/${t.slug}`} className="border-2 border-siteborder rounded-full px-5 py-2.5 font-semibold text-navy hover:border-accent hover:text-accent min-h-12 flex items-center">
              {t.name}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 py-14 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready for a cleaner rig?</h2>
          <p className="text-lg text-white/90 mb-8">Call us and we&apos;ll quote it in under a minute — or browse prices first, whichever you prefer.</p>
          <a href={site.phoneHref} className="inline-block bg-accent text-white font-bold text-xl px-8 py-4 rounded-lg min-h-12">
            📞 {site.phone}
          </a>
        </div>
      </section>
    </>
  );
}
