import "./styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./componants/Navbar";
import Thebrand from "./componants/Thebrand";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Ourchurch from "./pages/Ourchurch";
import Footer from "./componants/Footer";

function App() {
  return (
    <>
      <Thebrand />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourchurch" element={<Ourchurch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
