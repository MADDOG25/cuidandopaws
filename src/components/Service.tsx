import LogoClouds from "./LogoClouds";

const links = [
  { name: "Adopción responsable", href: "#" },
  { name: "Programas de voluntariado", href: "#" },
  { name: "Nuestros valores", href: "#" },
  { name: "Conoce a nuestros cuidadores", href: "#" },
];
const stats = [
  { name: "Mascotas rescatadas", value: "1,200+" },
  { name: "Cuidadores certificados", value: "50+" },
  { name: "Años de experiencia", value: "10+" },
  { name: "Hogares adoptivos", value: "800+" },
];

export default function Service() {
  return (
    <div className="bg-gray-50 py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-5xl font-bold text-black sm:text-7xl">
            Tu aliado en el cuidado de mascotas
          </h1>
          <p className="mt-8 text-xl text-accent">
            Comprometidos con el bienestar animal, ofrecemos servicios de
            adopción, cuidado temporal, y programas de voluntariado para
            garantizar que cada mascota encuentre un hogar lleno de amor.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-black sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base text-black">{stat.name}</dt>
                <dd className="text-4xl font-bold text-accent">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <LogoClouds />
    </div>
  );
}
