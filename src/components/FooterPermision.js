import data from "../Data/Footer/DataPer";
import style from "../Styles/FooterPermision.module.css";
import React from "react";

export default function FooterPermision() {
   const { container, logo, content } = style;

   return (
      <>
         <div className={container + " max-width"}>
            <div className={logo}>logo</div>
            <div className={content}>
               <h3>CÔNG TY TNHH CJ CGV VIỆT NAM</h3>
               {data?.length >= 0 &&
                  data?.map((item) => {
                     return <p>{item.title}</p>;
                  })}
            </div>
         </div>
      </>
   );
}
