//  icons
import {
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
} from "react-icons/fi";

// projects images
import Project1 from "./assets/img/projects/p1.webp";
import Project2 from "./assets/img/projects/p2.webp";
import Project3 from "./assets/img/projects/p3.webp";
import Project4 from "./assets/img/projects/p4.webp";
import Project5 from "./assets/img/projects/p5.webp";
import Project6 from "./assets/img/projects/p6.webp";
import Project7 from "./assets/img/projects/p7.gif";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/redux.png";
import SkillImg6 from "./assets/img/skills/node.webp";
import SkillImg9 from "./assets/img/skills/exp.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/mgdb.png";
import SkillImg10 from "./assets/img/skills/material-ui.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/?hl=en",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/vaibhav123-dev",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/vaibhav-darvekar-9ba9a1217/",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project7,
    name: "Task-Me",
    category: "Web development",
  },
  {
    id: "1",
    image: Project1,
    name: "Quiz Application",
    category: "web development",
  },
  {
    id: "2",
    image: Project2,
    name: "ToDo Application",
    category: "web development",
  },
  {
    id: "3",
    image: Project3,
    name: "Portfolio Website",
    category: "web development",
  },
  {
    id: "4",
    image: Project4,
    name: "Ecommerce Website",
    category: "web development",
  },
  {
    id: "5",
    image: Project5,
    name: "Ecommerce Website",
    category: "web development",
  },
  {
    id: "6",
    image: Project6,
    name: "project name 6",
    category: "web development",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
    name: "HTML5",
  },
  {
    image: SkillImg2,
    name: "CSS",
  },
  {
    image: SkillImg3,
    name: "Javascript",
  },
  {
    image: SkillImg4,
    name: "React Js",
  },
  {
    image: SkillImg5,
    name: "Redux Js",
  },
  {
    image: SkillImg6,
    name: "Node Js",
  },
  {
    image: SkillImg8,
    name: "MongoDb",
  },
  {
    image: SkillImg9,
    name: "Express Js",
  },
  {
    image: SkillImg7,
    name: "GitHub",
  },
  {
    image: SkillImg10,
    name: "Material Ui",
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at vabdarwekar00@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Mumbai, Maharashtra",
    description: "+91-8080282977",
  },
];
