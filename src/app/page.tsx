import { EmailForm } from "@/components/email-form";
import { Timer, Utensils, Dumbbell, TrendingDown, Clock, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-black to-black" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
              <Zap className="h-4 w-4" />
              Coming Soon — Join the Waitlist
            </div>
            
            {/* Headline */}
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Lose Weight Without
              <span className="block text-emerald-400">Losing Your Mind</span>
            </h1>
            
            {/* Subheadline */}
            <p className="mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl">
              The no-BS weight loss app for busy men. Combine intermittent fasting + low-carb 
              in one simple system. No calorie counting. No complicated meal plans. Just results.
            </p>
            
            {/* Email Form */}
            <div className="mt-10 w-full max-w-md">
              <EmailForm />
              <p className="mt-4 text-sm text-zinc-500">
                Join 0 men on the waitlist. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="border-t border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Sound Familiar?
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Clock, text: "No time for hour-long gym sessions" },
              { icon: Utensils, text: "Tired of tracking every single calorie" },
              { icon: TrendingDown, text: "Tried diets that work... then don't" },
            ].map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10">
                  <item.icon className="h-6 w-6 text-red-400" />
                </div>
                <p className="text-lg text-zinc-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Built for Men Who Get Sh*t Done
          </h2>
          <p className="mt-4 text-center text-zinc-400">
            Everything you need. Nothing you don't.
          </p>
          
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Timer,
                title: "Simple Fasting Timer",
                description: "One tap to start. Pick your protocol (16:8, 18:6, OMAD). Track your fasting state without the noise.",
              },
              {
                icon: Utensils,
                title: "Low-Carb Made Easy",
                description: "Quick meal logging. Focus on net carbs, not calories. Pre-built database of man-friendly meals.",
              },
              {
                icon: Dumbbell,
                title: "10-Min Workouts",
                description: "Optional HIIT routines. No equipment needed. Skip if you want — this is diet-first.",
              },
              {
                icon: TrendingDown,
                title: "Progress That Matters",
                description: "Weekly trends, not daily fluctuations. See what's working. No vanity metrics.",
              },
              {
                icon: Zap,
                title: "Busy Mode",
                description: "Ultra-simplified tracking for your busiest days. Log everything in under 30 seconds.",
              },
              {
                icon: Clock,
                title: "No Diet Culture BS",
                description: "Direct communication. Data-driven insights. Built by men, for men.",
              },
            ].map((feature, i) => (
              <div 
                key={i}
                className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition-colors hover:border-emerald-500/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                  <feature.icon className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            How It Works
          </h2>
          
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { step: "1", title: "Set Your Window", desc: "Pick a fasting schedule that fits your life. Start conservative, adjust as you go." },
              { step: "2", title: "Eat Low-Carb", desc: "Keep net carbs under 50g during your eating window. We'll help you track it fast." },
              { step: "3", title: "Watch the Fat Burn", desc: "Your body switches to burning fat for fuel. Track your progress weekly." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-2xl font-bold text-black">
                  {item.step}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Learn the Basics
            </h2>
            <Link 
              href="/blog" 
              className="hidden sm:flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              View all articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Intermittent Fasting 101: A Busy Man's Guide",
                excerpt: "Everything you need to know about IF in 5 minutes. No fluff, just the facts that actually matter for weight loss.",
                readTime: "5 min read",
                slug: "intermittent-fasting-101",
              },
              {
                title: "Why Low-Carb Works (The Science)",
                excerpt: "The metabolic advantage of keeping carbs low. How your body switches from burning sugar to burning fat.",
                readTime: "4 min read",
                slug: "why-low-carb-works",
              },
              {
                title: "The 16:8 Protocol: Start Here",
                excerpt: "The most beginner-friendly fasting schedule. Skip breakfast, eat lunch and dinner. Simple.",
                readTime: "3 min read",
                slug: "16-8-protocol-guide",
              },
            ].map((post, i) => (
              <Link
                key={i}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all hover:border-emerald-500/30 hover:bg-zinc-900/50"
              >
                <p className="text-sm text-emerald-400">{post.readTime}</p>
                <h3 className="mt-2 text-lg font-semibold group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-zinc-400 text-sm">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500 group-hover:text-emerald-400 transition-colors">
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
          
          <Link 
            href="/blog" 
            className="mt-8 flex sm:hidden items-center justify-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            View all articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Stop Overcomplicating Weight Loss?
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Join the waitlist for early access and exclusive launch pricing.
          </p>
          <div className="mt-8 flex justify-center">
            <EmailForm />
          </div>
        </div>
      </section>

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
