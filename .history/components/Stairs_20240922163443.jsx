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
        top: ["100%", "0%"],,
    },
},

// calculate the reverse index for staggered delay
const reverseIndex = (index)=> {
  const totalSteps = 6; // number of steps
  return totalSteps - index - 1;
}


const Stairs = () => {
  return ( 
    <>
      {/* render 6 motion divs, each representing a step of the stairs.
  Each div will have the same animation difined by the stairsAnimation object.
  The delay for each div is calculated dynamically based on it's reversed index, 
  creating a staggered effect with decreasing delay for each subsequent step.
  */}
  {[...Array(6)].map((_, index)=> {
    <motion.div 
         key={index} 
         variants={stairAnimation} 
         initial="initial" 
         animate="animate" 
         exit="exit" 
         transition={{
           duration: 0.4,
           ease: 'easeInOut',
           delay: reverseIndex(index) * 0.1,
         }} 
         className="h-full w-full bg-white"
       />;
     })}
   </>
 );
}

export default Stairs