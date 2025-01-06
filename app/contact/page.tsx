// pages/ContactPage.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Separator from "../components/separator";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { ShootingStars } from "app/components/ui/shooting-stars";


export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Puneet Sharma via email or schedule a meet.",
  openGraph: {
    title: "Contact Puneet Sharma",
    description:
      "Reach out to Puneet Sharma via email or schedule a 1:1 meeting.",
    url: "https://puneetsharma.vercel.app/contact",
    siteName: "Puneet Sharma's Portfolio",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1876288860264521728/Z3mBTqJE_400x400.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Puneet Sharma",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Puneet Sharma",
    description: "Connect with Puneet Sharma via email or schedule a meeting.",
    images: [
      "https://pbs.twimg.com/profile_images/1876288860264521728/Z3mBTqJE_400x400.jpg",
    ],
    creator: "@Puneet_0052",
    creatorId: "@puneet_sharma",
    site: "@puneet_sharma",
    siteId: "@Puneet_0052",
  },
};

export default function ContactPage() {
  return (
    <section>
      <h1 className='font-medium text-2xl mb-6 tracking-tight font-["monospace"]'>
        Contact 📧
      </h1>

      {/* Email Contact */}
      <div className="prose prose-neutral dark:prose-invert">
        <p>Feel free to reach out to me via email:</p>
        <div className="flex items-center mb-4">
          <EnvelopeSimple size={24} />
          <a
            href="mailto:ps464123@gmail.com"
            className="underline text-sm ml-1"
          >
            ps464123@gmail.com
          </a>
        </div>

        <Separator />

        {/* Meeting Schedule Option */}
        <h2 className="font-medium text-2xl mb-6 tracking-tight font-['monospace']">
          Let’s connect! Schedule a 1:1 meeting with me.
        </h2>

        <div>
          <a
            href="https://calendar.app.google/ceEJ9hhzU4jCGpaa8"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-sm"
          >
            Schedule a meet
          </a>
        </div>
      </div>
      <ShootingStars className="absolute -z-10" />
    </section>
  );
}
