import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saas Landing Page",
  description: "SaaS Landing Page with React, Next.js, TailwindCSS & Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(oswald.className, "antialiased bg-white")}>{children}</body>
    </html>
  );
}
