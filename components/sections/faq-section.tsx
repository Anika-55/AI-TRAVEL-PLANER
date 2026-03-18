import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const faqs = [
  { q: "Can I edit itineraries?", a: "Yes. Every plan is editable, versioned, and shareable." },
  { q: "Does TripAI use live pricing?", a: "We estimate budgets using recent pricing signals and regional ranges." },
  { q: "How do I save favorites?", a: "Save destinations and full trips to revisit, refine, or share later." },
  { q: "Can I plan with friends?", a: "Invite teammates to collaborate on one shared itinerary." }
];

export function FaqSection() {
  return (
    <section id="faq" className="section py-20">
      <div className="rounded-[32px] border bg-card/80 p-8 md:p-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Concierge FAQ</p>
            <h2 className="mt-4 font-display text-3xl font-semibold">Luxury planning, simplified</h2>
            <p className="mt-3 max-w-2xl text-foreground/70">
              Concierge-level answers for travelers who care about precision, comfort,
              and elegance in every itinerary.
            </p>
          </div>
          <div className="text-sm text-foreground/60">support@tripai.com</div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <Card
              key={faq.q}
              className="border-white/10 bg-background/60 shadow-none transition hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="text-xl">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/70">{faq.a}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
