import dataImages from "../DataImage/image";
import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderComp from "../componentAddition/SliderComp";
export default function Event() {
   return (
      <>
         <div className="movies">
            <div className="movies-title">
               <h1>event</h1>
            </div>
            <SliderComp
               data={dataImages}
               autoplay="true"
               slidesToShow="4"
               slidesToScroll="1"
               autoplaySpeed="500"
            />
         </div>
      </>
   );
}
