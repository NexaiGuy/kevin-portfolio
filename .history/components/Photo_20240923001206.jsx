"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const Photo = () => {
  return <div className="w-full h-full relative">
    <motion.div 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: {delay: 1.4, ease: "easeInOut" },
      }}
    >
        {/* image */}
        <motion.div 
        initial={{opacity: 0}} 
        animate={{
          opacity: 1, 
          transition: {delay: 1, ease: "easeIn" },
        }}
        
        className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
            <Image 
              src="/assets/photo.png" 
              priority quality={100} 
              fill 
              alt="" 
              className="object-contain" 
            />
        </motion.div>

        {/* circle */}
        <motion.svg 
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" 
          fill="transparent"
          viewBox="0 0 506 506"
          xlms=""
        >
          <motion.circle />  
        </motion.svg>
    </motion.div>
  </div>;
}

export default Photo