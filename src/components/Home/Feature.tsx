const features = [
  {
    title: "Aire Libre",
    description:
      "Pasar el día jugando con perros en un parque, no suena como trabajo",
    src: "/secondary/nature.svg",
    alt: "imagen de naturaleza",
  },
  {
    title: "Desde tu casa",
    description:
      "Puedes recibir perros en tu casa y cuidarlos durante el día o las 24 hs",
    src: "/secondary/house.svg",
    alt: "imagen de casa",
  },
  {
    title: "Independencia",
    description:
      "Controlas tus horarios y eliges que perros aceptas cuidar o pasear",
    src: "/secondary/time.svg",
    alt: "imagen de independencia",
  },
];

export default function Feature() {
  return (
    <div className="py-28 bg-white">
      <div className="mx-auto w-full">
        {/* Título */}
        <div className="mx-auto max-w-2xl px-8 lg:text-center">
          <h2 className="text-3xl font-semibold text-black">
            Jugar con perros adorables no suena como un trabajo...
          </h2>
        </div>

        {/* Sección de Features */}
        <div className="bg-bg mx-auto mt-28 py-16 w-full">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center overflow-hidden"
              >
                {/* Imagen */}
                <img
                  className="object-contain w-full h-52"
                  src={feature.src}
                  alt={feature.alt}
                />
                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-black">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
