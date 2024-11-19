import { Routes, Route, BrowserRouter } from "react-router-dom";
import HeaderNav from "../components/layout/HeaderNav";
import Footer from "../components/layout/Footer";
import Home from "../components/Home";
import Booking from "../components/Booking";
import Service from "../components/Service";
import Blog from "../components/Blog";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      {/* HEADER Y NAVEGACION */}
      <HeaderNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reserva" element={<Booking />} />
        <Route path="/servicio" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </BrowserRouter>
  );
}
