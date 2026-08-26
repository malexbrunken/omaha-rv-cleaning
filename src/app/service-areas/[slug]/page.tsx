import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { towns, townBySlug } from "@/lib/towns";
import { site } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return towns.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/service-areas/[slug]">): Promise<Metadata> {
  const t = townBySlug((await params).slug);
  if (!t) return {};
  return {
    title: `RV Cleaning in ${t.name}, NE | Mobile RV & Camper Cleaning`,
    description: `Mobile RV, camper, and trailer cleaning in ${t.name}, Nebraska. Hand washing, interior detailing, and dry vapor steam sanitizing — at your home or storage lot.`,
  };
}

export default async function TownPage({ params }: PageProps<"/service-areas/[slug]">) {
  const { slug } = await params;
  const t = townBySlug(slug);
  if (!t) notFound();
  const nearby = t.nearby
    .map((s) => townBySlug(s))
    .filter((x): x is NonNullable<typeof x> => !!x);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: site.url },
        { name: "Service Areas", url: `${site.url}/service-areas` },
        { name: t.name, url: `${site.url}/service-areas/${t.slug}` },
      ]} />
      <nav aria-label="Breadcrumb" className="text-muted mb-4">
        <Link href="/" className="text-accent hover:underline">Home</Link> ›{" "}
        <Link href="/service-areas" className="text-accent hover:underline">Service Areas</Link> › {t.name}
      </nav>

      <h1 className="text-4xl font-extrabold text-navy mb-5">{t.headline}</h1>
      <p className="text-xl mb-8">{t.intro}</p>

      <a href={site.phoneHref} className="inline-block bg-accent text-white font-bold text-lg px-7 py-4 rounded-lg mb-10">
        Call {site.phone} — {t.name} quotes in under a minute
      </a>

      {t.local.map((p, i) => (
        <p key={i} className="mb-5 text-lg">{p}</p>
      ))}

      <h2 className="text-2xl font-bold text-navy mb-4">We clean near you in {t.name}</h2>
      <ul className="space-y-2 mb-10 rounded-2xl bg-cream border border-siteborder p-6">
        {t.anchors.map((a) => (
          <li key={a} className="flex gap-3"><span className="text-accent font-bold">•</span> {a}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-navy mb-4">Our services</h2>
      <ul className="space-y-2 mb-10 text-lg">
        <li>🧼 <Link href="/services/rv-exterior-washing" className="text-accent underline font-semibold">RV exterior washing</Link> — $7/ft</li>
        <li>🏠 <Link href="/services/rv-interior-cleaning" className="text-accent underline font-semibold">RV interior cleaning</Link></li>
        <li>💧 <Link href="/services/rv-steam-sanitization" className="text-accent underline font-semibold">Dry vapor steam sanitizing</Link> — unique in the Omaha area</li>
        <li>🛏️ <Link href="/services/rv-mattress-cleaning" className="text-accent underline font-semibold">RV mattress steam cleaning</Link></li>
        <li>🪟 <Link href="/services/rv-detailing" className="text-accent underline font-semibold">Full RV detailing</Link></li>
      </ul>

      <h2 className="text-2xl font-bold text-navy mb-4">Also serving nearby</h2>
      <p className="mb-10 text-lg">
        {nearby.map((n, i) => (
          <span key={n.slug}>
            <Link href={`/service-areas/${n.slug}`} className="text-accent underline font-semibold">RV cleaning in {n.name}</Link>
            {i < nearby.length - 1 ? " · " : ""}
          </span>
        ))}
      </p>
    </div>
  );
}
