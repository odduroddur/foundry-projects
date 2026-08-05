import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const pressStart = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--font-brutal" });

export const metadata: Metadata = {
  title: "orthancfoundry",
  description: "Palantir Foundry Projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${pressStart.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
