import { Routes, Route, BrowserRouter } from "react-router-dom";
import HeaderNav from "../components/layout/HeaderNav";
import Footer from "../components/layout/Footer";
import Home from "../components/Home";
import Booking from "../components/Booking";
import Service from "../components/Service";
import Blog from "../components/Blog";
import Error from "../pages/Error";
import SEO from "../hooks/SEO";

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
          <Route
            path="/inicio"
            element={
              <>
                <SEO
                  title="Inicio | CuidandoPaws"
                  description="Bienvenido a nuestra web de reservas de servicios"
                  keywords="Cuidado de mascotas, Paseo de perros, Actividades para mascotas, Seguridad para mascotas, Servicios para mascotas, Paseos personalizados, Mascotas felices, Servicios profesionales para mascotas"
                />
                <Home />
              </>
            }
          />
          <Route
            path="/reservas"
            element={
              <>
                <SEO
                  title="Reservas | CuidandoPaws - Paseo y Cuidado de Mascotas"
                  description="Reserva los mejores servicios de cuidado y paseo de mascotas con CuidandoPaws. Tu compañero peludo merece lo mejor. Agenda tu cita ahora."
                  keywords="reservas, cuidado de mascotas, paseo de mascotas, servicios para mascotas, CuidandoPaws, agendar cuidado de mascotas"
                />
                <Booking />
              </>
            }
          />
          <Route
            path="/servicios"
            element={
              <>
                <SEO
                  title="Servicios de Cuidado y Paseo de Mascotas | CuidandoPaws"
                  description="Descubre servicios de cuidado, paseo y diversión para tus mascotas. Profesionales certificados y atención personalizada para tus amigos peludos."
                  keywords="Cuidado de mascotas, Paseo de perros, Actividades para mascotas, Seguridad para mascotas, Servicios para mascotas, Paseos personalizados, Mascotas felices, Servicios profesionales para mascotas"
                />
                <Service />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <SEO
                  title="Blog de Cuidado de Mascotas - Consejos y Guías"
                  description="Aprende a cuidar de tus mascotas con consejos, guías y artículos escritos por expertos en bienestar animal. Explora temas sobre alimentación, ejercicio, y cuidado preventivo."
                  keywords="cuidado de mascotas, consejos para mascotas, alimentación de mascotas, bienestar animal, ejercicio para mascotas, blog de mascotas"
                />
                <Blog />
              </>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>

      {/* FOOTER */}
      <Footer />
    </BrowserRouter>
  );
}
