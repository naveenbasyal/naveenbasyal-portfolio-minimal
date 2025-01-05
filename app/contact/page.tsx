// pages/ContactPage.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Separator from "../components/separator";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { ShootingStars } from "app/components/ui/shooting-stars";


export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Naveen Basyal via email or schedule a meet.",
  openGraph: {
    title: "Contact Naveen Basyal",
    description:
      "Reach out to Naveen Basyal via email or schedule a 1:1 meeting.",
    url: "https://naveenbasyal.com/contact",
    siteName: "Naveen Basyal's Portfolio",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1874309958344273920/eF3_2X6X_400x400.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Naveen Basyal",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Naveen Basyal",
    description: "Connect with Naveen Basyal via email or schedule a meeting.",
    images: [
      "https://pbs.twimg.com/profile_images/1874309958344273920/eF3_2X6X_400x400.jpg",
    ],
    creator: "@naveenbasyal",
    creatorId: "@naveen__basyal",
    site: "@naveen__basyal",
    siteId: "@naveenbasyal",
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
            href="mailto:hello@naveenbasyal.com"
            className="underline text-sm ml-1"
          >
            naveenbasyal.001@gmail.com
          </a>
        </div>

        <Separator />

        {/* Meeting Schedule Option */}
        <h2 className="font-medium text-2xl mb-6 tracking-tight font-['monospace']">
          Let’s connect! Schedule a 1:1 meeting with me.
        </h2>

        <div>
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3jkXbpVZIz-zjZgJyJzNcjsNV2H1oUYHFEmkEB3oysn609M8HycdPOOp-tInpGE1G-htOsVkES"
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
