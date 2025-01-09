import Newsletter from "./Home/Newsletter";

const posts = [
  {
    id: 1,
    title: "Consejos para cuidar a tu perro en casa",
    href: "https://aratiendas.com/blog/hogar/10-consejos-para-el-cuidado-y-bienestar-de-tu-mascota/",
    description:
      "Descubre cómo mantener a tu perro feliz y saludable con consejos prácticos sobre alimentación, ejercicio y actividades diarias que fortalecerán el vínculo con tu mascota.",
    date: "Jan 3, 2025",
    datetime: "2025-01-03",
    category: {
      title: "Cuidado de Mascotas",
      href: "https://aratiendas.com/blog/hogar/10-consejos-para-el-cuidado-y-bienestar-de-tu-mascota/",
    },
    author: {
      name: "Ana Pérez",
      role: "Especialista en Bienestar Animal",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=faces&fit=crop&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Cómo elegir el mejor alimento para tu gato",
    href: "https://www.latercera.com/practico/noticia/consejos-para-escoger-el-mejor-alimento-para-gatos/4WMDLEAJ5BFOVH2UDARSPXDBCE/",
    description:
      "Elige el alimento ideal para tu gato según su edad, tamaño y necesidades específicas. Aprende a leer etiquetas y asegúrate de que tu felino reciba la nutrición que merece.",
    date: "Jan 2, 2025",
    datetime: "2025-01-02",
    category: {
      title: "Nutrición de Mascotas",
      href: "https://www.latercera.com/practico/noticia/consejos-para-escoger-el-mejor-alimento-para-gatos/4WMDLEAJ5BFOVH2UDARSPXDBCE/",
    },
    author: {
      name: "Carlos López",
      role: "Veterinario",
      imageUrl:
        "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?crop=faces&fit=crop&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Los beneficios del ejercicio para tus mascotas",
    href: "https://petsinthesky.com.mx/beneficios-de-ejercitar-a-tu-mascota/#:~:text=Al%20igual%20que%20a%20los,generar%20confianza%20con%20su%20entorno.",
    description:
      "Conoce cómo el ejercicio regular puede mejorar la salud física y mental de tus mascotas. Desde paseos diarios hasta juegos interactivos, hay muchas formas de mantenerlos activos.",
    date: "Jan 1, 2025",
    datetime: "2025-01-01",
    category: {
      title: "Salud y Ejercicio",
      href: "https://petsinthesky.com.mx/beneficios-de-ejercitar-a-tu-mascota/#:~:text=Al%20igual%20que%20a%20los,generar%20confianza%20con%20su%20entorno.",
    },
    author: {
      name: "Lautaro Martínez",
      role: "Adiestrado Canino",
      imageUrl:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=faces&fit=crop&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    title: "Cómo preparar a tu mascota para una visita al veterinario",
    href: "https://veterinaria-gernika.com/como-preparar-a-tu-mascota-para-una-visita-al-veterinario/",
    description:
      "Aprende los pasos para que tu mascota se sienta tranquila y cómoda antes de visitar al veterinario. Consejos útiles para reducir el estrés en perros y gatos.",
    date: "Jan 5, 2025",
    datetime: "2025-01-05",
    category: {
      title: "Cuidado Preventivo",
      href: "https://veterinaria-gernika.com/como-preparar-a-tu-mascota-para-una-visita-al-veterinario/",
    },
    author: {
      name: "Sofía González",
      role: "Veterinaria",
      imageUrl:
        "https://images.unsplash.com/photo-1609942826048-e0db3c3a7d2b?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: 5,
    title: "Juegos caseros para estimular a tu gato",
    href: "https://www.purina.es/cuidados/gatos/comportamiento/accesorios-juegos/juegos-jugar-gato",
    description:
      "Descubre juegos sencillos y económicos para estimular la mente y el cuerpo de tu gato. Mantén a tu felino entretenido y feliz en casa.",
    date: "Jan 4, 2025",
    datetime: "2025-01-04",
    category: {
      title: "Entretenimiento",
      href: "https://www.purina.es/cuidados/gatos/comportamiento/accesorios-juegos/juegos-jugar-gato",
    },
    author: {
      name: "Diego Ramírez",
      role: "Especialista en Comportamiento Felino",
      imageUrl:
        "https://images.unsplash.com/photo-1698244335296-cb1e914b4e00?q=80&w=2606&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: 6,
    title: "La importancia de la socialización temprana en cachorros",
    href: "https://petia.es/blog/socializacion-temprana-en-cachorros/#:~:text=La%20socializaci%C3%B3n%20temprana%20en%20cachorros%20es%20fundamental%20para%20su%20desarrollo,y%20adaptarse%20a%20diferentes%20situaciones.",
    description:
      "La socialización en las primeras etapas de vida de un cachorro es crucial para su desarrollo. Aprende cómo presentarlos a nuevos entornos, personas y otros animales de manera segura.",
    date: "Jan 6, 2025",
    datetime: "2025-01-06",
    category: {
      title: "Adiestramiento",
      href: "https://petia.es/blog/socializacion-temprana-en-cachorros/#:~:text=La%20socializaci%C3%B3n%20temprana%20en%20cachorros%20es%20fundamental%20para%20su%20desarrollo,y%20adaptarse%20a%20diferentes%20situaciones.",
    },
    author: {
      name: "María Torres",
      role: "Entrenadora Profesional",
      imageUrl:
        "https://images.unsplash.com/photo-1733957647138-fe730336e058?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
];

export default function Blog() {
  return (
    <div>
      <div className="bg-bg py-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold text-black sm:text-5xl">
              Blog de Cuidado de Mascotas
            </h2>
            <p className="mt-2 text-lg text-accent">
              Aprende a cuidar mejor de tus mascotas con consejos, guías y
              artículos escritos por expertos en bienestar animal.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time
                    dateTime={post.datetime}
                    className="text-black font-normal"
                  >
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    target="_blank"
                    className="relative z-10 rounded-full bg-black px-3 py-1.5 font-semibold text-accent hover:bg-accent hover:text-black"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold text-black">
                    <a href={post.href} target="_blank">
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm font-normal text-black">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    alt={post.author.name}
                    src={post.author.imageUrl}
                    className="size-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm">
                    <p className="font-semibold text-black">
                      <p>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </p>
                    </p>
                    <p className="text-accent">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
