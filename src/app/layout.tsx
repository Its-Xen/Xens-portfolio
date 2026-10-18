import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arman Rezaei — Software Engineer · Python · FastAPI · Django",
  description:
    "Portfolio of Arman Rezaei, a software engineer building fast, scalable backend systems with Python, FastAPI and Django. Explore projects, skills, and reading list.",
  keywords: [
    "Software Engineer",
    "FastAPI",
    "Django",
    "Python",
    "Backend",
    "API Development",
    "PostgreSQL",
    "Docker",
    "Portfolio",
  ],
  authors: [{ name: "Arman Rezaei" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Arman Rezaei — Software Engineer",
    description:
      "I build fast, scalable backend systems with Python — FastAPI and Django today, Rust on the roadmap.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
