import "bootstrap/dist/css/bootstrap.css";
import dataImages from "../Data/image";
import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderComp from "../componentAddition/SliderComp";
export default function Movies() {
   return (
      <>
         <div className="movies">
            <div className="movies-title">
               <h2>movie selection</h2>
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
