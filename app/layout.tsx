import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const pressStart = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--font-brutal" });

const OG_IMAGE = "https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/og-image-400x400.png";

export const metadata: Metadata = {
  title: "Orthanc Foundry",
  description: "Palantir Foundry Projects",
  openGraph: {
    title: "Orthanc Foundry",
    description: "Palantir Foundry Projects",
    siteName: "Orthanc Foundry",
    type: "website",
    images: [{ url: OG_IMAGE, width: 400, height: 400, alt: "Orthanc Foundry" }],
  },
  twitter: {
    card: "summary",
    title: "Orthanc Foundry",
    description: "Palantir Foundry Projects",
    images: [OG_IMAGE],
  },
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
