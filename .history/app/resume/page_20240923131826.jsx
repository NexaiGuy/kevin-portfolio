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
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019",
    },
    {
      institution: "Design School",
      degree: "Diploma in Graphic Design",
      duration: "2016- 2018",
    },
    {
      institution: "Community College",
      degree: "Associate Degree in Computer Science",
      duration: "2014 - 2016",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description: "Est do cillum magna irure cupidatat ut laborum ipsum.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger, 
} from "@/components/ui/tooltip";

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }} 

      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px] ">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul>
                    {experience.items.map((item, index)=> {
                      return ( 
                        <li key>
                        <span>{item.duration}</span>
                        <h3>{item.position}</h3>
                        <div>
                          {/* dot */}
                          <span></span>
                          <p>{item.company}</p>
                        </div>
                      </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full">
              about me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume