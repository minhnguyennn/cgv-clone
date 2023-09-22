import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FullWidthBgImage from "./FullWidthBgImage";
export default function SliderComp(props) {
   const { data, slidesToShow, slidesToScroll } = props;

   const HandleNextBtn = (props) => {
      const { className, onClick, currentSlide, style, slideCount } = props;
      return (
         <>
            {currentSlide !== Number(slideCount) - Number(slidesToShow) && (
               <div
                  className={className}
                  onClick={onClick}
                  style={{ ...style }}
               />
            )}
         </>
      );
   };

   const HandlePrevBtn = (props) => {
      const { className, onClick, currentSlide, style } = props;
      return (
         <>
            {currentSlide !== 0 && (
               <div
                  className={className}
                  onClick={onClick}
                  style={{ ...style }}
               />
            )}
         </>
      );
   };

   const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: true,
      autoplay: false,
      slidesToShow: Number(slidesToShow),
      slidesToScroll: Number(slidesToScroll),
      nextArrow: <HandleNextBtn />,
      prevArrow: <HandlePrevBtn />,
   };
   return (
      <>
         <Slider {...settings}>
            {data?.length > 0 &&
               data?.map((item) => {
                  return (
                     <>
                        <a
                           href="https://www.google.com/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FullWidthBgImage urlImg={item.src} />
                        </a>
                     </>
                  );
               })}
         </Slider>
      </>
   );
}
