"use client"

import { AnimatePresence, motion } from "framer-motion";
import { usePathename } from "next/navigation";

const PageTransition = ({children}) => {
    const pahtname = usePathename();
  return <AnimatePresence>
    {children}
    </AnimatePresence>;
};

export default PageTransition;