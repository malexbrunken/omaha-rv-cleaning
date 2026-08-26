import Link from "next/link";
import { site } from "@/lib/site";
import { towns } from "@/lib/towns";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/90 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-4 text-base">
        <div>
          <p className="font-extrabold text-xl text-white mb-3">Omaha RV Cleaning Co.</p>
          <p className="mb-3">{site.tagline}</p>
          <a href={site.phoneHref} className="text-tan font-bold text-lg">{site.phone}</a>
          <p className="mt-2">{site.hours}</p>
        </div>
        <div>
          <p className="font-bold text-white mb-3">Services</p>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-tan">{s.name}</Link></li>
            ))}
            <li><Link href="/pricing" className="hover:text-tan">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-white mb-3">Service Areas</p>
          <ul className="space-y-2">
            {towns.map((t) => (
              <li key={t.slug}><Link href={`/service-areas/${t.slug}`} className="hover:text-tan">RV Cleaning in {t.name}, NE</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-white mb-3">Company</p>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-tan">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-tan">Before &amp; After</Link></li>
            <li><Link href="/faq" className="hover:text-tan">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-tan">Get a Quote</Link></li>
            <li><Link href="/blog" className="hover:text-tan">RV Care Guides</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15 py-5 text-center text-sm text-white/70 px-4">
        © {new Date().getFullYear()} Omaha RV Cleaning Co. · RV, camper &amp; trailer cleaning throughout the Omaha metro ·{" "}
        <Link href="/sitemap.xml" className="underline">Sitemap</Link>
      </div>
    </footer>
  );
}

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-accent text-white text-center py-4 font-bold text-lg shadow-[0_-4px_16px_rgba(0,0,0,0.25)]">
      <a href={site.phoneHref} className="block">📞 Call {site.phone}</a>
    </div>
  );
}
