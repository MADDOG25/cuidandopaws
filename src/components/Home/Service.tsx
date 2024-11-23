import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
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
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg grid gap-y-2">
                <h2 className="text-base font-semibold text-accent">
                  Deploy faster
                </h2>
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                  A better workflow
                </p>
                <p className="mt-6 text-lg text-black">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
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
            <img
              alt="Product screenshot"
              src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
