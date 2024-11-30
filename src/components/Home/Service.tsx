import { HeartIcon, HomeIcon, FaceSmileIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Mejor para los dueños de mascotas.",
    description:
      "Los dueños de mascotas tienen la tranquilidad de saber que sus mascotas (y su casa) están cuidadas mientras ellos están fuera.",
    icon: HomeIcon,
  },
  {
    name: "Mejor para las mascotas.",
    description:
      "Las mascotas permanecen felices en casa con un cuidador que les proporciona cuidados cariñosos y compañía.",
    icon: HeartIcon,
  },
  {
    name: "Mejor para los cuidadores.",
    description:
      "Los cuidadores intercambian su tiempo, cuidados y experiencia por interesantes estancias en casa y experiencias de viaje únicas.",
    icon: FaceSmileIcon,
  },
];
export default function Service() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-8 lg:text-center pb-32">
        <h2 className="text-3xl font-semibold text-black">
          Encuentra cuidador y paseador de perros, gatos y otras mascotas
          <br />
          <br />
          Somos un equipo de amantes de las mascotas
          <br />
          <br />
          Nuestra misión es hacer la vida de tu consentido más feliz y la tuya
          más fácil
        </h2>
      </div>

      <div className="overflow-hidden bg-bg py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20">
            <div className="">
              <div className="grid gap-y-4">
                <h2 className="text-base font-semibold text-accent">
                  Cuidamos a tu mascota
                </h2>
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                  Nuestros servicios
                </p>
                <p className="mt-6 text-lg text-black">
                  Somos CuidandoPaws, una comunidad global de amantes de las
                  mascotas con la misión de crear un mundo en el que las
                  mascotas disfruten de las vacaciones de sus dueños tanto como
                  ellos.
                </p>
                <img
                  alt="Product screenshot"
                  src="/primary/pasearperros.webp"
                  width={2432}
                  height={1442}
                  loading="lazy"
                  className="w-[100%] rounded-xl shadow-xl ring-1 ring-accent sm:w-[57rem] md:-ml-4 lg:-ml-0"
                />
                <dl className="mt-10 max-w-xl gap-y-8 grid text-base text-black lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-accent">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute -left-0 top-0 size-8 text-black"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
