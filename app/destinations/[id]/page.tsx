import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";

const reviews = [
  {
    name: "Ava Thompson",
    rating: "5.0",
    date: "Jan 12, 2026",
    text: "Perfect pacing and thoughtful recommendations."
  },
  {
    name: "Jamal Rivera",
    rating: "4.7",
    date: "Dec 29, 2025",
    text: "Great mix of culture and food with clear timing."
  }
];

const related = [
  { name: "Ubud Escape", location: "Bali" },
  { name: "Kyoto Heritage", location: "Japan" },
  { name: "Lisbon Food Walk", location: "Portugal" }
];

export default function DestinationDetailsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="section py-16">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <Badge variant="outline">Featured destination</Badge>
            <h1 className="mt-4 font-display text-4xl font-semibold">Bali, Indonesia</h1>
            <p className="mt-3 max-w-2xl text-foreground/70">
              A balanced escape of rice terraces, coastal views, and wellness-driven stays.
            </p>
          </div>
          <Button size="lg">Save trip</Button>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/70">
              <p>
                Ideal for 3–5 days. Expect curated routes with cultural highlights, local dining,
                and calm recovery time built in.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border bg-card p-4 text-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">Best season</p>
                  <p className="mt-2 font-semibold">May – September</p>
                </div>
                <div className="rounded-2xl border bg-card p-4 text-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">Budget</p>
                  <p className="mt-2 font-semibold">$180–$260/day</p>
                </div>
                <div className="rounded-2xl border bg-card p-4 text-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">Style</p>
                  <p className="mt-2 font-semibold">Wellness + Culture</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>Key information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-foreground/70">
              <div className="flex items-center justify-between">
                <span>Average stay</span>
                <span className="font-medium text-foreground">4 days</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Top regions</span>
                <span className="font-medium text-foreground">Ubud, Seminyak</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Local transport</span>
                <span className="font-medium text-foreground">Driver, scooter</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Language</span>
                <span className="font-medium text-foreground">Bahasa Indonesia</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="mt-12">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl font-semibold">Reviews</h2>
            <Button variant="outline">Write a review</Button>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {reviews.map((review) => (
              <Card key={review.name} className="shadow-none">
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-foreground/60">
                    <span>{review.date}</span>
                    <span className="text-foreground">{review.rating} ★</span>
                  </div>
                  <p className="text-foreground">“{review.text}”</p>
                  <div className="text-sm text-foreground/60">{review.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl font-semibold">Related destinations</h2>
            <Button variant="outline">View all</Button>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Card key={item.name} className="shadow-none">
                <div className="h-28 rounded-2xl bg-accent" />
                <CardHeader>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                    {item.location}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}