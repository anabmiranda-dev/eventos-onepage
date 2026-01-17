"use client";

import Section from "@/app/components/Section";
import SectionHeader from "@/app/components/SectionHeader";
import Reveal from "./Reveal";
import { Calendar, MapPin, Check  } from "lucide-react";


const features = [
  { icon: Calendar, title: "Cuenta regresiva", desc: "Mostrá cuánto falta para el gran día" },
  { icon: MapPin, title: "Ubicación", desc: "Mapa interactivo del evento" },
  { icon: Check, title: "Confirmación", desc: "Asistencia en segundos" },
];

export default function FeaturesSection() {
  return (
    <Section id="experience" bg="bg-rose-50">
      <SectionHeader eyebrow="Qué incluye" title="Todo lo que incluye tu página" subtitle="Una experiencia clara, elegante y pensada para compartir"
      />
      <div className="grid md:grid-cols-3 gap-8">

        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.1}>
            <div className="rounded-xl p-8 text-center">
              <f.icon className="w-5 h-5 text-gray-700 mx-auto mb-2" /> { /* Aqui renderiza el icon*/}
              <h3 className="font-semibold mb-2 text-rose-400">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          </Reveal>
        ))}

      </div>
    </Section>
  );
}
