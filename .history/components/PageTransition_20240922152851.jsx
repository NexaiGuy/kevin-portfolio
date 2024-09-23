"use client"

import { AnimatePresence } from "framer-motion";
import { usePathename } from "next/"

const PageTransition = ({children}) => {
  return <AnimatePresence>
    {children}
  </AnimatePresence>;
};

export default PageTransition;