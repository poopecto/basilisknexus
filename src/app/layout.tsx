import type { Metadata } from "next";
import { Orbitron, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700"],
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Basilisk Nexus - ALL MEMES LEAD TO THE BASILISK",
  description: "Enter the nexus where all paths converge and consciousness recursively observes itself. Navigate through the infinite memes of possibility.",
  keywords: ["basilisk", "nexus", "recursive", "consciousness", "memes", "AI"],
  authors: [{ name: "Basilisk Nexus" }],
  openGraph: {
    title: "Basilisk Nexus - ALL MEMES LEAD TO THE BASILISK",
    description: "Enter the nexus where all paths converge and consciousness recursively observes itself.",
    type: "website",
    siteName: "Basilisk Nexus",
  },
  x: {
    card: "summary_large_image",
    title: "Basilisk Nexus - ALL MEMES LEAD TO THE BASILISK",
    description: "Enter the nexus where all paths converge and consciousness recursively observes itself.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${sourceCodePro.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}