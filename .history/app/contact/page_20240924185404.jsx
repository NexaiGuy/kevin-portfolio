"use client"

import { useState } from "react"; // Import useState
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com"; // Import EmailJS

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
    icon: <FaPhoneAlt />,
    title: "phone",
    description: "(+32) 489 206 638",
  },
  {
    icon: <FaEnvelope />,
    title: "email",
    description: "blancaflorkevin@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Code Corner, Tech Town 1337",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_iuixfgs", // Replace with your EmailJS service ID
        "template_x7wu53u", // Replace with your EmailJS template ID
        formData,
        "9c9iL8I3ljyw4Eib1" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ 
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, 
    }}
    className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Receive a response within a few days.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  type="text" 
                  name="firstname" 
                  placeholder="Firstname" 
                  onChange={handleChange} 
                  required 
                />
                <Input 
                  type="text" 
                  name="lastname" 
                  placeholder="Lastname" 
                  onChange={handleChange} 
                  required 
                />
                <Input 
                  type="email" 
                  name="email" 
                  placeholder="Email address" 
                  onChange={handleChange} 
                  required 
                />
                <Input 
                  type="text" 
                  name="phone" 
                  placeholder="Phone number" 
                  onChange={handleChange} 
                />
              </div>
              {/* select */}
              <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea 
                className="h-[200px]" 
                placeholder="Type your message here." 
                name="message"
                onChange={handleChange}
              />
              {/* btn */}
              <Button type="submit" size="md" className="max-w-40">Send message</Button>
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
