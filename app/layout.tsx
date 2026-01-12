import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/layout/ThemeToggle/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { personalInfo } from "@/lib/data/personal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${personalInfo.nickname} | ${personalInfo.title}`,
  description:
    `Portfolio of ${personalInfo.nickname} - ${personalInfo.bio}`,
  keywords: ["portfolio", "developer", "researcher", "engineer", personalInfo.nickname],
  authors: [{ name: personalInfo.name, url: personalInfo.website }],
  creator: personalInfo.nickname,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: personalInfo.website,
    title: `${personalInfo.nickname} | ${personalInfo.title}`,
    description:
      `Portfolio of ${personalInfo.nickname} - ${personalInfo.bio}`,
    siteName: `${personalInfo.nickname} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.nickname} | ${personalInfo.title}`,
    description:
      `Portfolio of ${personalInfo.nickname} - ${personalInfo.bio}`,
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
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
