"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const Photo = () => {
  return <div className="w-full h-full relative">
    <motion.div>
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-bend--lighten">
            <Image 
              src="/assets/photo.png" 
              priority quality={100} 
              fill 
              alt="" 
              className="object-contain" 
            />
        </div>
    </motion.div>
  </div>;
}

export default Photo