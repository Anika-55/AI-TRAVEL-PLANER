import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="section py-20">
      <div className="rounded-[32px] border bg-card/80 p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary">TripAI Insider</p>
            <h2 className="mt-4 font-display text-3xl font-semibold">
              Curated itineraries, once a week.
            </h2>
            <p className="mt-3 max-w-xl text-foreground/70">
              Receive premium destination briefs, budget cues, and exclusive planning templates.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-foreground/60">
              <span className="rounded-full border px-3 py-1">No spam</span>
              <span className="rounded-full border px-3 py-1">Unsubscribe anytime</span>
              <span className="rounded-full border px-3 py-1">Weekly cadence</span>
            </div>
          </div>
          <div className="rounded-3xl border bg-background/60 p-6">
            <p className="text-sm font-medium">Join 24,000 travelers</p>
            <p className="mt-2 text-sm text-foreground/60">
              Get the playbook for smarter, calmer travel planning.
            </p>
            <div className="mt-5 space-y-3">
              <Input placeholder="Email address" type="email" />
              <Button className="h-12 w-full">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
