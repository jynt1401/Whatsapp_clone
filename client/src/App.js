import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountInfo, { AccountContext } from "./Context/AccoutInfo";
import { useContext, useEffect } from "react";
import Call from "./pages/Chat/Call";



function App() {
  const CliId =
    "238832217543-pg9mla4c0mpf30ddqktuopu6da523ah3.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={CliId} className="App ">
      <Router>
        <AccountInfo>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/call" element={<Call />} />
          </Routes>
        </AccountInfo>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
