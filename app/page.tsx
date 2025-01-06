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
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { Cover } from "./components/ui/cover";
import { LinkPreview } from "./components/ui/link-preview";
import { SparklesCore } from "./components/ui/sparkles";
import { Spotlight } from "./components/ui/Spotlight";
import { ShootingStars } from "./components/ui/shooting-stars";

export const metadata: Metadata = {
  title: "Puneet Sharma",
  description:
    "I’m a Backend Developer from India, trying to make the internet a bit cooler one website at a time.",
  openGraph: {
    title: "Puneet Sharma",
    description:
      "I’m a Backend Developer from India, trying to make the internet a bit cooler one website at a time.",
    url: "https://puneetsharma.vercel.app",
    siteName: "Puneet Sharma's Portfolio",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1876288860264521728/Z3mBTqJE_400x400.jpg",
        height: 630,
        alt: "Puneet Sharma",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Puneet Sharma",
    description:
      "I’m a Backend Developer from India, trying to make the internet a bit cooler one website at a time.",
    images: ["https://pbs.twimg.com/profile_images/1876288860264521728/Z3mBTqJE_400x400.jpg"],
    creator: "@puneetsharma",
    creatorId: "@puneetsharma",
    site: "@puneetsharma",
    siteId: "@puneetsharma",
  },
};

const skills = [
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "React.js", category: "Frontend" },
  { name: "Socket.io", category: "Backend" },
  { name: "JavaScript", category: "Language" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "REST", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AdonisJS", category: "Backend" },
  { name: "Redis", category: "Database" },
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
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#2486d3"
      />
      <header className="max-w-4xl mx-auto py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
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
                Hey, I'm <Cover>Puneet Sharma</Cover>. I'm a{" "}
              </span>
              <span className="text-[#949494] font-semibold">
                Backend Developer
              </span>
            </h1>

            {/* Social Links */}
            <div className="flex gap-6">
              <Link
                href={"https://twitter.com/puneet_0052"}
                className="text-white hover:opacity-80"
              >
                <span className="sr-only">Twitter</span>
                <XLogo size={24} />
              </Link>

              <Link
                href={"https://www.linkedin.com/in/the-puneet-sharma/"}
                className="text-white hover:opacity-80"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedinLogo size={24} />
              </Link>
              <Link
                href={"https://github.com/PuneetSharma52"}
                className="text-white hover:opacity-80"
              >
                <span className="sr-only">GitHub</span>
                <GithubLogo size={24} />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="w-[100%] h-10 relative">
        {/* Gradients */}
        <div className="absolute w-full inset-x-0  md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] md:w-3/4 blur-sm" />
        <div className="absolute w-full inset-x-0  md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px md:w-3/4" />
        <div className="absolute inset-x-28  md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute  inset-x-28 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        {/* <div className="absolute inset-0 w-full h-full bg-[#0c0f11] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
      </div>

      {/* <Separator /> */}
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
        <div>
          I’m all about creating cool and user-friendly digital experiences.
          Right now, I’m a <strong>Backend Developer</strong> at{" "}
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
        </div>
      </div>

      <Separator />

      <div className="mb-8 prose prose-neutral dark:prose-invert">
        <h2>Achievements in Tech Competitions 🏆💻</h2>
        <div>
          During my time at{" "}
          <LinkPreview url="https://www.cgc.edu.in/">
            <span className="underline">Chandigarh Group of Colleges</span>
          </LinkPreview>
          , I consistently pursued excellence in academics and extracurriculars. My
          dedication earned me a scholarship four times for maintaining a top-ten
          position in my diploma program. Additionally, I secured certifications in
          <i className="px-2 py-1 dark:bg-zinc-900 rounded">
            Cyber Security Essentials (CISCO)
          </i>{" "}
          and{" "}
          <i className="px-2 py-1 dark:bg-zinc-900 rounded">
            Data Structures and Algorithms in Java (LinkedIn)
          </i>
          , demonstrating my commitment to enhancing my technical expertise.
        </div>
      </div>

      <Separator />

      <div className="mb-8 prose prose-neutral dark:prose-invert">
        <h2>Personal Interests 💪🏻🎮</h2>
        <p>
          Apart from coding, I enjoy staying fit by hitting the gym regularly. I am
          passionate about software engineering and DevOps, always exploring ways to
          combine fitness and technology to create innovative solutions. In my
          leisure time, I also engage in gaming and learning emerging technologies to
          stay ahead in the tech world.
        </p>
      </div>

      <Separator />

      <div className="mb-8 prose prose-neutral dark:prose-invert">
        <h2>Writing ✍️📖</h2>
        <p>
          I aim to start writing <Link href="/blog">blogs</Link> that guide aspiring
          developers in backend development, database management, and quality
          assurance. Stay connected for insights into building scalable and reliable
          systems!
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
            href="https://twitter.com/puneet_0052"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Follow me</p>
          </a>
        </li>
      </ul>

      <ShootingStars className="absolute -z-10" />
      <div>
        <a
          className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all text-neutral-600 dark:text-neutral-300 mt-3"
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:ps464123@gmail.com?subject=Hello Puneet!"
        >
          <p className="h-7">
            <span className="mr-2 text-neutral-600">📧</span>
            ps464123@gmail.com
          </p>
        </a>
      </div>

    </section>
  );
}
