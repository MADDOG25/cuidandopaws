import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export default function Newsletter() {
  return (
    <div className="relative isolate overflow-hidden bg-bg pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-black">
              ¡Subscríbete a nuestra newsletter!
            </h2>
            <p className="mt-4 text-lg font-medium text-black">
              Únete a nuestra comunidad y recibe contenido exclusivo cada
              semana. Aprende sobre el cuidado de mascotas, historias
              inspiradoras y tips prácticos directamente en tu correo.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Correo electronico
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Correo electronico"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-accent placeholder:text-black focus:outline-2 focus:-outline-offset-2 focus:outline-accent sm:text-sm"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Subscribete
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white p-2 ring-1 ring-accent">
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="size-6 text-accent"
                />
              </div>
              <dt className="mt-4 text-base font-bold text-accent">
                Articulos semanales
              </dt>
              <dd className="mt-2 text-base font-medium text-black">
                Recibe artículos diseñados para ayudarte a ser el mejor cuidador
                de tus mascotas. Consejos, tendencias y mucho más.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white p-2 ring-1 ring-accent">
                <HandRaisedIcon
                  aria-hidden="true"
                  className="size-6 text-accent"
                />
              </div>
              <dt className="mt-4 text-base font-bold text-accent">No spam</dt>
              <dd className="mt-2 text-base font-medium text-black">
                Prometemos enviarte solo contenido valioso. Sin distracciones,
                solo información útil para ti y tus mascotas.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
