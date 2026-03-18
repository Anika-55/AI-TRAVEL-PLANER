import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const destinations = [
  { name: "Bali", tag: "Wellness" },
  { name: "Lisbon", tag: "Food" },
  { name: "Kyoto", tag: "Culture" },
  { name: "Reykjavik", tag: "Adventure" }
];

export function DestinationsSection() {
  return (
    <section id="explore" className="section py-20">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-3xl font-semibold">Popular Destinations</h2>
        <Button variant="outline">Explore all</Button>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {destinations.map((dest) => (
          <Card key={dest.name}>
            <CardHeader>
              <Badge variant="outline">{dest.tag}</Badge>
              <CardTitle>{dest.name}</CardTitle>
            </CardHeader>
            <CardContent>Curated routes, transport hints, and day plans.</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
