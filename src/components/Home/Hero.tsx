export default function Hero() {
    return (
      <div className="w-full h-full relative">
        {/* Imagen de fondo */}
        <div className="relative">
          <img
            src="/primary/perro-hero.png"
            alt="Perro hero"
            className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh] object-cover mx-auto opacity-70"
          />
        </div>
  
        {/* Contenido superpuesto */}
        <div className="absolute z-10 -top-14 md:-top-28 lg:-top-16 flex flex-col justify-center items-center w-full px-4 text-center">
          {/* Logo */}
          <img
            src="/primary/logo-hero.png"
            alt="Logo CuidandoPaws Hero"
            className="w-[200px] md:w-[500px] lg:w-[600px] object-contain"
          />
  
          {/* Botón */}
          <a
            href="#"
            className="uppercase text-sm sm:text-base md:text-lg font-medium text-white py-4 px-6 rounded-lg bg-accent hover:bg-accent-dark transition-colors"
          >
            Comienza Aquí
          </a>
        </div>
      </div>
    );
  }
  