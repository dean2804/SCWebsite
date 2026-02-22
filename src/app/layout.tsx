import type { Metadata } from "next";
import { Geist, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/i18n/LanguageContext";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "SupplyConsult GmbH – Interim Executive Supply Chain & Procurement",
  description:
    "Dean Dukic – Interim Executive (VP/Head) für Supply Chain & Procurement. Turnaround, Transformation und Procurement Excellence. 26+ Jahre Erfahrung. DACH/EU.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geist.variable} ${dmSerif.variable} antialiased flex flex-col min-h-screen`}>
        <LanguageProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
