"use client"

import { AnimatePresence, motion } from "framer-motion";
import { usePathename } from "next/navigation";
motion

const PageTransition = ({children}) => {
  return <AnimatePresence>
    {children}
  </AnimatePresence>;
};

export default PageTransition;