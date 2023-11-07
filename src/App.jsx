import "./App.css";
import { HomePage } from "./Pages/Home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "./Pages/Login/LoginPage";
import { Register } from "./Pages/Register/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
