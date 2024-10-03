"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.4, ease: "easeInOut" },
        }}
      >
        {/* Image inside the circle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, ease: "easeIn" },
          }}
          className="w-[320px] h-[320px] xl:w-[420px] xl:h-[420px] mix-blend-lighten relative rounded-full overflow-hidden"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            alt=""
            layout="fill"
            className="object-cover"
            style={{ objectPosition: 'center' }} // Ensures the image stays centered
          />
        </motion.div>

        {/* Rotating circle */}
        <motion.svg
          className="absolute inset-0 w-[320px] h-[320px] xl:w-[450px] xl:h-[450px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xlms="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="240"
            cy="260"
            r="230"
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
