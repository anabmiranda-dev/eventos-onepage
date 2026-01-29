"use client";

import Reveal from "./Reveal";

const messageEssential = encodeURIComponent(
  'Hola Ana! Quiero consultarte por el plan "Esencial"'
);

const messagePremium = encodeURIComponent(
  'Hola Ana! Quiero consultarte por el plan "Premium"'
);

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Planes simples, sin sorpresas
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Elegí la opción que mejor se adapte a tu evento.
              Todos los planes incluyen diseño cuidado, hosting y acompañamiento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="border rounded-2xl p-10 bg-white">
              <h3 className="text-xl font-semibold mb-2">
                Esencial
              </h3>

              <p className="text-sm text-gray-500 mb-8">
                Ideal para eventos íntimos
              </p>

              <p className="text-4xl font-serif mb-10">
                $25.000
              </p>

              <ul className="space-y-3 text-gray-700 mb-12">
                <li>✔ Página one-page personalizada</li>
                <li>✔ Fecha, lugar y detalles del evento</li>
                <li>✔ Link único para compartir</li>
                <li>✔ Hosting incluido</li>
                <li>✔ Entrega en 48 hs</li>
              </ul>

              <a target="_blank" href={`https://wa.me/5491164540220?text=${messageEssential}`} className="inline-block px-6 py-3 rounded-lg border border-gray-300 hover:border-gray-400 transition">
                Consultar plan
              </a>
            </div>

            <div className="relative border-2 border-rose-300 rounded-2xl p-10 bg-white shadow-xl">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-300 text-gray-900 text-xs tracking-widest uppercase px-4 py-1 rounded-full">
                Más elegido
              </span>

              <h3 className="text-xl font-semibold mb-2">
                Premium
              </h3>

              <p className="text-sm text-gray-500 mb-8">
                Experiencia completa
              </p>

              <p className="text-4xl font-serif mb-10">
                $45.000
              </p>

              <ul className="space-y-3 text-gray-700 mb-12">
                <li>✔ Todo lo del plan Esencial</li>
                <li>✔ Cuenta regresiva</li>
                <li>✔ Galería de fotos</li>
                <li>✔ Confirmación de asistencia</li>
                <li>✔ Código QR para compartir</li>
                <li>✔ Cambios incluidos</li>
              </ul>

              <a target="_blank" href={`https://wa.me/5491164540220?text=${messagePremium}`} className="inline-block px-6 py-3 rounded-lg bg-rose-300 text-gray-900 hover:bg-rose-200 transition">
                Elegir Premium
              </a>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
