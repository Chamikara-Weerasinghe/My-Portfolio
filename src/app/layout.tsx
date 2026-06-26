import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://chamikara.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chamikara Weerasinghe | Software Engineer & DevOps",
    template: "%s | Chamikara Weerasinghe",
  },
  description:
    "Software Engineering Undergraduate, DevOps Engineer Intern, and Full Stack Developer. Building scalable web applications, cloud infrastructure, and modern digital experiences.",
  keywords: [
    "Chamikara Weerasinghe",
    "Software Engineer",
    "DevOps",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Cloud Computing",
    "CI/CD",
    "Portfolio",
  ],
  authors: [{ name: "Chamikara Weerasinghe", url: siteUrl }],
  creator: "Chamikara Weerasinghe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Chamikara Weerasinghe",
    title: "Chamikara Weerasinghe | Software Engineer & DevOps",
    description:
      "Software Engineering Undergraduate, DevOps Engineer Intern, and Full Stack Developer passionate about cloud, automation, and modern web technologies.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Chamikara Weerasinghe Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chamikara Weerasinghe | Software Engineer & DevOps",
    description:
      "Building scalable web applications, cloud infrastructure, and modern digital experiences.",
    images: ["/og-image.svg"],
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
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
