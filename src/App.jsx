import { Link, NavLink, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import bgMain from "./asset/bgMain.jpg";
import Button from "./Components/Button/Button";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Layout from "./layout";

function App() {
  return (
    <>
      {/* <div className="auth">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </div> */}
      <Navbar />
      <Layout/>
      <Footer />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
    </>
  );
}

export default App;
