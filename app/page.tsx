import { HeroSection } from "../components/sections/hero-section";
import { FeaturesSection } from "../components/sections/features-section";
import { DashboardSection } from "../components/sections/dashboard-section";
import { DestinationsSection } from "../components/sections/destinations-section";
import { CategoriesSection } from "../components/sections/categories-section";
import { StatsSection } from "../components/sections/stats-section";
import { TestimonialsSection } from "../components/sections/testimonials-section";
import { AboutSection } from "../components/sections/about-section";
import { BlogSection } from "../components/sections/blog-section";
import { FaqSection } from "../components/sections/faq-section";
import { NewsletterSection } from "../components/sections/newsletter-section";
import { ContactSection } from "../components/sections/contact-section";
import { CtaSection } from "../components/sections/cta-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="glow absolute inset-0 -z-10" />
      <HeroSection />
      <FeaturesSection />
      <DashboardSection />
      <DestinationsSection />
      <CategoriesSection />
      <StatsSection />
      <TestimonialsSection />
      <AboutSection />
      <BlogSection />
      <FaqSection />
      <NewsletterSection />
      <ContactSection />
      <CtaSection />
    </main>
  );
}
