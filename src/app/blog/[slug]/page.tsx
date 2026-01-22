import Link from "next/link";
import { ArrowLeft, Zap } from "lucide-react";
import { notFound } from "next/navigation";
import { EmailForm } from "@/components/email-form";
import { Markdown } from "@/components/markdown";

const posts: Record<string, { title: string; readTime: string; content: string }> = {
  "intermittent-fasting-101": {
    title: "Intermittent Fasting 101: A Busy Man's Guide",
    readTime: "5 min read",
    content: `## What is Intermittent Fasting?

Intermittent fasting (IF) isn't a diet—it's an eating schedule. You cycle between periods of eating and fasting. That's it.

No special foods required. No calorie counting. No expensive supplements or meal delivery services.

## Why IF Works for Busy Men

### 1. Radical Simplicity

Skip breakfast. Eat lunch and dinner. Done.

No 6 AM meal prep. No hauling Tupperware to the office. No thinking about food until noon. Your morning becomes simpler, not harder.

### 2. Proven Metabolic Benefits

When you fast, your body undergoes measurable changes:

- **Insulin drops significantly** — enabling your body to access stored fat for fuel
- **Human growth hormone increases** — helping preserve lean muscle mass
- **Cellular autophagy activates** — your body cleans out damaged cells
- **Norepinephrine rises** — boosting alertness and fat breakdown

### 3. Time You Get Back

One less meal to plan, shop for, prepare, eat, and clean up after. That's 30-45 minutes back in your day—time you can spend on work, family, or sleep.

## Popular IF Protocols

| Protocol | Fasting | Eating Window | Best For |
|----------|---------|---------------|----------|
| **16:8** | 16 hrs | 8 hrs | Beginners |
| **18:6** | 18 hrs | 6 hrs | Intermediate |
| **20:4** | 20 hrs | 4 hrs | Experienced |
| **OMAD** | 23 hrs | 1 hr | Advanced |

**Start with 16:8.** It's sustainable long-term and delivers 80% of the benefits with 20% of the difficulty.

## A Typical 16:8 Day

| Time | What Happens |
|------|--------------|
| 7:00 AM | Wake up. Black coffee or water. |
| 8:00 - 11:00 AM | Peak focus time (no food = no energy crash) |
| 12:00 PM | Break your fast with a solid lunch |
| 3:00 PM | Optional snack if hungry |
| 7:30 PM | Dinner with family |
| 8:00 PM | Eating window closes |

## What's Allowed During Your Fast

**Yes (zero calories):**
- Water (still or sparkling)
- Black coffee (no cream, no sugar)
- Plain tea (green, black, herbal)
- Salt or electrolytes if needed

**No (breaks the fast):**
- Anything with calories
- Cream or sugar in coffee
- Diet sodas (insulin response is debated—play it safe)
- "Zero calorie" energy drinks

## The 4 Mistakes That Derail Beginners

**Mistake #1: Going too hard, too fast**

Don't attempt 20:4 or OMAD on day one. Start with 14:10 if needed. Build tolerance over 2-3 weeks.

**Mistake #2: Breaking your fast with garbage**

Your first meal matters. Lead with protein and healthy fats—eggs, meat, avocado. Not a muffin or bagel.

**Mistake #3: Forgetting to hydrate**

No breakfast doesn't mean no fluids. Drink water consistently through the morning. Add salt if you feel lightheaded.

**Mistake #4: Watching the clock obsessively**

Being 30 minutes over or under won't ruin your results. Consistency matters more than perfection. Life happens.

## The Bottom Line

Intermittent fasting is the simplest change you can make. No special groceries. No subscriptions. No complexity.

**Your challenge:** Try 16:8 for 14 days. Skip breakfast, eat lunch around noon, finish dinner by 8 PM.

Most men report more energy, sharper focus, and steady fat loss—without thinking about food all morning.`,
  },
  "why-low-carb-works": {
    title: "Why Low-Carb Works (The Science)",
    readTime: "4 min read",
    content: `## The 30-Second Explanation

When you eat carbohydrates, your body converts them to glucose (blood sugar). Your pancreas then releases insulin to shuttle that glucose into cells.

Here's the key insight: **insulin is a storage hormone.** When insulin is elevated, your body is in "store fat" mode. When insulin is low, your body shifts to "burn fat" mode.

**High carbs → High insulin → Fat storage**

**Low carbs → Low insulin → Fat burning**

That's the entire mechanism. Everything else is details.

## What Happens When You Cut Carbs

### Days 1-3: The Adjustment Phase

Your body has been running on glucose for years—maybe decades. It needs time to switch fuel systems. You might experience:

- Fatigue or low energy
- Brain fog or irritability
- Carb cravings
- Headaches (often from dehydration)

This is sometimes called "keto flu." It's temporary. Stay hydrated, keep your electrolytes up, and push through.

### Days 4-7: The Metabolic Switch

Your liver begins producing ketones from fat. Your body starts using fat—both dietary and stored—as its primary fuel source. Energy typically stabilizes. Cravings diminish.

### Week 2 and Beyond: Fat Adaptation

Your body becomes efficient at burning fat. Benefits compound:

- Steady, sustained energy (no crashes)
- Dramatically reduced hunger
- Mental clarity improves
- Scale starts moving consistently

## The Metabolic Advantages

When you're running on fat instead of sugar:

- **No energy rollercoaster** — Blood sugar stays stable. No 3 PM crash.
- **Hunger disappears** — Fat is more satiating. You naturally eat less.
- **Mental clarity improves** — Your brain runs efficiently on ketones.
- **Fat loss accelerates** — You're literally using stored fat for fuel.

## How Low Should You Go?

| Approach | Daily Net Carbs | Typical Results |
|----------|-----------------|-----------------|
| Standard American Diet | 250-300g | Weight gain, hunger |
| Moderate Low-Carb | 100-150g | Slow progress |
| Low-Carb | 50-100g | Steady fat loss |
| Keto | Under 50g | Faster fat loss |
| Strict Keto | Under 20g | Maximum ketosis |

**Our recommendation: Under 50g net carbs daily.**

This level is low enough for significant results but flexible enough for real life—a beer with friends, some berries with breakfast.

## Net Carbs vs Total Carbs

**Net Carbs = Total Carbs - Fiber**

Fiber doesn't spike blood sugar or trigger insulin, so we don't count it.

**Example:** An avocado shows 12g total carbs on the label. But 10g is fiber. Actual net carbs: **2g**.

## What to Eat (The Simple List)

### Proteins — Build your meals around these
- Beef, pork, lamb, chicken, turkey
- Fish and seafood
- Eggs (whole, including the yolk)
- Bacon and sausage (check for added sugar)

### Fats — Don't fear them
- Olive oil, avocado oil, coconut oil
- Butter and ghee
- Cheese (most types)
- Nuts and seeds (in moderation—carbs add up)

### Low-Carb Vegetables
- Leafy greens (spinach, kale, lettuce)
- Cruciferous (broccoli, cauliflower, cabbage)
- Zucchini, asparagus, green beans
- Peppers, mushrooms, tomatoes (moderate)

## What to Avoid

- **Bread, pasta, rice, potatoes** — The obvious ones
- **Sugar in all forms** — Soda, candy, desserts, fruit juice
- **Most fruits** — Berries in moderation are fine
- **Beer** — Liquid bread. Spirits or dry wine are better options.
- **"Low-fat" products** — Usually loaded with sugar to compensate

## The Bottom Line

Low-carb eating works because it addresses the root cause of fat gain: chronically elevated insulin from a high-carb diet.

Lower your carbs. Lower your insulin. Burn your fat.

It's not magic. It's metabolism.`,
  },
  "16-8-protocol-guide": {
    title: "The 16:8 Protocol: Start Here",
    readTime: "3 min read",
    content: `## What is 16:8?

Fast for 16 hours. Eat within an 8-hour window. Repeat daily.

It's the most popular intermittent fasting protocol for one reason: it works without making your life difficult.

## Why 16:8 is Perfect for Beginners

1. **You sleep through 8 hours of it** — Half your fast happens while you're unconscious
2. **You only skip breakfast** — Lunch and dinner stay normal
3. **Family dinner stays intact** — You can still eat with your wife and kids at 7 PM
4. **It's flexible** — Shift your window if you need to

## The Standard 16:8 Schedule

| Time | What's Happening |
|------|------------------|
| 8:00 PM | Last bite of food. Fasting begins. |
| 8 PM - 7 AM | Sleeping + fasting |
| 7:00 AM | Wake up. Water or black coffee only. |
| 7 AM - 12 PM | Fasting continues. Peak mental clarity. |
| 12:00 PM | Break your fast with lunch. |
| 12 - 8 PM | 8-hour eating window |
| 8:00 PM | Window closes. Repeat. |

## Your First Week: What to Expect

### Days 1-2

You'll feel hungry around your normal breakfast time. This is habitual hunger—your body expecting food because it always gets food then.

**What to do:** Drink water or black coffee. Wait 20 minutes. The hunger will pass. It always does.

### Days 3-4

Morning hunger starts fading. Your body is adjusting to the new schedule. Energy levels may fluctuate.

### Days 5-7

Most guys report they're not even hungry until noon. Some feel *more* focused in the morning without food weighing them down.

By end of week one, it feels normal.

## 5 Tips for 16:8 Success

### 1. Stay Hydrated

Drink water consistently through the morning. A lot of "hunger" is actually thirst. Add a pinch of salt if you feel lightheaded—you lose sodium when fasting.

### 2. Make Black Coffee Your Ally

Caffeine suppresses appetite and boosts metabolism. It makes fasting easier, not harder. Just skip the cream and sugar—they break your fast.

### 3. Break Your Fast With Protein

Your first meal should be built around protein: eggs, chicken, beef, fish. Not a bagel. Not oatmeal. Protein keeps you full longer and prevents overeating later.

### 4. Don't Binge in Your Window

Fasting isn't a license to eat garbage for 8 hours. Eat normal portions of real food. The calorie deficit should come from skipping breakfast, not from restriction during your window.

### 5. Same Window Every Day

Consistency helps your body adapt. If your window is 12-8 PM, keep it 12-8 PM daily. Your hunger signals will adjust to match.

## Frequently Asked Questions

**Can I work out while fasting?**

Yes. Many guys prefer training fasted—they feel lighter and more alert. Start with moderate intensity and see how you respond. Stay hydrated.

**What if I'm starving and it's only 10 AM?**

Drink a large glass of water. Wait 20 minutes. If you're still genuinely hungry (not just bored), a small handful of nuts won't undo your progress. Don't stress.

**Can I start with 14:10 instead?**

Absolutely. Start with a 14-hour fast, 10-hour eating window. After a week, tighten to 15:9, then 16:8. Gradual adaptation works great.

**What about weekends?**

Stay consistent if you can. But if you have a brunch on Saturday and eat at 10 AM, just resume 16:8 on Sunday. One day won't derail you.

**Can I drink alcohol in my window?**

Yes, but know that alcohol pauses fat burning while your body processes it. Spirits or dry wine are better than beer. Keep it moderate.

## The Bottom Line

16:8 is dead simple:

- Stop eating at 8 PM
- Skip breakfast
- Eat lunch at noon
- Eat dinner by 8 PM

No special foods. No counting. No apps required (though one helps).

**Your challenge:** Try this for 14 days. Most men who do never go back to breakfast.`,
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
        
        <div className="mt-12">
          <Markdown content={post.content} />
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
