import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function AboutSection() {
  return (
    <section id="about" className="section py-20">
      <Card>
        <CardHeader>
          <CardTitle>About TripAI</CardTitle>
        </CardHeader>
        <CardContent>
          TripAI blends AI planning with local insights to build trips that feel
          realistic, personal, and easy to share.
        </CardContent>
      </Card>
    </section>
  );
}
