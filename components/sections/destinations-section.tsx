import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const destinations = [
  { name: "Bali", tag: "Indonesia" },
  { name: "Lisbon", tag: "Portugal" },
  { name: "Kyoto", tag: "Japan" },
  { name: "Reykjavik", tag: "Iceland" }
];

export function DestinationsSection({ isLoading = false }: { isLoading?: boolean }) {
  const items = isLoading ? Array.from({ length: 4 }) : destinations;

  return (
    <section id="explore" className="section py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-3xl font-semibold">Popular Destinations</h2>
          <p className="mt-3 text-foreground/70">Curated routes with clean, actionable plans.</p>
        </div>
        <Button variant="outline">Explore all</Button>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((dest, index) => (
          <Card key={isLoading ? index : dest.name} className="shadow-none">
            {isLoading ? (
              <Skeleton className="h-32 w-full rounded-2xl" />
            ) : (
              <div className="h-32 rounded-2xl bg-accent" />
            )}
            <CardHeader className="space-y-1">
              {isLoading ? (
                <Skeleton className="h-4 w-24" />
              ) : (
                <CardTitle className="text-lg">{dest.name}</CardTitle>
              )}
              {isLoading ? (
                <Skeleton className="h-3 w-20" />
              ) : (
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">{dest.tag}</p>
              )}
            </CardHeader>
            <CardContent className="text-sm text-foreground/70">
              {isLoading ? (
                <div className="space-y-2">
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-4/5" />
                </div>
              ) : (
                "Minimal, high-signal itineraries with the best local flow."
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
