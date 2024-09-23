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
    stack: [{name: 'Next.js'}, {name: 'Tailwi'}, {name: 'Javascript'}],
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
    image: '/assets/work/thumb1.png',
    live: '',
    github: '',
  },
]

const Work = () => {
  return <div>work</div>;
};

export default Work