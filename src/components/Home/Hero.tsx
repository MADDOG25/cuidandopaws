export default function Hero() {
    return (
      <div className="justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full px-4 mb-20 text-center">
          {/* Logo */}
          <img
            src="/primary/logo-hero.png"
            alt="Logo CuidandoPaws Hero"
            className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          />
  
          {/* Botón */}
          <a
            href="#"
            className="uppercase text-sm sm:text-base md:text-lg font-medium text-white py-4 px-6 rounded-lg bg-accent"
          >
            Comienza Aquí
          </a>
        </div>
      </div>
    );
  }
  