import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Linkedin, Twitter, Youtube } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: ["Itinerary Builder", "Destinations", "Pricing", "Partners"]
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"]
  },
  {
    title: "Resources",
    links: ["Help Center", "Status", "Changelog", "Guides"]
  }
];

const socials = [
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" }
];

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="section py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary text-primary-foreground">T</span>
              TripAI
            </div>
            <p className="mt-4 text-sm text-foreground/70">
              Luxury-grade itineraries with real timing, budgets, and local insight.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="grid h-9 w-9 place-items-center rounded-full border text-foreground/70 transition hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-foreground/50">
              premium travel planning
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="space-y-3">
              <div className="text-sm font-semibold">{col.title}</div>
              <div className="flex flex-col gap-2 text-sm text-foreground/70">
                {col.links.map((link) => (
                  <Link key={link} href="#" className="transition hover:text-foreground">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border bg-card/80 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-primary">Newsletter</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">Get the TripAI dispatch</h3>
              <p className="mt-2 text-sm text-foreground/70">
                Weekly destination briefs, budget cues, and itinerary templates.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input placeholder="Email address" type="email" />
              <Button className="h-12 px-6">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-xs text-foreground/60">
          <span>© 2026 TripAI. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
