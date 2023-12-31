import Menu from "./menu";
import Banner from "./banner";
import Movies from "./movies";
import Event from "./event";
import Promo from "./promo";
import FooterPolicy from "./FooterPolicy";
import FooterPermision from "./FooterPermision";

function Home() {
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
            <FooterPermision />
         </div>
      </>
   );
}

export default Home;
