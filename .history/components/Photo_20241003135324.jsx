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
        
        className="w-[320px] h-[320px] xl:w-[525px] xl:h-[525px] mix-blend-lighten absolute rounded-full overflow-hidden">
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
          xlms="http://www.w3.org/2000/svg"
        >
          <motion.circle 
            cx="260" 
            cy="255" 
            r="241" 
            stroke="#00FF99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
            }}
          />  
        </motion.svg>
    </motion.div>
  </div>;
}

export default Photo