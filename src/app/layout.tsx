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

/**
 * Runs synchronously before first paint (first node in <body>) so the
 * stored theme is applied without any flash. Deep space (dark) is the
 * default; visitors who chose "light" get the daylight variant.
 */
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored ? stored === "dark" : true;
    document.documentElement.classList.toggle("dark", dark);
  } catch (e) {
    document.documentElement.classList.add("dark");
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
