"client use";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';


const WorkSliderBtns = ({containerStyles, btnStyles, iconsStyles}) => {
  const swiper = useSwiper();
  return ( <div className={containerStyles}>
    <button className={btnStyles}>
        <PiCaretLeftBold clas />
    </button>
    <button className={btnStyles}>
        <PiCaretRightBold clas />
    </button>
  </div> );
};

export default WorkSliderBtns