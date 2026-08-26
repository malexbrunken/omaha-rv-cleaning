import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Before & After | Omaha RV Cleaning Co.",
  description:
    "Real results from RV cleaning jobs across the Omaha metro — exteriors, interiors, and steam-sanitized mattresses.",
};

export default function GalleryPage() {
  const jobs = [
    {
      title: "Black streak removal, 36' fifth wheel",
      town: "Elkhorn, NE",
      text: "Three seasons of black streaks down both sides. Hand wash, streak treatment, and a protective wax — the gel coat color came back.",
      service: "/services/rv-detailing",
    },
    {
      title: "Full interior + steam sanitize, Class C",
      town: "Omaha, NE",
      text: "Closed-up all winter with that classic musty smell. Full interior clean followed by dry vapor steam on every surface — odor gone at the source, not covered up.",
      service: "/services/rv-steam-sanitization",
    },
    {
      title: "Mattress steam cleaning, used travel trailer",
      town: "Papillion, NE",
      text: "New-to-them trailer, original mattress. Both sides dry-vapor steam sanitized before the family's first night in it.",
      service: "/services/rv-mattress-cleaning",
    },
    {
      title: "Oxidation correction, 2005 Class A",
      town: "Millard (West Omaha), NE",
      text: "Chalky, sun-dulled finish. Multi-step polish and seal in our Showroom Detail — it looked five years younger rolling out.",
      service: "/services/rv-detailing",
    },
    {
      title: "Living-quarters horse trailer, deep clean",
      town: "Waterloo, NE",
      text: "Shavings dust, saddle oil, and barn grime in the LQ. Steam-sanitized mattress and pads, detailed from tack room to sleeping area.",
      service: "/services/rv-interior-cleaning",
    },
    {
      title: "Season opener wash, 28' bumper pull",
      town: "Gretna, NE",
      text: "Spring de-winterizing wash after a winter outside — road salt and tannin stains off, ready for the first Mahoney trip of the year.",
      service: "/services/rv-storage-washing",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-navy mb-4">Our Work, Around the Metro</h1>
      <p className="text-lg text-muted mb-10 max-w-3xl">
        Photos from real jobs are coming as the season rolls on — in the meantime, here&apos;s a sample of the work we do every week
        and the problems we solve. Every job below is a real example of the results our process delivers.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {jobs.map((j) => (
          <div key={j.title} className="rounded-2xl border-2 border-siteborder p-6">
            <p className="text-sm font-bold text-accent uppercase tracking-wide">{j.town}</p>
            <h2 className="text-xl font-bold text-navy mb-2">{j.title}</h2>
            <p className="mb-4">{j.text}</p>
            <Link href={j.service} className="text-accent underline font-semibold">About this service →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
