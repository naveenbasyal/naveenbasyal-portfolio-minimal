import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { PreloadResources } from "./preload";
import Cmdk from "./components/CmdK";
import Footer from "./components/footer";
import { SparklesCore } from "./components/ui/sparkles";

export const metadata: Metadata = {
  metadataBase: new URL("https://naveenbasyal.com/"),
  title: {
    default: "Naveen Basyal",
    template: "%s | Naveen Basyal",
  },
  description:
    "Passionate full stack developer from India. On the way to master programming",
  openGraph: {
    title: "Naveen Basyal",
    description:
      "Passionate full stack developer from India. On the way to master programming.",
    url: "https://naveenbasyal.vercel.app/",
    siteName: "Naveen Basyal's Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/ogs/ogs-bg.png",
        width: 1200,
        height: 630,
        alt: "Naveen Basyal Full Stack Developer",
      },
    ],
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
  twitter: {
    title: "Naveen Basyal",
    card: "summary_large_image",
    creator: "@naveen__basyal",
    creatorId: "@naveen__basyal",
    site: "@naveen__basyal",
    siteId: "@naveenbasyal",
    description:
      "Passionate full stack developer from India. On the way to master programming.",
    images: ["/ogs/ogs-bg.png"],
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(
        "text-black bg-white dark:text-white dark:bg-[#0c0f11]",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"
        />

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        ></script>
      </head>
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Cmdk />
          <Navbar />
          {children}
          <Footer />
          <PreloadResources />
          <div className="absolute inset-0 -z-50">
            <SparklesCore
              background="transparent"
              particleDensity={8}
              speed={3}
              maxSize={3}
              particleColor="#115178"
              particleSize={10}
            />
          </div>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
