import type { Metadata } from "next";
import { Geist_Mono, Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashura-landing.adrielzimbril.com"),
  title: "Ashura | Brand Identity Studio for Product Visuals",
  description:
    "Day 13/30 of the AI-Generated Landing Page Challenge. Ashura is a conceptual brand identity studio that turns strategy, product visuals, and motion systems into high-converting digital launches.",
  keywords: [
    "Ashura",
    "brand identity studio",
    "AI brand design",
    "product visuals",
    "motion design",
    "agency landing page",
    "creative studio",
    "Next.js",
    "React",
    "motion/react",
    "Tailwind CSS",
    "bento design",
    "AI challenge",
  ],
  openGraph: {
    title: "Ashura | Brand Identity Studio for Product Visuals",
    description:
      "A conceptual brand identity studio landing page for Day 13/30 of the AI-Generated Landing Page Challenge.",
    url: "https://ashura-landing.adrielzimbril.com",
    siteName: "Ashura",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ashura landing page preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashura | Brand Identity Studio for Product Visuals",
    description:
      "A conceptual brand identity studio landing page for Day 13/30 of the AI-Generated Landing Page Challenge.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${display.variable} ${mono.variable}`}
      >
        {children}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
