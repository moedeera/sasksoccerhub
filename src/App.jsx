import "./App.css";
import { HomePage } from "./Pages/Home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "./Pages/Login/LoginPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
