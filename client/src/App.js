import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountInfo from "./Context/AccoutInfo";

function App() {
  const CliId = "238832217543-pg9mla4c0mpf30ddqktuopu6da523ah3.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={CliId} className="App ">
      <Router>
        <AccountInfo>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </AccountInfo>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
