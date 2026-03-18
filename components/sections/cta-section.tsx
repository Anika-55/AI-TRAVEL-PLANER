import { Button } from "../ui/button";
import { Card } from "../ui/card";

export function CtaSection() {
  return (
    <section id="cta" className="section pb-24">
      <Card className="bg-primary text-primary-foreground">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold">Start your next trip today</h2>
            <p className="mt-3 text-primary-foreground/80">
              Generate, refine, and share itineraries in minutes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              View pricing
            </Button>
            <Button className="bg-primary-foreground text-primary">Get started</Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
