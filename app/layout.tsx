import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/layout/ThemeToggle/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eesoymilk | Researcher & Developer",
  description:
    "Portfolio of eesoymilk - researcher, developer, and engineer passionate about innovation and technology",
  keywords: ["portfolio", "developer", "researcher", "engineer", "eesoymilk"],
  authors: [{ name: "Yu-Wei Chang", url: "https://eesoymilk.github.io" }],
  creator: "eesoymilk",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eesoymilk.github.io",
    title: "eesoymilk | Researcher & Developer",
    description:
      "Portfolio of eesoymilk - researcher, developer, and engineer passionate about innovation and technology",
    siteName: "eesoymilk Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "eesoymilk | Researcher & Developer",
    description:
      "Portfolio of eesoymilk - researcher, developer, and engineer passionate about innovation and technology",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
