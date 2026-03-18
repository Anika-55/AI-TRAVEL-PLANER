import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const contactCards = [
  {
    title: "Start a project",
    detail: "Tell us about your trip goals and timeline.",
    action: "Plan with TripAI"
  },
  {
    title: "Talk to support",
    detail: "We respond within 24 hours on weekdays.",
    action: "Email support"
  },
  {
    title: "Partnerships",
    detail: "Join our affiliate and travel partner network.",
    action: "Partner with us"
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="section py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-3xl font-semibold">Contact the TripAI team</h2>
          <p className="mt-3 text-foreground/70">
            Reach us for support, partnerships, or enterprise planning.
          </p>
        </div>
        <Button variant="outline">support@tripai.com</Button>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {contactCards.map((card) => (
          <Card key={card.title} className="group transition hover:-translate-y-1">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{card.detail}</p>
              <Button className="w-full">{card.action}</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
