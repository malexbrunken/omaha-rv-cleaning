import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Omaha RV Cleaning Co. | RV-Only, Locally Owned",
  description:
    "Meet the founders of Omaha RV Cleaning Co. — an RV-only cleaning company serving the Omaha metro with hand washing, detailing, and dry vapor steam sanitizing.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-navy mb-5">About Omaha RV Cleaning Co.</h1>
      <p className="text-xl mb-6">
        We&apos;re a small, locally owned company built around one idea: RVs deserve better than being the last tab on a car detailer&apos;s
        website. So we made them our only business.
      </p>

      <h2 className="text-2xl font-bold text-navy mb-3">Our story</h2>
      <p className="mb-5">
        Our founders come from the grill-cleaning trade, where we learned the same lesson twice over: when you specialize in
        one thing and do it properly, word travels fast in a town like Omaha. Grill cleaning taught us surface care, heat-based
        sanitation, and how to show up on time and leave things better than we found them. RV cleaning is that same craft,
        applied to the vehicle Nebraska families actually live in.
      </p>

      <h2 className="text-2xl font-bold text-navy mb-3">What makes us different</h2>
      <ul className="space-y-3 mb-8 text-lg">
        <li><strong>RVs only.</strong> Every tool, product, and technique we own exists for one vehicle type.</li>
        <li><strong>Dry vapor steam sanitation.</strong> The only service of its kind for RVs in the Omaha area — chemical-free sanitizing that kills mold, mildew, bacteria, and dust mites, and it&apos;s gentle enough for mattresses and upholstery.</li>
        <li><strong>Published pricing.</strong> Real numbers on our <Link href="/pricing" className="text-accent underline font-semibold">pricing page</Link>, because a fair price shouldn&apos;t be a secret.</li>
        <li><strong>Truly mobile.</strong> Self-contained rig — soft water and power on board. We clean at your driveway, storage lot, or campground.</li>
      </ul>

      <h2 className="text-2xl font-bold text-navy mb-3">The way we work</h2>
      <p className="mb-8">
        Hand wash, never brushed. We flag roof sealant problems while we&apos;re up there, at no charge. We text before we start
        and when we finish. And we answer the phone — {site.hours}, a real person.
      </p>

      <div className="bg-cream border border-siteborder rounded-2xl p-8 text-center">
        <p className="text-xl font-bold text-navy mb-4">Questions? We&apos;re happy to talk.</p>
        <a href={site.phoneHref} className="inline-block bg-accent text-white font-bold text-lg px-8 py-4 rounded-lg">
          Call {site.phone}
        </a>
      </div>
    </div>
  );
}
