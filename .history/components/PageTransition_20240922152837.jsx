"use client"

import { AnimatePresence } from "framer-motion";
im

const PageTransition = ({children}) => {
  return <AnimatePresence>
    {children}
  </AnimatePresence>;
};

export default PageTransition;