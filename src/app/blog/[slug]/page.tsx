import Link from "next/link";
import { ArrowLeft, Zap } from "lucide-react";
import { notFound } from "next/navigation";
import { EmailForm } from "@/components/email-form";

const posts: Record<string, { title: string; readTime: string; content: string }> = {
  "intermittent-fasting-101": {
    title: "Intermittent Fasting 101: A Busy Man's Guide",
    readTime: "5 min read",
    content: `
## What is Intermittent Fasting?

Intermittent fasting (IF) isn't a diet—it's an eating schedule. You cycle between periods of eating and fasting. That's it.

No special foods. No calorie counting required. No expensive supplements.

## Why It Works for Busy Men

**1. Simplicity**
Skip breakfast. Eat lunch and dinner. Done.

No meal prep at 6 AM. No carrying Tupperware to work. No thinking about food until noon.

**2. Metabolic Benefits**
When you fast, your body:
- Drops insulin levels (enables fat burning)
- Increases human growth hormone (preserves muscle)
- Triggers cellular repair processes

**3. Time Savings**
One less meal to plan, prepare, and clean up. That's 30+ minutes back in your day.

## The Most Popular Protocols

| Protocol | Fasting Window | Eating Window |
|----------|---------------|---------------|
| **16:8** | 16 hours | 8 hours |
| **18:6** | 18 hours | 6 hours |
| **20:4** | 20 hours | 4 hours |
| **OMAD** | 23 hours | 1 hour |

**Start with 16:8.** It's the easiest to maintain and still highly effective.

## A Typical Day (16:8)

- **7:00 AM** - Wake up. Black coffee or water only.
- **12:00 PM** - Break fast with lunch.
- **3:00 PM** - Snack if needed.
- **7:30 PM** - Dinner.
- **8:00 PM** - Eating window closes.

## What You Can Have While Fasting

✅ Water (still or sparkling)
✅ Black coffee
✅ Plain tea
✅ Salt/electrolytes

❌ Anything with calories
❌ Diet sodas (debated, but play it safe)
❌ Cream or sugar in coffee

## Common Mistakes

**1. Starting too aggressive**
Don't jump into 20:4 on day one. Start with 14:10 or 16:8.

**2. Breaking fast with junk**
Your first meal matters. Protein and healthy fats > donuts.

**3. Not drinking enough water**
You're not eating breakfast, but you still need hydration.

**4. Obsessing over the clock**
±30 minutes won't ruin your progress. Life happens.

## The Bottom Line

Intermittent fasting is the simplest "diet" change you can make. No special foods. No subscriptions. No complexity.

Try 16:8 for two weeks. Skip breakfast, eat lunch and dinner in an 8-hour window. See how you feel.

Most men report more energy, less brain fog, and steady weight loss—without thinking about food all day.
    `,
  },
  "why-low-carb-works": {
    title: "Why Low-Carb Works (The Science)",
    readTime: "4 min read",
    content: `
## The Simple Explanation

When you eat carbs, your body converts them to glucose (sugar). Your body then releases insulin to manage that glucose.

Here's the problem: **insulin tells your body to store fat.**

High carbs = high insulin = fat storage mode.

Low carbs = low insulin = fat burning mode.

## What Happens When You Cut Carbs

**Days 1-3: Adjustment**
Your body is used to running on glucose. It needs time to switch fuel sources. You might feel tired or foggy. This is normal.

**Days 4-7: The Switch**
Your liver starts producing ketones from fat. Your body begins using fat for fuel instead of sugar.

**Week 2+: Fat Adaptation**
Energy stabilizes. Hunger decreases. The scale starts moving.

## The Metabolic Advantage

When your body runs on fat:

- **Stable energy** - No blood sugar crashes at 3 PM
- **Reduced hunger** - Fat is more satiating than carbs
- **Mental clarity** - Your brain loves ketones
- **Consistent fat loss** - You're literally burning fat for fuel

## How Low is "Low-Carb"?

| Approach | Daily Net Carbs |
|----------|-----------------|
| Standard American Diet | 250-300g |
| Moderate Low-Carb | 100-150g |
| Low-Carb | 50-100g |
| Keto | Under 50g |
| Strict Keto | Under 20g |

**Our recommendation: Under 50g net carbs.**

This is low enough to see significant results but flexible enough to be sustainable.

## Net Carbs vs Total Carbs

**Net Carbs = Total Carbs - Fiber**

Fiber doesn't spike blood sugar, so we don't count it.

Example: An avocado has 12g total carbs but 10g fiber = **2g net carbs**.

## What to Eat

**Proteins** (unlimited)
- Beef, chicken, pork, fish
- Eggs
- Seafood

**Fats** (don't fear them)
- Olive oil, avocado oil
- Butter
- Cheese
- Nuts (in moderation)

**Low-Carb Vegetables**
- Leafy greens
- Broccoli, cauliflower
- Peppers, zucchini
- Asparagus

## What to Avoid

- Bread, pasta, rice
- Sugar and sweets
- Most fruits (berries are OK in moderation)
- Beer and sugary drinks
- "Low-fat" products (usually high sugar)

## The Bottom Line

Low-carb works because it addresses the root cause of weight gain: chronically elevated insulin.

Cut the carbs, lower the insulin, burn the fat.

It's not magic. It's metabolism.
    `,
  },
  "16-8-protocol-guide": {
    title: "The 16:8 Protocol: Start Here",
    readTime: "3 min read",
    content: `
## What is 16:8?

Fast for 16 hours. Eat within an 8-hour window. Repeat daily.

It's the most popular intermittent fasting protocol because it's the easiest to stick with.

## Why 16:8 is Perfect for Beginners

1. **You sleep through most of it** - 8 hours of fasting happens while you're asleep
2. **Skip one meal** - Just don't eat breakfast
3. **Normal dinner time** - You can still eat dinner with family
4. **Flexible** - Easy to adjust if needed

## The Standard 16:8 Schedule

| Time | What to Do |
|------|------------|
| 8:00 PM | Stop eating (fasting begins) |
| Sleep | Fasting continues |
| 7:00 AM | Wake up - water/black coffee only |
| 12:00 PM | Break your fast (lunch) |
| 12-8 PM | Eating window |
| 8:00 PM | Fasting begins again |

## Week 1: Getting Started

**Days 1-2**
You'll feel hungry in the morning. That's normal. Drink water or black coffee. The hunger passes in 15-20 minutes.

**Days 3-4**
Morning hunger starts decreasing. Your body is adjusting.

**Days 5-7**
Most people report they're not even hungry until noon. Some feel more energy and focus in the morning.

## Tips for Success

**1. Stay hydrated**
Drink water throughout the morning. Add a pinch of salt if you feel lightheaded.

**2. Black coffee is your friend**
Caffeine suppresses appetite and boosts metabolism. Just no cream or sugar.

**3. Break your fast right**
First meal should be protein-focused. Eggs, meat, fish. Not a bagel.

**4. Don't overeat in your window**
Fasting isn't a license to binge. Eat normal portions.

**5. Be consistent**
Same eating window every day helps your body adapt faster.

## Common Questions

**Can I work out while fasting?**
Yes. Many people prefer fasted workouts. Start light and see how you feel.

**What if I get really hungry?**
Drink water. Wait 20 minutes. If you're still hungry, a small handful of nuts won't ruin everything.

**Can I do 14:10 instead?**
Absolutely. Start there if 16:8 feels too aggressive. Work up to it.

**What about weekends?**
Stay consistent if you can. But if you slip to 14:10 occasionally, don't stress.

## The Bottom Line

16:8 is simple:
- Stop eating at 8 PM
- Skip breakfast
- Eat lunch at noon
- Eat dinner by 8 PM

That's it. No complexity. No special foods. Just a time window.

Try it for 2 weeks. Most men never go back to eating breakfast.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500">
                <Zap className="h-4 w-4 text-black" />
              </div>
              <span className="font-bold">FastTrack</span>
            </Link>
            <Link 
              href="/blog" 
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              All articles
            </Link>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm text-emerald-400">{post.readTime}</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{post.title}</h1>
        
        <div 
          className="mt-12 prose prose-invert prose-emerald max-w-none
            prose-headings:font-bold prose-headings:text-white
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-p:text-zinc-300 prose-p:leading-relaxed
            prose-strong:text-white
            prose-li:text-zinc-300
            prose-table:text-sm
            prose-th:text-left prose-th:text-zinc-400 prose-th:font-medium prose-th:pb-2
            prose-td:py-2 prose-td:text-zinc-300
          "
        >
          {post.content.split('\n').map((line, i) => {
            if (line.startsWith('## ')) {
              return <h2 key={i}>{line.replace('## ', '')}</h2>;
            }
            if (line.startsWith('**') && line.endsWith('**')) {
              return <p key={i}><strong>{line.replace(/\*\*/g, '')}</strong></p>;
            }
            if (line.startsWith('- ')) {
              return <li key={i}>{line.replace('- ', '')}</li>;
            }
            if (line.startsWith('| ')) {
              return null; // Skip table rows for simple rendering
            }
            if (line.startsWith('✅') || line.startsWith('❌')) {
              return <p key={i}>{line}</p>;
            }
            if (line.trim() === '') {
              return null;
            }
            return <p key={i}>{line}</p>;
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 text-center">
          <h3 className="text-xl font-bold">Ready to put this into practice?</h3>
          <p className="mt-2 text-zinc-400">
            FastTrack makes tracking IF + low-carb dead simple. Join the waitlist.
          </p>
          <div className="mt-6 flex justify-center">
            <EmailForm />
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-4xl px-6 py-8">
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
