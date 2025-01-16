export default function CallToActionService() {
  return (
    <div className="bg-bg">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-bg mx-6 px-6 py-6 shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#ff914d" />
                <stop offset={1} stopColor="#ff914d" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-4xl text-center lg:mx-0 lg:flex-auto py-10">
            <h2 className="text-balance text-3xl font-semibold text-black sm:text-4xl">
              Haz que tus mascotas sean felices y tu por ellas
            </h2>
            <p className="mt-6 text-lg font-medium text-accent">
              Obtendras un 30% de descuento en tu primer servicio de cuidado de
              tu mascota.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <a
                href="/reservas"
                className="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Reserva aquí
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
