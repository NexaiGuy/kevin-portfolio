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
    num: '01',
    category: 'frontend',
    title: 
  }
]

const Work = () => {
  return <div>work</div>;
};

export default Work