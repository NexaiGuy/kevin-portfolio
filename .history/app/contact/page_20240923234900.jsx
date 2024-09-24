"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue, 
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const info = [
  {
    icon: <FaPhoneAlt aria-label="Phone Icon" />,
    title: "phone",
    description: "(+32) 489 206 638",
  },
  {
    icon: <FaEnvelope aria-label="Email Icon" />,
    title: "email",
    description: "blancaflorkevin@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt aria-label="Address Icon" />,
    title: "Address",
    description: "Code Corner, Tech Town 1337",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ 
        opacity: 1, 
        transition: { delay: 1.2, duration: 0.4, ease: "easeIn" }, 
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Excepteur et in esse velit laborum.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label>
                  <Input type="text" placeholder="Firstname" />
                </label>
                <label>
                  <Input type="text" placeholder="Lastname" />
                </label>
                <label>
                  <Input type="email" placeholder="Email address" />
                </label>
                <label>
                  <Input type="phone" placeholder="Phone number" />
                </label>
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    <SelectItem value="logo-design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea 
                className="h-[200px]" 
                placeholder="Type your message here."
              />
              {/* button */}
              <Button size="md" className="max-w-[10rem]">Send message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index)=> {
                return ( 
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272C] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );  
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;