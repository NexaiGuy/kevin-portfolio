"use client"

import { AnimatePresence } from "framer-motion";
import { use}

const PageTransition = ({children}) => {
  return <AnimatePresence>
    {children}
  </AnimatePresence>;
};

export default PageTransition;