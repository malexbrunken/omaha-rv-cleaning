import Image from "next/image";
import Link from "next/link";
import { site, packages } from "@/lib/site";
import { towns } from "@/lib/towns";
import { QuoteCalc } from "@/components/QuoteCalc";
import {
  IconCamper,
  IconDroplet,
  IconMapPin,
  IconShield,
  IconSparkle,
  IconSteamer,
  IconSun,
} from "@/components/Icons";

const standards = [
  { icon: IconDroplet, title: "Soft water onboard", text: "No hard-water spots. No hose or power needed from you." },
  { icon: IconShield, title: "Material-safe process", text: "RV-specific products for gel coat, rubber roofs, vinyl, and leather." },
  { icon: IconSteamer, title: "True dry-vapor steam", text: "High-temperature sanitation with almost no moisture or residue." },
];

const serviceStories = [
  {
    image: "/images/hand-wash.jpg",
    label: "Exterior craft",
    title: "Washed by hand. Finished to glow.",
    text: "A foam bath, roof-down hand wash, dressed wheels, spotless glass, and spray-wax protection — never a harsh brush tunnel.",
    href: "/services/rv-exterior-washing",
  },
  {
    image: "/images/interior-leather.jpg",
    label: "Interior detail",
    title: "Every surface treated like it belongs in a home.",
    text: "Leather, upholstery, cabinetry, galley, bath, floors, and cockpit — cleaned with products chosen for upscale RV interiors.",
    href: "/services/rv-interior-cleaning",
  },
  {
    image: "/images/mattress.jpg",
    label: "Our signature difference",
    title: "The mattress nobody else cleans.",
    text: "Dry-vapor steam targets odors, bacteria, mold, and dust mites without soaking the foam you sleep on.",
    href: "/services/rv-mattress-cleaning",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Cinematic hero */}
      <section className="relative min-h-[720px] flex items-end overflow-hidden bg-espresso text-cream">
        <Image
          src="/images/hero-rv.jpg"
          alt="Freshly detailed motorhome glowing at a lakeside campground at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(25,14,5,.96)_0%,rgba(25,14,5,.79)_42%,rgba(25,14,5,.18)_75%),linear-gradient(0deg,rgba(22,12,4,.75)_0%,transparent_45%)]" />
        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 pb-16 pt-24 md:pb-24">
          <div className="max-w-3xl">
            <p className="kicker text-copper-bright mb-5">Omaha&apos;s RV-only cleaning specialists</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-[.98] text-balance mb-7">
              Bring back that<br />first-trip feeling.
            </h1>
            <p className="text-xl md:text-2xl text-cream/88 max-w-2xl leading-relaxed mb-9">
              Meticulous mobile detailing for motorhomes, fifth wheels, and campers — from a gleaming roofline to a steam-sanitized mattress.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={site.phoneHref} className="bg-copper hover:bg-copper-bright text-white font-bold px-7 py-4 rounded-xl min-h-12 flex items-center shadow-xl shadow-black/30 transition-colors">
                Call {site.phone}
              </a>
              <Link href="/pricing" className="border border-cream/60 bg-black/15 backdrop-blur-sm hover:bg-cream hover:text-espresso text-cream font-bold px-7 py-4 rounded-xl min-h-12 flex items-center transition-colors">
                View transparent pricing
              </Link>
            </div>
            <p className="mt-6 text-sm text-cream/65 tracking-wide">SELF-CONTAINED MOBILE SERVICE · OMAHA METRO · 7 DAYS A WEEK</p>
          </div>
        </div>
      </section>

      {/* Elevated standards */}
      <section className="bg-cream-2 border-b border-line">
        <div className="max-w-6xl mx-auto px-4 py-8 grid gap-7 md:grid-cols-3">
          {standards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4 items-start">
              <span className="text-copper-deep mt-1"><Icon className="w-7 h-7" /></span>
              <div>
                <h2 className="font-sans text-base font-bold tracking-wide mb-0.5">{title}</h2>
                <p className="text-sm text-mist leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialty positioning */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid gap-12 lg:grid-cols-[.9fr_1.1fr] items-center">
        <div>
          <p className="kicker text-copper-deep mb-4">One vehicle type, mastered</p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">Not a car wash with a taller ladder.</h2>
          <p className="text-xl text-mist leading-relaxed mb-8">
            Your RV combines an exterior finish, rubber roof, plumbing, fine upholstery, sleeping spaces, and a home interior. Our equipment, chemistry, and process are built around that reality.
          </p>
          <Link href="/about" className="inline-flex items-center gap-2 text-copper-deep font-bold border-b-2 border-copper pb-1 hover:text-espresso transition-colors">
            Meet the standard behind our work <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-espresso/20">
            <Image src="/images/roof-wash.jpg" alt="Freshly washed travel trailer roof gleaming in warm sunlight" fill sizes="(max-width:1024px) 100vw, 55vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-3 md:-left-8 bg-espresso text-cream rounded-2xl p-5 shadow-xl max-w-[250px] texture-grain">
            <IconSun className="w-7 h-7 text-copper-bright mb-2" />
            <p className="font-display text-xl leading-tight">Roof-to-road attention.</p>
            <p className="text-sm text-cream/70 mt-1">We inspect sealant while we clean — and flag what we find.</p>
          </div>
        </div>
      </section>

      {/* Service stories */}
      <section className="bg-espresso text-cream texture-grain py-20 md:py-28">
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <p className="kicker text-copper-bright mb-4">Professional care, end to end</p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-5">Clean enough to see. Fresh enough to feel.</h2>
            <p className="text-xl text-cream/70">Three disciplines. One specialist crew. A result that feels less like a wash and more like getting your RV back.</p>
          </div>
          <div className="grid gap-7 lg:grid-cols-3">
            {serviceStories.map((s) => (
              <article key={s.title} className="group bg-espresso-2 rounded-2xl overflow-hidden border border-white/10">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={s.image} alt="" fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <p className="kicker text-copper-bright mb-2">{s.label}</p>
                  <h3 className="text-2xl font-semibold mb-3 leading-tight">{s.title}</h3>
                  <p className="text-cream/68 text-base leading-relaxed mb-5">{s.text}</p>
                  <Link href={s.href} className="font-bold text-copper-bright hover:text-cream transition-colors">Explore the service →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Packages + calculator */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <p className="kicker text-copper-deep mb-4">Published per-foot pricing</p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-5">No mystery quotes. Choose your level of care.</h2>
            <p className="text-xl text-mist">Market-matched Omaha pricing, with clear inclusions and no charge to come to your home or storage lot.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.45fr_.75fr] items-start">
            <div className="grid gap-5">
              {packages.map((p, i) => (
                <article key={p.name} className={`ridge bg-white rounded-2xl border p-6 md:p-7 shadow-sm ${p.popular ? "border-copper shadow-lg shadow-copper/10" : "border-line"}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="max-w-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-copper-deep">{i === 0 ? <IconDroplet /> : <IconSparkle />}</span>
                        <h3 className="text-2xl md:text-3xl font-semibold">{p.name}</h3>
                        {p.popular && <span className="kicker text-[10px] bg-copper text-white rounded-full px-3 py-1">Best value</span>}
                      </div>
                      <p className="text-mist leading-relaxed">{p.blurb}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-4xl font-semibold text-copper-deep">{p.price}</p>
                      <p className="text-xs text-mist mt-1">{p.priceNote}</p>
                    </div>
                  </div>
                  <ul className="mt-5 pt-5 border-t border-line grid gap-x-5 gap-y-2 sm:grid-cols-2 text-sm">
                    {p.features.map((f) => <li key={f} className="flex gap-2"><span className="text-copper font-bold">—</span>{f}</li>)}
                  </ul>
                </article>
              ))}
              <Link href="/pricing" className="font-bold text-copper-deep hover:text-espresso text-center py-2">Compare every inclusion and add-on →</Link>
            </div>
            <div className="lg:sticky lg:top-28"><QuoteCalc /></div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-espresso/15">
            <Image src="/images/campfire-beach.jpg" alt="Clean camper beside a lake and campfire at sunset" fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" />
          </div>
          <div>
            <p className="kicker text-copper-deep mb-4">Simple by design</p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">You plan the next trip. We handle the reset.</h2>
            <ol className="space-y-7">
              {[
                ["01", "Tell us your rig", "Length, location, and what needs attention. Your estimate takes under a minute."],
                ["02", "We arrive self-contained", "Soft water, power, ladders, steam system, and RV-safe products come with us."],
                ["03", "Walk back into fresh", "We text when the detail is complete, with anything we noticed along the way."],
              ].map(([n, t, d]) => (
                <li key={n} className="flex gap-5">
                  <span className="font-display text-3xl text-copper leading-none pt-1">{n}</span>
                  <div><h3 className="font-sans text-lg font-bold mb-1">{t}</h3><p className="text-mist leading-relaxed">{d}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Local service area */}
      <section className="bg-cream-2 border-y border-line py-16">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-[1fr_1.4fr] items-center">
          <div>
            <IconMapPin className="w-8 h-8 text-copper-deep mb-3" />
            <p className="kicker text-copper-deep mb-3">Built for where the rigs live</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Across the Omaha metro.</h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {towns.map((t) => (
              <Link key={t.slug} href={`/service-areas/${t.slug}`} className="bg-paper border border-line rounded-full px-4 py-2 text-sm font-semibold hover:border-copper hover:text-copper-deep transition-colors">
                {t.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-espresso text-cream texture-grain">
        <div className="absolute right-0 inset-y-0 w-1/2 opacity-20 bg-[radial-gradient(circle_at_center,var(--copper)_0%,transparent_68%)]" />
        <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
          <IconCamper className="w-12 h-12 text-copper-bright mx-auto mb-5" />
          <p className="kicker text-copper-bright mb-4">The road will get it dirty again</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-5">That&apos;s what summer is for.</h2>
          <p className="text-xl text-cream/75 mb-8">Give us the reset between adventures. Your exact quote is one quick call away.</p>
          <a href={site.phoneHref} className="inline-flex bg-copper hover:bg-copper-bright text-white font-bold text-lg px-8 py-4 rounded-xl min-h-12 items-center transition-colors shadow-xl shadow-black/30">
            Call {site.phone}
          </a>
        </div>
      </section>
    </>
  );
}
