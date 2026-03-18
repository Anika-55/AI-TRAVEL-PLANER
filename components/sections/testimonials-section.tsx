import { Card, CardContent } from "../ui/card";

const testimonials = [
  {
    quote: "TripAI nailed our Bali honeymoon with the right pace and budget. It felt curated for us.",
    name: "Riya & Sam",
    role: "Newlyweds",
    location: "Singapore"
  },
  {
    quote: "It replaced three planning spreadsheets overnight. The itineraries are crisp and usable.",
    name: "Marcus Lee",
    role: "Product Lead",
    location: "London"
  },
  {
    quote: "We saved hours planning a family trip. The time blocks made everything smoother.",
    name: "Elena Perez",
    role: "Operations Manager",
    location: "Austin"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section py-20">
      <div className="rounded-[32px] border bg-card/80 p-8 md:p-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Client notes</p>
            <h2 className="mt-4 font-display text-3xl font-semibold">Trusted by modern travelers</h2>
            <p className="mt-3 text-foreground/70">
              Premium planning experiences from teams, couples, and solo explorers.
            </p>
          </div>
          <div className="text-sm text-foreground/60">4.9 average rating</div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-white/10 bg-background/60 shadow-none">
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">“{t.quote}”</p>
                <div className="flex items-center justify-between text-sm text-foreground/60">
                  <div>
                    <div className="text-sm font-medium text-foreground">{t.name}</div>
                    <div className="text-xs uppercase tracking-[0.2em]">{t.role}</div>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em]">{t.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
