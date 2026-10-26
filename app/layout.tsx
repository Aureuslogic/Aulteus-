import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import VapiWidget from "@/components/VapiWidget";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import {
  organizationSchema,
  personSchema,
  websiteSchema,
  educationalOrganizationSchema,
} from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "600"],
});

const SITE_URL = "https://aulteuslogic.com";
const SITE_TITLE =
  "Non Linear Decision Intelligence | Aulteus Logic | Forex, Gold, Oil and Indices";
const SITE_DESCRIPTION =
  "Stop Guessing. Start Trading with Institutional Precision. Aulteus Logic is the decision governance framework built for Forex, Gold, Oil and Indices traders.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Aulteus Logic",
    title: "Non Linear Decision Intelligence | Aulteus Logic",
    description: SITE_DESCRIPTION,
    locale: "en_GB",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Non Linear Decision Intelligence | Aulteus Logic",
    description:
      "Decision governance for Forex, Gold, Oil and Indices. The framework built to help traders act with institutional precision.",
    images: ["/assets/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrganizationSchema) }}
        />
        <Navigation />

        <main>{children}</main>
        <Footer />
        <VapiWidget />
      </body>
    </html>
  );
}
