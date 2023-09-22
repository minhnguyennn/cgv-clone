import DataEvent from "../Data/DataEvent";
import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderComp from "../componentAddition/SliderComp";
export default function Event() {
   return (
      <>
         <div className="event">
            <div className="event-title">
               <h2>event</h2>
            </div>
            <ul className="toggle-tabs">
               <li className="left"><span>Thành viên CGV</span></li>
               <li className="right"><span>Tin Mới & Ưu Đãi</span></li>
            </ul>
            <SliderComp data={DataEvent} slidesToShow="4" slidesToScroll="1" />
         </div>
      </>
   );
}
