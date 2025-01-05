// blog/page.tsx

import { ShootingStars } from "app/components/ui/shooting-stars";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read my thoughts on engineering, design, and product development.",
  openGraph: {
    title: "Naveen Basyal's Blog",
    description:
      "Explore blog posts on engineering, design, and product development.",
    url: "https://naveenbasyal.com/blog",
    siteName: "Naveen Basyal's Portfolio",
    images: [
      {
        url: "https://cdn.naveenbasyal.com/open-graph/blogs.png",
        width: 1200,
        height: 630,
        alt: "Naveen Basyal's Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveen Basyal's Blog",
    description:
      "Read blog posts on engineering, design, and product development.",
    images: ["https://cdn.naveenbasyal.com/open-graph/blogs.png"],
    creator: "@naveenbasyal",
    creatorId: "@naveenbasyal",
    site: "@naveenbasyal",
    siteId: "@naveenbasyal",
  },
};

export default function BlogPage() {
  return (
    <section>
      <h2 className="font-medium text-2xl mb-8 tracking-tight font-['monospace']">
        Writings 🧑🏻‍💻
      </h2>

      {/* Coming Soon Message */}
      <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 p-4 rounded-lg">
        <p className="text-lg font-semibold">🚧 Coming Soon!</p>
        <p className="mt-2">
          I'm working on some exciting blog posts. Stay tuned for updates and
          insights about engineering, design, and product development.
        </p>
        <p className="mt-2 text-sm">
          Meanwhile, feel free to explore other sections of my portfolio.
        </p>
      </div>
      <ShootingStars className="absolute -z-10" />
    </section>
  );
}
