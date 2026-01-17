"use client";

// FeaturesExtraSection.tsx
export default function FeaturesExtraSection() {
  const features = [
    {
      title: "Todo en un solo lugar",
      desc: "Accedé a toda la info de tu evento desde un solo link — simple y elegante.",
      icon: "🎯",
    },
    {
      title: "Diseñado para compartir",
      desc: "Compartí con tus invitados fácilmente, ideal para cualquier tipo de evento.",
      icon: "📤",
    },
    {
      title: "Hecho a medida",
      desc: "Adaptamos cada detalle para que refleje el estilo de tu celebración.",
      icon: "🛠️",
    },
  ];

  return (
    <section className="py-24 bg-[#FFF9F7]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
          ¿Por qué elegirnos?
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((item) => (
            <div key={item.title} className="space-y-4">
              <div className="text-5xl">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm uppercase tracking-wide text-gray-500">
          Sin sorpresas · Sin letras chicas · Entrega en 48 hs
        </p>
      </div>
    </section>
  );
}
