import "./styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./componants/Navbar";
import Thebrand from "./componants/Thebrand";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Ourchurch from "./pages/Ourchurch";
import Holybible from "./pages/Holybible";
import Footer from "./componants/Footer";
import Kodas from "./pages/Kodas";

function App() {
  return (
    <>
      <Thebrand />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourchurch" element={<Ourchurch />} />
        <Route path="/holybible" element={<Holybible />} />
        <Route path="/kodas" element={<Kodas />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
