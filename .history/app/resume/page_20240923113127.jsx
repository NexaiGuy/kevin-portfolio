"use client"

import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaFigma, 
  FaNodeJs, 
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

// about data
const about = {
  title: 'About me',
  description: "Ullamco veniam elit ad duis Lorem est aliquip deserunt voluptate.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Kevin Blancaflor"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+32) 489 206 638"
    },
    {
      fieldName: "Experience",
      fieldValue: "7+ Years"
    },
    {
      fieldName: "Discord",
      fieldValue: "sl1ckn3ssr3pr3s3nt#8061"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Belgian"
    },
    {
      fieldName: "Email",
      fieldValue: "blancaflorkevin@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Dutch, German, French"
    },
  ]
}

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "Incididunt pariatur mollit ipsum esse veniam quis enim qui mollit aliqua esse officia.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2018 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistent",
      duration: "2019 - 2020",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
    },
    {
      company: "Software Development Firm",
      position: "Junior Developer",
      duration: "2017 - 2018",
    },
  ],
};

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "Incididunt pariatur mollit ipsum esse veniam quis enim qui mollit aliqua esse officia.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021",
    },
    {
      institution: "Tech Insti",
      degree: "Programming Course",
      duration: "2020 - 2021",
    },
  ],
};

const Resume = () => {
  return (
    <div>resume page</div>
  )
}

export default Resume