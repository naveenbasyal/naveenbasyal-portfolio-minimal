import type { Metadata } from "next";
import ProjectCard from "../components/project-card";
import { ShootingStars } from "app/components/ui/shooting-stars";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Naveen Basyal's projects, including Kanbuddy, FileDesk, Detoxifyme, and various open-source contributions.",
  openGraph: {
    title: "Naveen Basyal's Projects",
    description:
      "Discover the latest projects built by Naveen Basyal, including web development and open-source contributions.",
    url: "https://naveenbasyal.vercel.app/projects",
    siteName: "Naveen Basyal's Portfolio",

    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveen Basyal's Projects",
    description:
      "Explore a variety of projects and open-source contributions by Naveen Basyal.",
    creator: "@naveenbasyal",
    site: "@naveenbasyal",
  },
};

const projectsData = [
  {
    project: "Kanbuddy",

    description:
      "A Kanban task manager with real-time updates, drag-and-drop features, and collaboration tools.",
    technologies: ["React", "Node.js", "Socket.io", "Tailwind CSS"],
    website: "https://kanbuddy.vercel.app",
  },
  {
    project: "FileDesk",

    description:
      "An online print-ordering platform with payment integration and file management for students.",
    technologies: ["React", "Node.js", "Bootstrap", "JWT", "Razorpay"],
    website: "https://filedesk.netlify.app",
  },
  {
    project: "Detoxifyme",

    description:
      "A platform to encourage digital detox with challenges, leaderboards, and experience sharing.",
    technologies: ["React", "Node.js", "MaterialUI", "JWT"],
    website: "https://detoxifyme.netlify.app",
  },
  {
    project: "Resume Builder",
    description:
      "A web app to create and download resumes with a customization options.",
    technologies: ["React", "React-print-to-pdf"],
    website: "https://resumehub.netlify.app/",
  },
  {
    project: "Challenge App",
    description:
      "A mobile app for tracking gym and personal challenges with notifications and analytics.",
    technologies: ["React Native", "Firebase", "FCM"],
    website: "https://github.com/naveenbasyal/challenge-app",
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-4 tracking-tight">Projects 🚀</h1>

      {/* Projects Section */}
      <div className="prose prose-neutral dark:prose-invert">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.project}
            description={project.description}
            technologies={project.technologies}
            website={project.website}
          />
        ))}
      </div>
      <ShootingStars className="absolute z-1" />
    </section>
  );
}
