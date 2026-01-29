"use client";

import Section from "./Section";
import Reveal from "./Reveal";

export default function ExperienceSection() {
  return (
    <Section bg="experience-background relative">
      <Reveal>
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6 py-24">
          <h2 className="text-3xl md:text-4xl font-serif text-white">
            Una experiencia pensada para tus invitados
          </h2>

          <p className="text-white leading-relaxed">
            Diseñamos invitaciones digitales que cuidan cada detalle:
            desde la información esencial hasta la forma en que tus invitados
            la descubren. Cada página refleja el estilo de tu celebración,
            con una experiencia clara, versátil y fácil de compartir.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
