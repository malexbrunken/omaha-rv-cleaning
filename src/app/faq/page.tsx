import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { FaqJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "RV Cleaning FAQ | Omaha RV Cleaning Co.",
  description:
    "Answers about mobile RV cleaning in the Omaha metro: water/power needs, storage-lot service, steam sanitizing, mattresses, seasonal washes, and pricing.",
};

const faqs = [
  {
    q: "Do you clean RVs at storage lots?",
    a: "Yes — a large share of our work happens at storage lots across the Omaha metro. You don't need to move your rig or be present; we text you before we start and a photo when we finish.",
  },
  {
    q: "Do I need to provide water or electricity?",
    a: "No. Our mobile rig is fully self-contained with its own softened water and power. That's also why you never get hard-water spots on your finish.",
  },
  {
    q: "What is dry vapor steam, exactly?",
    a: "Superheated water vapor with very low moisture content. At the nozzle it's hot enough to kill mold, mildew, bacteria, and dust mites on contact, but it leaves surfaces nearly dry — which makes it the safest way to sanitize RV interiors, upholstery, and mattresses.",
  },
  {
    q: "Can you really clean an RV mattress?",
    a: "Yes, and nobody else in the Omaha area does it. We sanitize both sides of the mattress with dry vapor steam, which kills dust mites and bacteria without soaking the foam core. Used-RV buyers: do this before your first night.",
  },
  {
    q: "Do you detail cars, boats, or motorcycles?",
    a: "No — RVs, campers, trailers, and living-quarters horse trailers only. Specializing is the whole point.",
  },
  {
    q: "How often should I have my RV washed?",
    a: "If it's stored outside in Nebraska, every 6–8 weeks during the season, plus a storage-ready wash in fall and a de-winterizing wash in spring. Stored inside, twice a season is usually enough.",
  },
  {
    q: "How do I know what it will cost before you arrive?",
    a: "Our per-foot pricing is published right on the website — see our pricing page. On the phone we confirm your length and condition, and the price we quote is the price you pay.",
  },
  {
    q: "What areas do you serve?",
    a: "The whole Omaha metro: Omaha, Elkhorn, Valley, Waterloo, Bennington, Gretna, Papillion, La Vista, Millard, and Ashland.",
  },
];

export default function FaqPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <FaqJsonLd faq={faqs} />
      <h1 className="text-4xl font-extrabold text-navy mb-5">Frequently Asked Questions</h1>
      <div className="space-y-6 mt-8">
        {faqs.map((f) => (
          <div key={f.q}>
            <h2 className="text-xl font-bold text-navy mb-1">{f.q}</h2>
            <p className="text-muted text-lg">{f.a}</p>
          </div>
        ))}
      </div>
      <div className="bg-cream border border-siteborder rounded-2xl p-7 mt-10 text-center">
        <p className="font-bold text-navy text-lg mb-3">Still have a question?</p>
        <a href={site.phoneHref} className="inline-block bg-accent text-white font-bold px-7 py-3.5 rounded-lg">
          Call {site.phone}
        </a>
        {" "}
        <Link href="/contact" className="inline-block border-2 border-navy text-navy font-bold px-7 py-3.5 rounded-lg">
          Send a message
        </Link>
      </div>
    </div>
  );
}
