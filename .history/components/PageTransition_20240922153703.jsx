"use client"

import { AnimatePresence, motion } from "framer-motion";
import { usePathename } from "next/navigation";

const PageTransition = ({children}) => {
    const pathname = usePathename();
    return <AnimatePresence>

        <div key={pathname}>
            <motion.div initial={{opacity: 1}} animate={{opacity: 0, transition: {delay: 1, duration: 0.4, ease: }}}></div>
            {children}</div>
    </AnimatePresence>;
};

export default PageTransition;