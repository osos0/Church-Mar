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
import KodasPage from "./pages/KodasPage";
import MeetingPage from "./pages/MeetingPage";
import SundaySchools from "./pages/SundaySchools/SundaySchools";
import Eachclass from "./pages/SundaySchools/eachclass";

function App() {
  return (
    <>
      <Thebrand />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manglia" element={<Manglia />} />
        <Route path="/holybible" element={<Holybible />} />
        <Route path="/kodas" element={<KodasPage />} />
        <Route path="/meeting" element={<MeetingPage />} />
        <Route path="/sundayschools" element={<SundaySchools />} />
        <Route path="/sundayschools/:class" element={<Eachclass />} />
        <Route path="/ourchurch" element={<Ourchurch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
