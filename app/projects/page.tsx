import type { Metadata } from "next";
import ProjectCard from "../components/project-card";
import { ShootingStars } from "app/components/ui/shooting-stars";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Puneet Sharma's projects, including HausValley, Codex AI Assistant, and various innovative backend solutions.",
  openGraph: {
    title: "Puneet Sharma's Projects",
    description:
      "Discover the latest projects built by Puneet Sharma, including backend development and AI integration.",
    url: "https://puneetsharma.vercel.app/projects",
    siteName: "Puneet Sharma's Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Puneet Sharma's Projects",
    description:
      "Explore a variety of innovative projects and backend solutions by Puneet Sharma.",
    creator: "@puneetsharma",
    site: "@puneetsharma",
  },
};

const projectsData = [
  {
    project: "HausValley Backend",
    description:
      "Developed a unified backend for the customer app, partner app, and official website, leveraging AdonisJS and PostgreSQL.",
    technologies: ["AdonisJS", "PostgreSQL", "Lucid ORM"],
    website: "https://apidev.hausvalley.com/",
  },
  {
    project: "Codex AI Assistant",
    description:
      "An AI-powered chat assistant integrating Google Gemini API, providing real-time responses to user queries.",
    technologies: ["Express.js", "Vite", "Google Gemini API"],
    website: "https://codex-chat-gpt-clone.vercel.app",
  },
  {
    project: "Youtube Clone",
    description:
      "A responsive clone of the Youtube homepage, built using React and Tailwind CSS.",
    technologies: ["Rapid API", "Tailwind CSS", "React"],
    website: "https://youtube-clone-by-puneet.netlify.app/",
  },
  {
    project: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills, and professional achievements with a focus on responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    website: "https://puneetsharma.netlify.app",
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-4 tracking-tight">Projects 🚀</h1>

      {/* Projects Section */}
      <div className="prose prose-neutral z-30 dark:prose-invert">
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
      <ShootingStars className="absolute -z-10" />
    </section>
  );
}
