import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const features = [
  { title: "Precision scheduling", desc: "Time-blocked days with realistic transitions." },
  { title: "Smart budgets", desc: "Category-level cost breakdowns and ranges." },
  { title: "Preference tuning", desc: "Aligns pace, style, and priorities." },
  { title: "Collaboration", desc: "Share plans and finalize as a group." }
];

export function FeaturesSection() {
  return (
    <section id="features" className="section py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-3xl font-semibold">Features built for clarity</h2>
          <p className="mt-3 text-foreground/70">Everything you need for a confident plan.</p>
        </div>
        <div className="text-sm text-foreground/60">Trusted by teams and solo travelers</div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>{feature.desc}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
