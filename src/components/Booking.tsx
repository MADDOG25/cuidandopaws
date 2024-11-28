import { useState } from "react";

export default function Booking() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-10 py-32 mx-auto px-6">
        <div className="flex flex-col gap-y-6 items-center justify-center rounded-xl p-4 shadow-2xl">
          <h1 className="font-semibold text-4xl">Dueño de mascota</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, aut!
          </p>
          <a
            onClick={openModal}
            className="text-lg bg-accent cursor-pointer border rounded-2xl p-3 hover:bg-black hover:text-accent"
            href="#"
          >
            Elige este rol
          </a>
        </div>
        <div className="flex flex-col gap-y-6 items-center justify-center rounded-xl p-4 shadow-2xl">
          <h1 className="font-semibold text-4xl">Cuidador de mascota</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, aut!
          </p>
          <a
            onClick={openModal}
            className="text-lg bg-accent cursor-pointer border rounded-2xl p-3 hover:bg-black hover:text-accent"
            href="#"
          >
            Elige este rol
          </a>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4 bg-black bg-opacity-50">
          <div className="bg-white grid grid-cols-1 gap-y-10 w-full max-w-md rounded-lg p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black hover:text-accent"
            >
              ✕
            </button>
            <h2 className="text-center text-2xl font-bold tracking-tight text-black">
              Registraté o Inicia sesión
            </h2>
            <div className="bg-white p-4 sm:mx-auto sm:w-full sm:max-w-sm">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black"
                  >
                    Correo electronico
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-black"
                    >
                      Contraseña
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-black hover:text-accent"
                      >
                        Olvidaste la contraseña?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-black hover:text-accent shadow-sm hover:bg-black bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Inicia sesión
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-black">
                No eres miembro?{" "}
                <a
                  href="#"
                  className="font-semibold text-black hover:text-accent"
                >
                  Prueba gratis 14 días
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
