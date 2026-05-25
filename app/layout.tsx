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
    "Zwei komfortable Ferienwohnungen direkt am Zwischenahner Meer in Bad Zwischenahn. Seesicht, allergikerfreundlich.",
  keywords: "Ferienwohnung, Bad Zwischenahn, Zwischenahner Meer, Urlaub, Nordsee",
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
