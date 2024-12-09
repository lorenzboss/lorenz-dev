import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";

const robotoSerif = Roboto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lorenz Portfolio",
  description:
    "In this portfolio you can find information about me, Lorenz Boss, and my projects.",
  keywords: [
    "Lorenz Boss",
    "Basel",
    "portfolio",
    "about me",
    "Switzerland",
    "web developer",
    "software engineer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${robotoSerif.className} overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
