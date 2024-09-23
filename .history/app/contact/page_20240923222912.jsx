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

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { Description } from "@radix-ui/react-dialog";

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
    icon: <FaMapMarker />,
    title: "phone",
    description: "(+32) 489 206 638",
  },
];

const Contact = () => {
  return <div>contact page</div>;
}

export default Contact;