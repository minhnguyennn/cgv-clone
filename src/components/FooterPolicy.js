import dataCustomerService from "../Data/Footer/DataCustomerService";
import dataIntro from "../Data/Footer/DataIntro";
import dataRules from "../Data/Footer/DataRules";
import dataSocial from "../Data/Footer/DataSocial";
import style from "../Styles/footerPolicy.module.css";
import React from "react";

export default function FooterPolicy() {
   const { permision, content, border, facebook, youtube, instagram, zalo } =
      style;
   const takeClassName = (index) => {
      let className;
      switch (index) {
         case 0:
            className = facebook;
            break;
         case 1:
            className = youtube;
            break;
         case 2:
            className = instagram;
            break;
         case 3:
            className = zalo;
            break;
         default:
            break;
      }
      return className;
   };
   return (
      <>
         <div className={border}>
            <div className={content + " max-width"}>
               <div>
                  <h3>CGV Việt Nam</h3>
                  <ul>
                     {dataIntro?.length &&
                        dataIntro?.map((item) => {
                           return (
                              <li>
                                 <a
                                    href="https://www.google.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                    {item.title}
                                 </a>
                              </li>
                           );
                        })}
                  </ul>
               </div>
               <div>
                  <h3>Điều khoản sử dụng</h3>
                  <ul>
                     {dataRules?.length &&
                        dataRules?.map((item) => {
                           return (
                              <li>
                                 <a
                                    href="https://www.google.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                    {item.title}
                                 </a>
                              </li>
                           );
                        })}
                  </ul>
               </div>
               <div>
                  <h3>Kết nối với chúng tôi</h3>
                  <ul className={style["ul-social"]}>
                     {dataSocial?.length &&
                        dataSocial?.map((item, index) => {
                           return (
                              <li>
                                 <a
                                    href="https://www.google.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={takeClassName(index)}
                                 >
                                    {item.title}
                                 </a>
                              </li>
                           );
                        })}
                  </ul>
                  <div className={permision}>
                     <a
                        href="https://www.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        permision
                     </a>
                  </div>
               </div>
               <div>
                  <h3>Chăm sóc khách hàng</h3>
                  <ul>
                     {dataCustomerService?.length &&
                        dataCustomerService?.map((item) => {
                           return (
                              <li>
                                 <a
                                    href="https://www.google.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                    {item.title}
                                 </a>
                              </li>
                           );
                        })}
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
}
