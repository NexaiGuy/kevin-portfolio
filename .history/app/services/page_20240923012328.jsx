"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from "next/link";

const services = [
  {
    num: "01", 
    title: "Web Development",
    description: 
      "Voluptate dolor eiusmod laborum minim eu in laboris sit.",
    href: "",  
  },
  {
    num: "02", 
    title: "UI/UX Design",
    description: 
      "Voluptate dolor eiusmod laborum minim eu in laboris sit.",
    href: "",  
  },
  {
    num: "03", 
    title: "Logo Design",
    description: 
      "Voluptate dolor eiusmod laborum minim eu in laboris sit.",
    href: "",  
  },
  {
    num: "04", 
    title: "SEO",
    description: 
      "Voluptate dolor eiusmod laborum minim eu in laboris sit.",
    href: "",  
  },
];

import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="min-h-[80vh] fl">
      <div className="container mx-auto">services page</div>
    </section>
  );
};

export default Services