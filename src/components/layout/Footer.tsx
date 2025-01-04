export default function Footer() {
  return (
    <footer className="bottom-0 w-full p-4 bg-white border-t border-accent shadow grid md:grid-cols-2 md:gap-x-4 gap-y-4 items-center justify-between md:p-6">
      <span className="text-sm text-black font-semibold sm:text-center">
        © 2024{" "}
        <a href="#" className="hover:underline">
          CuidandoPaws™
        </a>
        . Todos los derechos reservados.
      </span>
      <ul className="flex flex-wrap justify-center items-center mt-3 text-sm font-semibold text-black sm:mt-0">
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Acerca de
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Politica de privacidad
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Licencia
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contacto
          </a>
        </li>
      </ul>
    </footer>
  );
}
