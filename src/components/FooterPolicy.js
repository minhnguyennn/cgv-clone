import dataCustomerService from "../Data/Footer/DataCustomerService";
import dataIntro from "../Data/Footer/DataIntro";
import dataRules from "../Data/Footer/DataRules";
import dataSocial from "../Data/Footer/DataSocial";
import style from "../Styles/footerPolicy.module.css";
import React from "react";

export default function FooterPolicy() {
   const { content, vietnam, border } = style;
   return (
      <>
         <div className={border}>
            <div className={content + " max-width"}>
               <div className={vietnam}>
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
               <div className="cgv-policy">
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
               <div className="cgv-follow-us">
                  <h3>Kết nối với chúng tôi</h3>
                  <ul>
                     {dataSocial?.length &&
                        dataSocial?.map((item) => {
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
               <div className="customer-cgv">
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
