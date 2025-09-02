import type { Metadata } from "next";
import WorkExperienceItem from "../components/work-experience-item";
import EducationItem from "../components/education-item";
import VolunteeringItem from "../components/volunteer-item";
import { ShootingStars } from "app/components/ui/shooting-stars";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "A summary of Naveen Basyal’s skills, education, and professional experience as a Full-Stack Developer, including projects and achievements.",
  openGraph: {
    type: "article",
    url: `https://naveenbasyal.vercel.app/resume`,
    title: "Naveen Basyal’s Resume",
    siteName: "Naveen Basyal's Portfolio",
    description:
      "Explore Naveen Basyal's resume, showcasing his professional experience, technical skills, and projects.",
    images: [
      {
        url: `https://naveenbasyal.vercel.app/pfp.jpeg`,
        width: 1200,
        height: 630,
        alt: "Naveen Basyal's Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveen Basyal's Resume",
    description:
      "Check out Naveen Basyal’s Full-Stack Developer resume, showcasing his skills and professional achievements.",
    images: ["https://naveenbasyal.vercel.app/pfp.jpeg"],
    creator: "@naveen__basyal",
    creatorId: "@naveen__basyal",
    site: "@naveen__basyal",
    siteId: "@naveen__basyal",
  },
};

function calculateDuration(start: string, end: string): string {
  const startDate = new Date(start);
  const endDate = end.toLowerCase() === "present" ? new Date() : new Date(end);

  const totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearString = years > 0 ? `${years} yrs` : "";
  const monthString = months > 0 ? `${months} mos` : "";

  return [yearString, monthString].filter(Boolean).join(" ");
}

const resumeData = {
  workExperience: [
    {
      company: "Hausvalley Pvt Ltd",
      role: "Full-Stack Developer",
      period: "July 2024 - Present",
      location: "Remote",
      workType: "Full-time",
      website: "https://hausvalley.com",
      technologies: [
        "Next.js",
        "Svelte 5",
        "Adonis Js",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      responsibilities: [
        "Designed and developed user interfaces for various service offerings for different websites.",
        "Worked in backend to implement overall functionality of the application.",
      ],
      duration: calculateDuration("2024-07-01", "Present"),
    },
    {
      company: "Strikebit",
      role: "Full-Stack Developer",
      period: "Feb 2025 - July 2025",
      location: "Remote",
      workType: "Contract",
      website: "https://strikebit.io",
      technologies: [
        "Telegram Open Network",
        "Next.js",
        "PostgreSQL",
        "Tailwind CSS",
        "Drizzle ORM",
        "NodeJs",
        "Express",
      ],
      responsibilities: [
        "Telegram Mini App + Bot : Built using TON Blockchain for wallet management and decentralized features.",
        "Admin Dashboard: Built a scalable prediction dashboard using Vite and React.js for efficient platform management.",
      ],
      duration: calculateDuration("2025-02-01", "Present"),
    },
    {
      company: "Solitaire Infosys",
      role: "Fullstack Developer (Intern)",
      period: "June 2022 - July 2022",
      location: "Mohali, Punjab",
      website: "https://solitaireinfosystems.com/",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      responsibilities: [
        "Led the development of a REST API using Node.js, Express.js, and MongoDB to efficiently store data.",
        "Spearheaded the creation of a full-stack web application using React.js and MongoDB.",
      ],
      duration: calculateDuration("2022-06-01", "2022-07-31"),
    },
  ],
  education: [
    {
      institution: "Chandigarh Group of Colleges Mohali, Punjab",
      logo: "https://cdn.naveenbasyal.vercel.app/logos/cgc.png",
      degree: "B.Tech in Computer Science Engineering",
      period: "2020 - 2024",
      location: "Mohali, Punjab",
    },
    {
      institution: "St. Carmel School Ropar, Punjab",
      logo: "https://cdn.naveenbasyal.vercel.app/logos/stcarmel.png",
      degree: "Non-Medical, Secondary School",
      period: "2018 - 2020",
      location: "Ropar, Punjab",
    },
  ],
  projects: [
    {
      project: "Walldeed",

      description:
        "Built a campus print marketplace with full ecommerce flow, flexible pricing, and payment gateway integration",
      technologies: [
        "Next.js",
        "Node.js",
        "PostgreSql",
        "Prisma",
        "Cloudinary",
        "Socket.io",
        "Tailwind CSS",
      ],
      website: "https://walldeed.vercel.app/",
    },
    {
      project: "Indistock",

      description:
        "Developed a platform offering affordable stock data APIs for 3000+ Indian stocks, secure authentication, and fast indicator analytics.",

      technologies: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "Drizzle",
        "Redis",
        "Tailwind CSS",
      ],
      website: "https://indistock-platform.vercel.app/",
    },
    {
      name: "Kanbuddy",
      description:
        "Built a Kanban task manager with real-time updates, enabling team collaboration and progress tracking. Implemented drag-and-drop for efficient task management.",
      technologies: [
        "Node.js",
        "React",
        "Express",
        "Socket.io",
        "Tailwind CSS",
      ],
      link: "https://kanbuddy.vercel.app",
    },
    {
      name: "FileDesk",
      description:
        "Developed an online print-ordering platform to reduce on-campus shop crowding, integrating Razorpay for payments and enabling convenient file management.",
      technologies: ["Node.js", "React", "Express", "Socket.io", "Bootstrap"],
      link: "https://filedesk.netlify.app",
    },
    {
      name: "Detoxifyme",
      description:
        "Created a digital detox platform with challenges, leaderboards, and experience sharing. Implemented user authentication and leaderboard tracking.",
      technologies: ["Node.js", "React", "Express", "MaterialUI", "JWT"],
      link: "https://detoxifyme.netlify.app",
    },
  ],
};

export default function WorkPage() {
  return (
    <section>
      <div className="flex">
        <h1 className='font-medium text-2xl mb-2 tracking-tight font-["monospace"]'>
          My Resume 📝
        </h1>
      </div>

      {/* Work Section */}
      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="font-medium text-2xl mb-4">Work Experience</h2>
        {resumeData.workExperience.map((job, index) => (
          <WorkExperienceItem key={index} job={job} />
        ))}
      </div>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      {/* Education Section */}
      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="font-medium text-2xl mb-4">Education</h2>
        {resumeData.education.map((edu, index) => (
          <EducationItem key={index} edu={edu} />
        ))}
      </div>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      {/* Projects Section */}
      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="font-medium text-2xl mb-4">Projects</h2>
        {resumeData.projects.map((project, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>
            <a href={project.link} className="text-blue-500 underline">
              View Project
            </a>
          </div>
        ))}
      </div>
      <ShootingStars className="absolute -z-10" />
    </section>
  );
}
