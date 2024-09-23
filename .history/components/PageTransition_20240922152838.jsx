"use client"

import { AnimatePresence } from "framer-motion";
import

const PageTransition = ({children}) => {
  return <AnimatePresence>
    {children}
  </AnimatePresence>;
};

export default PageTransition;