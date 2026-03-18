import { Card, CardHeader, CardTitle } from "../ui/card";

const stats = [
  { label: "Trips planned", value: "120K+" },
  { label: "Avg planning time", value: "3 min" },
  { label: "Global destinations", value: "350+" },
  { label: "User satisfaction", value: "4.9/5" }
];

export function StatsSection() {
  return (
    <section id="statistics" className="section py-20">
      <div className="rounded-[32px] border bg-card/80 p-8 md:p-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary">By the numbers</p>
            <h2 className="mt-4 font-display text-3xl font-semibold">Trusted at scale</h2>
            <p className="mt-3 text-foreground/70">
              TripAI blends precision planning with premium travel insight.
            </p>
          </div>
          <div className="text-sm text-foreground/60">Updated weekly</div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-white/10 bg-background/60 shadow-none">
              <CardHeader>
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">{stat.label}</p>
                <CardTitle className="text-3xl">{stat.value}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
