import "./styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./componants/Navbar";
import Thebrand from "./componants/Thebrand";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Ourchurch from "./pages/Ourchurch";
import Footer from "./componants/Footer";
import Manglia from "./pages/Manglia";
import Holybible from "./pages/MangliaPages/Holybible";

function App() {
  return (
    <>
      <Thebrand />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourchurch" element={<Ourchurch />} />
        <Route path="/manglia" element={<Manglia />} />
        <Route path="/holybible" element={<Holybible />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
