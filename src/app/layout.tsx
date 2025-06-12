import type { Metadata } from "next";
import { Marcellus, Dancing_Script, Young_Serif } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const marcellus = Marcellus({
  weight: '400',
  variable: "--font-marcellus",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  weight: '400',
  variable: "--font-dancing",
  subsets: ["latin"],
});

const youngSerif = Young_Serif({
  weight: '400',
  variable: "--font-young",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Álefe & Raissa",
  description: "Casamento dia 27/07/2025 ás 15:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${marcellus.variable} ${dancingScript.variable} ${youngSerif.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
