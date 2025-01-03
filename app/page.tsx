import Link from "next/link";
import Image from "next/image";
import Badge from "./components/Badge";
import ArrowIcon from "./components/ArrowIcon";
import type { Metadata } from "next";
import Separator from "./components/separator";
import { Twitter, Linkedin, Github } from "lucide-react";
import {
  GithubLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Naveen Basyal",
  description:
    "I’m a Full Stack Web Developer from India, trying to make the internet a bit cooler one website at a time.",
  openGraph: {
    title: "Naveen Basyal",
    description:
      "I’m a Full Stack Web Developer from India, trying to make the internet a bit cooler one website at a time.",
    url: "https://naveenbasyal.com",
    siteName: "Naveen Basyal's Portfolio",
    images: [
      {
        url: "https://cdn.naveenbasyal.com/open-graph/home.png",
        height: 630,
        alt: "Naveen Basyal",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveen Basyal",
    description:
      "I’m a Full Stack Web Developer from India, trying to make the internet a bit cooler one website at a time.",
    images: ["https://cdn.naveenbasyal.com/open-graph/home.png"],
    creator: "@naveenbasyal",
    creatorId: "@naveenbasyal",
    site: "@naveenbasyal",
    siteId: "@naveenbasyal",
  },
};

const skills = [
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "React.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Socket.io", category: "Backend" },
  { name: "Redux", category: "Frontend" },
  { name: "JavaScript", category: "Language" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "REST", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AdonisJS", category: "Backend" },
  { name: "Redis", category: "Database" },
  { name: "Svelte 5", category: "Frontend" },
  { name: "Docker", category: "DevOps" },
  { name: "Firebase", category: "Backend" },
];

function SkillBadge({ skill }: { skill: { name: string; category: string } }) {
  const categoryColors = {
    Frontend: "from-blue-700 to-purple-700",
    Backend: "from-green-700 to-teal-700",
    Database: "from-yellow-700 to-orange-700",
    Language: "from-purple-700 to-pink-700",
    DevOps: "from-red-700 to-yellow-700",
  };

  return (
    <div className="relative group">
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${
          categoryColors[skill.category]
        } bg-opacity-20 text-white transition-all duration-300 ease-in-out hover:bg-opacity-30`}
      >
        {skill.name}
      </span>
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none">
        {skill.category}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <section>
      <header className="max-w-4xl mx-auto py-12">
        <div className="flex items-start gap-8">
          {/* Profile Image with Gradient Border */}
          <div className="relative w-[120px] h-[120px] flex-shrink-0">
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF1B6B] to-[#FFA26B]"
              style={{ padding: "3px" }}
            >
              <div className="h-full w-full rounded-full overflow-hidden bg-[#0B0B0B]">
                <Image
                  src="/pfp.png"
                  alt="Profile"
                  width={120}
                  height={120}
                  quality={100}
                  priority
                  unoptimized={true}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-[30px] leading-tight">
              <span className="text-white font-extrabold">
                Hey, I'm Naveen.{" "}
              </span>
              <span className="text-[#949494] font-semibold">
                I'm a Full Stack Developer
              </span>
            </h1>

            {/* Social Links */}
            <div className="flex gap-6">
              <Link
                href={"https://twitter.com/naveen__basyal"}
                className="text-white hover:opacity-80"
              >
                <span className="sr-only">Twitter</span>
                <XLogo size={24} />
              </Link>

              <Link
                href={"https://www.linkedin.com/in/naveenbasyal/"}
                className="text-white hover:opacity-80"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedinLogo size={24} />
              </Link>
              <Link
                href={"https://github.com/naveenbasyal"}
                className="text-white hover:opacity-80"
              >
                <span className="sr-only">GitHub</span>
                <GithubLogo size={24} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <Separator />
      {/* Skills Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Technical Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
      <Separator />

      <div className="mb-8 prose prose-neutral dark:prose-invert">
        <h2>Professional Work 💼👨‍💻</h2>
        <p>
          I’m all about creating cool and user-friendly digital experiences.
          Right now, I’m a <strong>Full Stack Developer</strong> at{" "}
          <span className="not-prose">
            <Badge href="https://www.linkedin.com/company/hausvalley-com/">
              <Image
                src={"https://admindev.hausvalley.com/dark-mode.png"}
                alt="Hausvalley.com"
                height={16}
                width={16}
                className={"pr-1"}
              />
              Hausvalley.com
            </Badge>
          </span>
          . My main gig is designing smooth and interactive user interfaces
          while making sure the backend runs like a dream. I am also managint to
          work with both the frontend and backend team to create and manage the
          database systems that power our apps.
        </p>
      </div>

      <Separator />

      <div className="mb-8 prose prose-neutral dark:prose-invert">
        <h2>Achievements in Tech Competitions 🏆💻</h2>
        <p>
          During my time at{" "}
          <a href="https://www.cgc.edu.in/" target="_blank">
            Chandigarh Group of Colleges
          </a>
          , I actively participated in tech events and competitions. Winning
          &nbsp;
          <i className="px-2 py-1  dark:bg-zinc-900 rounded">
            Acing the Race 2.0
          </i>{" "}
          Coding Competition (1st place) and&nbsp;
          <i className="px-2 py-1  dark:bg-zinc-900 rounded">Bro Code</i> Web
          Development Competition (2nd place) were some of my highlights. These
          experiences not only sharpened my technical skills but also taught me
          teamwork and problem-solving under pressure.
        </p>
      </div>

      <Separator />

      <div className="mb-8 prose prose-neutral dark:prose-invert">
        <h2>Personal Interests 💪🏻🎮</h2>
        <p>
          When I’m not coding, I’m probably hitting the gym. I’m big on fitness
          and love lifting weights. I also enjoy exploring new tech trends,
          gaming, and hanging out with my friends. Fitness and tech are my
          favorite combos, and I’m always thinking of ways to bring them
          together.
        </p>
      </div>

      <Separator />

      <div className="mb-8 prose prose-neutral dark:prose-invert">
        <h2>Writing ✍️📖</h2>
        <p>
          I am thinking to write <Link href="/blog">blogs</Link> to help others
          improve their engineering skills. Stay tuned for more content!
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <article className="text-xs sm:hidden lg:block">
          Press Ctrl+K or ⌘+K to navigate with your keyboard.
        </article>
      </div>

      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/naveenbasyal"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Follow me</p>
          </a>
        </li>
      </ul>

      <div>
        <a
          className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all text-neutral-600 dark:text-neutral-300 mt-3"
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:hey@naveenbasyal.com?subject=Hello naveen!"
        >
          <p className="h-7">
            <span className="mr-2 text-neutral-600">📧</span>
            naveenbasyal.001@gmail.com
          </p>
        </a>
      </div>
    </section>
  );
}
