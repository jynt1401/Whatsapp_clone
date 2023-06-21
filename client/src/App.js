import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { GoogleOAuthProvider } from "@react-oauth/google";




function App() {
  return (
    <div className="App">
       <Router>
     
     
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/auth" element={<Auth />} />
         

         
        </Routes>
      </div>
    </Router>
     
    </div>
  );
}

export default App;
