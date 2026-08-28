import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, serviceBySlug } from "@/lib/services";
import { site } from "@/lib/site";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const s = serviceBySlug((await params).slug);
  if (!s) return {};
  return { title: s.title, description: s.description };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: site.url },
        { name: "Services", url: `${site.url}/services` },
        { name: s.name, url: `${site.url}/services/${s.slug}` },
      ]} />
      <ServiceJsonLd name={`${s.name} — Omaha metro`} description={s.description} url={`${site.url}/services/${s.slug}`} />
      {s.faq.length > 0 && <FaqJsonLd faq={s.faq} />}

      <nav aria-label="Breadcrumb" className="text-mist mb-4">
        <Link href="/" className="text-copper hover:underline">Home</Link> ›{" "}
        <Link href="/services" className="text-copper hover:underline">Services</Link> › {s.name}
      </nav>

      <h1 className="text-4xl font-extrabold text-espresso mb-5">{s.h1}</h1>
      <p className="text-xl mb-8">{s.intro}</p>

      <a href={site.phoneHref} className="inline-block bg-copper text-white font-bold text-lg px-7 py-4 rounded-lg mb-10">
        Call {site.phone} for a fast quote
      </a>

      <h2 className="text-2xl font-bold text-espresso mb-4">What&apos;s included</h2>
      <ul className="space-y-2.5 mb-10 rounded-2xl bg-cream border border-line p-6">
        {s.includes.map((i) => (
          <li key={i} className="flex gap-3 text-lg"><span className="text-copper font-bold">✓</span> {i}</li>
        ))}
      </ul>

      {s.detail.map((p, i) => (
        <p key={i} className="mb-5 text-lg">{p}</p>
      ))}

      <h2 className="text-2xl font-bold text-espresso mt-10 mb-4">Questions we hear a lot</h2>
      {s.faq.map((f) => (
        <div key={f.q} className="mb-5">
          <h3 className="font-bold text-lg text-espresso">{f.q}</h3>
          <p className="text-mist">{f.a}</p>
        </div>
      ))}

      <h2 className="text-2xl font-bold text-espresso mt-12 mb-4">Related services</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {others.map((o) => (
          <Link key={o.slug} href={`/services/${o.slug}`} className="rounded-xl border-2 border-line p-5 hover:border-copper">
            <p className="font-bold text-espresso">{o.name}</p>
          </Link>
        ))}
      </div>
      <p className="mt-8">
        Serving all of the Omaha metro — see your town on our{" "}
        <Link href="/service-areas" className="text-copper underline font-semibold">service-area pages</Link> or view{" "}
        <Link href="/pricing" className="text-copper underline font-semibold">transparent pricing</Link>.
      </p>
    </div>
  );
}
