import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const plusJakartaSans = localFont({
  src: [
    {
      path: "./fonts/PlusJakartaSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PlusJakartaSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/PlusJakartaSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/PlusJakartaSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/PlusJakartaSans-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
});

const inter = localFont({
  src: [
    {
      path: "./fonts/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Inter-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://teamcodix.com"
).replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Team Codix — WE BUILD DIGITAL PRODUCTS",
    template: "%s | Team Codix",
  },
  description:
    "Team Codix is a premier software studio. Websites, AI chatbots, custom software and mobile apps, built clean, fast and made to grow your business.",
  keywords: [
    "Team Codix",
    "software studio",
    "web development",
    "AI chatbots",
    "custom software",
    "mobile app development",
    "product studio",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Team Codix" }],
  creator: "Team Codix",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Team Codix — WE BUILD DIGITAL PRODUCTS",
    description:
      "Websites, AI chatbots, custom software and mobile apps, built clean, fast and made to grow your business.",
    siteName: "Team Codix",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Team Codix — We Build Digital Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Codix — WE BUILD DIGITAL PRODUCTS",
    description:
      "Websites, AI chatbots, custom software and mobile apps, built clean, fast and made to grow your business.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-[#12264F] flex flex-col font-sans selection:bg-[#C5DAF8] selection:text-[#12264F]">
        {children}
      </body>
    </html>
  );
}
