// import { useNavigate } from "react-router-dom";
import Menu from "./menu";
import Banner from "./banner";
import Movies from "./movies";
import Event from "./event";
import Promo from "./promo";
import FooterPolicy from "./FooterPolicy";

function Home() {
   // const navigate = useNavigate();
   return (
      <>
         <header id="header">
            <Menu />
         </header>
         <div className="main-container max-width">
            <Banner />
            <Movies />
            <Event />
            <Promo />
         </div>
         <div className="footer-container">
            <FooterPolicy />
         </div>
      </>
   );
}

export default Home;
