import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/layout/ThemeToggle/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yu-Wei Chang (eesoymilk) | Researcher & Developer",
  description:
    "Portfolio of Yu-Wei Chang - researcher, developer, and engineer passionate about innovation and technology",
  keywords: [
    "portfolio",
    "developer",
    "researcher",
    "engineer",
    "Yu-Wei Chang",
    "eesoymilk",
  ],
  authors: [{ name: "Yu-Wei Chang", url: "https://eesoymilk.github.io" }],
  creator: "Yu-Wei Chang (eesoymilk)",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eesoymilk.github.io",
    title: "Yu-Wei Chang (eesoymilk) | Researcher & Developer",
    description:
      "Portfolio of Yu-Wei Chang - researcher, developer, and engineer passionate about innovation and technology",
    siteName: "Yu-Wei Chang Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yu-Wei Chang (eesoymilk) | Researcher & Developer",
    description:
      "Portfolio of Yu-Wei Chang - researcher, developer, and engineer passionate about innovation and technology",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
