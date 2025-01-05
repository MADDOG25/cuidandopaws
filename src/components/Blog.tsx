const posts = [
  {
    id: 1,
    title: "Consejos para cuidar a tu perro en casa",
    href: "/blog/cuidado-perros-en-casa",
    description:
      "Descubre cómo mantener a tu perro feliz y saludable con consejos prácticos sobre alimentación, ejercicio y actividades diarias que fortalecerán el vínculo con tu mascota.",
    date: "Jan 3, 2025",
    datetime: "2025-01-03",
    category: { title: "Cuidado de Mascotas", href: "/blog/cuidado-mascotas" },
    author: {
      name: "Ana Pérez",
      role: "Especialista en Bienestar Animal",
      href: "/autores/ana-perez",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=faces&fit=crop&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Cómo elegir el mejor alimento para tu gato",
    href: "/blog/alimentacion-gatos",
    description:
      "Elige el alimento ideal para tu gato según su edad, tamaño y necesidades específicas. Aprende a leer etiquetas y asegúrate de que tu felino reciba la nutrición que merece.",
    date: "Jan 2, 2025",
    datetime: "2025-01-02",
    category: {
      title: "Nutrición de Mascotas",
      href: "/blog/nutricion-mascotas",
    },
    author: {
      name: "Carlos López",
      role: "Veterinario",
      href: "/autores/carlos-lopez",
      imageUrl:
        "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?crop=faces&fit=crop&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Los beneficios del ejercicio para tus mascotas",
    href: "/blog/beneficios-ejercicio-mascotas",
    description:
      "Conoce cómo el ejercicio regular puede mejorar la salud física y mental de tus mascotas. Desde paseos diarios hasta juegos interactivos, hay muchas formas de mantenerlos activos.",
    date: "Jan 1, 2025",
    datetime: "2025-01-01",
    category: { title: "Salud y Ejercicio", href: "/blog/salud-ejercicio" },
    author: {
      name: "Laura Martínez",
      role: "Adiestradora Canina",
      href: "/autores/laura-martinez",
      imageUrl:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=faces&fit=crop&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    title: "Cómo preparar a tu mascota para una visita al veterinario",
    href: "/blog/preparacion-visita-veterinario",
    description:
      "Aprende los pasos para que tu mascota se sienta tranquila y cómoda antes de visitar al veterinario. Consejos útiles para reducir el estrés en perros y gatos.",
    date: "Jan 5, 2025",
    datetime: "2025-01-05",
    category: { title: "Cuidado Preventivo", href: "/blog/cuidado-preventivo" },
    author: {
      name: "Sofía González",
      role: "Veterinaria",
      href: "/autores/sofia-gonzalez",
      imageUrl:
        "https://images.unsplash.com/photo-1507120410856-1f3d6e63c3a3?crop=faces&fit=crop&w=256&h=256&q=80",
    },
  },
  {
    id: 5,
    title: "Juegos caseros para estimular a tu gato",
    href: "/blog/juegos-caseros-gatos",
    description:
      "Descubre juegos sencillos y económicos para estimular la mente y el cuerpo de tu gato. Mantén a tu felino entretenido y feliz en casa.",
    date: "Jan 4, 2025",
    datetime: "2025-01-04",
    category: { title: "Entretenimiento", href: "/blog/entretenimiento" },
    author: {
      name: "Diego Ramírez",
      role: "Especialista en Comportamiento Felino",
      href: "/autores/diego-ramirez",
      imageUrl:
        "https://images.unsplash.com/photo-1553531888-3dcfa4deaeaf?crop=faces&fit=crop&w=256&h=256&q=80",
    },
  },
  {
    id: 6,
    title: "La importancia de la socialización temprana en cachorros",
    href: "/blog/socializacion-cachorros",
    description:
      "La socialización en las primeras etapas de vida de un cachorro es crucial para su desarrollo. Aprende cómo presentarlos a nuevos entornos, personas y otros animales de manera segura.",
    date: "Jan 6, 2025",
    datetime: "2025-01-06",
    category: { title: "Adiestramiento", href: "/blog/adiestramiento" },
    author: {
      name: "María Torres",
      role: "Entrenadora Profesional",
      href: "/autores/maria-torres",
      imageUrl:
        "https://images.unsplash.com/photo-1562564055-71e051d33c19?crop=faces&fit=crop&w=256&h=256&q=80",
    },
  },
];

export default function Blog() {
  return (
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
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                  className="relative z-10 rounded-full bg-black px-3 py-1.5 font-semibold text-accent hover:bg-accent hover:text-black"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold text-black">
                  <a href={post.href}>
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
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-accent">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
