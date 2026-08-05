import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const pressStart = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--font-brutal" });

export const metadata: Metadata = {
  title: "Orthancfoundry",
  description: "Palantir Foundry Projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${pressStart.variable}`}>{children}</body>
    </html>
  );
}
