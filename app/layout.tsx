import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://delresumeai.vercel.app"),
  title: {
    default: "DelResumeAI — Build Your Resume with AI",
    template: "%s | DelResumeAI",
  },
  description:
    "Create a professional, ATS-optimized resume in minutes with AI-powered suggestions. Stand out from the crowd.",
  keywords: [
    "AI Resume Builder",
    "Resume Builder",
    "CV Builder",
    "Free Resume Builder",
    "ATS Resume",
    "Professional Resume",
    "Resume Generator",
    "Online Resume Builder",
    "Resume Templates",
    "Resume PDF",
    "DelResumeAI",
  ],
  authors: [{ name: "Delightsome Ofili" }],
  creator: "Delightsome Ofili",

  alternates: {
    canonical: "https://delresumeai.vercel.app",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  themeColor: "#0a0f1e",

  category: "technology",

  applicationName: "DelResumeAI",

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "DelResumeAI",
  },

  verification: {
    google: "verification-code",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://delresumeai.vercel.app",
    siteName: "DelResumeAI",
    title: "DelResumeAI — Build Your Resume with AI",
    description:
      "DelResumeAI is a free AI resume builder that helps you create professional, ATS-friendly resumes with AI suggestions, modern templates, and instant PDF export.",
    images: [
      {
        url: "https://delresumeai.vercel.app/og-image.png",
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
    images: ["https://delresumeai.vercel.app/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "DelResumeAI",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              url: "https://delresumeai.vercel.app",
              description:
                "AI-powered resume builder for creating ATS-friendly resumes.",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
