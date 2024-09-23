"use client"

import { AnimatePresence, motion } from "framer-motion";
import { usePathename } from "next/navigation";

const PageTransition = ({children}) => {
    const pathname = usePathename();
    return <AnimatePresence>

        <div key={pathname}>
            <d
            {children}</div>
    </AnimatePresence>;
};

export default PageTransition;