import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPosts, getPost } from "@/lib/posts";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return { title: p.title, description: p.excerpt };
}

// tiny safe markdown subset: headings, lists, bold, links, paragraphs
function renderMarkdown(md: string) {
  const lines = md.split("\n");
  const out: React.ReactNode[] = [];
  let list: string[] = [];
  let key = 0;
  const inline = (t: string): React.ReactNode => {
    const parts: React.ReactNode[] = [];
    let rest = t;
    let k = 0;
    const rx = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/;
    while (rx.test(rest)) {
      const m = rest.match(rx)!;
      const [full] = m;
      const before = rest.slice(0, m.index);
      if (before) parts.push(before);
      if (full.startsWith("**")) {
        parts.push(<strong key={k++}>{full.slice(2, -2)}</strong>);
      } else {
        const lm = full.match(/\[([^\]]+)\]\(([^)]+)\)/)!;
        parts.push(<Link key={k++} href={lm[2]} className="text-copper underline font-semibold">{lm[1]}</Link>);
      }
      rest = rest.slice(m.index! + full.length);
    }
    if (rest) parts.push(rest);
    return parts;
  };
  const flushList = () => {
    if (list.length) {
      out.push(<ul key={key++}>{list.map((li) => <li key={li}>{inline(li)}</li>)}</ul>);
      list = [];
    }
  };
  for (const line of lines) {
    const t = line.trim();
    if (!t) { flushList(); continue; }
    if (t.startsWith("## ")) { flushList(); out.push(<h2 key={key++}>{inline(t.slice(3))}</h2>); }
    else if (t.startsWith("### ")) { flushList(); out.push(<h3 key={key++}>{inline(t.slice(4))}</h3>); }
    else if (/^[-*] /.test(t)) { list.push(t.slice(2)); }
    else { flushList(); out.push(<p key={key++}>{inline(t)}</p>); }
  }
  flushList();
  return out;
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const related = getPosts().filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav aria-label="Breadcrumb" className="text-mist mb-4">
        <Link href="/" className="text-copper hover:underline">Home</Link> ›{" "}
        <Link href="/blog" className="text-copper hover:underline">Guides</Link> › {p.title}
      </nav>
      <p className="text-sm font-bold text-copper uppercase tracking-wide mb-1">
        {p.category} · {new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </p>
      <h1 className="text-4xl font-extrabold text-espresso mb-6 leading-tight">{p.title}</h1>
      <div className="prose-rv text-lg">{renderMarkdown(p.content)}</div>

      <div className="bg-cream border-2 border-copper rounded-2xl p-7 my-10 text-center">
        <p className="font-bold text-espresso text-xl mb-3">Want this done for you?</p>
        <a href={site.phoneHref} className="inline-block bg-copper text-white font-bold text-lg px-8 py-4 rounded-lg">
          Call {site.phone}
        </a>
        <p className="text-mist mt-3">{site.hours} · mobile service across the Omaha metro</p>
      </div>

      <h2 className="text-2xl font-bold text-espresso mb-4">More guides</h2>
      <ul className="space-y-2 text-lg">
        {related.map((r) => (
          <li key={r.slug}>📖 <Link href={`/blog/${r.slug}`} className="text-copper underline font-semibold">{r.title}</Link></li>
        ))}
      </ul>
    </div>
  );
}
