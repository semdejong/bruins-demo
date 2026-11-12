import type { Metadata, Viewport } from "next";
import { Besley, Manrope, Spline_Sans_Mono } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

const besley = Besley({
  subsets: ["latin", "latin-ext"],
  weight: "700",
  variable: "--font-besley",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

const spline = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-spline",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: "%s · Bruins Schilderwerken",
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  icons: {
    icon: content.company.logo,
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = { themeColor: content.colors.papier };

// Sleads demo-analytics (cookieloos). Events tellen alleen voor slugs die via POST /api/demos geregistreerd zijn.
const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--brand": c.primary,
  "--brand-fg": c.primaryForeground,
  "--accent": c.accent,
  "--background": c.background,
  "--foreground": c.foreground,
  "--muted": c.muted,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={content.seo.lang}
      style={themeVars}
      className={`${besley.variable} ${manrope.variable} ${spline.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#inhoud"
          className="absolute left-4 top-0 z-[70] -translate-y-full bg-wit px-3 py-2 font-medium focus:translate-y-4"
        >
          Ga naar inhoud
        </a>
        <Header />
        <main id="inhoud" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileBar />
        <SleadsBadge />
      </body>
    </html>
  );
}
