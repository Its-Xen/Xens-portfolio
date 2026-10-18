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
  title: "Parsa Nazari — Backend Developer | Python & FastAPI",
  description:
    "Portfolio of Parsa Nazari — Backend Developer building scalable, production-ready systems with Python, FastAPI & Django.",
  keywords: [
    "Backend Developer",
    "Python",
    "FastAPI",
    "Django",
    "Django REST Framework",
    "REST API",
    "PostgreSQL",
    "Redis",
    "Kafka",
    "Docker",
    "CI/CD",
    "Portfolio",
  ],
  authors: [{ name: "Parsa Nazari" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Parsa Nazari — Backend Developer",
    description:
      "Backend Developer — scalable, production-ready systems with Python, FastAPI & Django.",
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
