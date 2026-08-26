import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "RV Care Guides | Omaha RV Cleaning Co.",
  description:
    "Practical RV care guides for Nebraska owners: cleaning costs, roof washing, black streaks, steam sanitation, seasonal storage prep, and more.",
};

export default function BlogPage() {
  const posts = getPosts();
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-navy mb-4">RV Care Guides</h1>
      <p className="text-lg text-muted mb-10">
        Written for Nebraska RV owners — no fluff, just what actually works in our climate and roads.
      </p>
      <div className="space-y-6">
        {posts.map((p) => (
          <article key={p.slug} className="rounded-2xl border-2 border-siteborder p-6">
            <p className="text-sm font-bold text-accent uppercase tracking-wide mb-1">
              {p.category} · {new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
            <h2 className="text-2xl font-bold text-navy mb-2">
              <Link href={`/blog/${p.slug}`} className="hover:text-accent">{p.title}</Link>
            </h2>
            <p className="text-lg text-muted mb-3">{p.excerpt}</p>
            <Link href={`/blog/${p.slug}`} className="text-accent font-semibold underline">Read the guide →</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
