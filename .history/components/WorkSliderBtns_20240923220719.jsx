"client use";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';


const WorkSliderBtns = ({containerStyles, btnStyles, iconsStyles}) => {
  const swiper = useSwiper();
  return ( <div className={containerStyles}>
    <button className={btnStyles} onCl>
        <PiCaretLeftBold className={iconsStyles} />
    </button>
    <button className={btnStyles}>
        <PiCaretRightBold className={iconsStyles} />
    </button>
  </div> );
};

export default WorkSliderBtns