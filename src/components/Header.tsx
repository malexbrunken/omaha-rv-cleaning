import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="bg-navy text-white sticky top-0 z-40 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <span className="text-2xl" aria-hidden>🚐</span>
          <span className="font-extrabold text-lg sm:text-xl leading-tight">
            Omaha RV Cleaning <span className="text-tan">Co.</span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-5 text-base">
          <Link href="/services" className="hover:text-tan">Services</Link>
          <Link href="/pricing" className="hover:text-tan">Pricing</Link>
          <Link href="/service-areas" className="hover:text-tan">Service Areas</Link>
          <Link href="/blog" className="hover:text-tan">Guides</Link>
          <Link href="/contact" className="hover:text-tan">Contact</Link>
        </nav>
        <a
          href={site.phoneHref}
          className="bg-accent text-white font-bold px-4 py-3 rounded-lg text-base whitespace-nowrap min-h-12 flex items-center"
        >
          Call {site.phone}
        </a>
      </div>
      {/* mobile nav */}
      <nav aria-label="Mobile navigation" className="md:hidden flex overflow-x-auto gap-4 px-4 pb-3 text-base border-t border-white/20">
        <Link href="/services" className="whitespace-nowrap hover:text-tan">Services</Link>
        <Link href="/pricing" className="whitespace-nowrap hover:text-tan">Pricing</Link>
        <Link href="/service-areas" className="whitespace-nowrap hover:text-tan">Areas</Link>
        <Link href="/blog" className="whitespace-nowrap hover:text-tan">Guides</Link>
        <Link href="/contact" className="whitespace-nowrap hover:text-tan">Contact</Link>
      </nav>
    </header>
  );
}
