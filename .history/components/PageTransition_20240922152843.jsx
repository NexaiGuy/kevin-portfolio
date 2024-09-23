"use client"

import { AnimatePresence } from "framer-motion";
import { usePa}

const PageTransition = ({children}) => {
  return <AnimatePresence>
    {children}
  </AnimatePresence>;
};

export default PageTransition;