import "./App.css";
import NowShowing from "./components/NowShowing";
import Home from "./components/Home";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
   return (
      <div className="main">
         <Router>
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route exact path="/now-showing" element={<NowShowing />} />
               <Route exact path="/read" element={<Read />} />
               <Route path="/update" element={<Update />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
