"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.4, ease: "easeInOut" },
        }}
        className="relative"
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, ease: "easeIn" },
          }}
          className="w-[80vw] max-w-[320px] md:max-w-[400px] xl:max-w-[525px] aspect-square rounded-full overflow-hidden relative"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-cover"
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="absolute inset-0 w-[80vw] max-w-[320px] md:max-w-[400px] xl:max-w-[525px] aspect-square"
          fill="transparent"
          viewBox="0 0 506 506"
          xlms="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
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
    </div>
  );
};

export default Photo;
