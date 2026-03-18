"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const quickStats = [
  { label: "Trips planned", value: "120k+" },
  { label: "Avg time", value: "3 min" },
  { label: "Satisfaction", value: "4.9/5" }
];

export function HeroSection() {
  return (
    <section id="home" className="section pt-24">
      <div className="hero-sheen rounded-[40px] border p-8 md:p-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <Badge className="mb-6">Premium Trip Planning</Badge>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
              Plan standout trips with AI that respects your time.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/70">
              TripAI crafts realistic day-by-day itineraries with transport guidance and budget
              breakdowns, shaped by your travel style.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg">Build my itinerary</Button>
              <Button variant="outline" size="lg">See a sample plan</Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {quickStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border bg-card p-4 text-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-xl font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-white/70">
            <CardHeader>
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">Today in Bali</p>
              <CardTitle>Executive 3-day escape</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {["09:00-11:00 Rice terraces", "12:30-14:00 Ubud market", "16:00-18:30 Ridge walk"].map(
                (item) => (
                  <div key={item} className="rounded-2xl border bg-card p-3 text-sm">
                    {item}
                  </div>
                )
              )}
              <div className="rounded-2xl bg-accent p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">Budget</p>
                <p className="mt-2 text-2xl font-semibold">$220/day</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
