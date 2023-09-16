import { useNavigate } from "react-router-dom";
function Home() {
   const navigate = useNavigate();
   return (
      <div className="main">
         <h2 className="main-header">React Crud Operations</h2>
         <button onClick={() => navigate("/update")}>Update page</button>
         <button onClick={() => navigate("/create")}>Create page</button>
         <button onClick={() => navigate("/read")}>Read page</button>
      </div>
   );
}

export default Home;
