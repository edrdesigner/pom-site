import type { Metadata } from "next";
import { Inter, Russo_One } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const russoOne = Russo_One({ weight: "400", subsets: ["latin"], variable: '--font-russo' });

export const metadata: Metadata = {
  title: "Proof of Meme",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${russoOne.variable} font-sans`}>
      <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
    </html>
  );
}
