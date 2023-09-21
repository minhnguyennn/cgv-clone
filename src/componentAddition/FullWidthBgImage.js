export default function FullWidthBgImage(props) {
   console.log(props);
   const { urlImg, width, height } = props;
   return (
      <>
         <img src={urlImg} alt="" style={{ width: width, height: height }} />
      </>
   );
}
