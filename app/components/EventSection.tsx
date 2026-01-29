"use client";

import Reveal from "./Reveal";
import { Calendar, MapPin, Check } from "lucide-react";

export default function EventSection() {
  return (
    <section className="py-28 bg-[#FAFAF9]">
      <Reveal>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">


          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/event-section.jpg"
              alt="Evento elegante"
              className="w-full h-full object-cover"
            />
          </div>



          <div>

            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">
              Una experiencia simple y elegante
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Tus invitados acceden desde cualquier dispositivo a toda la información del evento,
              confirmación de asistencia y detalles importantes, en un entorno claro y cuidado.
            </p>


            <ul className="space-y-3 text-gray-700">

              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-rose-400 flex-shrink-0" />
                Link único para compartir
              </li>


              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-rose-400 flex-shrink-0" />
                Confirmación de asistencia
              </li>


              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-rose-400 flex-shrink-0" />
                Información clara y ordenada
              </li>

            </ul>
          </div>


        </div>
      </Reveal>
    </section>
  );
}
