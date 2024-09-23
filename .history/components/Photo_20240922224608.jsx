"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const Photo = () => {
  return <div className="w-full h-full relative">
    <motion.div>
        <div>
            <Image />
        </div>
    </motion.div>
  </div>;
}

export default Photo