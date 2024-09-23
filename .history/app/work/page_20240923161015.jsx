"use client"

import { motion } from 'framer-motion'
import React, {useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";

import {BsArrowUpRight, BsGithub} from 'react-icons/bs';

import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: '02',
    category: 'fullstack',
    title: 'project 2',
    description: 'Aliqua cillum ullamco laboris labore deserunt magna.',
    stack: [{name: 'Next.js'}, {name: 'Tailwind.css'}, {name: 'Node.js'}],
    image: '/assets/work/thumb1.png',
    live: '',
    github: '',
  },
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description: 'Aliqua cillum ullamco laboris labore deserunt magna.',
    stack: [{name: 'Html 5'}, {name: 'Css 3'}, {name: 'Javascript'}],
    image: '/assets/work/thumb2.png',
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'project 3',
    description: 'Aliqua cillum ullamco laboris labore deserunt magna.',
    stack: [{name: 'Nex.js'}, {name: 'Tailwind.css'}],
    image: '/assets/work/thumb1.png',
    live: '',
    github: '',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return <motion.section initial={{opacity: 0} animate}>
    <div className="container mx-auto">projects</div>
  </motion.section>;
};

export default Work