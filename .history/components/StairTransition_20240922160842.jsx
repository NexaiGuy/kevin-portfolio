"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const StairTransition = () => {
  const pathname = usePathname();
  return ( 
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
            <div></div>
        </div>
      </AnimatePresence> 
    </>
  );
};

export default StairTransition