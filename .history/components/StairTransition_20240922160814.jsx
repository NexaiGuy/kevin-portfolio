"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const StairTransition = () => {
  const pathname = usePathname();
  return ( 
    <>
      <AnimatePresence mode="wait">
        <
      </AnimatePresence> 
    </>
  );
};

export default StairTransition