"use client"

import { AnimatePresence } from "framer-motion";
import { usePathename } from "next/navigation";
motio

const PageTransition = ({children}) => {
  return <AnimatePresence>
    {children}
  </AnimatePresence>;
};

export default PageTransition;