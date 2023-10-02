import style from "../Styles/NowShowing.module.css";
import data from "../Data/DataNowShowing";

export default function NowShowing() {
   let {
      container,
      header,
      headerLeft,
      headerRight,
      girdContainer,
      gridItem,
      img,
      title,
      type,
      hour,
      start,
   } = style;
   return (
      <>
         <div className={container}>
            <div className={header}>
               <div className={headerLeft}>Phim dang chieu</div>
               <div className={headerRight}>Phim sap chieu</div>
            </div>
            <div className={girdContainer}>
               {data?.length > 0 &&
                  data?.map((item) => {
                     return (
                        <>
                           <div className={gridItem}>
                              <div className={img}>
                                 <img src={item.src} alt={item.alt} />
                              </div>
                              <div className={title}>{item.title}</div>
                              <div className={type}>
                                 <span>The loai:</span>
                                 item.type
                              </div>
                              <div className={hour}>
                                 <span>Thoi luong:</span>
                                 item.hour
                              </div>
                              <div className={start}>
                                 <span>Khoi chieu:</span>
                                 item.start
                              </div>
                           </div>
                        </>
                     );
                  })}
            </div>
         </div>
      </>
   );
}
