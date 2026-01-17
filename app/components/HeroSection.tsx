"use client";

import Section from "./Section";
import Reveal from "./Reveal";

export default function HeroSection() {
  return (
    <Section>
      <div className="flex flex-col items-center text-center min-h-[90vh] justify-center px-6">

        <Reveal>
          <div className="mb-6">
            <span className="block text-sm uppercase tracking-widest text-rose-500">
              Ana Sanchez
            </span>
            <span className="block text-xs tracking-widest text-gray-400">
              Invitaciones digitales
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className=" wedding-card w-full max-w-[900px] aspect-[16/9] rounded-3xl shadow-lg opacity-95 mb-16" />
        </Reveal>

        <Reveal>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6 max-w-2xl">
            La web de tu evento,
            <br />
            <span className="text-rose-400">simple y versátil</span>
          </h1>
        </Reveal>

        <Reveal>
          <p className="text-gray-600 mb-10 max-w-lg">
            Un solo link con toda la información que tus invitados necesitan.
            Diseñado para compartir y recordar.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="#pricing" className="px-8 py-4 rounded-xl bg-rose-300 text-gray-900 hover:bg-rose-200 transition">
              Ver planes
            </a>
            <a href="#" className="px-8 py-4 rounded-xl border border-gray-300 hover:border-gray-400 transition">
              Ver ejemplos
            </a>
          </div>
        </Reveal>

      </div>
    </Section>
  );
}
