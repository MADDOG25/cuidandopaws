import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export default function Newsletter() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-black">
              Subscribete a nuestra newsletter
            </h2>
            <p className="mt-4 text-lg text-black">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis. Duis tempor incididunt dolore.
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
                className="flex-none rounded-md bg-accent px-3.5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-black hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
              <dt className="mt-4 text-base font-semibold text-accent">
                Articulos semanales
              </dt>
              <dd className="mt-2 text-base text-black">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure
                cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white p-2 ring-1 ring-accent">
                <HandRaisedIcon
                  aria-hidden="true"
                  className="size-6 text-accent"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-accent">
                No spam
              </dt>
              <dd className="mt-2 text-base text-black">
                Officia excepteur ullamco ut sint duis proident non adipisicing.
                Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-accent to-accent opacity-20"
        />
      </div>
    </div>
  );
}