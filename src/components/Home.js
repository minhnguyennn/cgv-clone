import { useNavigate } from "react-router-dom";
import Menu from "./menu";
import Banner from "./banner";
import Movies from "./movies";

function Home() {
   const navigate = useNavigate();
   return (
      <div className="max-width">
         <Menu />
         <Banner />
         <Movies />
      </div>
   );
}

export default Home;
