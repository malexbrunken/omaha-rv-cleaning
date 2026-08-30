import Link from "next/link";
import { site } from "@/lib/site";
import { towns } from "@/lib/towns";
import { services } from "@/lib/services";
import { IconCamper } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-espresso text-cream/85 mt-20 texture-grain">
      <div className="h-1 bg-gradient-to-r from-copper via-copper-bright to-copper" />
      <div className="max-w-6xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-4 text-base">
        <div>
          <p className="flex items-center gap-2 font-display font-semibold text-xl text-cream mb-3">
            <span className="text-copper-bright"><IconCamper className="w-7 h-7" /></span>
            Omaha RV Cleaning Co.
          </p>
          <p className="mb-3 leading-relaxed">{site.tagline}</p>
          <a href={site.phoneHref} className="text-copper-bright font-bold text-lg">{site.phone}</a>
          <a href={`mailto:${site.email}`} className="block mt-1 text-cream/80 hover:text-copper-bright transition-colors">{site.email}</a>
          <p className="mt-2 text-cream/70">{site.hours}</p>
        </div>
        <div>
          <p className="font-display font-semibold text-cream mb-3">Services</p>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-copper-bright transition-colors">{s.name}</Link></li>
            ))}
            <li><Link href="/pricing" className="hover:text-copper-bright transition-colors">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display font-semibold text-cream mb-3">Service Areas</p>
          <ul className="space-y-2">
            {towns.map((t) => (
              <li key={t.slug}><Link href={`/service-areas/${t.slug}`} className="hover:text-copper-bright transition-colors">RV Cleaning in {t.name}, NE</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display font-semibold text-cream mb-3">Company</p>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-copper-bright transition-colors">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-copper-bright transition-colors">Before &amp; After</Link></li>
            <li><Link href="/faq" className="hover:text-copper-bright transition-colors">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-copper-bright transition-colors">Get a Quote</Link></li>
            <li><Link href="/blog" className="hover:text-copper-bright transition-colors">RV Care Guides</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-cream/60 px-4">
        © {new Date().getFullYear()} Omaha RV Cleaning Co. · RV, camper &amp; trailer cleaning throughout the Omaha metro ·{" "}
        <Link href="/sitemap.xml" className="underline hover:text-copper-bright">Sitemap</Link>
      </div>
    </footer>
  );
}

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-copper text-white text-center py-4 font-bold text-lg shadow-[0_-4px_16px_rgba(0,0,0,0.35)]">
      <a href={site.phoneHref} className="block">Call {site.phone}</a>
    </div>
  );
}
