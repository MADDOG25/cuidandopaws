export default function BentoGrid() {
  return (
    <>
      <div className="bg-bg py-40">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base font-semibold text-accent">
            Servicios de cuidado y paseo de mascotas
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold text-black sm:text-5xl">
            Todo lo que necesitas para el bienestar de tus amigos peludos
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                {/* Tarjetas grid */}
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium text-black max-lg:text-center">
                    Cuidados personalizados
                  </p>
                  <p className="mt-2 max-w-lg text-sm text-black max-lg:text-center">
                    Atención especializada para garantizar el confort y
                    seguridad de tus mascotas.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 mt-4 mb-8 sm:px-10">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover object-center rounded-xl"
                      src="https://images.unsplash.com/photo-1680194215886-0f275167dc37?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Cuidado profesional para mascotas pequeñas y grandes"
                      title="Cuidado profesional para mascotas"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-accent lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium text-black max-lg:text-center">
                    Paseos seguros
                  </p>
                  <p className="mt-2 max-w-lg text-sm text-black max-lg:text-center">
                    Paseos llenos de diversión con profesionales certificados
                    que cuidan de cada detalle.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 mt-4 mb-8">
                  <img
                    className="w-full h-full object-cover object-center rounded-xl"
                    src="https://images.unsplash.com/photo-1680075207558-95f5c617556e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                    loading="lazy"
                    alt="Paseos seguros y personalizados para mascotas"
                    title="Paseos seguros para mascotas"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-accent max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium text-black max-lg:text-center">
                    Seguridad garantizada
                  </p>
                  <p className="mt-2 max-w-lg text-sm text-black max-lg:text-center">
                    Sistemas confiables para proteger la salud y bienestar de
                    tus mascotas.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 mb-8">
                  <img
                    className="w-full h-full object-contain rounded-xl"
                    src="https://images.unsplash.com/photo-1622060343259-338c652d9684?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    loading="lazy"
                    alt="Seguridad para mascotas garantizada"
                    title="Seguridad para mascotas"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-accent"></div>
            </div>
            <div className="relative  lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium text-black max-lg:text-center">
                    Diversión asegurada
                  </p>
                  <p className="mt-2 max-w-lg text-sm text-black max-lg:text-center">
                    Actividades recreativas para garantizar la felicidad y
                    bienestar de tus mascotas.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 mt-4 mb-8">
                  <img
                    className="w-full h-full object-cover object-center rounded-xl"
                    src="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    loading="lazy"
                    alt="Diversión asegurada para mascotas"
                    title="Diversión asegurada para mascotas"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-accent"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
