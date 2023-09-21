import { useNavigate } from "react-router-dom";
import Menu from "./menu";
import Banner from "./banner";
import Movies from "./movies";
import Event from "./event";

function Home() {
   const navigate = useNavigate();
   return (
      <div className="max-width">
         <Menu />
         <Banner />
         <Movies />
         <Event />
      </div>
   );
}

export default Home;
