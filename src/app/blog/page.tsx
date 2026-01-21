import Link from "next/link";
import { ArrowRight, ArrowLeft, Zap } from "lucide-react";

const posts = [
  {
    title: "Intermittent Fasting 101: A Busy Man's Guide",
    excerpt: "Everything you need to know about IF in 5 minutes. No fluff, just the facts that actually matter for weight loss.",
    readTime: "5 min read",
    slug: "intermittent-fasting-101",
    date: "Jan 2026",
  },
  {
    title: "Why Low-Carb Works (The Science)",
    excerpt: "The metabolic advantage of keeping carbs low. How your body switches from burning sugar to burning fat.",
    readTime: "4 min read",
    slug: "why-low-carb-works",
    date: "Jan 2026",
  },
  {
    title: "The 16:8 Protocol: Start Here",
    excerpt: "The most beginner-friendly fasting schedule. Skip breakfast, eat lunch and dinner. Simple.",
    readTime: "3 min read",
    slug: "16-8-protocol-guide",
    date: "Jan 2026",
  },
  {
    title: "50 Low-Carb Foods That Keep You Full",
    excerpt: "A practical list of foods that satisfy hunger without spiking your blood sugar. Print this out.",
    readTime: "4 min read",
    slug: "low-carb-foods-list",
    date: "Coming Soon",
  },
  {
    title: "Breaking Plateaus: When Weight Loss Stalls",
    excerpt: "Hit a wall? Here's exactly what to adjust to get the scale moving again.",
    readTime: "6 min read",
    slug: "breaking-plateaus",
    date: "Coming Soon",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500">
                <Zap className="h-4 w-4 text-black" />
              </div>
              <span className="font-bold">FastTrack</span>
            </Link>
            <Link 
              href="/" 
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold">Learn the Basics</h1>
        <p className="mt-4 text-lg text-zinc-400">
          No-BS guides to intermittent fasting and low-carb eating. Written for busy men.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Link
              key={i}
              href={post.date === "Coming Soon" ? "#" : `/blog/${post.slug}`}
              className={`group rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all ${
                post.date === "Coming Soon" 
                  ? "opacity-60 cursor-not-allowed" 
                  : "hover:border-emerald-500/30 hover:bg-zinc-900/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-emerald-400">{post.readTime}</p>
                <p className="text-sm text-zinc-500">{post.date}</p>
              </div>
              <h2 className={`mt-2 text-lg font-semibold ${
                post.date !== "Coming Soon" ? "group-hover:text-emerald-400" : ""
              } transition-colors`}>
                {post.title}
              </h2>
              <p className="mt-2 text-zinc-400 text-sm">{post.excerpt}</p>
              {post.date !== "Coming Soon" && (
                <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500 group-hover:text-emerald-400 transition-colors">
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500">
                <Zap className="h-4 w-4 text-black" />
              </div>
              <span className="font-bold">FastTrack</span>
            </div>
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} FastTrack. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
