"client use";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';


const WorkSliderBtns = ({containerStyles, btnStyles, iconsStyles}) => {
  const swiper = useSwiper();
  return ( <div className={containerStyles}>
    <button className={btnStyles}>PiCaretLeftB</button>
  </div> )
}

export default WorkSliderBtns