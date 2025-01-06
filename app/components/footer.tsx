import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import type { FC } from "react";

const socials = [
  {
    name: "Email",
    url: "mailto:puneetsharma.001@gmail.com.com",
    logo: EnvelopeSimple,
  },
  {
    name: "GitHub",
    url: "https://github.com/puneetsharma",
    logo: GithubLogo,
  },
  {
    name: "X",
    url: "https://x.com/puneet__sharma",
    logo: XLogo,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/puneetsharma/",
    logo: LinkedinLogo,
  },
];

const Footer: FC = () => {
  return (
    <>
      <footer className="mt-8 flex justify-center">
        <ul className="flex gap-4">
          {socials.map((social, index) => (
            <li key={index}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full"
              >
                <social.logo size={24} />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
};

export default Footer;
