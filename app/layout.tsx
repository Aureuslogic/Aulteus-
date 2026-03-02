import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased selection:bg-aureus-gold selection:text-white">
        {/* Vapi Widget Script */}
        <Script
          src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js"
          strategy="afterInteractive"
        />
        <Navigation />

        <main>{children}</main>
        <Footer />

        {/* Vapi Widget */}
        <vapi-widget
          public-key={process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY}
          assistant-id={process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID}
          mode="voice"
          main-label="Talk to Aureus Agent"
          theme="light"
          accent-color="#c5a059"
          empty-voice-message="Click to start a voice conversation"
        ></vapi-widget>
      </body>
    </html>
  );
}
