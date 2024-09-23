"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const StairTransition = () => {
  const pathname = usePathname();
  return ( 
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
            <div className="h-screen w-screen fix">stairs</div>
        </div>
      </AnimatePresence> 
    </>
  );
};

export default StairTransition