import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";

const robotoSerif = Roboto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sticky Header with Dark Mode",
  description: "A demo of a sticky header with dark mode support",
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
      </body>
    </html>
  );
}
