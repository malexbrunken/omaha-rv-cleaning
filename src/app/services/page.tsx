import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "RV Cleaning Services Omaha | Detailing, Washing, Steam Sanitizing",
  description:
    "Full menu of RV cleaning services for the Omaha metro: exterior washing, interior cleaning, detailing, dry vapor steam sanitization, mattress steam cleaning, and seasonal storage washes.",
};

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-navy mb-4">Our RV Cleaning Services</h1>
      <p className="text-lg text-muted max-w-3xl mb-10">
        Everything below is done at your location — driveway, storage lot, or campground — anywhere in the Omaha metro.
        Every service is built for RVs specifically: the surfaces, the heights, the interiors, the mattresses.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.slug} className="rounded-2xl border-2 border-siteborder bg-white p-7">
            <h2 className="text-2xl font-bold text-navy mb-3">{s.name}</h2>
            <p className="mb-4">{s.intro}</p>
            <ul className="space-y-1.5 text-muted mb-5">
              {s.includes.slice(0, 4).map((i) => (
                <li key={i} className="flex gap-2"><span className="text-accent font-bold">✓</span> {i}</li>
              ))}
              {s.includes.length > 4 && <li className="text-muted italic">…and more</li>}
            </ul>
            <div className="flex gap-3">
              <Link href={`/services/${s.slug}`} className="bg-navy text-white font-bold px-5 py-3 rounded-lg min-h-12 flex items-center">
                Details &amp; Pricing
              </Link>
              <a href={site.phoneHref} className="border-2 border-navy text-navy font-bold px-5 py-3 rounded-lg min-h-12 flex items-center">
                Call
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
