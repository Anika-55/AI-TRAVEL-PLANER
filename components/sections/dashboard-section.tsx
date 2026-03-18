import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function DashboardSection() {
  return (
    <section id="dashboard" className="section py-20">
      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <h2 className="font-display text-3xl font-semibold">Your planning command center</h2>
          <p className="mt-3 text-foreground/70">
            Manage trips, saved destinations, and shared itineraries in one view.
          </p>
          <div className="mt-6 flex gap-3">
            <Button>Open dashboard</Button>
            <Button variant="outline">View saved trips</Button>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming trips</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {["Bali · 3 days", "Lisbon · 5 days", "Tokyo · 2 days"].map((trip) => (
              <div key={trip} className="rounded-2xl border bg-card p-3 text-sm">
                {trip}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
