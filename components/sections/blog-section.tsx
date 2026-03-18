import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const blogs = [
  {
    title: "48 hours in Tokyo",
    tag: "City Guides",
    excerpt: "A tight, efficient itinerary for food, culture, and late-night neighborhoods.",
    readTime: "6 min",
    date: "Jan 18, 2026"
  },
  {
    title: "Budget hacks for Europe",
    tag: "Savings",
    excerpt: "A realistic guide to rail passes, local stays, and cost-smart routes.",
    readTime: "8 min",
    date: "Jan 05, 2026"
  },
  {
    title: "Family travel essentials",
    tag: "Family",
    excerpt: "Pack light, move smooth, and keep everyone engaged with these staples.",
    readTime: "5 min",
    date: "Dec 28, 2025"
  }
];

export function BlogSection() {
  return (
    <section id="blog" className="section py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-3xl font-semibold">From the TripAI journal</h2>
          <p className="mt-3 text-foreground/70">Guides, playbooks, and planning insights.</p>
        </div>
        <Button variant="outline">View all</Button>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {blogs.map((post, index) => (
          <Card key={post.title} className="group overflow-hidden">
            <div
              className={`h-40 w-full bg-gradient-to-br ${
                index === 0
                  ? "from-emerald-200/70 via-sky-100 to-transparent"
                  : index === 1
                    ? "from-amber-200/70 via-rose-100 to-transparent"
                    : "from-indigo-200/70 via-cyan-100 to-transparent"
              }`}
            />
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between text-xs text-foreground/60">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <Badge variant="outline">{post.tag}</Badge>
              <CardTitle className="text-xl transition group-hover:text-primary">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/50">TripAI Editorial</span>
                <span className="text-sm font-medium text-primary transition group-hover:translate-x-1">
                  Read article →
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
