import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const CliId = "238832217543-pg9mla4c0mpf30ddqktuopu6da523ah3.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={CliId} className="App ">
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
