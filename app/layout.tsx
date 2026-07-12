import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://resumeAi.vercel.app"),
  title: {
    default: "DelResumeAI — Build Your Resume with AI",
    template: "%s | DelResumeAI",
  },
  description:
    "Create a professional, ATS-optimized resume in minutes with AI-powered suggestions. Stand out from the crowd.",
  keywords: [
    "resume builder",
    "ai resume builder",
    "cv builder",
    "ats resume",
    "professional resume",
    "delresumeai",
  ],
  authors: [{ name: "Delightsome Ofili" }],
  creator: "Delightsome Ofili",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://delresumeai.vercel.app",
    siteName: "DelResumeAI",
    title: "DelResumeAI — Build Your Resume with AI",
    description:
      "Create a professional, ATS-optimized resume in minutes with AI-powered suggestions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DelResumeAI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DelResumeAI — Build Your Resume with AI",
    description:
      "Create a professional, ATS-optimized resume in minutes with AI-powered suggestions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${InterFont.variable}  scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#0a0f1e] antialiased">
        {children}
      </body>
    </html>
  );
}
