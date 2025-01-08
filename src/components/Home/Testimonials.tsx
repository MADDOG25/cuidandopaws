export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-bg px-6 py-32 mt-20 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-black ring-1 ring-white sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="grid gap-x-8 gap-y-16 grid-cols-1 lg:grid-cols-3 mx-auto max-w-2xl lg:max-w-6xl">
        <figure>
          <blockquote className="text-center text-lg font-medium text-black">
            <p>
              “Lo mejor de CuidandoPaws es que su personal es siempre servicial,
              educado, no puede hacer lo suficiente por ti..."
            </p>
          </blockquote>
          <figcaption className="mt-8">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1632433796634-e795d19af344?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVqZXIlMjBmZWxpenxlbnwwfHwwfHx8MA%3D%3D"
              className="mx-auto size-16 object-cover rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-medium text-sm text-black">Judith Black</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="font-medium text-sm text-black">hace 2 días</div>
            </div>
          </figcaption>
        </figure>
        <figure>
          <blockquote className="text-center text-lg font-medium text-black">
            <p>
              “Estoy muy contento con CuidandoPaws y acabo de tener mi primera
              estancia en casa de alguien que cuidó de mi perro mientras estaba
              fuera. Sin duda los recomendaría."
            </p>
          </blockquote>
          <figcaption className="mt-8">
            <img
              alt=""
              src="https://plus.unsplash.com/premium_photo-1705508816763-53df9a404064?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tYnJlJTIwZmVsaXp8ZW58MHx8MHx8fDA%3D"
              className="mx-auto size-16 object-cover rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-medium text-sm text-black">John Morgan</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="font-medium text-sm text-black">hace 5 horas</div>
            </div>
          </figcaption>
        </figure>
        <figure>
          <blockquote className="text-center text-lg font-medium text-black">
            <p>
              “Me encanta la plataforma. El proceso funciona muy bien y la
              experiencia de usuario en CuidandoPaws es muy fácil y buena de
              entender"
            </p>
          </blockquote>
          <figcaption className="mt-8">
            <img
              alt=""
              src="https://plus.unsplash.com/premium_photo-1664888035613-a6c75aa15b01?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXVqZXIlMjBmZWxpenxlbnwwfHwwfHx8MA%3D%3D"
              className="mx-auto size-16 object-cover rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-medium text-sm text-black">
                Maria Cáceres
              </div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="font-medium text-sm text-black">hace 1 día</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
