import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

export default function Banner() {
   const images = [
      "https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448-xuat-2-min.jpg",
      "https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_241.jpg",
      "https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_1_-min.png",
   ];
   return (
      <Slide>
         <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[0]})` }}></div>
         </div>
         <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[1]})` }}></div>
         </div>
         <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[2]})` }}></div>
         </div>
      </Slide>
   );
}
