"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const StairTransition = () => {
  const pathname = usePathname();
  return <>W
  <AnimatePresence mode="wait">StairTransition</AnimatePresence>; 
};

export default StairTransition