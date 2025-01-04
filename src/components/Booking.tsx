import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type dataInputs = {
  email: string;
  password: string;
};

export default function Booking() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<dataInputs>();

  const onSubmit: SubmitHandler<dataInputs> = (data) => {
    console.log(data);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-10 py-32 mx-auto px-6">
        <div className="flex flex-col gap-y-6 py-10 items-center justify-center rounded-xl p-4 shadow-2xl">
          <h1 className="font-semibold text-4xl">Dueño de mascota</h1>
          <p className="text-lg px-4">
            Para padres de mascotas que buscan cuidados durante su ausencia
          </p>
          <a
            onClick={openModal}
            className="text-lg font-semibold bg-accent cursor-pointer border rounded-2xl p-3 hover:bg-black hover:text-accent"
            href="#"
          >
            Elige este rol
          </a>
        </div>
        <div className="flex flex-col gap-y-6 py-10 items-center justify-center rounded-xl p-4 shadow-2xl">
          <h1 className="font-semibold text-4xl">Cuidador de mascota</h1>
          <p className="text-lg px-4">
            Para cuidadores que buscan hogares y mascotas que cuidar
          </p>
          <a
            onClick={openModal}
            className="text-lg font-semibold bg-accent cursor-pointer border rounded-2xl p-3 hover:bg-black hover:text-accent"
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
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm"
                      {...register("email", {
                        required: "El correo es obligatorio",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "El correo no es válido",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-sm error">
                        {errors.email.message}
                      </span>
                    )}
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
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm"
                      {...register("password", {
                        required: "La contraseña es obligatoria",
                        minLength: {
                          value: 8,
                          message:
                            "La contraseña debe tener al menos 8 caracteres",
                        },
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                          message:
                            "La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial",
                        },
                      })}
                    />
                    {errors.password && (
                      <span className="text-sm error">
                        {errors.password.message}
                      </span>
                    )}
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
