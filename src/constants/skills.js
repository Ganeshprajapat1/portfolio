import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiRedux,
  SiAxios,
  SiFirebase,
  SiVite,
  SiMysql,
  SiFramer,
  SiNpm,
} from "react-icons/si";

import {
  FaLaptopCode,
  FaTools,
  FaServer,
} from "react-icons/fa";

import { MdOutlineStorage } from "react-icons/md";

export const SKILLS = [
  {
    title: "Frontend",
    icon: FaLaptopCode,
    skills: [
      {
        name: "React.js",
        icon: FaReact,
      },
      {
        name: "JavaScript (ES6+)",
        icon: SiJavascript,
      },
      {
        name: "HTML5",
        icon: FaHtml5,
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
      },
      {
        name: "Bootstrap",
        icon: FaBootstrap,
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
      },
    ],
  },
  {
    title: "State Management",
    icon: MdOutlineStorage,
    skills: [
      {
        name: "Redux",
        icon: SiRedux,
      },
      {
        name: "Redux Toolkit",
        icon: SiRedux,
      },
    ],
  },
  {
    title: "Backend Integration",
    icon: FaServer,
    skills: [
      {
        name: "Firebase",
        icon: SiFirebase,
      },
      {
        name: "REST API",
        icon: SiAxios,
      },
      {
        name: "Axios",
        icon: SiAxios,
      },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: FaTools,
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "GitHub",
        icon: FaGithub,
      },
      {
        name: "Vite",
        icon: SiVite,
      },
      {
        name: "npm",
        icon: SiNpm,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
    ],
  },
];