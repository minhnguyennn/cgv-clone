import data from "../Data/DataPromo";
import React from "react";

export default function Promo() {
   return (
      <>
         <div className="home-promotion-card">
            <ul className="promos">
               {data?.length >= 0 &&
                  data?.map((item, index) => {
                     return (
                        <li className={index === 1 ? "col-hd" : "col-ad"}>
                           <div className="format-border">
                              <a
                                 href="https://www.google.com/"
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 <img src={item.src} alt="" />
                              </a>
                           </div>
                        </li>
                     );
                  })}
            </ul>
         </div>
      </>
   );
}
