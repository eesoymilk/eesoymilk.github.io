import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/layout/ThemeToggle/ThemeProvider";
import { personalInfo } from "@/lib/data/personal";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const description = `${personalInfo.name} — ${personalInfo.title}. ${personalInfo.bio}`;

export const metadata: Metadata = {
  title: `${personalInfo.name} — ${personalInfo.title}`,
  description,
  keywords: [
    "robotics",
    "machine learning",
    "VLA",
    "vision language action",
    "embodied AI",
    "UCLA",
    personalInfo.name,
    personalInfo.nickname,
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.website }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: personalInfo.website,
    title: `${personalInfo.name} — ${personalInfo.title}`,
    description,
    siteName: personalInfo.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — ${personalInfo.title}`,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d11" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
