import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import HeaderNav from "../components/layout/HeaderNav";
import Footer from "../components/layout/Footer";
import Home from "../components/Home";
import Booking from "../components/Booking";
import Service from "../components/Service";
import Blog from "../components/Blog";
import Error from "../pages/Error";

export default function MyRoutes() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      {/* HEADER Y NAVEGACION */}
      <HeaderNav />

      <section>
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/reservas" element={<Booking />} />
          <Route path="/servicios" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>

      {/* FOOTER */}
      <Footer />
    </BrowserRouter>
  );
}
