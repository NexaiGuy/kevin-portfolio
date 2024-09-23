"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const Photo = () => {
  return <div className="w-full h-full relative">
    <motion.div>
        <div>
            <Image src="/photo.png" priority quality={100} fill alt="" />
        </div>
    </motion.div>
  </div>;
}

export default Photo