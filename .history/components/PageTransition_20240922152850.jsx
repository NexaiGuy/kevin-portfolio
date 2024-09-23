"use client"

import { AnimatePresence } from "framer-motion";
import { usePathename } from "ne"

const PageTransition = ({children}) => {
  return <AnimatePresence>
    {children}
  </AnimatePresence>;
};

export default PageTransition;