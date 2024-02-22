import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuAward } from "react-icons/lu";
import alex from "@/public/alex.jpg";
import capstone from "@/public/capstone_pic.jpg";
import contech from "@/public/contech.png";
import veil from "@/public/veil_cover.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer Intern",
    location: "San Jose, CA, USA",
    company: "LEADOPTIK",
    website: "https://www.leadoptik.com/#hero-home",
    description:
      "Developed automation software using Qt with Python/C++ to optimize lens, hardware, and laser characterization processes. Contributed to hardware development, deciding components to use and prototyping. Analyze test data with Python and OpenCV. Designed new UI for medical device prototypes.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Head of Startup Global",
    location: "Singapore",
    company: "NUS Entrepreneurship Society",
    website: "https://nus.campuslabs.com/engage/organization/nus-entrepreneurship-society",
    description:
      "Managed a team of 35 for NES' annual flagship conference, UNICON 2022, hosting 50+ speakers for aspiring entrepreneurs. Directed Operations, Marketing and Sales teams to plan event and double sign-ups from 424 to 829 in 2022.",
      icon: React.createElement(LuAward),
    date: "2021 - 2022",

  },
  {
    title: "Product Manager Intern",
    location: "Singapore",
    company: "SGInnovate",
    website: "https://www.sginnovate.com/",
    description:
      "Designed UI for in-house talent acquisition platform and evaluated features based on user feedback. Programmed Python scripts for talent score evaluation. Crafted a concise manual on using platform for new hires.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Project Coordinator Intern",
    location: "Singapore",
    company: "SGInnovate",
    website: "https://www.sginnovate.com/",
    description:
      "Coordinated Summation Programme, bridging Deep Tech Startups with global students. Collaborated with startup founders, shortlisting around 50 talents from 1200 applicants. Planned updates for in-house talent acquisition platform to enhance user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
] as const;

export const projectsData = [
  {
    title: "Capstone Project (Laser Tag)",
    description:
      "A laser tag game for two, built from scratch, with additional hand gesture detection for special attacks.",
    tags: ["Hardware", "Electronics", "Sensors", "Arduino", "C"],
    imageUrl: capstone,
    link: "https://factual-vicuna-db4.notion.site/Capstone-Project-Laser-Tag-6fd42737817c48d089602dca993e7c79?pvs=23",
  },
  {
    title: "Veil",
    description:
      "Underwent a Double Diamond process to design an AI empowered wedding planning platform to reduce the emotional strain couples face.",
    tags: ["Product Design", "UI/UX", "Figma"],
    imageUrl: veil,
    link: "https://factual-vicuna-db4.notion.site/Veil-Wedding-Planner-35ad15ef045a4ca1aaad3818e2a6a95f?pvs=23",
  },
  {
    title: "ConTech",
    description:
      "A Command Line application for managing computing-related contacts to improve work efficiency.",
    tags: ["Java", "CLI", "Agile Methodology"],
    imageUrl: contech,
    link: "https://factual-vicuna-db4.notion.site/ConTech-CLI-Contact-App-33e46908a9514f3ea793383ebe1448fa?pvs=23",
  },
  {
    title: "Alex Search-&-Rescue Robot",
    description:
      "A remotely controlled search and rescue robot able to map out its surrounding environment to detect survivors and debris.",
    tags: ["Robotics", "Raspberry Pi", "ROS", "Hector SLAM", "LiDAR"],
    imageUrl: alex,
    link: "https://factual-vicuna-db4.notion.site/Alex-Search-Rescue-Robot-ada7a36dcfdd47fbba80b560f88a2f91?pvs=23",
  },
] as const;

export const skillsData = [
  "C",
  "C++",
  "Python",
  "Numpy",
  "Pandas",
  "Matplotlib",
  "CSV",
  "Java",
  "Qt",
  "OpenCV",
  "ROS",
  "SLAM",
  "Verilog",
  "Unity",
  "C#",
  "Figma",
] as const;
