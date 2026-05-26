import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Ferienwohnungen Am Meer – Bad Zwischenahn",
  description:
    "Direkt am Zwischenahner Meer: Zwei komfortable Ferienwohnungen (105 & 106) in Bad Zwischenahn. Seesicht, allergikerfreundlich, zentrale Lage am Wanderweg und Hafen. Ideal für Ihren Urlaub am Wasser.",
  keywords: "Ferienwohnung, Bad Zwischenahn, Zwischenahner Meer, Urlaub, Am Meer, Ferienhaus",
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Am Meer",
  },
};

export const viewport: Viewport = {
  themeColor: "#2e6b8a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen flex flex-col">        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
