import Link from "next/link";
import { site } from "@/lib/site";
import { IconCamper } from "./Icons";

export function Header() {
  return (
    <header className="bg-espresso text-cream sticky top-0 z-40 shadow-lg shadow-black/20 texture-grain">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-4 py-3.5">
        <Link href="/" className="flex items-center gap-2.5 min-w-0 group">
          <span className="text-copper-bright transition-transform group-hover:-rotate-6">
            <IconCamper className="w-8 h-8" />
          </span>
          <span className="font-display font-semibold text-lg sm:text-xl leading-tight tracking-tight">
            Omaha RV Cleaning<span className="text-copper-bright"> Co.</span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6 text-[15px] font-medium">
          <Link href="/services" className="text-cream/85 hover:text-copper-bright transition-colors">Services</Link>
          <Link href="/pricing" className="text-cream/85 hover:text-copper-bright transition-colors">Pricing</Link>
          <Link href="/service-areas" className="text-cream/85 hover:text-copper-bright transition-colors">Service Areas</Link>
          <Link href="/blog" className="text-cream/85 hover:text-copper-bright transition-colors">Guides</Link>
          <Link href="/contact" className="text-cream/85 hover:text-copper-bright transition-colors">Contact</Link>
        </nav>
        <a
          href={site.phoneHref}
          className="bg-copper hover:bg-copper-bright text-white font-bold px-5 py-3 rounded-xl text-[15px] whitespace-nowrap min-h-12 flex items-center shadow-md shadow-black/30 transition-colors"
        >
          Call {site.phone}
        </a>
      </div>
      {/* mobile nav */}
      <nav aria-label="Mobile navigation" className="md:hidden bg-espresso-2 flex overflow-x-auto gap-5 px-4 py-3 text-[15px] font-medium border-t border-white/10">
        <Link href="/services" className="whitespace-nowrap text-cream/85 hover:text-copper-bright">Services</Link>
        <Link href="/pricing" className="whitespace-nowrap text-cream/85 hover:text-copper-bright">Pricing</Link>
        <Link href="/service-areas" className="whitespace-nowrap text-cream/85 hover:text-copper-bright">Areas</Link>
        <Link href="/blog" className="whitespace-nowrap text-cream/85 hover:text-copper-bright">Guides</Link>
        <Link href="/contact" className="whitespace-nowrap text-cream/85 hover:text-copper-bright">Contact</Link>
      </nav>
    </header>
  );
}
