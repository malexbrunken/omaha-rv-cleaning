import type { Metadata } from "next";
import { site } from "@/lib/site";
import { QuoteForm } from "./QuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote | Omaha RV Cleaning Co.",
  description:
    "Get a fast quote for RV cleaning in the Omaha metro. Call us or send the short form — we respond the same day.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-navy mb-5">Get a Quote</h1>
      <p className="text-xl mb-8">
        The fastest way is the phone — we&apos;ll quote it in under a minute. Prefer to send it in writing? The form below is short on purpose.
      </p>

      <div className="bg-navy text-white rounded-2xl p-8 mb-10 text-center">
        <p className="text-lg mb-3">Call or text, 7 days a week:</p>
        <a href={site.phoneHref} className="inline-block bg-accent text-white font-bold text-2xl px-8 py-4 rounded-lg">
          📞 {site.phone}
        </a>
        <p className="text-white/70 mt-3">{site.hours}</p>
      </div>

      <h2 className="text-2xl font-bold text-navy mb-4">Or send us the details</h2>
      <QuoteForm />
      <p className="text-muted mt-4">We reply the same day — usually within a couple of hours.</p>
    </div>
  );
}
