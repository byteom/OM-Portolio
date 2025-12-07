import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OM SINGH - Full Stack Developer & Cloud Engineer",
  description: "Full Stack Developer & Cloud Engineer at Certifyo. I architect and deploy production-grade applications on AWS + Vercel, engineer AI-powered platforms, and optimize performance. Passionate about building scalable solutions with 99.99% uptime.",
  keywords: ["Full Stack Developer", "Cloud Engineer", "AWS", "Next.js", "React", "TypeScript", "Portfolio", "OM SINGH"],
  authors: [{ name: "OM SINGH" }],
  creator: "OM SINGH",
  openGraph: {
    title: "OM SINGH - Full Stack Developer & Cloud Engineer",
    description: "Full Stack Developer & Cloud Engineer at Certifyo. I architect and deploy production-grade applications on AWS + Vercel, engineer AI-powered platforms, and optimize performance.",
    url: "https://byteom.in",
    siteName: "OM SINGH Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OM SINGH - Full Stack Developer & Cloud Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OM SINGH - Full Stack Developer & Cloud Engineer",
    description: "Full Stack Developer & Cloud Engineer at Certifyo. I architect and deploy production-grade applications on AWS + Vercel.",
    images: ["/og-image.png"],
    creator: "@byteom",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
