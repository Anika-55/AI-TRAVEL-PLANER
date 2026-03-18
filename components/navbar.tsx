"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

export type NavbarProps = {
  isAuthenticated?: boolean;
  userName?: string;
};

const baseLinks = [
  { href: "#home", label: "Home" },
  { href: "#explore", label: "Explore" },
  { href: "#blog", label: "Blog" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

const loggedInExtra = { href: "#dashboard", label: "Dashboard" };

const categories = ["Beach", "City", "Nature", "Culture", "Food", "Adventure"];

export default function Navbar({ isAuthenticated = false, userName = "Traveler" }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = useMemo(() => {
    if (!isAuthenticated) return baseLinks;
    return [baseLinks[0], baseLinks[1], loggedInExtra, baseLinks[2]];
  }, [isAuthenticated]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "bg-background/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="section flex h-16 items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary text-primary-foreground">T</span>
          TripAI
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-foreground/80 transition hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <div className="relative">
            <button
              className="group relative text-sm font-medium text-foreground/80 transition hover:text-foreground"
              onClick={() => setExploreOpen((v) => !v)}
            >
              Categories
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
            <AnimatePresence>
              {exploreOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 mt-3 w-48 rounded-2xl border bg-card p-2 shadow-soft"
                >
                  {categories.map((cat) => (
                    <Link key={cat} href="#categories" className="block rounded-lg px-3 py-2 text-sm hover:bg-accent">
                      {cat}
                    </Link>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen((v) => !v)}
                className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition hover:bg-accent"
              >
                <span className="h-7 w-7 rounded-full bg-primary/20" />
                {userName}
              </button>
              <AnimatePresence>
                {profileOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 mt-3 w-48 rounded-2xl border bg-card p-2 shadow-soft"
                  >
                    <Link href="#profile" className="block rounded-lg px-3 py-2 text-sm hover:bg-accent">
                      Profile
                    </Link>
                    <Link href="#dashboard" className="block rounded-lg px-3 py-2 text-sm hover:bg-accent">
                      Dashboard
                    </Link>
                    <button className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-accent">
                      Logout
                    </button>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/register">
                <Button>Sign up</Button>
              </Link>
            </>
          )}
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="text-lg">≡</span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            className="fixed right-0 top-16 z-40 h-[calc(100vh-4rem)] w-72 border-l bg-background p-6 md:hidden"
          >
            <div className="space-y-4">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm font-medium">
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <div className="mb-2 text-xs uppercase tracking-[0.2em] text-foreground/60">Categories</div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <span key={cat} className="rounded-full border px-3 py-1 text-xs">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 space-y-3">
                <ThemeToggle />
                {isAuthenticated ? (
                  <>
                    <Button variant="outline" className="w-full">Profile</Button>
                    <Button className="w-full">Logout</Button>
                  </>
                ) : (
                  <>
                    <Link href="/login">
                      <Button variant="outline" className="w-full">Login</Button>
                    </Link>
                    <Link href="/register">
                      <Button className="w-full">Sign up</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
