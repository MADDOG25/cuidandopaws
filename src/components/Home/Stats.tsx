const stats = [
  { id: 1, name: "Cuidadores de mascotas", value: "100" },
  { id: 2, name: "Horas trabajadas", value: "+500 hrs" },
  { id: 3, name: "Nuevos usuarios mensualmente", value: "+50" },
];

export default function Stats() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text- font-semibold text-black">{stat.name}</dt>
              <dd className="order-first text-4xl font-semibold tracking-tight text-accent">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
