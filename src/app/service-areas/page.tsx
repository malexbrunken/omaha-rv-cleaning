import type { Metadata } from "next";
import Link from "next/link";
import { towns } from "@/lib/towns";

export const metadata: Metadata = {
  title: "RV Cleaning Service Areas | Omaha Metro & Surrounding Towns",
  description:
    "Mobile RV cleaning throughout the Omaha metro: Omaha, Elkhorn, Valley, Waterloo, Bennington, Gretna, Papillion, La Vista, Millard, and Ashland NE.",
};

export default function ServiceAreasPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-espresso mb-4">Where We Clean</h1>
      <p className="text-lg text-mist mb-10 max-w-3xl">
        We&apos;re mobile and fully self-contained — no water or power needed from your site — so if your RV is parked
        anywhere in the Omaha metro, we can clean it. Select your town for local details:
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {towns.map((t) => (
          <Link key={t.slug} href={`/service-areas/${t.slug}`} className="rounded-xl border-2 border-line p-6 hover:border-copper">
            <p className="font-bold text-espresso text-lg">{t.name}, NE</p>
            <p className="text-mist text-sm">{t.county}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
