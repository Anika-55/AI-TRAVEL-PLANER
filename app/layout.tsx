import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Space_Grotesk, Spectral } from "next/font/google";
import Providers from "./providers";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

const body = Spectral({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "TripAI",
  description: "AI travel planner for modern explorers"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
