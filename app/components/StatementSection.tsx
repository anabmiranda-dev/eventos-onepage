"use client";

import Section from "./Section";
import Reveal from "./Reveal";

export default function StatementSection() {
  return (
    <Section bg="statement-background relative">
      <Reveal>
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6 py-24">
          <h2 className="text-3xl md:text-3xl font-serif text-white">
            Todo en un solo lugar
          </h2>
          <h2 className="text-3xl md:text-3xl font-serif text-white">
            Diseñado para compartir
          </h2>
          <h2 className="text-3xl md:text-3xl font-serif text-white">
            Hecho a medida de tu evento
          </h2>

          <div className="w-16 h-px bg-rose-200 mx-auto my-12" />

          <p className="text-sm uppercase tracking-widest text-white">
            Sin sorpresas · Sin letras chicas · Entrega en 48 hs
          </p>

        </div>

      </Reveal>
    </Section>
  );
}
