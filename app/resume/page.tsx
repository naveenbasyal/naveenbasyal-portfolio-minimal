import type { Metadata } from "next";
import WorkExperienceItem from "../components/work-experience-item";
import EducationItem from "../components/education-item";
import VolunteeringItem from "../components/volunteer-item";
import { ShootingStars } from "app/components/ui/shooting-stars";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "A summary of Puneet Sharma’s skills, education, and professional experience as a Full-Stack Developer, including projects and achievements.",
  openGraph: {
    type: "article",
    url: `https://puneetsharma.vercel.app/resume`,
    title: "Puneet Sharma’s Resume",
    siteName: "Puneet Sharma's Portfolio",
    description:
      "Explore Puneet Sharma's resume, showcasing his professional experience, technical skills, and projects.",
    images: [
      {
        url: `https://cdn.puneetsharma.com/open-graph/resume.png`,
        width: 1200,
        height: 630,
        alt: "Puneet Sharma's Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Puneet Sharma's Resume",
    description:
      "Check out Puneet Sharma’s Full-Stack Developer resume, showcasing his skills and professional achievements.",
    images: ["https://cdn.puneetsharma.com/open-graph/resume.png"],
    creator: "@puneetsharma",
    creatorId: "@puneetsharma",
    site: "@puneetsharma",
    siteId: "@puneetsharma",
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
      role: "Backend Developer",
      period: "Jun 2024 - Present",
      location: "Remote",
      workType: "Full-time",
      website: "https://hausvalley.com",
      technologies: [
        "Adonis Js",
        "PostgreSQL",
      ],
      responsibilities: [
        "Designed and developed user interfaces for various service offerings for different websites.",
        "Worked in backend to implement overall functionality of the application.",
      ],
      duration: calculateDuration("2024-07-01", "Present"),
    },
    {
      company: "Future Finders",
      role: "Python Developer (Intern)",
      period: "Jul 2022 - Aug 2022",
      location: "Mohali, Punjab",
      website: "https://futurefinders.in/",
      technologies: ["Python", "Django", "PostgreSQL"],
      responsibilities: [
        "Developed a web application to manage some of the company's internal processes.",
        "Implemented a database to store user data and task details.",
      ],
      duration: calculateDuration("2022-07-01", "2022-08-30"),
    },
    {
      company: "Solitaire Infosys",
      role: "Android Developer (Intern)",
      period: "Jun 2022 - Jul 2022",
      location: "Mohali, Punjab",
      website: "https://solitaireinfosystems.com/",
      technologies: ["Java", "Android Studio", "SQLite"],
      responsibilities: [
        "Developed a mobile application for a client to calculate their daily expenses and savings.",
        "Implemented a local database to store user data and task details.",
      ],
      duration: calculateDuration("2022-06-01", "2022-07-31"),
    },
    {
      company: "Solitaire Infosys",
      role: "Android Developer (Intern)",
      period: "Jun 2020 - Jul 2020",
      location: "Mohali, Punjab",
      website: "https://solitaireinfosystems.com/",
      technologies: ["Java", "Android Studio", "SQLite"],
      responsibilities: [
        "Developed a mobile application for a client to manage their daily expenses and savings(Trackmypocket).",
        "Implemented a local database to store user data and task details.",
      ],
      duration: calculateDuration("2020-06-01", "2020-07-31"),
    },
  ],
  education: [
    {
      institution: "Chandigarh Group of Colleges Mohali, Punjab",
      logo: "https://cdn.puneetsharma.com/logos/cgc.png",
      degree: "B.Tech in Computer Science Engineering",
      period: "2021 - 2024",
      location: "Mohali, Punjab",
    },
    {
      institution: "Govt. Polytechnic College Hisar, Haryana",
      logo: "https://cdn.puneetsharma.com/logos/gphisar.png",
      degree: "Polytechnic Diploma in Computer Engineering",
      period: "2019 - 2021",
      location: "Hisar, Haryana",
    },
  ],
  projects: [
    {
      name: "HausValley Backend",
      description:
        "Developed a unified backend for the customer app, partner app, and official website, leveraging AdonisJS and PostgreSQL.",
      technologies: ["AdonisJS", "PostgreSQL", "Lucid ORM"],
      link: "https://apidev.hausvalley.com/",
    },
    {
      name: "Codex AI Assistant",
      description:
        "An AI-powered chat assistant integrating Google Gemini API, providing real-time responses to user queries.",
      technologies: ["Express.js", "Vite", "Google Gemini API"],
      link: "https://codex-chat-gpt-clone.vercel.app",
    },
    {
      name: "Youtube Clone",
      description:
        "A responsive clone of the Youtube homepage, built using React and Tailwind CSS.",
      technologies: ["Rapid API", "Tailwind CSS", "React"],
      link: "https://youtube-clone-by-puneet.netlify.app/",
    },
    {
      name: "Portfolio Website",
      description:
        "Personal portfolio showcasing projects, skills, and professional achievements with a focus on responsive design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://puneetsharma.netlify.app",
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
