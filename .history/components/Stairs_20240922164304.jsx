import { motion } from "framer-motion";

// variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// calculate the reverse index for staggered delay
const reverseIndex = (index)=> {
  const totalSteps = 6; // number of steps
  return totalSteps - index - 1;
}


const Stairs = () => {
  return 
}

export default Stairs