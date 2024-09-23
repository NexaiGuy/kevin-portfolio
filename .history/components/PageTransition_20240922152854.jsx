"use client"

import { AnimatePresence } from "framer-motion";
import { usePathename } from "next/na"

const PageTransition = ({children}) => {
  return <AnimatePresence>
    {children}
  </AnimatePresence>;
};

export default PageTransition;