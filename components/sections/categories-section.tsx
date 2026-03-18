import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const categories = [
  { name: "Beach", detail: "Coastal escapes & island stays" },
  { name: "City", detail: "Design, food, and skyline nights" },
  { name: "Nature", detail: "Trails, lakes, and scenic drives" },
  { name: "Culture", detail: "Museums, heritage, and local arts" },
  { name: "Food", detail: "Markets, tastings, and chef picks" },
  { name: "Adventure", detail: "Thrills, climbs, and expeditions" }
];

export function CategoriesSection() {
  return (
    <section id="categories" className="section py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-3xl font-semibold">Browse by category</h2>
          <p className="mt-3 text-foreground/70">Curated trip styles for every traveler.</p>
        </div>
        <Badge variant="outline">6 collections</Badge>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Card key={cat.name} className="group transition hover:-translate-y-1">
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline">Category</Badge>
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/50">TripAI</span>
              </div>
              <CardTitle className="text-2xl transition group-hover:text-primary">
                {cat.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{cat.detail}</p>
              <div className="flex items-center justify-between text-sm text-foreground/60">
                <span>Popular picks</span>
                <span className="font-medium text-primary transition group-hover:translate-x-1">
                  Explore →
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
