import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Non Linear Decision Intelligence | Aureus Logic & The Banker's Code",
  description:
    "Stop Guessing. Start Trading with Institutional Precision. Aureus Logic is the exact framework used by the top 1% to dominate Forex, Gold, Oil and Indices.",
  keywords:
    "Aureus Logic, Decision Intelligence, Agentic AI, Institutional Trading, Banker's Code, Sam Onigbanjo",
  authors: [{ name: "Sam Onigbanjo" }],
  creator: "Sam Onigbanjo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased selection:bg-aureus-gold selection:text-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
