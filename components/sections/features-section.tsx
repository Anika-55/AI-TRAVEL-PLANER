import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const features = [
  {
    title: "Precision scheduling",
    desc: "Time-blocked days with realistic transitions and pacing."
  },
  {
    title: "Smart budgets",
    desc: "Clear, category-level cost breakdowns and ranges."
  },
  {
    title: "Preference tuning",
    desc: "Aligns plans to your style, pace, and priorities."
  },
  {
    title: "Collaboration",
    desc: "Share, comment, and finalize as a group."
  }
];

export function FeaturesSection({ isLoading = false }: { isLoading?: boolean }) {
  const items = isLoading ? Array.from({ length: 4 }) : features;

  return (
    <section id="features" className="section py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-3xl font-semibold">Features</h2>
          <p className="mt-3 text-foreground/70">A clean toolkit for confident planning.</p>
        </div>
        <div className="text-sm text-foreground/60">Built for teams and solo travelers</div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((feature, index) => (
          <Card key={isLoading ? index : feature.title} className="shadow-none">
            <CardHeader className="space-y-2">
              {isLoading ? (
                <Skeleton className="h-4 w-32" />
              ) : (
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              )}
            </CardHeader>
            <CardContent className="text-sm text-foreground/70">
              {isLoading ? (
                <div className="space-y-2">
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-5/6" />
                </div>
              ) : (
                feature.desc
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
