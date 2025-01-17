"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Animated Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.4, ease: "easeInOut" },
        }}
        className="relative flex items-center justify-center"
      >
        {/* Image inside the circle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, ease: "easeIn" },
          }}
          className="relative w-[320px] h-[320px] xl:w-[450px] xl:h-[450px] rounded-full overflow-hidden"
        >
          {/* The image is positioned in the center and contained within the circle */}
          <Image
            src="/assets/photo.png"
            alt="Profile Photo"
            priority
            quality={100}
            fill
            className="object-cover" // Ensures the image fills the container while maintaining its aspect ratio
          />
        </motion.div>

        {/* Rotating SVG circle */}
        <motion.svg
          className="absolute w-[320px] h-[320px] xl:w-[450px] xl:h-[450px]"
          fill="transparent"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="220"
            stroke="#00FF99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: [
                "15 120 25 25",
                "16 25 92 72",
                "4 250 22 22",
              ],
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
    </div>
  );
};

export default Photo;
