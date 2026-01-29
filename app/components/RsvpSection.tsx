"use client";

import Reveal from "./Reveal";
import { Check } from "lucide-react";

export default function RsvpSection() {
  return (
    <section className="py-28 bg-white">
      <Reveal>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">
              Confirmación de asistencia sin complicaciones
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Tus invitados confirman su asistencia en segundos desde cualquier
              dispositivo, y vos recibís toda la información ordenada y lista para usar.
            </p>

            <ul className="space-y-3 text-gray-700 mb-10">

              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-rose-400 flex-shrink-0" />
                Formulario simple y rápido
              </li>

              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-rose-400 flex-shrink-0" />
                Respuestas en tiempo real
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-rose-400 flex-shrink-0" />
                Ideal para listas y organización
              </li>

            </ul>
            
            {/*
            <button className="px-6 py-3 rounded-lg bg-rose-300 text-gray-900 hover:bg-rose-200 transition">
              Ver cómo funciona
            </button>
            */}

          </div>
          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/rsvp-section.jpg"
              alt="Confirmación de asistencia desde el celular"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section >
  );
}
